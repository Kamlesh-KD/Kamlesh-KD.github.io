import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useWindowSize } from '../utils/useWindowSize';
import './HomePage.css';

const HomePage = () => {
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  return (
    <div className="homepage">
      <motion.div 
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src="kamlesh.jpg" 
          alt="Kamlesh Ranabhat" 
          className="profile-photo"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1 
          className="name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Kamlesh Ranabhat
        </motion.h1>
        <motion.p 
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Machine Learning Researcher
        </motion.p>
        <motion.p 
          className="expertise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Image Processing | OpenCV
        </motion.p>
        {isMobile && (
          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </motion.div>
        )}
        <motion.p 
          className="bio"
          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}
          transition={{ delay: isMobile ? 1.1 : 0.9, duration: 0.5 }}
        >
          I'm a passionate Machine Learning Researcher with a focus on image processing and computer vision. 
          My work involves developing cutting-edge algorithms to solve complex visual problems using OpenCV and other advanced tools.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HomePage;
