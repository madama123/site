import React, { createContext, useContext, useState } from "react";

export interface MenuLanguageContextProps {
  isMenuLanguageOpen: boolean;
  toggleMenuLanguage: () => void;
  closeMenuLanguage: () => void;
}

const MenuLanguageContext = createContext<MenuLanguageContextProps | undefined>(
  undefined
);

export const MenuLanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuLanguageOpen, setIsMenuLanguageOpen] = useState(false);

  const toggleMenuLanguage = () => {
    setIsMenuLanguageOpen(!isMenuLanguageOpen);
  };

  const closeMenuLanguage = () => {
    setIsMenuLanguageOpen(false);
  };

  return (
    <MenuLanguageContext.Provider
      value={{ isMenuLanguageOpen, toggleMenuLanguage, closeMenuLanguage }}
    >
      {children}
    </MenuLanguageContext.Provider>
  );
};

export const useMenuLanguage = (): MenuLanguageContextProps => {
  const context = useContext(MenuLanguageContext);
  if (context === undefined) {
    throw new Error(
      "useMenuLanguage must be used within a MenuLanguageProvider"
    );
  }
  return context;
}; 