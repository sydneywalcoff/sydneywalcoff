import React from 'react';
import photo from '../../img/about-me.jpg';

const About = () => {
    return (
        <div className="about-me container">
            <img src={photo} alt="Sydney smiling in a grey turtleneck" className="col" />
            <p>After graduating from UC Davis in 2017 with bachelor degrees in Music and in Economics, I'm currently on a journey to become a fullstack developer.</p>

            <p>When not learning a new programming language, I can be found making music, playing with my dog, Liba, or snowboarding.</p>
        </div>
    );
};

export default About;