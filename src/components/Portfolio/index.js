import React from 'react';
// import Project from '../Project';
import winePhoto from '../../img/wine.jpg';
import musicPhoto from '../../img/music.jpg';
import budgetPhoto from '../../img/budget.jpg';
import techBlogPhoto from '../../img/tech-blog.jpg';

const Portfolio = () => {
    const projects = [
        {
            name: 'Wine and Dine',
            description: 'wine and food pairing app',
            deployedUrl: '',
            repoUrl: 'https://github.com/UCB-Bootcamp/wine-and-dine',
            img: winePhoto
        },
        {
            name: 'MasterTicket',
            description: 'local events forum',
            deployedUrl: 'https://masterticket.herokuapp.com/',
            repoUrl: 'https://github.com/UCB-Bootcamp/masterTicket',
            img: musicPhoto
        },
        {
            name: 'Budget Tracker',
            description: 'budget tracker with on and offline capabilities',
            deployedUrl: 'https://thawing-island-56218.herokuapp.com/',
            repoUrl: 'https://github.com/sydneywalcoff/budget-tracker',
            img: budgetPhoto
        },
        {
            name: 'Tech Blog',
            description: '',
            deployedUrl: 'https://stormy-dawn-50873.herokuapp.com/',
            repoUrl: 'https://github.com/sydneywalcoff/tech-blog',
            img: techBlogPhoto
        },
        {
            name: 'Project 5',
            description: '',
            deployedUrl: 'https://stormy-dawn-50873.herokuapp.com/',
            repoUrl: 'https://github.com/sydneywalcoff/tech-blog',
            img: techBlogPhoto
        },
        {
            name: 'Project 6',
            description: '',
            deployedUrl: 'https://stormy-dawn-50873.herokuapp.com/',
            repoUrl: 'https://github.com/sydneywalcoff/tech-blog',
            img: techBlogPhoto
        },
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