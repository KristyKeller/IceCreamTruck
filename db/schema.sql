DROP DATABASE IF EXISTS icecream_db;
CREATE DATABASE icecream_db;
USE icecream_db;

CREATE TABLE icecream
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
