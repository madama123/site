import React from 'react';

const faqs = [
  {
    question: "Comment fonctionne Ekose RX ?",
    answer: "Ekose RX permet de prendre rendez-vous, consulter un médecin à distance, accéder à vos dossiers médicaux et bien plus, le tout en ligne et en toute sécurité."
  },
  {
    question: "Est-ce sécurisé ?",
    answer: "Oui, toutes les données sont chiffrées et nous respectons la réglementation RGPD."
  },
  {
    question: "Comment contacter le support ?",
    answer: "Vous pouvez utiliser le formulaire de contact ou écrire à support@ekose.com."
  },
  {
    question: "Puis-je utiliser Ekose RX sur mobile ?",
    answer: "Oui, la plateforme est responsive et une application mobile arrive bientôt !"
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Carte bancaire, PayPal, et bientôt Mobile Money."
  }
];

const FAQ: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
    <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-8 text-primary-700">Foire aux questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h2 className="text-lg font-semibold text-primary-600">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FAQ; 