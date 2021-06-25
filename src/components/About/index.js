import React from 'react';
import photo from '../../assets/img/about-me.jpg';

const About = () => {
    return (
        <section className="about-me container">
            <div className='row'><h1 class="text-center display-2">Hi. I'm Sydney!</h1></div>
            <div className="row">
                <img src={photo} alt="Sydney smiling in a grey turtleneck" className="col-sm-4" />
                <div className="col align-self-center">
                    <p >After graduating from UC Davis in 2017 with bachelor degrees in Music and in Economics, I'm currently on a journey to become a fullstack developer.</p>
                    <p >When not learning a new programming language, I can be found making music, playing with my dog, Liba, or snowboarding.</p>
                </div>
            </div>
        </section>
    );
};

export default About;