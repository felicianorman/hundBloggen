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