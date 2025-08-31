import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Bouton pour ouvrir le dropdown */}
      <button
        onClick={toggleDropdown}
        className="px-4 py-1 border-primary-green border-2 text-white rounded-md"
      >

        {i18n.language === "fr" ? (
          <span className="flex items-center gap-2">
            <img src="/assets/images/vecteurs/france.webp" alt="france flag" width="20" />
            FR
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <img src="/assets/images/vecteurs/18166.jpg" alt="english flag" width="20" />
            EN
          </span>
        )}
      </button>

      {/* Liste déroulante */}
      {isDropdownOpen && (
        <ul className="absolute text-black bg-white w-32 border rounded shadow-lg mt-2">
          {/* Option en anglais */}
          <li
            className="px-4 py-2 flex gap-2 items-center hover:bg-gray-200 cursor-pointer"
            onClick={() => changeLanguage("en")}
          >
            <img src="/assets/images/vecteurs/18166.jpg" alt="flag" width="25" />
            <span>English</span>
          </li>

          {/* Option en français */}
          <li
            className="px-4 py-2 flex gap-2 items-center hover:bg-gray-200 cursor-pointer"
            onClick={() => changeLanguage("fr")}
          >
            <img src="/assets/images/vecteurs/france.webp" alt="flag" width="25" />
            <span>Français</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
