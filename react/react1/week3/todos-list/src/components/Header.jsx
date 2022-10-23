import React, { useState, useEffect } from "react";
function Header() {
    // setcout function to rendering second.
    const [secondCount, setSecond] = useState(0);
    useEffect(() => {
        const timeInSecond = setInterval(() => setSecond((preSecond) => preSecond + 1), 1000);
        return () => {
            clearInterval(timeInSecond);
        };
    }, []);
    return <>
        <header>Todo List Project</header>
        <h1 className="heading">
            You have used {secondCount} seconds on this website.
        </h1>
    </>
}
export default Header;