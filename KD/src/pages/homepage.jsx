import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content">
        {/* Profile section */}
        <motion.div
          className="profile"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="../../public/profile.png"
            alt="Profile"
            className="profile-img"
          />
          <h1 className="name">Kripesh Pathak</h1>
          <p className="intro">
            Machine Learning Researcher with expertise in Image Processing, OpenCV, 
            and developing innovative solutions through cutting-edge research.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
