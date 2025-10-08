import React from "react";
import { useTranslation } from "react-i18next";
import { useMenuLanguage } from "../../hooks/useMenuLanguage";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { isMenuLanguageOpen, toggleMenuLanguage } = useMenuLanguage();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    toggleMenuLanguage();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenuLanguage}
        className="flex items-center gap-1 hover:text-primary-green"
      >
        <span>{i18n.language.toUpperCase()}</span>
        <img
          src="/assets/images/vecteurs/chevron-down.svg"
          alt="chevron down"
          className="w-6"
        />
      </button>

      <div
        className={`absolute bg-white text-black rounded-lg shadow-md mt-2 w-20 ${
          isMenuLanguageOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => changeLanguage("fr")}
          className="w-full p-2 hover:bg-primary-green rounded-t-lg"
        >
          FR
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="w-full p-2 hover:bg-primary-green rounded-b-lg"
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 