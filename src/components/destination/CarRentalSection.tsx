import { Link } from 'react-router-dom';
import { ArrowRight, Car, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CarRental } from '@/data/countryData';

interface CarRentalSectionProps {
  cars: CarRental[];
  countryName: string;
}

export const CarRentalSection = ({ cars, countryName }: CarRentalSectionProps) => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Transportation
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Car Rental in <span className="text-primary">{countryName}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore {countryName} at your own pace with our reliable fleet of safari vehicles 
            and comfortable road cars. All vehicles come with optional driver guides.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group bg-muted rounded-2xl overflow-hidden hover:shadow-brand transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {car.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {car.description}
                </p>
                <div className="flex items-center gap-2 text-secondary text-sm">
                  <Users className="w-4 h-4" />
                  <span>{car.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-primary rounded-2xl p-6 md:p-8">
            <Car className="w-10 h-10 text-accent" />
            <div className="text-left">
              <p className="text-primary-foreground font-heading font-bold text-lg">
                Need a Vehicle?
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Contact us for custom rental quotes
              </p>
            </div>
            <Link to="/contact" className="ml-4">
              <Button variant="gold" size="sm">
                Get Quote
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
