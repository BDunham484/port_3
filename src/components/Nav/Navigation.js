import React from 'react';

const Navigation = (props) => {
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
    )
};

export default Navigation;