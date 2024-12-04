import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playfair } from "next/font/google";

const playfair = Playfair({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const SectionHeader = ({
  language = "fr",
  text = "Section header",
  description = "Section header description",
  navigation = false,
  handleScroll = () => {},
}) => {
  return (
    <div
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
      className="flex justify-between items-end gap-[32px]"
    >
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col group cursor-default">
          <h2
            className={`${playfair.className} text-[#172432] text-[40px] md:text-[54px] xl:text-[64px]`}
          >
            {text}
          </h2>
          <span className="bg-main h-[2px] rounded-full w-[60%] transition-all duration-500 group-hover:w-0"></span>
        </div>
        <p className="text-[#767E86] md:text-lg">{description}</p>
      </div>

      {navigation && (
        <div
          className="hidden md:flex space-x-4"
          style={{
            direction: "ltr",
          }}
        >
          <button
            onClick={() => handleScroll(-500)}
            className="p-3 bg-black rounded-full hover:bg-opacity-85 transition-all duration-500 group-hover:animate-bounce"
          >
            <ChevronLeft className="h-6 w-6 text-white font-light" />
          </button>
          <button
            onClick={() => handleScroll(500)}
            className="p-3 bg-main rounded-full hover:bg-opacity-85 transition-all duration-500 group-hover:animate-bounce"
          >
            <ChevronRight className="h-6 w-6 text-white font-light" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
