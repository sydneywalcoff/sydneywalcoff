import React from 'react';
// import Project from '../Project';
import winePhoto from '../../img/wine.jpg';
import musicPhoto from '../../img/music.jpg';

const Portfolio = () => {
    const projects = [
        {
            name: 'Wine and Dine',
            description: 'wine ',
            deployedUrl: '',
            repoUrl: '',
            img: winePhoto
        },
        {
            name: 'MasterTicket',
            description: 'fullstack app build',
            deployedUrl: '',
            repoUrl: '',
            img: musicPhoto
        },
        {
            name: 'Photo Port',
            description: '',
            deployedUrl: '',
            repoUrl: '',
            img: ''
        },
        {
            name: 'ZooKeepr',
            description: '',
            deployedUrl: '',
            repoUrl: '',
            img: ''
        }
    ];

    return (
        <div className="portfolio container">
            <h1 className="row">Projects</h1>
            {projects.map((project, i) => (
                <div className="project row" key={project.name}>
                    <img src={project.img} alt={project.description}/>
                    <h2>{project.name}</h2>
                    <p className='col-6'><a href={project.deployedUrl}>live</a></p>
                    <p className='col-6'><a href={project.repoUrl}>repo</a></p>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;