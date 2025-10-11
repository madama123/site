import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Section5 = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800 relative">
      <div className="mx-auto max-w-6xl">
        <div
          className="h-[400px] sm:h-[350px] md:h-[300px] lg:h-[400px] w-full rounded-xl overflow-hidden bg-fixed bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/assets/images/HomePage/background-security.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
          <div className="relative flex flex-col justify-center h-full z-10 px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl text-center lg:text-left"
            >
              <h1 className="text-primary-green font-bold text-2xl lg:text-4xl mb-4 dark:text-green-400">
                {t("HomePage.titreSecurite")}
              </h1>
              <p className="text-white dark:text-gray-200 lg:pr-8 text-lg">
                {t("HomePage.textSecurite")}
              </p>
            </motion.div>
          </div>

          {/* Image du docteur (version desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 flex justify-end items-end w-full h-full pointer-events-none"
          >
            <img
              src="/assets/images/HomePage/security-doctor.png"
              alt="Medical security illustration"
              className="w-40 sm:w-64 md:w-[350px] lg:w-[500px] xl:w-[600px] h-auto object-contain"
              loading="lazy"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section5;