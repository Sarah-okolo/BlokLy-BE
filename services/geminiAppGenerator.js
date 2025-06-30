const fs = require('fs-extra');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { v4: uuidv4 } = require('uuid');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash-001" });

async function generateNextApp(project) {
  const projectId = uuidv4();
  const outputDir = path.join(__dirname, '../generated', projectId);
  await fs.ensureDir(outputDir);

  const prompt = buildPrompt(project);

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const codeZip = response.text();
    console.log('✨ Raw Gemini response:\n', codeZip);

    const fileCount = await writeFilesFromResponse(codeZip, outputDir);
    if (fileCount === 0) {
      console.error('[Gemini] No files were generated. Possible malformed response.');
    }

    console.log(`[Gemini] Generated Next.js app in ${outputDir}`);
    return { outputDir, projectId, fileCount };
  } catch (error) {
    console.error('[Gemini] Initial generation failed. Attempting fix...');

    try {
      const retryPrompt = `
The previous response failed. Please re-generate the full Next.js project again and ensure:
- All required imports are included
- There are no syntax errors
- The structure is deployable
Original Prompt: ${prompt}
      `;

      const retryResult = await model.generateContent(retryPrompt);
      const retryCode = await retryResult.response.text();
      const fileCount = await writeFilesFromResponse(retryCode, outputDir);

      return { outputDir, projectId, fileCount };
    } catch (finalError) {
      console.error('[Gemini] Recovery attempt failed:', finalError.message);
      throw new Error('Code generation failed and could not be recovered.');
    }
  }
}

function buildPrompt(project) {
  return `
You are to generate a fully functional, production-ready **static** Next.js app using the following project details.

Project Theme: ${project.theme}
Project Name: ${project.name}
Description: ${project.description}

Each "space" is a content brief and should influence the site's structure and components.

Spaces: ${project.spaces.map((space, i) => `\n\nSpace ${i + 1}:\n${JSON.stringify(space, null, 2)}`).join('')}

Your output must satisfy the following:

📁 General
- Use functional React components
- Use Tailwind CSS (ensure full setup: config, import in globals.css, etc.)
- Generate a valid package.json with scripts:
  - "dev": "next dev"
  - "build": "next build && next export"
  - "start": "serve out" (if serve is needed, add to dependencies)
- Add next.config.js with: output: 'export
- Create the index.html file and link a script path to the index.js file

🌍 Routing
- Include at least:
  - \`pages/index.js\` — homepage
  - \`pages/404.js\` — custom 404 page
  - 1–2 other meaningful pages based on the content
- Avoid dynamic SSR routes (like \`getServerSideProps\`)

⚙️ Netlify Support
- Add a valid \`netlify.toml\`:
  - \`[build]\` block with \`publish = "out"\` and \`command = "npm run build"\`
- Add \`public/_redirects\` with: \`/* /index.html 200\`

🔨 Build System
- Assume this is generated and deployed automatically, so all critical files **must be present**
- Do not omit required files like \`index.html\` (ensure export works)
- Do not leave out config files

📝 Output Instructions
- Output each file in a separate code blocks
- Each code block should contain only one file
- Important! Inside each code block start with a single line comment on the first line containing the filename (e.g. // pages/index.js). 
- Make sure the filename is the first line INSIDE the code block
- Ensure the filename is not placed outside the code block.
- Do not include any other explanations or text between code blocks
- For files like \`_redirects\`, place them under \`public/_redirects\` and include them in plain code blocks
- Ensure the output includes an \`index.html\` file at the root of the app folder
- In the \`index.html\`, include a \`<script src="pages/index.js"></script>\` tag or equivalent, so Netlify knows how to start the app
- Ensure the output is a complete, deployable Next.js app with all necessary files and configurations
`;
}

// Improved parser to handle markdown format and extract filenames and contents
async function writeFilesFromResponse(responseText, outputDir) {
  const fileBlocks = [];
  const lines = responseText.split('\n');

  let capturing = false;
  let currentContent = [];
  let currentFile = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Start of code block (e.g. ``` or ```javascript)
    if (line.startsWith('```')) {
      capturing = !capturing;

      // When starting, reset buffers
      if (capturing) {
        currentContent = [];
        currentFile = null;
      } else if (currentFile && currentContent.length) {
        // When ending, push the file
        fileBlocks.push({
          filePath: currentFile,
          content: currentContent.join('\n'),
        });
      }

      continue;
    }

    if (capturing) {
      if (!currentFile && line.startsWith('//')) {
        const match = line.match(/^\/\/\s*(.+)$/);
        if (match) {
          currentFile = match[1].trim();
          continue; // skip filename line
        }
      }

      if (currentFile) {
        currentContent.push(lines[i]); // preserve original indentation
      }
    }
  }

  // Final flush in case of unclosed block
  if (capturing && currentFile && currentContent.length) {
    fileBlocks.push({
      filePath: currentFile,
      content: currentContent.join('\n'),
    });
  }

  // Write files
  for (const { filePath, content } of fileBlocks) {
    const fullPath = path.join(outputDir, filePath);
    await fs.ensureDir(path.dirname(fullPath));
    await fs.writeFile(fullPath, content);
  }

  return fileBlocks.length;
}


module.exports = { generateNextApp };