import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountryPark } from '@/data/countryData';

interface NationalParksProps {
  parks: CountryPark[];
  countryName: string;
  parksHighlight?: string;
}

export const NationalParks = ({ parks, countryName, parksHighlight }: NationalParksProps) => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            National Parks & <span className="text-primary">Reserves</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {parksHighlight || `Discover the protected areas that make ${countryName} a world-class safari destination.`}
          </p>
        </div>

        {/* Parks Grid */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {parks.map((park, index) => (
            <div
              key={park.id}
              className="bg-card rounded-3xl overflow-hidden shadow-brand"
            >
              {/* Images Grid */}
              <div className="grid grid-cols-3 gap-1 h-64 md:h-80">
                {park.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`relative overflow-hidden ${
                      imgIndex === 0 ? 'col-span-2 row-span-1' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${park.name} ${imgIndex + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {imgIndex === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {park.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {park.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Link to={`/national-park/${park.slug}`}>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="brand" size="sm">
                      View Itineraries
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
