"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playfair } from "next/font/google";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";

const playfair = Playfair({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const PopularDestinations = () => {
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
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 4 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const getVisibleDestinations = () => {
    const screenWidth =
      typeof window !== "undefined" ? window.innerWidth : 1024;
    let visibleCount = 4;

    if (screenWidth < 640) visibleCount = 1;
    else if (screenWidth < 768) visibleCount = 2;
    else if (screenWidth < 1024) visibleCount = 3;

    return destinations
      .slice(startIndex, startIndex + visibleCount)
      .concat(
        destinations.slice(
          0,
          Math.max(0, startIndex + visibleCount - destinations.length)
        )
      );
  };

  return (
    <div className="bg-gray-100 py-12 lg:px-[182px] md:px-[32px] sm:px-[20px]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col gap-[32px]">
            <h2
              className={`lg:text-[64px] md:text-[64px] sm:text-[54px] text-gray-900 ${playfair.className} font-light relative group w-fit`}
            >
              Popular Destinations
              <span className="block max-w-[66%] group-hover:max-w-[0] transition-all duration-500 h-1 bg-main"></span>
            </h2>
            <p className="text-gray-600">
              Most popular destinations around the world, from historical places
              to natural wonders.
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handlePrevClick}
              className="p-2 bg-black rounded-full hover:bg-opacity-85 transition-all duration-500"
            >
              <ChevronLeft className="h-6 w-6 text-white font-light" />
            </button>
            <button
              onClick={handleNextClick}
              className="p-2 bg-main rounded-full hover:bg-opacity-85 transition-all duration-500"
            >
              <ChevronRight className="h-6 w-6 text-white font-light" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-cols-min overflow-x-hidden overflow-y-hidden h-full py-8 px-5">
          {getVisibleDestinations().map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 w-full"
            >
              <img
                src={`${destination.image}`}
                alt={destination.title}
                className="w-full h-[460px] object-cover"
              />
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
    </div>
  );
};

export default PopularDestinations;
