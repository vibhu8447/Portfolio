import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    gitUrl,
    projectUrl,
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={projectUrl} target="_blank" className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                <a href={gitUrl} target="_blank" className='project-yt-link'>
                    See More!
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
