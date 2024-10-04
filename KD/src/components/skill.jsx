// import React, { useState } from 'react';
// import { FaPython, FaGit, FaMicrosoft } from 'react-icons/fa'; 
// import { GrHeroku } from "react-icons/gr";
// import { SiCplusplus, SiPytorch, SiTensorflow, SiNumpy, SiScikitlearn, SiOpencv, SiFlask, SiPandas, SiJupyter, SiVisualstudiocode } from 'react-icons/si'; // More icons
// import './Skills.css'; 

// const Skills = () => {
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   const libraries = [
//     { name: 'PyTorch', icon: <SiPytorch /> },
//     { name: 'TensorFlow', icon: <SiTensorflow /> },
//     { name: 'NumPy', icon: <SiNumpy /> },
//     { name: 'Pandas', icon: <SiPandas /> },
//     { name: 'Scikit-learn', icon: <SiScikitlearn /> },
//     { name: 'OpenCV', icon: <SiOpencv /> },
//     { name: 'Flask', icon: <SiFlask /> },
//   ];

//   const tools = [
//     { name: 'Git', icon: <FaGit /> },
//     { name: 'Jupyter Notebook', icon: <SiJupyter /> },
//     { name: 'VS Code', icon: <SiVisualstudiocode /> },
//     { name: 'Heroku', icon: <GrHeroku /> },
//     { name: 'Microsoft Office', icon: <FaMicrosoft /> },
//   ];

//   const languages = [
//     { name: 'Python', icon: <FaPython /> },
//     { name: 'C++', icon: <SiCplusplus /> },
//   ];

//   const renderIcons = (skillsArray) => {
//     return skillsArray.map((skill, index) => (
//       <div
//         key={index}
//         className="skill-icon"
//         onMouseEnter={() => setHoveredSkill(skill.name)}
//         onMouseLeave={() => setHoveredSkill(null)}
//       >
//         {skill.icon}
//         {hoveredSkill === skill.name && <span className="skill-name">{skill.name}</span>}
//       </div>
//     ));
//   };

//   return (
//     <div className="skills-section">
//       <div className="skills-category">
//         <h3>Languages</h3>
//         <div className="skills-container">
//           {renderIcons(languages)}
//         </div>
//       </div>

//       <div className="skills-category">
//         <h3>Libraries</h3>
//         <div className="skills-container">
//           {renderIcons(libraries)}
//         </div>
//       </div>

//       <div className="skills-category">
//         <h3>Tools</h3>
//         <div className="skills-container">
//           {renderIcons(tools)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaGit, FaMicrosoft } from 'react-icons/fa'; 
import { GrHeroku } from "react-icons/gr";
import { SiCplusplus, SiPytorch, SiTensorflow, SiNumpy, SiScikitlearn, SiOpencv, SiFlask, SiPandas, SiJupyter, SiVisualstudiocode } from 'react-icons/si'; 
import './Skills.css'; 

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const libraries = [
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    { name: 'OpenCV', icon: <SiOpencv /> },
    { name: 'Flask', icon: <SiFlask /> },
  ];

  const tools = [
    { name: 'Git', icon: <FaGit /> },
    { name: 'Jupyter Notebook', icon: <SiJupyter /> },
    { name: 'VS Code', icon: <SiVisualstudiocode /> },
    { name: 'Heroku', icon: <GrHeroku /> },
    { name: 'Microsoft Office', icon: <FaMicrosoft /> },
  ];

  const languages = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
  ];

  const renderIcons = (skillsArray, delayMultiplier) => {
    return skillsArray.map((skill, index) => (
      <motion.div
        key={index}
        className="skill-icon"
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: (index * 0.1) + delayMultiplier }}
        viewport={{ once: true }}
      >
        {skill.icon}
        {hoveredSkill === skill.name && <span className="skill-name">{skill.name}</span>}
      </motion.div>
    ));
  };

  return (
    <div className="skills-section">
      <div className="skills-category">
        <h3>Languages</h3>
        <div className="skills-container">
          {renderIcons(languages, 0)}
        </div>
      </div>

      <div className="skills-category">
        <h3>Libraries</h3>
        <div className="skills-container">
          {renderIcons(libraries, 1)} {/* Delay multiplier to trigger after languages */}
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools</h3>
        <div className="skills-container">
          {renderIcons(tools, 2)} {/* Delay multiplier to trigger after libraries */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
