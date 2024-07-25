import React from 'react';
import './Features.css';

// Import your images
import notes from '../../assets/notes.png';
import Enotes from '../../assets/Enotes.png';
import CarrerPlan from '../../assets/CarrerPlan.png';
import coding from '../../assets/coding.jpeg';
import FAQ from '../../assets/FAQ.png';
import MCQ from '../../assets/MCQ.png';
import Mock from '../../assets/Mock.png';
import OnlineExam from '../../assets/OnlineExam.png';
import PersonalPanel from '../../assets/PersonalPanel.png';
import Practicals from '../../assets/Practicals.png';
import Projects from '../../assets/Projects.png';
import ShortNotes from '../../assets/ShortNotes.png';
import TheoryClasses from '../../assets/TheoryClasses.png';
import TheoryTest from '../../assets/TheoryTest.png';
import QuickTest from '../../assets/QuickTest.png';

const features = [
  { name: 'Assignments', image: notes },
  { name: 'Certification', image: Enotes},
  { name: 'Career Planner', image: CarrerPlan },
  { name: 'Coding Ground', image: coding },
  { name: 'FAQ', image: FAQ },
  { name: 'MCQ', image: MCQ },
  { name: 'Mock Exam', image: Mock },
  { name: 'Online Exam', image: OnlineExam },
  { name: 'Personal Panel', image: PersonalPanel },
  { name: 'Practicals', image: Practicals },
  { name: 'Project', image: Projects },
  { name: 'Short Notes', image: ShortNotes },
  { name: 'Theory Classes', image: TheoryClasses },
  { name: 'Topic Test', image: TheoryTest },
  { name: 'Quick Test', image:QuickTest }
];

const Features = () => {
  return (
    <section className="features-section">
           <h2 className="main-heading">Our Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.name} className="feature-image" />
            <p className="feature-name">{feature.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
