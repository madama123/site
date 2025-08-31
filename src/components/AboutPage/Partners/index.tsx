import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div
        className="bg-gradient-to-r from-customBlue1 to-customBlue2 
        md:flex md:gap-12 md:justify-between md:pt-6"
      >
        <div className="text-center px-3 pt-8 md:w-1/2 custom800:mt-16  custom800:pl-8 lg:pl-16 custom800:pr-6">
          <h1 className="font-bold md:text-left text-2xl  lg:text-4xl mb-4 text-primary-green">
            {t("about.partners.titre")}
          </h1>
          <p className="text-white md:text-left mb-8">{t("about.partners.paraph")}</p>
        </div>

        <img
          src="/assets/images/AboutUs/medical-partner.png"
          alt="partner"
          className="md:w-1/2 md:mt-8"
        />
      </div>
    </section>
  );
};

export default Partners;
