import React, { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './App.css';

const initialProjects = [
  {
    id: 1,
    title: 'Brand Strategy Redesign',
    description: 'A full identity overhaul and strategic positioning overhaul for digital agency clients.',
    phase: 'Completed',
  },
  {
    id: 2,
    title: 'Mobile Banking Dashboard',
    description: 'Custom web interface providing analytics and transaction flows for fintech users.',
    phase: 'In Progress',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Migration',
    description: 'Architecting scalable serverless microservices for dynamic web applications.',
    phase: 'Planning',
  },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    const projectWithId = { ...newProject, id: Date.now() };
    setProjects([projectWithId, ...projects]);
  };

  return (
    <div className="app-layout">
      <Header />
      <main className="main-container">
        <ProjectForm onAddProject={handleAddProject} />
        <ProjectList
          projects={projects}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </main>
    </div>
  );
}

export default App;