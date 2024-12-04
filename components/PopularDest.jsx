"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playfair, Rubik } from "next/font/google";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";
import SectionHeader from "./SectionHeader";

const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const destinations = [
  {
    image: "/assets/1.png",
    title: "Monument of Berlin",
    location: "Berlin, Germany",
  },
  {
    image: "/assets/2.png",
    title: "Millennium Bridge",
    location: "London, United Kingdom",
  },
  {
    image: "/assets/3.png",
    title: "Rialto Bridge",
    location: "Venice, Italy",
  },
  {
    image: "/assets/4.jpg",
    title: "Sea of Faith",
    location: "Lisbon, Portugal",
  },
  {
    image: "/assets/2.png",
    title: "Sea of Faith",
    location: "Lisbon, Portugal",
  },
  {
    image: "/assets/2.png",
    title: "Sea of Faith",
    location: "Lisbon, Portugal",
  },
  {
    image: "/assets/2.png",
    title: "Sea of Faith",
    location: "Lisbon, Portugal",
  },
];

const PopularDestinations = () => {
  const language = useLanguage();
  const t = translations[language.language];

  // const [startIndex, setStartIndex] = useState(0);

  // const handlePrevClick = () => {
  //   setStartIndex((prevIndex) =>
  //     prevIndex === 0 ? destinations.length - 4 : prevIndex - 1
  //   );
  // };

  // const handleNextClick = () => {
  //   setStartIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  // };

  // const getVisibleDestinations = () => {
  //   const screenWidth =
  //     typeof window !== "undefined" ? window.innerWidth : 1024;
  //   let visibleCount = 4;

  //   if (screenWidth < 640) visibleCount = 1;
  //   else if (screenWidth < 768) visibleCount = 2;
  //   else if (screenWidth < 1024) visibleCount = 3;

  //   return destinations
  //     .slice(startIndex, startIndex + visibleCount)
  //     .concat(
  //       destinations.slice(
  //         0,
  //         Math.max(0, startIndex + visibleCount - destinations.length)
  //       )
  //     );
  // };

  const containerRef = React.useRef(null);

  const handleScroll = (amount) => {
    containerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${rubik.className} flex flex-col gap-[50px] bg-gray-100 py-12`}
    >
      <div className=" xl:px-[182px] px-[32px]">
        <SectionHeader
          language={language.language}
          text={t.Popular_Destinations}
          description={t.Popular_Destinations_Description}
          navigation
          handleScroll={(amount) => handleScroll(amount)}
        />
      </div>
      <div
        className={`overflow-hidden ${
          language.language === "ar"
            ? "xl:mr-[182px] mr-[32px]"
            : "xl:ml-[182px] ml-[32px]"
        }`}
      >
        <div
          className="flex gap-[32px] overflow-y-hidden overflow-x-auto p-4 [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{
            direction: language.language === "ar" ? "rtl" : "ltr",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          ref={containerRef}
        >
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="min-w-[350px] md:min-w-[400px] h-[600px] flex flex-col gap-[8px]  rounded-xl transition-transform duration-300 hover:scale-105 shadow-md"
            >
              <div className="flex-1 overflow-hidden flex justify-center items-center rounded-t-xl">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-full w-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {destination.title}
                </h3>
                <p className="text-gray-600">{destination.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center md:hidden">
        <div
          className="flex space-x-4"
          style={{
            direction: "ltr",
          }}
        >
          <button
            onClick={() => handleScroll(-500)}
            className="p-3 bg-black rounded-full hover:bg-opacity-85 transition-all duration-500 group-hover:animate-bounce"
          >
            <ChevronLeft className="h-6 w-6 text-white font-light" />
          </button>
          <button
            onClick={() => handleScroll(500)}
            className="p-3 bg-main rounded-full hover:bg-opacity-85 transition-all duration-500 group-hover:animate-bounce"
          >
            <ChevronRight className="h-6 w-6 text-white font-light" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
