//Factory Function - A function that creates objects

function PersonMaker(name , age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi , my name is ${this.name}`)
        }
    }

    return person;
}

let p1 = PersonMaker("kunal" , 23);
console.log(p1)
let p2 = PersonMaker("P" , 26)
console.log(p2)

console.log(p1.talk())

