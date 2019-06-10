CREATE DATABASE test_db;

USE test_db;

CREATE TABLE Floev
(
id int,
glassesName varchar(255),
prices int
);

INSERT INTO Floev (id, glassesName, prices)
VALUES (1, 'Floev Glasses', 50000);

SELECT * FROM Floev;