import React from 'react';

const Nav = (props) => {
    const {
        aboutSelected,
        setAboutSelected,
        projectsSelected,
        setProjectsSelected,
        contactSelected,
        setContactSelected
    } = props;
    return (
        //HEADER/NAV
        <header>
        <div>
            <h1>
                <a href="#home">
                Brad Dunham
                </a>
            </h1>
            <p>
                Web Developer
            </p>
        </div>
        {/* <!-- NAV LINKS --> */}
        <nav>
            <ul>
                <li className={`${aboutSelected && 'navActive'}`}>
                    <a href="#about" onClick={() => {setAboutSelected(true);setProjectsSelected(false);setContactSelected(false)}}>About</a>                               
                </li>
                <li className={`${projectsSelected && 'navActive'}`}>
                    <a href="#projects" onClick={() => {setAboutSelected(false);setProjectsSelected(true);setContactSelected(false)}}>Projects</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li className={`${contactSelected && 'navActive'}`}>
                    <a href="#contact" onClick={() => {setAboutSelected(false);setProjectsSelected(false);setContactSelected(true)}}>Contact</a>
                </li>
            </ul>
        </nav>
    </header>
    )
};

export default Nav;