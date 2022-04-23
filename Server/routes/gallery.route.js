const express = require('express')
const galleryRouter = express.Router()

galleryRouter.get('' , (req,res)=>{
    res.status(200).render('gallery' , {title:"Gallery"})
})
module.exports = galleryRouter