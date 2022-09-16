import React from 'react';
import baseTriangle from '../../assets/images/textured-triangle.png';
import thinTriangle from '../../assets/images/antique-white-triangle.png';


const Hero = () => {
    return (
        // <!-- HERO SECTION -->
        <section class="hero">
            <div class="typing">
                <p id="upper">
                    Hello! My name is Brad Dunham...
                </p>
                <p id="lower">
                    ...and I love making websites!
                </p>
            </div>
            <div id="hero-images-container">
                <img id="base-triangle" src={baseTriangle}
                    alt="large dark triangle with golden border" />

                <img id="upper-triangle" src={thinTriangle}
                    alt="clear triangle with a thin golden border pointing down" />

                <img id="lower-triangle" src={thinTriangle}
                    alt="clear triangle with a thin golden border pointing down" />

                <img class="comet const-comet"
                    src="https://www.freeiconspng.com/thumbs/comet/comet-transparent-background-image-11.png"
                    alt="a comet" />
            </div>
        </section>
    )
};

export default Hero;