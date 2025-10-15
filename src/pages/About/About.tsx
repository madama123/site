import { useTranslation } from 'react-i18next';
import AboutCarte from '../../components/AboutCarte/AboutCarte';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, Target, Heart, Lock, Handshake, Users, Building, CheckCircle2, TrendingUp, UserCheck, Activity, ArrowDown } from 'lucide-react';

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

  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden">
      {/* Hero Title */}
      <motion.section
        {...sectionAnimation}
        className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 text-center overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-[#134888] dark:text-sky-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
              🏥 {t('about.aboutPage.badge')}
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#134888] dark:text-sky-400 tracking-tight mb-6">
            {t('about.aboutPage.brandStory')}
          </h1>
          
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('about.aboutPage.subtitle')}
          </p>
          
          <motion.button
            onClick={() => scrollToSection('team-story')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-4 bg-[#134888] dark:bg-sky-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            {t('about.aboutPage.ctaButton')}
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.button>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <Users className="w-8 h-8 text-[#134888] dark:text-sky-400" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-4xl font-bold text-[#134888] dark:text-sky-400 mb-2"
              >
                {t('about.aboutPage.stats.patientsCount')}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{t('about.aboutPage.stats.patients')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <UserCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-4xl font-bold text-[#134888] dark:text-sky-400 mb-2"
              >
                {t('about.aboutPage.stats.doctorsCount')}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{t('about.aboutPage.stats.doctors')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <Activity className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-4xl font-bold text-[#134888] dark:text-sky-400 mb-2"
              >
                {t('about.aboutPage.stats.consultationsCount')}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{t('about.aboutPage.stats.consultations')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="text-4xl font-bold text-[#134888] dark:text-sky-400 mb-2"
              >
                {t('about.aboutPage.stats.satisfactionCount')}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{t('about.aboutPage.stats.satisfaction')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <motion.section {...sectionAnimation} className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="pr-8">
            <h2 className="flex items-center text-3xl font-bold text-[#134888] dark:text-sky-400 mb-4">
              <Globe className="w-8 h-8 mr-3 text-blue-500" />
              {t('about.aboutPage.whoWeAre.title')}
            </h2>
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.aboutPage.whoWeAre.p1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.aboutPage.whoWeAre.p2')}
            </p>
          </div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <img src="/assets/images/AboutUs/hero.png" alt="Healthcare connection" className="rounded-2xl shadow-2xl w-full h-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section {...sectionAnimation} className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800/50 dark:to-blue-900/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="md:order-2">
            <h2 className="flex items-center text-3xl font-bold text-[#134888] dark:text-sky-400 mb-4">
              <Target className="w-8 h-8 mr-3 text-blue-500" />
              {t('about.aboutPage.mission.title')}
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.aboutPage.mission.p1')}
            </p>
            <h2 className="flex items-center text-3xl font-bold text-[#134888] dark:text-sky-400 mb-4">
              <Lightbulb className="w-8 h-8 mr-3 text-blue-500" />
              {t('about.aboutPage.vision.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.aboutPage.vision.p1')}
            </p>
          </div>
          <motion.div className="md:order-1" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <img src="/assets/images/AboutUs/promise.png" alt="Our promise" className="rounded-2xl shadow-2xl w-full h-auto" />
          </motion.div>
        </div>
      </motion.section>
      
      {/* Core Values */}
      <motion.section {...sectionAnimation} className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#134888] dark:text-sky-400 mb-16">{t('about.aboutPage.coreValues.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-8 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-red-500"
              >
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full mb-6 inline-block">
                  <Heart className="w-8 h-8 text-red-500"/>
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">{t('about.aboutPage.coreValues.value1.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('about.aboutPage.coreValues.value1.description')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500"
              >
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-6 inline-block">
                  <Lock className="w-8 h-8 text-green-500"/>
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">{t('about.aboutPage.coreValues.value2.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('about.aboutPage.coreValues.value2.description')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-8 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/10 dark:to-amber-900/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500"
              >
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-full mb-6 inline-block">
                  <Users className="w-8 h-8 text-yellow-600"/>
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">{t('about.aboutPage.coreValues.value3.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('about.aboutPage.coreValues.value3.description')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-8 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-purple-500"
              >
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-6 inline-block">
                  <Building className="w-8 h-8 text-purple-500"/>
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">{t('about.aboutPage.coreValues.value4.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('about.aboutPage.coreValues.value4.description')}</p>
              </motion.div>
            </div>
        </div>
      </motion.section>

      {/* Solutions proposées (Preserved Section) */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-700 text-center">
        <h2 className="font-bold text-3xl md:text-4xl mb-12 text-[#134888] dark:text-sky-400">
          {t('about.solutions.titre')}
        </h2>
        <div className="w-full max-w-6xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black dark:text-gray-100 font-medium place-content-center">
          {solutions.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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

      {/* Team Story */}
      <motion.section id="team-story" {...sectionAnimation} className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold text-[#134888] dark:text-sky-400 mb-4">{t('about.aboutPage.teamStory.title')}</h2>
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.aboutPage.teamStory.p1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.aboutPage.teamStory.p2')}
            </p>
          </div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <img src="/assets/images/AboutUs/beautiful-black-nurse-portrait.png" alt="Ekose-Rx Team" className="rounded-2xl shadow-2xl w-full h-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* Difference */}
      <motion.section {...sectionAnimation} className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/20 dark:from-gray-800/50 dark:to-blue-900/10">
        <div className="max-w-5xl mx-auto">
            <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold text-[#134888] dark:text-sky-400 mb-6 text-center">
              <Lock className="w-10 h-10 mr-3 text-blue-500" />
              {t('about.aboutPage.difference.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              {t('about.aboutPage.difference.p1')}
            </p>
        </div>
      </motion.section>

      {/* Team Mission */}
      <motion.section {...sectionAnimation} className="py-32 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
            <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold text-[#134888] dark:text-sky-400 mb-6 text-center">
              <Handshake className="w-10 h-10 mr-3 text-blue-500" />
              {t('about.aboutPage.teamMission.title')}
            </h2>
            <p className="text-lg md:text-xl mb-12 font-semibold text-center text-gray-700 dark:text-gray-200">
              {t('about.aboutPage.teamMission.p1')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/10 dark:to-sky-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {t('about.aboutPage.teamMission.listItem1')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl border border-green-100 dark:border-green-900/30 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {t('about.aboutPage.teamMission.listItem2')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10 rounded-xl border border-purple-100 dark:border-purple-900/30 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {t('about.aboutPage.teamMission.listItem3')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {t('about.aboutPage.teamMission.listItem4')}
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 p-8 bg-gradient-to-r from-[#134888] to-blue-600 dark:from-sky-600 dark:to-blue-700 rounded-2xl text-center shadow-2xl"
            >
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                {t('about.aboutPage.teamMission.conclusion')}
              </p>
            </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

export default About;