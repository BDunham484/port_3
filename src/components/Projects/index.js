import React from 'react';
import petSpaceScreenshot from '../../assets/images/petSpace-screenshot.png';
import todaysTechScreenshot from '../../assets/images/tech-blog-home.png';
import weatherDashboardScreenshot from '../../assets/images/weather-dashboard.png';
import mookiesScreenshot from '../../assets/images/mookies-screenshot.png';
import orbitWathcesScreenshot from '../../assets/images/orbit-watches-home.png';

const Projects = () => {
    return (
        // <!-- PROJECTS SECTION -->
        <section id="projects">
            <div>
                <p id="main-title">
                    PETSPACE
                </p>
                <a href="https://boiling-plateau-13571.herokuapp.com/login"><img id="main-img"
                    src={petSpaceScreenshot} alt="petSpace login page" />
                </a>
            </div>
            <div className="project-description">
                <div className="project-text-container">
                    <div className="project-text">
                        An MVC style social media site with a focus on pets.  This was a group project we did in class at U.T. I was the lead on Github, creating most routes, some JS logic, login technologies, CSS/Bootstrap, Handlebar development, and image uploading.
                    </div>
                </div>
            </div>
            <div className="project-wrapper">
                <div>
                    <p className="wrapped-titles">
                        TODAY'S TECH
                    </p>
                    <a href="https://powerful-journey-30948.herokuapp.com/"><img className="wrapped-img"
                        src={todaysTechScreenshot}
                        alt="A tech based blog home-page" />
                    </a>
                </div>
                <div className="project-description">
                    <div className="project-text-container">
                        <div className="project-text">
                            A tech blog applying the MVC paradigm.  Allows users to sign up, login and logout. Once logged in, Users can Post, Edit, and Delete all of their posts through the user dashboard. 
                        </div>
                    </div>
                </div> 
                <div>
                    <p className="wrapped-titles">
                        WEATHER DASHBOARD
                    </p>
                    <a href="https://bdunham484.github.io/weather-request-permitting/"><img className="wrapped-img"
                        src={weatherDashboardScreenshot}
                        alt="A weather dashboard. Search by city to the left.  Results to the right" />
                    </a>
                </div>
                <div className="project-description">
                    <div className="project-text-container">
                        <div className="project-text">
                            A server-side API based weather dashboard that runs in the browser. Get the current weather plus the 5 day forecast after selecting a city. 
                        </div>
                    </div>
                </div>
                <div>
                    <p className="wrapped-titles">
                        MOOKIES
                    </p>
                    <a href="https://bdunham484.github.io/project1/"><img className="wrapped-img"
                        src={mookiesScreenshot}
                        alt="an entertainment search engine that displays movie results to the lower left and book results to the lower right." />
                    </a>
                </div>
                <div className="project-description">
                    <div className="project-text-container">
                        <div className="project-text">
                            An entertainment search engine using 3rd party API's. Enter your query into the search bar and recieve movie results on the left from one API and book results on the right from another.
                        </div>
                    </div>
                </div>
                <div>
                    <p className="wrapped-titles">
                        ORBIT WATCHES
                    </p>
                    <a href="https://www.orbit-watches.com"><img className="wrapped-img"
                        src={orbitWathcesScreenshot}
                        alt="a neon sign in front of a black brick wall that reads 'orbit-watches'." />
                    </a>
                </div>
                <div className="project-description">
                    <div className="project-text-container">
                        <div className="project-text">I develop Fitbit clock faces and sell them in their app store. The clock
                            faces
                            are developed using SVG, CSS, JS and a decent helping of Photoshop. This is a
                            simple website I built to showcase them all.</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;