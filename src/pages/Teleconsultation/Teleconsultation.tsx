import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import React from "react";
import AppStoreLinks from "../../components/AppStoreLinks";
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
      <Helmet>
        <title>{t('seo.teleconsultation.title')}</title>
        <meta name="description" content={t('seo.teleconsultation.description')} />
        <link rel="canonical" href="https://ekose-rx.com/teleconsultation" />
        <meta property="og:title" content={t('seo.teleconsultation.title')} />
        <meta property="og:description" content={t('seo.teleconsultation.description')} />
        <meta property="og:image" content="https://ekose-rx.com/assets/images/Teleconsultation/doctor_teleconsult.jpg" />
        <meta property="og:url" content="https://ekose-rx.com/teleconsultation" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Telemedicine",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Ekose RX"
              },
              "description": "Consultez des médecins généralistes ou spécialistes en visio sans vous déplacer avec Ekose RX."
            }
          `}
        </script>
      </Helmet>
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
          <div className="w-full pl-6 lg:pl-12 pt-8 pb-0 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-800 dark:via-gray-700 dark:to-blue-900/20 text-center lg:text-left md:flex gap-8 shadow-xl">
            <div className="max-sm:pb-6 max-md:pr-6 mb-2 md:mb-6 flex flex-col md:justify-center md:w-[60%]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-[#134888] dark:text-sky-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
                  📱 {t('teleconsultation.badge')}
                </span>
              </motion.div>
              <h1 className="font-extrabold mb-4 text-3xl md:text-5xl lg:text-6xl text-blue-primary dark:text-sky-400 animate-fadeIn leading-tight">
                {t("teleconsultation.hero.titreHero")}
              </h1>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-200 animate-fadeIn delay-100 leading-relaxed">{t("teleconsultation.hero.paraph")}</p>
              <div className="flex flex-col gap-4 mt-6 animate-fadeIn delay-200">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-green to-blue-500 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-fit mx-auto md:mx-0"
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
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                src="/assets/images/Teleconsultation/doctor_teleconsult.jpg"
                alt="Téléconsultation"
                className="w-[250px] sm:w-[350px] lg:w-[500px] 2xl:w-[550px] rounded-3xl shadow-2xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
              >
                <ShieldCheck className="text-primary-green" size={32} aria-label="Sécurité" />
              </motion.div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className={`${item.bgColor} rounded-2xl shadow-lg p-6 transform transition-all duration-300 animate-fadeIn group border border-gray-100 dark:border-gray-700`}
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-primary-green w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4 shadow-lg">
                  <img src={item.icon} alt="" className="w-8 h-8" loading="lazy" />
                </div>
                <h3 className="text-blue-primary dark:text-blue-400 font-bold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Section Sécurité & Confidentialité */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-16 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary dark:text-white mb-6 animate-fadeIn flex items-center justify-center gap-3">
            <Lock size={32} className="text-primary-green" />
            {t("teleconsultation.securite.titre")}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-fadeIn delay-100 leading-relaxed max-w-3xl mx-auto">{t("teleconsultation.securite.texte")}</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fadeIn delay-200">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 w-full md:w-1/2 flex flex-col items-center border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-4">
                <Lock size={40} className="text-primary-green" />
              </div>
              <h3 className="font-bold text-xl text-blue-primary dark:text-blue-400 mb-3">{t("teleconsultation.securite.protection")}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">{t("teleconsultation.securite.protectionTexte")}</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 w-full md:w-1/2 flex flex-col items-center border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                <ShieldCheck size={40} className="text-primary-green" />
              </div>
              <h3 className="font-bold text-xl text-blue-primary dark:text-blue-400 mb-3">{t("teleconsultation.securite.confidentialite")}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">{t("teleconsultation.securite.confidentialiteTexte")}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

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