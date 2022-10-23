import React from 'react';

const AddTodo = ({
  setInput,
  todos,
  setTodos,
  input,
  deadlineValue,
  setDeadlineValue,
}) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      description: input,
      deadline: deadlineValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
    setDeadlineValue('');
  };

  const deadlineHandler = (e) => {
    e.preventDefault();
    setDeadlineValue(e.target.value);
  };

  return (
    <form className='form'>
    <h1 className='heading'>Todo List</h1>
    <div className='add-todo'>
    <label>Todo Description</label>
      <input
        onChange={inputHandler}
        type='text'
        className='todo-input'
        value={input}
      /> <br />
     <label>Todo deadline</label>
      <input onChange={deadlineHandler} type='date' value={deadlineValue} />
      <br />
      <button onClick={submitHandler} className='todo-btn' type='submit'>
        Add todo
      </button>
      <br />
      {todos.length === 0 && <span>No Item List : Add Item in List</span>}
      </div>
    </form>
  );
};
export default AddTodo;