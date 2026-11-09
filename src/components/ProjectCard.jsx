 import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-tag">{project.phase || 'Active'}</span>
        <h3>{project.title}</h3>
      </div>
      <p className="project-desc">{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Details &rarr;
        </a>
      )}
    </article>
  );
};

export default ProjectCard;