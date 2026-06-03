import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, Sun, Moon, Globe, UserCheck } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
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
        <div className="absolute right-0 mt-2 bg-white dark:bg-gray-905 shadow-xl rounded-xl z-50 min-w-[140px] border border-gray-100 dark:border-gray-800 py-1">
          <button
            onClick={() => { changeLanguage('fr'); setShowLangMenu(false); }}
            className={`block px-4 py-2.5 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800 text-sm transition-colors ${language === 'fr' ? 'font-bold text-[#003273] dark:text-[#32E800]' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Français
          </button>
          <button
            onClick={() => { changeLanguage('en'); setShowLangMenu(false); }}
            className={`block px-4 py-2.5 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800 text-sm transition-colors ${language === 'en' ? 'font-bold text-[#003273] dark:text-[#32E800]' : 'text-gray-700 dark:text-gray-300'}`}
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
        <Link to="/login" className="flex items-center w-full px-3 py-2 bg-[#003273] text-white rounded-xl hover:bg-[#0A458E] transition" onClick={onLinkClick}>
          <LogIn className="h-5 w-5 mr-2 text-[#32E800]" />
          <span>{t('nav.login')}</span>
        </Link>
        <Link to="/register" className="flex items-center w-full px-3 py-2 bg-[#32E800] text-white rounded-xl hover:bg-[#2AC100] transition" onClick={onLinkClick}>
          <UserCheck className="h-5 w-5 mr-2" />
          <span>{t('nav.register')}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Link to="/login" className="flex items-center space-x-2 bg-[#003273] hover:bg-[#0A458E] text-white px-4 py-2 rounded-xl transition ml-2 shadow-md hover:shadow-lg">
        <LogIn className="h-5 w-5 text-[#32E800]" />
        <span>{t('nav.login')}</span>
      </Link>
      <Link to="/register" className="flex items-center space-x-2 bg-[#32E800] hover:bg-[#2AC100] text-white px-4 py-2 rounded-xl transition ml-2 shadow-md hover:shadow-lg">
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
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-gray-100/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        <Link to="/" className="flex items-center group" aria-label="Accueil Ekose-Rx">
          <img src="/assets/images/logos/logo.svg" alt="Ekose-Rx" className="h-8 w-auto mr-2 transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-[#003273] dark:hover:text-[#32E800] transition-all duration-200 font-semibold px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 flex items-center"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-700 mx-2"></div>
          <ThemeToggler />
          <LanguageSelector />
          <AuthButtons />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-200 hover:text-[#003273] dark:hover:text-[#32E800] focus:outline-none p-2 rounded-xl transition-all"
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-t border-gray-100 dark:border-gray-800 animate-fade-in">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-[#003273] dark:hover:text-[#32E800] rounded-xl transition-all font-semibold hover:bg-gray-50 dark:hover:bg-gray-800"
                aria-label={link.label}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-start space-x-4 pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
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
