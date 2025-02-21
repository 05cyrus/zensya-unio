import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import PricingPlans from './components/PricingPlans';
import FAQ from './components/FAQ';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page with All Sections */}
        <Route
          path="/"
          element={
            <>
            <Navbar />
            <Hero />  
            <Projects />
            <Process />
            <Testimonials />
            <WhyUs />
            <PricingPlans />
            <FAQ />
            </>
          }
        />
        {/* Individual Project Pages */}
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
      </Routes>
    </Router>
  );
}

export default App;
