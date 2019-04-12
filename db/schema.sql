DROP DATABASE IF EXISTS travel_db;
CREATE DATABASE travel_db;

USE travel_db;

CREATE TABLE places (
    id INT (10) AUTO_INCREMENT NOT NULL,
    place_name VARCHAR (100) NOT NULL,
    visited BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);