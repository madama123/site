import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, Sun, Moon, Globe, UserCheck } from 'lucide-react';
import { useTheme } from '../../../shared/providers/ThemeProvider';
import { useLanguage } from '../../../shared/providers/LanguageProvider';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/teleconsultation', label: 'Téléconsultation' },
    { href: '/plans-tarifs', label: 'Abonnements' },
    { href: '/blog', label: 'Blog' },
    { href: '/pharmacies', label: 'Pharmacies' },
    { href: '/urgences', label: 'Urgences' },
    { href: '/about', label: 'À propos' },
  ];

  // Fermer le menu langue si on clique en dehors
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    }
    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLangMenu]);

  return (
    <nav className="bg-transparent backdrop-blur shadow-md fixed w-full z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        <Link to="/" className="flex items-center group" aria-label="Accueil Ekose-Rx">
          <img src="/assets/images/logos/logo.svg" alt="Ekose-Rx" className="h-8 w-auto mr-2 transition-transform group-hover:scale-105" />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium px-2 py-1 rounded flex items-center"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
          {/* Switch thème */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Sélecteur de langue */}
          <div className="relative" ref={langMenuRef}>
            <button
              aria-label="Changer de langue"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setShowLangMenu((v) => !v)}
            >
              <Globe size={20} />
            </button>
            {showLangMenu && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-900 shadow rounded z-50 min-w-[120px]">
                <button
                  onClick={() => { changeLanguage('fr'); setShowLangMenu(false); }}
                  className={`block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${language === 'fr' ? 'font-bold text-primary-600' : ''}`}
                >Français</button>
                <button
                  onClick={() => { changeLanguage('en'); setShowLangMenu(false); }}
                  className={`block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${language === 'en' ? 'font-bold text-primary-600' : ''}`}
                >English</button>
              </div>
            )}
          </div>
          <button
            className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition ml-2"
            onClick={() => window.location.href = 'http://localhost:5173/login'}
            aria-label="Connexion"
          >
            <LogIn className="h-5 w-5" />
            <span>Connexion</span>
          </button>
          <button
            className="flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-md hover:bg-primary-200 transition ml-2 border border-primary-600"
            onClick={() => window.location.href = 'http://localhost:5173/register'}
            aria-label="Inscription"
          >
            <UserCheck className="h-5 w-5" />
            <span>Inscription</span>
          </button>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-primary-600 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 dark:bg-gray-900/10 backdrop-blur shadow-lg border-t border-gray-100 dark:border-gray-800 animate-fade-in">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 rounded transition-colors font-medium flex items-center"
                aria-label={link.label}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            {/* Switch thème mobile */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-2"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Sélecteur de langue mobile */}
            <div className="relative" ref={langMenuRef}>
              <button
                aria-label="Changer de langue"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-2"
                onClick={() => setShowLangMenu((v) => !v)}
              >
                <Globe size={20} />
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-900 shadow rounded z-50 min-w-[120px]">
                  <button
                    onClick={() => { changeLanguage('fr'); setShowLangMenu(false); }}
                    className={`block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${language === 'fr' ? 'font-bold text-primary-600' : ''}`}
                  >Français</button>
                  <button
                    onClick={() => { changeLanguage('en'); setShowLangMenu(false); }}
                    className={`block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${language === 'en' ? 'font-bold text-primary-600' : ''}`}
                  >English</button>
                </div>
              )}
            </div>
            <button
              className="flex items-center w-full px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition mt-2"
              onClick={() => { closeMenu(); window.location.href = 'http://localhost:5173/login'; }}
              aria-label="Connexion"
            >
              <LogIn className="h-5 w-5 mr-2" />
              <span>Connexion</span>
            </button>
            <button
              className="flex items-center w-full px-3 py-2 bg-primary-100 text-primary-700 rounded-md hover:bg-primary-200 transition mt-2 border border-primary-600"
              onClick={() => { closeMenu(); window.location.href = 'http://localhost:5173/register'; }}
              aria-label="Inscription"
            >
              <UserCheck className="h-5 w-5 mr-2" />
              <span>Inscription</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export { Navigation };