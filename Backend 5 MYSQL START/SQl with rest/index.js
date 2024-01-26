const express = require("express");
const app = express();
const port = 9090;
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "restsql",
  password: "Mysql@2024",
});

let getFakeData = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let q = "INSERT INTO user (id , username , email , password) VALUES ?";
let data = [];

for (let i = 0; i < 76; i++) {
  data.push(getFakeData());
}

//Home Route
app.get("/", (req, res) => {
  let Sel = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(Sel, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("Home.ejs", { count });
      console.dir(result[0]["COUNT(*)"]);
    });
  } catch (err) {
    console.log(err);
    res.render("Some Error Occurs");
  }
});

//Show route
app.get("/user", (req, res) => {
  let q2 = "SELECT * FROM user";
  try {
    connection.query(q2, (err, result) => {
      if (err) throw err;
      let k = result;
      res.render("User.ejs", { k });
    });
  } catch (err) {
    console.log(err);
    res.send("ERROR AAGAYI");
  }
});

//edit user
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q3 = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q3, (err, Editor) => {
      if (err) throw err;
      let ed = Editor[0];
      console.log(ed);
      res.render("Edit.ejs", { ed });
    });
  } catch (error) {
    console.log(err);
  }
});

//update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUser } = req.body;
  let q3 = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q3, (err, updte) => {
      if (err) throw err;
      let user = updte[0];
    //   console.log(user.password);
    //   console.log(formPass)
    //   console.log(newUser)
    //   res.send("Db pass ", user.password , " fompass " , formPass , " newU " , newUser)
      if (formPass != user.password) {
        res.send("Wrong Password");
      } else {
        let Qupdate = `UPDATE user SET username= ? WHERE id= ?`;
        let values = [newUser, id];
        // let Qupdate = `UPDATE user SET username = '${newUser}' WHERE id = '${id}'`;
        try {                                                                      	
          connection.query(Qupdate, values, (err, newUp) => {
            if(err) throw err;
            res.redirect('/user');
            // console.log(newUp)
          });
        } catch (err) {
          console.log(err);
        }
      }
    });
  } catch (error) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.dir(`Server starts at port ${port}`);
});
