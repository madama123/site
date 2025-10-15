
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
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                  🚑 Service d'urgence 24/7
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                {t("UrgencesPage.consultationImmediate.besoin")}
                <span className="text-red-200">
                  {t("UrgencesPage.consultationImmediate.immediat")}
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                {t("UrgencesPage.consultationImmediate.texte")}
              </p>
              <div className="space-y-6">
                <p className="font-semibold text-xl text-white">
                  {t("UrgencesPage.consultationImmediate.besoinAide")}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    label={t("UrgencesPage.consultationImmediate.telecharger")}
                    className="bg-white text-red-600 hover:bg-red-50 px-10 py-4 text-lg font-bold shadow-2xl rounded-full"
                    primary
                  />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                src="/assets/images/urgences/hero.png"
                alt="Emergency"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white/20"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <p className="text-red-600 font-bold text-2xl">24/7</p>
                <p className="text-gray-600 text-sm">Disponible</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-primary dark:text-sky-400 mb-16">
            Pourquoi choisir notre service d'urgence ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                className={`${item.bgColor} rounded-2xl p-8 text-white shadow-xl transform transition-all duration-300`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <img src={item.icon.replace('https://images.pexels.com/photos/', '/assets/images/Urgences/')} alt="" className="w-12 h-12" loading="lazy" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-primary dark:text-sky-400 mb-6 leading-tight">
                {t("UrgencesPage.reservezUne")}
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">{t("UrgencesPage.reservezUneTexte")}</p>
              <div className="space-y-4">
                <p className="font-semibold text-gray-800 dark:text-gray-200">Téléchargez l'application maintenant :</p>
                <AppStoreLinks />
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img
                src="/assets/images/urgences/Shanks_Leroux_A_white_ambulance_vehicle_with_emergency_lights_on_a38e485a-c1fd-44b9-a39a-fcf9c0828041.png"
                alt="Ambulance"
                className="rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Urgences;