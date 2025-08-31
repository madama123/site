import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const BtnDownload: React.FC = () => {
  const [isVisibleLinks, setIsVisibleLinks] = useState(false);
  const { t } = useTranslation();

  const toggleLinks = () => {
    setIsVisibleLinks(!isVisibleLinks);
  };

  return (
    <div className="relative">
      <button
        className="btn-anime bg-primary-green hover:bg-[#2DAF09] duration-300 
        px-4 py-2 rounded-md text-black flex items-center gap-2"
        onClick={toggleLinks}
      >
        <img
          src="/assets/images/vecteurs/icone download.svg"
          alt="download"
          className="w-6"
        />
        <span>{t("header.Telecharger")}</span>
      </button>
      <div
        className={`bg-white absolute p-4 w-full flex justify-between translate-y-3 shadow-lg rounded-lg
        ${isVisibleLinks ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/vecteurs/Logo play store.svg"
              alt="play store"
              className="w-32"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/vecteurs/Logo app store.svg"
              alt="app store"
              className="w-32"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BtnDownload;
