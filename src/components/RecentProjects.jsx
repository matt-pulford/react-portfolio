import React from 'react';
import './css/recent-projects.css'
import ProjectCard from './project-card';
import HKCImage from '../images/HKC-screenshot.png'
import DFArtImage from '../images/df-screenshot.png'


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
        caseStudy='/hkc-case-study'
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
        caseStudy='/df-case-study'
      />
    </div>
  );
};

export default RecentProjects;

