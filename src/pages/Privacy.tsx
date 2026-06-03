import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Lock, CheckCircle2 } from 'lucide-react';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden pt-24 pb-16">
      <Helmet>
        <title>{t('seo.privacy.title')}</title>
        <meta name="description" content={t('seo.privacy.description')} />
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
              🔒 {t('privacyPage.title')}
            </span>
          </motion.div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#003273] dark:text-sky-400 tracking-tight mb-4">
            {t('privacyPage.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('privacyPage.intro')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-blue-50 dark:border-gray-700 p-8 md:p-10 space-y-8"
        >
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-[#32E800]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#003273] dark:text-sky-300 mb-2">Respect de la vie privée</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('privacyPage.intro')}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start border-t border-gray-100 dark:border-gray-700 pt-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#32E800]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#003273] dark:text-sky-300 mb-2">Droit à l'effacement</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('privacyPage.request')}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start border-t border-gray-100 dark:border-gray-700 pt-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#32E800]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#003273] dark:text-sky-300 mb-2">Conformité RGPD</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {t('privacyPage.moreInfo')}
              </p>
              
              <a 
                href="mailto:dev.ekose@gmail.com" 
                className="inline-flex items-center gap-2 bg-[#003273] hover:bg-[#0A458E] text-white px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg font-semibold text-sm"
              >
                <Mail className="w-4 h-4 text-[#32E800]" />
                {t('legalPage.contact')}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Privacy;