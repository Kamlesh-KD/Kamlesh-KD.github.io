import React from 'react';
import './publications.css';

const Publications = () => {
  const publications = [
    {
      title: "Early Stage Diagnosis of Diabetic Retinopathy using Nested U-Net Architecture",
      authors: "Kamlesh Ranabhat,I. P. Paneru, I. Sharma, and K. Pathak",
      journal: "Health Informatics Journal",
      year: 2023,
      link: "https://example.com/publication1",
      status: "Under review"
    },
  ];

  return (
    <div className="publications">
      <h2>Publications</h2>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <h3>{pub.title}</h3>
            <p>{pub.authors}</p>
            <p>{pub.journal}, {pub.year}</p>
            <p className="publication-status">{pub.status}</p> {/* Added status */}
            <a href={pub.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
