import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface TechPlatformCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

export const TechPlatformCard = ({
  icon: Icon,
  title,
  description,
  featured = false,
}: TechPlatformCardProps) => {
  return (
    <Card className={`group relative overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Glowing border on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-lg border-2 border-telth-teal/50 blur-sm" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-telth-teal/10 to-telth-purple/10 blur-xl" />
      </div>

      <CardContent className={`relative z-10 flex flex-col h-full ${featured ? 'p-8 min-h-[280px]' : 'p-6 min-h-[250px]'}`}>
        {/* Icon */}
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-7 w-7 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-3 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Powered by AI badge */}
        <div className="mt-4 inline-flex items-center gap-2 text-xs text-telth-teal font-semibold">
          <div className="w-2 h-2 rounded-full bg-telth-teal animate-pulse" />
          AI-Powered
        </div>
      </CardContent>
    </Card>
  );
};
