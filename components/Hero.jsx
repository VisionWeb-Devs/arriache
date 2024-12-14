"use client";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";

function Hero() {
  const language = useLanguage();
  const t = translations[language.language];
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/60 to-black/30 via-transparent"
      style={{
        backgroundImage: `url(/assets/herobg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight transition-transform duration-500 transform hover:scale-[1.02] hover:tracking-wide">
          {t.title}
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-gray-200 opacity-90 transition-opacity hover:opacity-100">
          {t.Hero_Description}
        </p>

        <div className="flex justify-center space-x-8 pt-8 ">
          <Link href="/flights">
            <Button
              variant="solid"
              color="white"
              size="lg"
              className="px-4 md:px-8 py-4 border-[1px] font-semibold rounded-full shadow-lg  hover:bg-opacity-60 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              {t.Hero_Flights_Button}
              {/* <ChevronRightIcon className="w-5 h-5 transform transition-transform group-hover:translate-x-1" /> */}
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              color="white"
              size="lg"
              className="px-4 md:px-8 py-4 font-semibold rounded-full border-2 text-black border-white hover:bg-white hover:scale-105 transition-all duration-300 transform flex items-center gap-2"
            >
              {t.Hero_Contact_Button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
