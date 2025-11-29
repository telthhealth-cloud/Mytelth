import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CareManagerFeatureCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

export const CareManagerFeatureCard = ({
  icon: Icon,
  title,
  className,
}: CareManagerFeatureCardProps) => {
  return (
    <div
      className={cn(
        "group glass-card p-4 rounded-lg hover-lift transition-all duration-300",
        "hover:bg-gradient-to-br hover:from-telth-teal/10 hover:to-telth-purple/10",
        "border border-border/50 hover:border-telth-purple/50",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <Icon className="h-5 w-5 text-white" strokeWidth={2} />
        </div>
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      </div>
    </div>
  );
};
