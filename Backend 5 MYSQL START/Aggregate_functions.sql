-- Aggregate Functions
In build functions to perform a calculation on a set of values, and return a single value


Count()
MAX()
MIN()
SUM()
AVG()

EX- 
SELECT max(marks)
From Student;


SELECT max(followers)
FROM user;


SELECT count(age)
FROM user
WHERE age = 14;

SELECT min(age)
FROM user;

SELECT avg(age)
FROM user;

SELECT sum(followers)
FROM user;