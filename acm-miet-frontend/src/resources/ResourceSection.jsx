"use client";
import React from "react";
import { ParallaxScroll } from "../components/ParralaxScroll";
import PopularResourcesSection from "./PopularResource";

const allResources = [
  { id: 1, title: "ACM Learning Center", desc: "Courses and professional development for computing professionals.", icon: "academic-cap", link: "https://learning.acm.org/", popular: true },
  { id: 2, title: "ACM Student Resources", desc: "Resources, scholarships, and opportunities for student members.", icon: "user-group", link: "https://www.acm.org/education/students", popular: true },
  { id: 3, title: "ACM Digital Library", desc: "Research papers, journals, and conference proceedings.", icon: "book-open", link: "https://dl.acm.org/", popular: true },
  { id: 4, title: "ACM SIGs", desc: "Special Interest Groups in computing disciplines.", icon: "cpu-chip", link: "https://www.acm.org/special-interest-groups", popular: false },
  { id: 5, title: "ACM Code of Ethics", desc: "Ethical guidelines and professional conduct for computing.", icon: "shield-check", link: "https://www.acm.org/code-of-ethics", popular: false },
  { id: 6, title: "ACM Career & Job Resources", desc: "Job board and career development resources.", icon: "briefcase", link: "https://jobs.acm.org/", popular: false },
  { id: 7, title: "ACM Publications", desc: "Journals, magazines, and conference proceedings.", icon: "document-text", link: "https://www.acm.org/publications", popular: false },
  { id: 8, title: "ACM Career Resource Centre", desc: "Career guidance and professional growth.", icon: "academic-cap", link: "https://careers.acm.org/", popular: false },
  { id: 9, title: "ACM-W", desc: "Women in computing—community and opportunities.", icon: "heart", link: "https://women.acm.org/", popular: false },
  { id: 10, title: "TryComputing", desc: "STEM and computing education for educators.", icon: "beaker", link: "https://trycomputing.org/", popular: false },
];

const popularResourcesList = allResources.filter((r) => r.popular);
const otherResources = allResources.filter((r) => !r.popular);

const ResourceSection = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-8 relative overflow-hidden">
      <section className="relative z-10">
        <PopularResourcesSection popularResources={popularResourcesList} />
      </section>

      <section className="relative z-10 mt-16">
        <div className="max-w-6xl mx-auto">
          <ParallaxScroll resources={otherResources} />
        </div>
      </section>
    </div>
  );
};

export default ResourceSection;
