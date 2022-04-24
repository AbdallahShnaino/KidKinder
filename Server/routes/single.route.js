const express = require('express')
const singleRouter = express.Router()
const path = require('path')
singleRouter.use(express.static(path.join(__dirname ,'../../Client' )))

singleRouter.get('/',(req, res)=>{
    res.status(200).render('single' , {title:"Single"})
})
singleRouter.get('/*' , (req,res)=>{
    res.status(404).render('notFound' , {title:"404"})
})

module.exports = singleRouter