
import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sophie Martin",
    role: "Médecin généraliste",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "Une plateforme qui révolutionne la télémédecine."
  },
  {
    id: 2,
    name: "Jean Dupont",
    role: "Patient",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "Consultation rapide et efficace depuis chez moi."
  },
  {
    id: 3,
    name: "Dr. Thomas Bernard",
    role: "Cardiologue",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "Un outil indispensable pour le suivi des patients."
  }
];


import { useEffect, useRef } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Animation dynamique : slide horizontal
  const variants = {
    enter: { opacity: 0, x: 100, scale: 0.95 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -100, scale: 0.95 }
  };

  // Changement automatique toutes les 5 secondes
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
        <motion.div
          key={testimonials[currentIndex].id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center min-h-[340px] md:min-h-[320px] border border-gray-100 dark:border-gray-700"
        >
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary-green shadow-lg mb-6 transition-all duration-300 animate-bounce"
          />
          <p className="text-lg md:text-2xl italic text-gray-700 dark:text-gray-200 mb-4 leading-relaxed font-medium animate-fadeIn">
            “{testimonials[currentIndex].quote}”
          </p>
          <div className="font-bold text-blue-primary dark:text-primary-400 text-xl md:text-2xl mb-1">
            {testimonials[currentIndex].name}
          </div>
          <div className="text-sm md:text-base text-primary-green dark:text-primary-300 mb-2">
            {testimonials[currentIndex].role}
          </div>
        </motion.div>
        {/* Navigation Buttons */}
        <button
          aria-label="Précédent"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-primary dark:bg-primary-400 text-white rounded-full p-3 shadow-lg hover:bg-primary-green hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-primary-green"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          aria-label="Suivant"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-primary dark:bg-primary-400 text-white rounded-full p-3 shadow-lg hover:bg-primary-green hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-primary-green"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Dots */}
        <div className="flex gap-3 mt-8">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              aria-label={`Voir le témoignage de ${t.name}`}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-primary-green dark:border-primary-400 ${idx === currentIndex ? 'bg-primary-green dark:bg-primary-400 scale-125 shadow-lg' : 'bg-gray-300 dark:bg-gray-700'}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;