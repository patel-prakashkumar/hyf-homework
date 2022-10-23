import React, { useState } from 'react';

const Todo = ({ setTodos, todos, item, id, description, deadline }) => {
    const [editMode, setEditMode] = useState(false);
    const [descValue, setDescValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const deleteHandler = () => {
        const filtered = todos.filter((list) => list.id !== item.id);
        setTodos(filtered);
    };

    const checkedHandler = () => {
        setIsChecked(!isChecked);
    };

    function editHandler() {
        setEditMode(!editMode);
    }

    const editTextHandler = (e) => {
        setDescValue(e.target.value);
    };

    function updateHandler(id) {
        console.log(descValue);
        const update = todos.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    description: descValue,
                };
            }
            return item;
        });
        setTodos(update);
        setEditMode(false);
    }

    return (
        <ul>
            <li>
                <p >
                    {!editMode ? (
                        <>
                            <span className='span-desc' style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{item.description}</span>
                            <span className='span-date'>{item.deadline}</span>
                        </>

                    ) : (
                        <input type='text' onChange={editTextHandler} value={descValue} />
                    )}
                    <input type='checkbox' onChange={checkedHandler} />
                    <button onClick={deleteHandler}> Delete</button>
                    {!editMode ? (
                        <button onClick={() => editHandler()}>Edit</button>
                    ) : (
                        <button onClick={() => updateHandler(item.id)}> Update</button>
                    )}
                </p>
            </li>
        </ul>
    );
};

export default Todo;