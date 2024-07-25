import React from 'react';
import './FifthSection.css';
import digitalCourses from '../../assets/digitalCourses.png';
import projectManagement from '../../assets/projectManagement.png';
import digitalMarketing from '../../assets/digitalMarketing.png';

const FifthSection = () => {
  return (
    <section className="fourth-section">
      <h2 className="main-heading">What Skills Do You Want to Master?</h2>
      <h3 className="sub-heading">Enroll in Any Skill's Top Courses Today</h3>
      <div className="cards-container">
        <div className="card">
          <img src={projectManagement} alt="Course" className="card-image" />
       
          <div className="card-content">
         
            <h4 className="card-title">Agile Project Management</h4>
            <div className="card-footer">
              <div className="rating">
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4.9</span>
              </div>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
       
        <div className="card">
          <img src={digitalMarketing} alt="Course" className="card-image" />
         
          <div className="card-content">
            <h4 className="card-title">Python Developer</h4>
            <div className="card-footer">
              <div className="rating">
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4.8</span>
              </div>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={digitalCourses} alt="Course" className="card-image" />
          
          <div className="card-content">
            <h4 className="card-title">Artifiial Inteligent</h4>
           
            <div className="card-footer">
              <div className="rating">
                <span className="stars">★★★☆☆</span>
                <span className="rating-score">4.5</span>
              </div>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
