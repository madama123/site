import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import { Compass, Home } from 'lucide-react';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 px-4">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-blue-50 dark:border-gray-700 p-8 text-center relative z-10"
      >
        <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <Compass className="w-12 h-12 text-[#003273] dark:text-sky-300 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        <h1 className="text-8xl font-black text-[#003273] dark:text-sky-400 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
          {t('notFound.title')}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-2 mb-8 leading-relaxed">
          {t('notFound.description')}
        </p>

        <Button
          label={t('notFound.back')}
          onClick={() => navigate('/')}
          className="w-full bg-[#003273] hover:bg-[#0A458E] dark:bg-[#32E800] dark:hover:bg-[#2AC100] text-white dark:text-gray-900 font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          icon={<Home className="w-5 h-5" />}
        />
      </motion.div>
    </main>
  );
};

export default NotFound;