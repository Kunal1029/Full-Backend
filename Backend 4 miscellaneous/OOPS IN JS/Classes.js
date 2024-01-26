//Classes are a template for creating "Objects".

// The Constructor method is a special method of a class for creating and initializing an object instance of that class.

class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi , I'm ${this.name}`)
    }
}

let p1 = new Person("kunal" , 23);
let p2 = new Person("ka" , 33);

console.log(p1)
console.log(p2)
console.log(p2.talk())
