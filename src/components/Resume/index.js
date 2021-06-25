import React from 'react';
import resume from '../../assets/resume.PDF'

const Resume = () => {
    return (
        <section className="container resume">
            <h1 className="display-3 col title">History</h1>
            <div className="row">
                <div className = 'col-8'>
                    <h2>Resume</h2>
                    <a href={resume} download><p>Download my resume</p></a>
                </div>
                <div className ='col-4'>
                    <h4 className="display-6 title">Technologies</h4>
                    <ul className="technologies">
                        <li>MERN Stack</li>
                        <li>JavaScript</li>
                        <li>HTML5/CSS3</li>
                        <li>JQuery</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>Git</li>
                        <li>Heroku</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Resume;