import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AuthLayout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center p-8"
      >
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
              {t('auth.welcome')}
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {t('auth.description')}
            </p>
          </div>
          <Outlet />
        </div>
      </motion.div>

      {/* Right Side - Image/Info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:block lg:w-1/2 bg-primary-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-400 opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-white space-y-8">
            <h1 className="text-4xl font-bold">
              {t('auth.slogan')}
            </h1>
            <p className="text-lg opacity-90">
              {t('auth.features')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>{t('auth.feature1')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>{t('auth.feature2')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>{t('auth.feature3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout; 