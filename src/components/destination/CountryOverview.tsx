import { CountryData } from '@/data/countryData';

interface CountryOverviewProps {
  data: CountryData['overview'];
  countryName: string;
}

export const CountryOverview = ({ data, countryName }: CountryOverviewProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
              About {countryName}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              {data.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {data.description}
            </p>
            <div className="p-6 bg-muted rounded-xl border-l-4 border-secondary">
              <h3 className="font-heading font-semibold text-foreground mb-2">Our Experience</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {data.experience}
              </p>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {data.images.map((image, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-brand ${
                  index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
                }`}
              >
                <img
                  src={image}
                  alt={`${data.title} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
