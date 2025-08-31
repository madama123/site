import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  image: string;
  category: string;
  title: string;
  date: string;
}

const articles: Article[] = [
  { id: "1", image: "/assets/images/blog/unwell-ill-woman-suffering-from-painful-head-migraine-putting-pression-temples-with-fingers-stressed-young-adult-person-with-hypertension-feeling-sick.png", category: "Psychology", title: "How to manage anxiety and depression?", date: "16 Octobre 2024" },
  { id: "2", image: "/assets/images/blog/unwell-ill-woman-suffering-from-painful-head-migraine-putting-pression-temples-with-fingers-stressed-young-adult-person-with-hypertension-feeling-sick.png", category: "Psychology", title: "How to build resilience in tough times?", date: "15 Octobre 2024" },
  { id: "3", image: "/assets/images/blog/unwell-ill-woman-suffering-from-painful-head-migraine-putting-pression-temples-with-fingers-stressed-young-adult-person-with-hypertension-feeling-sick.png", category: "Health", title: "10 tips for better mental health", date: "14 Octobre 2024" },
  { id: "4", image: "/assets/images/blog/unwell-ill-woman-suffering-from-painful-head-migraine-putting-pression-temples-with-fingers-stressed-young-adult-person-with-hypertension-feeling-sick.png", category: "Self-Care", title: "The power of mindfulness meditation", date: "13 Octobre 2024" },
  { id: "5", image: "/assets/images/blog/unwell-ill-woman-suffering-from-painful-head-migraine-putting-pression-temples-with-fingers-stressed-young-adult-person-with-hypertension-feeling-sick.png", category: "Wellness", title: "How to sleep better at night", date: "12 Octobre 2024" },
];

const OlderArticles: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Correction du calcul de la largeur des cartes pour éviter les erreurs de mise en page
  const calculateCardWidth = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      let numCardsVisible = 3; // Par défaut, 3 cartes visibles
      if (containerWidth < 640) {
        numCardsVisible = 1; // 1 carte sur mobile
      } else if (containerWidth < 1024) {
        numCardsVisible = 2; // 2 cartes sur tablette
      }
      const spacing = 16; // Espacement entre les cartes
      const width = Math.floor((containerWidth - (numCardsVisible - 1) * spacing) / numCardsVisible); // Calcul de la largeur de la carte
      setCardWidth(width);
      document.documentElement.style.setProperty('--card-width', `${width}px`);
    }
  };

  // Calculer la largeur de la carte lors du changement de taille d'écran
  useEffect(() => {
    calculateCardWidth();
    window.addEventListener("resize", calculateCardWidth);
    return () => {
      window.removeEventListener("resize", calculateCardWidth);
    };
  }, []);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
      setScrollIndex((prev) => Math.min(prev + 1, articles.length - 1));
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" });
      setScrollIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="flex flex-col items-center bg-white pt-3 pb-6 lg:px-28">
      <hr className="border-t-4 border-primary-green my-7 w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-6xl mx-auto" />
      <h2 className="text-4xl font-bold text-[#003B87] mb-6">
        Articles plus anciens
      </h2>
      <div className="relative w-full px-4">
        {/* Carousel container */}
        <div
          className="flex overflow-x-auto py-3 mx-auto custom-scrollbar"
          ref={containerRef}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex-shrink-0 p-4 bg-white rounded-lg shadow-md mx-2 dynamic-card-width"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <span className="text-sm bg-[#003B87] text-white px-3 py-1 rounded-full mb-2 inline-block">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <button
                  className="text-green-500 font-semibold hover:underline bg-transparent border-none cursor-pointer"
                  onClick={() => {/* TODO: Implement see more functionality */}}
                >
                  See more
                </button>
                <p className="text-gray-500 mt-2">{article.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:shadow-lg z-10"
          title="Previous"
        >
          <ChevronLeft size={24} color="#003B87" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:shadow-lg z-10"
          title="Next"
        >
          <ChevronRight size={24} color="#003B87" />
        </button>

        {/* Dots */}
        <div className="flex space-x-2 mt-4 justify-center">
          {articles.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${index === scrollIndex ? "bg-[#003B87]" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OlderArticles;
