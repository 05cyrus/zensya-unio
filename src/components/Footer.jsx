import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-white py-10 px-6 md:px-20 rounded-2xl mt-12 mx-4 md:mx-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-left">
          <h2 className="text-2xl font-bold ">
            <span className="text-white">Zen</span>
            <span className="text-blue-500">sya</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Transforming ideas into stunning frontend experiences.
          </p>
        </div>

        {/* Right Section - Social Icons & Contact */}
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <h3 className="font-bold text-white">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 mt-2">team@zensya.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        © 2025 Zensya. All rights reserved.
        <br />
        {/* Everything by <span className="text-gray-300 italic">Sumit</span> */}
      </div>
    </footer>
  );
}
