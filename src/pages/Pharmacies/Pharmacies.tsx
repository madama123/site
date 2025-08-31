import React from 'react';
import { useTranslation } from 'react-i18next';

const Pharmacies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('pharmacies.title')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder pour la liste des pharmacies */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{t('pharmacies.comingSoon')}</h2>
            <p className="text-gray-600">{t('pharmacies.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacies; 