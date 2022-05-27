const express = require('express')
const morgan = require('morgan')
const mongoose=require('mongoose')
const { result } = require('lodash')
const blogRoutes=require('./routes/blogRoutes')



const app=express()

//connect to mongodb
const dbURI='mongodb+srv://rileydog:changeme@cluster0.jyqpvvc.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err))
app.set('view engine', 'ejs')



//middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
// app.use((req,res,next)=>{
//     console.log('new request made:')
//     console.log('host: ',req.hostname)
//     console.log('path: ',req.path)
//     console.log('method: ',req.method)
//     next()
// })
app.use(morgan('dev'))

// //mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//     const blog=new Blog({
//         title: 'new blog2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     })

//     blog.save()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             res.send(err)
//         })
// })    

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('6290f0df000435f6bd73846a')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })    

//regular routes
app.get('/',(req,res)=>{
    res.redirect('/blogs')
//     const blogs = [
//         {title: 'Riley finds weebie', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'Lexi finds bones', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'How to bark at rabbits', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//       ];
//     res.render('index',{title: 'Home', blogs})
})
app.get('/about',(req,res)=>{
    res.render('about',{ title: 'About' })
})
//blog routes
app.use('/blogs',blogRoutes)


app.use((req,res,next)=>{
    console.log('In the next middleware')
    next()
})


