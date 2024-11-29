import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/60 to-black/30 via-transparent">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight transition-transform duration-500 transform hover:scale-[1.02] hover:tracking-wide">
          Arriache Travel
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light  text-gray-200 opacity-90 transition-opacity hover:opacity-100">
          Embark on extraordinary journeys that transform your perspective.
          Discover breathtaking destinations, immersive experiences, and
          unforgettable memories with Arriache Travel.
        </p>

        <div className="flex justify-center space-x-6 pt-8">
          <Button
            variant="solid"
            color="white"
            size="lg"
            className="px-8 py-4 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
          >
            Explore Destinations
            <ChevronRightIcon className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            color="white"
            size="lg"
            className="px-8 py-4 font-semibold rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            Plan Your Trip
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// export default function Hero() {
//   return <div>Hello</div>;
// }
