-- Active: 1660903523654@@127.0.0.1@3306@database_week2
USE database_week2;
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
ALTER TABLE `task`
ADD user_id int(10)
AFTER status_id;
INSERT INTO `task` (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Car Wash', 'Check Avaibilty', '2022-08-20 15:30:00', '2022-08-22 08:50:23', '2022-08-29 23:00:00', '1', 1);
-- Change the title of a task
UPDATE task
SET title = 'Repaire car Appointment'
WHERE id = 36;
-- Change a task due date
select * from task;
UPDATE task
SET due_date = '2022-08-30 18:00:00'
WHERE id = 36;
-- Change a task status
UPDATE task
SET status_id = 2
WHERE user_id = 3;
-- Mark a task as complete
UPDATE task 
SET status_id = 3
WHERE id = 35;
-- Delete a task
DELETE FROM task
WHERE id = 36;