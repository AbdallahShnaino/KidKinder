const express = require('express')
const classRouter = express.Router()
const path = require('path')
classRouter.use(express.static(path.join(__dirname ,'../../Client' )))

classRouter.get('/',(req,res)=>{
    res.status(200).render('class', {title:"Classes"} )
})

classRouter.get('/*' , (req,res)=>{
    res.status(404).render('notFound' , {title:"404"})
})

module.exports = classRouter