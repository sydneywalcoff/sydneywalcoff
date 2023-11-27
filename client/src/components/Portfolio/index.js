import React from 'react';
import Project from '../Project';
import winePhoto from '../../assets/img/wine.jpg';
import musicPhoto from '../../assets/img/music.jpg';
import musicPhoto2 from '../../assets/img/music2.jpg';

const Portfolio = () => {
    const featuredProjects = [
        {
            name: 'AppTrack',
            deployedUrl: 'https://sw-app-tracker.herokuapp.com/',
            repoUrl: 'https://github.com/sydneywalcoff/app-tracker',
            img: musicPhoto2
        },
        {
            name: 'Expunge Assist',
            deployedUrl: 'https://expungeassist.org/',
            repoUrl: 'https://github.com/hackforla/expunge-assist',
            img: musicPhoto2
        }
    ];
    const projects = [
        {
            name: 'MasterTicket2.0',
            repoUrl: 'https://github.com/UCB-Bootcamp/masterTicket2.0',
            img: musicPhoto2
        },
        {
            name: 'MasterTicket',
            repoUrl: 'https://github.com/UCB-Bootcamp/masterTicket',
            img: musicPhoto
        },
        {
            name: 'Wine and Dine',
            repoUrl: 'https://github.com/UCB-Bootcamp/wine-and-dine',
            img: winePhoto
        },
    ];

    return (
        <section className="portfolio container">
            <div className="row">
                <h1 className="text-center display-3 title">Projects</h1>
            </div>
            <div className="projects row">
                <div className='feature-project'>
                    <Project project={featuredProjects[0]}/>
                    <Project project={featuredProjects[1]} />
                </div>
                <div className="secondary-projects">
                    {projects.map((project, i) => (
                        <div key={i} className="m-2">
                            <Project project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;