import React from 'react';
import './recent-projects.css'
import ProjectCard from './project-card';
import HKCImage from '../images/HKC-screenshot.png'
import DFArtImage from '../images/FDArt-screenshot.png'

const RecentProjects = () => {
  return (
    <div>
      <ProjectCard
        image={HKCImage}
        title="Hamilton Kratom Center"
        description="Key features include a dynamic product catalog, secure login/logout functionality, detailed product descriptions, and an intuitive checkout process."
        website="hamiltonkratomcenter.com"
        url="http://hamiltonkratomcenter.com"
        tags={['E-commerce', 'NodeJS', 'EJS','Express', 'PostgreSQL', 'HTML', 'CSS', 'Adaptive Layout']}
      />
      <div className='spacer'></div>
      <ProjectCard
        image={DFArtImage}
        title="Denis Fafard Art"
        description="Denis Fafard's artistry captures a chaotic harmony, vividly portrayed in his abstract paintings that pulse with the vibrant energy of life."
        website="denisfafard.art"
        url="http://denisfafard.art"
        reverse={true}
        tags={['Adaptive Layout', 'NodeJS','EJS', 'HTML', 'CSS Grid']}
      />
    </div>
  );
};

export default RecentProjects;

