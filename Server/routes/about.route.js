const express = require('express')
const aboutRouter = express.Router()

aboutRouter.get('' , (req , res)=>{
    res.status(200).render('about' , {title:"About"})
})
module.exports = aboutRouter