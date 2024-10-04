// import React, { useState } from 'react';
// import './projects.css';

// const Projects = () => {
//   const [expandedProject, setExpandedProject] = useState(null);

//   const projects = [
//     {
//       title: "Early Stage Diagnosis of Diabetic Retinopathy Using Deep Learning",
//       description: "Developed a deep learning model for blood vessel segmentation and stage classification with 95.41% accuracy.",
//       technologies: ["Python", "OpenCV", "TensorFlow"],
//       link: "https://github.com/yourusername/image-processing-pipeline",
//       moreInfo: "• Image processing of “Fundus” images (CLAHE enhancement and Detail Preservation) • Blood vessel segmentation for RoI extraction using Nested U-Net architecture L4 with mean Intersection over Union (IoU) of 0.73 and a loss of -0.52 • Stage classification of DR using RoI extracted with an accuracy of 95.41% • Dataset used: APTOS database"
//     },
//     {
//       title: "Non-Invasive Detection and Stage Classification of Anemia",
//       description: "Created a model to detect anemia using conjunctiva images with an accuracy of 81.30%.",
//       technologies: ["Python", "PyTorch", "AWS"],
//       link: "https://github.com/yourusername/ecommerce-image-recognition",
//       moreInfo: "• Data collection with coordination with 4 different hospitals of Nepal from 437 different patients • Data labeling and Image processing • RoI extraction i.e Conjunctiva of the eye using U-Net architecture • Stage classification of Anemia using extracted conjunctiva of the eye with an accuracy of 81.30% • Model validation with real patients using mobile application"
//     },
//   ];

//   const toggleExpand = (index) => {
//     if (expandedProject === index) {
//       setExpandedProject(null); 
//     } else {
//       setExpandedProject(index); 
//     }
//   };

//   const closeOverlay = () => {
//     setExpandedProject(null); 
//   };

//   return (
//     <div className="projects">
//       <h2>Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <div className="technologies">
//               {project.technologies.map((tech, i) => (
//                 <span key={i} className="tech-tag">{tech}</span>
//               ))}
//             </div>

//             <button onClick={() => toggleExpand(index)} className="learn-more-btn">
//               {expandedProject === index ? "OK" : "Learn More"}
//             </button>

//             <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
//               View Project
//             </a>

//             {expandedProject === index && (
//               <div className="extra-info-overlay" onClick={closeOverlay}>
//                 <div className="extra-info-content">
//                   <p>{project.moreInfo}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "Early Stage Diagnosis of Diabetic Retinopathy Using Deep Learning",
      description: "Developed a deep learning model for blood vessel segmentation and stage classification with 95.41% accuracy.",
      technologies: ["Notebook","TensorFlow","CV2"],
      link: "https://github.com/yourusername/image-processing-pipeline",
      moreInfo: [
        "Image processing of “Fundus” images (CLAHE enhancement and Detail Preservation)",
        "Blood vessel segmentation for RoI extraction using Nested U-Net architecture L4 with mean Intersection over Union (IoU) of 0.73 and a loss of -0.52",
        "Stage classification of DR using RoI extracted with an accuracy of 95.41%",
        "Dataset used: APTOS database"
      ]
    },
    {
      title: "Non-Invasive Detection and Stage Classification of Anemia",
      description: "Created a model to detect anemia using conjunctiva images with an accuracy of 81.30%.",
      technologies: ["Notebook", "PyTorch", "CV2"],
      link: "https://github.com/yourusername/ecommerce-image-recognition",
      moreInfo: [
        "Data collection with coordination with 4 different hospitals of Nepal from 437 different patients",
        "Data labeling and Image processing",
        "RoI extraction i.e Conjunctiva of the eye using U-Net architecture",
        "Stage classification of Anemia using extracted conjunctiva of the eye with an accuracy of 81.30%",
        "Model validation with real patients using mobile application"
      ]
    },
  ];

  const toggleExpand = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  const closeOverlay = () => {
    setExpandedProject(null);
  };

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

            <button onClick={() => toggleExpand(index)} className="learn-more-btn">
              Learn More
            </button>

            {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a> */}

            {expandedProject === index && (
              <div className="extra-info-overlay" onClick={closeOverlay}>
                <div className="extra-info-content">
                  <ul>
                    {project.moreInfo.map((info, i) => (
                      <li key={i}>{info}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
