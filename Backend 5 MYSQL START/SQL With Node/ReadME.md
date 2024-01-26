# 1st we install faker package for fake data.

# 2nd we install mysql2 package for connecting server (node server) with database

- froentend --> server --> DB

- froentend <-- server <-- DB

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "firstapp",
  password: "Mysql@6261549410",
});

The mysql.createConnection method is used to create a MySQL connection object. This method takes an object as an argument, where you specify the connection details such as the host, user, database, and password.

host: The hostname where the MySQL server is running. In this case, it's set to "localhost," meaning the MySQL server is on the same machine as the Node.js application.
user: The MySQL user to authenticate as. In this case, it's set to "root."


For ending connection
connection.end();