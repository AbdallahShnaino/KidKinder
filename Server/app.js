const hbs = require('hbs')
const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.set('view engine','hbs')
app.set('views' , path.join(__dirname , '/view'))
app.use(express.static(path.join(__dirname ,'../Client' )))
hbs.registerPartials(path.join(__dirname , '/view/partials'))


// routers
const homeRouter = require('./routes/home.route')
const aboutRouter = require('./routes/about.route')
const classRouter = require('./routes/class.route')
const teamRouter = require('./routes/team.route')
const galleryRouter = require('./routes/gallery.route')
const contactRouter = require('./routes/contact.route')
const blogRouter = require('./routes/blog.route')
const singleRouter = require('./routes/single.route')

app.use('/home' , homeRouter)
app.use('/about', aboutRouter)
app.use('/classes',classRouter)
app.use('/teachers',teamRouter)
app.use('/gallery',galleryRouter)
app.use('/contact',contactRouter)
app.use('/blog',blogRouter)
app.use('/single',singleRouter)
app.use(express.static(path.join(__dirname ,'../Client' )))
app.get('/*' , (req,res)=>{
    res.status(404).render('notFound' , {title:"404"})
})

app.listen(PORT , ()=>{
    console.log("Server start listning ......")
})
