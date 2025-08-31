const AppStoreLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <a 
        href="#" 
        className="transition-transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          alt="Download on App Store"
          className="h-12"
        />
      </a>
      <a 
        href="#" 
        className="transition-transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          className="h-12"
        />
      </a>
    </div>
  );
};

export default AppStoreLinks;