-- Active: 1660903523654@@127.0.0.1@3306@database_week3
USE database_week3;
-- Queries : Meal TABLE
SELECT * FROM `Meal`;
-- Add a new meal
INSERT INTO Meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`)
VALUES ('Breakfast','breakfast with coffe and breads','Talent Garden','2022-08-31 08:00:00','12','600.00'),
       ('Lunch','Pasta, vegetables and chicken drums','Københavan H','2022-08-31 13:30:00','12','4000.00'),
       ('Snacks','frech frise and boile eggs','Arhus','2022-09-13 15:00:00','13','300.00'),
       ('Dinner','Pizza','Vallenbæk','2022-09-08 18:00:00','4','700.00');
-- Get all meals
SELECT * FROM `Meal`;
-- Get a meal with any id, fx 1
SELECT * FROM `Meal` WHERE id = 2;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Meal` SET `location` = 'Århus', `description` = 'Pizza, salats and drinks'
WHERE id = 2;
UPDATE meal SET `description` = 'Pizza,soft and hard drinks'
WHERE id = 4;
-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 3;

-- Queries for Reservation Table
INSERT INTO `Reservation` (`number_of_guests`,`meal_id`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES ('12','1','88888888','Prakash','prakash@mail.com'),
('8','2','2222222','Maahit','maahit@mail.com'),
('4','4','3333333','HYF','hyf@mail.com');
-- Get all reservations
SELECT * FROM `reservation`;
-- Add a new reservation
INSERT INTO `Reservation` (`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES ('8','1','2022-08-31','88888888','Prakash','prakash@mail.com');
-- Get a reservation with any id, fx 1
SELECT * FROM `Reservation` WHERE id = 3;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Reservation` SET `contact_phonenumber` = '6666666'
WHERE id = 4;
-- Delete a reservation with any id, fx 1
DELETE FROM `Reservation`
WHERE id = 4;

-- Queries for Review table
INSERT INTO `Review` (`title`,`meal_id`,`stars`,`created_date`)
VALUES ('Very Good','1','4','2022-08-30'),
('Excellent','2','5','2022-09-08'),
('Average','4','3','2022-09-09'),
('Not good','4','2','2022-09-10');
-- Get all reviews
SELECT * FROM `Review`;
-- Add a new review
INSERT INTO `Review` (`title`,`meal_id`,`stars`,`description`,`created_date`)
VALUES ('Very Good','1','4','Nice Arragment and food Test','2022-08-30');
-- Get a review with any id, fx 1
SELECT * FROM `Review` WHERE id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Review`
SET `title` = 'Excellent',
`stars` = '5'
WHERE id = 4;
-- Delete a review with any id, fx 1
DELETE FROM `Review` WHERE id = 3;

-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM `Meal`
WHERE price < 900;
-- Get meals that still has available reservations

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM `Meal`
WHERE title LIKE '%din%';
-- Get meals that has been created between two dates
INSERT INTO Meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`, `created_date`)
VALUES ('Breakfast','breakfast with coffe and breads','Talent Garden','2022-08-31 08:00:00','12','600.00', '2022-08-31');
SELECT * FROM `Meal`
WHERE created_date BETWEEN '2022-08-25' AND '2022-09-05';
-- Get only specific number of meals fx return only 5 meals
SELECT * FROM `Meal` LIMIT 2;
-- Get the meals that have good reviews
SELECT * FROM `Meal` 
INNER JOIN `Review` ON Review.meal_id = meal.id
WHERE stars >= 5;
-- Get reservations for a specific meal sorted by created_date
SELECT
    meal.title,
    number_of_guests,
    meal_id,
    meal.created_date,
    contact_phonenumber,
    contact_name,
    contact_email
FROM `Reservation`
INNER JOIN `Meal` ON Reservation.meal_id = meal.id
WHERE meal.title = 'Breakfast'
ORDER BY created_date;
-- Sort all meals by average number of stars in the reviews
SELECT
meal.title,
Round(AVG(Review.stars), 0) As Average
FROM `Meal`
INNER JOIN Review ON meal.id = Review.meal_id
GROUP BY Review.meal_id
ORDER BY AVG(Review.stars);