const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main()
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
  });

const bookSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true
  },
  author: {
    type:String,
    maxLength: 20
  },
  price: {
    type:Number,
    min: [1,"Price is too low for sell"] // 1 for mini and "" value for sending particulr error
  },
  dicount: {
    type:Number,
    default: 0
  },
  category:{
    type: String,
    enum:["fiction","non-fiction"] // any other value will not work
  },
  genre:[String] // this can we used for any key
});
const Book = mongoose.model("Book",bookSchema)

let book1 = new Book({
    title: "BBSK",
    author: "RH Pandey",
    price: 20,
    genre: ["comics","iron man" , "fiction"]
})

let book2 = new Book({
    title: "MATHs",
    price: 400 // if we change dt or put value that don't come in that dt then we get cast or parse error
})
let book3 = new Book({
    title: "C++",
    price: 4100 // if we change dt or put value that don't come in that dt then we get cast or parse error
})
let book4 = new Book({
    title: "C++",
    author: "ks" // if we change dt or put value that don't come in that dt then we get cast or parse error
})

// book1.save()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err.errors.price.properties.message)
// })

Book.findByIdAndUpdate("65b4b73bd8632fddc965102c",{price: 0},{new: true},{runValidators: true}) //{runValidators: true} - updation will follow schema validations
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})