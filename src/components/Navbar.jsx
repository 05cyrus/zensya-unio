import React from "react";


export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="w-full border border-gray-600 rounded-xl backdrop-blur-md rounded-xl mx-auto mt-4 max-w-6xl px-6 py-3 flex justify-between items-center">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-6">
          <a href="/" className="flex items-center">
            <img src="../../images/logo-2.png" alt="Logo" className="w-8 h-8 rounded-full" />
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#work" className="text-white text-sm hover:text-gray-300">Work</a>
            <a href="#benefits" className="text-white text-sm hover:text-gray-300">Benefits</a>
            <a href="#faq" className="text-white text-sm hover:text-gray-300">FAQ</a>
          </nav>
        </div>

        {/* CTA Button */}
        <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 text-sm rounded-full shadow-lg">
          Book a 15-min call
        </a>
      </div>
    </header>
  );
}
