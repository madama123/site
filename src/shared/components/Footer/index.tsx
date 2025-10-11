import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'success' | 'error' | ''>('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simule une validation d'email
    if (email && email.includes('@')) {
      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus(''), 3000);
    } else {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus(''), 3000);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://facebook.com/ekose-rx' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/ekose-rx' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/ekose-rx' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/company/ekose-rx' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-full w-full px-2 sm:px-4 md:px-8 lg:px-16 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8 w-full items-stretch">
          {/* Logo et description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="space-y-4 col-span-1">
            <Link to="/" className="block mb-4 sm:mb-2">
              <img src="/assets/images/logos/logo.svg" alt="Ekose-Rx" className="h-10 w-auto max-w-full" />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-300 hover:text-primary-green dark:hover:text-primary-green transition-colors transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-green"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            {/* Sélecteur de langue */}
            <div className="flex gap-2 mt-2 justify-center">
              <button onClick={() => changeLanguage('fr')} aria-label="Français" className={`px-2 py-1 rounded font-semibold border ${i18n.language === 'fr' ? 'bg-primary-green text-white border-primary-green' : 'bg-gray-200 text-gray-700 border-gray-300'} w-16 sm:w-auto`}>FR</button>
              <button onClick={() => changeLanguage('en')} aria-label="English" className={`px-2 py-1 rounded font-semibold border ${i18n.language === 'en' ? 'bg-primary-green text-white border-primary-green' : 'bg-gray-200 text-gray-700 border-gray-300'} w-16 sm:w-auto`}>EN</button>
            </div>
          </motion.div>

          {/* Liens utiles */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="space-y-4 col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white sm:text-left break-words">{t('footer.liensUtiles')}</h3>
            <ul className="space-y-2">
              <li className="sm:text-left text-xs sm:text-sm md:text-base break-words"><Link to="/about" className="hover:text-primary-green transition-colors font-semibold transition-all duration-200 ease-in-out transform hover:-translate-y-1" style={{ fontFamily: 'Inter,Nunito,Arial,sans-serif' }}>{t('footer.about')}</Link></li>
              <li className="sm:text-left text-xs sm:text-sm md:text-base break-words"><Link to="/teleconsultation" className="hover:text-primary-green transition-colors font-semibold transition-all duration-200 ease-in-out transform hover:-translate-y-1" style={{ fontFamily: 'Inter,Nunito,Arial,sans-serif' }}>{t('footer.teleconsultation')}</Link></li>
              <li className="sm:text-left text-xs sm:text-sm md:text-base break-words"><Link to="/pharmacies" className="hover:text-primary-green transition-colors font-semibold transition-all duration-200 ease-in-out transform hover:-translate-y-1" style={{ fontFamily: 'Inter,Nunito,Arial,sans-serif' }}>{t('footer.pharmacies')}</Link></li>
              <li className="sm:text-left text-xs sm:text-sm md:text-base break-words"><Link to="/blog" className="hover:text-primary-green transition-colors font-semibold transition-all duration-200 ease-in-out transform hover:-translate-y-1" style={{ fontFamily: 'Inter,Nunito,Arial,sans-serif' }}>{t('footer.blog')}</Link></li>
              <li className="sm:text-left text-xs sm:text-sm md:text-base break-words"><Link to="/contact" className="hover:text-primary-green transition-colors font-semibold transition-all duration-200 ease-in-out transform hover:-translate-y-1" style={{ fontFamily: 'Inter,Nunito,Arial,sans-serif' }}>{t('footer.contact')}</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="space-y-4 col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white sm:text-left break-words">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base break-words"><MapPin size={20} className="text-gray-500 dark:text-gray-300" /><span>Douala, Cameroun</span></li>
              <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base break-words"><Phone size={20} className="text-gray-500 dark:text-gray-300" /><span>+237 698-881-199</span></li>
              <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base break-words"><Mail size={20} className="text-gray-500 dark:text-gray-300" /><span>dev.ekose@gmail.com</span></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }} className="space-y-4 col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white sm:text-left break-words">{t('footer.letterTitle')}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('footer.letterPara')}</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t('footer.mail')}
                className="px-2 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-green w-full font-medium text-xs sm:text-sm md:text-base shadow-md transition-all duration-200 break-words"
                style={{ fontFamily: 'Inter, Nunito, Arial, sans-serif' }}
              />
              <button type="submit" className="px-2 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-400 transition-all duration-200 w-full font-semibold text-xs sm:text-sm md:text-base shadow-md" style={{ fontFamily: 'Inter, Nunito, Arial, sans-serif' }}>{t('footer.souscrire')}</button>
              {newsletterStatus === 'success' && (
                <span className="text-green-600 dark:text-green-400 font-semibold mt-2">✔ {i18n.language === 'fr' ? 'Inscription réussie !' : 'Successfully subscribed!'}</span>
              )}
              {newsletterStatus === 'error' && (
                <span className="text-red-600 dark:text-red-400 font-semibold mt-2">{i18n.language === 'fr' ? 'Adresse email invalide.' : 'Invalid email address.'}</span>
              )}
            </form>
          </motion.div>
        </div>

        {/* Partenaires */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 w-full">
          <div className="flex flex-wrap justify-center gap-8 md:gap-6 items-center">
            <a href="https://www.fastercapital.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 hover:opacity-80 transition-opacity">
              <img src="/assets/images/fasterCap.jpg" alt="FasterCapital" className="h-12 w-auto object-contain rounded-lg shadow-md" />
              <span className="text-blue-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium text-base">FasterCapital</span>
              {i18n.language === 'fr' ? (
                <span className="text-center text-gray-700 dark:text-gray-200 text-xs mt-2 px-2 py-1 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-sm max-w-xs">
                  <strong className="text-primary-green">Ekose Holdings Sarl</strong> a été acceptée dans le programme EquityPilot de <a href="https://www.fastercapital.com" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">FasterCapital</a> et recherche un capital de <span className="font-bold text-green-700 dark:text-green-400">$ 250,000</span>.
                </span>
              ) : (
                <span className="text-center text-gray-700 dark:text-gray-200 text-xs mt-2 px-2 py-1 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-sm max-w-xs">
                  <strong className="text-primary-green">Ekose Holdings Sarl</strong> has been accepted into the EquityPilot program of <a href="https://www.fastercapital.com" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">FasterCapital</a> and is seeking a capital of <span className="font-bold text-green-700 dark:text-green-400">$ 250,000</span>.
                </span>
              )}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 w-full">
          <div className="text-center text-gray-600 dark:text-gray-300 text-sm flex flex-col md:flex-row flex-wrap items-center justify-center gap-2 md:gap-4">
            <span className="mb-2 md:mb-0">© {new Date().getFullYear()} Ekose-Rx. {t('footer.copyright')}</span>
            <img src="/assets/images/interact-blanc.png" alt="INTERACT" className="h-16 w-auto inline-block align-middle mx-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};