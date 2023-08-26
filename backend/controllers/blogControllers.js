const Blog = require('../models/Blog');

exports.createPost = async (req, res) => {
    try {
        const {
            title,
            blogText,
            userId
        } = req.body;

        const newPost = await Blog.create({
            title: title,
            blogText: blogText,
            userId: userId
        })

        return res.json(newPost)
    }
    catch (error) {
        console.log(error)
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const bookings = await Blog.find()

        return res.json(bookings)
    }
    catch (error){
        console.log(error)
    }
}

exports.getPostById = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        const blog = await Blog.findById(blogId)

        return res.json(blog)
    }
    catch{
        console.log(error)
    }
}

exports.updatePost = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        const { title, blogText } = req.body;
    
        const postToUpdate = await Blog.findById(blogId);
    
        if (title) postToUpdate.title = title;
        if (blogText) postToUpdate.blogText = blogText;
    
        const response = await postToUpdate.save();
        console.log(response)
    
        return res.json(postToUpdate)
    }
    catch {
        console.log(error)
    }
  
}

exports.deletePost = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        const postToDelete = await Blog.findById(blogId);

        if(!postToDelete) {
            return res.json({message: 'This blog post does not exist'})
        } else {
            await postToDelete.deleteOne()
          
        }

    }
    catch (error){
        console.log(error)

    }
}