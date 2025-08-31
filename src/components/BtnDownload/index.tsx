import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



const BtnDownload: React.FC = () => {
  const [isVisibleLinks, setIsVisibleLinks] = useState(false);

  const toggleLinks = () => {
    setIsVisibleLinks(!isVisibleLinks);
  };

  const { t } = useTranslation();
  return (
    <div className=" relative">
      <button
        className="btn-anime bg-primary-green hover:bg-[#2DAF09] duration-300 
      px-4 py-2 rounded-md text-black flex items-center"
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
        className={`bg-white absolute p-4 w-full flex justify-between translate-y-3 shadow-lg
        ${isVisibleLinks ? "block" : "hidden"}`}
      >
        <div>
          <Link to="/">
            <img
              src="/assets/images/vecteurs/Logo play store.svg"
              alt="play store"
              className="w-32 mb-6"
            />
          </Link>
          <Link to="">
            <img
              src="/assets/images/vecteurs/Logo app store.svg"
              alt="app store"
              className="w-32"
            />
          </Link>
        </div>
        <button 
          className="flex" 
          onClick={toggleLinks}
          aria-label={t("common.close")}
          title={t("common.close")}
        >
          <img
            src="/assets/images/vecteurs/cross-svgrepo-com.svg"
            alt={t("common.close")}
            className="w-6"
          />
        </button>
      </div>
    </div>
  );
};

export default BtnDownload;
