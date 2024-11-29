import { Facebook, Instagram, InstagramIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div
      className={`${rubik.className} bg-[#ff9c08] px-[32px] py-[100px] md:px-[182px] md:py-[140px] text-white flex md:flex-row flex-col gap-[60px] md:gap-0 justify-between`}
    >
      <div>
        <div className="text-3xl md:text-4xl">Arriache Travels</div>
        <div className="text-sm">
          Copyright &copy; Arriache Travels {new Date().getFullYear()} All
          rights reserved
        </div>
        <div className="text-sm">
          Made by{" "}
          <a
            href="https://www.instagram.com/visionweb.devs/"
            target="_blank"
            className="font-medium"
          >
            Vision Web Devs
          </a>{" "}
          with ❤️
        </div>
      </div>
      <div className="text-lg flex flex-col gap-[16px]">
        <div className="text-2xl font-medium">Menu</div>
        <ul className="flex flex-col gap-[12px]">
          <Link href={"/"} className="relative flex flex-col gap-0">
            Home
          </Link>
          <Link href={"/aboutus"} className="relative flex flex-col gap-0">
            About us
          </Link>
          <Link href={"/flights"} className="relative flex flex-col gap-0">
            Flights
          </Link>
          <Link href={"/contact"} className="relative flex flex-col gap-0">
            Contact
          </Link>
        </ul>
      </div>
      <div className="text-lg flex flex-col gap-[16px]">
        <div className="text-2xl font-medium">Information</div>
        <div>Blog</div>
      </div>
      <div className="text-lg flex flex-col gap-[16px]">
        <div className="text-2xl font-medium">Contact Info</div>
        <ul className="flex flex-col gap-[12px]">
          <li>+213 555450155</li>
          <li>contact@visionwebdevs.tech</li>
          <a href="https://maps.app.goo.gl/xaEZTNWkcc4et8u1A" target="_blank">
            Beni aziz, Setif, Algeria
          </a>
        </ul>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="text-2xl font-medium">Follow us on</div>
        <div className="flex gap-[24px]">
          <a
            href={"https://www.facebook.com/profile.php?id=100089629668542"}
            target="_blank"
          >
            <Facebook size={24} />
          </a>
          <a
            href={"https://www.instagram.com/arriache_travels"}
            target="_blank"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
