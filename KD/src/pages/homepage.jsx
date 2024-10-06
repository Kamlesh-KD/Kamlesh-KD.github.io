import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";
import { useWindowSize } from '../utils/useWindowSize';
import './homepage.css';

const HomePage = () => {
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  return (
    <div className="homepage">
      <motion.div 
        className="cover-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="cover1.png" alt="Cover" className="cover-img" />
      </motion.div>

      <motion.div 
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
          <motion.img 
            src="kamlesh1.png" 
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
          Medical Imaging and Image Processing
        </motion.p>
        <motion.p 
          className="expertise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Prognostic predictive models | Radiomics
        </motion.p>
        {isMobile && (
          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a href="mailto:kranabhat.krb@gmail.com"><MdOutlineMail /></a>
            <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=MZnvvYAAAAAJ&gmla=ALUCkoXlUpPEYPqQIlmqabdciHojwJUoN7rR_3pe-rp6WpMfUt" target="_blank" rel="noopener noreferrer"><FaGoogleScholar /></a>
            <a href="https://www.linkedin.com/in/kamlesh-rana-bhat/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Kamlesh-KD" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </motion.div>
        )}
        <motion.p 
          className="bio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isMobile ? 1.1 : 0.9, duration: 0.5 }}
        >
          I’m passionate about medical image informatics, especially in the areas of cancer diagnosis and prognosis. I’m excited about the potential of combining computer vision and deep learning with medical science to drive innovative solutions. 
          <br/><br/>Eager to collaborate with like-minded people and contribute to groundbreaking research projects and make a real impact in healthcare.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HomePage;
