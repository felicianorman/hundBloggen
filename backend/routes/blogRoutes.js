const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/blogControllers')

router.post('/', createPost)

module.exports = router;