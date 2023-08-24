const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    blogText: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
})

module.exports = mongoose.model('Blog', BlogSchema)