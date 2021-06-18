import React from 'react';

const Project = props => {

    return (
        <div className="project row">
            {/* img */}
            <h2>{project.name}</h2>
            <h3 className='col-6'><a href={project.deployedUrl}>live</a></h3>
            <h3 className='col-6'><a href={project.repoUrl}>repo</a></h3>
        </div>
    );
};

export default Project;