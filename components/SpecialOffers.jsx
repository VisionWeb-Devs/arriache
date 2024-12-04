"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playfair } from "next/font/google";
import Image from "next/image";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";
import SectionHeader from "./SectionHeader";

const playfair = Playfair({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const offers = [
  {
    image: "/assets/1.png",
    location: "Lisbon, Portugal",
    rating: 4.5,
    duration: "3 nights & 4 days",
    price: 5000,
  },
  {
    image: "/assets/2.png",
    location: "Athens, Greece",
    rating: 4.5,
    duration: "5 nights & 6 days",
    price: 8000,
  },
  {
    image: "/assets/3.png",
    location: "Rome, Italy",
    rating: 4.5,
    duration: "5 nights & 6 days",
    price: 7500,
  },
  {
    image: "/assets/4.jpg",
    location: "Sea of Faith",
    rating: 4.5,
    duration: "5 nights & 6 days",
    price: 1000,
  },
];

const SpecialOfferPage = () => {
  const language = useLanguage();
  const t = translations[language.language];
  // const [startIndex, setStartIndex] = useState(0);

  // const handlePrevClick = () => {
  //   setStartIndex((prevIndex) =>
  //     prevIndex === 0 ? offers.length - 4 : prevIndex - 1
  //   );
  // };

  // const handleNextClick = () => {
  //   setStartIndex((prevIndex) => (prevIndex + 1) % offers.length);
  // };

  // const getVisibleOffers = () => {
  //   const screenWidth =
  //     typeof window !== "undefined" ? window.innerWidth : 1024;
  //   let visibleCount = 4;

  //   if (screenWidth < 640) visibleCount = 1;
  //   else if (screenWidth < 768) visibleCount = 2;
  //   else if (screenWidth < 1024) visibleCount = 3;

  //   return offers
  //     .slice(startIndex, startIndex + visibleCount)
  //     .concat(
  //       offers.slice(0, Math.max(0, startIndex + visibleCount - offers.length))
  //     );
  // };

  return (
    <div className="bg-gray-100 lg:px-[182px] md:px-[32px] sm:px-[20px]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <SectionHeader
          language={language.language}
          text={t.Special_Offer}
          description={t.Special_Offer_Description}
          // navigation
          // handleScroll={(amount) => handleScroll(amount)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-cols-min overflow-x-hidden overflow-y-hidden h-full py-8 px-5">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full"
            >
              <CardHeader className="h-[460px]">
                <Image
                  width={460}
                  height={200}
                  src={offer.image}
                  alt={`Offer in ${offer.location}`}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {offer.location}
                </h3>
                <p className="text-gray-500 mb-2">{offer.duration}</p>
                <p className="text-gray-500 mb-4">
                  {offer.rating} <span className="text-yellow-500">★</span>
                </p>
              </CardContent>
              <CardFooter className="px-8 justify-between">
                <p className="text-2xl font-bold">{offer.price} DZD</p>
                <Button
                  variant="main"
                  className="bg-main hover:bg-main-600 text-white font-medium py-3 px-6 rounded-md"
                >
                  DETAILS
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferPage;
