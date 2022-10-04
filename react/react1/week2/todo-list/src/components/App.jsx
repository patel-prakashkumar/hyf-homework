import React, { useState, useEffect } from "react";
import todos from "../todo"

function App() {
    // setcout function to rendering second.
    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

     // delete todo list from array

     let [deleteList, setList] = useState(todos)
     let deleteTodo = (e) => {
         let x = e.target.getAttribute("deleteTodoList");
         setList(deleteList.filter(list => list.description !== x))
}

    // render todo list from Array
    const list = todos.map(list =>{return (
        <div>{list.description}
            <input type="checkbox"></input>
            <button deleteTodoList={list.description} onClick={deleteTodo}>Delete</button></div>
                
    )})

   

    // use line through on list
    const isDone = false;
    const lineThrough = { textDecoration: "line-through" };
    return <div>
        <h1>
            You have used {count} seconds on this website.
        </h1>
    {list}
    </div>
}

export default App;