import React from 'react';
import photo from '../../assets/img/about-me.jpg';

const About = () => {
    return (
        <section className="about-me container">
            <div className='row'><h1 className="text-center display-2">Hi. I'm Sydney!</h1></div>
            <div className="row">
                <img src={photo} alt="Sydney smiling in a grey turtleneck" className="col-sm-4" />
                <div className="col align-self-center">
                    <p >Full-Stack web developer brings strong teamwork skills to ensure success for any team. Recently completed full stack development course through UC Berkeley Extension, successfully developing skills like HTML, CSS, JavaScript, React.js, and Node.js. Known as a reliable, highly driven, and deeply determined problem solver. Always ready to lead or support my teammates to organize the project. Excited to bring passion and excitement to solving today’s most challenging problems.</p>
                    <p >When not learning a new programming language, I can be found making music, or playing with my dog, Liba.</p>
                </div>
            </div>
        </section>
    );
};

export default About;