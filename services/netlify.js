const path = require('path');
const fs = require('fs-extra');
const archiver = require('archiver');

let execa; // will be dynamically assigned
let NetlifyAPI; // will be dynamically assigned
let netlify; // instance

(async () => {
  // Dynamically import both ESM modules
  ({ execa } = await import('execa'));
  ({ NetlifyAPI } = await import('netlify'));

  const NETLIFY_AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN;
  netlify = new NetlifyAPI(NETLIFY_AUTH_TOKEN);

  // Optional test
  const { stdout } = await execa('echo', ['hello']);
  console.log(stdout);
})();

async function zipDirectory(sourceDir, outZipPath) {
  const output = fs.createWriteStream(outZipPath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  return new Promise((resolve, reject) => {
    archive.directory(sourceDir, false).on('error', reject).pipe(output);
    output.on('close', resolve);
    archive.finalize();
  });
}

async function deployToNetlify({ siteName, projectPath }) {
  try {
    if (!execa || !netlify) {
      throw new Error(
        '`execa` or `netlify` not initialized. Make sure the top-level async setup ran before calling this function.'
      );
    }

    console.log(`🗂️ Zipping ${projectPath}...`);
    const zipPath = path.join(projectPath, 'deploy.zip');
    await zipDirectory(projectPath, zipPath);

    console.log('🌐 Creating Netlify site and deploying...');
    const site = await netlify.createSite({ body: { name: `${siteName}-${Date.now()}` } });
    const siteId = site.id;

    const { stdout } = await execa('npx', [
      'netlify',
      'deploy',
      '--dir', projectPath,
      '--prod',
      '--auth', process.env.NETLIFY_AUTH_TOKEN,
      '--message', 'Auto-deploy via BlokLy',
      '--site', siteId,
    ]);

    console.log(stdout);

    const urlMatch = stdout.match(/https:\/\/[^\s]+\.netlify\.app/);
    if (urlMatch) {
      const deployedUrl = urlMatch[0];
      console.log('✅ Deployed successfully:', deployedUrl);
      return deployedUrl;
    } else {
      throw new Error('Could not extract deployed URL from Netlify output.');
    }
  } catch (err) {
    console.error('[Netlify] Deployment failed:', err.message);
    if (err.body) {
      console.error('Details:', err.body);
    }
    throw new Error('Netlify deployment failed.');
  }
}

module.exports = { deployToNetlify };