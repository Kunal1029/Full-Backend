//Logger file contain data or info about every req. shows us when send or reveive req and what is in req or res
//provides logging functionality for an application. It can be used to display errors, warnings and debug messages.


const express = require("express");
const app = express();

app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method , req.hostname , req.path ,req.time);
    next()
})

app.get("/",(req,res)=>{
    res.send("Hi, root Logger file")
})

app.get("/random",(req,res)=>{
    res.send("Hi, random")
})

//404 - this will only run when above all routes and middleware are failed like we search locla:8080/bc 
app.use((req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(8080, ()=>{
    console.log("Server 8080 chalu")
})



