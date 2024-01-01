
  // ProjectCard.jsx
  import React from 'react';
  import { Link } from 'react-router-dom';

  const ProjectCard = ({ image, title, description, url }) => {
      return (
        <div className="project-card">
          <img src={image} alt={title} className="project-image"/>
          <div className="project-info">
            <h1 className='project-title'>{title}</h1>
            <p className='project-description'>{description}</p>
            <a className='product-link' href={url}><p>{url}</p></a>
            <Link to='/'>
            <button className='study-button'>Case Study</button>
            </Link>
            
          </div>
        </div>
      );
  };
  
  export default ProjectCard;
  