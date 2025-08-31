
import { motion } from "framer-motion";
import Boutton from "../../components/Button";
import AppPlayLink from "../../components/AppPLayLink";
import { useTranslation } from "react-i18next";

const Pharmacies = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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

  const { t } = useTranslation();

  return (
    <main className="main_phamacies_bg">
      {/** LANDING PAGE */}
      <motion.section
        id="landing"
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div id="container" className="pt-24 px-5 lg:px-28">
          <motion.img
            src="/assets/images/pharmacy/fleur1.svg"
            alt="fleur"
            className="w-8 ml-4 lg:w-10"
            variants={fadeInUp}
          />
          <div className="lg:flex lg:justify-between lg:items-start">
            <motion.div className="lg:w-[50%]" variants={fadeInUp}>
              <div
                className="font-extrabold text-3xl lg:text-4xl text-center lg:text-left
                text-green-text px-4 lg:px-0 flex flex-col items-center justify-center lg:items-start"
              >
                <img
                  src="/assets/images/pharmacy/title_vector.svg"
                  alt="title"
                  className="w-[80%]"
                />
                <motion.h1 variants={fadeInUp}>
                  {t("pharmacies.hero.title")}
                </motion.h1>
              </div>
              <motion.div
                className="mt-4 px-4 lg:px-0 text-center lg:text-start"
                variants={fadeInUp}
              >
                <p>{t("pharmacies.hero.paraph")}</p>
              </motion.div>
              <motion.img
                src="/assets/images/pharmacy/fleur2.png"
                alt="fleur2"
                className="hidden lg:block w-72 -translate-y-4 ml-32"
                variants={fadeInUp}
              />
            </motion.div>

            {/** IMAGE */}
            <motion.div
              className="py-4 lg:py-0 lg:-translate-y-10 flex justify-center"
              variants={fadeInUp}
            >
              <img
                src="/assets/images/pharmacy/hero.png"
                alt="hero"
                className="w-48 md:w-72 lg:w-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/** FEATURES */}
      <motion.section
        className="py-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div id="container" className="px-5">
          <motion.div
            className="lg:flex lg:justify-center lg:items-center gap-8"
            variants={fadeInUp}
          >
            <motion.div className="lg:w-1/2" variants={fadeInUp}>
              <h1
                className="text-3xl font-bold text-green-text text-center
                lg:text-left mb-4"
              >
                {t("pharmacies.section2.titre")}
              </h1>
              <p className="text-center mb-2 lg:text-left">
                {t("pharmacies.section2.paraph")}
              </p>
              <ul className="*:mb-4">
                {[
                  t("pharmacies.section2.liste1"),
                  t("pharmacies.section2.liste2"),
                  t("pharmacies.section2.liste3"),
                  t("pharmacies.section2.liste4"),
                ].map((text, index) => (
                  <li key={index}>
                    <motion.div
                      className="flex gap-4 items-center"
                      variants={fadeInUp}
                    >
                      <img
                        src="/assets/images/pharmacy/succesIcon.svg"
                        alt="icon"
                        className="w-10"
                      />
                      <p>{text}</p>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="flex justify-center items-center"
              variants={fadeInUp}
            >
              <img
                src="/assets/images/pharmacy/doctor.png"
                alt="doctor"
                className="w-[400px] lg:w-[450px]"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={fadeInUp}
          >
            <Boutton
                  label={t("pharmacies.section2.telecharger")}
              className="bg-blue-primary text-white hover:bg-blue-header"
            />
            <AppPlayLink />
          </motion.div>
        </div>
      </motion.section>
      {/** MAP SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // S'assure que l'animation ne se déclenche qu'une fois
        variants={zoomRotate}
        className="py-12"
      >
        <div
          id="container"
          className="px-5 lg:px-16 flex flex-col items-center justify-center text-center "
        >
          <motion.p
            className="w-10/12 text-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={zoomRotate}
          >
              {t("pharmacies.section2.paraph2")}
          </motion.p>
          <motion.div
            className="w-full h-[500px] carte mt-16 lg:mt-24 map relative"
            variants={zoomRotate}
          >
            <img
              src="/assets/images/pharmacy/localise.png"
              alt="localise"
              className="absolute w-[500px] lg:w-[525px] bottom-0 -left-5"
            />
          </motion.div>
        </div>
      </motion.section>
      ;
    </main>
  );
};

export default Pharmacies;
