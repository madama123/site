import { lazy, Suspense, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import AppStoreLinks from "../../components/AppStoreLinks";

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
    text: "Ekose RX a révolutionné ma façon de suivre mes patients à distance. Simple, rapide et sécurisé !",
    avatar: "/assets/images/avatarhoe.png"
  },
  {
    name: "Sophie M.",
    role: "Patiente",
    text: "J’ai pu consulter un spécialiste sans me déplacer, et mes ordonnances sont toujours accessibles.",
    avatar: "/assets/images/avatarfem.png"
  },
  // Ajoutez d'autres témoignages ici avec avatar
];


function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-900 w-full">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-center mb-10 text-blue-primary dark:text-primary-400"
      >
        {t('HomePage.testimonials.title')}
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-xs flex flex-col items-center"
          >
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-3 object-cover border-2 border-primary-green shadow" />
            <p className="text-gray-700 dark:text-gray-200 italic mb-4 text-center">“{t.text}”</p>
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
    <main className="min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <Helmet>
        <title>Ekose RX - {t('HomePage.meta.title')}</title>
        <meta name="description" content={t('HomePage.meta.description')} />
        <meta property="og:title" content="Ekose RX - Plateforme de santé moderne" />
        <meta property="og:description" content="Gérez tout votre parcours de santé depuis une seule application." />
        <meta property="og:image" content="/assets/images/HomePage/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero Section moderne et animée avec fond SVG */}
      <section className="w-full max-w-6xl mx-auto py-20 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
        {/* SVG animé en fond */}
        <svg className="absolute left-0 top-0 w-full h-full -z-10 pointer-events-none" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="#E8F1FF" fillOpacity="0.7" />
        </svg>
        <div className="flex-1 z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-blue-primary dark:text-primary-400 break-words"
          >
            {t('HomePage.hero.titreHero')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg mb-8 text-gray-700 dark:text-gray-200 break-words"
          >
            {t('HomePage.hero.paraph')}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-6 sm:px-8 py-3 btn-ekose-primary rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-green transition text-base sm:text-lg font-semibold"
              aria-label={t('HomePage.hero.btnDownloadAria')}
            >
              {t('HomePage.hero.btnDownload')}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="px-6 sm:px-8 py-3 btn-ekose-secondary rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-green transition text-base sm:text-lg font-semibold"
              aria-label={t('HomePage.hero.btnDiscoverAria')}
            >
              {t('HomePage.hero.btnDiscover')}
            </motion.button>
          </div>
          <AppStoreLinks />
        </div>
        <div className="flex-1 flex justify-center mt-12 md:mt-0 z-10">
          <motion.img
            src="/assets/images/HomePage/phone.png"
            alt="Illustration Ekose RX"
            className="w-52 sm:w-64 md:w-80 h-auto drop-shadow-xl object-contain"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="w-full py-12 sm:py-20 border-b border-gray-100 dark:border-gray-800">
          <Section1 />
        </section>
        <section className="w-full py-20 px-4 md:px-8 lg:px-48 border-b border-gray-100 dark:border-gray-800">
          <div id="bottom-sec" className="max-w-6xl mx-auto">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl md:w-[80%] lg:w-[90%] mx-auto font-bold text-blue-primary dark:text-primary-400 mb-6 break-words">
              {t('HomePage.section2.titre')}
            </h1>
            <p className="text-center md:w-[70%] lg:text-xl lg:my-8 mx-auto my-5 text-gray-700 dark:text-gray-200 mb-8 break-words">
              {t('HomePage.section2.paraph1')}
            </p>
            <div className="md:h-[150px] h-auto mb-10">
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