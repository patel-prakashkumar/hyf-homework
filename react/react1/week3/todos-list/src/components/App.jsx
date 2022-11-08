import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Form from './AddTodo';
import Footer from './Footer'

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [deadlineValue, setDeadlineValue] = useState(null);

  const fetchData = async () => {
    const data = await fetch(
      'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
    ).then((res) => res.json());
    setTodos(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Form
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        input={input}
        deadlineValue={deadlineValue}
        setDeadlineValue={setDeadlineValue}
      />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;