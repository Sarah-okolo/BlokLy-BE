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
You are to generate a fully functional, production-ready **static** React app using the following project details.

Project Theme: ${project.theme}
Project Name: ${project.name}
Description: ${project.description}

Each "space" is a content brief and should influence the site's structure and components.

Spaces: ${project.spaces.map((space, i) => `\n\nSpace ${i + 1}:\n${JSON.stringify(space, null, 2)}`).join('')}

Your output must satisfy the following:

📁 General
- Use functional React components
- Use Tailwind CSS (ensure full setup: tailwind.config.js, postcss.config.js, import in index.css, etc.)
- Generate a valid package.json with scripts:
  - "start": "vite"
  - "build": "vite build"
  - "serve": "vite preview" (for local testing)
- Use Vite as the build tool (assume \`npm create vite@latest\` with React + JavaScript template)
- Create the index.html file at the root, with proper mount point and linked script from Vite

🌍 Routing
- Use \`react-router-dom\` for client-side routing
- Include at least:
  - \`src/pages/Home.jsx\` — homepage
  - \`src/pages/NotFound.jsx\` — 404 page
  - 1–2 other meaningful pages based on the content
- Setup \`src/App.jsx\` with appropriate routes
- Ensure all pages are functional and linked correctly

⚙️ Netlify Support
- Add a valid \`netlify.toml\`:
  - \`[build]\` block with \`publish = "dist"\` and \`command = "npm run build"\`
- Add \`public/_redirects\` with: \`/* /index.html 200\`

🔨 Build System
- All necessary project files must be present
- Do not omit config files like \`vite.config.js\`, \`tailwind.config.js\`, \`index.html\`, etc.
- Include all setup required for Tailwind CSS to work with Vite and React

📝 Output Instructions
- Output each file in a separate code block
- Each code block should contain only one file
- Important! Inside each code block, start with a single-line comment on the **first line** containing the filename (e.g. \`// src/pages/Home.jsx\`)
- Make sure the filename is the first line INSIDE the code block
- Do not include any other explanations or text between code blocks
- For files like \`_redirects\`, place them under \`public/_redirects\` and include them in plain code blocks
- Ensure the output includes an \`index.html\` file at the root of the app folder, with a proper root div and the Vite-expected script tag
- The output must be a complete, deployable React app with all necessary files and configurations
- Ensure the site is fully functional, and as visually appealing as possible
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
    const line = lines[i];

    // Detect start or end of code block
    if (line.trim().startsWith('```')) {
      capturing = !capturing;

      // Closing code block
      if (!capturing && currentFile && currentContent.length) {
        fileBlocks.push({
          filePath: currentFile,
          content: currentContent.join('\n'),
        });

        // Reset
        currentContent = [];
        currentFile = null;
      }

      continue;
    }

    // Inside code block
    if (capturing) {
      if (!currentFile) {
        // First line inside the code block should be: // path/to/file.ext
        const trimmed = line.trim();
        const match = trimmed.match(/^\/\/\s*(.+)$/);
        if (match) {
          currentFile = match[1].trim();
        } else {
          // If the first line isn't a valid filename, skip this block
          capturing = false;
          currentContent = [];
          currentFile = null;
        }
      } else {
        currentContent.push(line); // Preserve original indentation
      }
    }
  }

  // Write all the captured files
  for (const { filePath, content } of fileBlocks) {
    const fullPath = path.join(outputDir, filePath);
    await fs.ensureDir(path.dirname(fullPath));
    await fs.writeFile(fullPath, content);
  }

  return fileBlocks.length;
}


module.exports = { generateNextApp };