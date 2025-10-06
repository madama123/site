import React from 'react';
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
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.about'), path: '/about' },
        { label: t('footer.careers'), path: '/careers' },
        { label: t('footer.blog'), path: '/blog' },
        { label: t('footer.press'), path: '/press' },
      ],
    },
    {
      title: t('footer.services'),
      links: [
        { label: t('footer.teleconsultation'), path: '/services/teleconsultation' },
        { label: t('footer.rendezvous'), path: '/services/appointments' },
        { label: t('footer.urgences'), path: '/services/emergency' },
        { label: t('footer.pharmacies'), path: '/services/pharmacies' },
      ],
    },
    {
      title: t('footer.support'),
      links: [
        { label: t('footer.help'), path: '/help' },
        { label: t('footer.faq'), path: '/faq' },
        { label: t('footer.contact'), path: '/contact' },
        { label: t('footer.privacy'), path: '/privacy' },
        { label: 'Mentions légales', path: '/legal' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://facebook.com/ekose-rx' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/ekose-rx' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/ekose-rx' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/company/ekose-rx' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <Link to="/">
              <img
                src="/assets/images/logos/logo.svg"
                alt="Ekose-Rx"
                className="h-8 w-auto"
              />
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
          </div>

          {/* Sections de liens */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="text-gray-500 dark:text-gray-300" />
                <span>Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Phone size={20} className="text-gray-500 dark:text-gray-300" />
                <span>+237 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Mail size={20} className="text-gray-500 dark:text-gray-300" />
                <span>contact@ekose-rx.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Partenaires */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Nos Partenaires
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* FasterCapital */}
              <div className="flex flex-col items-center space-y-2">
                <a
                  href="https://www.fastercapital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium text-lg"
                >
                  FasterCapital
                </a>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs text-center">
                  Ekose Holdings Sarl accepté dans le programme EquityPilot - Recherche de capital $250,000
                </p>
              </div>

              {/* INTERACT */}
              <div className="flex flex-col items-center space-y-2">
                <div className="text-blue-primary dark:text-blue-400 font-medium text-lg">
                  INTERACT
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs text-center">
                  Partenaire technologique et développement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Ekose-Rx. {t('footer.rights')} | Développé par <span className="text-blue-primary dark:text-blue-400 font-medium">INTERACT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}; 