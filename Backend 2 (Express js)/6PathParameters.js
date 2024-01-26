const express = require("express");
const app = express();

let port = 8080;
const pathParameters = `Path after 'sitename/path'  or www.instagram/__thekunalshivhare , so that path name given by using variable`
console.log(pathParameters);

//path parameter
app.get("/:username",(req,res)=>{ 
    let {username } = req.params;
    let htmlser = `<h1>Welcome to the page of @${username}`;
    console.log("username = ",username)
    res.send(htmlser)
})

//path parameter
app.get("/:username/:id",(req,res)=>{
    let {username , id } = req.params; //req.params shows the paramenter that used with request link which also request 
    let htmlser = `<h1>id of @${username} is ${id}`;
    console.log("username = ",username ," id = " , id)
    res.send(htmlser)
})


//query String
const querystring = "It is path after '?' like www.google?apple , so for get this path we use req.query";
console.log(querystring)

app.get("/search", (req, res) => {
    let { q } = req.query;

    if (!q) {
        res.send("<h1>Nothing Search</h1>");
    } else {
        res.send(`<h1>You search for ${q}</h1>`);
    }
});


app.listen(port , ()=>{
    console.log(`app is listening  on port ${port}`);
});




