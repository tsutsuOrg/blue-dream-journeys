import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeader } from '@/components/SectionHeader';
import { ImageGallery } from '@/components/ImageGallery';
import { getParkBySlug } from '@/data/parks';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Camera, 
  Compass,
  BookOpen,
  History,
  Leaf,
  Star,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

const NationalPark = () => {
  const { parkSlug } = useParams<{ parkSlug: string }>();
  const park = getParkBySlug(parkSlug || '');

  if (!park) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Park Not Found</h1>
          <p className="text-muted-foreground mb-8">The national park you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="brand">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const heroImage = park.heroImage || 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=1080&fit=crop';

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <PageHero
        tagline={park.country}
        title={park.name}
        subtitle={park.description}
        backgroundImage={heroImage}
      >
        <p className="text-accent text-xl italic font-heading mt-4">
          "{park.tagline}"
        </p>
      </PageHero>

      {/* Highlights Pills */}
      <section className="py-12 bg-muted border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {park.highlights.map((highlight) => (
              <div 
                key={highlight} 
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all"
              >
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-foreground font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {park.overview && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionHeader
                    icon={BookOpen}
                    tagline="Discover"
                    title="Park Overview"
                    subtitle="An introduction to one of Africa's most spectacular protected areas"
                  />
                  <p className="text-foreground leading-relaxed text-lg whitespace-pre-line">
                    {park.overview}
                  </p>
                </div>
                {park.gallery && park.gallery[0] && (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={park.gallery[0]}
                      alt={`${park.name} overview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* History & Conservation */}
      {(park.history || park.conservation) && (
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              {park.history && (
                <Card className="border-border/50 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <History className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        History & Heritage
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {park.history}
                    </p>
                  </CardContent>
                </Card>
              )}

              {park.conservation && (
                <Card className="border-border/50 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        Conservation Efforts
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {park.conservation}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Tourist Attractions & Activities */}
      {park.attractions && park.attractions.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                icon={Compass}
                tagline="Experiences"
                title="Safari Activities & Attractions"
                subtitle="Unforgettable adventures that showcase the best of the park"
                centered
              />

              <div className="space-y-8">
                {park.attractions.map((attraction, index) => (
                  <Card 
                    key={attraction.title}
                    className="overflow-hidden border-border/50 hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                      {/* Content */}
                      <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4 w-fit">
                          <Sparkles className="w-4 h-4" />
                          <span>Experience {index + 1}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                          {attraction.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                          {attraction.description}
                        </p>
                        <Link to="/contact">
                          <Button variant="brand" className="w-fit">
                            Book This Experience
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>

                      {/* Image */}
                      <div className={`relative h-[320px] md:h-full min-h-[400px] ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                        <img
                          src={attraction.image}
                          alt={attraction.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery */}
      {park.gallery && park.gallery.length > 0 && (
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                icon={Camera}
                tagline="Gallery"
                title="Photo Gallery"
                subtitle="Explore the stunning landscapes and wildlife of the park"
                centered
              />
              <ImageGallery images={park.gallery} parkName={park.name} />
            </div>
          </div>
        </section>
      )}

      {/* Wildlife Section 
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              icon={Camera}
              tagline="Biodiversity"
              title="Wildlife You'll Encounter"
              subtitle="The park is home to an incredible diversity of species"
              centered
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {park.wildlife.map((animal) => (
                <div 
                  key={animal} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-secondary/30 hover:shadow-md transition-all"
                >
                  <div className="w-3 h-3 rounded-full bg-accent shrink-0" />
                  <span className="text-foreground font-medium text-sm">{animal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       Why Book With Us 
      {park.whyBookWithUs && park.whyBookWithUs.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <SectionHeader
                icon={Star}
                tagline="Expert Travel"
                title="Why Book With Us"
                subtitle="Experience the difference of traveling with safari specialists"
                centered
              />
              <div className="grid md:grid-cols-2 gap-6">
                {park.whyBookWithUs.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}*/
      }

      {/* FAQ Section */}
      {park.faqs && park.faqs.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                icon={HelpCircle}
                tagline="Questions & Answers"
                title="Frequently Asked Questions"
                subtitle="Everything you need to know before your adventure"
                centered
              />
              <Accordion type="single" collapsible className="space-y-4">
                {park.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border/50 rounded-xl px-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section 
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${park.cta?.backgroundImage || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop'})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            {park.cta?.title || `Plan Your Visit to ${park.name}`}
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
            {park.cta?.description || `Let us create a customized itinerary featuring ${park.name} and other incredible destinations in ${park.country}.`}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="gold" size="xl" className="shadow-gold">
                Book Your Adventure <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/itineraries">
              <Button variant="hero" size="xl">
                View Itineraries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NationalPark;
