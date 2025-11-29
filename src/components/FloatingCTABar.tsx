import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface FloatingCTABarProps {
  onBookClick: () => void;
  onEnquireClick: () => void;
}

export const FloatingCTABar = ({ onBookClick, onEnquireClick }: FloatingCTABarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 glass-card backdrop-blur-xl bg-background/90 border-t-2 border-telth-purple/20 shadow-elegant transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-telth-teal animate-pulse" />
            <p className="text-body-standard font-semibold bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent text-center sm:text-left">
              Ready for your 24/7 health companion?
            </p>
          </div>
          <div className="flex gap-3">
            <Button onClick={onBookClick} size="sm">
              Book Care Manager
            </Button>
            <Button onClick={onEnquireClick} variant="outline" size="sm">
              Enquire Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
