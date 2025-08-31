import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JoinCommunity = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-8">
            {t('HomePage.joinCommunity.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            {t('HomePage.joinCommunity.description')}
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/signup" className="bg-blue-primary text-white px-8 py-3 rounded-lg hover:bg-blue-header transition-colors duration-300">
              {t('HomePage.joinCommunity.button')}
            </Link>
            <Link to="/learn-more" className="bg-gray-200 text-blue-primary px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-300">
              {t('HomePage.joinCommunity.learnMore')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunity;