import { useContext } from 'react';
import { MenuLanguageContext } from '../context/MenuLanguageContext/MenuLanguageContext';

export const useMenuLanguage = () => {
  const context = useContext(MenuLanguageContext);
  if (!context) {
    throw new Error('useMenuLanguage must be used within a MenuLanguageProvider');
  }
  return context;
};
