import React from 'react';

const Project = ({ project }) => {
    
    return (
        <div className="project row my-2">
            <img className="col-sm-6" src={project.img} alt={project.description}/>
            
            <div class="col align-self-center">
                <h2 className='title text-center'>{project.name}</h2>
                <div className="project-text row">
                    <p className='col-6 text-center'><a href={project.deployedUrl}>live</a></p>
                    <p className='col-6 text-center'><a href={project.repoUrl}>repo</a></p>
                </div>
            </div>
        </div>
    );
};

export default Project;