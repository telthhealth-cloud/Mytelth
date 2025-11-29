import { useState } from "react";
import { ScrollingHeroSection } from "../ScrollingHeroSection";
import { ComparisonCard } from "../ComparisonCard";
import { LocationCard } from "../LocationCard";
import { HubSelectionCard } from "../HubSelectionCard";
import { PillarGlassCard } from "../PillarGlassCard";
import { CircularFlowDiagram } from "../CircularFlowDiagram";
import { InquiryDialog } from "../InquiryDialog";
import { Button } from "../ui/button";
import careAssessmentImg from "@/assets/care-assessment.jpg";
import careContinuousImg from "@/assets/care-continuous.jpg";
import careWellnessImg from "@/assets/care-wellness.jpg";
import carePersonalizedImg from "@/assets/care-personalized-plan.jpg";
import heroCommunityImg from "@/assets/hero-community.jpg";
import care15minImg from "@/assets/care-15min-cycle.jpg";
import {
  Building2,
  Shield,
  Heart,
  DollarSign,
  Brain,
  Globe,
  Calendar,
  Zap,
  MapPin,
  Handshake,
  Store,
  Hospital,
  Stethoscope,
  HeartPulse,
  MessageCircle,
  Sparkles,
  Building,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Landmark,
} from "lucide-react";

