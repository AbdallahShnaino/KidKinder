const express = require('express')
const teamRouter = express.Router()
const path = require('path')
const teachers = [
    { teacherName:"Mohammed",
     teacherPostion:"Music Teacher",
     facebookURL:"www.facebook/mohammed",  
     twitterURL:"www.twitter/mohammed",  
     linkedInkURL:"www.linkedInk/mohammed"
    },
    { teacherName:"Ahmed",
    teacherPostion:"Math Teacher",
    facebookURL:"www.facebook/Ahmed",  
    twitterURL:"www.twitter/Ahmed",  
    linkedInkURL:"www.linkedInk/Ahmed"
   },
   { teacherName:"Salah",
   teacherPostion:"Computer Teacher",
   facebookURL:"www.facebook/Salah",  
   twitterURL:"www.twitter/Salah",  
   linkedInkURL:"www.linkedInk/Salah"
  },
]

teamRouter.use(express.static(path.join(__dirname ,'../../Client' )))

teamRouter.get('/',(req , res)=>{
    res.status(200).render('team' , {title:"Teachers"})
})

teamRouter.get('/*' , (req,res)=>{
     res.status(404).render('notFound' , {title:"404"})
})

teamRouter.get('/data',(req , res)=>{
    res.status(200).json(teachers)
})

teamRouter.get('/dataX',(req , res)=>{
    let id = +req.query.id
    if(!id){
      return res.status(404).render('notFound' , {title:"404"})
    }
    return res.status(200).json(teachers[id])
})


module.exports = teamRouter