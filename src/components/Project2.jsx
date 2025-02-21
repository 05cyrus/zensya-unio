import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Project2() {
  const navigate = useNavigate(); // Enables navigation

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
    {/* Back Button  */}
    <button onClick={() => navigate(-1)} className="flex items-center text-gray-300 hover:text-white transition mb-6">
        <ArrowLeft className="w-6 h-6" /> {/* Now the arrow is clickable */}
        <span className="ml-2">Back</span>
      </button>

      {/* Case Study Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Case Study for <span className="text-blue-500">Prestige Drywall Services</span>
      </h1>

      {/* Case Study Description */}
      <p className="text-gray-300 leading-relaxed max-w-3xl">
        Prestige approached me to design a bold and compact website for their drywall and remodeling business.
        They wanted a professional, modern design that would showcase their expertise and reliability while maintaining a 
        user-friendly experience. We collaborated to understand their brand identity and business goals, crafting a 
        website that reflects their commitment to quality and customer satisfaction. The final product is optimized for both 
        mobile and desktop, ensuring accessibility for all users.
      </p>

      {/* Design Approach Section */}
      <h2 className="text-2xl font-bold text-blue-500 mt-12">Design Approach</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        {/* Color Palette */}
        <div>
          <h3 className="text-xl font-bold">Color Palette</h3>
          <p className="text-gray-400 mt-2">
            We selected a professional and vibrant color scheme:
          </p>
          <div className="flex items-center space-x-4 mt-3">
            {/* Color Swatches */}
            <div className="w-6 h-6 bg-gray-900 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#0A1929</span>

            <div className="w-6 h-6 bg-yellow-500 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#E5A815</span>

            <div className="w-6 h-6 bg-white border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#FFFFFF</span>
          </div>

          {/* Explanation */}
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>• <span className="text-white">#0A1929</span> for the primary background, creating a strong and trustworthy foundation.</li>
            <li>• <span className="text-white">#E5A815</span> as an energetic accent color for buttons and highlights.</li>
            <li>• <span className="text-white">#FFFFFF</span> for text and content sections to enhance readability.</li>
          </ul>
        </div>

        {/* Typography */}
        <div>
          <h3 className="text-xl font-bold">Typography</h3>
          <p className="text-gray-400 mt-2">
            Our font choices enhance readability and professionalism:
          </p>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>• <span className="text-white">Inter</span> for all text to ensure modern and clean visuals.</li>
          </ul>
        </div>
      </div>

      {/* Layout Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold">Layout</h3>
        <p className="text-gray-400 mt-2 max-w-3xl">
          The design is tailored to the nature of Prestige's business, focusing on clarity and user engagement.
          Key features include a prominent hero section, a compact navigation bar, strategically placed call-to-actions,
          and a well-organized layout with bold headings and spacious sections to guide users effectively.
        </p>
      </div>
    <Footer />
    </section>
  );
}
