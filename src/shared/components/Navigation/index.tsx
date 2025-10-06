import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, Sun, Moon, Globe, UserCheck } from 'lucide-react';
import { useTheme } from '../../../shared/providers/ThemeContext';
import { useLanguage } from '../../../shared/hooks/useLanguage';
import { useTranslation } from 'react-i18next';

// --- Sous-composants réutilisables ---

const ThemeToggler = ({ className = '' }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className}>
      <button
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

const LanguageSelector = ({ className = '' }: { className?: string }) => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    };

    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLangMenu]);

  return (
    <div className={`relative ${className}`} ref={langMenuRef}>
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
          >
            Français
          </button>
          <button
            onClick={() => { changeLanguage('en'); setShowLangMenu(false); }}
            className={`block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${language === 'en' ? 'font-bold text-primary-600' : ''}`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

const AuthButtons = ({ isMobile, onLinkClick }: { isMobile?: boolean; onLinkClick?: () => void; }) => {
  const { t } = useTranslation();

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-2 pt-2">
        <Link to="/login" className="flex items-center w-full px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition" onClick={onLinkClick}>
          <LogIn className="h-5 w-5 mr-2" />
          <span>{t('nav.login')}</span>
        </Link>
        <Link to="/register" className="flex items-center w-full px-3 py-2 bg-primary-100 text-primary-700 rounded-md hover:bg-primary-200 transition border border-primary-600" onClick={onLinkClick}>
          <UserCheck className="h-5 w-5 mr-2" />
          <span>{t('nav.register')}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Link to="/login" className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition ml-2">
        <LogIn className="h-5 w-5" />
        <span>{t('nav.login')}</span>
      </Link>
      <Link to="/register" className="flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-md hover:bg-primary-200 transition ml-2 border border-primary-600">
        <UserCheck className="h-5 w-5" />
        <span>{t('nav.register')}</span>
      </Link>
    </div>
  );
};


// --- Composant Navigation principal refactorisé ---

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/teleconsultation', label: t('nav.services.teleconsultation') },
    { href: '/plans-tarifs', label: t('nav.pricing') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/pharmacies', label: t('nav.services.pharmacies') },
    { href: '/urgences', label: t('nav.services.emergency') },
    { href: '/about', label: t('nav.about') },
  ];

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
          <ThemeToggler />
          <LanguageSelector />
          <AuthButtons />
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
            <div className="flex items-center justify-start space-x-4 pt-2">
              <ThemeToggler />
              <LanguageSelector />
            </div>
            <AuthButtons isMobile onLinkClick={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export { Navigation };
