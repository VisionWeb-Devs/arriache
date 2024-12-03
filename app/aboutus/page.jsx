"use client";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";
import React from "react";
import { Rubik } from "next/font/google";
import Launch from "@/public/assets/Launch.svg";
import Hiking from "@/public/assets/Hiking.svg";
import Reading from "@/public/assets/Reading.svg";
import WhyUs from "@/components/WhyUs";
import { BookOpen, Calendar, Ticket } from "lucide-react";

const rubik = Rubik({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const WhyUsCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4 px-[16px] py-[8px] rounded-xl max-w-[500px] border border-main border-opacity-40 bg-opacity-5">
      {icon}
      <div className="flex flex-col gap-[4px]">
        <h2 className="text-xl font-medium">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
const Page = () => {
  const language = useLanguage();
  const t = translations[language.language];
  const whyUs = [
    {
      ...t.WhyUs[0],
      image: Launch.src,
      icon: <Ticket size={64} color="#E97C44" />,
    },
    {
      ...t.WhyUs[1],
      image: Hiking.src,
      icon: <BookOpen size={64} color="#E97C44" />,
    },
    {
      ...t.WhyUs[2],
      image: Reading.src,
      icon: <Calendar size={64} color="#E97C44" />,
    },
  ];
  return (
    <div className={`${rubik.className}`}>
      <div
        className="h-[80vh] w-full flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(/assets/aboutus_bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="xl:px-[182px] px-[32px] flex flex-col gap-10 justify-center w-full h-full "
          style={{
            background:
              language.language === "ar"
                ? `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))`
                : `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))`,
            direction: language.language === "ar" ? "rtl" : "ltr",
          }}
        >
          <h1 className="text-3xl md:text-4xl xl:text-5xl md:max-w-[500px] xl:max-w-[600px] font-medium tracking-tight text-white">
            {t.Travel_Wishlist}
          </h1>
          <p className="md:text-xl xl:text-2xl max-w-3xl  font-light text-white">
            {t.About_Description}
          </p>
        </div>
      </div>
      <div
        className="w-full xl:px-[182px] px-[32px] py-[80px] md:py-[140px] flex flex-col gap-[32px] md:gap-[100px]"
        style={{ direction: language.language === "ar" ? "rtl" : "ltr" }}
      >
        <h1 className="text-2xl md:text-5xl font-medium">{t.Why_Choose_Us}</h1>
        <div className="md:hidden flex flex-col gap-4">
          {whyUs.map((item, index) => (
            <WhyUsCard key={index} {...item} />
          ))}
        </div>
        <div className="hidden md:flex flex-col gap-[100px]">
          {whyUs.map((item, index) => (
            <WhyUs key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
