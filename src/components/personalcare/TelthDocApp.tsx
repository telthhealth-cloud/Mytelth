import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Activity,
  Users,
  FileText,
  Calendar,
  ShoppingBag,
  Video,
  MessageSquare,
  UserCircle,
} from "lucide-react";

const features = [
  { icon: Activity, label: "Health Vitals Dashboard", angle: 0 },
  { icon: Users, label: "Care Team Access", angle: 45 },
  { icon: FileText, label: "Smart Reports", angle: 90 },
  { icon: Calendar, label: "Appointments", angle: 135 },
  { icon: ShoppingBag, label: "TMart Access", angle: 180 },
  { icon: Video, label: "Video Consultations", angle: 225 },
  { icon: MessageSquare, label: "AI Assistant", angle: 270 },
  { icon: UserCircle, label: "Family Management", angle: 315 },
];

export const TelthDocApp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-gradient-to-br from-[hsl(var(--primary-purple))] via-[hsl(var(--primary-purple-dark))] to-[hsl(var(--accent-teal))] overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Telth Doc App</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Your Complete Health Ecosystem in Your Pocket
          </p>
        </motion.div>

        {/* Orbital layout */}
        <div className="relative max-w-5xl mx-auto h-[600px] md:h-[700px]">
          {/* Center phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative flex items-center justify-center">
                {/* Splash screen background */}
                <img
                  src="/assets/telth-doc-splash.jpg"
                  alt="Telth Doc App"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Telth Logo and Loading */}
                <div className="relative z-10 flex flex-col items-center gap-8">
                  <img
                    src="/assets/app-booking-screen.jpg"
                    alt="Telth"
                    className="w-80 h-[90%] drop-shadow-2xl"
                  />
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative space-y-5">

            {/* Subtle diagonal lines (background) */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-px h-full bg-white/10 rotate-45 left-1/2" />
              <div className="absolute w-px h-full bg-white/10 -rotate-45 left-1/2" />
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">
                      {feature.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central glow effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(var(--accent-teal))]/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};
