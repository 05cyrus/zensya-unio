import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ onLanguageChange, projectsRef, whyUsRef, faqRef }) {
  const [language, setLanguage] = useState("en");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    onLanguageChange(lang);
  };

  // Function to navigate home & scroll after load
  const handleScroll = (ref) => {
    if (location.pathname !== "/") {
      navigate("/"); // Redirect to homepage first
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // Small delay to allow page to load
    } else {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="w-full border border-gray-600 rounded-xl backdrop-blur-md mx-auto mt-4 max-w-6xl px-6 py-3 flex justify-between items-center">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-6">
          <a href="/" className="flex items-center">
            <img src="../../images/logo.jpg" alt="Logo" className="w-8 h-8 rounded-full" />
          </a>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => handleScroll(projectsRef)} className="text-white text-sm hover:text-gray-300">
              {language === "en" ? "Work" : "仕事"}
            </button>
            <button onClick={() => handleScroll(whyUsRef)} className="text-white text-sm hover:text-gray-300">
              {language === "en" ? "Benefits" : "利点"}
            </button>
            <button onClick={() => handleScroll(faqRef)} className="text-white text-sm hover:text-gray-300">
              {language === "en" ? "FAQ" : "よくある質問"}
            </button>
          </nav>
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <select
            className="bg-gray-700 text-white px-3 py-2 text-sm rounded-md"
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </header>
  );
}
