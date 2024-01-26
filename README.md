# Node.js

- It is a js runtime envirmnt. It's not a library , framework and language but it provides envrmt to run js on browser or server.

- It is used for server side programming.

# Express

- A Node.js web application framework that helps us to make web application.

- It is used for server side programming.

- 1.  froent -> requests send -> back
      [client] ---->[server]

- 2. froent <- response send <- back
[client] <----[server]

# Nodemon:

- To automatically restart server with code changes

# EJS (Embedded js Templates)

- Ejs is simple templating language that lets you generate html markup with plain JS.

# Embedding (to fix something firmly and deeply (in something else))expressions - enable you to create XML literals that contains expressions that are evaluated at run time

# Post Request - Handling Post requests

- Set up post request route to get some response

- Parse POST request data
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

- When some data send to use then it don't come in form of "req.query" like "get" but that data come "req.body" , body is property in request which helps us to access that data.

- If we console.log(req.body) then we get undefined coz express can't understand that data. So for understanding that data we will use "middleware" like below which helps express to understand that data by parsing.

app.use(express.urlencoded({extended: true})); //code only read "urlencoded" data (means data which comes through url like by submiting any form)

app.use(express.json()); // we use this when express needs to understand "json" data.

# REST - Representational State Transfer

Rest is an architectural style that defines a set of constraints (rules) to be used for creating web services.

# RESTFUL APIS - Those Apis which uses concepts or rules of REST.

- REST is not a different concept but are some rules or ways of writing apis.

# MYSQL - It is a collection of data in a format that can be easily accessed.

- Can store large data.
- Feature like security, scalability etc.
- Easier to insert, update or delete data

# SQL vs NoSQL

- SQL - Relational DB (data Stored in Tables)
  eg- MYsql , oracle , PostgreSql etc.

- SQL - (Structured Query Language)
  sql is a programming language used to interect with Relational database.

- NoSQL - Non Relational DataBase (data stored in document/key-val/graphs etc.) eg - MongoDB
