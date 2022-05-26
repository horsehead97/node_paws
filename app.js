const express = require('express')

const app=express()

app.set('view engine', 'ejs')

app.listen(3000)

app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Riley finds weebie', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Lexi finds bones', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to bark at rabbits', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title: 'Home', blogs})
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/create',(req,res)=>{
    res.render('about')
})
app.use((req,res)=>{
    res.status(404).render('404')
})
