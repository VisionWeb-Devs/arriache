"use client";
import Image from "next/image";
import { Playfair } from "next/font/google";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";

const playfair = Playfair({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Blog = () => {
  const language = useLanguage();
  const t = translations[language.language];
  return (
    <div className="bg-gradient-to-br bg-gray-100 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header
          className="mb-16"
          style={{
            direction: language.language === "ar" ? "rtl" : "ltr",
          }}
        >
          <h2
            className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl text-gray-900 font-light relative inline-block group`}
          >
            {t.My_Blog}
            <span
              className={`absolute bottom-[-10px] left-0 h-1 bg-orange-500 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                language.language === "ar" ? "origin-right" : " origin-left"
              }`}
            ></span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl tracking-wide leading-relaxed">
            {t.My_Blog_Description}
          </p>
        </header>

        <main className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-2xl shadow-2xl transform transition-all hover:scale-105 duration-300">
            <Image
              width={800}
              height={600}
              src="/assets/5.png"
              alt="Beautiful Italy"
              className="w-full h-[500px] object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <p
              className="
    text-lg text-gray-800 leading-relaxed tracking-wide relative pl-6 
    before:absolute before:left-0 before:top-2 before:w-1 
    before:h-[calc(100%-0.5rem)] before:bg-orange-500 space-y-4
  "
            >
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born, and I will give you a
              complete account of the system and expound the actual teachings of
              the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful.
            </p>

            <button
              className="
                px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl group flex items-center gap-2"
            >
              Read More
              <span className=" opacity-0 group-hover:opacity-100 transition-opacity  duration-300 ml-2 ">
                →
              </span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blog;
