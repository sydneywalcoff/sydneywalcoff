import React from 'react';
import photo from '../../assets/img/about-me.jpg';

const About = () => {
    return (
        <section className="about-me container">
            <div className='row'><h4 className="text-center display-3">Hi. I'm Sydney!</h4></div>
            <div className="row">
                <img src={photo} alt="Sydney smiling in a grey turtleneck" className="col-sm-4 my-2" />
                <div className="col align-self-center about-text">
                    <p >Full-Stack web developer brings strong teamwork skills to ensure success for any team. Recently completed full stack development course through UC Berkeley Extension, successfully developing skills like HTML, CSS, JavaScript, React.js, and Node.js. Known as a reliable, highly driven, and deeply determined problem solver. Always ready to lead or support my teammates to organize the project. Excited to bring passion and excitement to solving today’s most challenging problems.</p>
                    <p >Outside of coding, I spend my time watching baseball (Go Dodgers!), playing with my dog, Liba, and making music.</p>
                </div>
            </div>
        </section>
    );
};

export default About;