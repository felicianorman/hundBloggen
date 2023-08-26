const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/blogControllers')

router.post('/', createPost)
router.get('/', getAllPosts)
router.get('/:blogId', getPostById)
router.put('/:blogId', updatePost)
router.delete('/:blogId', deletePost)



module.exports = router;