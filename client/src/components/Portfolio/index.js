import React from 'react';
import Project from '../Project';
import winePhoto from '../../assets/img/wine.jpg';
import musicPhoto from '../../assets/img/music.jpg';
import musicPhoto2 from '../../assets/img/music2.jpg';
import EAPhoto from '../../assets/img/EA-logo.png';
import appTrackPhoto from '../../assets/img/app-tracker.png';

const Portfolio = () => {
    const featuredProjects = [
        {
            name: 'AppTrack',
            deployedUrl: 'https://sw-app-tracker.herokuapp.com/',
            repoUrl: 'https://github.com/sydneywalcoff/app-tracker',
            img: appTrackPhoto,
            description: 'AppTrack is a TypeScript React MongoDB Node.js application for job seekers to track their applications and optimize their search.',
            etc: 'login: test | password: test'
        },
        {
            name: 'Expunge Assist',
            deployedUrl: 'https://expungeassist.org/',
            repoUrl: 'https://github.com/hackforla/expunge-assist',
            img: EAPhoto,
            description: 'Expunge Assist is a TypeScript React letter generator tool to help justice-impacted individuals seek expungement.'
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
                <h3 className='display-6 text-center'>Bootcamp Projects</h3>
                <div className="tertiary-projects">
                    {projects.map((project, i) => (
                        <Project project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;