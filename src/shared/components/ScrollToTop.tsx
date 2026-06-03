import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed bottom-6 right-6 z-50 bg-[#003273] dark:bg-[#32E800] text-white p-3 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#32E800]/50"
          whileHover={{ scale: 1.1, backgroundColor: '#0A458E' }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6 text-[#32E800] dark:text-[#003273]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
