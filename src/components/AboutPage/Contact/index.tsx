import { useTranslation } from "react-i18next";
import Boutton from "../../Button";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="px-5 lg:px-16">
      <div id="container" className=" element  custom900:flex">
        <div
          className="flex flex-col p-8
         *:mb-4 custom900:w-10/12" 
        >
          <h1 className="text-blue-primary font-bold text-2xl">Contact</h1>
          <p className="pb-4">{t("about.contact.paraph")}</p>
          <div className="w-[80%] ">
            <form
              action="
            "
              className="flex-col flex  w-full
            *:mb-6 *:border-2 *:border-b-blue-primary *:caret-blue-primary  *:pb-1 *:outline-none *:h-7 *:border-t-0
            *:border-x-0"
            >
              <input type="text" placeholder={t("about.contact.nom")} />
              <input type="text" placeholder={t("about.contact.prenom")} />

              <input type="email" placeholder={t("about.contact.email")} />
              <textarea placeholder={t("about.contact.message")}></textarea>
            </form>
            <Boutton
              label={t("about.contact.soumettre")}
              className="border-2 border-blue-primary mx-auto hover:bg-blue-primary hover:text-white "
              type="submit"
            />
          </div>
        </div>

        <div className="bg-blue-primary custom900:w-10/12 custom900:pt-24 text-white px-8 py-8">
          <h1 className="font-bold text-xl mb-8">Infos</h1>
          <div className="flex  items-center gap-4 mb-6 custom900:mb-12">
            <img
              src="/assets/images/vecteurs/email-1572-svgrepo-com.svg"
              alt="email"
              className="w-10"
            />
            <div >
              <h2 className="font-semibold">{t("about.contact.email")}</h2>
              <p>developer@ekose-rx.com</p>
            </div>
          </div>

          <div className="flex  items-center gap-4 mb-6 custom900:mb-12">
            <img
              src="/assets/images/vecteurs/phone-calling.svg"
              alt="phone"
              className="w-10"
            />
            <div>
              <h2>{t("about.contact.phone")}</h2>
              <p>+237 698 88 11 99</p>
            </div>
          </div>

          <div className="flex  items-center gap-4 mb-4">
            <img
              src="/assets/images/vecteurs/location-white.svg"
              alt="location"
              className="w-10"
            />
            <div>
              <h2>{t("about.contact.address")}</h2>
              <p>Bonamoussadi, Douala - cameroun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
