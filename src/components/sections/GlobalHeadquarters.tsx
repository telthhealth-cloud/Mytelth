import { MapPin } from "lucide-react";
import { CarouselSection } from "@/components/CarouselSection";

export const GlobalHeadquarters = () => {
  const locations = [
    {
      region: "United States",
      type: "Global Headquarters",
      address: "Corporate Office, USA",
      description: "Strategic command center driving global healthcare innovation",
    },
    {
      region: "United Kingdom",
      type: "R&D & AI Innovation Hubs",
      address: "Research Facilities, UK",
      description: "Advanced research in quantum AI and precision medicine",
    },
    {
      region: "India",
      type: "Operations & Manufacturing",
      address: "IIT Madras Research Park, Chennai",
      description: "Large-scale operations, smart hub manufacturing, and technology development",
    },
  ];

  const additionalFacilities = [
    "IIT Madras Research Park - Chennai",
    "SIPCOT Industrial Park - Oragadam",
    "Technology Center - Bangalore",
  ];

  return (
    <section className="section-spacing bg-light-gray">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-headline mb-6">Global Headquarters</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Strategically positioned across three continents to deliver world-class healthcare solutions
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location) => (
            <div
              key={location.region}
              className="glass-card p-8 rounded-lg hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-card-title mb-1">{location.region}</h3>
                  <p className="text-sm font-semibold text-primary">{location.type}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{location.address}</p>
              <p className="text-body-standard">{location.description}</p>
            </div>
          ))}
        </div>

        <CarouselSection>
          {locations.map((location) => (
            <div
              key={location.region}
              className="glass-card p-8 rounded-lg hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-card-title mb-1">{location.region}</h3>
                  <p className="text-sm font-semibold text-primary">{location.type}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{location.address}</p>
              <p className="text-body-standard">{location.description}</p>
            </div>
          ))}
        </CarouselSection>

        <div className="glass-card p-8 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">Additional Facilities</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {additionalFacilities.map((facility) => (
              <div key={facility} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-body-standard">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
