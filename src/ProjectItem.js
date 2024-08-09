import React from 'react';
import './ProjectItem.css';

function ProjectItem({ title, description, imageUrl }) {
  return (
    <div className="project-item">
      <img src={imageUrl} alt={`${title} snapshot`} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
}

export default ProjectItem;
