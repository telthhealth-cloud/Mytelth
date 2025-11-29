import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CarePlanCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  recommended?: boolean;
  onEnquire: () => void;
}

export const CarePlanCard = ({
  icon: Icon,
  title,
  features,
  recommended = false,
  onEnquire,
}: CarePlanCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-2 h-full transition-all duration-500",
        recommended
          ? "border-telth-purple shadow-elegant lg:-translate-y-2 bg-gradient-to-br from-telth-purple/5 to-telth-teal/5"
          : "border-border hover:border-telth-purple/50 hover:-translate-y-1"
      )}
    >
      {/* Recommended badge */}
      {recommended && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-telth-teal to-telth-purple text-white text-xs font-bold px-3 py-1 rounded-full">
            Recommended
          </div>
        </div>
      )}

      {/* Animated gradient border effect */}
      {recommended && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-telth-teal via-telth-purple to-telth-teal bg-[length:200%_100%] animate-border-flow opacity-20" />
        </div>
      )}

      <CardContent className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent mb-6">
          {title}
        </h3>

        {/* Features */}
        <div className="space-y-3 mb-8 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-telth-teal" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={onEnquire}
          variant={recommended ? "default" : "outline"}
          className="w-full"
        >
          Enquire Pricing
        </Button>
      </CardContent>
    </Card>
  );
};
