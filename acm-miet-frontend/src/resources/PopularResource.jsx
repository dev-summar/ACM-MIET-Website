"use client";
import React, { useState, useEffect } from "react";
import ResourceCard3D from "../components/ResourceCard3d";
import Slider from "react-slick";
const defaultPopularResources = [
  { id: 1, title: "ACM Digital Library", desc: "Research and publications.", icon: "book-open", link: "https://dl.acm.org/" },
  { id: 2, title: "ACM Learning Center", desc: "Courses and development.", icon: "academic-cap", link: "https://learning.acm.org/" },
  { id: 3, title: "ACM Student Resources", desc: "Resources for students.", icon: "user-group", link: "https://www.acm.org/education/students" },
];

const PopularResourcesSection = ({ popularResources = defaultPopularResources }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "-60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-16 md:px-8 relative flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl text-black font-roboto font-medium text-center mb-12 drop-shadow-md relative z-10">
        Popular Resources
      </h2>
      {isMobile ? (
        <div className="w-full flex flex-col items-center gap-8">
          {popularResources.map((resource, index) => (
            <div key={resource.id} className="w-full">
              <ResourceCard3D resource={resource} index={index} />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative w-full max-w-6xl">
          <Slider {...settings}>
            {popularResources.map((resource, index) => (
              <div key={resource.id} className="">
                <ResourceCard3D resource={resource} index={index} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default PopularResourcesSection;