const path = require('path');
const fs = require('fs-extra');
const archiver = require('archiver');
const { execa } = require('execa');
const { NetlifyAPI } = require('netlify');

const NETLIFY_AUTH_TOKEN = 'nfp_ezPHa76CMQgioRqVLLq4upX4brB6EQ8X133f'
;
const netlify = new NetlifyAPI(NETLIFY_AUTH_TOKEN);

async function zipDirectory(sourceDir, outZipPath) {
  const output = fs.createWriteStream(outZipPath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  return new Promise((resolve, reject) => {
    archive.directory(sourceDir, false).on('error', reject).pipe(output);
    output.on('close', resolve);
    archive.finalize();
  });
}

async function deployToNetlify({ siteName = 'bubbly',  projectPath = '/home/sahra/BlokLy-BE/generated/90aaf70e-56a5-4685-b001-132df962f8e4' }) {
  try {
    console.log(`🗂️ Zipping ${projectPath}...`);
    const zipPath = path.join(projectPath, 'deploy.zip');
    await zipDirectory(projectPath, zipPath);

    console.log('🌐 Creating Netlify site and deploying...');

    // Create a new site with the specified name
    const site = await netlify.createSite({ body: { name: `${siteName}-${Date.now()}` } });
    const siteId = site.id;

    // Run Netlify deploy CLI with the newly created site
    const { stdout } = await execa('npx', [
      'netlify',
      'deploy',
      '--dir', projectPath,
      '--prod',
      '--auth', NETLIFY_AUTH_TOKEN,
      '--message', 'Auto-deploy via BlokLy',
      '--site', siteId
    ]);

    console.log(stdout);

    // Try to extract the URL from CLI output
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

if (require.main === module) {
  (async () => {
    try {
      await deployToNetlify({});
    } catch (err) {
      process.exit(1);
    }
  })();
}
