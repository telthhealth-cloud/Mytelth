import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PillarGlassCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  impact: string;
  featured?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  image?: string;
}

export const PillarGlassCard = ({
  icon: Icon,
  title,
  description,
  features,
  impact,
  featured = false,
  gradientFrom = "from-telth-teal",
  gradientTo = "to-telth-purple",
  image,
}: PillarGlassCardProps) => {
  return (
    <Card className={cn(
      "group relative overflow-hidden border-0 h-full",
      featured && "lg:row-span-2"
    )}>
      {/* Background image or gradient */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        {image ? (
          <>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Darker overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/95 group-hover:from-background/85 group-hover:via-background/80 group-hover:to-background/90 transition-colors duration-500" />
          </>
        ) : (
          <>
            <div className={`w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-10`} />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90 group-hover:from-background/75 group-hover:via-background/65 group-hover:to-background/85 transition-colors duration-500" />
          </>
        )}
      </div>

      {/* Content */}
      <CardContent className={cn(
        "relative z-10 flex flex-col justify-end h-full",
        featured ? "min-h-[500px] p-8" : "min-h-[400px] p-6"
      )}>
        <div className="space-y-4 backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:-translate-y-1">
          
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center mb-4">
            <Icon className="h-8 w-8 text-white" strokeWidth={2} />
          </div>

          {/* Title */}
          <h3 className={cn(
            "font-bold bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent",
            featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
          )}>
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-telth-teal" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Impact */}
          <div className="pt-3 border-t border-white/20">
            <p className="text-sm font-bold text-telth-purple">{impact}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
