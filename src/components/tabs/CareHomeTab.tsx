import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { InquiryDialog } from "@/components/InquiryDialog";
import { FloatingCTABar } from "@/components/FloatingCTABar";
import { CareHomeFAQ } from "@/components/CareHomeFAQ";
import { CareServiceCard } from "@/components/CareServiceCard";
import { CareManagerFeatureCard } from "@/components/CareManagerFeatureCard";
import { DeviceShowcaseCard } from "@/components/DeviceShowcaseCard";
import { MonitoringFeatureCard } from "@/components/MonitoringFeatureCard";
import { EmergencyFeatureCard } from "@/components/EmergencyFeatureCard";
import { CarePlanCard } from "@/components/CarePlanCard";
import { BenefitCard } from "@/components/BenefitCard";
import { TechPlatformCard } from "@/components/TechPlatformCard";
import {
  Hospital,
  Clock,
  UserCheck,
  Activity,
  AlertCircle,
  Calendar,
  Stethoscope,
  Heart,
  Package,
  Zap,
  Crown,
  Phone,
  HeartPulse,
  BookOpen,
  Shield,
  Pill,
  AlertTriangle,
  Smartphone,
  Building2,
  TrendingDown,
  MapPin,
  CheckCircle as CheckCircleIcon,
  Database,
  Cpu,
  IdCard,
  Monitor,
  Ambulance,
  Users,
  FileText,
  Headset,
  Video,
  Unlock,
  Moon,
  TrendingUp,
  MessageCircle,
  Mail,
  ChevronRight,
} from "lucide-react";

