import { LucideIcon, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface HubSelectionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  bestFor: string;
  capacity: string;
  keyFeatures: string[];
  highlight?: boolean;
}

export const HubSelectionCard = ({
  icon: Icon,
  title,
  subtitle,
  bestFor,
  capacity,
  keyFeatures,
  highlight = false,
}: HubSelectionCardProps) => {
  return (
    <div className="animate-fade-in h-full">
      <div className={cn(
        "relative bg-white rounded-3xl p-8 h-full flex flex-col overflow-hidden transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-2xl group"
      )}>
        {/* Animated gradient border */}
        <div className={cn(
          "absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-r from-telth-teal via-telth-purple to-telth-teal bg-[length:200%_100%] animate-border-flow -z-10",
          highlight && "from-telth-coral via-telth-purple to-telth-coral"
        )}>
          <div className="h-full w-full rounded-3xl bg-white" />
        </div>

        {/* Glow effect on hover */}
        <div className={cn(
          "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20",
          highlight ? "bg-telth-coral/10 animate-glow-pulse" : "bg-telth-teal/10 animate-glow-pulse"
        )} />

        {/* Highlight badge */}
        {highlight && (
          <div className="absolute top-6 right-6 bg-gradient-to-r from-telth-coral to-telth-coral-light text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Recommended
          </div>
        )}

        {/* Icon with gradient background */}
        <div className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",
          highlight 
            ? "bg-gradient-to-br from-telth-coral to-telth-coral-light" 
            : "bg-gradient-to-br from-telth-teal to-telth-purple"
        )}>
          <Icon className="h-10 w-10 text-white" />
        </div>

        {/* Title with gradient text */}
        <h3 className={cn(
          "text-2xl font-bold text-center mb-2 bg-gradient-to-r bg-clip-text text-transparent",
          highlight 
            ? "from-telth-coral to-telth-coral-light" 
            : "from-telth-teal to-telth-purple"
        )}>
          {title}
        </h3>

        {/* Subtitle badge */}
        <div className="flex justify-center mb-6">
          <span className={cn(
            "text-sm font-medium px-3 py-1 rounded-full",
            highlight 
              ? "bg-telth-coral/10 text-telth-coral" 
              : "bg-telth-purple/10 text-telth-purple"
          )}>
            {subtitle}
          </span>
        </div>

        {/* Content section */}
        <div className="space-y-4 flex-1">
          {/* Best For */}
          <div>
            <p className="text-xs font-semibold text-telth-gray-400 uppercase tracking-wider mb-1">
              Best For
            </p>
            <p className="text-sm text-telth-navy leading-relaxed">
              {bestFor}
            </p>
          </div>

          {/* Capacity */}
          <div>
            <p className="text-xs font-semibold text-telth-gray-400 uppercase tracking-wider mb-1">
              Daily Capacity
            </p>
            <p className="text-sm font-semibold text-telth-teal">
              {capacity}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <p className="text-xs font-semibold text-telth-gray-400 uppercase tracking-wider mb-2">
              Key Features
            </p>
            <ul className="space-y-2">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-telth-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-telth-navy leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
