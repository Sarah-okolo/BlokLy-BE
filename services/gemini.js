const axios = require('axios');

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const API_KEY = process.env.GEMINI_API_KEY;

async function generateNameAndDesc(spaces = []) {
  const context = spaces.map(space => `- ${space.name} (region: ${space.region}, plan: ${space.plan})`).join('\n');

  const prompt = `
You are an AI assistant that helps generate a website name and description based on related Storyblok space metadata.

Spaces:
${context}

Generate a suitable name and a short, compelling description for this website.
Return it in this format:
Name: <site name>
Description: <site description>
`;

  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    const textResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const nameMatch = textResponse.match(/Name:\s*(.*)/i);
    const descMatch = textResponse.match(/Description:\s*(.*)/i);

    return {
      name: nameMatch?.[1]?.trim() || 'Untitled Site',
      description: descMatch?.[1]?.trim() || 'A modern website created based on your theme.',
    };
  } catch (err) {
    console.error('Error generating name/description:', err.response?.data || err.message);
    throw new Error('Failed to generate name and description');
  }
}

module.exports = { generateNameAndDesc };