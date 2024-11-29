"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/public/context/LanguageContext";

const languages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

const LangSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    changeLanguage(lang.code);
    setIsOpen(false);
  };

  const selectedLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-white shadow-sm px-4  py-2 bg-transparent text-md font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 "
          onClick={toggleDropdown}
        >
          <span className="mr-2">{selectedLanguage.flag}</span>
          <span className="hidden md:flex">{selectedLanguage.name}</span>
          <ChevronDown className="ml-2 h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
                onClick={() => selectLanguage(lang)}
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LangSelect;
