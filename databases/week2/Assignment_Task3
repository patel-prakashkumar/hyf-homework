-- PART 3: More Queries using database hyf-lession2
-- 1.Get all the tasks assigned to users whose email ends in @spotify.com
SELECT  task.id, user.name, task.title AS tasks ,  user.email
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';
-- 2.Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name AS name , task.title AS tasks_title, status.name AS status
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
JOIN status ON status.id = task.status_id
WHERE status.name LIKE '%Not started%'
AND user.name LIKE '%Donald Duck%';
-- WHERE status.name REGEXP 'Not started'
-- AND user.name REGEXP 'Donald Duck';

-- 3.Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT user.name AS name, task.title AS task_title, task.created AS task_created
FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id 
WHERE month(task.created) = 9
-- AND user.name REGEXP 'Maryrose Meadows';
AND user.name LIKE '%Maryrose Meadows%';

-- 4.Find how many tasks were created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(*) AS tasks
FROM task
GROUP BY month(task.created);

