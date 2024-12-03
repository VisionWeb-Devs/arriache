import { Playfair } from "next/font/google";
const playfair = Playfair({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const WhyUs = ({ image, title, description, index }) => {
  return (
    <div
      className={`flex justify-between max-h-[300px] ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <img src={image} alt="launch" className="max-h-[400px]" />
      <div className="flex flex-col gap-6 max-w-[800px]">
        <h2 className={`text-6xl font-light ${playfair.className}`}>{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default WhyUs;
