const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/sample', {
    useNewUrlParser: true,
    user: 'mongoadmin',
    pass: 'secret'
})
    .then(() => console.log('Connected successfully'))
    .catch(() => console.log('Not connected'))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World Baby'
    })
})

app.listen(port, () => {
    console.log('App running')
})