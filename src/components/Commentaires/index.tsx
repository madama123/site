import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const CommentCarousel: React.FC = () => {
  const { t } = useTranslation();

  // Liste des commentaires traduits
  const comments = [
    { id: 1, text: t("rdv.commentaires.Fatima"), auteur: "Fatima" },
    { id: 2, text: t("rdv.commentaires.Marie"), auteur: "Marie" },
    { id: 3, text: t("rdv.commentaires.Ahmed"), auteur: "Ahmed" },
    { id: 4, text: t("rdv.commentaires.Chloe"), auteur: "Chloe" },
    { id: 5, text: t("rdv.commentaires.Julie"), auteur: "Julie" },
    { id: 6, text: t("rdv.commentaires.Emilie"), auteur: "Emilie" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Index actuel du carrousel
  const [visibleCards, setVisibleCards] = useState(1); // Nombre de cartes visibles
  const [touchStart, setTouchStart] = useState<number | null>(null); // Position de départ du toucher
  const [touchEnd, setTouchEnd] = useState<number | null>(null); // Position de fin du toucher

  useEffect(() => {
    // Ajuste le nombre de cartes visibles en fonction de la largeur de l'écran
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth > 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = ["bg-[#134888]", "bg-[#2AC100]", "bg-black"];
  const textColors = ["text-white", "text-black", "text-white"];

  const handleNext = () => {
    // Passe à la carte suivante si possible
    if (currentIndex < comments.length - visibleCards) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    // Revient à la carte précédente si possible
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    // Gère le glissement pour naviguer dans le carrousel
    if (touchStart !== null && touchEnd !== null) {
      const swipeDistance = touchStart - touchEnd;
      if (swipeDistance > 50) {
        handleNext();
      } else if (swipeDistance < -50) {
        handlePrev();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="px-5 lg:px-16 md:flex justify-center items-center gap-8 carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      data-carousel-translate={`-${currentIndex * (100 / visibleCards)}%`}
    >
      <div
        className="flex mb-4 flex-col items-start 
      justify-center md:w-80 "
      >
        <h1
          className="font-bold text-blue-primary text-3xl
        md:text-left text-center mb-2"
        >
          {t("carossel.titreHero")}
        </h1>
        <div className="flex  gap-8">
          {/* Boutons de navigation */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`left-0 top-1/2 hidden md:block h-16 w-16 rounded-full ${
              currentIndex === 0
                ? "cursor-not-allowed bg-[#CECECE]"
                : "bg-blue-primary"
            }`}
          >
            <img
              src={`${
                currentIndex === 0
                  ? "/assets/images/vecteurs/arrow-left.svg"
                  : "/assets/images/vecteurs/arrow-left-white.svg"
              }`}
              alt="arrow"
              className="w-10 mx-auto"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= comments.length - visibleCards}
            className={`hidden md:block h-16 w-16 rounded-full ${
              currentIndex >= comments.length - visibleCards
                ? "bg-[#CECECE] cursor-not-allowed"
                : "bg-blue-primary"
            }`}
          >
            <img
              src={`${
                currentIndex >= comments.length - visibleCards
                  ? "/assets/images/vecteurs/arrow-right.svg"
                  : "/assets/images/vecteurs/arrow-right-white.svg"
              }`}
              alt="arrow"
              className="w-10 mx-auto"
            />
          </button>
        </div>
      </div>
        <div
          className={`flex transition-transform duration-300 translate-carousel`}
          data-carousel-transform={`translateX(-${currentIndex * (100 / visibleCards)}%)`}
        >
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              className={`flex-shrink-0 p-4 py-10 rounded-lg mx-2 text-center ${
                colors[index % colors.length]
              }   ${textColors[index % textColors.length]} comment-card`}
              data-visible-cards={visibleCards}
            >
              <h1 className="mb-4 font-bold text-xl">{comment.auteur}</h1>
              <p className="font-medium ">{comment.text}</p>
            </div>
          ))}
      </div>

      {/* Indicateurs de navigation pour mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        {comments.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-blue-primary px-4" : "bg-[#CECECE]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CommentCarousel;
