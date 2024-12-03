"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import { Playfair } from "next/font/google";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";
const playfair = Playfair({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const flightOffers = [
  {
    id: 1,
    destination: "Paris, France",
    description: "Romantic city escape",
    price: 12000,
    imageUrl: "/assets/1.png",
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    description: "Explore ancient traditions",
    price: 9000,
    imageUrl: "/assets/2.png",
  },
  {
    id: 3,
    destination: "Bali, Indonesia",
    description: "Tropical paradise getaway",
    price: 32000,
    imageUrl: "/assets/3.png",
  },
];

const page = () => {
  const language = useLanguage();
  const t = translations[language.language];
  console.log(t.book_now);
  return (
    <div className="min-h-screen w-full">
      <div
        className="h-[80vh] flex flex-col justify-center items-center text-white text-center px-4 w-full"
        style={{
          backgroundImage: `url(/assets/flights_image.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 p-12 rounded-xl">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Plane className="mr-4 hidden md:flex" size={48} />{" "}
            {t.Flights_Title}
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t.Flights_Description}
          </p>
          <Button size="lg" variant="default">
            {t.book_now}
          </Button>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4 w-full">
        <div className="w-full">
          <h2
            style={{ direction: language.language === "ar" ? "rtl" : "ltr" }}
            className={`lg:text-[64px] md:text-[64px] sm:text-[54px] text-black ${playfair.className} font-light relative group w-full mb-12`}
          >
            {t.popular_flights}
            <span
              className={`block max-w-[20%] group-hover:max-w-[0] transition-all duration-500 h-1 bg-main ${
                language.language === "ar" ? "ml-auto" : ""
              }`}
            ></span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {flightOffers.map((offer) => (
            <Card
              key={offer.id}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={offer.imageUrl}
                alt={offer.destination}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {offer.destination}
                </h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-main">
                    {offer.price} DZD
                  </span>
                  <Button variant="main">Contact Us</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
