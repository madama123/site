import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError(t('contactPage.requiredFields'));
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden pt-24 pb-16">
      <Helmet>
        <title>{t('seo.contact.title')}</title>
        <meta name="description" content={t('seo.contact.description')} />
        <link rel="canonical" href="https://ekose-rx.com/contact" />
        <meta property="og:title" content={t('seo.contact.title')} />
        <meta property="og:description" content={t('seo.contact.description')} />
        <meta property="og:url" content="https://ekose-rx.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-[#003273] dark:text-sky-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
              ✉️ {t('footer.contact')}
            </span>
          </motion.div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#003273] dark:text-sky-400 tracking-tight mb-4">
            {t('contactPage.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('about.contact.paraph')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-blue-50 dark:border-gray-700 p-6 md:p-8"
          >
            {sent ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-[#32E800]" />
                </div>
                <h3 className="text-2xl font-bold text-[#003273] dark:text-sky-300 mb-2">
                  {t('contactPage.success')}
                </h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('contactPage.labelName')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#32E800] dark:focus:ring-[#2AC100] transition-all"
                    placeholder={t('contactPage.placeholderName')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('contactPage.labelEmail')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#32E800] dark:focus:ring-[#2AC100] transition-all"
                    placeholder={t('contactPage.placeholderEmail')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('contactPage.labelMessage')}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#32E800] dark:focus:ring-[#2AC100] transition-all resize-none"
                    placeholder={t('contactPage.placeholderMessage')}
                  />
                </div>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm font-medium"
                  >
                    ⚠️ {error}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#003273] hover:bg-[#0A458E] text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 text-[#32E800]" />
                  {t('contactPage.submit')}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-6 flex flex-col justify-between"
          >
            <div className="bg-gradient-to-br from-[#003273] to-[#0A458E] text-white rounded-2xl shadow-xl p-8 space-y-8 flex-grow">
              <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-blue-900/50 pb-4">
                <MessageSquare className="w-6 h-6 text-[#32E800]" />
                Info
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#32E800]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/70 text-sm">{t('contactPage.emailLabel')}</h4>
                    <a href="mailto:dev.ekose@gmail.com" className="text-white hover:text-[#32E800] transition-colors font-medium break-all">dev.ekose@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#32E800]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/70 text-sm">{t('about.contact.phone')}</h4>
                    <a href="tel:+237698881199" className="text-white hover:text-[#32E800] transition-colors font-medium">+237 698-881-199</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#32E800]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/70 text-sm">{t('about.contact.address')}</h4>
                    <p className="text-white font-medium">Douala, Cameroun</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-50 dark:border-gray-700 p-6">
              <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                {t('contactPage.socialTitle')}
              </h4>
              <div className="flex gap-4">
                <a href="https://twitter.com/ekose-rx" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center rounded-xl font-semibold text-[#003273] dark:text-sky-300 transition-colors">
                  Twitter
                </a>
                <a href="https://facebook.com/ekose-rx" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center rounded-xl font-semibold text-[#003273] dark:text-sky-300 transition-colors">
                  Facebook
                </a>
                <a href="https://linkedin.com/company/ekose-rx" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center rounded-xl font-semibold text-[#003273] dark:text-sky-300 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </main>
  );
};

export default Contact;