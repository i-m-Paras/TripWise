
const express= require('express');
const bodyparser=require('body-parser');
const app= express();
const path= require('path');

const GuiderList=require('./routes/GuiderList');
const Login=require('./routes/Login');
const Register=require('./routes/Register');
const Profile=require('./routes/Profile');
// const mongoConnect=require('./database');

app.use('/static',express.static('static'));

app.use(bodyparser.urlencoded({extended : false}));

app.use(GuiderList);
app.use(Login);
app.use(Register);
app.use(Profile);

app.get('/home',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    });

app.use((req,res,next)=>{
    res.status(404).send('<html><body><h1>Page not found</h1></body></html>');
});

// mongoConnect(client =>{
//     // console.log(client);
// });
app.listen(3000);