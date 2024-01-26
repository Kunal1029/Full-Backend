const express = require("express");
const app = express();

let port = 8080;

app.listen(port , ()=>{
    console.log(`app is listening  on port ${port}`);
});

//listen - it listen all the incoming request. Makes web server which listen incoming apis
//ports - Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.



