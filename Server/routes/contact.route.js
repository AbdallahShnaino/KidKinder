const express = require('express')
const contactRouter = express.Router()
const path = require('path')
contactRouter.use(express.static(path.join(__dirname ,'../../Client' )))

contactRouter.get('/',( req , res )=>{
    res.status(200).render('contact' , {title:"Contact"})
})

contactRouter.get('/*' , (req,res)=>{
    res.status(404).render('notFound' , {title:"404"})
})

module.exports = contactRouter