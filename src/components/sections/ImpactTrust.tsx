import { CarouselSection } from "@/components/CarouselSection";

export const ImpactTrust = () => {
  const stats = [
    { value: "65%", label: "Cost reduction in healthcare delivery" },
    { value: "75%", label: "Shorter care cycles" },
    { value: "90+", label: "Parameters in 20 minutes" },
    { value: "20 years", label: "Health prediction capability" },
    { value: "10x", label: "Revenue increase for providers" },
    { value: "1000+", label: "Smart Hubs planned (2-year rollout)" },
  ];

  const partners = [
    "NHS (UK)",
    "Johns Hopkins Hospital",
    "Harvard Research",
    "HSBC UK",
    "Wibmo/PayU",
    "IIT Madras",
  ];

  return (
    <section className="section-spacing bg-primary text-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-headline mb-6">Transforming Healthcare Delivery Globally</h2>
          <p className="text-body-large text-white/90 max-w-3xl mx-auto">
            Delivering measurable impact through innovation, precision, and scale
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 perspective-1000">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-lg glass-card hover-lift hover:scale-105 transition-transform duration-300"
              style={{
                transform: `translateZ(${index % 2 === 0 ? '20px' : '0px'})`,
                zIndex: index % 2 === 0 ? 2 : 1,
              }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-3">{stat.value}</div>
              <div className="text-base text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>

        <CarouselSection>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-lg glass-card"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3">{stat.value}</div>
              <div className="text-base text-white/90">{stat.label}</div>
            </div>
          ))}
        </CarouselSection>

        <div className="text-center mt-20">
          <h3 className="text-subsection mb-8">Trusted Partners</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-lg font-medium text-white/90 hover:text-white transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
