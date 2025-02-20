import './index.css';
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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />  
      <Projects />
      <Process />
      <Testimonials />
      <WhyUs />
      <PricingPlans />
      <FAQ />
    </div>
  );
}

export default App;
