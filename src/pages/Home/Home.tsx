import { lazy, Suspense, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";

const Section1 = lazy(() => import("./Section1"));
const Section3 = lazy(() => import("./Section3"));
const Section4 = lazy(() => import("./Section4"));
const Section5 = lazy(() => import("./Section5"));
const JoinCommunity = lazy(() => import("../../components/JoinCommunity"));
const Carousel = lazy(() => import("../../components/Carousel"));
import SpecialtyCardSlider from "../../components/SpecialtyCardSlider";

const testimonials = [
  {
    name: "Dr. Jean Dupont",
    role: "Médecin généraliste",
    text: "Ekose RX a révolutionné ma façon de suivre mes patients à distance. Simple, rapide et sécurisé !"
  },
  {
    name: "Sophie M.",
    role: "Patiente",
    text: "J’ai pu consulter un spécialiste sans me déplacer, et mes ordonnances sont toujours accessibles."
  },
  // Ajoute d'autres témoignages ici
];

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-900 w-full">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-center mb-10 text-blue-primary dark:text-primary-400"
      >
        Ils nous font confiance
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-xs"
          >
            <p className="text-gray-700 dark:text-gray-200 italic mb-4">“{t.text}”</p>
            <div className="font-semibold text-primary-600">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-20">
      <Helmet>
        <title>Ekose RX - {t('HomePage.meta.title')}</title>
        <meta name="description" content={t('HomePage.meta.description')} />
        <meta property="og:title" content="Ekose RX - Plateforme de santé moderne" />
        <meta property="og:description" content="Gérez tout votre parcours de santé depuis une seule application." />
        <meta property="og:image" content="/assets/images/HomePage/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero Section moderne et animée */}
      <section className="w-full max-w-6xl mx-auto py-20 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold mb-6 text-blue-primary dark:text-primary-400"
          >
            Bienvenue sur Ekose RX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-8 text-gray-700 dark:text-gray-200"
          >
            Gérez tout votre parcours de santé depuis une seule application.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-8 py-3 bg-primary-green text-white dark:text-gray-900 rounded-lg shadow-lg hover:bg-green-700 dark:hover:bg-green-500 transition text-lg font-semibold"
            aria-label="Télécharger l'application Ekose RX"
          >
            Télécharger l'application
          </motion.button>
        </div>
        <div className="flex-1 flex justify-center mt-12 md:mt-0">
          <motion.img
            src="/assets/images/HomePage/phone.png"
            alt="Illustration Ekose RX"
            className="w-80 h-auto drop-shadow-xl"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="w-full py-20 border-b border-gray-100 dark:border-gray-800">
          <Section1 />
        </section>
        <section className="w-full py-20 px-4 md:px-8 lg:px-48 border-b border-gray-100 dark:border-gray-800">
          <div id="bottom-sec" className="max-w-6xl mx-auto">
            <h1 className="text-center text-4xl md:w-[80%] lg:w-[90%] mx-auto font-bold text-blue-primary dark:text-primary-400 mb-6">
              {t('HomePage.section2.titre')}
            </h1>
            <p className="text-center md:w-[70%] lg:text-xl lg:my-8 mx-auto my-5 text-gray-700 dark:text-gray-200 mb-8">
              {t('HomePage.section2.paraph1')}
            </p>
            <div className="md:h-[150px] h-auto mb-16">
              <SpecialtyCardSlider />
            </div>
          </div>
        </section>
        <section className="w-full py-20 border-b border-gray-100 dark:border-gray-800">
          <Section3 />
        </section>
        <section className="w-full py-20 px-4 md:px-8 lg:px-16 border-b border-gray-100 dark:border-gray-800">
          <Section4 />
        </section>
        <section className="w-full py-20 border-b border-gray-100 dark:border-gray-800">
          <Section5 />
        </section>
        <section className="w-full py-20 px-4 md:px-8 lg:px-16 border-b border-gray-100 dark:border-gray-800">
          <TestimonialsSection />
        </section>
        <section className="w-full py-20 border-b border-gray-100 dark:border-gray-800">
          <JoinCommunity />
        </section>
        <section className="w-full py-20 px-4 md:px-8 lg:px-16">
          <Carousel />
        </section>
      </Suspense>
    </main>
  );
};

export default Home;