export const CommunityTab = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedInquiryType, setSelectedInquiryType] = useState("");

  const openInquiryDialog = (inquiryType: string) => {
    setSelectedInquiryType(inquiryType);
    setDialogOpen(true);
  };

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <ScrollingHeroSection
        title="15 Days of Clinical Care in 15 Minutes"
        subtitle="Quantum-AI powered health hubs delivering comprehensive diagnostics, treatment, and care plans wherever you are—from urban centers to the most remote corners of the world"
        primaryCta="Bring Telth to Your Location"
        secondaryCta="Explore Franchise Opportunities"
        onPrimaryClick={() => openInquiryDialog("Request Hub for My Location")}
        onSecondaryClick={() => openInquiryDialog("Franchise Opportunity")}
      />

      {/* SECTION 1: 15-DAY TO 15-MINUTE REVOLUTION */}
      <ComparisonCard />

      {/* SECTION 2: HEALTHCARE EVERYWHERE */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Quantum-AI Hubs Wherever You Need Them
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bringing advanced precision care to every location, every community, every person
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Card 1 - Urban (Featured) */}
            <LocationCard
              imageSrc="/images/hub-locations/hospital.png"
              title="Urban Hospitals"
              hubType="Multispeciality AI Hub"
              capacity="200+ patients/day"
              services="Full multi-specialty care, surgical prep, emergency diagnostics"
              integration="Hospital EMR, specialist network"
              featured={true}
            />
            
            {/* Card 2 - Community */}
            <LocationCard
              imageSrc="/images/hub-locations/community-center.png"
              title="Community Centers"
              hubType="Advanced AI Hub"
              capacity="100-150 patients/day"
              services="Primary care, preventive screening, chronic disease management"
              integration="Local health programs, government schemes"
            />
            
            {/* Card 3 - Mall */}
            <LocationCard
              imageSrc="/images/hub-locations/mall-kiosk.jpg"
              title="Shopping Malls & Public Spaces"
              hubType="Basic AI Hub/Kiosk"
              capacity="50-75 patients/day"
              services="Walk-in diagnostics, health monitoring, vaccinations"
              integration="E-pharmacy, telemedicine"
            />
            
            {/* Card 4 - Remote & Mountain (Featured, spans 2 columns on lg) */}
            <div className="lg:col-span-2 lg:row-span-1">
              <LocationCard
                imageSrc="/images/hub-locations/remote-village.png"
                title="Remote & Mountain Areas"
                hubType="Telth ICU, Telth Advanced"
                capacity="30-60 patients/day"
                services="Mobile diagnostics, maternal care, infectious disease screening, emergency response"
                integration="Satellite connectivity, regional referral network"
                featured={true}
              />
            </div>
            
            {/* Card 5 - Corporate */}
            <LocationCard
              imageSrc="/images/hub-locations/corporate-wellness.jpg"
              title="Corporate Offices"
              hubType="Workplace Wellness Hub"
              capacity="80-100 employees/day"
              services="Annual checkups, preventive care, occupational health"
              integration="Corporate wellness programs, insurance"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-lg max-w-4xl mx-auto">
              From metro cities to mountain villages, from hospitals to homes—Telth Quantum-AI Hubs
              bring world-class care within 15 minutes of everyone
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: HUB SELECTION */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-telth-gray-50">
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-telth-navy">
              Choose the Right Hub for Your Community's Need
            </h2>
            <p className="text-xl text-telth-gray-400 max-w-3xl mx-auto">
              From basic care to critical ICU monitoring, Telth offers quantum-AI powered solutions for every healthcare need
            </p>
          </div>

          {/* Hub Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <HubSelectionCard
              icon={Store}
              title="Basic"
              subtitle="Quantum AI Clinic Hub"
              bestFor="Shopping malls, pharmacies, small towns, franchises"
              capacity="50-75 patients per day"
              keyFeatures={[
                "50+ diagnostic parameters",
                "Walk-in care & health monitoring",
                "Vaccinations & preventive screening",
                "AI-powered health insights",
                "Telemedicine integration"
              ]}
            />
            <HubSelectionCard
              icon={Hospital}
              title="Advanced"
              subtitle="Quantum AI Clinic Hub"
              bestFor="Community centers, clinics, tier-2 cities, small hospitals"
              capacity="100-150 patients per day"
              keyFeatures={[
                "70+ diagnostic parameters",
                "Primary care & chronic disease management",
                "Multi-specialty consultations",
                "Advanced imaging capabilities",
                "Preventive screening programs"
              ]}
              highlight={true}
            />
            <HubSelectionCard
              icon={Stethoscope}
              title="Multispeciality"
              subtitle="Quantum AI Clinic Hub"
              bestFor="Hospitals, large medical centers, metro cities"
              capacity="200+ patients per day"
              keyFeatures={[
                "90+ diagnostic parameters",
                "Full multi-specialty care",
                "Surgical prep & emergency diagnostics",
                "Advanced biochemical analysis",
                "Comprehensive EMR integration"
              ]}
            />
            <HubSelectionCard
              icon={HeartPulse}
              title="AI ICU Plus"
              subtitle="Critical Care Hub"
              bestFor="Advanced hospitals, critical care centers, specialty clinics"
              capacity="ICU monitoring + 150 patients per day"
              keyFeatures={[
                "90+ parameters + ICU monitoring",
                "Critical care AI predictions",
                "Real-time patient monitoring",
                "Emergency response systems",
                "Specialist network integration"
              ]}
            />
          </div>

          {/* Bottom CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-elegant">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-r from-telth-purple via-telth-teal to-telth-purple bg-[length:200%_100%] animate-border-flow -z-10">
                <div className="h-full w-full rounded-3xl bg-white" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-telth-coral to-telth-coral-light flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-telth-navy">
                  Ready to Bring Telth to Your Community?
                </h3>
                
                <p className="text-lg text-telth-gray-400 max-w-2xl mx-auto">
                  Our team will help you select the perfect hub configuration, understand investment options, and plan deployment for your specific needs.
                </p>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  onClick={() => openInquiryDialog("Request More Information")}
                  className="bg-gradient-to-r from-telth-teal to-telth-purple text-white hover:scale-105 transition-transform text-lg px-12 py-6 rounded-full shadow-lg"
                >
                  Request More Information
                  <span className="ml-2">→</span>
                </Button>

                {/* Additional info */}
                <p className="text-sm text-telth-gray-400">
                  All configurations include P3DSC™ AI system, G-Med ID™ integration, RootCloud™ EMR, T-Pay, and comprehensive training
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SIX PILLARS - GLASS MORPHISM BENTO GRID */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-muted to-background">
        {/* Background pattern (subtle) */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern" />

        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Six Pillars of Quantum-AI Healthcare Delivery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary care delivery built on precision, prevention, and accessibility
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Pillar 1 - Featured (larger) */}
            <div className="lg:row-span-2">
              <PillarGlassCard
                icon={Shield}
                title="Preventive Care First"
                description="Detect health risks before symptoms appear with quantum-AI analyzing 90+ parameters."
                features={[
                  "Health risk prediction (20 years ahead)",
                  "Genetic screening & lifestyle analysis",
                  "Vaccination & wellness programs",
                ]}
                impact="Prevent 70% of chronic diseases"
                featured={true}
                image={careAssessmentImg}
              />
            </div>
            
            {/* Pillar 2 */}
            <PillarGlassCard
              icon={Heart}
              title="Primary Care Excellence"
              description="Complete primary healthcare in 15 minutes—from acute care to chronic disease management."
              features={[
                "Acute & chronic disease care",
                "Maternal, child & geriatric health",
                "Mental health & minor procedures",
              ]}
              impact="90% of health needs resolved locally"
              image={careContinuousImg}
            />
            
            {/* Pillar 3 */}
            <PillarGlassCard
              icon={DollarSign}
              title="Cost Revolution"
              description="65% reduction in healthcare costs through efficiency, prevention, and precision."
              features={[
                "One visit, complete care (₹1,500-3,500 vs ₹5,000-10,000)",
                "Prevent expensive hospitalizations",
                "Lower insurance premiums",
              ]}
              impact="₹1 lakh saved per family annually"
              image={careWellnessImg}
            />
            
            {/* Pillar 4 */}
            <PillarGlassCard
              icon={Brain}
              title="Predictive Analytics"
              description="P3DSC™ Quantum-AI predicts your health trajectory for the next 20 years."
              features={[
                "Disease onset probability & intervention timelines",
                "Personalized medication responses",
                "Lifestyle impact modeling",
              ]}
              impact="Know your future, change your outcomes"
              image={carePersonalizedImg}
            />
            
            {/* Pillar 5 - Featured (spans 2 columns) */}
            <div className="lg:col-span-2">
              <PillarGlassCard
                icon={Globe}
                title="Connected to Global Care"
                description="Your Telth care plan works anywhere in our global network with G-Med ID™ continuity."
                features={[
                  "USA Network: Johns Hopkins, leading medical centers",
                  "UK Network: NHS integration, specialist partnerships",
                  "India Network: IIT research hubs, national health mission",
                  "Global telemedicine & treatment continuity",
                ]}
                impact="Seamless care from Mumbai to London to New York"
                featured={true}
                image={heroCommunityImg}
              />
            </div>
            
            {/* Pillar 6 */}
            <PillarGlassCard
              icon={Calendar}
              title="Routine Checkup Made Easy"
              description="Annual health checkups in 15 minutes with comprehensive screening and instant results."
              features={[
                "90+ parameters analyzed instantly",
                "Year-on-year health tracking",
                "Personalized health reports",
              ]}
              impact="15 minutes vs 15 days for complete checkup"
              image={care15minImg}
            />
          </div>
        </div>
      </section>


      {/* SECTION 6: FRANCHISE & PARTNERSHIP - Dual Path Design */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-16">
        
        {/* Section Hero */}
        <div className="container text-center py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-telth-teal/10 border border-telth-teal/20 text-telth-teal mb-6 animate-pulse-ring">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Limited Territories Available</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Join the Healthcare Revolution
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Whether you're building a business or serving your community, 
            Telth provides the quantum-AI platform to deliver world-class healthcare
          </p>
          
          {/* Scroll indicators */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-telth-teal">
              <Building className="h-5 w-5" />
              <span>Franchise Opportunity</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
            <div className="hidden sm:block w-px bg-border" />
            <div className="flex items-center gap-2 text-telth-coral">
              <Heart className="h-5 w-5" />
              <span>Community Partnership</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Dual Path Cards */}
        <div className="container px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* LEFT CARD: FRANCHISE */}
            <div className="relative group min-h-[600px]">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-telth-teal via-telth-purple to-telth-teal bg-[length:200%_100%] animate-border-flow">
                <div className="h-full w-full rounded-3xl bg-background" />
              </div>
              
              {/* Card content */}
              <div className="relative z-10 p-8 lg:p-12 space-y-6 h-full flex flex-col">
                
                {/* Header */}
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center shadow-elegant">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
                    Franchise Opportunity
                  </h3>
                  
                  <p className="text-lg text-muted-foreground">
                    Build a thriving healthcare business with proven systems, 
                    comprehensive support, and exceptional ROI
                  </p>
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-telth-teal/5 rounded-xl p-4 border border-telth-teal/20 hover:bg-telth-teal/10 transition-all">
                    <div className="text-2xl font-bold text-telth-teal">8-24 mo</div>
                    <div className="text-sm text-muted-foreground">ROI Timeline</div>
                  </div>
                  <div className="bg-telth-purple/5 rounded-xl p-4 border border-telth-purple/20 hover:bg-telth-purple/10 transition-all">
                    <div className="text-2xl font-bold text-telth-purple">10x</div>
                    <div className="text-sm text-muted-foreground">5-Year Growth</div>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="space-y-3 flex-grow">
                  <h4 className="font-semibold text-lg">What You Get:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-telth-teal flex-shrink-0" />
                      <span className="text-sm">60% revenue share model</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-telth-teal flex-shrink-0" />
                      <span className="text-sm">Complete training & support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-telth-teal flex-shrink-0" />
                      <span className="text-sm">Proven operational playbook</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-telth-teal flex-shrink-0" />
                      <span className="text-sm">Marketing & tech platform</span>
                    </div>
                  </div>
                </div>
                
                {/* Investment Range */}
                <div className="bg-muted/50 rounded-xl p-4 space-y-2 border border-border">
                  <h4 className="font-semibold text-sm text-muted-foreground">Investment Range:</h4>
                  <div className="text-lg font-bold text-foreground">₹25L - ₹149L</div>
                  <p className="text-xs text-muted-foreground">
                    Multiple hub configurations available
                  </p>
                </div>
                
                {/* CTA */}
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    onClick={() => openInquiryDialog("Franchise Opportunity")}
                    className="w-full bg-gradient-to-r from-telth-teal to-telth-purple text-white hover:scale-105 transition-transform shadow-elegant"
                  >
                    Apply for Franchise
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Limited territories available • First-mover advantage
                  </p>
                </div>
              </div>
            </div>
            
            {/* RIGHT CARD: COMMUNITY PARTNERSHIP */}
            <div className="relative group min-h-[600px]">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-telth-coral via-telth-coral-light to-telth-coral bg-[length:200%_100%] animate-border-flow">
                <div className="h-full w-full rounded-3xl bg-background" />
              </div>
              
              {/* Card content */}
              <div className="relative z-10 p-8 lg:p-12 space-y-6 h-full flex flex-col">
                
                {/* Header */}
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-telth-coral to-telth-coral-light flex items-center justify-center shadow-elegant">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-telth-coral to-telth-coral-light bg-clip-text text-transparent">
                    Community Partnership
                  </h3>
                  
                  <p className="text-lg text-muted-foreground">
                    Bring world-class healthcare to your village, campus, 
                    or underserved community
                  </p>
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-telth-coral/5 rounded-xl p-4 border border-telth-coral/20 hover:bg-telth-coral/10 transition-all">
                    <div className="text-2xl font-bold text-telth-coral">5,000+</div>
                    <div className="text-sm text-muted-foreground">Lives Served/Hub</div>
                  </div>
                  <div className="bg-telth-coral/5 rounded-xl p-4 border border-telth-coral/20 hover:bg-telth-coral/10 transition-all">
                    <div className="text-2xl font-bold text-telth-coral">65%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                </div>
                
                {/* Partnership Models */}
                <div className="space-y-3 flex-grow">
                  <h4 className="font-semibold text-lg">Partnership Models:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-telth-coral flex-shrink-0" />
                      <span className="text-sm">CSR-Funded (Tax benefits)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Landmark className="h-4 w-4 text-telth-coral flex-shrink-0" />
                      <span className="text-sm">Government PPP (Ayushman)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-telth-coral flex-shrink-0" />
                      <span className="text-sm">NGO Collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Handshake className="h-4 w-4 text-telth-coral flex-shrink-0" />
                      <span className="text-sm">Community Co-operative</span>
                    </div>
                  </div>
                </div>
                
                {/* Who This Is For */}
                <div className="bg-muted/50 rounded-xl p-4 space-y-2 border border-border">
                  <h4 className="font-semibold text-sm text-muted-foreground">Perfect For:</h4>
                  <p className="text-sm text-foreground">
                    Village leaders • Corporate CSR • Universities • 
                    NGOs • Mountain regions
                  </p>
                </div>
                
                {/* CTA */}
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => openInquiryDialog("Community Partnership (CSR/Government)")}
                    className="w-full border-2 border-telth-coral text-telth-coral hover:bg-telth-coral hover:text-white transition-all shadow-card"
                  >
                    Request Hub for Your Community
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    We work with you to find the right funding model
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </section>

      {/* SECTION 7: FLOWING WELLNESS JOURNEY */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-sky-50/30 via-white to-emerald-50/20">
        {/* Floating background orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              From Prevention to Lifelong Wellness
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your complete health journey, guided by Quantum-AI at every stage
            </p>
          </div>

          {/* Flowing Timeline - Desktop */}
          <div className="hidden lg:block relative">
            {/* Flowing wave path */}
            <svg className="absolute top-32 left-0 w-full h-2" viewBox="0 0 1200 8" preserveAspectRatio="none">
              <path
                d="M 0 4 Q 200 0, 400 4 T 800 4 T 1200 4"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8 8"
                opacity="0.3"
                className="animate-dash-flow"
              />
            </svg>

            {/* Stage Cards - Flowing Layout */}
            <div className="relative grid grid-cols-3 gap-8 pt-8">
              {/* Stage 1 - Prevention */}
              <div className="transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                <div className="glass-card rounded-3xl p-8 bg-gradient-to-br from-sky-50 to-sky-100/50 border-2 border-sky-200/50 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-sky-700 mb-1">Prevention</h3>
                      <p className="text-sm text-sky-600/80">Detect risks before symptoms appear</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">Health Screening</span>
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">Risk Assessment</span>
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">Lifestyle Counseling</span>
                  </div>
                </div>
              </div>

              {/* Stage 2 - Early Detection */}
              <div className="transform hover:scale-105 transition-all duration-300 hover:-translate-y-2 mt-12">
                <div className="glass-card rounded-3xl p-8 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200/50 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-emerald-700 mb-1">Early Detection</h3>
                      <p className="text-sm text-emerald-600/80">90+ parameter diagnostics</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">AI Analysis</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">20-Year Prediction</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Symptom Monitoring</span>
                  </div>
                </div>
              </div>

              {/* Stage 3 - Primary Care */}
              <div className="transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                <div className="glass-card rounded-3xl p-8 bg-gradient-to-br from-teal-50 to-teal-100/50 border-2 border-teal-200/50 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-teal-700 mb-1">Primary Care</h3>
                      <p className="text-sm text-teal-600/80">Comprehensive treatment plans</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Acute Care</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Chronic Management</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Mental Health</span>
                  </div>
                </div>
              </div>

              {/* Stage 4 - Specialist Care */}
              <div className="transform hover:scale-105 transition-all duration-300 hover:-translate-y-2 mt-16">
                <div className="glass-card rounded-3xl p-8 bg-gradient-to-br from-cyan-50 to-cyan-100/50 border-2 border-cyan-200/50 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-cyan-700 mb-1">Specialist Care</h3>
                      <p className="text-sm text-cyan-600/80">Global expert network access</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">Telemedicine</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">USA/UK/India</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">Second Opinion</span>
                  </div>
                </div>
              </div>

              {/* Stage 5 - Monitoring */}
              <div className="transform hover:scale-105 transition-all duration-300 hover:-translate-y-2 mt-8">
                <div className="glass-card rounded-3xl p-8 bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-2 border-indigo-200/50 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-indigo-700 mb-1">Continuous Monitoring</h3>
                      <p className="text-sm text-indigo-600/80">IoMT-powered health tracking</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">IoMT Devices</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Care@Home</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">AI Alerts</span>
                  </div>
                </div>
              </div>

              {/* Stage 6 - Wellness Plans */}
              <div className="transform hover:scale-105 transition-all duration-300 hover:-translate-y-2 mt-20">
                <div className="glass-card rounded-3xl p-8 bg-gradient-to-br from-violet-50 to-violet-100/50 border-2 border-violet-200/50 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-violet-700 mb-1">Wellness Plans</h3>
                      <p className="text-sm text-violet-600/80">Personalized lifelong health</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">Health Plans</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">Family Coverage</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">Global Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet - Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto pb-8 -mx-4 px-4">
            <div className="flex gap-6 min-w-max">
              {/* Same cards as above but in horizontal layout */}
              <div className="w-80 transform hover:scale-105 transition-all duration-300">
                <div className="glass-card rounded-3xl p-6 bg-gradient-to-br from-sky-50 to-sky-100/50 border-2 border-sky-200/50 shadow-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center text-white font-bold shadow-md">1</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-sky-700">Prevention</h3>
                      <p className="text-xs text-sky-600/80">Detect risks early</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-sky-100 text-sky-700 rounded-full text-xs">Screening</span>
                    <span className="px-2 py-1 bg-sky-100 text-sky-700 rounded-full text-xs">Assessment</span>
                  </div>
                </div>
              </div>

              <div className="w-80 transform hover:scale-105 transition-all duration-300">
                <div className="glass-card rounded-3xl p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200/50 shadow-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white font-bold shadow-md">2</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-emerald-700">Early Detection</h3>
                      <p className="text-xs text-emerald-600/80">90+ parameters</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">AI Analysis</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">Prediction</span>
                  </div>
                </div>
              </div>

              <div className="w-80 transform hover:scale-105 transition-all duration-300">
                <div className="glass-card rounded-3xl p-6 bg-gradient-to-br from-teal-50 to-teal-100/50 border-2 border-teal-200/50 shadow-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-md">3</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-teal-700">Primary Care</h3>
                      <p className="text-xs text-teal-600/80">Complete treatment</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Acute Care</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Chronic Mgmt</span>
                  </div>
                </div>
              </div>

              <div className="w-80 transform hover:scale-105 transition-all duration-300">
                <div className="glass-card rounded-3xl p-6 bg-gradient-to-br from-cyan-50 to-cyan-100/50 border-2 border-cyan-200/50 shadow-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md">4</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-cyan-700">Specialist Care</h3>
                      <p className="text-xs text-cyan-600/80">Global experts</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs">Telemedicine</span>
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs">USA/UK/India</span>
                  </div>
                </div>
              </div>

              <div className="w-80 transform hover:scale-105 transition-all duration-300">
                <div className="glass-card rounded-3xl p-6 bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-2 border-indigo-200/50 shadow-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md">5</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-indigo-700">Monitoring</h3>
                      <p className="text-xs text-indigo-600/80">Continuous tracking</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">IoMT Devices</span>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">AI Alerts</span>
                  </div>
                </div>
              </div>

              <div className="w-80 transform hover:scale-105 transition-all duration-300">
                <div className="glass-card rounded-3xl p-6 bg-gradient-to-br from-violet-50 to-violet-100/50 border-2 border-violet-200/50 shadow-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center text-white font-bold shadow-md">6</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-violet-700">Wellness Plans</h3>
                      <p className="text-xs text-violet-600/80">Lifelong health</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-xs">Health Plans</span>
                    <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-xs">Global Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Telth Quantum-AI Hubs are your entry point to a complete, connected, global healthcare
              ecosystem. Start with a 15-minute visit, stay healthy for life.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[#003C71] text-white py-20">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Bring 15-Minute Healthcare to Your Community?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Whether you want to visit a hub, bring one to your location, or become a franchise
            partner—Telth makes quantum-AI healthcare accessible to everyone, everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              onClick={() => openInquiryDialog("Request Hub for My Location")}
              className="text-lg px-8 py-6 h-auto"
            >
              Request Telth for My Location
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => openInquiryDialog("Franchise Opportunity")}
              className="text-lg px-8 py-6 h-auto bg-white text-[#003C71] hover:bg-white/90 border-0"
            >
              Apply for Franchise Partnership
            </Button>
          </div>

          <div className="pt-8 text-sm text-white/80">
            <p className="mb-2">Questions? Contact our partnerships team:</p>
            <p>
              📧 info@mytelth.com | 📞 1800-570-0140 (India Toll-Free)
            </p>
          </div>
        </div>
      </section>

      {/* INQUIRY DIALOG */}
      <InquiryDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultInquiryType={selectedInquiryType}
      />
    </div>
  );
};
