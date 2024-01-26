const { faker } = require("@faker-js/faker");
const mysql = require("mysql2"); //get the client
// const fs = require("fs");
//In Node.js, fs stands for the File System module. It is a built-in module that provides a set of methods for interacting with the file system. With the fs module, you can perform various file-related operations, such as reading from and writing to files, creating and deleting files and directories, and more.


//create the connection to db
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "firstapp",
  password: "Mysql@2024",
});

let getRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.userName(),
     faker.internet.email(),
     faker.internet.password(),
  ];
};

// console.log(getRandomUser());

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for(let i = 0;i<100;i++){
  data.push(getRandomUser());
}

try {
    connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();


