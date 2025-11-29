import { Card, CardContent } from "./ui/card";

interface LocationCardProps {
  imageSrc: string;
  title: string;
  hubType: string;
  capacity: string;
  services: string;
  integration: string;
  featured?: boolean;
}

export const LocationCard = ({
  imageSrc,
  title,
  hubType,
  capacity,
  services,
  integration,
  featured = false,
}: LocationCardProps) => {
  return (
    <Card className={`group relative overflow-hidden border-0 ${featured ? 'lg:col-span-1 lg:row-span-2' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/85 transition-colors duration-500" />
      </div>

      {/* Content */}
      <CardContent className={`relative z-10 flex flex-col justify-end h-full ${featured ? 'min-h-[500px] p-8' : 'min-h-[400px] p-6'}`}>
        <div className="space-y-4 backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:-translate-y-1">
          <h3 className={`font-bold text-white ${featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
            {title}
          </h3>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-white/80">Hub Type:</p>
              <p className="text-sm text-white/95 font-medium">{hubType}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/80">Capacity:</p>
              <p className="text-sm text-white/95">{capacity}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/80">Services:</p>
              <p className="text-sm text-white/95">{services}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/80">Integration:</p>
              <p className="text-sm text-white/95">{integration}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
