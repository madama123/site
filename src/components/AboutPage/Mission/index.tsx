import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <section className="px-5 custom900:px-16 lg:px-32">
      <div id="container  " className="custom900:flex mx-auto custom900:gap-12">
        <div className="hidden  custom900:flex justify-center">
          <div className="relative">
            <img
              src="/assets/images/AboutUs/promise.png"
              alt="promise"
              className=" max-w-[450px]"
            />
            <div
              className="absolute bottom-5 left-0  w-28 h-32 bg-blue-primary flex flex-col text-white
            justify-center px-3 rounded-xl"
            >
              <div className=" bg-white flex items-center justify-center h-8 w-8 rounded-[100%]">
                <img
                  src="/assets/images/vecteurs/people-svgrepo-com.svg"
                  alt="icone"
                  className="w-5"
                />
              </div>
              <h1 className="font-bold text-2xl">+25k</h1>
              <p>{t("about.mission.patient")}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 custom900:mt-12">
          <h1 className="text-blue-primary custom900:text-left font-bold text-center mb-2">
            {t("about.mission.mission")}
          </h1>
          <h1 className="text-center custom900:text-left font-bold text-2xl mb-4">
            {t("about.mission.soins")}
          </h1>
          <p className="text-center xl:pr-32 2xl:pr-44 custom900:text-left mb-4">
            {t("about.mission.paraph")}
          </p>
          <div
            className="flex gap-4 mx-auto custom900:mx-0 max-w-[400px]  items-center bg-blue-primary 
                text-white font-semibold px-4 py-3 rounded-lg"
          >
            <img
              src="/assets/images/vecteurs/home-white.svg"
              alt=""
              className="w-6"
            />
            <p>{t("about.mission.confort")}</p>
          </div>
          <div
            className="flex gap-4 max-w-[400px] mx-auto custom900:mx-0 bg-primary-green px-4 py-3 rounded-lg mt-4
          font-semibold"
          >
            <img
              src="/assets/images/vecteurs/time-success-white.svg"
              alt=""
              className="w-6 "
            />
            <p>{t("about.mission.rdv")}</p>
          </div>
        </div>

        <div className="custom900:hidden  flex justify-center">
          <div className="relative">
            <img
              src="/assets/images/AboutUs/promise.png"
              alt="promise"
              className=" max-w-[300px] custom400:max-w-[400px]"
            />
            <div
              className="absolute bottom-0 left-0 w-28 h-32 bg-blue-primary flex flex-col text-white
            justify-center px-3 rounded-xl"
            >
              <div className=" bg-white flex items-center justify-center h-8 w-8 rounded-[100%]">
                <img
                  src="/assets/images/vecteurs/people-svgrepo-com.svg"
                  alt="icone"
                  className="w-5"
                />
              </div>
              <h1 className="font-bold text-2xl">+25k</h1>
              <p>{t("about.mission.patient")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
