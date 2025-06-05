import React from 'react';
import Herosection from './Herosection';
import Experience from './PortfolioSection';
import Projects from './Projects'; // ✅ ADD THIS LINE
import AboutSection from './About';
import SkillCards from './SKILLS';
import Contact from './Contact';
const HomePage = () => {
  return (
    <div className="main-scroll-container">
      <Herosection />
      <Experience />
      <AboutSection />
      <SkillCards />

      <Projects />

      <Contact />
    </div>
  );
};

export default HomePage;
