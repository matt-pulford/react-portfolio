// recent-projects.jsx

import React from 'react';
import './recent-projects.css'
import ProjectCard from './project-card';
import HKCImage from '../HKC-laptop-image.png'

const RecentProjects = () => {
  return (
    <div>
      <ProjectCard
        image={HKCImage}
        title="Hamilton Kratom Center"
        description="Key features include a dynamic product catalog, secure login/logout functionality, detailed product descriptions, and an intuitive checkout process."
        url="http://hamiltonkratomcenter.com"
      />

      {/* Repeat ProjectCard for other projects */}
    </div>
  );
};

export default RecentProjects;
