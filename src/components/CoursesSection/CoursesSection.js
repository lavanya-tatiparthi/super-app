import React, { useState } from 'react';
import './CoursesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const coursesData = [
  {
    title: "Technical Courses",
    description: "Explore a range of technical courses designed to enhance your skills in fields like software development, data science, and more."
  },
  {
    title: "Non-Technical Courses",
    description: "Gain knowledge in various non-technical fields such as management, communication, and personal development."
  },
  {
    title: "Vocational Courses",
    description: "Enroll in vocational courses that provide hands-on training for specific trades and professions."
  }
];

const CoursesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="courses-section">
      <h1 className="courses-main-heading">Our Courses</h1>
      <h3 className="courses-sub-heading">Explore a variety of courses to enhance your skills and knowledge</h3>
      <div className="courses-accordion-container">
        {coursesData.map((course, index) => (
          <div key={index} className="courses-accordion-item">
            <div className="courses-accordion-header" onClick={() => handleToggle(index)}>
              <span>{course.title}</span>
              <FontAwesomeIcon icon={faChevronDown} className={`courses-expand-icon ${openIndex === index ? 'open' : ''}`} />
            </div>
            {openIndex === index && (
              <div className="courses-accordion-content">
                <p>{course.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
