-- Update (to update existing rows)

UPDATE table_name
SET col1 = val1, col2 = val2
WHERE condition;

ex-
UPDATE user 
SET followers = 600
WHERE age = 16;

SET SQL_SAFE_UPDATES = 0; -- first time we need to add this line coz by default sql don't allow us to update.


-- DELETE (to delte existing rows)

DELETE FROM table_name
WHERE condition;

DELETE FROM table_name -- if use this line alone then it delets all rows


-- Alter (to change the schema)

-- ADD column

Alter TABLE table_name
ADD COLUMN column_name datatype constraint;

ex- 
ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "DELHI";


-- DROP column

Alter TABLE table_name
DROP COLUMN column_name;

ex- 
ALTER TABLE user
DROP COLUMN age;

-- RENAME column

Alter TABLE table_name
RENAME TO new_table_name;

ex-
ALTER TABLE user
RENAME TO instaUser

-- CHANGE Column (rename)

ALTER TABLE table_name
CHANGE COLUMN old_name new_name new_datatype new_constraints;

ex-
ALTER TABLE instaUser
CHANGE COLUMN followers subscribe INT DEFAULT 0;


-- MODIFY Column (modify datatype/constraint)

ALTER TABLE table_name
modify col_name new_datatype new_constraints;

ex-

ALTER TABLE instaUser
modify subscribe INT DEFAULT 5;


-- TRUNCATE (to delete table's data)
TRUNCATE TABLE table_name;
