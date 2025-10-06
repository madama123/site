import { createContext, useContext, useState, ReactNode } from 'react';

interface MenuLanguageContextType {
  isMenuLanguageOpen: boolean;
  toggleMenuLanguage: () => void;
  closeMenuLanguage: () => void;
}

const MenuLanguageContext = createContext<MenuLanguageContextType | undefined>(undefined);

export const MenuLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuLanguageOpen, setIsMenuLanguageOpen] = useState(false);

  const toggleMenuLanguage = () => setIsMenuLanguageOpen((prev) => !prev);
  const closeMenuLanguage = () => setIsMenuLanguageOpen(false);

  return (
    <MenuLanguageContext.Provider value={{ isMenuLanguageOpen, toggleMenuLanguage, closeMenuLanguage }}>
      {children}
    </MenuLanguageContext.Provider>
  );
};

export const useMenuLanguage = () => {
  const context = useContext(MenuLanguageContext);
  if (!context) {
    throw new Error('useMenuLanguage must be used within a MenuLanguageProvider');
  }
  return context;
};
