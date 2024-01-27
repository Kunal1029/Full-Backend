ShradhaUser.updateOne({name:"k1"} , {age:1000})
.then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

ShradhaUser.updateMany({ age: { $gt: 20 } }, { age: 30 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

    // findeOneAndUpdate (1st find , then print , then update)
  ShradhaUser.findOneAndUpdate({name:"Eve"},{age:39})
  .then((res) => {
    console.log(res); // return old document but updated in db
  })
  .catch((err) => {
    console.log(err);
  });

  ShradhaUser.findOneAndUpdate({name:"Eve"},{age:59},{new: true} )
  .then((res) => {
    console.log(res); // return new document coz we makes "true" to send new values
  })
  .catch((err) => {
    console.log(err);
  });

ShradhaUser.findByIdAndUpdate("65b49e8a48bf91836f0bd4f7",{name:"Isha"},{new: true} )
.then((res) => {
  console.log(res); // return new document coz we makes "true" to send new values
})
.catch((err) => {
  console.log(err);
});
