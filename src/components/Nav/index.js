import React from 'react';
// import Navigation from './Navigation';
// import MobileNavigation from './MobileNavigation';
import { useState } from 'react';
import { pageReload } from '../../utils/helpers';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import { motion } from 'framer-motion';

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
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <VscMenu id="hamburger" onClick={() => setOpen(!open)}/>
    const closeIcon = <VscChromeClose id="hamburger" onClick={() => setOpen(!open)}/>
    const closeMobileMenu = () => setOpen(false);
    const animateFrom = { opacity: 0, y: -80 }
    const animateTo = { opacity: 1, y: 0 }
    return (
        //HEADER/NAV
        <header>
        <div>
            <h1>
                <a href="#home" onClick={() => {setAboutSelected(false);setProjectsSelected(false);setResumeSelected(false);setContactSelected(false);closeMobileMenu();pageReload()}}>
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
            {/* <VscMenu id="hamburger" onClick={() => setOpen(!open)}/> */}
            {open ? closeIcon : hamburgerIcon}
            {open && <ul>
                <motion.li initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
                className={`${aboutSelected}`}>
                    <a className="navMobileLinks" href="#about" onClick={() => { setAboutSelected(true); setProjectsSelected(false); setResumeSelected(false); setContactSelected(false);closeMobileMenu() }}>About</a>
                </motion.li>
                <motion.li initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
                className={`${aboutSelected}`}>
                    <a className="navMobileLinks" href="#projects" onClick={() => { setAboutSelected(false); setProjectsSelected(true); setResumeSelected(false); setContactSelected(false);closeMobileMenu() }}>Projects</a>
                </motion.li>
                <motion.li initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                className={`${aboutSelected}`}>
                    <a className="navMobileLinks" href="#resume" onClick={() => { setAboutSelected(false); setProjectsSelected(false); setResumeSelected(true); setContactSelected(false);closeMobileMenu() }}>Resume</a>
                </motion.li>
                <motion.li initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
                className={`${aboutSelected}`}>
                    <a className="navMobileLinks" href="#contact" onClick={() => { setAboutSelected(false); setProjectsSelected(false); setResumeSelected(false); setContactSelected(true);closeMobileMenu() }}>Contact</a>
                </motion.li>
            </ul>}
        </nav >
        {/* <Navigation></Navigation>
        <MobileNavigation></MobileNavigation> */}
    </header>
    )
};

export default Nav;