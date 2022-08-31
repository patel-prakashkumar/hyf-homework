-- Active: 1660903523654@@127.0.0.1@3306@database_school
-- Part 2: School database
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE DATABASE database_school;
USE database_school;
SET NAMES utf8mb4;
CREATE TABLE `class` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255),
    `begins` DATE NOT NULL,
    `ends` DATE NOT NULL
);
CREATE TABLE `student` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `class_id` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`)
        REFERENCES `class` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
);
-- Insert data into table
INSERT INTO `class`
VALUES (1, 'Frontend Developer', '2022-08-20', '2022-12-15');
INSERT INTO `student`
VALUES (1, 'Prakash', 'patelprakash0508@gmail.com', '71471460', 1);
-- Create an index on the name column of the student table.
CREATE UNIQUE INDEX index_name ON student(name);
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE `class`
ADD status ENUM('Not-Started', 'Ongoing', 'Finished') NOT NULL;
