// const mongoose = require("mongoose");
// const connectDB = require("./DB");
const chat = require("./models/chat");

// connectDB();

let allchats = [
  {
    from: "neha",
    to: "priya",
    msg: "Hi kesi hai",
    created_at: new Date(), //date format get according to UTC
  },
  {
    from: "somya",
    to: "mena",
    msg: "Hello kitna pad liya",
    created_at: new Date(), //date format get according to UTC
  },
  {
    from: "priu",
    to: "kunl",
    msg: "or btao",
    created_at: new Date(), //date format get according to UTC
  },
];

chat.insertMany(allchats);
