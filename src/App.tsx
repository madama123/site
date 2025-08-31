import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import { AuthProvider } from "./context/AuthContext";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Pharmacies = lazy(() => import("./pages/Pharmacies/Pharmacies"));
const Urgences = lazy(() => import("./pages/Urgences/Urgences"));
const RendezVous = lazy(() => import("./pages/Rendezvous/Rendezvous"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Teleconsultation = lazy(() => import("./pages/Teleconsultation/Teleconsultation"));
const PlansTarifs = lazy(() => import("./pages/PlansTarifs/PlansTarifs"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
          <div className={`app bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen flex flex-col`}>
            <header className="w-full flex justify-end p-4">
              {/* Le bouton de bascule du thème sera géré dans le composant Navigation ou Header */}
            </header>
            <main className="flex-1">
              <Suspense fallback={<div className="text-center py-10">Chargement...</div>}>
                <Routes>
                  <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="pharmacies" element={<Pharmacies />} />
                    <Route path="rendez-vous" element={<RendezVous />} />
                    <Route path="urgences" element={<Urgences />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="teleconsultation" element={<Teleconsultation />} />
                    <Route path="plans-tarifs" element={<PlansTarifs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="legal" element={<Legal />} />
                    <Route path="privacy" element={<Privacy />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </AuthProvider>
      </Router>
  );
};

export default App;