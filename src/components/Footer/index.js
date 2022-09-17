import React from 'react';
import githubLogo from '../../assets/images/github-circle-large.png';
import linkedInLogo from '../../assets/images/linkedin-circle-large.png';
import instagramLogo from '../../assets/images/instagram-circle-large.png';

const Footer = () => {
    return (
        <footer>
            <a href="https://www.github.com/BDunham484" target="_blank" rel="noreferrer">
                <img src={githubLogo} alt="Github Logo"/>
            </a>
            <a href="https://www.linkedin.com/in/brad-dunham-56581b1b3/" target="_blank" rel="noreferrer">
                <img src={linkedInLogo} alt="LinkedIn Logo" />
            </a>
            <a href="https://www.instagram.com/orbit_watches/" target="_blank" rel="noreferrer">
                <img src={instagramLogo} alt="Medium Logo" />
            </a>
        </footer>
    )
};

export default Footer;