//importing a directory by require(./DirectoryName) , and that directory find for index.js file , if index.js file not present then that directory will not get anything even if any file are there , so index.js fileName helps us to require any directory 
const dircty = require("./4ExportDirectory")
console.log(dircty);
console.log(dircty[0]);
console.log(dircty[0].name);
console.log(dircty[1].color);

