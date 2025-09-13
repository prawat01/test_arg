//import express from 'express'
const express = require('express')

const app = express()

app.get('/', (reg, res) => {
    res.send('Hi node fontend')
})

app.listen(3000,() => {
    console.log('server run on http://localhost:3000')
})