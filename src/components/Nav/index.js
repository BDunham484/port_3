import React from 'react';

const Nav = () => {
    return (
        //HEADER/NAV
        <header>
        <div>
            <h1>
                Brad Dunham
            </h1>
            <p>
                Web Developer
            </p>
        </div>
        {/* <!-- NAV LINKS --> */}
        <nav>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
    )
};

export default Nav;