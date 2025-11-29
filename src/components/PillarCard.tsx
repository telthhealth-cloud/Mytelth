import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  impact: string;
}

export const PillarCard = ({
  icon: Icon,
  title,
  description,
  features,
  impact,
}: PillarCardProps) => {
  return (
    <Card className="hover-lift h-full">
      <CardHeader>
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-9 w-9 text-primary" strokeWidth={2} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        
        <div>
          <p className="text-sm font-semibold mb-2">Key Features:</p>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t">
          <p className="text-sm font-bold text-primary">{impact}</p>
        </div>
      </CardContent>
    </Card>
  );
};
