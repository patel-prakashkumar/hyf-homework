import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GitUserContext from './GitUserContext';
import GitUser from './GitUser';

function App() {
    return <>
        <Header />
        <GitUserContext>
            <GitUser />
        </GitUserContext>
        <Footer />
    </>
}

export default App;