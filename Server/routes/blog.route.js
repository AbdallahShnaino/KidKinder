const express = require('express')
const blogRouter = express.Router()

blogRouter.get('',(req, res)=>{
    res.status(200).render('blog', {title:"Blog"})
})

module.exports = blogRouter