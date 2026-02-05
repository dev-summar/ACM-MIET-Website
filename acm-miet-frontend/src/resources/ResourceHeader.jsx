import React from "react";
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  AcademicCapIcon,
  CpuChipIcon,
  BeakerIcon,
  CodeBracketIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const acmIcons = [
  { Icon: BookOpenIcon, color: "#3B82F6" },
  { Icon: AcademicCapIcon, color: "#22C55E" },
  { Icon: CpuChipIcon, color: "#8B5CF6" },
  { Icon: BeakerIcon, color: "#F59E0B" },
  { Icon: CodeBracketIcon, color: "#EC4899" },
  { Icon: DocumentMagnifyingGlassIcon, color: "#06B6D4" },
];

const DEFAULT_POSITIONS = [
  { x: -80, y: -180 },
  { x: 90, y: 120 },
  { x: 80, y: -180 },
  { x: -90, y: 150 },
  { x: 10, y: 180 },
  { x: 0, y: -160 },
];

const ResourceHeader = () => {
  const getResponsivePositions = () => {
    if (typeof window === "undefined") return DEFAULT_POSITIONS;
    const width = window.innerWidth;
    if (width < 768) {
      return [
        { x: -80, y: -180 },
        { x: 90, y: 120 },
        { x: 80, y: -180 },
        { x: -90, y: 150 },
        { x: 10, y: 180 },
        { x: 0, y: -160 },
      ];
    }
    return [
      { x: -400, y: -40 },
      { x: 350, y: -60 },
      { x: -360, y: 120 },
      { x: 340, y: 150 },
      { x: -400, y: -220 },
      { x: 280, y: -250 },
    ];
  };

  const positions = getResponsivePositions();

  return (
    <div className="min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-primary via-slate-900 to-primary p-4 md:p-8 overflow-hidden relative flex items-center justify-center">
      <motion.section
        className="relative z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-heading mb-2"
        >
          ACM Resources
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-lg md:text-xl max-w-xl mx-auto"
        >
          Curated tools and learning resources for computing professionals
        </motion.p>
      </motion.section>

      {/* Floating icon circles */}
      {acmIcons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          className="absolute w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
          style={{
            left: "50%",
            top: "50%",
            color: color,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: positions[index]?.x ?? DEFAULT_POSITIONS[index]?.x ?? 0,
            y: positions[index]?.y ?? DEFAULT_POSITIONS[index]?.y ?? 0,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
          }}
        >
          <Icon className="w-7 h-7 md:w-9 md:h-9" strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};

export default ResourceHeader;
