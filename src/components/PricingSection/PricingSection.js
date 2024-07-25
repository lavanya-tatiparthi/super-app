import React from 'react';
import './PricingSection.css';

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2 className="main-heading">Affordable Packages</h2>
      <h3 className="sub-heading">Quality Experiences Within Your Budget</h3>
      <div className="pricing-cards-container">
        <div className="pricing-card">
          <p className="duration">For 1 Month</p>
          <p className="price">₹199</p>
          <ul className="course-description">
            <li>Theory Classes</li>
            <li>Short Notes</li>
            <li>Quick Test</li>
            <li>Online Exam</li>
            <li>Practicals</li>
            <li>Certification</li>
            <li>Assignment</li>
            <li>Etc...</li>
          </ul>
          <button className="choose-plan-button">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <p className="duration">For 1 Month</p>
          <p className="price">₹499</p>
          <ul className="course-description">
            <li>Theory Classes</li>
            <li>Short Notes</li>
            <li>Quick Test</li>
            <li>Online Exam</li>
            <li>Practicals</li>
            <li>Certification</li>
            <li>Assignment</li>
            <li>Etc...</li>
          </ul>
          <button className="choose-plan-button">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <p className="duration">For 1 Month</p>
          <p className="price">₹799</p>
          <ul className="course-description">
            <li>Theory Classes</li>
            <li>Short Notes</li>
            <li>Quick Test</li>
            <li>Online Exam</li>
            <li>Practicals</li>
            <li>Certification</li>
            <li>Assignment</li>
            <li>Etc...</li>
          </ul>
          <button className="choose-plan-button">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <p className="duration">For 1 Month</p>
          <p className="price">₹999</p>
          <ul className="course-description">
            <li>Theory Classes</li>
            <li>Short Notes</li>
            <li>Quick Test</li>
            <li>Online Exam</li>
            <li>Practicals</li>
            <li>Certification</li>
            <li>Assignment</li>
            <li>Etc...</li>
          </ul>
          <button className="choose-plan-button">Choose Plan</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
