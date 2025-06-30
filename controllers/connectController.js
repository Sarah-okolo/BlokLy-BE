const { validateStoryblokPAT } = require('../services/storyblokService');

const connectStoryblokAccount = async (req, res) => {
  const { pat } = req.body;

  if (!pat) {
    return res.status(400).json({ error: 'PAT is required' });
  }

  try {
    const isValid = await validateStoryblokPAT(pat);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid Storyblok PAT' });
    }

    // Store PAT in secure, signed, HTTP-only cookie
    res.cookie('storyblok_pat', pat, {
      httpOnly: true,
      signed: true,
      secure: true,
      sameSite: 'none', // Required for cross-origin requests
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    });

    res.json({ message: 'Storyblok account connected successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { connectStoryblokAccount };
