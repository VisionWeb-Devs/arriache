"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playfair } from "next/font/google";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";

const playfair = Playfair({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const images = [
  {
    image: "/assets/1.png",
  },
  {
    image: "/assets/2.png",
  },
  {
    image: "/assets/3.png",
  },
  {
    image: "/assets/4.jpg",
  },
];

const Gallery = () => {
  const language = useLanguage();
  const t = translations[language.language];
  // const [startIndex, setStartIndex] = useState(0);

  // const handlePrevClick = () => {
  //   setStartIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 4 : prevIndex - 1
  //   );
  // };

  // const handleNextClick = () => {
  //   setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const getVisibleOffers = () => {
  //   const screenWidth =
  //     typeof window !== "undefined" ? window.innerWidth : 1024;
  //   let visibleCount = 4;

  //   if (screenWidth < 640) visibleCount = 1;
  //   else if (screenWidth < 768) visibleCount = 2;
  //   else if (screenWidth < 1024) visibleCount = 3;

  //   return images
  //     .slice(startIndex, startIndex + visibleCount)
  //     .concat(
  //       images.slice(0, Math.max(0, startIndex + visibleCount - images.length))
  //     );
  // };

  return (
    <div className="bg-gray-100 lg:px-[182px] md:px-[32px] sm:px-[20px] flex flex-col gap-[50px]">
      <SectionHeader
        language={language.language}
        text={t.Gallery}
        description={t.Gallery_Description}
        // navigation
        // handleScroll={(amount) => handleScroll(amount)}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px]">
        {images.map((img) => (
          <div key={img.image} className="rounded-[26px] overflow-hidden">
            <img src={img.image} className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
