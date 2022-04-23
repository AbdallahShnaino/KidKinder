const express = require('express')
const contactRouter = express.Router()

contactRouter.get('',( req , res )=>{
    res.status(200).render('contact' , {title:"Contact"})
})

module.exports = contactRouter