import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import siteData from "../utils/siteData";

import mietLogo from "../assets/miet-logo-white.png";
import acmLogo from "../assets/ACM.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = siteData.navLinks.map((link) => (
    <li key={link.name}>
      <Link
        to={link.href}
        onClick={closeMenu}
        className={`
          relative px-4 py-2 rounded-lg font-medium transition-all duration-300
          ${isActive(link.href) ? "text-accent" : "text-white/90 hover:text-white"}
          hover:bg-white/5
        `}
      >
        {link.name}
        {isActive(link.href) && (
          <motion.span
            layoutId="navbar-indicator"
            className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    </li>
  ));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`
        fixed w-full top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-primary/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-primary/95 backdrop-blur-md border-b border-white/5"
        }
      `}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <img
              src={mietLogo}
              alt="MIET"
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src={acmLogo}
              alt="ACM"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">{navLinks}</ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white/90 hover:bg-white/10 hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="pt-4 pb-3 space-y-1 border-t border-white/10 mt-3">
                {siteData.navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={closeMenu}
                      className={`
                        block px-4 py-3 rounded-xl font-medium transition-colors
                        ${isActive(link.href) ? "text-accent bg-accent/10" : "text-white/90 hover:bg-white/5"}
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
