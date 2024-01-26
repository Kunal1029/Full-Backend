// Ejs - Embedded JS template
//IT is a lang template which allow us to write html markups in plain js

const express = require("express");
const app = express();
const path = require("path");

const port = 1234;

app.use(express.static("public")) //this use for connecting css and images file in ejs
//Note - public - it is a folder which contains all css files and images
//or
//Using from different directory 
// app.use(express.static(path.join(__dirname,"public")))
// if js folder in public app.use(express.static(path.join(__dirname,"public/js")))
//if css folder in public app.use(express.static(path.join(__dirname,"public/css")))


app.set("view engin","ejs") //Note : We don't require ejs like express because express by default implicitly require 
//Note- .set = use for set or put something 
//Note- view engine = 'view - means dislplay or render' , 'engine' - for display we need display engine and same we need any view engine
//Note - "ejs" - Here we set "ejs" engine as "view engine" 
//Note - We don't send responses but we render responses
//Note - Render is sending files like string , array , obj , html file , bool etc but for sending big files which contains js , html css and many more in the form of file then we use res.render. the process of generating visual output from a set of data or instructions. It involves creating images or animations from descriptions stored in a computer, often with the goal of displaying these visuals on a screen. 
//Note - We send .ejs file by res.render(filename.ejs)
//Note - By default we need to put all ejs file inside "views" name of folder


app.set("views" , path.join(__dirname, "/views"));
//path.join use when we run .ejs files fron outside server folder


app.get("/" , (req,res)=>{
    res.render("Home.ejs")
    // oor
    // res.render("Home")
})

//for passing data to ejs
app.get("/roll" , (req,res)=>{
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("RollDice.ejs" , {num})
    // oor
    // res.render("Home")
})

//Instagram EJS
// app.get("/ig/:username", (req,res)=>{
//     let {username} = req.params;
//     // console.log(username)
//     const followers = ["ks" , "js"];
//     res.render("Instagram.ejs" , {username , followers})
// })



//json data for tempory db for understanding ejs by Instagram page
app.get("/ig/:username" , (req,res)=>{
    const {username} = req.params;
    const instadata = require("./Data.json")
    const data = instadata[username];
    console.log(data)
    if(data){
        res.render("Insta2.ejs" ,{data})
    }else{
        res.render("error.ejs")
    }
})

app.listen(port,()=>{
    console.dir(`Server Start at ${port}`)
})
