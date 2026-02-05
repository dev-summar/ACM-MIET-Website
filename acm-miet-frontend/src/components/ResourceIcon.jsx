import React from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CpuChipIcon,
  DocumentTextIcon,
  HeartIcon,
  BeakerIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  "academic-cap": AcademicCapIcon,
  "book-open": BookOpenIcon,
  briefcase: BriefcaseIcon,
  "cpu-chip": CpuChipIcon,
  "document-text": DocumentTextIcon,
  heart: HeartIcon,
  beaker: BeakerIcon,
  "shield-check": ShieldCheckIcon,
  "user-group": UserGroupIcon,
};

const ResourceIcon = ({ icon, className = "w-16 h-16 text-gray-700" }) => {
  const IconComponent = iconMap[icon] || BookOpenIcon;
  return <IconComponent className={className} strokeWidth={1.5} />;
};

export default ResourceIcon;
