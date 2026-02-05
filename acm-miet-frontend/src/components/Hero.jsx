import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import bannerImage from "../assets/Banner.png";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen"
      style={{ minHeight: "100vh" }}
    >
      {/* Static banner background */}
      <div
        className="absolute inset-0 bg-primary"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10,15,26,0.5) 0%, rgba(10,15,26,0.7) 100%)",
        }}
      />

      {/* Centered content - pt for navbar clearance */}
      <div className="relative flex items-center justify-center min-h-screen pt-16">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
          >
            Welcome to ACM MIET Student Chapter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
          >
            Where innovation meets computing. Building a community of passionate learners and future tech leaders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Link
              to="/join"
              className="inline-block bg-accent hover:bg-accent/90 text-primary px-8 py-3.5 rounded-lg text-base font-semibold transition-colors duration-200"
            >
              Join Us Today
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
