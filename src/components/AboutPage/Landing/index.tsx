import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <section
      id="LandingPag"
      className="pt-32 overflow-hidden pb-[400px] md:pb-24 px-5 lg:pr-16"
    >
      <div
        id="container"
        className="relative md:flex-row md:justify-between gap-4  flex flex-col justify-center items-center
       md:gap-12 lg:gap-24 "
      >
        {/**Icone tournante 1 */}
        <img
          src="/assets/images/AboutUs/logo-original.svg"
          alt="icone"
          className="w-10 absolute  animate-spin-slow -top-0  -translate-y-[50px] left-0 
          lg:w-16 lg:left-10  "
        />

        <img
          src="/assets/images/AboutUs/logo-original.svg"
          alt="icone"
          className="w-10 absolute  animate-spin-slow top-32  -translate-y-[50px] left-0 
          lg:w-16 lg:left-[450px] hidden lg:block "
        />

        <img
          src="/assets/images/AboutUs/logo-green.svg"
          alt="icone"
          className="w-10 absolute  top-60  -translate-y-[50px] left-0 
          lg:w-10 lg:left-[500px] hidden lg:block rotate-infinite"
        />
        {/**halfotone */}

        <img
          src="/assets/images/vecteurs/halftone-blue.svg"
          alt="halftone"
          className="w-12 absolute -top-16 right-5 lg:w-20 halftone-animation"
        />

        {/**Image Hero */}

        <div
          className="absolute  md:static -bottom-[400px] w-10/12 h-56 md:h-80 bg-blue-primary  max-w-[350px] rounded-[50px] skew-x-[-10deg]
        md:mt-32 lg:mt-48 md:full lg:max-w-[460px] md:-translate-x-5 "
        >
          <div className="absolute overflow-hidden h-96 md:h-[450px] lg:h-[600px]  bottom-0  w-full  rounded-[50px] ">
            {/**halftone */}

            <img
              src="/assets/images/AboutUs/logo-blue.svg"
              alt="icone"
              className="w-10 absolute  bottom-24 left-0 skew-x-[10deg]"
            />

            <img
              src="assets/images/vecteurs/halftone-green.svg"
              alt="halftone"
              className="skew-x-[10deg] w-20 -bottom-5 lg:left-5 absolute halftone-animation"
            />
            <img
              src="/assets/images/AboutUs/hero.png"
              alt="hero"
              className="absolute -bottom-24 skew-x-[10deg] w-72 md:w-80 lg:w-96 right-0"
            />
          </div>
          <div className="absolute hidden border-3 rounded-[50px] w-full h-full border-2 border-primary-green"></div>
        </div>

        {/**Contenu textuel */}

        <div id="contenutextuel">
          <div className=" relative p-2 px-3">
            <img
              src="/assets/images/vecteurs/encoche-green.svg"
              alt="encoche"
              className="w-6 absolute bottom-0 left-0"
            />
            <img
              src="/assets/images/vecteurs/encoche-blue.svg"
              alt="encoche"
              className="w-6 absolute top-0 right-0"
            />
            <h1
              className="text-blue-primary flex flex-col  text-center 
              md:text-left
           "
            >
              <span className="font-black text-2xl  custom400:text-3xl custom900:text-4xl lg:text-6xl">
                {t("about.hero.titre1")}
              </span>
              <span className="font-bold text-2xl  custom400:text-3xl custom900:text-5xl">
                {t("about.hero.titre2")}
              </span>
            </h1>
          </div>

          <div className="relative mt-8 w-11/12 lg:w-2/3 lg:mx-0 mx-auto px-6 py-8 text-white font-medium  bg-blue-primary rounded-lg">
            <p>{t("about.hero.paraph")}</p>
            <div className="absolute border-[3px] rounded-xl -z-10 border-primary-green w-full h-full -bottom-3 -left-3"></div>

            <div className="bg-primary-green absolute top-0 -translate-y-1/2 w-[60%] text-black px-1 text-center flex justify-center   text-sm py-2 rounded-full">
              <p>{t("about.hero.service")}</p>
            </div>
          </div>

          <div className="flex gap-4 my-8">
            <Link to="">
              <img
                src="/assets/images/vecteurs/appStore_blue.svg"
                alt="appStore"
                className="h-16"
              />
            </Link>
            <Link to="">
              <img
                src="/assets/images/vecteurs/playStore-blue.svg"
                alt="playStore"
                className="h-16"
              />
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-2 lg:w-2/3  gap-4 items-center justify-center">
              <Link to="">
                <img
                  src="/assets/images/vecteurs/reseaux_sociaux/instagram-blue.svg"
                  alt="instagram"
                  className="h-8"
                />
              </Link>

              <Link to="">
                <img
                  src="/assets/images/vecteurs/reseaux_sociaux/facebook-blue.svg"
                  alt="facebook"
                  className="h-8"
                />
              </Link>

              <Link to="">
                <img
                  src="/assets/images/vecteurs/reseaux_sociaux/linkedin-blue.svg"
                  alt="instagram"
                  className="h-8"
                />
              </Link>

              <Link to="">
                <img
                  src="/assets/images/vecteurs/reseaux_sociaux/youTube-blue.svg"
                  alt="facebook"
                  className="h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
