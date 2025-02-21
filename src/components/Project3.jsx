import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Project3() {
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
        Case Study for <span className="text-blue-500">Spain Academy</span> <span className="text-gray-400 text-sm">(under development)</span>
      </h1>

      {/* Case Study Description */}
      <p className="text-gray-300 leading-relaxed max-w-3xl">
        Spain Academy approached me to design a modern, vibrant website that would help attract students to their
        Spanish-LCA course. This intensive course immerses students in the Spanish language, culture, and university
        experience, ultimately helping them gain access to Spanish universities. The website had to reflect the energy
        and excitement of the Spanish culture while providing clear information on the course offerings and the admissions
        process. The final design is responsive and easy to navigate, ensuring a user-friendly experience for all visitors.
      </p>

      {/* Design Approach Section */}
      <h2 className="text-2xl font-bold text-blue-500 mt-12">Design Approach</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        {/* Color Palette */}
        <div>
          <h3 className="text-xl font-bold">Color Palette</h3>
          <p className="text-gray-400 mt-2">
            We selected a vibrant and energetic color palette to bring the spirit of Spain to life:
          </p>
          <div className="flex items-center space-x-4 mt-3">
            {/* Color Swatches */}
            <div className="w-6 h-6 bg-red-700 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#AA151B</span>

            <div className="w-6 h-6 bg-yellow-400 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#FFBF00</span>

            <div className="w-6 h-6 bg-teal-300 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#CDF9D1</span>
          </div>

          {/* Explanation */}
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>• <span className="text-white">#AA151B</span> for primary accents, reflecting the boldness and passion of Spain.</li>
            <li>• <span className="text-white">#FFBF00</span> as a vibrant accent, symbolizing energy and creativity.</li>
            <li>• <span className="text-white">#CDF9D1</span> for a fresh, soft background tone to keep the design approachable and light.</li>
          </ul>
        </div>

        {/* Typography */}
        <div>
          <h3 className="text-xl font-bold">Typography</h3>
          <p className="text-gray-400 mt-2">
            Our font choices were made to ensure clarity and professionalism while maintaining a contemporary feel:
          </p>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>• <span className="text-white">Inter</span> for all text to provide modern, clean visuals with excellent readability.</li>
          </ul>
        </div>
      </div>

      {/* Layout Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold">Layout</h3>
        <p className="text-gray-400 mt-2 max-w-3xl">
          The design focuses on providing users with clear, concise information about the Spanish-LCA course, the application process,
          and the benefits of studying in Spain. The layout includes engaging visuals, a simple navigation structure, and
          easy-to-find call-to-actions that encourage prospective students to apply.
        </p>
      </div>
    <Footer />
    </section>
  );
}
