import { Users, Building2, Heart, Building } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { CarouselSection } from "@/components/CarouselSection";

export const PartnerEcosystem = () => {
  const partnerTypes = [
    {
      icon: Users,
      title: "Become a Care Manager",
      description: "Lead community health initiatives and coordinate patient care delivery",
      benefits: ["Training provided", "Flexible hours", "Competitive compensation"],
    },
    {
      icon: Building2,
      title: "Franchise Partner",
      description: "Own and operate a Telth Smart Hub in your community",
      benefits: ["Proven business model", "Comprehensive support", "Exclusive territory"],
    },
    {
      icon: Heart,
      title: "Healthcare Provider",
      description: "Integrate Telth's platform into your practice for enhanced care delivery",
      benefits: ["Seamless integration", "Increased revenue", "Better patient outcomes"],
    },
    {
      icon: Building,
      title: "Government & CSR",
      description: "Partner with us to improve public health outcomes at scale",
      benefits: ["Large-scale deployment", "Community impact", "Sustainable solutions"],
    },
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-headline mb-6">Partner Ecosystem</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Join a global network transforming healthcare delivery. Multiple partnership opportunities to match your goals.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerTypes.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.title}
                className="glass-card p-8 rounded-lg hover-lift card-tilt flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-card-title mb-4">{partner.title}</h3>
                <p className="text-body-standard text-muted-foreground mb-6 flex-grow">
                  {partner.description}
                </p>
                <div className="space-y-2 mb-6">
                  {partner.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <p className="text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link to="/partner">Apply Now</Link>
                </Button>
              </div>
            );
          })}
        </div>

        <CarouselSection>
          {partnerTypes.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.title}
                className="glass-card p-8 rounded-lg hover-lift flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-card-title mb-4">{partner.title}</h3>
                <p className="text-body-standard text-muted-foreground mb-6 flex-grow">
                  {partner.description}
                </p>
                <div className="space-y-2 mb-6">
                  {partner.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <p className="text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link to="/partner">Apply Now</Link>
                </Button>
              </div>
            );
          })}
        </CarouselSection>
      </div>
    </section>
  );
};
