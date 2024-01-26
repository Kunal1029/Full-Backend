const express = require("express")
const app = express();
const port = 8080;
const path = require("path")
const {v4: uuidv4} = require('uuid');//uuid package - Universally unique identifier
const methodOverride = require("method-override"); // this package for convert post req to put,patch or delete request


app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {   
        id: uuidv4(),
        username: "kunal12",
        content: "Coding is my love"
    },
    {
        id: uuidv4(),
        username: "PS12",
        content: "Programing is my love"
    },
];

app.get("/posts" , (req,res)=>{
    res.render("index.ejs",{posts});
})


app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})

app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username , content} =req.body;
    let id = uuidv4();
    posts.push({id ,username , content});
    res.redirect("/posts")
})

app.get("/posts/:id" , (req,res)=>{
    let {id} = req.params; // req.params returns value of url last noun after last "/"
    console.log(id);
    let post = posts.find((p)=>id=== p.id);
    console.log(post)
    res.render("show.ejs" , {post})
})

app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p)=> id === p.id)
    post.content = newcontent;
    console.log(post);
    res.redirect("/posts");
});
app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id)
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id)
    res.redirect("/posts");
});

app.listen(port ,()=>{
    console.log(`listening to port ${port}`)
})

