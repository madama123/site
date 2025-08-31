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

      {/* Section Témoignages */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-800 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-primary dark:text-primary-400">{t('blog.testimonialsTitle', 'Ce que disent nos utilisateurs')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonial.image.replace('./assets/images/', '/assets/images/Blog/').replace(' ', '-')}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-blue-primary dark:text-primary-400">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{testimonial.role}</p>
                <p className="mt-4 text-gray-700 dark:text-gray-200 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
