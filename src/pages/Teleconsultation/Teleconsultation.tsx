import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AppStoreLinks from "../../components/AppStoreLinks";

const Teleconsultation = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
    },
  };
  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const zoomRotate = {
    hidden: { scale: 0.8, rotate: -15, opacity: 0 },
    visible: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 1 } },
  };

  const items = [
    {
      icon: "/assets/images/vecteurs/smartphone-svgrepo-com.svg",
      title: t("teleconsultation.Cards.Accessibilite"),
      description: t("teleconsultation.Cards.AccessibiliteTexte"),
      bgColor: "bg-white dark:bg-gray-100",
    },
    {
      icon: "/assets/images/vecteurs/time-success-svgrepo-com.svg",
      title: t("teleconsultation.Cards.Gain"),
      description: t("teleconsultation.Cards.GainTexte"),
      bgColor: "bg-white dark:bg-gray-100",
    },
    {
      icon: "/assets/images/vecteurs/list-square-svgrepo-com.svg",
      title: t("teleconsultation.Cards.Suivi"),
      description: t("teleconsultation.Cards.SuiviTexte"),
      bgColor: "bg-white dark:bg-gray-100",
    },
    {
      icon: "/assets/images/vecteurs/pig-shaped-piggy-bank-dollar-version-svgrepo-com.svg",
      title: t("teleconsultation.Cards.Reduction"),
      description: t("teleconsultation.Cards.ReductionTexte"),
      bgColor: "bg-white dark:bg-gray-100",
    },
  ];

  return (
    <main className="max-w-[1900px] mx-auto">
      <motion.section
        id="landing"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-[1550px] mx-auto"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pt-24 px-5 lg:px-16"
        >
          <div className="w-full pl-6 lg:pl-12 pt-8 pb-0 rounded-3xl bg-gradient-to-r from-blue-50 to-turquoise-50 dark:from-gray-800 dark:to-gray-700 text-center lg:text-left md:flex gap-8">
            <div className="max-sm:pb-6 max-md:pr-6 mb-2 md:mb-6 flex flex-col md:justify-center md:w-[60%]">
              <h1 className="font-extrabold mb-4 text-3xl text-blue-primary dark:text-white">
                {t("teleconsultation.hero.titreHero")}
              </h1>
              <p className="mb-4 text-gray-800 dark:text-gray-200">{t("teleconsultation.hero.paraph")}</p>
              <p className="flex sm:hidden md:flex font-bold mb-4 justify-center lg:justify-start text-blue-primary dark:text-white">
                {t("teleconsultation.hero.telecharger")}
              </p>
              <div className="flex sm:hidden md:flex gap-4 lg:justify-start justify-center">
                <AppStoreLinks />
              </div>
            </div>
            <div className="hidden sm:flex md:justify-center justify-end">
              <img
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg"
                alt="Téléconsultation"
                className="w-[350px] lg:w-[500px] 2xl:w-[550px] rounded-3xl"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="section3"
        className="w-full my-9 xl:my-14 py-2"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h2 className="text-blue-primary dark:text-blue-400 font-bold text-center text-3xl md:text-4xl mb-12">
          {t("teleconsultation.Cards.LesAvantages")}
        </h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={zoomRotate}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-2xl shadow-lg p-6 transform transition-transform hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-primary dark:bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-6 h-6" loading="lazy" />
                </div>
                <h3 className="text-blue-primary dark:text-blue-600 font-bold ml-4">{item.title}</h3>
              </div>
              <p className="text-gray-800 dark:text-gray-700">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Teleconsultation;