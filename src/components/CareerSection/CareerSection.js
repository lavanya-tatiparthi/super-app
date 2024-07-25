import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './CareerSection.css';

const CareerSection = () => {
  return (
    <section className="career-section">
      <h2 className="section-heading">Learn with AnySkill, The AI-Powered Super App, And Grow</h2>
      <div className="text-content">
        <div className="tick-icon-container">
          <FontAwesomeIcon icon={faCheck} className="tick-icon" />
        </div>
        <div>
          <p className="title">Career PlannerTool:</p>
          <p className="description">Personalized guidance to discover your ideal career path.</p>
        </div>
      </div>
      <div className="text-content">
        <div className="tick-icon-container">
          <FontAwesomeIcon icon={faCheck} className="tick-icon" />
        </div>
        <div>
          <p className="title">Extensive Course Library:</p>
          <p className="description">ver 24,000 courses across various fields.</p>
        </div>
      </div>
      <div className="text-content">
        <div className="tick-icon-container">
          <FontAwesomeIcon icon={faCheck} className="tick-icon" />
        </div>
        <div>
          <p className="title">Flexible Subscription Plans:</p>
          <p className="description">Monthly, Quarterly, Half-Yearly, and Yearly options.</p>
        </div>
      </div>
      <div className="text-content">
        <div className="tick-icon-container">
          <FontAwesomeIcon icon={faCheck} className="tick-icon" />
        </div>
        <div>
          <p className="title">Industry-Recognized Certifications: </p>
          <p className="description">Boost your resume and professional profile.</p>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
