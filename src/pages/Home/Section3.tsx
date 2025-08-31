
import { useTranslation } from "react-i18next";

const Section3 = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r z-10 from-[#134888] via-[#0A458E] to-[#3B78C4]">
     <div className="relative px-4 mt-10 py-5 sm:p-6 justify-center items-center max-w-[1800px] mx-auto">
     <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-30 sm:hidden -z-20"></div>
      <div className="text-[#F5F5F5] dark:text-gray-100 text-[20px] leading-[25px] text-center font-bold flex pb-2 md:hidden px-4">
        <p>
          {t("HomePage.titleConsultVisio.En")}
          <span className="text-[#32E800] dark:text-green-400">
            {t("HomePage.titleConsultVisio.Visio")}
          </span>
          {t("HomePage.titleConsultVisio.Ou")}
          <span className="text-[#32E800] dark:text-green-400">
            {t("HomePage.titleConsultVisio.Pres")}
          </span>
          {t("HomePage.titleConsultVisio.Faistoi")}
          <span className="text-[#32E800] dark:text-green-400">
            {t("HomePage.titleConsultVisio.specialiste")}
          </span>
        </p>
      </div>
      <div className="justify-center mx-auto 16 sm:flex py-2 items-center">
        <div className="lg:w-2/5 md:w-1/2 pt-3 w-full hidden md:flex md:flex-col md:justify-center ">
          <p className="text-[#F5F5F5] xl:text-[40px] font-bold  xl:leading-[47px] lg:mr-[10px] lg:text-[30px] lg:leading-[35px] md:text-[25px] md:leading-[30px] md:mr-[5px] sm:text-[22px] sm:leading-[30px]">
            {t("HomePage.titleConsultVisio.En")}
            <span className="text-[#32E800]">
              {t("HomePage.titleConsultVisio.Visio")}
            </span>
            {t("HomePage.titleConsultVisio.Ou")}
            <span className="text-[#32E800]">
              {t("HomePage.titleConsultVisio.Pres")}
            </span>
            {t("HomePage.titleConsultVisio.Faistoi")}
            <span className="text-[#32E800]">
              {t("HomePage.titleConsultVisio.specialiste")}
            </span>
          </p>
          <p className="text-[#F5F5F5] lg:text-[18px] font-medium mt-[15px] lg:mt-[28px] leading-[22px] md:mr-[30px] lg:mr-[50px] md:text-[14px] ">
            {t("HomePage.textConsultVisio.Aveclappl")}<span className="text-[#32E800]">{t("HomePage.textConsultVisio.Ekose")}</span>
            {t("HomePage.textConsultVisio.texte")}
          </p>
        </div>
        <div className="w-full md:w-1/2  lg:w-3/5 xl:w-[720px] flex items-center sm:py-1 md:py-1 lg:py-2  h-full md:pl-2">
          <img
            src="/assets/images/HomePage/medecin_visio.png"
            alt="client"
            className="sm:border-[10px] border-[6px] w-full h-[304px] border-[#32E800] rounded-[40px]  object-cover object-center lg:h-[414px]"
          />
        </div>
      </div>
     </div>
    </section>
  );
};

export default Section3;