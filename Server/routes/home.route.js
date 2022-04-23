const express = require('express')
const homeRoute = express.Router()

homeRoute.get('' , (req , res) => {
    res.status(200).render('index' , {title:"Home"})
})

module.exports = homeRoute