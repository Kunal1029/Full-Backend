console.log("process : The obj provide info about, and control over , the current node.js process")
console.log("process.argv : returns an array containing the command-line arguments passed when the node.js process was launched.")

//use process in cmd

//when we console process.argv then it allows us to give arguments on cmd while running node file
console.log(process.argv);//this provide location of current file in form of array if no argument pass like node filename.js arg1 arg 2 like this 
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\kunal\\Desktop\\AC Backend\\Backend 1 (Node js)\\2Process.js'
// ]
console.log(process)
console.log("Version node = " ,process.version)
console.log("process release = ", process.release)


//giving hello to all argument in cmd
console.dir(`Give Hello to all argmt`)
let arg = process.argv;

for(let i = 2;i< arg.length;i++){
    console.log("Hellow to ", arg[i].toUpperCase());
}
