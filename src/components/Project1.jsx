import React from "react";
import { ArrowLeft } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
      {/* Back Button */}
      <button className="flex items-center text-gray-300 hover:text-white transition mb-6">
        <ArrowLeft className="w-6 h-6" />
        <span className="ml-2">Back</span>
      </button>

      {/* Case Study Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Case Study for <span className="text-red-500">Wassup Media Co.</span>
      </h1>

      {/* Case Study Description */}
      <p className="text-gray-300 leading-relaxed max-w-3xl">
        Wassup Media Co. approached me to design a minimal and sleek website for their content marketing
        agency. They were looking for a clean, modern design that would effectively highlight their services while
        maintaining a streamlined user experience. We worked closely with them to understand their brand vision and crafted
        a website that not only captures their essence but also offers smooth navigation, optimized for mobile and desktop.
        Through the use of a carefully selected color palette and typography, I helped them achieve a visually appealing
        site that speaks to their professional yet creative approach in the content marketing space.
      </p>

      {/* Design Approach Section */}
      <h2 className="text-2xl font-bold text-red-500 mt-12">Design Approach</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        {/* Color Palette */}
        <div>
          <h3 className="text-xl font-bold">Color Palette</h3>
          <p className="text-gray-400 mt-2">
            We chose a bold, high-contrast color scheme:
          </p>
          <div className="flex items-center space-x-4 mt-3">
            {/* Color Swatches */}
            <div className="w-6 h-6 bg-gray-900 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#080808</span>

            <div className="w-6 h-6 bg-lime-400 border border-gray-700 rounded-full"></div>
            <span className="text-gray-400">#95FF2B</span>
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
            Our font choices enhance readability and professionalism:
          </p>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>• <span className="text-white">Times New Roman</span> for headings, adding a touch of elegance.</li>
            <li>• <span className="text-white">San Francisco UI Display</span> for body text, ensuring clarity.</li>
          </ul>
        </div>
      </div>

      {/* Layout Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold">Layout</h3>
        <p className="text-gray-400 mt-2 max-w-3xl">
          We opted for a spacious, well-balanced layout that guides the user through Wassup Media Co.'s content seamlessly.
          Key features include a prominent hero section, a grid-based portfolio display, and strategically placed
          call-to-action elements.
        </p>
      </div>
    </section>
  );
}
