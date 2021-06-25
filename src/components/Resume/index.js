import React from 'react';
import resume from '../../assets/resume.PDF'

const Resume = () => {
    return (
        <section className="container resume">
            <div class="row">
                <h1 className="display-3 col title text-center">History</h1>
            </div>
            <div className="row">
                <div className = 'col justify-content-center'>
                    <h2>Resume</h2>
                    <a href={resume} download><p>Download my resume</p></a>
                </div>
                <div className ='col'>
                    <h4 className="display-6 title">Technologies</h4>
                    <p>MERN Stack
                    JavaScript, HTML5/CSS3, JQuery, React, MongoDB, SQL, Git, Heroku
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Resume;