export const CareHomeTab = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedInquiryType, setSelectedInquiryType] = useState("");

  const openInquiryDialog = (inquiryType: string) => {
    setSelectedInquiryType(inquiryType);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* SECTION 1: Hero Section */}
      <HeroSection
        title="Hospital-Grade Care at Your Doorstep in 15 Minutes"
        subtitle="Complete care cycle from diagnosis to treatment—delivered by your dedicated Care Manager at home."
        image=""
        video="/videos/home-care-treatment.mp4"
        primaryCta="Request Care@Home"
        secondaryCta="View Care Plans"
        onPrimaryClick={() => openInquiryDialog("Request Care@Home")}
        onSecondaryClick={() => openInquiryDialog("Care Plans Inquiry")}
      />

      {/* SECTION 2: What is Care@Home? - Bento Grid */}
      <section className="py-20 bg-gradient-to-b from-purple-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
              Complete Care Cycle in 15 Minutes at Home
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your dedicated Care Manager brings hospital-grade diagnostics to your doorstep. Comprehensive health assessment, AI-powered analysis, and treatment plan—all completed in 15 minutes without leaving home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="lg:row-span-2">
              <CareServiceCard
                icon={Hospital}
                title="Hospital-Grade Diagnostics"
                description="Comprehensive testing at your doorstep with advanced medical equipment"
                features={[
                  "51-parameter health screening",
                  "Real-time lab-quality results",
                  "AI-powered analysis",
                  "Instant treatment planning"
                ]}
                featured={true}
                backgroundImage="/src/assets/care-manager-primary.jpg"
                onClick={() => openInquiryDialog("Hospital-Grade Diagnostics")}
              />
            </div>
            
            <CareServiceCard
              icon={Clock}
              title="15-Minute Care Cycle"
              description="From assessment to treatment plan in just 15 minutes"
              features={[
                "Quick vital assessment",
                "Comprehensive diagnostics",
                "Immediate consultation"
              ]}
              backgroundImage="/src/assets/care-15min-cycle.jpg"
              onClick={() => openInquiryDialog("15-Minute Care Cycle")}
            />
            
            <CareServiceCard
              icon={UserCheck}
              title="24/7 Health Companion"
              description="Your dedicated Care Manager, always available"
              features={[
                "Personal health advocate",
                "Round-the-clock support",
                "Emergency response"
              ]}
              backgroundImage="/src/assets/care-247-companion.jpg"
              onClick={() => openInquiryDialog("24/7 Health Companion")}
            />
            
            <div className="lg:col-span-2">
              <CareServiceCard
                icon={Heart}
                title="Personalized Care Plans"
                description="Tailored healthcare solutions designed for your unique needs"
                features={[
                  "Customized treatment protocols",
                  "Flexible subscription options",
                  "Family care coordination",
                  "Up to 65% cost savings"
                ]}
                backgroundImage="/src/assets/care-personalized-plan.jpg"
                onClick={() => openInquiryDialog("Care Plans Inquiry")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Complete Care Services - Glass Bento Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
              All Healthcare Services at Your Doorstep
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive care solutions delivered by your dedicated Care Manager
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <CareServiceCard
                icon={Stethoscope}
                title="Primary Care"
                description="Complete health assessments, screenings, and vaccinations at home"
                features={[
                  "Routine health checkups",
                  "Preventive screenings",
                  "Vaccination services",
                  "Health education"
                ]}
                featured={true}
                backgroundImage="/src/assets/care-manager-primary.jpg"
                onClick={() => openInquiryDialog("Primary Care")}
              />
            </div>
            
            <CareServiceCard
              icon={Activity}
              title="Chronic Disease Management"
              description="Specialized care for diabetes, hypertension, and cardiac conditions"
              features={[
                "Daily monitoring",
                "Medication management",
                "Lifestyle coaching"
              ]}
              backgroundImage="/src/assets/care-manager-chronic.jpg"
              onClick={() => openInquiryDialog("Chronic Disease Management")}
            />
            
            <CareServiceCard
              icon={AlertCircle}
              title="Acute Care"
              description="Immediate attention for sudden illnesses and infections"
              features={[
                "Rapid assessment",
                "On-site treatment",
                "Follow-up care"
              ]}
              backgroundImage="/src/assets/care-urgent.jpg"
              onClick={() => openInquiryDialog("Acute Care")}
            />
            
            <CareServiceCard
              icon={Calendar}
              title="Follow-Up Care"
              description="Post-surgery monitoring and recovery support"
              features={[
                "Wound care",
                "Progress tracking",
                "Complication prevention"
              ]}
              backgroundImage="/src/assets/care-followup.jpg"
              onClick={() => openInquiryDialog("Follow-Up Care")}
            />
            
            <CareServiceCard
              icon={Clock}
              title="Urgent Care"
              description="24/7 emergency response within 2 hours"
              features={[
                "Immediate response",
                "Emergency coordination",
                "Hospital liaison"
              ]}
              backgroundImage="/src/assets/care-urgent.jpg"
              gradientFrom="from-orange-500"
              gradientTo="to-red-500"
              onClick={() => openInquiryDialog("Urgent Care")}
            />
            
            <div className="lg:col-span-2">
              <CareServiceCard
                icon={Users}
                title="Specialty Coordination"
                description="Connect with specialists globally while Care Manager handles local logistics"
                features={[
                  "Virtual specialist consultations",
                  "Referral management",
                  "Sample collection & delivery",
                  "Unified health records"
                ]}
                backgroundImage="/src/assets/care-specialty.jpg"
                onClick={() => openInquiryDialog("Specialty Coordination")}
              />
            </div>
            
            <CareServiceCard
              icon={Heart}
              title="Wellness Programs"
              description="Prevention and lifestyle optimization"
              features={[
                "Fitness coaching",
                "Nutrition planning",
                "Mental health support"
              ]}
              backgroundImage="/src/assets/care-wellness.jpg"
              onClick={() => openInquiryDialog("Wellness Programs")}
            />
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            <div className="flex gap-4 px-4 min-w-max">
              <div className="w-[85vw] snap-center">
                <CareServiceCard
                  icon={Stethoscope}
                  title="Primary Care"
                  description="Complete health assessments, screenings, and vaccinations at home"
                  features={[
                    "Routine health checkups",
                    "Preventive screenings",
                    "Vaccination services",
                    "Health education"
                  ]}
                  backgroundImage="/src/assets/care-manager-primary.jpg"
                  onClick={() => openInquiryDialog("Primary Care")}
                />
              </div>
              <div className="w-[85vw] snap-center">
                <CareServiceCard
                  icon={Activity}
                  title="Chronic Disease Management"
                  description="Specialized care for diabetes, hypertension, and cardiac conditions"
                  features={[
                    "Daily monitoring",
                    "Medication management",
                    "Lifestyle coaching"
                  ]}
                  backgroundImage="/src/assets/care-manager-chronic.jpg"
                  onClick={() => openInquiryDialog("Chronic Disease Management")}
                />
              </div>
              <div className="w-[85vw] snap-center">
                <CareServiceCard
                  icon={AlertCircle}
                  title="Acute Care"
                  description="Immediate attention for sudden illnesses and infections"
                  features={[
                    "Rapid assessment",
                    "On-site treatment",
                    "Follow-up care"
                  ]}
                  backgroundImage="/src/assets/care-urgent.jpg"
                  onClick={() => openInquiryDialog("Acute Care")}
                />
              </div>
              <div className="w-[85vw] snap-center">
                <CareServiceCard
                  icon={Calendar}
                  title="Follow-Up Care"
                  description="Post-surgery monitoring and recovery support"
                  features={[
                    "Wound care",
                    "Progress tracking",
                    "Complication prevention"
                  ]}
                  backgroundImage="/src/assets/care-followup.jpg"
                  onClick={() => openInquiryDialog("Follow-Up Care")}
                />
              </div>
              <div className="w-[85vw] snap-center">
                <CareServiceCard
                  icon={Clock}
                  title="Urgent Care"
                  description="24/7 emergency response within 2 hours"
                  features={[
                    "Immediate response",
                    "Emergency coordination",
                    "Hospital liaison"
                  ]}
                  backgroundImage="/src/assets/care-urgent.jpg"
                  onClick={() => openInquiryDialog("Urgent Care")}
                />
              </div>
              <div className="w-[85vw] snap-center">
                <CareServiceCard
                  icon={Users}
                  title="Specialty Coordination"
                  description="Connect with specialists globally while Care Manager handles local logistics"
                  features={[
                    "Virtual specialist consultations",
                    "Referral management",
                    "Sample collection & delivery",
                    "Unified health records"
                  ]}
                  backgroundImage="/src/assets/care-specialty.jpg"
                  onClick={() => openInquiryDialog("Specialty Coordination")}
                />
              </div>
              <div className="w-[85vw] snap-center">
                <CareServiceCard
                  icon={Heart}
                  title="Wellness Programs"
                  description="Prevention and lifestyle optimization"
                  features={[
                    "Fitness coaching",
                    "Nutrition planning",
                    "Mental health support"
                  ]}
                  backgroundImage="/src/assets/care-wellness.jpg"
                  onClick={() => openInquiryDialog("Wellness Programs")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: How It Works */}
      <section className="py-20 bg-gradient-to-b from-background to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
              Three Simple Steps to Hospital-Grade Care
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop: 3-column grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              <div className="relative group overflow-hidden rounded-xl border-2 border-telth-teal/20 hover:border-telth-teal hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[4/5] relative">
                  <img src="/src/assets/app-booking-screen.jpg" alt="Book Visit" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Book Visit
                    </h3>
                    <p className="text-white/80 text-sm">
                      Schedule via app, web, or phone. Care Manager arrives at your preferred time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl border-2 border-telth-purple/20 hover:border-telth-purple hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[4/5] relative">
                  <img src="/src/assets/care-assessment.jpg" alt="15-Minute Assessment" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      15-Minute Assessment
                    </h3>
                    <p className="text-white/80 text-sm">
                      Complete health screening with real-time AI analysis at home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl border-2 border-telth-teal/20 hover:border-telth-teal hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[4/5] relative">
                  <img src="/src/assets/care-continuous.jpg" alt="Continuous Care" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Continuous Care
                    </h3>
                    <p className="text-white/80 text-sm">
                      Virtual consultations, monitoring, medication delivery, regular follow-ups.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Compact alternating timeline */}
            <div className="md:hidden space-y-6">
              <div className="flex items-start gap-4 odd:flex-row-reverse">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <div className="glass-card p-4 rounded-xl border border-telth-teal/20 flex-1">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                    <img src="/src/assets/app-booking-screen.jpg" alt="Book Visit" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
                    Book Visit
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule via app, web, or phone. Care Manager arrives at your preferred time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <div className="glass-card p-4 rounded-xl border border-telth-purple/20 flex-1">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                    <img src="/src/assets/care-assessment.jpg" alt="Assessment" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
                    15-Minute Assessment
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete health screening with real-time AI analysis at home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <div className="glass-card p-4 rounded-xl border border-telth-teal/20 flex-1">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                    <img src="/src/assets/care-continuous.jpg" alt="Continuous Care" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
                    Continuous Care
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Virtual consultations, monitoring, medication delivery, regular follow-ups.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button onClick={() => openInquiryDialog("Book Your Care Manager")} size="lg">
                Book Your Care Manager
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Your Care Manager */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[3/4] lg:aspect-[4/3] rounded-2xl overflow-hidden glass-card border-2 border-telth-purple/20">
                  <img 
                    src="/src/assets/care-manager-hero.jpg" 
                    alt="Your Care Manager"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-4 right-4 glass-card bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-telth-teal/30 animate-bounce">
                  <p className="text-sm font-bold text-telth-teal">24/7 Available</p>
                </div>
                <div className="absolute bottom-4 left-4 glass-card bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-telth-purple/30">
                  <p className="text-sm font-bold text-telth-purple">98% Satisfaction</p>
                </div>
                <div className="absolute top-1/2 right-4 glass-card bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-telth-teal/30">
                  <p className="text-sm font-bold text-telth-teal">200+ Patients</p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
                  Your 24/7 Health Companion
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  More than a healthcare worker—your Care Manager is your personal health partner, available round the clock, coordinating everything from doctor visits to emergency response.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <CareManagerFeatureCard icon={Phone} title="Available 24/7 for all health concerns" />
                  <CareManagerFeatureCard icon={Heart} title="Know your complete health history" />
                  <CareManagerFeatureCard icon={Calendar} title="Coordinate specialists and appointments" />
                  <CareManagerFeatureCard icon={Activity} title="Monitor your health data daily" />
                  <CareManagerFeatureCard icon={Pill} title="Manage medications and deliveries" />
                  <CareManagerFeatureCard icon={AlertTriangle} title="Handle emergencies immediately" />
                  <CareManagerFeatureCard icon={BookOpen} title="Provide health education and support" />
                  <CareManagerFeatureCard icon={Shield} title="Advocate for your best care" />
                </div>

                <Button onClick={() => openInquiryDialog("Assign My Care Manager")} size="lg">
                  Assign My Care Manager
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: IoMT Devices */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Advanced Monitoring Devices for Home
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Hospital-grade equipment that brings medical precision to your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <DeviceShowcaseCard
              icon={Smartphone}
              title="Smart Wearables"
              description="24/7 heart rate, oxygen, activity tracking with real-time sync to your Care Manager"
              features={[
                "Continuous vital monitoring",
                "Activity & sleep tracking",
                "Real-time alerts",
                "Automatic data sync"
              ]}
            />
            
            <DeviceShowcaseCard
              icon={Activity}
              title="Home Diagnostic Kit"
              description="Lab-quality glucose, blood pressure, temperature monitoring at home"
              features={[
                "51-parameter testing",
                "Instant lab-quality results",
                "ECG & blood analysis",
                "Temperature & BP monitoring"
              ]}
            />
          </div>

          <div className="max-w-3xl mx-auto glass-card bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center">
            <Database className="h-12 w-12 mx-auto mb-4 text-telth-teal" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Integrated with RootCloud™ EHR
            </h3>
            <p className="text-white/70">
              All devices connect seamlessly for continuous Care Manager monitoring and instant health insights
            </p>
          </div>
        </div>
      </section>

      {/* Remaining sections continue in similar modern bento style... */}
      
      {/* FAQ Section */}
      <CareHomeFAQ />

      {/* Floating CTA Bar */}
      <FloatingCTABar
        onBookClick={() => openInquiryDialog("Book Care Manager")}
        onEnquireClick={() => openInquiryDialog("Enquire Plans")}
      />

      {/* Inquiry Dialog */}
      <InquiryDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultInquiryType={selectedInquiryType}
        context="care-home"
      />
    </div>
  );
};
