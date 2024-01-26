-- Table in sql --

columns - design (Schema)  
Schema - what information holds by columns heading or type of Table

rows - This holds data , and we called tuple to every row.
Information of a Single user in a row is called tupple.


Command for Create New DB
Create database DB_Name

Command for Create Table , Schema design

CREATE TABLE table_name(
    column_name1 datatype constraint, -- constraint - are rules for defining data
    column_name2 datatype constraint,
    column_name3 datatype constraint,
);

#Example of table

Create Table student(
    rollno INT,
    name VARCHAR(30),
    age INT
);

data insert in Table

INSERT INTO student
VALUES
(101 , "ks" , 12),
(102 , "Ps" , 112),

command for Checking data 
select * from student;