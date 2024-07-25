import React from 'react';
import './FourthSection.css';
import artificial from '../../assets/artificial.png';
import aglie from '../../assets/agile.png';
import python from '../../assets/python.png';

const FourthSection = () => {
  return (
    <section className="fourth-section">
      <h2 className="main-heading">Stand out in the crowd:</h2>
      <h3 className="sub-heading">Enroll in Any Skill's Top Courses Today</h3>
      <div className="cards-container">
        <div className="card">
          <img src={artificial} alt="Course" className="card-image" />
          <hr className="custom-hr" /> 
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
          <img src={aglie} alt="Course" className="card-image" />
          <hr className="custom-hr" /> 
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
          <img src={python} alt="Course" className="card-image" />
          <hr className="custom-hr" /> 
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

export default FourthSection;
