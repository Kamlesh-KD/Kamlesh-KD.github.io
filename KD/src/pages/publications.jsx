import React, { useEffect, useRef, useState } from 'react';
import './publications.css';

const Publications = () => {
  const publications = [
    {
      title: "Early Stage Diagnosis of Diabetic Retinopathy using Nested U-Net Architecture",
      authors: "Kamlesh Ranabhat, I. P. Paneru, I. Sharma,K. Pathak, and N. Lamichhane",
      journal: "Computers in Biology and Medicine",
      year: 2025,
      link: "https://example.com/publication1",
      status: "Under review"
    },
  ];

  const [isVisible, setIsVisible] = useState(Array(publications.length).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
          observer.unobserve(entry.target); 
        }
      });
    }, options);

    refs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref); 
      }
    });

    return () => {
      if (refs.current) {
        refs.current.forEach(ref => {
          if (ref) {
            observer.unobserve(ref); 
          }
        });
      }
    };
  }, [publications.length]);

  return (
    <div className="publications">
      <h2>Publications</h2>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div 
            key={index} 
            className={`publication-item ${isVisible[index] ? 'fade-in' : ''}`} 
            ref={el => refs.current[index] = el} 
          >
            <h3>{pub.title}</h3>
            <p>{pub.authors}</p>
            <p>{pub.journal}, {pub.year}</p>
            <p className="publication-status">{pub.status}</p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
