import React, { useState, useEffect } from "react";
import todos from "../todos"
function TodoList() {
    // setcout function to rendering second.
    const [secondCount, setSecond] = useState(0);
    useEffect(() => {
        const timeInSecond = setInterval(() => setSecond((preSecond) => preSecond + 1), 1000);
        return () => {
            clearInterval(timeInSecond);
        };
    }, []);

    const [todoList, setTodList] = useState(todos);
    // No Item in todo List 
    const [todoText, setText] = useState("");   
    // Add todo list from array
    function handleAddTodo() {
        const addTodoList = [...todoList, {
            id: todoList.length + 1,
            description: "Random Text " + (todoList.length + 1)
        }]
        if (addTodoList.length !== 0) {
            setText("")
        }
        return setTodList(addTodoList)
    }
// Add checkbox Todo List 

 // Delete todo list from array
    function handleDeleteTodo(id) {
        const deleteTodoList = todoList.filter((todo) => todo.id !== id);
        if (deleteTodoList.length === 0) {
            setText("No Item in Todo List")
        }
        return setTodList(deleteTodoList)
    }

    return <div>
        <h1 className="heading">
            You have used {secondCount} seconds on this website.
        </h1>
        <h1 className="heading">Todo List</h1>
        <button onClick={handleAddTodo}>Add Todo  </button>
         <p>{todoText}</p>
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

export default TodoList;