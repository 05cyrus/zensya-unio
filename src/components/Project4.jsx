import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Project4() {
  const navigate = useNavigate(); // Enables navigation

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-300 hover:text-white transition mb-6">
        <ArrowLeft className="w-6 h-6" />
        <span className="ml-2">Back</span>
      </button>

      {/* Case Study Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Case Study for <span className="text-blue-500">Ian's Portfolio</span>
      </h1>

      {/* Case Study Description */}
      <p className="text-gray-300 leading-relaxed max-w-3xl">
        Ian approached me to design a sleek and modern portfolio that would reflect his expertise as a designer and developer.
        The goal was to create a visually appealing, user-friendly, and responsive website that showcases his projects and skills
        effectively. Here's how we brought his vision to life.
      </p>

      {/* Design Approach Section */}
      <h2 className="text-2xl font-bold text-blue-500 mt-12">Design Approach</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        {/* Color Palette */}
        <div>
          <h3 className="text-xl font-bold">Color Palette</h3>
          <p className="text-gray-400 mt-2">
            We crafted a modern and professional monochromatic theme with subtle highlights:
          </p>
          <div className="flex items-center space-x-4 mt-3">
            {/* Color Swatches */}
            <div className="w-6 h-6 bg-gray-900 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#080808</span>

            <div className="w-6 h-6 bg-gray-200 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#FAFAFA</span>
          </div>

          {/* Explanation */}
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>• <span className="text-white">#080808</span> for the background, creating a sleek and immersive experience.</li>
            <li>• <span className="text-white">#FAFAFA</span> for text and content sections to ensure readability.</li>
          </ul>
        </div>

        {/* Typography */}
        <div>
          <h3 className="text-xl font-bold">Typography</h3>
          <p className="text-gray-400 mt-2">
            We used clean and modern fonts to enhance readability and professionalism:
          </p>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>• <span className="text-white">Poppins</span> for headings to add a contemporary feel.</li>
            <li>• <span className="text-white">Inter</span> for body text, ensuring a clean and polished look.</li>
          </ul>
        </div>
      </div>

      {/* Layout Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold">Layout</h3>
        <p className="text-gray-400 mt-2 max-w-3xl">
          The design emphasizes simplicity and engagement, featuring:
        </p>
        <ul className="mt-4 text-gray-400 space-y-2">
          <li>• A prominent hero section to grab attention instantly.</li>
          <li>• Well-structured sections for easy navigation.</li>
          <li>• Interactive elements like hover effects and subtle animations.</li>
        </ul>
      </div>
    <Footer />
    </section>
  );
}
