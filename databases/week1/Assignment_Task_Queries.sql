USE database_week1;
-- Find out how many tasks are in the task table
SELECT 
    `title`
FROM
    `task`;

-- Find out how many tasks in the task table do not have a valid due date
SELECT 
    `due_date`
FROM
    `task`
WHERE
    `due_date` IS NULL;

-- Find all the tasks that are marked as done
SELECT 
    task.id, task.title, status.name
FROM
    `task`
        INNER JOIN
    `status` ON status.id = task.status_id
WHERE
    status.name = 'Done';

-- Find all the tasks that are not marked as done
SELECT 
    task.id, task.title, status.name
FROM
    `task`
        INNER JOIN
    `status` ON status.id = task.status_id
WHERE
    status.name != 'Done';

-- Get all the tasks, sorted with the most recently created first
SELECT 
    id, title, created
FROM
    `task`
WHERE
    `created`
ORDER BY `created` DESC;

-- Get the single most recently created task
SELECT 
    id, title, MAX(created)
FROM
    `task`;

-- Get the title and due date of all tasks where the title or description contains database
SELECT 
    title, description
FROM
    `task`
WHERE
    title LIKE '%database%'
        OR description LIKE '%database%';

-- Get the title and status (as text) of all tasks
SELECT 
    CONCAT(task.title, '  ', status.name) AS TEXT
FROM
    `task`
        INNER JOIN
    `status` ON status.id = task.status_id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT 
    status.name, COUNT(task.title)
FROM
    task
        INNER JOIN
    `status` ON status.id = task.status_id
GROUP BY status.name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT 
    status.name, task.title, task.updated
FROM
    `task`
        INNER JOIN
    `status` ON status.id = task.status_id
GROUP BY task.title , status.name
ORDER BY status.name AND task.updated DESC;
