//constructors- doesn't return anything & start with capital

function Person(name, age){
    this.name = name;
    this.age = age;
    // console.log(this)
}

//if we want that every function should have function talk so we make that funct by prototype
Person.prototype.talk = function(){
    console.log(`Hi , My name is ${Person.name}`);
}

//if we create any prototype of a function than instance of that function can used prototype

let p1 = new Person("kunal" , 23);
let p2 = new Person("lala" , 24)


//New Operator - The "new" operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

if(p1.talk === p2.talk){
    console.log("Both are prototypes properties")
}


