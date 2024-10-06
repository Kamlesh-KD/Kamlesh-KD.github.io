import React, { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import './cv.css';

const CV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  return (
    <div className="cv-section">
      <h2>Curriculum Vitae</h2>
      <p>View my professional experience and qualifications.</p>
      <button onClick={openModal} className="view-cv-btn">View CV</button>

      {isModalOpen && (
        <div className={`modal-overlay ${isClosing ? '' : 'open'}`} onClick={closeModal}>
          <div className={`modal-content ${isClosing ? '' : 'open'}`} onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}><IoIosCloseCircle size={50} color='#ff605c'/></button>
            <iframe
              src="Kamlesh_Ranabhat_CV.pdf"
              title="CV"
              width="100%"
              height="100%"
            />
            <a href="Kamlesh_Ranabhat_CV.pdf" download className="download-btn">Download CV</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CV;
