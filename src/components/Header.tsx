import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import telthLogo from "@/assets/telth-logo.svg";

const tabs = [
  { id: "community", label: "Care @ Community", path: "/" },
  { id: "carehome", label: "Care @ Home", path: "/care-home" },
  { id: "personalized", label: "Personal Care", path: "/personalized" },
  { id: "carepay", label: "Telth Care Pay™", path: "/care-pay", comingSoon: true },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const getCurrentTab = () => {
    const tab = tabs.find(t => t.path === location.pathname);
    return tab?.id || "community";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeTab = getCurrentTab();

  return (
    <header className={`sticky top-0 z-50 w-full glass-strong transition-all duration-300 ${scrolled ? 'shadow-elegant' : ''} border-b border-white/20`}>
      <nav className="container flex h-20 items-center justify-between">
        <NavLink to="/" className="transition-opacity hover:opacity-80">
          <img src={telthLogo} alt="Telth" className="h-8 w-auto" />
        </NavLink>
      </nav>

      {/* Tab Navigation */}
      <div className="border-t border-white/10">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto">
            {tabs.map((tab) => {
              if (tab.comingSoon) {
                return (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      e.preventDefault();
                      // Could add toast here if desired
                    }}
                    className={cn(
                      "px-8 py-4 text-base font-semibold transition-all duration-300 whitespace-nowrap relative block cursor-not-allowed opacity-70"
                    )}
                    aria-label={`${tab.label} (Coming Soon)`}
                    disabled
                  >
                    <span className="flex items-center gap-2">
                      {tab.label}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-primary to-accent-red text-white rounded-full animate-pulse">
                        <Sparkles className="w-3 h-3" />
                        Coming Soon
                      </span>
                    </span>
                  </button>
                );
              }
              
              return (
                <NavLink
                  key={tab.id}
                  to={tab.path}
                  className={cn(
                    "px-8 py-4 text-base font-semibold transition-all duration-300 whitespace-nowrap relative block",
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  )}
                  aria-label={tab.label}
                >
                  <span className="flex items-center gap-2">
                    {tab.label}
                  </span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent-red to-gold rounded-t-full" />
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
