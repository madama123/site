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
            {t('pharmacies.title', 'Trouvez la pharmacie idéale')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-6">
            {t('pharmacies.description', 'Accédez à une sélection premium de pharmacies, services et conseils santé, partout et à tout moment.')}
          </p>
          <button
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-green text-lg"
            aria-label={t('pharmacies.cta', 'Trouver une pharmacie près de moi')}
            onClick={() => alert('Fonctionnalité à venir !')}
          >
            {t('pharmacies.cta', 'Trouver une pharmacie près de moi')}
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
            alt={t('pharmacies.heroImgAlt', 'Illustration pharmacie premium')}
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
          alt={t('pharmacies.availableImgAlt', 'Localisation des pharmacies disponibles')}
          className="w-40 h-40 rounded-2xl object-contain shadow-xl border-4 border-primary-green mr-0 md:mr-8 mb-4 md:mb-0 animate-bounce"
          loading="lazy"
        />
        <div className="flex-1">
          <h3 className="text-3xl font-extrabold text-primary-green mb-2">{t('pharmacies.availableTitle', 'Pharmacies disponibles près de vous')}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">{t('pharmacies.availableDesc', "Consultez la liste des pharmacies ouvertes, localisez-les sur la carte et bénéficiez d'un accès rapide à leurs services : horaires, contact, livraison, conseils santé.")}</p>
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-green-100 dark:from-primary-green dark:to-blue-900 text-primary-green dark:text-white rounded-full text-xs font-semibold shadow animate-pulse">{t('pharmacies.availableBadge', 'Mise à jour en temps réel')}</span>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-primary-green mb-4">{t('pharmacies.howTitle', 'Comment ça marche ?')}</h2>
          <ol className="list-decimal list-inside space-y-4 mb-6 text-lg text-gray-700 dark:text-gray-200">
            <li><strong className="text-primary-green">{t('pharmacies.step1', 'Recherche et géolocalisation')}</strong> : {t('pharmacies.step1Desc', "Trouvez rapidement les pharmacies ouvertes autour de vous grâce à la géolocalisation et à la carte interactive.")}</li>
            <li><strong className="text-primary-green">{t('pharmacies.step2', 'Consultation des services')}</strong> : {t('pharmacies.step2Desc', "Accédez aux horaires, contacts, services proposés, disponibilité des médicaments et options de livraison.")}</li>
            <li><strong className="text-primary-green">{t('pharmacies.step3', 'Commande et livraison')}</strong> : {t('pharmacies.step3Desc', "Commandez vos médicaments ou produits de santé en ligne, choisissez la livraison à domicile ou le retrait en pharmacie.")}</li>
            <li><strong className="text-primary-green">{t('pharmacies.step4', 'Accompagnement personnalisé')}</strong> : {t('pharmacies.step4Desc', "Bénéficiez de conseils santé, d’un suivi digitalisé et d’un accompagnement par des pharmaciens experts.")}</li>
            <li><strong className="text-primary-green">{t('pharmacies.step5', 'Sécurité et confidentialité')}</strong> : {t('pharmacies.step5Desc', "Toutes vos données et transactions sont protégées, respect du secret médical garanti.")}</li>
          </ol>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold shadow">{t('pharmacies.badge1', 'Géolocalisation')}</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-full font-semibold shadow">{t('pharmacies.badge2', 'Livraison express')}</span>
            <span className="px-4 py-2 bg-gradient-to-r from-primary-green to-blue-500 text-white rounded-full font-semibold shadow">{t('pharmacies.badge3', 'Conseils personnalisés')}</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-400 to-green-500 text-white rounded-full font-semibold shadow">{t('pharmacies.badge4', 'Sécurité & confidentialité')}</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <img
            src="/assets/images/pharmacy/fond.png"
            alt={t('pharmacies.mapImgAlt', 'Carte interactive pharmacie')}
            className="w-72 h-auto rounded-2xl shadow-2xl border-4 border-primary-green object-cover bg-gradient-to-br from-blue-100 to-green-100 mb-4 animate-fadeIn"
            loading="lazy"
          />
          <img
            src="/assets/images/pharmacy/pillule_verte.svg"
            alt={t('pharmacies.medsImgAlt', 'Médicaments disponibles')}
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
          <h2 className="text-3xl font-bold text-primary-green dark:text-blue-400 mb-4">{t('pharmacies.storyTitle', 'Votre santé, notre priorité')}</h2>
          <ul className="space-y-4 mb-6 text-lg text-gray-700 dark:text-gray-200">
            <li><strong className="text-primary-green">✔ {t('pharmacies.premium', 'Sélection premium')} :</strong> {t('pharmacies.premiumDesc', 'Accès à des pharmacies partenaires certifiées, fiables et proches de vous.')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.open', 'Disponibilité 24h/24')} :</strong> {t('pharmacies.openDesc', 'Trouvez une pharmacie ouverte à toute heure, même les jours fériés.')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.delivery', 'Livraison express')} :</strong> {t('pharmacies.deliveryDesc', 'Recevez vos médicaments à domicile, en toute sécurité et confidentialité.')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.advice', 'Conseils personnalisés')} :</strong> {t('pharmacies.adviceDesc', 'Dialogue direct avec des pharmaciens experts pour un accompagnement santé sur-mesure.')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.digital', 'Suivi digitalisé')} :</strong> {t('pharmacies.digitalDesc', 'Historique de vos commandes, rappels de renouvellement, notifications et accès mobile.')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.security', 'Sécurité & confidentialité')} :</strong> {t('pharmacies.securityDesc', 'Protection de vos données et respect du secret médical.')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.access', 'Accessibilité')} :</strong> {t('pharmacies.accessDesc', 'Interface intuitive, adaptée à tous les profils et besoins spécifiques.')}</li>
            <li><strong className="text-primary-green">✔ {t('pharmacies.range', 'Large gamme')} :</strong> {t('pharmacies.rangeDesc', 'Médicaments, parapharmacie, produits naturels, accessoires et conseils bien-être.')}</li>
          </ul>
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-primary-green text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green"
            aria-label={t('pharmacies.contact', 'Contactez un pharmacien')}
            onClick={() => alert('Contact direct à venir !')}
          >
            {t('pharmacies.contact', 'Contactez un pharmacien')}
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <img
            src="/assets/images/pharmacy/portrait-female-pharmacist-working-drugstore.png"
            alt={t('pharmacies.pharmacistImgAlt', 'Pharmacien expert')}
            className="w-72 h-auto rounded-2xl shadow-2xl border-4 border-primary-green object-cover bg-gradient-to-br from-blue-100 to-green-100 mb-4 animate-fadeIn"
            loading="lazy"
          />
          <img
            src="/assets/images/pharmacy/livreur.png"
            alt={t('pharmacies.deliveryImgAlt', 'Livraison pharmacie')}
            className="w-40 h-auto rounded-xl shadow-lg border-2 border-blue-100 object-contain animate-bounce"
            loading="lazy"
          />
          <img
            src="/assets/images/pharmacy/localise.png"
            alt={t('pharmacies.localiseImgAlt', 'Localisation pharmacie')}
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