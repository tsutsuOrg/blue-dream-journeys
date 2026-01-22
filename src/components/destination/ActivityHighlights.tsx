import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountryActivity } from '@/data/countryData';

interface ActivityHighlightsProps {
  activities: CountryActivity[];
  countryName: string;
  activityHighlight?: string;
}

export const ActivityHighlights = ({ activities, countryName, activityHighlight }: ActivityHighlightsProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Things To Do
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Activity <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {activityHighlight || `Explore ${countryName}'s most unforgettable experiences with Dream Destination Tours and Travel.`}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`group flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-lg transition-all duration-300`}
            >
              {/* Image */}
              <div className="lg:w-2/5 aspect-video lg:aspect-auto relative overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {activity.description}
                </p>
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-foreground mb-1">How It's Offered</p>
                  <p className="text-muted-foreground text-sm">{activity.howOffered}</p>
                </div>
                <div>
                  <Link to="/contact">
                    <Button variant="brand" size="sm">
                      Book This Experience
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
