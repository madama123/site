import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Globe, Scale } from 'lucide-react';

const Legal: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden pt-24 pb-16">
      <Helmet>
        <title>{t('seo.legal.title')}</title>
        <meta name="description" content={t('seo.legal.description')} />
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
              ⚖️ {t('legalPage.title')}
            </span>
          </motion.div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#003273] dark:text-sky-400 tracking-tight mb-4">
            {t('legalPage.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('legalPage.editor')}
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
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50/50 dark:bg-gray-900/50 rounded-xl border border-blue-100/50 dark:border-gray-700 flex items-start gap-4">
              <Globe className="w-10 h-10 text-[#32E800] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[#003273] dark:text-sky-300 text-lg mb-2">Éditeur du site</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t('legalPage.editor')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-1">{t('legalPage.director')}</p>
              </div>
            </div>

            <div className="p-6 bg-blue-50/50 dark:bg-gray-900/50 rounded-xl border border-blue-100/50 dark:border-gray-700 flex items-start gap-4">
              <ShieldCheck className="w-10 h-10 text-[#32E800] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[#003273] dark:text-sky-300 text-lg mb-2">Hébergement</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t('legalPage.host')}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Scale className="w-10 h-10 text-[#32E800] flex-shrink-0" />
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md">
                {t('legalPage.question')}
              </p>
            </div>
            
            <a 
              href="mailto:dev.ekose@gmail.com" 
              className="flex items-center gap-2 bg-[#003273] hover:bg-[#0A458E] text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg font-semibold"
            >
              <Mail className="w-5 h-5 text-[#32E800]" />
              {t('legalPage.contact')}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Legal;