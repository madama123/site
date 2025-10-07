
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import AppStoreLinks from "../../components/AppStoreLinks";

const Urgences = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const items = [
    {
      icon: "/assets/images/vecteurs/health.svg",
      title: t("UrgencesPage.Cards.Simplicite"),
      description: t("UrgencesPage.Cards.SimpliciteTexte"),
      bgColor: "bg-blue-primary",
      glowEffect: "pulse-glow-blue",
    },
    {
      icon: "/assets/images/vecteurs/secure-svgrepo-com.svg",
      title: t("UrgencesPage.Cards.Securite"),
      description: t("UrgencesPage.Cards.SecuriteTexte"),
      bgColor: "bg-[#BE0209]",
      glowEffect: "pulse-glow-red",
    },
    {
      icon: "/assets/images/vecteurs/time-success-svgrepo-com.svg",
      title: t("UrgencesPage.Cards.Intervention"),
      description: t("UrgencesPage.Cards.InterventionTexte"),
      bgColor: "bg-[#2AC100]",
      glowEffect: "pulse-glow-green",
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <section
        className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-4 md:px-8 lg:px-16 border-b border-gray-100 dark:border-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white dark:text-gray-100">
                {t("UrgencesPage.consultationImmediate.besoin")}
                <span className="text-red-300 dark:text-red-200">
                  {t("UrgencesPage.consultationImmediate.immediat")}
                </span>
              </h1>
              <p className="text-lg mb-8 text-white dark:text-gray-200">
                {t("UrgencesPage.consultationImmediate.texte")}
              </p>
              <div className="space-y-6">
                <p className="font-semibold italic text-white dark:text-gray-200">
                  {t("UrgencesPage.consultationImmediate.besoinAide")}
                </p>
                <Button
                  label={t("UrgencesPage.consultationImmediate.telecharger")}
                  className="bg-white text-red-600 dark:bg-gray-100 dark:text-red-700 px-8 py-3 text-lg"
                  primary
                />
              </div>
            </div>
            <motion.div variants={itemVariants} className="hidden md:block">
              <img
                src="/assets/images/urgences/hero.png"
                alt="Emergency"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${item.bgColor} ${item.glowEffect} rounded-xl p-6 text-white`}
              >
                <div className="flex items-center mb-4">
                  <img src={item.icon.replace('https://images.pexels.com/photos/', '/assets/images/Urgences/')} alt="" className="w-12 h-12" loading="lazy" />
                  <h3 className="text-xl font-bold ml-4">{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-primary dark:text-primary-400 mb-8">
                {t("UrgencesPage.reservezUne")}
              </h2>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">{t("UrgencesPage.reservezUneTexte")}</p>
              <AppStoreLinks />
            </div>
            <div className="md:w-1/2">
              <img
                src="/assets/images/urgences/Shanks_Leroux_A_white_ambulance_vehicle_with_emergency_lights_on_a38e485a-c1fd-44b9-a39a-fcf9c0828041.png"
                alt="Ambulance"
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Urgences;