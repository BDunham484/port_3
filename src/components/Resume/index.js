import React from 'react';
import ResumePDF from '../../assets/images/Resume.pdf';

const Resume = () => {
    return (
        <section id="resume">
            <h2>
                RESUME
            </h2>
            <embed src={ResumePDF}></embed>
        </section>
    )
};

export default Resume;