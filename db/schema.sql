DROP DATABASE IF EXISTS hayjmcznfu4swcex;
CREATE DATABASE hayjmcznfu4swcex;
USE hayjmcznfu4swcex;

CREATE TABLE icecream (
	id int NOT NULL AUTO_INCREMENT,
	icecream_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT TRUE,
	PRIMARY KEY (id)
);
