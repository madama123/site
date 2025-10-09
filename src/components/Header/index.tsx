import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import BtnDownload from "../BtnDownload";
import MobileSwitchLanguage from "../MobileSwitchLanguage/MobileSwitchLanguage";
import { useMenuLanguage } from "../../hooks/useMenuLanguage";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  path: string;
  label: string;
}

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { closeMenuLanguage } = useMenuLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleBurgerClick = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    closeMenuLanguage();
    if (activeSubMenu) {
      setActiveSubMenu(null);
    }
  }, [closeMenuLanguage, activeSubMenu]);

  const toggleSubMenu = useCallback((menuName: string) => {
    setActiveSubMenu((prev) => (prev === menuName ? null : menuName));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  }, [location.pathname]);

  const menuItems: MenuItem[] = [
    { path: "/teleconsultation", label: t("header.teleconsultation") },
    { path: "/rendez-vous", label: t("header.appointments") },
    { path: "/urgences", label: t("header.emergency") },
    { path: "/pharmacies", label: t("header.pharmacies") },
    { path: "/examens", label: t("header.exams") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1a365d] shadow-lg" : "bg-[#1a365d]"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center">
            <motion.img
              src="/assets/images/logos/logo sur fond bleu.svg"
              alt="logo ekose-rx"
              className="w-40 transition-transform duration-300 hover:scale-110 drop-shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-primary-green ${isActive ? "text-primary-green font-bold" : ""}`
              }
            >
              {t("header.home")}
            </NavLink>

            <div className="relative group">
              <motion.button
                onClick={() => toggleSubMenu("services")}
                className="flex items-center gap-1 hover:text-primary-green transition-colors duration-300"
                aria-expanded={activeSubMenu === "services" ? "true" : "false"}
                aria-controls="services-submenu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t("Services")}</span>
                <motion.img
                  src="/assets/images/vecteurs/chevron-down.svg"
                  alt="chevron down"
                  className="w-6"
                  animate={{ rotate: activeSubMenu === "services" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <AnimatePresence>
                {activeSubMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 group-hover:scale-105"
                  >
                    {menuItems.map((item) => (
                      <motion.div
                        key={item.path}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-gray-800 hover:text-primary-green transition-colors duration-300 ${isActive ? "text-primary-green font-bold" : ""}`
                          }
                        >
                          {item.label}
                        </NavLink>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/plans-tarifs"
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-primary-green ${isActive ? "text-primary-green font-bold" : ""}`
              }
            >
              {t("header.plans")}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-primary-green ${isActive ? "text-primary-green font-bold" : ""}`
              }
            >
              {t("header.about")}
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-primary-green ${isActive ? "text-primary-green font-bold" : ""}`
              }
            >
              {t("header.blog")}
            </NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <BtnDownload />
            <NavLink
              to="/login"
              className="px-4 py-2 text-white hover:text-primary-green transition-colors duration-300"
            >
              {t("login.signIn")}
            </NavLink>
            <NavLink
              to="/register"
              className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              {t("register.submit")}
            </NavLink>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={handleBurgerClick}
            aria-label="Toggle menu"
          >
            <motion.div
              className="w-6 h-6 flex flex-col justify-between"
              animate={isMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-full h-0.5 bg-white"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-white"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-white"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#1a365d] py-4"
          >
            <div className="container mx-auto px-4">
              <nav className="flex flex-col gap-4 text-white">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:text-primary-green ${isActive ? "text-primary-green" : ""
                    }`
                  }
                >
                  {t("header.home")}
                </NavLink>
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `transition-all duration-300 hover:text-primary-green ${isActive ? "text-primary-green" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/plans-tarifs"
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:text-primary-green ${isActive ? "text-primary-green" : ""
                    }`
                  }
                >
                  {t("header.plans")}
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:text-primary-green ${isActive ? "text-primary-green" : ""
                    }`
                  }
                >
                  {t("header.about")}
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:text-primary-green ${isActive ? "text-primary-green" : ""
                    }`
                  }
                >
                  {t("header.blog")}
                </NavLink>
              </nav>
              <div className="mt-4 flex flex-col gap-4">
                <MobileSwitchLanguage />
                <BtnDownload />
                <NavLink
                  to="/login"
                  className="px-4 py-2 text-white hover:text-primary-green transition-colors duration-300"
                >
                  {t("login.signIn")}
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  {t("register.submit")}
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
