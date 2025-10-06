import { createContext } from 'react';

export type Language = 'fr' | 'en';

export interface LanguageContextProps {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);
