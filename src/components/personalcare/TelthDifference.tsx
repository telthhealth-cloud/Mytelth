import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Dna, Network, Shield, Coins } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Predictive Health Intelligence",
    description:
      "Know what's coming before symptoms appear, with AI-powered insights that map your health trajectory up to 20 years ahead",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Dna,
    title: "Bespoke Care Protocols",
    description:
      "No generic treatments. Every recommendation is crafted specifically for your genetic profile, lifestyle, and health goals",
    color: "from-[hsl(var(--accent-teal))] to-emerald-500",
  },
  {
    icon: Network,
    title: "Continuous Care Ecosystem",
    description:
      "24/7 monitoring, real-time interventions, and seamless coordination across all your health touchpoints",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Wealth-Integrated Wellness",
    description:
      "Healthcare that actually helps you build financial value, not just spend it",
    color: "from-amber-500 to-orange-500",
    iconSecondary: Coins,
  },
];

export const TelthDifference = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-gradient-to-b from-[hsl(var(--background))] to-purple-50/30 overflow-hidden">
      {/* Curved top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full rotate-180"
        >
          <path
            d="M0 0C240 53.3333 480 80 720 80C960 80 1200 53.3333 1440 0V120H0V0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary-purple))] mb-4">
            The Telth Personal Care Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precision. Personalization. Performance.
          </p>
        </motion.div>

        {/* Staggered cards layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const IconSecondary = benefit.iconSecondary;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[hsl(var(--primary-purple))]/20 to-[hsl(var(--accent-teal))]/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 flex items-center gap-2">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center relative`}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                        {IconSecondary && (
                          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center border-2 border-white">
                            <IconSecondary className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
