import React, { useState, useEffect } from "react";
import todos from "../todos"
function App() {
    // setcout function to rendering second.
    const [secondCount, setSecond] = useState(0);
    useEffect(() => {
        const timeInSecond = setInterval(() => setSecond((preSecond) => preSecond + 1), 1000);
        return () => {
            clearInterval(timeInSecond);
        };
    }, []);

    const [todoList, setTodList] = useState(todos)
    // Add todo list from array
    function handleAddTodo() {
        const addTodoList = [...todoList, {
            id: todoList.length + 1,
            description: "Random Text " + (todoList.length + 1)
        }]
        return setTodList(addTodoList)
    }
    // No Item in todo List 
    const [todoText, setText] = useState("");

    // Delete todo list from array
    function handleDeleteTodo(id) {
        const deleteTodoList = todoList.filter((todo) => todo.id !== id);
        if (deleteTodoList.length === 0) {
            setText("NO Item in Todo List")
        }
        return setTodList(deleteTodoList)
    }

    // use line through on checkbox list

    return <div>
        <h1 className="heading">
            You have used {secondCount} seconds on this website.
        </h1>
        <h1 className="heading">Todo List</h1>
        <button onClick={handleAddTodo}>Add Todo {todoText} </button>
        <div className="todo-list">{todoList.map(list => {
            return (
                <li key={list.id}>
                    {list.description}
                    <input type="checkbox"></input>
                    <button onClick={() => handleDeleteTodo(list.id)}>Delete</button>
                </li>

            )
        })}</div>
    </div>
}

export default App;