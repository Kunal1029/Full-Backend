// DELETE

model.deleteOne() //return count

Shradhauser.deleteOne({name:"adam"})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

ShradhaUser.findByIdAndDelete({name:"k"})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

ShradhaUser.findOneAndDelete({name:"k"})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

model.deleteMany() //return count

Shradhauser.deleteMany({age:{$gt: 22}})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})