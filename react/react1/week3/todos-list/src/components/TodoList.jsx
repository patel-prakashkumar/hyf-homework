import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className='todo-list'>
      
        {todos.map((list) => (
          <Todo
            key={list.id}
            item={list}
            id={list.id}
            description={list.description}
            deadline={list.deadline}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
     
    </div>
  );
};

export default TodoList;