import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MonitoringFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  featured?: boolean;
  stat?: string;
}

export const MonitoringFeatureCard = ({
  icon: Icon,
  title,
  description,
  features,
  featured = false,
  stat,
}: MonitoringFeatureCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-0 h-full",
        featured && "lg:row-span-2"
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <div className="w-full h-full bg-gradient-to-br from-telth-teal/10 to-telth-purple/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>

      <CardContent className={cn(
        "relative z-10 flex flex-col h-full",
        featured ? "p-8 min-h-[400px]" : "p-6 min-h-[250px]"
      )}>
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className={cn(
          "font-bold bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent mb-3",
          featured ? "text-2xl" : "text-xl"
        )}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Stat */}
        {stat && (
          <div className="mb-4 p-3 rounded-lg glass-card border border-telth-purple/20">
            <p className="text-lg font-bold text-telth-purple">{stat}</p>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="space-y-2 mt-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-telth-teal" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
