import React from 'react';
import githubLogo from '../../assets/images/github-circle-small.png';
import ProjectData from '../../data/projectData';

const Portfolio = () => {
    
    const projects = ProjectData;
    
    return (
        // <!-- PROJECTS SECTION -->
        <section id="portfolio">
            <div className="project-wrapper">
                {projects.map((project, index) => (
                    <div key={index}>
                        <div className="project-title-wrapper">
                            <p className='wrapped-titles'>
                                {project.name}
                            </p>
                            <span>
                                <a className="githubLogo" href={project.githubLink} target="_blank" rel="noreferrer">
                                    <img src={githubLogo} alt="Github Logo" />
                                </a>
                            </span>
                        </div>
                        <a href={project.projectLink} target="_blank" rel="noreferrer"><img className="wrapped-img"
                        src={project.img}
                        alt={project.alt} />
                        </a>
                        <div className='description-wrapper'>
                            <div className="project-description">
                                <div className="project-text-container">
                                    <div className="project-text">
                                        {project.projectText}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Portfolio;