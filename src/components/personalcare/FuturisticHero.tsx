import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Brain, Heart, Dna } from "lucide-react";

export const FuturisticHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[hsl(var(--primary-purple))] via-[hsl(var(--primary-purple-dark))] to-[hsl(var(--background-dark))]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[hsl(var(--accent-teal))] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Diagonal split container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text-purple-teal bg-gradient-to-r from-white to-[hsl(var(--accent-teal))]">
                Health Intelligence
              </span>
              <br />
              at Your Fingertips
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed"
            >
              Experience healthcare reimagined for you. Telth Personal Care delivers bespoke,
              data-driven health solutions that understand your unique biology, lifestyle, and
              aspirations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => {
                  const section = document.getElementById('get-started');
                  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-gradient-to-r from-[hsl(var(--accent-teal))] to-[hsl(var(--accent-teal-light))] hover:shadow-lg hover:shadow-[hsl(var(--accent-teal))]/50 text-white border-0"
              >
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const section = document.getElementById('difference');
                  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="border-2 border-white text-white hover:bg-white/10"
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Animated health icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative h-[500px] hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center"
            >
              <Brain className="w-16 h-16 text-[hsl(var(--accent-teal))]" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/2 right-1/4 w-40 h-40 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center"
            >
              <Heart className="w-20 h-20 text-pink-400" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-1/4 left-1/2 w-36 h-36 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center"
            >
              <Dna className="w-18 h-18 text-[hsl(var(--accent-teal-light))]" />
            </motion.div>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.line
                x1="25%"
                y1="35%"
                x2="75%"
                y2="60%"
                stroke="hsl(var(--accent-teal))"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.line
                x1="75%"
                y1="60%"
                x2="50%"
                y2="75%"
                stroke="hsl(var(--accent-teal))"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0C240 53.3333 480 80 720 80C960 80 1200 53.3333 1440 0V120H0V0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
