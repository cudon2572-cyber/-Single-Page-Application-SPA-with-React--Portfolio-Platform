 import React, { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onAddProject({ title, description, phase: 'New Project' });
    setTitle('');
    setDescription('');
  };

  return (
    <section className="form-card">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <div className="input-group">
          <label htmlFor="title">Project Title</label>
          <input
            id="title"
            type="text"
            placeholder="e.g., E-Commerce Platform"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Brief overview of project scope..."
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;