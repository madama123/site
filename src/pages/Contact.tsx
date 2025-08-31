import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Merci de remplir tous les champs.');
      return;
    }
    setError('');
    setSent(true);
    // Ici, tu pourrais envoyer les données à un backend ou un service externe
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-700">Contactez-nous</h1>
        {sent ? (
          <div className="text-green-600 font-semibold text-center">Merci pour votre message ! Nous vous répondrons rapidement.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Nom</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" placeholder="Votre email" />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" rows={5} placeholder="Votre message" />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button type="submit" className="w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700 transition">Envoyer</button>
          </form>
        )}
        <div className="mt-8 text-center text-gray-600">
          <div>Email : <a href="mailto:support@ekose.com" className="text-primary-600 underline">support@ekose.com</a></div>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="https://twitter.com/ekose" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">Twitter</a>
            <a href="https://facebook.com/ekose" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">Facebook</a>
            <a href="https://linkedin.com/company/ekose" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 