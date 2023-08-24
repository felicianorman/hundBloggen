const User = require('../models/User')

exports.newUser = async (req, res) => {
    try {
        const {
            username,
            dogName,
            email,
            breed,
            age
        } = req.body;

        const newUser = await User.create({
            username: username,
            dogName: dogName,
            email: email,
            breed: breed,
            age: age
        })

        return res.json(newUser)
    }
    catch (error) {
        console.log(error)
    }
}

