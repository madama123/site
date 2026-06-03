import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../shared/components/Navigation";
import { Footer } from "../../shared/components/Footer";
import { ScrollToTop } from "../../shared/components/ScrollToTop";

const MainLayout: React.FC = () => {
  useEffect(() => {
    // Component mounted - initialization logic can go here
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
