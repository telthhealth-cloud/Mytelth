import { Calendar, Clock, AlertCircle, CheckCircle, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const OldWayCard = () => (
  <div className="animate-slide-in-left">
    <div className="relative bg-white border-2 border-gray-300 rounded-3xl p-8 opacity-80 hover:opacity-90 transition-opacity">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="h-8 w-8 text-gray-400" />
        <div>
          <h3 className="text-3xl font-bold text-gray-600">The Old Way</h3>
          <Badge variant="destructive" className="mt-2">15+ Days</Badge>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {[
          "Day 1: Initial consultation (2 hours)",
          "Day 3-4: Lab test appointment (3 hours)",
          "Day 5-7: Wait for lab results (48-72 hours)",
          "Day 8: Follow-up consultation (2 hours)",
          "Day 10-12: Specialist referral (4 hours)",
          "Day 13-14: Additional tests (3 hours)",
          "Day 15: Treatment plan finalized (2 hours)",
        ].map((step, index) => (
          <div key={index} className="flex items-start gap-3 text-gray-600">
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-telth-red" />
            <span className="text-sm leading-relaxed">{step}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-6 space-y-3 text-sm">
        <p className="text-gray-700">
          <strong>Time:</strong> 15+ days of back-and-forth
        </p>
        <p className="text-gray-700">
          <strong>Cost:</strong> Multiple visits, transportation, lost work days
        </p>
        <p className="text-telth-red font-semibold">
          <strong>Outcome:</strong> Delayed treatment, patient frustration
        </p>
      </div>
    </div>
  </div>
);

const TelthWayCard = () => (
  <div className="animate-slide-in-right">
    <div className="relative bg-white rounded-3xl p-8 overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-telth-teal/10 via-telth-purple/10 to-telth-teal/10 -z-10" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="h-8 w-8 text-telth-teal" />
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
              The Telth Way
            </h3>
            <Badge className="mt-2 bg-telth-teal text-white border-0">15 Minutes</Badge>
          </div>
        </div>

        <div className="space-y-5 mb-8">
          {[
            "Minute 1-5: Comprehensive health screening (90+ parameters)",
            "Minute 6-10: AI-powered analysis via P3DSC™",
            "Minute 11-13: Doctor consultation with complete data",
            "Minute 14-15: Treatment plan + prescriptions + care plan",
          ].map((step, index) => (
            <div key={index} className="relative flex items-start gap-4 group/step">
              <div className="flex-1 bg-gradient-to-r from-telth-teal/5 to-telth-purple/5 rounded-xl p-4 group-hover/step:from-telth-teal/10 group-hover/step:to-telth-purple/10 transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-telth-teal" />
                  <span className="text-sm leading-relaxed text-telth-navy">{step}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-telth-teal/10 to-telth-purple/10 p-6 space-y-3 text-sm">
          <p className="text-telth-teal font-semibold">
            <strong>Time:</strong> 15 minutes total
          </p>
          <p className="text-telth-teal font-semibold">
            <strong>Cost:</strong> Single visit, one payment, no waiting
          </p>
          <p className="text-telth-purple font-bold">
            <strong>Outcome:</strong> Immediate treatment, complete care plan
          </p>
        </div>
      </div>
    </div>
  </div>
);

const VsBadge = () => (
  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    <div className="relative w-16 h-16 animate-pulse-ring">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-telth-coral to-telth-coral-light opacity-20 blur-md" />
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-telth-coral to-telth-coral-light border-4 border-white flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xl">VS</span>
      </div>
    </div>
  </div>
);

const ImpactStatsCard = () => (
  <div className="max-w-5xl mx-auto">
    <div className="relative bg-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-elegant">
      <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-r from-telth-purple via-telth-teal to-telth-purple bg-[length:200%_100%] animate-border-flow -z-10">
        <div className="h-full w-full rounded-3xl bg-white" />
      </div>

      <div className="relative z-10">
        <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-telth-coral to-telth-coral-light flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-telth-navy">The Transformation</h3>
            <p className="text-sm text-telth-gray-400 leading-relaxed">
              See how Telth's P3DSC™ technology revolutionizes healthcare delivery
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple opacity-10 animate-pulse-ring" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple opacity-20 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
              
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex flex-col items-center justify-center shadow-2xl">
                <div className="text-6xl font-bold text-white">99%</div>
                <div className="text-sm text-white/90 font-medium">Time Reduction</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold text-telth-teal">15 Days → 15 Min</div>
              <div className="text-xs text-telth-gray-400 mt-1">Average care cycle time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-telth-purple">65% Cost ↓</div>
              <div className="text-xs text-telth-gray-400 mt-1">Reduction in healthcare expenses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-telth-coral">90+ Tests</div>
              <div className="text-xs text-telth-gray-400 mt-1">In a single 15-minute session</div>
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-8">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-telth-coral to-telth-coral-light flex items-center justify-center mx-auto">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-telth-navy">The Transformation</h3>
            <p className="text-sm text-telth-gray-400">
              See how Telth's P3DSC™ technology revolutionizes healthcare delivery
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple opacity-10 animate-pulse-ring" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex flex-col items-center justify-center shadow-2xl">
                <div className="text-4xl font-bold text-white">99%</div>
                <div className="text-xs text-white/90">Time Reduction</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-telth-teal">15 Days → 15 Min</div>
              <div className="text-xs text-telth-gray-400 mt-1">Average care cycle time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-telth-purple">65% Cost ↓</div>
              <div className="text-xs text-telth-gray-400 mt-1">Reduction in expenses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-telth-coral">90+ Tests</div>
              <div className="text-xs text-telth-gray-400 mt-1">In 15-minute session</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-telth-teal to-telth-purple text-white hover:scale-105 transition-transform text-lg px-10 py-6 rounded-full shadow-lg border-0"
          >
            Experience Telth Care
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export const ComparisonCard = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-telth-gray-50 to-teal-50">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #00A896 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-telth-navy">
            Transforming Healthcare Delivery
          </h2>
          <p className="text-xl text-telth-gray-400 max-w-2xl mx-auto">
            From weeks of waiting to minutes of care
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
            <OldWayCard />
            <VsBadge />
            <TelthWayCard />
          </div>
        </div>

        <ImpactStatsCard />
      </div>
    </section>
  );
};
