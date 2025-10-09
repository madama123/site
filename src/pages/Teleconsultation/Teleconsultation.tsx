import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import React from "react";
import AppStoreLinks from "../../components/AppStoreLinks";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, UserCircle, HelpCircle } from "lucide-react";

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
  const [faqOpen, setFaqOpen] = React.useState([false, false, false]);

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
      {/* Section Hero */}
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
              <h1 className="font-extrabold mb-4 text-3xl md:text-5xl text-blue-primary dark:text-white animate-fadeIn">
                {t("teleconsultation.hero.titreHero")}
              </h1>
              <p className="mb-4 text-gray-800 dark:text-gray-200 animate-fadeIn delay-100">{t("teleconsultation.hero.paraph")}</p>
              <div className="flex flex-col gap-4 mt-6 animate-fadeIn delay-200">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-4 bg-primary-green text-white rounded-2xl font-bold shadow-xl hover:bg-green-700 transition w-fit mx-auto md:mx-0 animate-pulse"
                  aria-label={t("teleconsultation.hero.cta")}
                  onClick={() => window.location.href = '/login'}
                >
                  {t("teleconsultation.hero.cta") || "Commencer ma téléconsultation"}
                </motion.button>
                <p className="font-bold text-blue-primary dark:text-white">
                  {t("teleconsultation.hero.telecharger")}
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <AppStoreLinks />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center md:w-[40%] relative">
              <img
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg"
                alt="Téléconsultation"
                className="w-[250px] sm:w-[350px] lg:w-[500px] 2xl:w-[550px] rounded-3xl shadow-xl animate-fadeIn"
              />
              <ShieldCheck className="absolute top-4 right-4 text-primary-green bg-white rounded-full p-1 shadow-lg" size={40} aria-label="Sécurité" />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Avantages */}
      <motion.section
        id="section3"
        className="w-full my-9 xl:my-14 py-2"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h2 className="text-blue-primary dark:text-blue-400 font-bold text-center text-3xl md:text-4xl mb-12 animate-fadeIn">
          {t("teleconsultation.Cards.LesAvantages")}
        </h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={zoomRotate}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              className={`${item.bgColor} rounded-2xl shadow-lg p-6 transform transition-transform hover:scale-105 animate-fadeIn group`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-primary dark:bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-primary-green transition">
                  <img src={item.icon} alt="" className="w-6 h-6" loading="lazy" />
                </div>
                <h3 className="text-blue-primary dark:text-blue-600 font-bold ml-4">{item.title}</h3>
              </div>
              <p className="text-gray-800 dark:text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Section Sécurité & Confidentialité */}
      <section className="w-full py-10 bg-gradient-to-r from-blue-100 to-turquoise-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-primary dark:text-white mb-4 animate-fadeIn flex items-center justify-center gap-2">
            <Lock size={28} className="text-primary-green" />
            {t("teleconsultation.securite.titre")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 animate-fadeIn delay-100">{t("teleconsultation.securite.texte")}</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fadeIn delay-200">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 w-full md:w-1/2 flex flex-col items-center">
              <Lock size={32} className="text-primary-green mb-2" />
              <h3 className="font-bold text-blue-primary dark:text-blue-400 mb-2">{t("teleconsultation.securite.protection")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("teleconsultation.securite.protectionTexte")}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 w-full md:w-1/2 flex flex-col items-center">
              <ShieldCheck size={32} className="text-primary-green mb-2" />
              <h3 className="font-bold text-blue-primary dark:text-blue-400 mb-2">{t("teleconsultation.securite.confidentialite")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("teleconsultation.securite.confidentialiteTexte")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="w-full py-10 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-primary dark:text-white mb-4 animate-fadeIn flex items-center justify-center gap-2">
            <UserCircle size={28} className="text-primary-green" />
            {t("teleconsultation.temoignages.titre")}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn delay-100">
            {[1, 2, 3].map(i => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-blue-50 dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center">
                <UserCircle size={40} className="text-primary-green mb-2" />
                <p className="italic text-gray-700 dark:text-gray-300 mb-2">{t(`teleconsultation.temoignages.texte${i}`)}</p>
                <span className="font-bold text-blue-primary dark:text-blue-400">{t(`teleconsultation.temoignages.nom${i}`)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-10 bg-gradient-to-r from-blue-50 to-turquoise-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-primary dark:text-white mb-4 text-center animate-fadeIn flex items-center justify-center gap-2">
            <HelpCircle size={28} className="text-primary-green" />
            {t("teleconsultation.faq.titre")}
          </h2>
          <div className="space-y-6 mt-6 animate-fadeIn delay-100">
            {[1, 2, 3].map((i, idx) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 cursor-pointer" onClick={() => setFaqOpen(faqOpen.map((open, j) => j === idx ? !open : open))}>
                <h3 className="font-bold text-blue-primary dark:text-blue-400 mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary-green" />
                  {t(`teleconsultation.faq.question${i}`)}
                </h3>
                <motion.div
                  initial={false}
                  animate={{ height: faqOpen[idx] ? 'auto' : 0, opacity: faqOpen[idx] ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{t(`teleconsultation.faq.reponse${i}`)}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Teleconsultation;