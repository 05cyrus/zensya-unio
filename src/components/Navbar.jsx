import React, { useState } from "react";

export default function Navbar({ onLanguageChange }) {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="w-full border border-gray-600 rounded-xl backdrop-blur-md mx-auto mt-4 max-w-6xl px-6 py-3 flex justify-between items-center">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-6">
          <a href="/" className="flex items-center">
            <img src="../../images/logo-2.png" alt="Logo" className="w-8 h-8 rounded-full" />
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#work" className="text-white text-sm hover:text-gray-300">{language === "en" ? "Work" : "仕事"}</a>
            <a href="#benefits" className="text-white text-sm hover:text-gray-300">{language === "en" ? "Benefits" : "利点"}</a>
            <a href="#faq" className="text-white text-sm hover:text-gray-300">{language === "en" ? "FAQ" : "よくある質問"}</a>
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
