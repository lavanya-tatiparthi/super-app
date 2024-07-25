import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-left">
            <img src={logo} alt="Thelearnyn Logo" className="footer-logo" />
          </div>
          <div className="footer-right">
            <p>Thelearnyn is an educational platform striving to provide the best learning material on technical, non-technical, and vocational subjects.</p>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-left">
          <h4>About Us</h4>
            <ul>
              <li>Who We Are</li>
              <li>Contact Us</li>
              <li>Terms of Use</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
            </ul>


          </div>
          <div className="footer-right">

          <h4>Database Technologies</h4>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>Oracle</li>
              <li>MariaDB</li>
              <li>Apache Cassandra</li>
            </ul>

            
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-left">

          <h4>Languages</h4>
            <ul>
              <li>C Language</li>
              <li>HTML</li>
              <li>C++ Language</li>
              <li>CSS</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>Vue.js</li>
              <li>Python</li>
            </ul>

          </div>
          <div className="footer-right">

          <h4>Web Technologies</h4>
            <ul>
              <li>Ruby</li>
              <li>jQuery</li>
              <li>Swift</li>
              <li>React.js</li>
              <li>Kotlin</li>
              <li>AngularJS</li>
              <li>Dart</li>
              <li>Tailwind CSS</li>
              <li>Perl</li>
              <li>Next.js</li>
            </ul>

            
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-left">

        

            <h4>Back-End</h4>
            <ul>
            
              <li>Express.js</li>
              <li>PHP</li>
             
              <li>Node.js</li>
            
              <li>Flask</li>
             
              <li>Django</li>
             
              <li>Spring Boot</li>
             
              <li>ASP.NET</li>
            </ul>
          </div>
          <div className="footer-right">

        
            <h4>Machine Learning</h4>
            <ul>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Java</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Reinforcement Learning</li>
              <li>Expert Systems</li>
              <li>Genetic Algorithms</li>
              <li>Fuzzy Logic</li>
              <li>Robotics</li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <h1>SMART WAY OF LEARNING</h1>
    </footer>
  );
};

export default Footer;
