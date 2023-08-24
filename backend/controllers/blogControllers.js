const Blog = require('../models/Blog');

exports.createPost = async (req, res) => {
    try {
        const {
            title,
            blogText,
        } = req.body;

        const newPost = await Blog.create({
            title: title,
            blogText: blogText
        })

        return res.json(newPost)
    }
    catch (error) {
        console.log(error)
    }
}