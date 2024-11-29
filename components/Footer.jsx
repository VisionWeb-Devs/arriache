import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-third px-[182px] py-[140px] text-white flex justify-between">
      <div>
        <div className="text-2xl md:text-3xl">Arriache Travels</div>
        <div>
          Copyright &copy; Arriache Travel {new Date().getFullYear()} All rights
          reserved
        </div>
      </div>
      <div>
        <div>Menu</div>
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
      </div>
      {/* <div>Information Destinations Supports Terms & Conditions Privacy</div> */}
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
