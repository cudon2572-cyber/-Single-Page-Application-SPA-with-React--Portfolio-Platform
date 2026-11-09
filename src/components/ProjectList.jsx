 import React from 'react';
import ProjectCard from './ProjectCard';
import SearchBar from './SearchBar';

const ProjectList = ({ projects, searchTerm, onSearchChange }) => {
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="list-section">
      <div className="list-top-bar">
        <h2>Project Showcase ({filteredProjects.length})</h2>
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>
      {filteredProjects.length > 0 ? (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No projects match your search query.</p>
        </div>
      )}
    </section>
  );
};

export default ProjectList;