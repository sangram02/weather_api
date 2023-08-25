const express = require('express');
const app = express();
const hbs = require('hbs');

const port = 3000;
const hostname = '0.0.0.0';

app.set('view engine','hbs')
app.use(express.static("./Static"))
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('error',{
        errorMsg : "Oops!! Page Not Found"
    });
})
app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
