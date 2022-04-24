const express = require('express')
const blogRouter = express.Router()
const path = require('path')
blogRouter.use(express.static(path.join(__dirname ,'../../Client' )))

blogRouter.get('/',(req, res)=>{
    res.status(200).render('blog', {title:"Blog"})
})

blogRouter.get('/*' , (req,res)=>{
    res.status(404).render('notFound' , {title:"404"})
})

module.exports = blogRouter