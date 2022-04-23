const express = require('express')
const teamRouter = express.Router()
teamRouter.get('',(req , res)=>{
    res.status(200).render('team' , {title:"Teachers"})
})

module.exports = teamRouter