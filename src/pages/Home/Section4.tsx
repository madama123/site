import React from "react";
import { useTranslation } from "react-i18next";
import AppStoreLinks from "../../components/AppStoreLinks";
import { Link } from "react-router-dom";

const FonctionnalitesApp = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: React.ReactNode;
}) => (
  <div className="lg:py-2 lg:pl-3 flex flex-col lg:gap-y-2">
    <span className="flex py-2 lg:pr-[38%]  font-semibold hover:font-bold hover:text-[22px]">
      <img src={imageSrc} alt={title} className="h-[30px] w-[30px] mx-3" loading="lazy" />
      <p className="text-[#1C1D1E] text-[20px]  leading-[21px] ">{title}</p>
    </span>
    <span className="flex ml-[56px]">
      <img
        src="/assets/images/vecteurs/Ellipse_vert.png"
        alt="elipse"
        className="h-2 w-2 mt-[6px] "
      />

      <p className="text-[#1C1D1E] text-left text-[1,125rem] font-light leading-[1,125rem] ml-[12px] lg:pr-[22%]">
        {description}
      </p>
    </span>
  </div>
);

const Section4 = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1900px]  max-lg:mt-12 mx-auto pw-2">
      <div className=" w-full lg:my-6 grid lg:grid-cols-9 md:grid-cols-2 px-2 sm:px-[20px] lg:px-[70px] max-lg:items-center xl:items-center ">
        <div className="hidden md:flex lg:max-h-[36vw] lg:col-span-5 md:col-span-1 items-center  justify-center lg:justify-end lg:mt-[10%] ">
          <img
            src="/assets/images/HomePage/map_phone.png"
            alt="Phone map"
            className="object-cover h-full "
            loading="lazy"
          />
        </div>

        <div className="w-full md:mt-16 lg:col-span-4 md:col-span-1 flex justify-center flex-col bg-opacity-5">
          <div>
            <FonctionnalitesApp
              imageSrc="/assets/images/vecteurs/pharmacy-signal-green.svg"
              title={t("HomePage.trouverPharmacie")}
              description={<span className="text-gray-700 dark:text-gray-200">{t("HomePage.trouverPharmacieTexte")}</span>}
            />

            <FonctionnalitesApp
              imageSrc="/assets/images/vecteurs/ambulance-green.svg"
              title={t("HomePage.commanderAmbulance")}
              description={<span className="text-gray-700 dark:text-gray-200">{t("HomePage.commanderAmbulanceTexte")}</span>}
            />

            <FonctionnalitesApp
              imageSrc="/assets/images/vecteurs/video-green.svg"
              title={t("HomePage.decouvrerVideo")}
              description={<span className="text-gray-700 dark:text-gray-200">{t("HomePage.decouvrerVideoTexte")}</span>}
            />
          </div>

          <div className="flex md:hidden text-blue-primary xl:flex items-center py-4 flex-col lg:w-4/5 animate-pulse">
            <Link
              to="#"
              className="font-semibold hover:text-[1.125rem] hover:font-bold py-3"
            >
              {t("HomePage.cliquerIciPour")}
            </Link>
            <div className="flex gap-2 lg:gap-4 ">
              <AppStoreLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex xl:hidden items-center flex-col animate-pulse pt-4">
        <Link
          to="#"
          className="font-semibold hover:text-[1.125rem] hover:font-bold py-2"
        >
          {t("HomePage.cliquerIciPour")}
        </Link>
        <div className="flex gap-2 lg:gap-4 ">
          <AppStoreLinks />
        </div>
      </div>
    </section>
  );
};

export default Section4;