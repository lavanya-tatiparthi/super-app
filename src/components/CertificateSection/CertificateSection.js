import React from 'react';
import './CertificateSection.css';
import certificateImage from '../../assets/certificateImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CertificateSection = () => {
  return (
  
    <section className="certificate-section">
    <h1 className="main-heading">Earn Your Industry Certificate:</h1>
    <h3 className="sub-heading1">Monthly, Quarterly, Half-Yearly, and Yearly options.</h3>
    <div className="certificate-container">
      <img src={certificateImage} alt="Certificate" className="certificate-image" />
      <div className="certificate-content">
        <div className="certificate-item">
          <h1 className="certificate-text">Umeet magotra</h1>
          <div className="tick-icon1">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        <div className="certificate-item">
          <p className="certificate-description">successfully completed</p>
        </div>
        <div className="certificate-item">
          <h1 className="certificate-text">mastered data analyst</h1>
        </div>
      
      </div>
    </div>
  </section>
  );
};

export default CertificateSection;
