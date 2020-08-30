const express = require('express')
const mongoose = require('mongoose')
const app = express()
const api = require('./route/routes')

const port = process.env.PORT || 3000


mongoose.
    connect(process.env.DATABASE_URI) //Since I called my image Name 
    .then(() => {
        app.use(express.json())
        app.use('/api', api)
        console.log('Connected to Database')
    })
    .catch(() => console.log('Not Connected'))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World Baby'
    })
})

app.listen(port, () => {
    console.log('App running on ', port)
})