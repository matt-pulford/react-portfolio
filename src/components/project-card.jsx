import React from 'react';
import { Link } from 'react-router-dom';
import Tags from './Tags'; // Make sure this import path is correct

const ProjectCard = ({ image, title, description, url, website, reverse, tags }) => {
  const cardClass = reverse ? "project-card reverse" : "project-card";

  return (
    <div className={cardClass}>
      <img src={image} alt={title} className="project-image"/>
      <div className="project-info">
        <h1 className='project-title'><a className='product-link' href={url}>{website}</a></h1>
        <p className='project-description'>{description}</p>
        <Link to='/'>
          <button className='study-button'>Case Study</button>
        </Link>
        <Tags className='tags' tags={tags} />
      </div>
    </div>
  );
};

export default ProjectCard;
