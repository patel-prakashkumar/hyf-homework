import React from 'react';
function TodoList(todoItem) {
    return <div>
        <ul>
            <li>{todoItem.description}</li>
            <li>{todoItem.date}</li>
        </ul>
    </div>
}
export default TodoList;
