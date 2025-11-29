import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Lock, Globe, TrendingUp, Activity, Brain, CheckCircle } from "lucide-react";

export const TechnologySuite = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-gradient-to-br from-[hsl(var(--background-dark))] via-[hsl(var(--primary-purple-dark))] to-[hsl(var(--background-dark))] overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(hsl(var(--accent-teal)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent-teal)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Personal Health Technology Suite
          </h2>
        </motion.div>

        {/* S-curve split layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - G-Med ID */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:-mt-12"
          >
            <div className="glass-card-futuristic rounded-3xl p-8 relative group hover:scale-105 transition-transform duration-300">
              {/* Holographic effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[hsl(var(--accent-teal))]/20 via-transparent to-[hsl(var(--primary-purple))]/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Mock card */}
                <div className="w-full aspect-[1.6/1] bg-gradient-to-br from-[hsl(var(--primary-purple))] to-[hsl(var(--accent-teal))] rounded-2xl p-6 mb-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <p className="text-white/80 text-sm mb-1">G-Med ID</p>
                        <p className="text-white font-bold text-2xl">Your Health Passport</p>
                      </div>
                      <Shield className="w-12 h-12 text-white/80" />
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="w-4 h-4 text-white/80" />
                        <p className="text-white/80 text-xs">Blockchain Secured</p>
                      </div>
                      <div className="h-8 w-48 bg-white/20 rounded animate-pulse" />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  G-Med ID: Your Universal Health Identity
                </h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  Your comprehensive health passport, secured by blockchain technology. Consolidates
                  your entire health history into one globally-accessible identity.
                </p>

                <div className="space-y-3">
                  {[
                    "Blockchain-secured data integrity",
                    "Global access for you and authorized providers",
                    "Lifetime health analytics and trending",
                    "Integration with international healthcare systems",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[hsl(var(--accent-teal))] flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - P3DSC */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:mt-12"
          >
            <div className="glass-card-futuristic rounded-3xl p-8 relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[hsl(var(--primary-purple))]/20 via-transparent to-[hsl(var(--accent-teal))]/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent-teal))] to-[hsl(var(--accent-teal-light))] flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">P3DSC Intelligence Engine</h3>
                    <p className="text-white/60 text-sm">Precise Data-Driven Digital Smart Care</p>
                  </div>
                </div>

                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  The brain behind your bespoke care. Analyzes 500+ health parameters continuously,
                  delivering real-time insights and personalized recommendations.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: "65%", label: "Cost Reduction", icon: TrendingUp },
                    { value: "75%", label: "Shorter Care Cycles", icon: Activity },
                    { value: "500+", label: "Parameters Monitored", icon: Brain },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <stat.icon className="w-6 h-6 text-[hsl(var(--accent-teal))] mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-white/70">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2 text-sm text-white/70">
                  <p>✓ Real-time health risk assessments</p>
                  <p>✓ Personalized treatment recommendations</p>
                  <p>✓ Predictive health modeling</p>
                  <p>✓ Automated care coordination</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connecting particles animation */}
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30">
          <motion.line
            x1="30%"
            y1="50%"
            x2="70%"
            y2="50%"
            stroke="hsl(var(--accent-teal))"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </div>
    </section>
  );
};
