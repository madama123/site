import { useTranslation } from "react-i18next";

const Solutions = () => {
  const { t } = useTranslation();

  // Données des cartes pour la section "Solutions"
  const items = [
    {
      icon: "/assets/images/vecteurs/code-tech-dev-svgrepo-com.svg",
      title: t("about.solutions.titreCard1"),
      description: t("about.solutions.paraphCard1"),
      bgColor: "bg-[#DBEAFF] dark:bg-gray-800",
      bgIcon: "bg-blue-primary",
    },
    {
      icon: "/assets/images/vecteurs/object.svg",
      title: t("about.solutions.titreCard2"),
      description: t("about.solutions.paraphCard2"),
      bgColor: "bg-[#DBEAFF] dark:bg-gray-800",
      bgIcon: "bg-blue-primary",
    },
    {
      icon: "/assets/images/vecteurs/data-svgrepo-com.svg",
      title: t("about.solutions.titreCard3"),
      description: t("about.solutions.paraphCard3"),
      bgColor: "bg-[#DBEAFF] dark:bg-gray-800",
      bgIcon: "bg-blue-primary",
    },
    {
      icon: "/assets/images/vecteurs/heart-pulse-2-svgrepo-com.svg",
      title: t("about.solutions.titreCard4"),
      description: t("about.solutions.paraphCard4"),
      bgColor: "bg-[#DBEAFF] dark:bg-gray-800",
      bgIcon: "bg-blue-primary",
    },
    {
      icon: "/assets/images/vecteurs/documents-svgrepo-com.svg",
      title: t("about.solutions.titreCard5"),
      description: t("about.solutions.paraphCard5"),
      bgColor: "bg-[#DBEAFF] dark:bg-gray-800",
      bgIcon: "bg-blue-primary",
    },
    {
      icon: "/assets/images/vecteurs/secure-svgrepo-com.svg",
      title: t("about.solutions.titreCard6"),
      description: t("about.solutions.paraphCard6"),
      bgColor: "bg-[#DBEAFF] dark:bg-gray-800",
      bgIcon: "bg-blue-primary",
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 border-t border-b border-gray-100 dark:border-gray-800">
      <div
        id="container"
        className="flex flex-col items-center justify-center py-10"
      >
        {/* Titre de la section */}
        <h1 className="text-blue-primary dark:text-primary-400 font-bold text-2xl xl:text-3xl mb-8">
          {t("about.solutions.titre")}
        </h1>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl mx-auto text-gray-700 dark:text-gray-200">
          {items.map((item, index) => (
            <div key={index} className="h-full">
              <div
                className={`h-full ${item.bgColor} w-full p-8 rounded-2xl shadow-md shadow-gray-400 flex flex-col px-[10px] lg:px-[4px] mx-auto items-center`}
              >
                <div className="flex gap-2 items-start">
                  {/* Icône de la carte */}
                  <div className={`${item.bgIcon} rounded-lg flex justify-center items-center h-12 w-12`}>
                    <img src={item.icon} alt={item.title} className="w-8" />
                  </div>
                  {/* Contenu de la carte */}
                  <div>
                    <h2 className="text-[18px] font-bold text-blue-primary dark:text-primary-400 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-[16px] text-gray-700 dark:text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
