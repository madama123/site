import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Star, Crown, Award } from "lucide-react";

const PlansTarifs = () => {
  const { t, i18n } = useTranslation();

  const plans = [
    {
      name: t('plansTarifs.plans.freemium.name', 'FREEMIUM'),
      price: t('plansTarifs.plans.freemium.price', '0'),
      currency: t('plansTarifs.currency', '$'),
      color: 'border-blue-primary',
      icon: <Star className="text-blue-primary" size={32} />,
      description: t('plansTarifs.plans.freemium.description', 'Accès aux services essentiels gratuitement.'),
      features: [
        t('plansTarifs.features.delivery', 'Livraison de médicaments'),
        t('plansTarifs.features.nearby', 'Services à proximité'),
        t('plansTarifs.features.emergency', 'Appel urgences'),
        t('plansTarifs.features.order', 'Commander des médicaments'),
        t('plansTarifs.features.fees', 'Frais de service inclus'),
        t('plansTarifs.features.records', 'Gestion des dossiers'),
        t('plansTarifs.features.exchange', 'Échange de données'),
        t('plansTarifs.features.scheduling', 'Prise de rendez-vous')
      ],
      badge: t('plansTarifs.plans.freemium.badge', 'Populaire'),
    },
    {
      name: t('plansTarifs.plans.standard.name', 'STANDARD'),
      price: t('plansTarifs.plans.standard.price', '5'),
      currency: t('plansTarifs.currency', '$'),
      color: 'border-primary-green',
      icon: <Award className="text-primary-green" size={32} />,
      description: t('plansTarifs.plans.standard.description', 'Plus de fonctionnalités et de flexibilité.'),
      features: [
        t('plansTarifs.features.delivery', 'Livraison de médicaments'),
        t('plansTarifs.features.nearby', 'Services à proximité'),
        t('plansTarifs.features.emergency', 'Appel urgences'),
        t('plansTarifs.features.order', 'Commander des médicaments'),
        t('plansTarifs.features.fees', 'Frais de service inclus'),
        t('plansTarifs.features.records', 'Gestion des dossiers'),
        t('plansTarifs.features.exchange', 'Échange de données'),
        t('plansTarifs.features.scheduling', 'Prise de rendez-vous')
      ],
      badge: t('plansTarifs.plans.standard.badge', 'Recommandé'),
    },
    {
      name: t('plansTarifs.plans.premium.name', 'PREMIUM'),
      price: t('plansTarifs.plans.premium.price', '10'),
      currency: t('plansTarifs.currency', '$'),
      color: 'border-green',
      icon: <Crown className="text-green-600" size={32} />,
      description: t('plansTarifs.plans.premium.description', 'Tous les services, support prioritaire et avantages exclusifs.'),
      features: [
        t('plansTarifs.features.delivery', 'Livraison de médicaments'),
        t('plansTarifs.features.nearby', 'Services à proximité'),
        t('plansTarifs.features.emergency', 'Appel urgences'),
        t('plansTarifs.features.order', 'Commander des médicaments'),
        t('plansTarifs.features.fees', 'Frais de service inclus'),
        t('plansTarifs.features.records', 'Gestion des dossiers'),
        t('plansTarifs.features.exchange', 'Échange de données'),
        t('plansTarifs.features.scheduling', 'Prise de rendez-vous'),
        t('plansTarifs.features.support', 'Support prioritaire'),
        t('plansTarifs.features.advantages', 'Avantages exclusifs')
      ],
      badge: t('plansTarifs.plans.premium.badge', 'Meilleure valeur'),
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-16 lg:pb-20"
    >
      {/* Espace entre nav et bannière */}
      <div className="h-12 md:h-16 lg:h-20" aria-hidden="true"></div>
      {/* Section Banniere avec image animée */}
      <section className="relative py-16 bg-gradient-to-r from-blue-primary to-primary-green">
        <div className="container px-6 mx-auto flex flex-col lg:flex-row items-center lg:justify-start gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2 text-center flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4 animate-fade-in">
              {t('plansTarifs.title', 'Plans et tarifs')}
            </h1>
            <p className="mt-2 text-base md:text-lg text-white opacity-90 animate-fade-in delay-100">
              {t('plansTarifs.description', "Choisissez le plan qui correspond le mieux à vos besoins et commencez dès aujourd'hui.")}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <img
              src="/assets/images/HomePage/security-doctor.png"
              alt="Sécurité docteur"
              className="rounded-2xl shadow-2xl w-64 h-64 object-cover border-4 border-white dark:border-primary-green animate-fade-in"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Section Plans Tarifaires */}
      <section className="relative py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-6 text-center transition-shadow border-2 shadow-xl ${plan.color} rounded-2xl hover:shadow-2xl bg-white dark:bg-gray-800 group`}
                aria-label={plan.name}
              >
                {plan.badge && (
                  <span className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-bl-2xl shadow-lg animate-pulse">
                    {plan.badge}
                  </span>
                )}
                <div className="flex justify-center mb-2">{plan.icon}</div>
                <h2 className="text-2xl font-extrabold text-blue-primary dark:text-primary-green mb-2 drop-shadow">{plan.name}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">{plan.description}</p>
                <div className="my-4 border-t"></div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">{t('plansTarifs.subscription', 'Abonnement annuel')}</p>
                  <p className="text-3xl font-bold text-primary-green dark:text-green-400">{plan.currency}{plan.price}</p>
                </div>
                <ul className="mt-4 mb-2 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-between gap-2 text-gray-700 dark:text-gray-200 text-sm">
                      <span>{feature}</span>
                      <img
                        src="/assets/images/pharmacy/succesIcon.svg"
                        alt="icon"
                        className="w-5 h-5"
                        loading="lazy"
                      />
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 px-6 py-3 bg-primary-green text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition animate-pulse"
                  aria-label={t('plansTarifs.subscribe', 'Souscrire maintenant')}
                  onClick={() => window.location.href = '/register'}
                >
                  {t('plansTarifs.subscribe', 'Souscrire maintenant')}
                </motion.button>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center text-gray-600 dark:text-gray-300">
            <p className="text-sm">{t('plansTarifs.payment', 'Moyens de paiement acceptés : Visa, Mastercard, Mobile Money')}</p>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default PlansTarifs;