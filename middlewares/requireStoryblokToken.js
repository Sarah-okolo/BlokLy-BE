const requireStoryblokToken = (req, res, next) => {
  const pat = req.signedCookies.storyblok_pat;

  if (!pat) {
    return res.status(401).json({ error: 'Storyblok PAT is missing or expired' });
  }

  req.storyblokToken = pat;
  next();
};

module.exports = requireStoryblokToken;
