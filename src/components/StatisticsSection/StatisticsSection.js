import React from 'react';
import './StatisticsSection.css';

const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      <h2 className="section-heading">Our Statistics</h2>
      <div className="statistics-container">
        <div className="statistic-card">
          <p className="static-title">Courses</p>
          <p className="number">24,000+</p>
        </div>
        <div className="statistic-card">
          <p className="static-title">Certificates</p>
          <p className="number">19,000+</p>
        </div>
        <div className="statistic-card">
          <p className="static-title">Question Bank</p>
          <p className="number">100,000+</p>
        </div>
        <div className="statistic-card">
          <p className="static-title">Google Rating</p>
          <p className="number">4.9/5</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
