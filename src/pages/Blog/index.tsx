import { HeroSection } from "./HeroSection";
import { CategoryCards } from "./CategoryCards";
import { BlogPosts } from "./BlogPosts";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    id: 1,
    image: "/assets/images/blog/testimonial1.png",
    name: "Alice Dupont",
    role: "Patient",
    comment: "Ekose RX m'a permis de consulter un médecin rapidement et efficacement. Une expérience incroyable !",
  },
  {
    id: 2,
    image: "/assets/images/blog/testimonial2.png",
    name: "Dr. Jean Martin",
    role: "Médecin",
    comment: "Grâce à Ekose RX, je peux suivre mes patients à distance et leur offrir un service de qualité."
  },
  {
    id: 3,
    image: "/assets/images/blog/testimonial3.png",
    name: "Sophie Lambert",
    role: "Pharmacienne",
    comment: "La gestion des prescriptions est devenue tellement plus simple avec Ekose RX. Je recommande vivement !",
  },
];

const Blog = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <HeroSection />
      <CategoryCards />
      <BlogPosts />

      {/* Section Témoignages premium */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-center mb-12 text-blue-primary dark:text-primary-400 drop-shadow-lg"
          >
            {t('blog.testimonialsTitle', 'Ce que disent nos utilisateurs')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 text-center flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src={testimonial.image.replace('./assets/images/', '/assets/images/Blog/').replace(' ', '-')}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-blue-primary dark:border-primary-400"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-blue-primary dark:text-primary-400 mb-1">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{testimonial.role}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-200 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
