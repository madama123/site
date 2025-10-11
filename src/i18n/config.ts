import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from '../locales/fr.json';
import en from '../locales/en.json';

const resources = {

  fallbackLng: 'en',
    .use(initReactI18next)
    .init({
      resources,
      lng: localStorage.getItem('language') || 'fr',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      }
    });
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  }
});

export default i18n;