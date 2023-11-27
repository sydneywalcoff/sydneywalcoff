import React from 'react';

const Project = ({ project }) => {
    
    return (
        <div class="project">
            <img src={project.img} alt={project.description}/>
            <h3>{project.name}</h3>
            <div className="col align-self-center">
                <div className="project-text row">
                    {project.deployedUrl && (<p className='col-6 text-center'><a href={project.deployedUrl}>live</a></p>)}
                    <p className='col-6 text-center'><a href={project.repoUrl}>repo</a></p>
                </div>
            </div>
        </div>
    );
};

export default Project;