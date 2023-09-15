const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/blogControllers')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
    cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
     cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
      }
  });

const upload = multer({ storage: storage })


router.post('/', upload.single('blogImg'), createPost)
router.get('/', getAllPosts)
router.get('/:blogId', getPostById)
router.put('/:blogId', updatePost)
router.delete('/:blogId', deletePost)



module.exports = router;