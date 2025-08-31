
import { motion } from 'framer-motion';

const specialties = [
  { icon: '👨‍⚕️', name: 'Médecin généraliste' },
  { icon: '🦷', name: 'Dentiste' },
  { icon: '👁️', name: 'Ophtalmologue' },
  { icon: '🫀', name: 'Cardiologue' },
  { icon: '🧠', name: 'Neurologue' },
  { icon: '🦿', name: 'Orthopédiste' },
];

const SpecialtyCardSlider = () => {
  // const { t } = useTranslation();

  return (
    <div className="overflow-hidden py-4">
      <motion.div 
        className="flex gap-6"
        animate={{
          x: [-100, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "linear",
            },
          },
        }}
      >
        {specialties.concat(specialties).map((specialty, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-xl shadow-lg p-6 w-64 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{specialty.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{specialty.name}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SpecialtyCardSlider;