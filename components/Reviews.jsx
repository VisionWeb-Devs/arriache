"use client";
import ReviewCard from "./ReviewCard";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";

const reviews = [
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

const Reviews = () => {
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
    <div className="bg-gray-100 lg:px-[182px] md:px-[32px] sm:px-[20px] py-24 flex flex-col gap-[50px]">
      <SectionHeader
        language={language.language}
        text={t.Travelers_Experiences}
        description={t.Travelers_Experiences_Description}
        // navigation
        // handleScroll={(amount) => handleScroll(amount)}
      />
      <div className="px-[20px] grid grid-cols-1 md:grid-cols-4 gap-[32px]">
        {reviews.map((offre) => (
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
