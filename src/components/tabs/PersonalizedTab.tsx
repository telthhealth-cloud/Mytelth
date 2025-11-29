import { FuturisticHero } from "../personalcare/FuturisticHero";
import { TelthDifference } from "../personalcare/TelthDifference";
import { TechnologySuite } from "../personalcare/TechnologySuite";
import { TWBANDevices } from "../personalcare/TWBANDevices";
import { TelthDocApp } from "../personalcare/TelthDocApp";
import { CarePayCard } from "../personalcare/CarePayCard";
import { PricingSection } from "../personalcare/PricingSection";
import { GetStartedCTA } from "../personalcare/GetStartedCTA";

export const PersonalizedTab = () => {
  return (
    <div className="relative overflow-hidden">
      <div id="hero">
        <FuturisticHero />
      </div>
      <div id="difference">
        <TelthDifference />
      </div>
      <div id="technology">
        <TechnologySuite />
      </div>
      <div id="devices">
        <TWBANDevices />
      </div>
      <div id="app">
        <TelthDocApp />
      </div>
      <div id="carepay-card">
        <CarePayCard />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="get-started">
        <GetStartedCTA />
      </div>
    </div>
  );
};
