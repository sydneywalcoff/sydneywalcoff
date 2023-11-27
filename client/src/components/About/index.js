import React from 'react';
import photo from '../../assets/img/about-me.jpg';

const About = () => {
    return (
        <section className="about-me container">
            <div className='row'><h4 className="text-center display-3">Hi. I'm Sydney!</h4></div>
            <div className="row">
                <img src={photo} alt="Sydney smiling in a grey turtleneck" className="col-sm-4 my-2" />
                <div className="col align-self-center about-text">
                    <p>I'm a Full-Stack Web Developer with Front-end expertise based in Los Angeles, CA. Currently volunteering with HackforLA as the Developer Lead on the <a target='_BLANK' rel='noreferrer' href="https://expungeassist.org">Expunge Assist</a> project.</p>
                    <p>As a bootcamp graduate, I'm known as a reliable, highly driven, and deeply determined problem solver. I'm always ready to do what is necessary to support the project. I'm quick to pick up new technologies and languages on the fly and ready to find my next project.</p>
                    <p>Outside of coding, I spend my time watching baseball (Go Dodgers!), playing with my dog, Liba, snowboarding, and making music.</p>
                </div>
            </div>
        </section>
    );
};

export default About;