const express = require('express');
const router = express.Router();
const { generateNameAndDesc } = require('../services/gemini');
const { generateNextApp } = require('../services/geminiAppGenerator');
const { deployToNetlify } = require('../services/netlify');

router.post('/generate', async (req, res) => {
  const project = req.body;

  // Validate required fields
  if (!project.theme || !project.spaces) {
    return res.status(400).json({ error: 'Theme and spaces are required.' });
  }

  try {
    // Step 1: Fill in missing name/description using Gemini
    if (!project.name || !project.description) {
      const sectionNames = project.spaces;
      const { name, description } = await generateNameAndDesc(sectionNames);
      project.name = project.name || name;
      project.description = project.description || description;
      console.log('✨✨Generated name:', project.name, '🚀Generated desc:', project.description);
    }

    // Step 2: Generate code with gemini
    const { outputDir } = await generateNextApp(project);
    console.log('💚App generation completed💚')

    // Step 3: Deploy to Netlify
    const siteUrl = await deployToNetlify({
      siteName: project.name,
      projectPath: outputDir
    });
    console.log('🚀 Site deployed successfully to Netlify:', siteUrl);

    // // Step 4: Save to DB
    // await getDB().collection('projects').insertOne({
    //   ...project,
    //   url: siteUrl,
    //   createdAt: new Date(),
    // });

    // Done!
    res.status(200).json({ 
      id: project.id || null,
      name: project.name,
      url: siteUrl, 
    });

  } catch (err) {
    console.error('Project generation failed:', err);
    res.status(500).json({ error: 'Something went wrong while generating the site.' });
  }
});

module.exports = router;