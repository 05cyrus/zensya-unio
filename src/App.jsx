import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import PricingPlans from "./components/PricingPlans";
import FAQ from "./components/FAQ";

function App() {
  const [language, setLanguage] = useState("en");

  // Create references for sections
  const projectsRef = useRef(null);
  const whyUsRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <Router>
      {/* Pass refs to Navbar */}
      <Navbar 
        onLanguageChange={setLanguage}
        projectsRef={projectsRef}
        whyUsRef={whyUsRef}
        faqRef={faqRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero language={language} />  
              <div ref={projectsRef}><Projects language={language} /></div>
              <Process language={language} />
              {/* <Testimonials language={language} />*/}
              <div ref={whyUsRef}><WhyUs language={language} /></div> 
              <PricingPlans language={language} />
              <div ref={faqRef}><FAQ language={language} /></div>
            </>
          }
        />
        <Route path="/project1" element={<Project1 language={language} />} />
        <Route path="/project2" element={<Project2 language={language} />} />
        <Route path="/project3" element={<Project3 language={language} />} />
        <Route path="/project4" element={<Project4 language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;
