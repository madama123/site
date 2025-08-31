import React from "react";
import { useTranslation } from "react-i18next";
import { useMenuLanguage } from "../../context/MenuLanguageContext/MenuLanguageContext";

const MobileSwitchLanguage: React.FC = () => {
  const { t } = useTranslation();
  const { isMenuLanguageOpen, toggleMenuLanguage } = useMenuLanguage();

  const handleLanguageChange = (lang: string) => {
    localStorage.setItem("language", lang);
    window.location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenuLanguage}
        className="flex items-center gap-2 text-black"
      >
        <span>{t("header.langue")}</span>
        <img
          src="/assets/images/vecteurs/chevron-down.svg"
          alt="chevron down"
          className="w-4"
        />
      </button>

      {isMenuLanguageOpen && (
        <div className="absolute top-8 left-0 bg-white rounded-lg shadow-md p-2 w-32">
          <button
            onClick={() => handleLanguageChange("fr")}
            className="w-full text-left p-2 hover:bg-primary-green rounded-md"
          >
            Français
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className="w-full text-left p-2 hover:bg-primary-green rounded-md"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileSwitchLanguage; 