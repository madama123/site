import React from 'react';

const Legal: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
    <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary-700">Mentions légales</h1>
      <p className="text-gray-700 mb-4">Ce site est édité par Ekose RX. Tous droits réservés.</p>
      <p className="text-gray-700 mb-2">Directeur de la publication : Dr Ekose</p>
      <p className="text-gray-700 mb-2">Contact : <a href="mailto:support@ekose.com" className="text-primary-600 underline">support@ekose.com</a></p>
      <p className="text-gray-700 mb-2">Hébergeur : Vercel Inc. / Netlify Inc.</p>
      <p className="text-gray-700">Pour toute question juridique, contactez-nous par email.</p>
    </div>
  </div>
);

export default Legal; 