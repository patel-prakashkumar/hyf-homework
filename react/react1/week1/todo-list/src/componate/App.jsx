import React from 'react';

import TodoList from './TodoList';
import Header from './Header';
import Footer from './Footer';
import todoList from '../Todo';

function createTodo(todoList) {
    return (
      <TodoList
        key={todoList.id}
        description={todoList.description}
        date={todoList.date}
      />
    );
  }
function App(){
return  <div>
<Header />
<h1 className="heading">My Todo List</h1>
{todoList.map(createTodo)}
<Footer /> 
</div>
}


export default App;