"use client";
import React, { useEffect } from "react";
import { Rubik } from "next/font/google";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LangSelect from "./LangSelect";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";

const rubik = Rubik({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const Header = () => {
  const language = useLanguage();
  const t = translations[language.language];

  const pathname = usePathname();
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const flightsRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const underline_header = (elem) => {
    homeRef.current.classList.add("hidden");
    aboutRef.current.classList.add("hidden");
    flightsRef.current.classList.add("hidden");
    contactRef.current.classList.add("hidden");
    elem.current.classList.remove("hidden");
    elem.current.parentElement.classList.add("text-medium");
  };
  useEffect(() => {
    // isMenuOpen && toggleMenu();
    if (pathname === "/") {
      underline_header(homeRef);
    } else if (pathname === "/aboutus") {
      underline_header(aboutRef);
    } else if (pathname === "/flights") {
      underline_header(flightsRef);
    } else if (pathname === "/contact") {
      underline_header(contactRef);
    }
  }, [pathname]);

  useEffect(() => {
    setIsMenuOpen(isMenuOpen);
  }, [language]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div
      className={`${rubik.className} absolute top-0 left-0 w-full flex justify-between items-center py-[32px] xl:px-[182px] px-[32px] bg-transparent text-white z-20`}
    >
      <div className="text-2xl md:text-3xl">Arriache Travels</div>
      <ul
        className="hidden md:flex gap-[32px] text-xl"
        style={{
          direction: language.language === "ar" ? "rtl" : "ltr",
        }}
      >
        <Link href={"/"} className="relative flex flex-col gap-0">
          <span className="relative">{t.Home}</span>
          <span
            ref={homeRef}
            className="hidden w-full h-[3px] bg-main rounded-full"
          ></span>
        </Link>
        <Link href={"/aboutus"} className="relative flex flex-col gap-0">
          <span className="relative">{t.About_Us}</span>
          <span
            ref={aboutRef}
            className="hidden w-full h-[3px] bg-main rounded-full"
          ></span>
        </Link>
        <Link href={"/flights"} className="relative flex flex-col gap-0">
          <span className="relative">{t.Flights}</span>
          <span
            ref={flightsRef}
            className="hidden w-full h-[3px] bg-main rounded-full"
          ></span>
        </Link>
        <Link href={"/contact"} className="relative flex flex-col gap-0">
          <span className="relative">{t.Contact}</span>
          <span
            ref={contactRef}
            className="hidden w-full h-[3px] bg-main rounded-full"
          ></span>
        </Link>
      </ul>
      <div className="flex gap-4 items-center">
        <div className="hidden md:flex items-center text-xl gap-2">
          <Phone size={24} />
          +213 555450155
        </div>
        <LangSelect />
        {!isMenuOpen && (
          <Menu
            size={24}
            className="md:hidden cursor-pointer z-40"
            onClick={toggleMenu}
          />
        )}
        {isMenuOpen && (
          <X
            size={24}
            className="md:hidden cursor-pointer z-40"
            onClick={toggleMenu}
          />
        )}
      </div>
      {isMenuOpen && (
        <div
          className="w-full h-screen z-30 flex flex-col justify-center items-center absolute top-0 left-0 bg-[#00000098] text-3xl"
          onClick={toggleMenu}
        >
          <div
            className="flex flex-col gap-[52px]"
            style={{ direction: language.language === "ar" ? "rtl" : "ltr" }}
          >
            <Link
              onClick={toggleMenu}
              href={"/"}
              className="relative flex flex-col gap-0"
            >
              {t.Home}
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/aboutus"}
              className="relative flex flex-col gap-0"
            >
              {t.About_Us}
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/flights"}
              className="relative flex flex-col gap-0"
            >
              {t.Flights}
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/contact"}
              className="relative flex flex-col gap-0"
            >
              {t.Contact}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
