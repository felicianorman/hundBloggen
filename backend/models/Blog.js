const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    blogText: {
        type: String
    }
})

module.exports = mongoose.model('Blog', BlogSchema)