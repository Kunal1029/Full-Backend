//OUR 1st MiddleWare

//app.use(Middleware) // means we want that middleware works with every request.

const express = require("express");
const app = express();

app.use((req,res , next)=>{
    console.log("I am MW");
    // res.send("MW finished")
    next();
})

app.use((req,res , next)=>{
    console.log("I am 2nd MW");
    // res.send("MW finished")
    next();
})

app.get("/",(req,res)=>{
    res.send("Hi, root")
})

app.get("/random",(req,res)=>{
    res.send("Hi, random")
})

app.listen(8080, ()=>{
    console.log("Server 8080 chalu")
})

