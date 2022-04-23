const express = require('express')
const singleRouter = express.Router()

singleRouter.get('',(req, res)=>{
    res.status(200).render('single' , {title:"Single"})
})

module.exports = singleRouter