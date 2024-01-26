--  Clauses are used to filter, sort, and manipulate data retrieved from a database.
-- it allows us to get data according to our needs or conditions

-- General order
SELECT column
FROM table_name
WHERE condition
GROUP BY column
Having condition
ORDER BY column ASC;


-- Where Clause

WHERE Clause - TO define some conditions
ex-
SELECT *
FROM user1
WHERE followers >=200;

SELECT name, followers
FROM user1
WHERE followers >=200;

SELECT name , age
FROM user1
WHERE age>=14;

Logical operator - AND , OR, NOT, IN, BETWEEN, ALL,LIKE,ANY
BITWISE Operators - & (Bitwise AND) , | (Bitwise OR)


BETWEEN - Selects for a given range
IN - matches any value in the list
NOT - to negate the given condition

ex- 
SELECT name , age
FROM user1
WHERE age > 16 AND followers > 200;

Select name , age 
FROM user1
WHERE age BETWEEN 15 AND 17;


SELECT name, email, followers
FROM user1
WHERE email IN ("ks@g.c","js@g.c");


SELECT name, age, followers
FROM user1
WHERE age IN (14,16);

SELECT name, age, followers
FROM user1
WHERE age NOT IN (14,16);

--LIMIT Clause
Sets an upper limit on number of (tuples) rows to be returned

SELECT col1,col2 From table_name
limit number;

SELECT name, age, followers
FROM user1
LIMIT 2;

--Order by Clause
To sort in ascending (ASC) or descending order (DESC)

SELECT col1, col2 From table_name
Order BY col_name(s) ASC;

SELECT name, age, followers
From user1
Order By followers ASC;

SELECT name, age, followers
From user1
Order By age, followers DESC;


-- GROUP BY Clause

Groups rows that have the same value into summary rows.
it collects data from multiple records and groups the result by one or more column.

SELECT col1,col2
FROM table_name
GROUP BY col_name(s);

We use GROUP BY with some aggregation function.

SELECT age, count(id)
FROM user1
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age;

-- HAVING Clause

Similar to where i.e. applies some condition on rows.
But it is used when we want to apply any condition after grouping.

- Where is for the table, Having is for a group 
- Grouping is neccesary for HAVING 

SELECT col1 , col2
FROM table_name
GROUP BY col_name(s)
HAVING condition;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;

