const express = require("express");
const app = express();

let port = 8080;

app.use(express.urlencoded({extended: true})); //code only read "urlencoded" data (means data which comes through url like by submiting any form)
app.use(express.json());  // we use this when express needs to understand "json" data.

app.get("/register" , (req,res)=>{
    let {user , pass} = req.query;
    res.send(`standard get request - ${user} and ${pass}`)
})
app.post("/register" , (req,res)=>{
    let {user , pass} = req.body;
    res.send(`standard post request - ${user} and ${pass}`)
})

app.listen(port , ()=>{
    console.log(`app is listening  on port ${port}`);
});




