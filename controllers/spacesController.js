const { fetchUserSpaces } = require('../services/storyblokService');

const getUserSpaces = async (req, res) => {
  try {
    const pat = req.storyblokToken;
    console.log('Fetching Storyblok spaces with PAT:', pat);
    const spaces = await fetchUserSpaces(pat);
    res.json(spaces);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch Storyblok spaces' });
  }
};

module.exports = { getUserSpaces };
