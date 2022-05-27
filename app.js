const express = require('express')
const morgan = require('morgan')

const app=express()

app.set('view engine', 'ejs')

app.listen(3000)

//middleware and static files
app.use(express.static('public'))
// app.use((req,res,next)=>{
//     console.log('new request made:')
//     console.log('host: ',req.hostname)
//     console.log('path: ',req.path)
//     console.log('method: ',req.method)
//     next()
// })
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Riley finds weebie', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Lexi finds bones', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to bark at rabbits', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title: 'Home', blogs})
})
app.get('/about',(req,res)=>{
    res.render('about',{ title: 'About' })
})
app.use((req,res,next)=>{
    console.log('In the next middleware')
    next()
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{ title: 'Create a new blog' })
})
app.use((req,res)=>{
    res.status(404).render('404',{ title: '404' })
})
