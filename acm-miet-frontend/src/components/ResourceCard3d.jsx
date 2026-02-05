"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "./3DCard";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import ResourceIcon from "./ResourceIcon";

const colorOptions = [
  "#E8F4FD",
  "#F0FDF4",
  "#FEF3C7",
  "#FCE7F3",
  "#EDE9FE",
];

const shadowOptions = [
  "0 4px 12px rgba(59, 130, 246, 0.15)",
  "0 4px 12px rgba(34, 197, 94, 0.15)",
  "0 4px 12px rgba(245, 158, 11, 0.15)",
  "0 4px 12px rgba(236, 72, 153, 0.15)",
  "0 4px 12px rgba(139, 92, 246, 0.15)",
];

const ResourceCard3D = ({ resource, index }) => {
  const bgColor = colorOptions[index % colorOptions.length];
  const shadow = shadowOptions[index % shadowOptions.length];

  return (
    <CardContainer containerClassName="py-5">
      <CardBody
        className={cn(
          "relative w-[80vw] sm:w-[24rem] h-auto rounded-xl p-5 border border-gray-200/80 flex flex-col items-center"
        )}
        bg={bgColor}
        shadow={shadow}
      >
        <CardItem translateZ="200" className="w-full mt-2 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
            <ResourceIcon
              icon={resource.icon}
              className="w-10 h-10 text-secondary"
            />
          </div>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-xl font-bold text-gray-900 font-heading text-center w-full mt-4"
        >
          {resource.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="70"
          className="text-gray-600 text-sm max-w-xs mt-2 text-center font-body"
        >
          {resource.desc}
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4 flex justify-center">
          <motion.a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-secondary font-medium text-sm hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Visit
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
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ResourceCard3D;
