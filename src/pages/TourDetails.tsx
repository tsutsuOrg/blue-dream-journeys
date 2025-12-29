import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getTourBySlug } from '@/data/tours';
import { ArrowRight, ArrowLeft, Clock, Users, Mountain, MapPin, Check, X, Info, Phone, Mail } from 'lucide-react';

const TourDetails = () => {
  const { tourSlug } = useParams<{ tourSlug: string }>();
  const tour = getTourBySlug(tourSlug || '');

  if (!tour) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-8">The tour you're looking for doesn't exist.</p>
          <Link to="/itineraries">
            <Button variant="brand">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Itineraries
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src={tour.bannerImage}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl">
              <span className="inline-block px-5 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-full mb-6">
                {tour.destination}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
                {tour.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-5 py-3 rounded-full border border-border">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-foreground">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-5 py-3 rounded-full border border-border">
                  <Users className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-foreground">{tour.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-5 py-3 rounded-full border border-border">
                  <Mountain className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-foreground">{tour.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/itineraries"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Tours
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Safari Overview */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                Safari <span className="text-secondary">Overview</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {tour.description}
                </p>
              </div>
            </div>

            {/* Tour Gallery */}
            {tour.galleryImages && tour.galleryImages.length > 0 && (
              <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  Experience <span className="text-secondary">Gallery</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tour.galleryImages.map((image, index) => (
                    <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={`${tour.title} - Gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Safari Highlights */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                Safari <span className="text-secondary">Highlights</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium text-foreground text-lg leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Day-by-Day <span className="text-secondary">Itinerary</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Experience every moment of your safari adventure with our detailed daily breakdown.
              </p>
              
              <div className="space-y-8">
                {tour.itinerary.map((day, index) => (
                  <div
                    key={day.day}
                    className="group relative bg-card rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`flex flex-col ${day.image ? 'lg:flex-row' : ''}`}>
                      {/* Day Image */}
                      {day.image && (
                        <div className="lg:w-2/5 relative overflow-hidden">
                          <div className="aspect-video lg:aspect-auto lg:h-full">
                            <img
                              src={day.image}
                              alt={`Day ${day.day}: ${day.title}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          <div className="absolute top-6 left-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center text-primary-foreground font-bold shadow-xl">
                              <span className="text-xs opacity-90">Day</span>
                              <span className="text-2xl">{day.day}</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Day Content */}
                      <div className={`${day.image ? 'lg:w-3/5' : 'w-full'} p-8 lg:p-10 flex flex-col justify-center`}>
                        {!day.image && (
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center text-primary-foreground font-bold shadow-lg mb-6">
                            <span className="text-xs opacity-90">Day</span>
                            <span className="text-2xl">{day.day}</span>
                          </div>
                        )}
                        <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                          {day.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included & Excluded */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Included */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                    What's <span className="text-secondary">Included</span>
                  </h2>
                  <div className="bg-card border border-border rounded-3xl p-8 space-y-4">
                    {tour.included.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                          <Check className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-foreground text-lg leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Excluded */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                    What's <span className="text-secondary">Excluded</span>
                  </h2>
                  <div className="bg-card border border-border rounded-3xl p-8 space-y-4">
                    {tour.excluded && tour.excluded.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                          <X className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <span className="text-muted-foreground text-lg leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Customization Options */}
            {tour.customization && tour.customization.length > 0 && (
              <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  Customization <span className="text-secondary">Options</span>
                </h2>
                <div className="bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/20 rounded-3xl p-8">
                  <p className="text-muted-foreground text-lg mb-6">
                    This tour can be tailored to your preferences. Available options include:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {tour.customization.map((option, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Info className="w-5 h-5 text-secondary shrink-0" />
                        <span className="text-foreground font-medium text-lg">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Why This Trip is Special */}
            {tour.whySpecial && (
              <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  Why This Trip is <span className="text-secondary">Special</span>
                </h2>
                <div className="bg-card border border-border rounded-3xl p-10">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {tour.whySpecial}
                  </p>
                </div>
              </div>
            )}

            {/* Important Information */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                Important <span className="text-secondary">Information</span>
              </h2>
              <div className="bg-muted/50 border border-border rounded-3xl p-10 space-y-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground text-xl mb-2">Customization Available</h3>
                    <p className="text-muted-foreground text-lg">
                      This safari can be fully customized to match your dates, preferred lodges, interests, or group size.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground text-xl mb-2">Booking & Permits</h3>
                    <p className="text-muted-foreground text-lg">
                      Gorilla and chimpanzee permits are subject to availability. We recommend booking at least 3-6 months in advance for peak season travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Dream Destination */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                Why Choose <span className="text-secondary">Dream Destination Tours & Travel</span>
              </h2>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl p-10">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Dream Destination Tours & Travel ensures smooth, safe, and memorable journeys. Our knowledgeable guides bring Rwanda's culture, scenery, and history to life, while our comfortable vehicles make your experience stress-free.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Experience genuine hospitality, professional service, and well-organized tours with us from start to finish. Your guide is your storyteller, wildlife expert, and cultural ambassador, ensuring safety, comfort, and inspiring memories.
                </p>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Ready for Your Safari Adventure?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Book your {tour.title} with Dream Destination Tours & Travel today. Our team is ready to create an unforgettable experience tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto shadow-2xl">
                    <Mail className="w-5 h-5 mr-2" />
                    Book This Safari
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </div>
              <p className="text-primary-foreground/70 text-sm mt-6">
                No payment required to inquire • Free consultation available
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Explore More Tours */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Explore More <span className="text-secondary">Itineraries</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Discover other incredible safari experiences across East Africa
          </p>
          <Link to="/itineraries">
            <Button variant="brand" size="lg">
              View All Tours <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TourDetails;