import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from "./TodoList"
import Header from './Header';
import Footer from './Footer';

function App() {
    return <>
        <Header />
        <TodoList />
        <Footer />
    </>
}

export default App;