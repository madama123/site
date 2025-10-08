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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, tu peux ajouter la logique d'envoi de l'email (API, etc.)
    setEmail('');
    alert(t('footer.souscriptionSuccess'));
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
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center md:justify-between w-full">
          {/* Logo et description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="space-y-4">
            <Link to="/">
              <img src="/assets/images/logos/logo.svg" alt="Ekose-Rx" className="h-8 w-auto" />
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
                  className="text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            {/* Sélecteur de langue */}
            <div className="flex gap-2 mt-2 justify-center">
              <button onClick={() => changeLanguage('fr')} aria-label="Français" className={`px-2 py-1 rounded font-semibold border ${i18n.language === 'fr' ? 'bg-primary-green text-white border-primary-green' : 'bg-gray-200 text-gray-700 border-gray-300'}`}>FR</button>
              <button onClick={() => changeLanguage('en')} aria-label="English" className={`px-2 py-1 rounded font-semibold border ${i18n.language === 'en' ? 'bg-primary-green text-white border-primary-green' : 'bg-gray-200 text-gray-700 border-gray-300'}`}>EN</button>
            </div>
          </motion.div>

          {/* Liens utiles */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('footer.liensUtiles')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary-green transition-colors">{t('footer.about') !== 'footer.about' ? t('footer.about') : 'À propos'}</Link></li>
              <li><Link to="/teleconsultation" className="hover:text-primary-green transition-colors">{t('footer.teleconsultation') !== 'footer.teleconsultation' ? t('footer.teleconsultation') : 'Téléconsultation'}</Link></li>
              <li><Link to="/pharmacies" className="hover:text-primary-green transition-colors">{t('footer.pharmacies') !== 'footer.pharmacies' ? t('footer.pharmacies') : 'Pharmacies'}</Link></li>
              <li><Link to="/blog" className="hover:text-primary-green transition-colors">{t('footer.blog') !== 'footer.blog' ? t('footer.blog') : 'Blog'}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-green transition-colors">{t('footer.contact') !== 'footer.contact' ? t('footer.contact') : 'Contact'}</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"><MapPin size={20} className="text-gray-500 dark:text-gray-300" /><span>Yaoundé, Cameroun</span></li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"><Phone size={20} className="text-gray-500 dark:text-gray-300" /><span>+237 XXX XXX XXX</span></li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"><Mail size={20} className="text-gray-500 dark:text-gray-300" /><span>contact@ekose-rx.com</span></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('footer.letterTitle')}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('footer.letterPara')}</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t('footer.mail')}
                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-green w-full sm:w-auto"
              />
              <button type="submit" className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-400 transition w-full sm:w-auto">{t('footer.souscrire')}</button>
            </form>
          </motion.div>
        </div>

        {/* Partenaires */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 w-full">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <a href="https://www.fastercapital.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 hover:opacity-80 transition-opacity">
              <img src="/assets/images/fasterCap.jpg" alt="FasterCapital" className="h-12 w-auto object-contain rounded-lg shadow-md" />
              <span className="text-blue-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium text-base">FasterCapital</span>
            </a>
            <a href="https://interact.cm" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 hover:opacity-80 transition-opacity">
              <img src="/assets/images/interact-blanc.png" alt="INTERACT" className="h-12 w-auto object-contain rounded-lg shadow-md" />
              <span className="text-blue-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium text-base">INTERACT</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 w-full">
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm flex flex-wrap items-center justify-center gap-2">
            © {new Date().getFullYear()} Ekose-Rx. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};