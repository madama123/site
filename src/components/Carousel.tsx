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

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0.5,
                  y: index === currentIndex ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-xl shadow-lg p-6 ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              aria-label="Previous"
            >
              &#8592;
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;