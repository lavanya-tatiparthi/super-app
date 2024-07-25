import React from 'react';
import './Header.css';

const Header = () => {
  return (
    
        <header className="header">
      <div className="header-content">
        <div className="header-text">
        <p className="transform-text">Transform your life with</p>
          <div className="text-container">
            <p className="ai-text">AI-powered Learning</p>
            <h1 className="big-text">Super App</h1>
          </div>
          <p className="small-text">for super skills!</p>
          <button className="cta-button">Activate your trial</button>
          <p className="timer-text">4h 32m 42s</p>
        </div>
      </div>
    </header>
    
  );
};

export default Header;