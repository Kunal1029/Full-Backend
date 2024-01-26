const express = require("express");
const app = express();

let port = 8080;
const routing = "It is process of selecting a path for traffic in a network or between or across multiple networks";
console.log(routing);

app.get("/",(req,res)=>{
    res.send("Apple")
})
app.get("/banana",(req,res)=>{
    res.send("kela")
})
app.post("/",(req,res)=>{
    res.send("You send a post request")
})

app.get("*",(req,res)=>{
    res.send("Path does not exist")
    res.send("Rounting")
})

app.listen(port , ()=>{
    console.dir(`app is listening  on port ${port}`);
});

// app.use((req,res)=>{
//     console.dir(`Request Received`)
// })


