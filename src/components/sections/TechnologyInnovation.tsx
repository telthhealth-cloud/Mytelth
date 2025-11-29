import { Cpu, Shield, Cloud, Radio, Stethoscope, Microscope } from "lucide-react";
import { CarouselSection } from "@/components/CarouselSection";

export const TechnologyInnovation = () => {
  const technologies = [
    {
      icon: Cpu,
      name: "P3DSC™ Algorithm",
      description: "Precise Data-Driven Smart Care powered by Quantum AI",
    },
    {
      icon: Shield,
      name: "G-Med ID™",
      description: "Blockchain-based global health identity system",
    },
    {
      icon: Cloud,
      name: "RootCloud™",
      description: "Secure, scalable EMR ecosystem with global reach",
    },
    {
      icon: Radio,
      name: "TWBAN",
      description: "Textile Wireless Body Area Network for continuous monitoring",
    },
    {
      icon: Stethoscope,
      name: "DigiDoc AI",
      description: "Collaborative AI-powered care coordination platform",
    },
    {
      icon: Microscope,
      name: "Lab-on-Chip",
      description: "Next-generation diagnostic technology with 90+ parameters",
    },
  ];

  return (
    <section className="section-spacing bg-charcoal text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-headline mb-6">Technology Innovation</h2>
          <p className="text-body-large text-white/80 max-w-3xl mx-auto">
            Proprietary technologies powering the future of healthcare delivery
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-8 rounded-lg glass-card hover:bg-white/10 transition-all duration-300 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{tech.name}</h3>
                    <p className="text-sm text-white/70">{tech.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <CarouselSection>
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-8 rounded-lg glass-card hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{tech.name}</h3>
                    <p className="text-sm text-white/70">{tech.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </CarouselSection>

        <div className="mt-16 text-center">
          <p className="text-body-large text-white/80 mb-4">
            Built on cutting-edge quantum AI, blockchain, and IoT technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <span>Quantum Computing</span>
            <span>•</span>
            <span>Blockchain</span>
            <span>•</span>
            <span>AI/ML</span>
            <span>•</span>
            <span>IoMT</span>
            <span>•</span>
            <span>Edge Computing</span>
          </div>
        </div>
      </div>
    </section>
  );
};
