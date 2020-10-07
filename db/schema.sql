DROP DATABASE IF EXISTS icecream;
CREATE DATABASE icecream;
USE icecream;

CREATE TABLE icecream
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    devoured BOOL
);
