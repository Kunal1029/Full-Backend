const express = require("express");
const app = express();

let port = 8080;

const responseSend = "res.send() - sends the http response."

app.listen(port , ()=>{
    console.log(`app is listening  on port ${port}`);
});

app.use((req,res)=>{ 
    console.dir(`Request Received and send response`)
    //res.send(`RESPONSE SEND`) // this obj converts js string to json format
    // res.send({ // this obj converts js object to json format
    //     name: "Kunal",
    //     Surname: "Shivhare"
    // })
    const code = "<h1>Fruits</h1><br><ul><li>Apple</li><li>Orange</li></ul>";
    res.send(code);
})


//http request - it is text based request but express convert text based req to JS object so that js can understand
