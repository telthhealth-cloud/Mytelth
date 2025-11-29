import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ImpactStoryCardProps {
  title: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  author: string;
}

export const ImpactStoryCard = ({
  title,
  location,
  challenge,
  solution,
  results,
  quote,
  author,
}: ImpactStoryCardProps) => {
  return (
    <Card className="hover-lift h-full">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{location}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold">Challenge:</p>
          <p className="text-sm text-muted-foreground">{challenge}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Solution:</p>
          <p className="text-sm text-muted-foreground">{solution}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Results:</p>
          <ul className="space-y-1 mt-2">
            {results.map((result, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t italic">
          <p className="text-sm text-muted-foreground">"{quote}"</p>
          <p className="text-sm font-semibold mt-2">— {author}</p>
        </div>
      </CardContent>
    </Card>
  );
};
