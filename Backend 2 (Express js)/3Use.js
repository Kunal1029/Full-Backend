const express = require("express");
const app = express();

let port = 8080;
const appUse = ".use method for handaling all type of requests like get, post and according to this callback executes whenever our server gets any request";
console.log(appUse);

app.listen(port , ()=>{
    console.log(`app is listening  on port ${port}`);
});

app.use((req,res)=>{
    console.dir(`Request Received`)
})


