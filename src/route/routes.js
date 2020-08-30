const express = require('express')
const router = express.Router()
const User = require('./models/User.model')

router.get('/', async (req, res) => {
    const users = await User.find()
    res.send(users)
})

router.post('/', async (req, res) => {
    const {firstname, lastname} = req.body
    const user = new User({
        firstname,
        lastname
    })

    await user.save()
    res.send(user)
})

module.exports = router