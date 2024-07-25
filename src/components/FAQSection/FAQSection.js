import React, { useState } from 'react';
import './FAQSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "Career PlannerTool:",
    answer: "ANY SKILL is a feature on our online learning platform that allows people to learn any skill, like computer skills, arts, or job-related skills."
  },
  {
    question: "How does ANYSKILL work?",
    answer: "Our Skill Builder helps you enhance your skills with personalized recommendations tailored to your career goals."
  },
  {
    question: "GWhat is the Career Planner feature?",
    answer: "Track your career goals with expert guidance and set achievable milestones to help you reach your objectives."
  },
  {
    question: "How can I access the Career Planner feature?",
    answer: "Get the latest insights and trends in your industry to stay ahead and make informed career decisions."
  },
  {
    question: "What is the Career Planner feature?",
    answer: "Get the latest insights and trends in your industry to stay ahead and make informed career decisions."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h1 className="main-heading">Learn More</h1>
      <h3 className="sub-heading">Our FAQs</h3>
      <div className="accordion-container">
        {faqData.map((faq, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <FontAwesomeIcon icon={faChevronDown} className={`expand-icon ${openIndex === index ? 'open' : ''}`} />
            </div>
            {openIndex === index && (
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
         <button className="view-more-button " >View More
            <span> <FontAwesomeIcon icon={faChevronDown} className='expand-icon1' /></span>
         </button>
      </div>
     
    </section>
  );
};

export default FAQSection;
