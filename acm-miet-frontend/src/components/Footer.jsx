import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import siteData from "../utils/siteData";
import { API_ENDPOINTS } from "../config/api";

import mietLogo from "../assets/miet-logo-white.png";
import acmLogo from "../assets/ACM.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.FOOTER);
        if (res.ok) {
          const data = await res.json();
          setFooterData(data);
        }
      } catch (err) {
        console.error("Error fetching footer:", err);
      }
    };
    fetchFooter();
  }, []);

  const links = footerData?.quickLinks?.length ? footerData.quickLinks : siteData.navLinks;
  const social = footerData?.socialMedia || siteData.socialMedia;

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={mietLogo}
                alt="MIET"
                className="h-14 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
              />
              <img
                src={acmLogo}
                alt="ACM"
                className="h-12 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              {footerData?.description || "Empowering students through technology, innovation, and professional development."}
            </p>
            <div className="flex gap-4">
              {social?.linkedin && (
                <a
                  href={social.linkedin}
                  className="text-slate-400 hover:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {social?.instagram && (
                <a
                  href={social.instagram}
                  className="text-slate-400 hover:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, idx) => (
                <li key={`${link.name}-${idx}`}>
                  {link.href?.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-accent transition-colors duration-300 inline-block py-1.5 hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href || "/"}
                      className="text-slate-400 hover:text-accent transition-colors duration-300 inline-block py-1.5 hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4 text-slate-400">
              {(footerData?.contact?.email || siteData.contact?.email) && (
                <p className="flex items-center gap-3 hover:text-accent transition-colors">
                  <svg className="h-5 w-5 flex-shrink-0 text-accent/80" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {footerData?.contact?.email || siteData.contact?.email}
                </p>
              )}
              {(footerData?.contact?.address || siteData.contact?.address) && (
                <p className="flex items-center gap-3 hover:text-accent transition-colors">
                  <svg className="h-5 w-5 flex-shrink-0 text-accent/80" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {footerData?.contact?.address || siteData.contact?.address}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/60 pt-8">
          <p className="text-center text-slate-500 text-sm">
            © {currentYear} ACM MIET Student Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
