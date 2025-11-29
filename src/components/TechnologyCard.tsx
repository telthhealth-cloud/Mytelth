import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TechnologyCardProps {
  title: string;
  description: string;
  traditionalApproach: string[];
  telthApproach: string[];
  impact: string;
}

export const TechnologyCard = ({
  title,
  description,
  traditionalApproach,
  telthApproach,
  impact,
}: TechnologyCardProps) => {
  return (
    <Card className="hover-lift h-full">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        
        <div>
          <p className="text-sm font-semibold mb-2 text-muted-foreground">Traditional Approach:</p>
          <ul className="space-y-1">
            {traditionalApproach.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-2 text-primary">Telth Approach:</p>
          <ul className="space-y-1">
            {telthApproach.map((item, index) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>{item}</span>
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
