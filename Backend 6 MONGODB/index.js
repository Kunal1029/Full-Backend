const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/AC");
}

main()
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
  });

//  Schema - Schema defines the shape of the documents within that collection.
// or can say it defines blueprint of document in collection

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//Models
// Models in mongoose is a class with which we construct documents.
//const modelName = mongoose.model("collectionName", modelSchema);

const ShradhaUser = mongoose.model("ShradhaUser", userSchema);
const employ = mongoose.model("employ", userSchema);
//ShradhaUser & employ models both are class and for inserting data in documents then we need to make objects of classes

//Note - Mongoose uses Operation Buffering
// Mongoose lets u start using your models , immediately, without waiting for mongoose to establish a connection to mongodb.

//find

// ShradhaUser.find({age:{$gt : 21}})
// .then((res)=>{
//     console.log(res)
//     console.log(res[0])
//     console.log(res[0].name)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ShradhaUser.findOne({age:{$gt : 21}})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ShradhaUser.find({_id : '65b4a02f36232c95a07626db'})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ShradhaUser.findById('65b4a02f36232c95a07626db')
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

//UPDATE
// ShradhaUser.updateOne({name:"k1"} , {age:1000})
// .then((res)=>{
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// ShradhaUser.updateMany({ age: { $gt: 20 } }, { age: 30 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


  //findeOneAndUpdate (1st find , then print , then update)
//   ShradhaUser.findOneAndUpdate({name:"Eve"},{age:39})
//   .then((res) => {
//     console.log(res); // return old document but updated in db
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   ShradhaUser.findOneAndUpdate({name:"Eve"},{age:59},{new: true} )
//   .then((res) => {
//     console.log(res); // return new document coz we makes "true" to send new values
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   ShradhaUser.findByIdAndUpdate("65b49e8a48bf91836f0bd4f7",{name:"Isha"},{new: true} )
//   .then((res) => {
//     console.log(res); // return new document coz we makes "true" to send new values
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// delete

// ShradhaUser.deleteMany({age:{$gt: 22}})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ShradhaUser.deleteOne({name:"k"})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ShradhaUser.findByIdAndDelete({name:"k"})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ShradhaUser.findOneAndDelete({name:"k"})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

//insert

// const user3 = new ShradhaUser({
//   name: "Pend",
//   email: "pend@gmail.com",
//   age: 25
// });

// user3
//   .save()
//   .then((res) => {
//     //save() is asynchronous function which save document in collection of db
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//insertmany
// ShradhaUser.insertMany([
//     {name: "k",email:"k@.c",age:20},
//     {name: "k1",email:"k1@.c",age:22},
//     {name: "k2",email:"k2@.c",age:24},
// ]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
