import React from 'react';

const Privacy: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
    <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary-700">Politique de confidentialité</h1>
      <p className="text-gray-700 mb-4">Nous respectons votre vie privée. Vos données sont chiffrées et ne sont jamais revendues à des tiers.</p>
      <p className="text-gray-700 mb-2">Vous pouvez demander la suppression de vos données à tout moment en écrivant à <a href="mailto:support@ekose.com" className="text-primary-600 underline">support@ekose.com</a>.</p>
      <p className="text-gray-700">Pour plus d'informations, consultez notre politique RGPD ou contactez-nous.</p>
    </div>
  </div>
);

export default Privacy; 