//create a MW for an api that checks if the access token was passed in the query string or not.

const express = require("express");
const app = express();

// app.use("/api",(req,res,next)=>{
//     let { token } = req.query;
//     if(token === "allowMe"){ // check http://localhost:8080/api?token=allowMe
//         next();
//     }
//     else{
//         console.log(req.query)
//         res.send("Access Denied");
//     }
// })

// app.get("/api",(req,res)=>{
//     res.send("Ur Allowed to access data")
// })

// or 

const checkToken = (req,res,next)=>{
    let { token } = req.query;
    if(token === "letmein"){ // check http://localhost:8080/api?token=letmein
        next();
    }
    throw new Error(!Noooobb)
}

app.get("/api", checkToken , (req,res)=>{
    res.send("Check Token variable data allowed")
})

app.get("/",(req,res)=>{
    res.send("Hi, root Access token")
})

app.get("/random",(req,res)=>{
    res.send("Hi, random but not appi path ")
})

//404 - this will only run when above all routes and middleware are failed like we search locla:8080/bc 
app.use((req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(8080, ()=>{
    console.log("Server 8080 chalu")
})



