import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Watch, Heart, Activity, Eye, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const devices = [
  {
    name: "Telth SmartWatch",
    subtitle: "Your Health Command Center",
    icon: Watch,
    image: "/images/devices/telth-smartwatch.jpg",
    gradient: "from-purple-600 to-indigo-600",
    features: [
      "Continuous heart rate & rhythm analysis",
      "Blood oxygen saturation (SpO2)",
      "Sleep quality & respiratory patterns",
      "Activity levels & caloric expenditure",
      "Stress indicators & recovery metrics",
      "ECG on demand",
    ],
    delivers: [
      "Real-time health alerts",
      "Medication reminders",
      "Wellness coaching",
      "Direct connection to your Care Manager",
      "Emergency SOS with health data transmission",
    ],
  },
  {
    name: "Telth Cardia Chip",
    subtitle: "Advanced Cardiac Intelligence",
    icon: Heart,
    image: "/images/devices/telth-cardia-chip.jpg",
    gradient: "from-rose-500 to-pink-600",
    features: [
      "Continuous ECG monitoring",
      "Arrhythmia detection",
      "Blood flow analysis",
      "Instant alerts for cardiac events",
      "7-day continuous wear",
      "Water-resistant design",
    ],
    perfectFor: [
      "Post-cardiac event monitoring",
      "Chronic cardiac condition management",
      "Athletes optimizing performance",
      "Anyone seeking cardiac peace of mind",
    ],
  },
  {
    name: "Telth CGM",
    subtitle: "Metabolic Mastery",
    icon: Activity,
    image: "/images/devices/telth-cgm.jpg",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Continuous glucose tracking",
      "Trend analysis & predictions",
      "Meal impact visualization",
      "Exercise optimization",
      "Insulin recommendations",
    ],
    beyondDiabetes: [
      "Metabolic health optimization",
      "Weight management",
      "Energy level optimization",
      "Performance nutrition",
    ],
  },
  {
    name: "Telth Smart Glass",
    subtitle: "Augmented Health Reality",
    icon: Eye,
    image: "/images/devices/telth-smart-glass.jpg",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Heads-up health displays",
      "Real-time vitals overlay",
      "Medication reminders in vision",
      "Video consultations with AR",
      "Health gamification",
    ],
    useCases: [
      "Fitness optimization",
      "Chronic condition management",
      "Visual health education",
      "Guided meditation & wellness",
    ],
  },
];

export const TWBANDevices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeDevice, setActiveDevice] = useState(0);

  return (
    <section className="relative py-24 bg-gradient-to-b from-purple-50/30 to-white overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary-purple))] mb-4">
            TWBAN Personal Health Devices
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your Invisible Health Guardian
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
            The Telth Wireless Body Area Network connects you to your health through elegant,
            medical-grade wearables
          </p>
        </motion.div>

        {/* Device showcase */}
        <div className="max-w-6xl mx-auto">
          {/* Device navigation dots */}
          <div className="flex justify-center gap-3 mb-8">
            {devices.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveDevice(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeDevice === index
                    ? "w-12 bg-[hsl(var(--primary-purple))]"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Active device card */}
          <motion.div
            key={activeDevice}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className={`bg-gradient-to-br ${devices[activeDevice].gradient} rounded-3xl p-8 md:p-12 text-white shadow-2xl`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Device image */}
                <div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <img
                      src={devices[activeDevice].image}
                      alt={devices[activeDevice].name}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </motion.div>

                  <div className="mt-6">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                      {devices[activeDevice].name}
                    </h3>
                    <p className="text-xl italic text-white/90">
                      {devices[activeDevice].subtitle}
                    </p>
                  </div>
                </div>

                {/* Right - Features */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
                      {devices[activeDevice].features ? "Monitors" : "Features"}
                    </h4>
                    <div className="space-y-2">
                      {devices[activeDevice].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {devices[activeDevice].delivers && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
                        Delivers
                      </h4>
                      <div className="space-y-2">
                        {devices[activeDevice].delivers.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {devices[activeDevice].perfectFor && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
                        Perfect For
                      </h4>
                      <div className="space-y-2">
                        {devices[activeDevice].perfectFor.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {devices[activeDevice].beyondDiabetes && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
                        Beyond Diabetes
                      </h4>
                      <div className="space-y-2">
                        {devices[activeDevice].beyondDiabetes.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {devices[activeDevice].useCases && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
                        Use Cases
                      </h4>
                      <div className="space-y-2">
                        {devices[activeDevice].useCases.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setActiveDevice((prev) => (prev === 0 ? devices.length - 1 : prev - 1))}
              className="rounded-full"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setActiveDevice((prev) => (prev === devices.length - 1 ? 0 : prev + 1))}
              className="rounded-full"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
