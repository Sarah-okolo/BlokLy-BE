const express = require('express');
const router = express.Router();
const { connectStoryblokAccount } = require('../controllers/connectController');

router.post('/', connectStoryblokAccount);

module.exports = router;
