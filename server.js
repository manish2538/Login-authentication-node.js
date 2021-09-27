const express = require("express");
const app = express();

const bodyparser = require("body-parser")
const session = require("express-session")
const {v4:uuidv4} = require("uuid")

const path = require("path");

const router = require("./router");

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine','ejs');

//load static assests
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

app.use('/route',router);
//home route

app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"})
})


//
app.listen(PORT,()=>{
    // console.log("server is ruunning at https://localhost:",PORT);
    console.log(`server is ruunning at http://localhost:${PORT}`);
})