import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";

interface DeviceShowcaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const DeviceShowcaseCard = ({
  icon: Icon,
  title,
  description,
  features,
}: DeviceShowcaseCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 h-full">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-telth-teal/20 to-telth-purple/20 blur-xl" />
      </div>

      <CardContent className="relative z-10 p-8 flex flex-col h-full">
        {/* Icon/Device Visual */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Icon className="h-12 w-12 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-sm mb-6 text-center leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3 mt-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-telth-teal" />
              <span className="text-sm text-white/70">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
