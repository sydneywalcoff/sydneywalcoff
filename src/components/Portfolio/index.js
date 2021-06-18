import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            name: 'Wine and Dine',
            description: '',
            deployedUrl: '',
            repoUrl: '',
            img: ''
        },
        {
            name: 'MasterTicket',
            description: 'fullstack app build',
            deployedUrl: '',
            repoUrl: '',
            img: ''
        },
        {
            name: 'Wine and Dine',
            description: '',
            deployedUrl: '',
            repoUrl: '',
            img: ''
        },
        {
            name: 'Wine and Dine',
            description: '',
            deployedUrl: '',
            repoUrl: '',
            img: ''
        },
        {
            name: 'Wine and Dine',
            description: '',
            deployedUrl: '',
            repoUrl: '',
            img: ''
        },
        {
            name: 'Wine and Dine',
            description: '',
            deployedUrl: '',
            repoUrl: '',
            img: ''
        },
    ];

    return (
        <div className="portfolio container">
            <h1 className="row">Projects</h1>
            {projects.map((project, i) => (
                <div className="project row">
                    {/* img */}
                    <h2>{project.name}</h2>
                    <h3 className='col-6'><a href={project.deployedUrl}>live</a></h3>
                    <h3 className='col-6'><a href={project.repoUrl}>repo</a></h3>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;