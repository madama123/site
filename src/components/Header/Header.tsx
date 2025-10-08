import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, LogIn, UserPlus, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [langMenu, setLangMenu] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto rounded-xl shadow-md"
                src="/logo.png"
                alt="Ekose-RX"
              />
            </Link>
            <nav className="hidden sm:flex gap-2 md:gap-4 lg:gap-6 items-center">
              {[
                { to: '/', label: t('header.home') },
                { to: '/teleconsultation', label: t('header.teleconsultation') },
                { to: '/urgences', label: t('header.emergency') },
                { to: '/rendez-vous', label: t('header.appointments') },
                { to: '/plans-tarifs', label: t('header.plans') },
                { to: '/about', label: t('header.about') },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${location.pathname === link.to ? 'bg-primary-green text-white shadow-md' : 'text-gray-600 dark:text-gray-200 hover:bg-primary-green/10 hover:text-primary-green'}`}
                  aria-current={location.pathname === link.to ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            {/* Sélecteur de langue intégré */}
            <div className="relative">
              <button
                onClick={() => setLangMenu(!langMenu)}
                className="flex items-center gap-1 px-2 py-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary-green/10 transition focus:outline-none focus:ring-2 focus:ring-primary-green"
                aria-label="Changer la langue"
              >
                <Globe size={18} />
                <span className="font-semibold">{i18n.language.toUpperCase()}</span>
              </button>
              {langMenu && (
                <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 animate-fadeIn">
                  <button onClick={() => changeLanguage('fr')} className={`block w-full px-3 py-2 text-left rounded-lg ${i18n.language === 'fr' ? 'bg-primary-green text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>FR</button>
                  <button onClick={() => changeLanguage('en')} className={`block w-full px-3 py-2 text-left rounded-lg ${i18n.language === 'en' ? 'bg-primary-green text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>EN</button>
                </div>
              )}
            </div>
            {/* Boutons Connexion/Inscription */}
            <Link to="/login" className="flex items-center gap-1 px-4 py-2 bg-primary-green text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-md">
              <LogIn size={18} /> {t('login.signIn') || 'Connexion'}
            </Link>
            <Link to="/register" className="flex items-center gap-1 px-4 py-2 bg-white text-primary-green border border-primary-green rounded-lg font-semibold hover:bg-primary-green hover:text-white transition shadow-md">
              <UserPlus size={18} /> {t('register.submit') || 'Inscription'}
            </Link>
            {/* Menu burger mobile */}
            <div className="sm:hidden ml-2 flex items-center gap-2">
              {/* Sélecteur de langue mobile */}
              <button
                onClick={() => setLangMenu(!langMenu)}
                className="flex items-center gap-1 px-2 py-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary-green/10 transition focus:outline-none focus:ring-2 focus:ring-primary-green"
                aria-label="Changer la langue"
              >
                <Globe size={18} />
                <span className="font-semibold">{i18n.language.toUpperCase()}</span>
              </button>
              {langMenu && (
                <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 animate-fadeIn">
                  <button onClick={() => changeLanguage('fr')} className={`block w-full px-3 py-2 text-left rounded-lg ${i18n.language === 'fr' ? 'bg-primary-green text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>FR</button>
                  <button onClick={() => changeLanguage('en')} className={`block w-full px-3 py-2 text-left rounded-lg ${i18n.language === 'en' ? 'bg-primary-green text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>EN</button>
                </div>
              )}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-green"
                aria-label="Ouvrir le menu"
              >
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="sm:hidden px-4 pb-4 animate-fadeIn">
          <div className="pt-2 pb-3 space-y-1">
            {[
              { to: '/', label: t('header.home') },
              { to: '/teleconsultation', label: t('header.teleconsultation') },
              { to: '/urgences', label: t('header.emergency') },
              { to: '/rendez-vous', label: t('header.appointments') },
              { to: '/plans-tarifs', label: t('header.plans') },
              { to: '/about', label: t('header.about') },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`block pl-3 pr-4 py-2 rounded-lg font-medium text-base transition-colors duration-200 ${location.pathname === link.to ? 'bg-primary-green text-white shadow-md' : 'text-gray-700 dark:text-gray-200 hover:bg-primary-green/10 hover:text-primary-green'}`}
                aria-current={location.pathname === link.to ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4">
              <button onClick={() => changeLanguage('fr')} className={`px-2 py-1 rounded font-semibold border w-full ${i18n.language === 'fr' ? 'bg-primary-green text-white border-primary-green' : 'bg-gray-200 text-gray-700 border-gray-300'}`}>FR</button>
              <button onClick={() => changeLanguage('en')} className={`px-2 py-1 rounded font-semibold border w-full ${i18n.language === 'en' ? 'bg-primary-green text-white border-primary-green' : 'bg-gray-200 text-gray-700 border-gray-300'}`}>EN</button>
            </div>
            <div className="flex gap-2 mt-4">
              <Link to="/login" className="flex items-center gap-1 px-4 py-2 bg-primary-green text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-md w-full justify-center">
                <LogIn size={18} /> {t('login.signIn') || 'Connexion'}
              </Link>
              <Link to="/register" className="flex items-center gap-1 px-4 py-2 bg-white text-primary-green border border-primary-green rounded-lg font-semibold hover:bg-primary-green hover:text-white transition shadow-md w-full justify-center">
                <UserPlus size={18} /> {t('register.submit') || 'Inscription'}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;