const categories = [
  {
    title: "Consultation",
    icon: '/assets/images/blog/consultation.png',
    color: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    title: "Health Technology",
    icon: '/assets/images/blog/lab_panel_27dp_FFFF_FILL0_wght400_GRAD0_opsz24.png',
    color: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    title: "Public Health and Prevention",
    icon: '/assets/images/blog/fluid_med_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.png',
    color: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    title: "Nutrition, Sport, and Wellness",
    icon: '/assets/images/blog/rib_cage_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.png',
    color: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
];

import { motion } from "framer-motion";

export function CategoryCards() {
  // Simule le filtrage (à intégrer avec la logique réelle si besoin)
  const handleCategoryClick = (title: string) => {
    // TODO: filtrer les articles selon la catégorie
    alert(`Filtrer par catégorie : ${title}`);
  };
  return (
    <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className={`${category.color} p-6 rounded-lg text-white text-center cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl shadow-lg group`}
            onClick={() => handleCategoryClick(category.title)}
            tabIndex={0}
            role="button"
            aria-label={`Filtrer par ${category.title}`}
          >
            <img src={category.icon} alt={category.title} className="h-16 w-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="font-semibold text-lg drop-shadow-lg">{category.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

