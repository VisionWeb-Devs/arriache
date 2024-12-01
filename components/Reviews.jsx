"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playfair } from "next/font/google";
import { useState } from "react";
import ReviewCard from "./ReviewCard";

const playfair = Playfair({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Reviews = () => {
  const images = [
    {
      image: "/assets/1.png",
      name: "Joe Doe",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. ",
    },
    {
      image: "/assets/2.png",
      name: "Joe Doe",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. ",
    },
    {
      image: "/assets/3.png",
      name: "Joe Doe",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. ",
    },
    {
      image: "/assets/4.jpg",
      name: "Joe Doe",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. ",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getVisibleOffers = () => {
    const screenWidth =
      typeof window !== "undefined" ? window.innerWidth : 1024;
    let visibleCount = 4;

    if (screenWidth < 640) visibleCount = 1;
    else if (screenWidth < 768) visibleCount = 2;
    else if (screenWidth < 1024) visibleCount = 3;

    return images
      .slice(startIndex, startIndex + visibleCount)
      .concat(
        images.slice(0, Math.max(0, startIndex + visibleCount - images.length))
      );
  };

  return (
    <div className="bg-gray-100 lg:px-[182px] md:px-[32px] sm:px-[20px] py-24">
      <div className="flex justify-between items-center mb-8 px-[20px]">
        <div className="flex flex-col gap-[16px]">
          <h2
            className={`${playfair.className} text-4xl md:text-6xl lg:text-7xl text-gray-900 font-light relative inline-block group`}
          >
            Traveler’s Experiences
            <span className="absolute bottom-[-10px] left-0 h-1 bg-orange-500 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </h2>
          <p className="md:text-xl text-gray-600 mt-4 max-w-2xl tracking-wide leading-relaxed">
            Here some awesome feedback from our travelers
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
      <div className="px-[20px] grid grid-cols-1 md:grid-cols-4 gap-[32px]">
        {getVisibleOffers().map((offre) => (
          <ReviewCard
            key={offre.name + offre.image}
            image={offre.image}
            name={offre.name}
            description={offre.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
