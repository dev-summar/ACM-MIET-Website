import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import siteData from "../utils/siteData";

import whyacmImage from "../assets/whyacm.jpg";

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-primary"
        >
          {siteData.whySection.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <img
              src={whyacmImage}
              alt="ACM MIET Student Chapter Activities"
              className="rounded-2xl shadow-card w-full h-[400px] object-cover border border-slate-100"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl -z-10" />
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "Innovation & Growth",
                text: "Join a community dedicated to fostering technical innovation and personal growth through hands-on projects and workshops.",
              },
              {
                title: "Networking Opportunities",
                text: "Connect with industry professionals, academics, and fellow students through our extensive network of members.",
              },
              {
                title: "Professional Development",
                text: siteData.whySection.text,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-card hover:shadow-card-hover hover:border-accent/30 border border-transparent transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">
                  {card.title}
                </h3>
                <p className="text-slate-600 font-body">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
