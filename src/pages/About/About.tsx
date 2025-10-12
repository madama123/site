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
  const { t } = useTranslation();
  const solutions = t('about.solutions.cards', { returnObjects: true }) as Array<{ title: string; description: string }>;



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
        <img src="/assets/images/AboutUs/hero.png" alt="Hero illustration" className="mx-auto rounded-xl shadow-xl w-full max-w-2xl mb-8" />
      </section>

      {/* Histoire & Mission avec illustrations */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-700 dark:text-primary-400 mb-4">
            {t('about.history.titre')}
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-6">
            {t('about.history.paraph')}
          </p>
          <img src="/assets/images/AboutUs/promise.png" alt="History illustration" className="rounded-lg shadow-lg w-full max-w-md mt-4" />
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
          <img src="/assets/images/AboutUs/beautiful-black-nurse-portrait.png" alt="Mission illustration" className="rounded-lg shadow-lg w-full max-w-md mt-4" />
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

      {/* Partenaires & Témoignages avec illustration */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-primary-400 mb-6">
            {t('about.partners.titre')}
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-8">
            {t('about.partners.paraph')}
          </p>
          {/* Logos partenaires premium */}
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <img src="/assets/images/AboutUs/logo-blue.svg" alt="Partner logo blue" className="h-12" />
            <img src="/assets/images/AboutUs/logo-green.svg" alt="Partner logo green" className="h-12" />
            <img src="/assets/images/AboutUs/logo-original.svg" alt="Partner logo original" className="h-12" />
            <img src="/assets/images/AboutUs/medical-partner.png" alt="Medical partner" className="h-12" />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/assets/images/AboutUs/map.png" alt="Partners illustration" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
      </section>

      {/* Contact premium */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-primary-400 mb-6">
          {t('about.contact.soumettre')}
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-8">
          {t('about.contact.paraph')}
        </p>
        <form className="max-w-xl mx-auto grid gap-6 text-left">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">{t('about.contact.nom')}</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">{t('about.contact.email')}</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">{t('about.contact.message')}</label>
            <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {t('about.contact.soumettre')}
          </button>
        </form>
      </section>
    </main>
  );

}
export default About;