import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Rendezvous: React.FC = () => {
  const { t } = useTranslation();
  const [appointments, setAppointments] = useState<string[]>([]);
  const [newAppointment, setNewAppointment] = useState<string>('');

  const handleAddAppointment = () => {
    if (newAppointment.trim()) {
      setAppointments([...appointments, newAppointment]);
      setNewAppointment('');
    }
  };

  return (
    <div className="min-h-screen pt-24 py-8 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-blue-50 to-turquoise-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-primary dark:text-white mb-8 text-center">
          {t('rendezvous.title')}
        </h1>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 sm:p-6 mb-6 flex flex-col items-center">
          <img
            src="/assets/images/prise de redez vous/hero.png"
            alt={t('rendezvous.imageAlt')}
            className="mb-4 w-full max-w-xs sm:max-w-md h-auto object-cover rounded-xl shadow-md"
          />
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-primary dark:text-blue-400 text-center">{t('rendezvous.comingSoon')}</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center">{t('rendezvous.description')}</p>
        </div>
        {/* Liste des rendez-vous */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-blue-primary dark:text-white mb-2 text-center">{t('rendezvous.title')}</h3>
          {appointments.length > 0 ? (
            <ul className="space-y-3">
              {appointments.map((appointment, index) => (
                <li key={index} className="bg-blue-100 dark:bg-gray-800 rounded-lg px-4 py-3 shadow flex items-center justify-between">
                  <span className="text-gray-800 dark:text-gray-200">{appointment}</span>
                  {/* Option de suppression si besoin */}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">{t('rendezvous.noAppointments')}</p>
          )}
        </div>
        {/* Formulaire pour ajouter un rendez-vous */}
        <form
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 justify-center"
          onSubmit={e => { e.preventDefault(); handleAddAppointment(); }}
        >
          <input
            type="text"
            value={newAppointment}
            onChange={(e) => setNewAppointment(e.target.value)}
            placeholder={t('rendezvous.addPlaceholder')}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-primary-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition shadow"
          >
            {t('rendezvous.addButton')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Rendezvous;