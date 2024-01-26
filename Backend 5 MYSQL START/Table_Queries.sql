-- Table Queries

Create
insert -- use for add tupples (rows)
update
Alter -- can alter schema or change columns
Truncate -- Empty table data.
Delete -- Delete full table


------
-- Create Table (Defining Schema , table)
CREATE TABLE table_name(
    column_name1 datatype constraint, -- constraint - are rules for defining data
    column_name2 datatype constraint,
    column_name3 datatype constraint,
);

-- dataTypes - char , varchar , blob (binary large object) , int , TINYINT (it's size equal to byte datatype of java), BIGINT , FLOAT , Double , BOOLEAN , DATE , YEAR
-- unsigned (if we don't -ve number then we can use unsigned after datatype) - Tinyint unsigned  


--Constraints - Rules for data in the table

Not Null - columns cannot have a null value.
Unique - all values in column are different.
DEFAULT - sets the default value of a column.
CHECK - it can limit the values allowed in a column.

PRIMARY KEY - Makes a column unique & not null but used only for one
        ex- CREATE Table temp(
            id int not null,
            PRIMARY KEY (id)
        )
FOREIGN KEY - Prevent actions that would destroy links between tables , or when we use PRIMARY KEY of a table into another table that is called FOREIGN KEY
        ex- CREATE Table temp(
            cust_id int,
            FOREIGN KEY (cust_id) references customer(id)
        )


-- Example

CREATE TABLE User(
    id INT,
    age TINYINT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    CONSTRAINT age_check CHECK (age >= 13), -- age_check - this can be optional
    PRIMARY KEY (id)
);

CREATE TABLE post (
    id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

-- Insert into table

Insert into table_name
(colname1 , colname2)
values
(col1_v1 , col2_v1),
(col1_v2 , col2_v2);

INSERT INTO user
(id , age , name , email , followers , following)
VALUES 
(1,14,"ks","ks@g.c",12,10),
(2,24,"Aks","Aks@g.c",112,110),
(3,34,"ABks","ABks@g.c",212,130),
(4,44,"ABCks","ABCks@g.c",312,150);