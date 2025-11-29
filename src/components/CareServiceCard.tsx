import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CareServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  featured?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  onClick?: () => void;
  backgroundImage?: string;
}

export const CareServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  featured = false,
  gradientFrom = "from-telth-teal",
  gradientTo = "to-telth-purple",
  onClick,
  backgroundImage,
}: CareServiceCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-2 border-transparent h-full cursor-pointer transition-all duration-500",
        "hover:border-telth-purple hover:-translate-y-1 hover:shadow-elegant",
        featured && "lg:col-span-2 lg:row-span-2"
      )}
      onClick={onClick}
    >
      {/* Background image with overlay or gradient */}
      <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110">
        {backgroundImage ? (
          <>
            <img 
              src={backgroundImage} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-5 group-hover:opacity-10`} />
        )}
      </div>

      {/* Content */}
      <CardContent className={cn(
        "relative z-10 flex flex-col h-full",
        featured ? "p-8 min-h-[400px]" : "p-6 min-h-[300px]"
      )}>
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className={cn(
          "font-bold bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent mb-3",
          featured ? "text-2xl lg:text-3xl" : "text-xl"
        )}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-2 mt-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-telth-teal" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
