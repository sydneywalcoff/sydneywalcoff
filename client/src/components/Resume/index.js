import React from 'react';
import resume from '../../assets/ResumeSydneyWalcoff.pdf'

const Resume = () => {
    return (
        <section className="container resume">
            <div className="row">
                <h1 className="display-3 col title text-center">History</h1>
            </div>
            <div className="row">
                <div className = 'col-5'>
                    <h4 className='section-title'>Resume</h4>
                    <p>Click <a href={resume} id="resume-link" download>here</a> to download my resume</p>
                </div>
                <div className='col-1'></div>
                <div className ='col-5'>
                    <h4 className="section-title">Technologies</h4>
                    <p>HTML5/CSS3, <br/> JavaScript, <br/> TypeScript, <br/> PHP, <br/> MaterialUI, <br/> JQuery, <br/> React, <br/> MongoDB, <br/> SQL, <br/>MERN Stack, <br/>Git, <br/> Heroku 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Resume;