import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HubConfigCardProps {
  title: string;
  bestFor: string;
  floorSpace: string;
  capacity: string;
  devices: string;
  staff: string;
  services: string;
  investmentINR: string;
  investmentUSD: string;
  roiTimeline: string;
  revenuePotential: string;
}

export const HubConfigCard = ({
  title,
  bestFor,
  floorSpace,
  capacity,
  devices,
  staff,
  services,
  investmentINR,
  investmentUSD,
  roiTimeline,
  revenuePotential,
}: HubConfigCardProps) => {
  return (
    <Card className="hover-lift h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{bestFor}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <div className="space-y-3 flex-1">
          <div>
            <p className="text-sm font-semibold">Floor Space:</p>
            <p className="text-sm text-muted-foreground">{floorSpace}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Daily Capacity:</p>
            <p className="text-sm text-muted-foreground">{capacity}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Devices:</p>
            <p className="text-sm text-muted-foreground">{devices}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Staff:</p>
            <p className="text-sm text-muted-foreground">{staff}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Services:</p>
            <p className="text-sm text-muted-foreground">{services}</p>
          </div>
        </div>

        <div className="pt-4 border-t space-y-2">
          <p className="text-lg font-bold text-primary">
            {investmentINR} | {investmentUSD}
          </p>
          <p className="text-sm"><strong>ROI:</strong> {roiTimeline}</p>
          <p className="text-sm"><strong>Revenue:</strong> {revenuePotential}</p>
        </div>

        <Link to="/partner" className="w-full mt-4">
          <Button className="w-full" size="lg">Explore {title.includes("Premium") ? "Premium" : title.includes("Standard") ? "Standard" : title.includes("Compact") ? "Compact" : "Mobile"} Hub</Button>
        </Link>
      </CardContent>
    </Card>
  );
};
