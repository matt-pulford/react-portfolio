import React from 'react';
import { Link } from 'react-router-dom';
import Tags from './Tags';



const ProjectCard = ({ image, title, description, url, website, caseStudy, reverse, tags }) => {
  const cardClass = reverse ? "project-card reverse" : "project-card";

  return (
    <div className={cardClass}>
      <img src={image} alt={title} className="project-image"/>
      <div className="project-info">
        <h1 className='project-title'><a className='product-link' href={url}>{website}</a></h1>
        <p className='project-description'>{description}</p>
        <Link to={caseStudy}>
          <button className='study-button'>Case Study</button>
        </Link>
        <Tags className='tags' tags={tags} />
      </div>
    </div>
  );
};

export default ProjectCard;
