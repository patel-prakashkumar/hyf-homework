import React from 'react';

import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import todoList from '../todoList';

function createTodo(todoList) {
    return (
      <Main
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