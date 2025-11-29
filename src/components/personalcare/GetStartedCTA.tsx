import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { Phone, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { InterestForm } from "./InterestForm";

const steps = [
  {
    number: 1,
    title: "Schedule Your Health Assessment",
    description:
      "Book comprehensive evaluation at Care Hub or request home visit",
    icon: CheckCircle,
  },
  {
    number: 2,
    title: "Receive Your Personalized Care Plan",
    description:
      "Within 48 hours, get custom health blueprint with device recommendations",
    icon: CheckCircle,
  },
  {
    number: 3,
    title: "Meet Your Care Team",
    description: "Connect with Care Manager and Wellness Advisor",
    icon: CheckCircle,
  },
  {
    number: 4,
    title: "Activate Your Ecosystem",
    description: "Set up devices, download Telth Doc, activate Care Card",
    icon: CheckCircle,
  },
  {
    number: 5,
    title: "Start Living Better",
    description: "Experience truly personalized, intelligent healthcare",
    icon: CheckCircle,
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    content: ["1800-570-0140", "(India Toll-Free)"],
  },
  {
    icon: Mail,
    title: "Email Us",
    content: ["info@mytelth.com"],
  },
];

export const GetStartedCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="relative py-24 bg-gradient-to-br from-[hsl(var(--accent-teal))] via-[hsl(var(--primary-purple))] to-[hsl(var(--primary-purple-dark))] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Begin Your Health Journey
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Getting started with Telth Personal Care is simple
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Left - Process steps (60%) */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-white/20 hidden md:block" />

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-white to-[hsl(var(--accent-teal-light))] flex items-center justify-center text-[hsl(var(--primary-purple))] font-bold text-lg shadow-lg z-10">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-card-futuristic rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact options (40%) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-card-futuristic rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="mb-8 last:mb-0"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">
                            {method.title}
                          </h4>
                          {method.content.map((item, i) => (
                            <p key={i} className="text-white/90 text-lg font-medium">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={() => setShowForm(true)}
            className="bg-white text-[hsl(var(--primary-purple))] hover:bg-white/90 text-xl px-12 py-8 h-auto rounded-full shadow-2xl hover:scale-105 transition-transform"
          >
            Begin Your Health Journey
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Interest Form Modal */}
    <InterestForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};
