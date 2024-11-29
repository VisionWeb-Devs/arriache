import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PopularDest from "@/components/PopularDest";
import Reviews from "@/components/Reviews";
import SpecialOffers from "@/components/SpecialOffers";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularDest />
      <SpecialOffers />
      <Blog />
      <Gallery />
      <Reviews />
    </div>
  );
}
