const express = require('express')
const aboutRouter = express.Router()
const path = require('path')

aboutRouter.use(express.static(path.join(__dirname ,'../../Client' )))

aboutRouter.get('/' , (req , res)=>{
    return res.status(200).render('about' , {title:"About"})
})

aboutRouter.get('/*' , (req , res)=>{
    return res.status(404).render('notFound' , {title:"404"})
})



module.exports = aboutRouter