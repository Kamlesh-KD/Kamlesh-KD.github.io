import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Early Stage Diagnosis of Diabetic Retinopathy Using Deep Learning",
      description: "Developed a deep learning model for blood vessel segmentation and stage classification with 95.41% accuracy.",
      technologies: ["Python", "OpenCV", "TensorFlow"],
      link: "https://github.com/yourusername/image-processing-pipeline"
    },
    {
      title: "Non-Invasive Detection and Stage Classification of Anemia",
      description: "Created a model to detect anemia using conjunctiva images with an accuracy of 81.30%.",
      technologies: ["Python", "PyTorch", "AWS"],
      link: "https://github.com/yourusername/ecommerce-image-recognition"
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
