import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PlansTarifs = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: 'FREEMIUM',
      price: '0',
      color: 'border-blue-primary',
      features: [
        'Delivery Services',
        'Nearby Services',
        'Call emergencies',
        'Order medications',
        'Services fees',
        'Record Keeping',
        'Data exchange',
        'Scheduling appointments'
      ],
      badge: 'Popular',
    },
    {
      name: 'STANDARD',
      price: '05',
      color: 'border-primary-green',
      features: [
        'Delivery Services',
        'Nearby Services',
        'Call emergencies',
        'Order medications',
        'Services fees',
        'Record Keeping',
        'Data exchange',
        'Scheduling appointments'
      ],
      badge: 'Recommended',
    },
    {
      name: 'PREMIUM',
      price: '10',
      color: 'border-green',
      features: [
        'Delivery Services',
        'Nearby Services',
        'Call emergencies',
        'Order medications',
        'Services fees',
        'Record Keeping',
        'Data exchange',
        'Scheduling appointments'
      ],
      badge: 'Best Value',
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-16 lg:pb-20"
    >
      {/* Section Banniere */}
      <section className="relative py-16 text-white bg-gradient-to-r from-blue-primary to-primary-green">
        <div className="container px-6 mx-auto text-center">
          <h1 className="text-3xl font-bold">{t('plansTarifs.title', 'Plans et tarifs')}</h1>
          <p className="mt-4 text-base">{t('plansTarifs.description', "Choisissez le plan qui correspond le mieux à vos besoins et commencez dès aujourd'hui.")}</p>
        </div>
      </section>

      {/* Section Plans Tarifaires */}
      <section className="relative py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-4 text-center transition-shadow border-2 shadow-md ${plan.color} rounded-lg hover:shadow-lg`}
              >
                {plan.badge && (
                  <span className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                    {plan.badge}
                  </span>
                )}
                <h2 className="text-xl font-bold text-gray-800">{plan.name}</h2>
                <div className="my-4 border-t"></div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Annual subscription</p>
                  <p className="text-gray-800 font-bold">${plan.price}</p>
                </div>
                {plan.features.map((feature, featureIndex) => (
                  <React.Fragment key={featureIndex}>
                    <div className="my-2 border-t"></div>
                    <div className="flex justify-between">
                      <p className="text-gray-600 text-sm">{feature}</p>
                      <img
                        src="/assets/images/pharmacy/succesIcon.svg"
                        alt="icon"
                        className="w-6"
                        loading="lazy"
                      />
                    </div>
                  </React.Fragment>
                ))}
                <button className="mt-4 px-4 py-2 bg-blue-primary text-white font-bold rounded-full hover:bg-blue-600 transition">
                  Souscrire maintenant
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default PlansTarifs;