import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '../shared/components/Navigation';
import { Footer } from '../shared/components/Footer';
import { ThemeProvider } from '../shared/providers/ThemeProvider';
import { LanguageProvider } from '../shared/providers/LanguageProvider';

const PublicLayout: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Navigation />
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            <Outlet />
          </motion.main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default PublicLayout; 