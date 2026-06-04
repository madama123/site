import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

const Rendezvous: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>{t('seo.rendezvous.title')}</title>
        <meta name="description" content={t('seo.rendezvous.description')} />
      </Helmet>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mb-8 text-center">
          {t('rendezvous.title')}
        </h1>
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 sm:p-8 mb-6 flex flex-col items-center border border-gray-100 dark:border-gray-800">
          <img
            src="/assets/images/prise de redez vous/hero.png"
            alt={t('rendezvous.imageAlt')}
            className="mb-6 w-full max-w-xs sm:max-w-md h-auto object-cover rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
          />
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-blue-900 dark:text-primary-green text-center">
            {t('rendezvous.comingSoon')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-md">
            {t('rendezvous.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-xl font-bold shadow-lg transition-all hover:scale-105"
            >
              <User size={18} />
              <span>{t('nav.login')}</span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-green hover:bg-green-700 text-white rounded-xl font-bold shadow-lg transition-all hover:scale-105"
            >
              <Calendar size={18} />
              <span>{t('pharmacies.contact')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rendezvous;