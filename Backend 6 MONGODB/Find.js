// FIND 
Model.find() //returns a Query Object (thennable)

//Mongoose Queries are not promises. But they have a .then()

ShradhaUser.find({})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

ShradhaUser.find({age:{$gt : 21}})
.then((res)=>{
    console.log(res)
    console.log(res[0])
    console.log(res[0].name)
})
.catch((err)=>{
    console.log(err)
})

ShradhaUser.findOne({age:{$gt : 21}})
.then((res)=>{
    console.log(res) 
})
.catch((err)=>{
    console.log(err)
})

ShradhaUser.find({_id : '65b4a02f36232c95a07626db'})
.then((res)=>{
    console.log(res) 
})
.catch((err)=>{
    console.log(err)
})