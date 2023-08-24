const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    dogName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    breed: {
        type: String
    },
    age: {
        type: Number,
        required: true
    }
    
})

module.exports = mongoose.model('User', UserSchema)