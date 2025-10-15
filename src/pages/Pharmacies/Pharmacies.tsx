import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Pharmacies: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #e0f7fa 0%, #f8fafc 60%, #d1fae5 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

  return (
    <main className="min-h-screen bg-transparent py-0 flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Hero section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-32 pb-8 px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 dark:text-primary-green mb-4 drop-shadow-lg">
            {t('pharmacies.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-6">
            {t('pharmacies.description')}
          </p>
          <button
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-green text-lg"
            aria-label={t('pharmacies.cta')}
            onClick={() => alert('Fonctionnalité à venir !')}
          >
            {t('pharmacies.cta')}
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center items-center"
        >
          <img
            src="/assets/images/pharmacy/hero.png"
            alt={t('pharmacies.heroImgAlt')}
            className="w-64 md:w-80 lg:w-96 h-auto rounded-2xl shadow-2xl border-4 border-white dark:border-primary-green object-contain bg-gradient-to-br from-blue-100 to-green-100"
            loading="lazy"
          />
        </motion.div>
      </section>
      {/* Info section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-8 flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-4 border-primary-green mb-10"
      >
        <img
          src="/assets/images/pharmacy/localise.png"
          alt={t('pharmacies.availableImgAlt')}
          className="w-40 h-40 rounded-2xl object-contain shadow-xl border-4 border-primary-green mr-0 md:mr-8 mb-4 md:mb-0 animate-bounce"
          loading="lazy"
        />
        <div className="flex-1">
          <h3 className="text-3xl font-extrabold text-primary-green mb-2">{t('pharmacies.availableTitle')}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">{t('pharmacies.availableDesc')}</p>
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-green-100 dark:from-primary-green dark:to-blue-900 text-primary-green dark:text-white rounded-full text-xs font-semibold shadow animate-pulse">{t('pharmacies.availableBadge')}</span>
        </div>
      </motion.section>
      {/* Services section */}
      {/* Section fonctionnement et expérience utilisateur */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col md:flex-row items-center gap-10 relative z-10 animate-fadeIn"
      >
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-primary-green mb-4">{t('pharmacies.howTitle')}</h2>
          <ol className="list-decimal list-inside space-y-4 mb-6 text-lg text-gray-700 dark:text-gray-200">
            <li><strong className="text-primary-green">{t('pharmacies.step1')}</strong> : {t('pharmacies.step1Desc')}</li>
            <li><strong className="text-primary-green">{t('pharmacies.step2')}</strong> : {t('pharmacies.step2Desc')}</li>
            <li><strong className="text-primary-green">{t('pharmacies.step3')}</strong> : {t('pharmacies.step3Desc')}</li>
            <li><strong className="text-primary-green">{t('pharmacies.step4')}</strong> : {t('pharmacies.step4Desc')}</li>
            <li><strong className="text-primary-green">{t('pharmacies.step5')}</strong> : {t('pharmacies.step5Desc')}</li>
          </ol>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold shadow">{t('pharmacies.badge1')}</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-full font-semibold shadow">{t('pharmacies.badge2')}</span>
            <span className="px-4 py-2 bg-gradient-to-r from-primary-green to-blue-500 text-white rounded-full font-semibold shadow">{t('pharmacies.badge3')}</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-400 to-green-500 text-white rounded-full font-semibold shadow">{t('pharmacies.badge4')}</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <img
            src="/assets/images/pharmacy/fond.png"
            alt={t('pharmacies.mapImgAlt')}
            className="w-72 h-auto rounded-2xl shadow-2xl border-4 border-primary-green object-cover bg-gradient-to-br from-blue-100 to-green-100 mb-4 animate-fadeIn"
            loading="lazy"
          />
          <img
            src="/assets/images/pharmacy/pillule_verte.svg"
            alt={t('pharmacies.medsImgAlt')}
            className="w-32 h-auto rounded-xl shadow-lg border-2 border-blue-100 object-contain animate-bounce"
            loading="lazy"
          />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col md:flex-row items-center gap-10 relative z-10 animate-fadeIn"
      >
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary-green dark:text-blue-400 mb-4">{t('pharmacies.storyTitle')}</h2>
          <ul className="space-y-4 mb-6 text-lg text-gray-700 dark:text-gray-200">
            <li><strong className="text-primary-green">✔ {t('pharmacies.premium')} :</strong> {t('pharmacies.premiumDesc')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.open')} :</strong> {t('pharmacies.openDesc')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.delivery')} :</strong> {t('pharmacies.deliveryDesc')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.advice')} :</strong> {t('pharmacies.adviceDesc')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.digital')} :</strong> {t('pharmacies.digitalDesc')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.security')} :</strong> {t('pharmacies.securityDesc')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.access')} :</strong> {t('pharmacies.accessDesc')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.range')} :</strong> {t('pharmacies.rangeDesc')}</li>
          </ul>
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-primary-green text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green"
            aria-label={t('pharmacies.contact')}
            onClick={() => alert('Contact direct à venir !')}
          >
            {t('pharmacies.contact')}
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <img
            src="/assets/images/pharmacy/portrait-female-pharmacist-working-drugstore.png"
            alt={t('pharmacies.pharmacistImgAlt')}
            className="w-72 h-auto rounded-2xl shadow-2xl border-4 border-primary-green object-cover bg-gradient-to-br from-blue-100 to-green-100 mb-4 animate-fadeIn"
            loading="lazy"
          />
          <img
            src="/assets/images/pharmacy/livreur.png"
            alt={t('pharmacies.deliveryImgAlt')}
            className="w-40 h-auto rounded-xl shadow-lg border-2 border-blue-100 object-contain animate-bounce"
            loading="lazy"
          />
          <img
            src="/assets/images/pharmacy/localise.png"
            alt={t('pharmacies.localiseImgAlt')}
            className="w-32 h-auto rounded-xl shadow-lg border-2 border-primary-green object-contain animate-bounce"
            loading="lazy"
          />
        </div>
      </motion.section>
      {/* Décor bas */}
      <img src="/assets/images/pharmacy/fleur1.svg" alt="Décor" className="absolute bottom-0 right-0 w-40 h-40 opacity-30 pointer-events-none select-none" />
    </main>
  );
};

export default Pharmacies;