import AboutCarte from '../../components/AboutCarte/AboutCarte';
import { motion } from 'framer-motion';

const CardTab = [
  {
    image: './assets/images/AboutUs/icons8-dev-100.png',
    altImage: 'baliseCode',
    titre: 'Innovation et Technologie',
    description:
      'Ekose fournit des informations instantanées sur la disponibilité des soins et des médicaments, offrant aux patients et aux prestataires une visibilité continue pour une meilleure prise en charge.',
  },
  {
    image: './assets/images/AboutUs/icons8-stéthoscope-48.png',
    altImage: 'Stétoscope',
    titre: 'Modèle de santé en équipe et Télémedecine',
    description:
      'Grâce à un modèle de soins collaboratif, Ekose facilite la téléconsultation, permettant aux patients d\'accéder aux soins de santé à distance et aux soignants de travailler ensemble de manière coordonnée.',
  },
  {
    image: './assets/images/AboutUs/data-svgrepo-com (1).png',
    altImage: 'data',
    titre: 'Innovation et technologie',
    description:
      'Ekose fournit des informations instantanées sur la disponibilité des soins et des médicaments, offrant aux patients et aux prestataires une visibilité continue pour une meilleure prise en charge.',
  },
  {
    image: './assets/images/AboutUs/heart-pulse-2-svgrepo-com.png',
    altImage: 'heart',
    titre: 'Innovation et technologie',
    description:
      'Ekose incite les patients à s\'engager activement dans leur parcours de santé, récompensant les efforts pour améliorer la continuité et l\'efficacité des soins.',
  },
  {
    image: './assets/images/AboutUs/documents-svgrepo-com.png',
    altImage: 'documents',
    titre: 'Innovation et technologie',
    description:
      'Ekose fournit des informations instantanées sur la disponibilité des soins et des médicaments, offrant aux patients et aux prestataires une visibilité continue pour une meilleure prise en charge.',
  },
  {
    image: './assets/images/AboutUs/secure-svgrepo-com.png',
    altImage: 'secure',
    titre: 'Innovation et technologie',
    description: 'Vos informations personnelles et médicales restent protégées.',
  },
];

const About = () => {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800 bg-[url('/assets/images/AboutUs/formedeux.svg')] bg-no-repeat bg-[position:-5%_37%] bg-[length:160%] lt:max-sm:bg-[length:230%] lt:max-sm:bg-[position:30%_30%] text-center place-content-center">
        <h2 className="text-blue-primary dark:text-primary-400 font-bold text-3xl mb-12">
          Solutions Proposées
        </h2>
        <div className="w-full max-w-6xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black dark:text-gray-100 font-medium place-content-center">
          {CardTab.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AboutCarte
                image={card.image.replace('./assets/images/', '/assets/images/').replace('secure-svgrepo-com.png', 'secure-svgrepo-com.png')}
                altImage={card.altImage}
                titre={card.titre}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;