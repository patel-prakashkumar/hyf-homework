import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GitUserFetch from './GitUserFetch';
import GitUser from './GitUser';

function App() {
    return <>
        <Header />
        <GitUserFetch>
            <GitUser />
        </GitUserFetch>
        <Footer />
    </>
}

export default App;