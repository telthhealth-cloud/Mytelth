import { LucideIcon } from "lucide-react";

interface EmergencyFeatureCardProps {
  icon: LucideIcon;
  title: string;
  step?: number;
}

export const EmergencyFeatureCard = ({
  icon: Icon,
  title,
  step,
}: EmergencyFeatureCardProps) => {
  return (
    <div className="relative group">
      {/* Step number */}
      {step && (
        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg">
          {step}
        </div>
      )}

      {/* Card */}
      <div className="glass-card bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          <p className="text-white font-semibold text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};
