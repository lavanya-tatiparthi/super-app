
import './App.css';
import Header from './components/Header/Header';
import CareerSection from './components/CareerSection/CareerSection';
import StatisticsSection from './components/StatisticsSection/StatisticsSection';
import FourthSection from './components/FourthSection/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';
import PricingSection from './components/PricingSection/PricingSection'; 
import Features from './components/Features/Features';
import CertificateSection from './components/CertificateSection/CertificateSection';
import FAQSection from './components/FAQSection/FAQSection';
import CoursesSection from './components/CoursesSection/CoursesSection';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <div className="container">
       <Header />
       <CareerSection />
       <StatisticsSection />
       <FourthSection/>
       <FifthSection/>
       <PricingSection />
       <Features />
       <CertificateSection /> 
       <FAQSection/>
       <CoursesSection/>
       <Footer/>
    </div>
    </div>
  );
}

export default App;
