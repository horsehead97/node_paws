const express = require('express')

const app=express()

app.set('view engine', 'ejs')

app.listen(3000)

app.get('/',(req,res)=>{
    //res.send('<p>Home Page</p>')
    //res.sendFile('./views/index.html', {root:__dirname})
    res.render('index')
})
app.get('/about',(req,res)=>{
    //res.send('<p>About Page</p>')
    //res.sendFile('./views/about.html', {root:__dirname})
    res.render('about')
})
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about')
app.get('/create',(req,res)=>{
    //res.send('<p>About Page</p>')
    //res.sendFile('./views/about.html', {root:__dirname})
    res.render('about')
})
app.use((req,res)=>{
    //res.status(404).sendFile('./views/404.html', {root:__dirname})
    res.status(404).render('404')



})
