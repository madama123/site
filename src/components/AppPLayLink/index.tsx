import { Link } from "react-router-dom";

const AppPlayLink = () => {
  return (
    <div className="mt-6 mb-4 flex flex-col opacity-60 md:flex-row md:gap-6 justify-center items-center">
      <Link to="/" className=" mb-4 ">
        <img
          src="/assets/images/vecteurs/Logo app store bleu.svg"
          alt="app store"
          className="w-52 mb-2 md:mb-0"
        />
      </Link>
      <Link to="/" >
        <img
          src="/assets/images/vecteurs/Logo play store bleu.svg"
          alt="playstore"
          className="w-52 mb-4 md:w-44"
        />
      </Link>
    </div>
  );
};

export default AppPlayLink;
