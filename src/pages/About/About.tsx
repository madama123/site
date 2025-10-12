
import { useTranslation } from 'react-i18next';
import AboutCarte from '../../components/AboutCarte/AboutCarte';
import { motion } from 'framer-motion';

const cardImages = [
  '/assets/images/AboutUs/icons8-dev-100.png',
  '/assets/images/AboutUs/icons8-stéthoscope-48.png',
  '/assets/images/AboutUs/data-svgrepo-com (1).png',
  '/assets/images/AboutUs/heart-pulse-2-svgrepo-com.png',
  '/assets/images/AboutUs/documents-svgrepo-com.png',
  '/assets/images/AboutUs/secure-svgrepo-com.png',
];

const About = () => {
  const { t, i18n } = useTranslation();
  const solutions = t('about.solutions.cards', { returnObjects: true });

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800 text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/assets/images/AboutUs/formedeux.svg')] bg-no-repeat bg-[position:-5%_37%] bg-[length:160%] opacity-30 pointer-events-none" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 dark:text-primary-400 mb-6 drop-shadow-lg">
          {t('about.hero.titre1')} <span className="text-red-600">{t('about.hero.titre2')}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4 font-medium">
          {t('about.hero.paraph')}
        </p>
        <span className="inline-block bg-red-600 text-white rounded-full px-6 py-2 font-semibold shadow-lg mb-8">
          {t('about.hero.service')}
        </span>
      </section>

      {/* Histoire & Mission */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-700 dark:text-primary-400 mb-4">
            {t('about.history.titre')}
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-6">
            {t('about.history.paraph')}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-700 dark:text-primary-400 mb-4">
            {t('about.mission.mission')}
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-2">
            {t('about.mission.paraph')}
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>{t('about.mission.soins')}</li>
            <li>{t('about.mission.confort')}</li>
            <li>{t('about.mission.rdv')}</li>
            <li>{t('about.mission.patient')}</li>
          </ul>
        </div>
      </section>

      {/* Solutions proposées */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800 text-center">
        <h2 className="text-blue-primary dark:text-primary-400 font-bold text-3xl mb-12">
          {t('about.solutions.titre')}
        </h2>
        <div className="w-full max-w-6xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black dark:text-gray-100 font-medium place-content-center">
          {solutions.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AboutCarte
                image={cardImages[index]}
                altImage={card.title}
                titre={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partenaires & Témoignages */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-primary-400 mb-6">
          {t('about.partners.titre')}
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-8">
          {t('about.partners.paraph')}
        </p>
        {/* Ici, vous pouvez ajouter un composant de logos partenaires ou de témoignages premium */}
      </section>

      {/* Contact */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-primary-400 mb-6">
          {t('about.contact.soumettre')}
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-8">
          {t('about.contact.paraph')}
        </p>
        {/* Formulaire de contact premium à ajouter ici */}
      </section>
    </main>
  );
};

export default About;