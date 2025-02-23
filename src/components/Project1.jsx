import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Project1() {
  const navigate = useNavigate();
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
    {/* Back Button (Fixed) */}
    <button onClick={() => navigate(-1)} className="flex items-center text-gray-300 hover:text-white transition mb-6">
        <ArrowLeft className="w-6 h-6" /> {/* Now the arrow is clickable */}
        <span className="ml-2">Back</span>
      </button>

      {/* Case Study Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Case Study for <span className="text-blue-500">EdTech</span>
      </h1>

      {/* Case Study Description */}
      <p className="text-gray-300 leading-relaxed max-w-3xl">
      With the increasing demands on parents' time, staying updated on their child's progress can be challenging. Our goal was to design a solution that simplifies communication between parents and teachers by providing a centralized dashboard accessible via both web and mobile platforms.
      </p>

      {/* Design Approach Section */}
      <h2 className="text-2xl font-bold text-blue-500 mt-12">Design Approach</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        {/* Color Palette */}
        <div>
          <h3 className="text-xl font-bold">Color Palette</h3>
          <p className="text-gray-400 mt-2">
          We chose a modern, neutral-toned color scheme to ensure clarity and ease of use:
          </p>
          <div className="flex items-center space-x-4 mt-3">
            {/* Color Swatches */}
            <div className="w-6 h-6 bg-gray-900 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#F5F5F3</span>

            <div className="w-6 h-6 bg-black-400 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#1A1A1A</span>
          </div>

          {/* Explanation */}
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>• <span className="text-white">#080808</span> for the background, creating a sleek, modern feel.</li>
            <li>• <span className="text-white">#95FF2B</span> as an accent, adding vibrancy and energy.</li>
          </ul>
        </div>

        {/* Typography */}
        <div>
          <h3 className="text-xl font-bold">Typography</h3>
          <p className="text-gray-400 mt-2">
          Our font choices balance readability and professionalism:
          </p>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>• <span className="text-white">San Francisco </span> for for body text, ensuring clarity and accessibility.</li>
            <li>• <span className="text-white">Times New Roman</span>  for headings, adding a refined and authoritative touch.</li>
          </ul>
        </div>
      </div>

      {/* Layout Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold">Layout</h3>
        <p className="text-gray-400 mt-2 max-w-3xl">
        We structured the interface with a well-balanced layout to create a seamless experience for parents and teachers.
        Centralized Dashboard: Parents can easily track their child's academic performance, including grades, attendance, and progress trends over time.
        </p>
      </div>
      {/* Design Showcase Section */}
      <div className="mt-12 ">
        <h3 className="text-2xl font-bold text-blue-500">Design Showcase</h3>
        <img 
          src="/images/p1-new.jpg" 
          alt="Design showcase preview"
          className="mt-4 w-full max-w-md flex justify-center mx-auto rounded-lg shadow-lg"
        />
      </div>
      <Footer />
    </section>
  );
}
