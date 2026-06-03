import { useState, useEffect, ReactNode } from 'react';
import i18n from 'i18next';
import { LanguageContext, Language } from './LanguageContext';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'fr';
    }
    return 'fr';
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    // Met à jour dynamiquement la langue du document HTML pour éviter les auto-traductions intempestives
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const changeLanguage = (lang: Language) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};