const express = require('express')
const galleryRouter = express.Router()
const path = require('path')
galleryRouter.use(express.static(path.join(__dirname ,'../../Client' )))

galleryRouter.get('/' , (req,res)=>{
    res.status(200).render('gallery' , {title:"Gallery"})
})

galleryRouter.get('/*' , (req,res)=>{
    res.status(404).render('notFound' , {title:"404"})
})
module.exports = galleryRouter