import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CreditCard,
  Hospital,
  Wallet,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { InterestForm } from "./InterestForm";

const benefits = [
  {
    icon: CreditCard,
    title: "Universal Acceptance",
    desc: "Accepted at all Telth network facilities and partners",
  },
  {
    icon: Hospital,
    title: "Healthcare Hub",
    desc: "Direct access to hospitals, clinics, and specialists",
  },
  {
    icon: Wallet,
    title: "Smart Payments",
    desc: "Automated insurance claims and flexible payment plans",
  },
  {
    icon: TrendingUp,
    title: "Wealth Integration",
    desc: "Link to health savings accounts and investment options",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    desc: "Bank-grade security with fraud protection",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    desc: "Real-time approvals and zero waiting periods",
  },
];

const healthcareServices = ["Hospital Network", "Pharmacy Services", "Wellness Programs"];
const financialServices = ["Insurance Claims", "Savings Accounts", "Investment Options"];

export const CarePayCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[hsl(var(--primary-purple))] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--accent-teal))] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Telth Care Pay™ Card
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your single gateway to complete healthcare access and financial wellness.
            Powered by Visa, secured by PayU, trusted by Telth.
          </p>
        </motion.div>

        {/* Card Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Card Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <img
                src="/images/telth-care-pay-card.jpg"
                alt="Telth Care Pay Card"
                className="w-full rounded-2xl shadow-2xl"
              />
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <CreditCard className="w-8 h-8 text-[hsl(var(--primary-purple))]" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[hsl(var(--primary-purple))] to-[hsl(var(--accent-teal))] rounded-full p-3 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary-purple))] to-[hsl(var(--accent-teal))] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Central Hub Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Central Hub for Healthcare & Wealth
          </h3>

          <div className="relative">
            {/* Healthcare Services (Top) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {healthcareServices.map((service, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center hover:border-[hsl(var(--primary-purple))] transition-colors"
                >
                  <p className="font-semibold text-gray-800 text-sm">
                    {service}
                  </p>
                </div>
              ))}
            </div>

            {/* Central Card */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-[hsl(var(--primary-purple))] to-[hsl(var(--accent-teal))] rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-10 h-10 text-white" />
                  <div className="text-white">
                    <p className="font-bold text-lg">Care Pay™ Card</p>
                    <p className="text-sm opacity-90">Your Health Gateway</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Services (Bottom) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {financialServices.map((service, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center hover:border-[hsl(var(--accent-teal))] transition-colors"
                >
                  <p className="font-semibold text-gray-800 text-sm">
                    {service}
                  </p>
                </div>
              ))}
            </div>

            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none -z-10"
            >
              <line
                x1="50%"
                y1="25%"
                x2="50%"
                y2="45%"
                stroke="#e5e7eb"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <line
                x1="50%"
                y1="55%"
                x2="50%"
                y2="75%"
                stroke="#e5e7eb"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to experience the future of healthcare payments?
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-[hsl(var(--primary-purple))] to-[hsl(var(--accent-teal))] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Apply for Care Pay™ Card
          </button>
        </motion.div>
      </div>
    </section>

    <InterestForm 
      isOpen={isFormOpen} 
      onClose={() => setIsFormOpen(false)}
      defaultInquiryType="care_pay_card"
    />
  </>
  );
};
