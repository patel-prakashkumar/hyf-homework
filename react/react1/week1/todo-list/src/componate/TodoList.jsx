import React from 'react';
function TodoList(props) {
    return <div>
        <ul>
            <li>{props.description}</li>
            <li>{props.date}</li>
        </ul>
    </div>
}
export default TodoList;
