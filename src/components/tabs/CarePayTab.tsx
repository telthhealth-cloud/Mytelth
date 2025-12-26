import { HeroSection } from "../HeroSection";
import { Button } from "../ui/button";
import heroCarePay from "@/assets/hero-carepay.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

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
  ShoppingBag,
  Users
} from "lucide-react";
import { InterestForm } from "../personalcare/InterestForm";

const accordionData = [
  {
    title: "Telth CarePay Plans",
    brief: "Healthcare made simple, predictable, and affordable",
    details: [
      "Subscription-based health memberships",
      "Preventive & diagnostic care access",
      "Care@Home and Care@Community services",
      "AI Health Hub & kiosk services",
      "Priority consultations & care pathways",
      "Family & corporate health plans",
      "Transparent monthly or annual pricing",
    ],
    footer:
      "Reduces out-of-pocket medical expenses while encouraging early detection.",
  },
  {
    title: "T-Pay – Digital Payments",
    brief: "One payment system for health and everyday life",
    details: [
      "QR code payments",
      "Online and in-app payments",
      "Clinic, pharmacy & lab payments",
      "Marketplace purchases",
      "Franchise & partner settlements",
      "Wallet-based & linked-bank payments",
    ],
    footer:
      "Ensures cashless, contactless, and traceable transactions ecosystem-wide.",
  },
  {
    title: "Telth G-Token",
    brief: "Health rewards that become real wealth",
    details: [
      "Earn tokens for preventive care",
      "Accumulate value securely over time",
      "Redeem or exchange for physical gold",
      "Access preferred jewellers globally",
      "Long-term savings & value preservation",
    ],
    footer:
      "Converts health actions into tangible wealth.",
  },
  {
    title: "T-Mart – Ethical Marketplace",
    brief: "Quality products. Trusted sources. Global reach.",
    details: [
      "Curated organic & wellness products",
      "High quality & traceability standards",
      "Digitization for farmers & producers",
      "Neighborhood stores & cooperatives",
      "Global distribution via Telth ecosystem",
      "Fair pricing & ethical sourcing",
    ],
    footer:
      "Empowers local producers and ethical commerce.",
  },
];


const healthcareServices = ["Hospital Network", "Pharmacy Services", "Wellness Programs"];
const financialServices = ["Insurance Claims", "Savings Accounts", "Investment Options"];


export const CarePayTab = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isFormOpen, setIsFormOpen] = useState(false);


  return (
    <div className="space-y-20">
      <HeroSection
        title="Healthcare That Fits Your Life"
        subtitle="Flexible subscription plans and unified payment solutions powered by Care Pay™"
        image={heroCarePay}
        primaryCta="Explore Plans"
        secondaryCta="Calculate Savings"
      />

      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Care Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare coverage tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Essential</CardTitle>
              <div className="text-3xl font-bold text-primary mt-2">
                $49<span className="text-base text-muted-foreground">/month</span>
              </div>
              <CardDescription>Perfect for individuals and families</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Annual health screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Virtual doctor consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Basic IoMT device</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">24/7 AI health assistant</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-lg relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Premium</CardTitle>
              <div className="text-3xl font-bold text-primary mt-2">
                $99<span className="text-base text-muted-foreground">/month</span>
              </div>
              <CardDescription>Comprehensive care for your whole family</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Everything in Essential</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Quarterly home visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Advanced IoMT devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Personal Care Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Priority specialist referrals</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Elite</CardTitle>
              <div className="text-3xl font-bold text-primary mt-2">
                $199<span className="text-base text-muted-foreground">/month</span>
              </div>
              <CardDescription>Complete personalized health management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Everything in Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Monthly home visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">P3DSC™ personalized care</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Genetic screening included</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">24/7 concierge service</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Get Started</Button>
            </CardContent>
          </Card>
        </div>

        <section className="relative m-10 py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
              {/* RIGHT SIDE – ACCORDION */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                {accordionData.map((item, index) => {
                  const isOpen = activeIndex === index;

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden border"
                    >
                      {/* Header */}
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center p-5 text-left"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.brief}
                          </p>
                        </div>

                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xl font-bold"
                        >
                          ▼
                        </motion.span>
                      </button>

                      {/* Body */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm text-gray-600 space-y-2">
                          <ul className="list-disc pl-5 space-y-1">
                            {item.details.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>

                          <p className="mt-3 text-gray-500 italic">
                            {item.footer}
                          </p>
                        </div>
                      </motion.div>
                    </div>
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

      </section>



      <section className="bg-muted py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Care Pay™?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-lg border text-center">
              <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Unified Payment</h3>
              <p className="text-sm text-muted-foreground">One subscription for all your healthcare needs</p>
            </div>
            <div className="bg-background p-6 rounded-lg border text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Secure & HIPAA</h3>
              <p className="text-sm text-muted-foreground">Bank-level encryption and data protection</p>
            </div>
            <div className="bg-background p-6 rounded-lg border text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Instant Access</h3>
              <p className="text-sm text-muted-foreground">No waiting periods or claim approvals</p>
            </div>
            <div className="bg-background p-6 rounded-lg border text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Family Plans</h3>
              <p className="text-sm text-muted-foreground">Cover your entire family with savings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise & Government Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Custom healthcare solutions for organizations of any size. Integrate Care Pay™ with your existing benefits and insurance programs.
          </p>
          <Button size="lg">Contact Enterprise Sales</Button>
        </div>
      </section>
    </div>
  );
};
