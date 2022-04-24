const express = require('express')
const homeRoute = express.Router()
const path = require('path')
homeRoute.use(express.static(path.join(__dirname ,'../../Client' )))

homeRoute.get('/' , (req , res) => {
    res.status(200).render('index' , {title:"Home"})
})
homeRoute.get('/*' , (req,res)=>{
    res.status(404).render('notFound' , {title:"404"})
})
module.exports = homeRoute