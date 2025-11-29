import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface ScrollingHeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const locations = [
  { image: "/images/hub-locations/remote-village.png", label: "Remote Villages" },
  { image: "/images/hub-locations/hospital.png", label: "Hospitals" },
  { image: "/images/hub-locations/community-center.png", label: "Community Centers" },
];

export const ScrollingHeroSection = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
}: ScrollingHeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Cross-fade */}
      {locations.map((location, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={location.image}
            alt={location.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Location Labels - Hidden on mobile, visible on tablet+ */}
      <div className="absolute top-4 md:top-8 right-4 md:right-8 z-20 hidden sm:flex gap-2 md:gap-4">
        {locations.map((location, index) => (
          <span
            key={index}
            className={`text-xs md:text-sm font-semibold transition-all duration-500 ${
              index === currentIndex
                ? "text-white scale-110"
                : "text-white/50 scale-100"
            }`}
          >
            {location.label}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-12 md:py-0">
        <div className="max-w-[900px] mx-auto text-center space-y-4 md:space-y-6 lg:space-y-8 animate-fade-in-up">
          {/* Overlay Text "Anywhere • Everywhere • For Everyone" */}
          <p className="text-white/90 text-sm md:text-lg lg:text-xl font-light tracking-wider md:tracking-widest mb-4 md:mb-6">
            Anywhere • Everywhere • For Everyone
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold drop-shadow-2xl leading-tight px-4">
            {title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed px-4">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6 px-4">
            <Button 
              size="lg" 
              onClick={onPrimaryClick}
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto text-white bg-accent-red hover:bg-accent-red/90"
            >
              {primaryCta}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={onSecondaryClick}
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              {secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {locations.map((_, index) => (
          <div
            key={index}
            className={`h-1 md:h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-8 md:w-12 bg-white" : "w-6 md:w-8 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
