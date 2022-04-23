const express = require('express')
const classRouter = express.Router()

classRouter.get('',(req,res)=>{
    res.status(200).render('class', {title:"Classes"} )
})

module.exports = classRouter