// File: Section1.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const { t } = useTranslation();

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        id="top-sec"
        className="h-auto top-section-bg pt-28 pb-[300px] md:pb-[200px] lg:pb-[400px] px-4 lg:px-32 md:px24"
      >
        <motion.h1
          className="text-center md:w-[95%] mx-auto text-4xl lg:text-5xl font-extrabold text-blue-primary"
          variants={itemVariants}
        >
          {t("HomePage.hero.titreHero")}
        </motion.h1>
        <motion.p
          className="text-center md:text-xl mt-2 lg:mb-2 w-11/12 lg:w1/2 mx-auto"
          variants={itemVariants}
        >
          {t("HomePage.hero.paraph")}
        </motion.p>

        <motion.p
          className="mb-1 md:mx-14 font-semibold"
          variants={itemVariants}
        >
          {t("HomePage.hero.recherche")}
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 lg:gap-10 md:px-14  grid-rows-2 gap-4"
          variants={containerVariants}
        >
          {[
            {
              img: "doctor-svgrepo-com.svg",
              label: t("HomePage.hero.medecin"),
            },
            { img: "consultation.svg", label: t("HomePage.hero.consultation") },
            {
              img: "ambulance-svgrepo-com.svg",
              label: t("HomePage.hero.ambulance"),
            },
            {
              img: "pharmacy-signal-svgrepo-com.svg",
              label: t("HomePage.hero.pharmacie"),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-full h-full bg-blue-primary hover:bg-blue-950 transition-all py-4 duration-300 ease-out rounded-lg flex flex-col items-center justify-center gap-2"
              variants={itemVariants}
            >
              <img
                src={`/assets/images/vecteurs/${item.img}`}
                alt={item.label}
                width="30"
              />

              <p className="text-white text-xs font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        id="home-doctocr"
        className="h-[300px] lg:h-[430px] md:top-[%] lg:w-[70%] absolute top-[70%] lg:top-[52%] left-0 right-0 mx-auto w-[90%] rounded-3xl border-8 border-primary-green"
        variants={itemVariants}
      >
        <div className="w-full h-full relative">
          {/* Image principale de téléconsultation */}
          <img
            src="/assets/images/HomePage/Hero.png"
            alt="Téléconsultation en cours"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
          
          {/* Petite image en coin */}
          <img
            src="/assets/images/HomePage/hero 2.jpg"
            alt="client"
            className="absolute top-4 right-3 rounded-lg w-[100px] md:h-[90px] md:w-[150px] h-[50px] object-cover shadow-lg z-10"
          />
          <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center gap-6">

          <div id="icones" className=" w-10 h-10 rounded-[100%] flex justify-center items-center bg-[#819196]">
              <img
                src="/assets/images/vecteurs/resize-out-svgrepo-com.svg"
                alt=""
                className="w-5"
              />
            </div>

            <div className=" w-10 h-10 rounded-[100%] flex justify-center items-center bg-[#819196]">
              <img
                src="/assets/images/vecteurs/mic-slash-fill-svgrepo-com.svg"
                alt=""
                className="w-5"
              />
            </div>

            <div className=" px-2 py-3 rounded-md bg-[#DE0B0B]">
              <img
                src="/assets/images/vecteurs/exit-svgrepo-com.svg"
                alt=""
                className="w-8"
              />
            </div>

            <div className=" w-10 h-10 rounded-[100%] flex justify-center items-center bg-[#819196]">
              <img
                src="/assets/images/vecteurs/video-svgrepo-com.svg"
                alt=""
                className="w-5"
              />
            </div>

            <div className=" w-10 h-10 rounded-[100%] flex justify-center items-center bg-[#819196]">
              <img
                src="/assets/images/vecteurs/setting-5-svgrepo-com.svg"
                alt=""
                className="w-5"
              />
            </div>
          </div>

          <motion.div
            className="max-lg:hidden w-[250px] border-4 border-primary-green bg-white absolute top-20 -left-36 rounded-2xl py-4 security-card-animate"
            variants={itemVariants}
          >
            <div className="flex place-items-center">
              <img
                src="/assets/images/vecteurs/secure-svgrepo-com.svg"
                alt=""
                width="50"
                height="50"
              />
              <p className="font-semibold">{t("HomePage.hero.securite")}</p>
            </div>
            <p className="text-xs ml-12">{t("HomePage.hero.textSecure")}</p>
          </motion.div>
          <motion.div
            className="max-lg:hidden w-[250px] border-4 border-primary-green bg-white absolute top-60 -right-36 rounded-2xl py-4 service-card-animate"
            variants={itemVariants}
          >
            <div className="flex place-items-center gap-4">
              <img
                src="/assets/images/vecteurs/phone-calling-rounded-svgrepo-com.svg"
                alt=""
                width="50"
                height="50"
              />
              <p className="font-semibold">{t("HomePage.hero.service")}</p>
            </div>
            <p className="text-xs ml-12 mt-2">
              {t("HomePage.hero.serviceText")}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Section1;