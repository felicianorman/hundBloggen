const express = require('express');
const router = express.Router();
const { newUser, getAllUsers } = require('../controllers/userControllers')

router.post('/', newUser)
router.get('/', getAllUsers)

module.exports = router;