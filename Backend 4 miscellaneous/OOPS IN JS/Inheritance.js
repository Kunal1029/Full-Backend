// Inheritance - Inheritance is a mechanism that allows us to create classes on the basis of already existing classes.

class Person{
    constructor(name , age){
        console.log("Person class constructor")
        this.name = name;
        this.age = age;

    }
    talk(){
        return `Hi I'm ${this.name} , ${this.age}`
    }

}

class Student extends Person {
    constructor (name , age , marks){
        console.log("Student class constructor")
        super(name , age); // parent class constructor is being called
        this.marks = marks;
    }

    
}

class Teacher extends Person {
    constructor (name , age , subject){
        console.log("Teacher class constructor")
        super(name , age); // parent class constructor is being called
        this.subject = subject;
    }

    
}

let stu1 = new Student("ks" , 130 , 23);
console.log(stu1)
console.log(stu1.talk())

//---------------------===========--------------------===

class Mamel { //base class /parent class
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        return "I am eating"
    }
}

class Cat extends Mamel{ //child class
    constructor (name){
        super(name);
    }
    meow(){
        return "meow..."
    }
}

class dog extends Mamel{ //child class 
    constructor(name){
        super(name)
    }
    bark(){
        return "bhau.."
    }
}

let d1 = new dog("pesu")
console.log(d1)
console.log(d1.bark())
console.log(d1.eat())
