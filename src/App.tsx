import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/MainLayout/MainLayout";
import { ThemeProvider } from "./shared/providers/ThemeProvider";
import { LanguageProvider } from "./shared/providers/LanguageProvider";
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
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

const App = () => {
  const { t } = useTranslation();

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <LanguageProvider>
        <ThemeProvider>
          <Suspense fallback={<div className="text-center py-10">{t('loading')}</div>}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
};

export default App;