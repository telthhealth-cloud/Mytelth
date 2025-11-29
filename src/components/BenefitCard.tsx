import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

export const BenefitCard = ({
  icon: Icon,
  title,
  description,
  featured = false,
}: BenefitCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-0 h-full hover:-translate-y-1 transition-all duration-500",
        featured && "lg:row-span-2"
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110">
        <div className="w-full h-full bg-gradient-to-br from-telth-teal/10 to-telth-purple/10 group-hover:from-telth-teal/20 group-hover:to-telth-purple/20" />
      </div>

      <CardContent className={cn(
        "relative z-10 flex flex-col justify-center h-full",
        featured ? "p-8 min-h-[350px]" : "p-6 min-h-[250px]"
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
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
