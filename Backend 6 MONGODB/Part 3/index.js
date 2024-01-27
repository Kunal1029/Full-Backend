const express = require("express");
const app = express();
const port = 8080;
const connectDB = require("./DB");
const path = require("path");
const chat = require("./models/chat");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

connectDB();

app.get("/chats", async (req, res) => {
  let Totalchats = await chat.find();
  // console.log(Totalchats);
  res.render("index.ejs", { Totalchats });
});

// new chat route
app.get("/chat/new", (req, res) => {
  res.render("new.ejs");
});

//create route
app.post("/postchat", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

//edit route
app.get("/chat/:id/edit", async (req, res) => {
  let { id } = req.params;
  let editchat = await chat.findById(id);
  res.render("edit.ejs", { editchat });
});

//update route

app.put("/update/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  let updatechat = await chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    {updated_at : new Date()},
    { runValidators: true, new: true }
  );
  //   updatechat.save();
//   console.log(updatechat);
  res.redirect("/chats");
});

//destroy route
app.delete("/chat/:id", async (req,res)=>{
    let { id } = req.params;
    await chat.findByIdAndDelete(id);
    res.redirect("/chats")
})

app.get("/", (req, res) => {
  res.send("Root working");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
