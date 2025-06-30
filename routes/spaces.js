const express = require('express');
const router = express.Router();
const { getUserSpaces } = require('../controllers/spacesController');
const requireStoryblokToken = require('../middlewares/requireStoryblokToken');

router.get('/', requireStoryblokToken, getUserSpaces);

module.exports = router;
