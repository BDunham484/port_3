import React from 'react';
// import Navigation from './Navigation';
// import MobileNavigation from './MobileNavigation';
import { pageReload } from '../../utils/helpers';

const Nav = (props) => {
    const {
        aboutSelected,
        setAboutSelected,
        projectsSelected,
        setProjectsSelected,
        resumeSelected,
        setResumeSelected,
        contactSelected,
        setContactSelected
    } = props;
    return (
        //HEADER/NAV
        <header>
        <div>
            <h1>
                <a href="#home" onClick={() => {setAboutSelected(false);setProjectsSelected(false);setResumeSelected(false);setContactSelected(false);pageReload()}}>
                Brad Dunham
                </a>
            </h1>
            <p>
                Web Developer
            </p>
        </div>
        {/* <!-- NAV LINKS --> */}
        < nav id="Navigation">
            <ul>
                <li className={`${aboutSelected && 'navActive'}`}>
                    <a href="#about" onClick={() => { setAboutSelected(true); setProjectsSelected(false); setResumeSelected(false); setContactSelected(false) }}>About</a>
                </li>
                <li className={`${projectsSelected && 'navActive'}`}>
                    <a href="#projects" onClick={() => { setAboutSelected(false); setProjectsSelected(true); setResumeSelected(false); setContactSelected(false) }}>Projects</a>
                </li>
                <li className={`${resumeSelected && 'navActive'}`}>
                    <a href="#resume" onClick={() => { setAboutSelected(false); setProjectsSelected(false); setResumeSelected(true); setContactSelected(false) }}>Resume</a>
                </li>
                <li className={`${contactSelected && 'navActive'}`}>
                    <a href="#contact" onClick={() => { setAboutSelected(false); setProjectsSelected(false); setResumeSelected(false); setContactSelected(true) }}>Contact</a>
                </li>
            </ul>
        </nav >
        < nav id="MobileNavigation">
            <ul>
                <li className={`${aboutSelected && 'navActive'}`}>
                    <a href="#about" onClick={() => { setAboutSelected(true); setProjectsSelected(false); setResumeSelected(false); setContactSelected(false) }}>About</a>
                </li>
                <li className={`${projectsSelected && 'navActive'}`}>
                    <a href="#projects" onClick={() => { setAboutSelected(false); setProjectsSelected(true); setResumeSelected(false); setContactSelected(false) }}>Projects</a>
                </li>
                <li className={`${resumeSelected && 'navActive'}`}>
                    <a href="#resume" onClick={() => { setAboutSelected(false); setProjectsSelected(false); setResumeSelected(true); setContactSelected(false) }}>Resume</a>
                </li>
                <li className={`${contactSelected && 'navActive'}`}>
                    <a href="#contact" onClick={() => { setAboutSelected(false); setProjectsSelected(false); setResumeSelected(false); setContactSelected(true) }}>Contact</a>
                </li>
            </ul>
        </nav >
        {/* <Navigation></Navigation>
        <MobileNavigation></MobileNavigation> */}
    </header>
    )
};

export default Nav;