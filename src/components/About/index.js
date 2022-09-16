import React from 'react';
import texturedTriangle from '../../assets/images/lighter-textured-triangle.png';
import Selfie from '../../assets/images/selfie.png';

const About = () => {
    return (
        // <!-- ABOUT SECTION -->
        <section id="about">
            <div className="about-me">
                <div>
                    <span className="about-image-triangle-left">
                        <img src={texturedTriangle}
                    alt="small light grey textured triangle with a gold border" />
                    </span>
                    <span id="about-selfie">
                        <img src={Selfie}
                        alt="half of my face in black and white with a neon triangle floating around it" />
                    </span>
                    <span className="about-image-triangle-right">
                        <img src={texturedTriangle}
                    alt="small light grey textured triangle with a gold border" />
                    </span>
                </div>
                <div>
                    <h2>
                        ABOUT ME...
                    </h2>
                    <p>
                        I’m a Full-Stack Developer with a strong desire to build visually appealing, fast and responsive websites.  As a hobby, I used to create websites for fun, but now I’m shifting to turn that creative outlet into a career. I’m a few weeks away from graduating from the Coding Bootcamp at the University of Texas at Austin. I’m currently looking for a role where I can continue learning and build on the foundation I’ve already established.  I’m excited to see how far I can go and what I can create along the way…
                    </p>
                    <div id="lower-triangle-small-screen">
                        <img src={texturedTriangle}
                            alt="small light grey textured triangle with a gold border" />
                    </div>
                </div>
            </div>
            <div className="skill-lists">
                <ul className="list-styles">
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                    <li className="bullet-design-left"></li>
                </ul>
                <ul className="list-styles">
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                    <li className="bullet-design-right"></li>
                </ul>
                <div className="list-styles skills">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                    <p>BOOTSTRAP</p>
                    <p>JQUERY</p>
                    <p>SQL</p>
                    <p>MYSQL</p>
                    <p>SEQUELIZE</p>
                    <p>NOSQL</p>
                    <p>MONGODB</p>
                    <p>MONGOOSE</p>
                    <p>INDEXEDDB</p>
                    <p>NODE.JS</p>
                    <p>EXPRESS</p>
                    <p>HANDLEBARS</p>
                </div>
            </div>
        </section>
    )
};

export default About;