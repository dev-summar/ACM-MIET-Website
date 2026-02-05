import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import ResourceIcon from "./ResourceIcon";

const gradientOptions = [
  "linear-gradient(135deg, rgba(0, 102, 204, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
  "linear-gradient(135deg, rgba(0, 212, 170, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
  "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
  "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
];

const ResourceCard = ({ resource, index }) => {
  const gradient = gradientOptions[index % gradientOptions.length];

  return (
    <motion.div
      className={cn(
        "rounded-xl p-6 shadow-sm w-full max-w-sm mx-auto border border-gray-100 bg-white"
      )}
      style={{ background: gradient }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
        <ResourceIcon
          icon={resource.icon}
          className="w-8 h-8 text-secondary"
        />
      </div>
      <h3 className="text-gray-900 text-lg font-heading font-semibold text-center">
        {resource.title}
      </h3>
      <p className="text-gray-600 text-sm text-center mt-3 leading-relaxed">
        {resource.desc}
      </p>
      <motion.a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 mt-4 text-secondary font-medium text-sm hover:text-accent transition-colors"
        whileHover={{ x: 2 }}
      >
        Open resource
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default ResourceCard;
