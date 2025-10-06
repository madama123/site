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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('rendezvous.title')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder pour la prise de rendez-vous */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/assets/images/prise de redez vous/hero.png"
              alt={t('rendezvous.imageAlt')}
              className="mb-4 w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mb-4">{t('rendezvous.comingSoon')}</h2>
            <p className="text-gray-600">{t('rendezvous.description')}</p>
          </div>
          {/* Exemple de liste dynamique */}
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p>{appointment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">{t('rendezvous.noAppointments')}</p>
          )}
        </div>
        {/* Formulaire pour ajouter un rendez-vous */}
        <div className="mt-8">
          <input
            type="text"
            value={newAppointment}
            onChange={(e) => setNewAppointment(e.target.value)}
            placeholder={t('rendezvous.addPlaceholder')}
            className="border border-gray-300 rounded px-4 py-2 mr-2"
          />
          <button
            onClick={handleAddAppointment}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {t('rendezvous.addButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rendezvous;