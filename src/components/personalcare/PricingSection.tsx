import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { CheckCircle, Sparkles, Heart, Shield, Users, Stethoscope } from "lucide-react";
import { useState } from "react";
import { InterestForm } from "./InterestForm";

const benefitPlans = [
  {
    name: "Essential Care",
    icon: Heart,
    features: [
      "Basic health monitoring",
      "Quarterly Care Manager check-ins",
      "Telth Doc app access",
      "Telth Care Card",
      "TMart discounts",
      "Email support",
    ],
    color: "from-[hsl(var(--accent-teal))] to-emerald-500",
  },
  {
    name: "Comprehensive Care",
    icon: Shield,
    features: [
      "Everything in Essential",
      "Weekly Care Manager interaction",
      "One TWBAN device included",
      "Monthly Smart Health Reports",
      "Specialist consultation credits",
      "Priority scheduling",
      "24/7 phone support",
      "Wellness Advisor access",
    ],
    popular: true,
    color: "from-[hsl(var(--primary-purple))] to-purple-600",
  },
  {
    name: "Premium Care",
    icon: Sparkles,
    features: [
      "Everything in Comprehensive",
      "Complete TWBAN device suite",
      "Dedicated Wellness Advisor",
      "Unlimited specialist consultations",
      "Home visit services",
      "Family coverage (up to 4 members)",
      "Concierge health services",
      "International care coordination",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Custom Plans",
    icon: Stethoscope,
    features: [
      "Condition-specific protocols",
      "Specialized monitoring devices",
      "Dedicated care teams",
      "Customized treatment pathways",
      "Research-backed interventions",
      "Tailored wellness programs",
    ],
    color: "from-blue-500 to-cyan-500",
  },
];

export const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-b from-purple-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary-purple))] mb-4">
            Discover Your Perfect Care Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every health journey is unique. Tell us about yourself and we'll design a care plan
            tailored to your needs and budget.
          </p>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {benefitPlans.map((plan, index) => {
            const Icon = plan.icon;
            
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
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Most Popular badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full font-bold text-xs flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  </motion.div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-2xl p-6 transition-all duration-300 bg-white border-2 hover:shadow-xl ${
                    plan.popular
                      ? "border-[hsl(var(--primary-purple))] shadow-lg"
                      : "border-gray-200 hover:border-[hsl(var(--primary-purple))]/50"
                  }`}
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center`}
                      >
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[hsl(var(--primary-purple))] mb-4">
                      {plan.name}
                    </h3>

                    <ul className="space-y-2.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--accent-teal))]" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Large CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => setIsFormOpen(true)}
            className="text-lg px-12 py-7 h-auto bg-gradient-to-r from-[hsl(var(--primary-purple))] to-purple-600 hover:from-[hsl(var(--primary-purple-dark))] hover:to-purple-700 text-white shadow-2xl hover:shadow-[0_20px_60px_-10px_hsl(var(--primary-purple)/.5)] transition-all duration-300"
          >
            <Users className="w-6 h-6 mr-2" />
            Get Personalized Pricing
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Share your details and we'll create a plan that fits your health goals and budget
          </p>
        </motion.div>
      </div>

      {/* Interest Form Modal */}
      <InterestForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};
