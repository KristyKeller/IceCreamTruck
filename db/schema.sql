DROP DATABASE IF EXISTS icecream;
CREATE DATABASE icecream;
USE icecream;

CREATE TABLE icecream
(
    id INT NOT NULL AUTO_INCREMENT,
    icecream_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

SELECT * FROM icecream;