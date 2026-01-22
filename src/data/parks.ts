export interface Attraction {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Park {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  highlights: string[];
  wildlife: string[];
  activities: string[];
  // Extended fields for rich content
  heroImage?: string;
  gallery?: string[];
  overview?: string;
  history?: string;
  conservation?: string;
  attractions?: Attraction[];
  whyBookWithUs?: string[];
  faqs?: FAQ[];
  cta?: {
    title: string;
    description: string;
    backgroundImage?: string;
  };
}

export const parks: Park[] = [
  {
    slug: 'bwindi-impenetrable-forest',
    name: 'Bwindi Impenetrable Forest',
    country: 'Uganda',
    tagline: 'Home of the Mountain Gorillas',
    description: 'Bwindi Impenetrable National Park is a UNESCO World Heritage Site and home to approximately half of the world\'s remaining mountain gorillas. This ancient rainforest offers an unforgettable gorilla trekking experience.',
    highlights: ['Gorilla Trekking', 'Ancient Rainforest', 'Bird Watching', 'Batwa Cultural Experience'],
    wildlife: ['Mountain Gorillas', 'Chimpanzees', 'L\'Hoest\'s Monkeys', 'Forest Elephants', '350+ Bird Species'],
    activities: ['Gorilla Trekking', 'Nature Walks', 'Bird Watching Tours', 'Community Visits', 'Batwa Trail Experience'],
    // Extended rich content
    heroImage: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1920&h=1080&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop',
    ],
    overview: 'Discover Bwindi Impenetrable Forest National Park, a UNESCO World Heritage Site and one of the most biologically diverse rainforests in Africa. Located in southwestern Uganda, Bwindi is the ultimate destination for mountain gorilla trekking, surrounded by lush hills, misty valleys, and pristine forest ecosystems. Its dense canopy and unique biodiversity make it a world-class eco-tourism and wildlife adventure destination.',
    history: 'Bwindi was formally established in 1991, though local communities have lived around the forest for centuries. The park is home to nearly half of the world’s remaining mountain gorillas and has played a critical role in global primate conservation. Its fame grew after Dian Fossey’s pioneering research, which highlighted the importance of protecting these gentle giants and their rainforest habitat.',
    conservation: 'Bwindi is a conservation success story, home to over 400 gorillas, including multiple habituated families for eco-tourism and research. Scientists and conservationists study gorilla behavior, social structures, and ecology, helping safeguard these endangered primates. Local communities actively participate in gorilla protection, eco-tourism programs, and sustainable livelihood projects, ensuring tourism benefits both people and wildlife.',
    attractions: [
      {
        title: 'Mountain Gorilla Trekking',
        description: 'Track gorilla families with certified guides through misty rainforest trails, spending an unforgettable hour observing their social behaviors.',
        image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1200&h=800&fit=crop',
        imageAlt: 'Mountain gorillas in Bwindi Impenetrable Forest',
      },
      {
        title: 'Golden Monkey Tracking ',
        description: 'Encounter rare golden monkeys in their highland forest habitat.',
        image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&h=800&fit=crop',
        imageAlt: 'Diverse bird species and wildlife photography in Bwindi',
      },
      {
        title: 'Nature Walks & Bird Watching',
        description: 'Discover 300+ bird species, orchids, ferns, and unique flora, perfect for nature photography and eco-tourism.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&h=800&fit=crop',
        imageAlt: 'Batwa cultural experience and traditional forest life',
      },
      {
        title: 'Cultural Visits ',
        description: 'Meet local communities and learn about their Rwandan/Ugandan forest traditions, crafts, and role in gorilla conservation.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Forest trails and golden monkey tracking in Bwindi',
      },
       {
        title: 'Gorilla Baby Naming Ceremony Participation ',
        description: 'Join annual celebrations honoring new gorilla infants, a world-famous conservation event.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Forest trails and golden monkey tracking in Bwindi',
      },
      {
        title: 'Scenic Forest Hikes & Photography Tours ',
        description: 'Trek trails that reveal waterfalls, hidden valleys, and panoramic forest views.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Forest trails and golden monkey tracking in Bwindi',
      },
    ],
    whyBookWithUs: [
      'Expert local guides with extensive experience in Bwindi rainforest and gorilla trekking',
      'Custom luxury, mid-range, and budget trekking packages',
      'Private and group tours ensuring safety, comfort, and sustainability',
      'Exclusive access to gorilla trekking permits and conservation programs',
      'Comprehensive itineraries combining gorilla trekking, golden monkey tracking, cultural visits, forest hikes, and photography tours',
      
    ],
    faqs: [
      {
        question: 'What is Bwindi Impenetrable Forest famous for?',
        answer: 'Bwindi is world-renowned for mountain gorilla trekking, golden monkeys, rich biodiversity, and eco-tourism adventures in a pristine rainforest.',
      },
      {
        question: 'How can I trek mountain gorillas in Bwindi?',
        answer: 'Book trekking permits with Dream Destination Tours and Travel. Treks are guided by certified local rangers, allowing 1 hour with habituated gorilla families.',
      },
      {
        question: 'When is the best time to visit Bwindi?',
        answer: 'The dry seasons (June–September and December–February) offer optimal trekking conditions, wildlife viewing, and photography opportunities.',},
      {
        question: 'What activities are available in Bwindi?',
        answer: 'Activities include gorilla trekking, golden monkey tracking, forest hikes, birdwatching, cultural visits, and photography tours.',
      },
     
      {
        question: 'Is Bwindi safe for tourists?',
        answer: 'Yes. Treks and activities are guided by trained local rangers, following strict safety and conservation protocols.',
      },
      {
        question: 'How long is a typical gorilla trekking tour?',
        answer: 'Treks last 2–6 hours, depending on the gorilla family\'s location. Observation is limited to 1 hour for safety and minimal disturbance.',
      },
      {
        question: 'How do I get to Bwindi National Park?',
        answer: 'The best route is via Kigali International Airport, about 4–5 hours by road to Bwindi. Alternatively, fly to Kihihi or Kisoro airstrips and transfer by vehicle.',
      },
      {
        question: 'Are there accommodations in Bwindi?',
        answer: 'Yes. Options include luxury lodges, eco-camps, and mid-range lodges, all bookable with Dream Destination Tours and Travel.',
      },
      {
        question: 'Can I combine Bwindi trekking with other Uganda tours?',
        answer: 'Absolutely. Custom itineraries can include Queen Elizabeth National Park safaris, Lake Bunyonyi tours, and cultural experiences, creating a complete Uganda wildlife adventure.',
      },
    ],
    cta: {
      title: 'Book Your Bwindi Gorilla Adventure Today!',
      description: 'Experience the magic of Bwindi’s misty rainforest with Dream Destination Tours and Travel. Trek with mountain gorillas, spot golden monkeys, enjoy scenic forest hikes, and meet local communities engaged in conservation. Whether you prefer luxury lodges, eco-camps, or budget trekking, we provide custom Bwindi safari packages tailored for a safe, immersive, and unforgettable rainforest adventure. Reserve your gorilla trekking permits and guided forest tours today – discover Uganda’s mountain gorilla haven with Dream Destination Tours!',
      backgroundImage: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1920&h=1080&fit=crop',
    },
  },
  {
    slug: 'queen-elizabeth',
    name: 'Queen Elizabeth National Park',
    country: 'Uganda',
    tagline: 'Safari Adventure at Its Best',
    description: 'Queen Elizabeth National Park is Uganda\'s most popular safari destination, famous for its tree-climbing lions, diverse ecosystems, and the spectacular Kazinga Channel boat cruise.',
    highlights: ['Tree-Climbing Lions', 'Kazinga Channel', 'Diverse Ecosystems', 'Chimpanzee Tracking'],
    wildlife: ['Lions', 'Elephants', 'Leopards', 'Buffaloes', 'Hippos', 'Chimpanzees', 'Over 600 Bird Species'],
    activities: ['Game Drives', 'Boat Cruises', 'Chimpanzee Tracking', 'Bird Watching', 'Nature Walks', 'Hot Air Balloon Safaris'],
    // Extended rich content
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    ],
    overview: 'Discover Queen Elizabeth National Park, Uganda’s most visited and diverse wildlife park, spanning the picturesque landscapes of southwestern Uganda. Renowned for its vast savannas, scenic lakes, sprawling wetlands, and the iconic Kazinga Channel, Queen Elizabeth offers world-class safari adventures, wildlife encounters, and eco-tourism experiences.',
    history: 'Established in 1952, Queen Elizabeth National Park covers 1,978 km², encompassing savannas, forests, crater lakes, and wetlands. The park was originally part of Kazinga and Rwenzori conservation areas, merging to form a premier national park. Over decades, it has become a top African safari destination, attracting tourists seeking lion sightings, elephant herds, hippos, and birding opportunities.',
    conservation: 'Queen Elizabeth National Park plays a critical role in wildlife protection and ecological research by conserving the Big Five—including lions, elephants, leopards, buffaloes, and hippos—alongside rare antelope and primate species, while the Kazinga Channel wildlife corridor linking Lake George and Lake Edward supports thriving populations of hippos, crocodiles, and diverse birdlife; through strong community involvement and eco-tourism initiatives, local communities actively participate in sustainable tourism and conservation programs that ensure shared benefits, and continuous wildlife monitoring and ecological research help maintain the park as a leading model for African conservation and safari management.',
    attractions: [
      {
        title: 'Game Drives & Wildlife Safaris',
        description: 'Explore savannas and woodlands in custom 4x4 safari vehicles to spot lions, elephants, leopards, buffaloes, and antelopes.',
        image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&h=800&fit=crop',
        imageAlt: 'Safari game drive spotting lions and elephants',
      },
      {
        title: 'Kazinga Channel Boat Safari',
        description: 'Cruise this wildlife-rich waterway, viewing hippos, crocodiles, elephants, buffaloes, and over 600 bird species, perfect for photography and wildlife enthusiasts.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop',
        imageAlt: 'Kazinga Channel boat safari with hippos and elephants',
      },
      {
        title: 'Morning & Evening Game Drives',
        description: 'Capture the best wildlife activity during sunrise and sunset in the savanna landscapes and crater lakes.',
        image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&h=800&fit=crop',
        imageAlt: 'Safari game drive during golden hour',
      },
      {
        title: 'Hot Air Balloon Safaris',
        description: 'Experience Queen Elizabeth National Park from above, floating over elephants, lions, and sprawling plains, followed by a champagne bush breakfast.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        imageAlt: 'Hot air balloon safari over Queen Elizabeth savannah',
      },
      {
        title: 'Chimpanzee & Primate Viewing',
        description: 'Spot red-tailed monkeys, vervet monkeys, and baboons in the park\'s forested sections.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Primate viewing in Queen Elizabeth',
      },
      {
        title: 'Bird Watching Tours',
        description: 'Over 600 bird species, including shoebills, kingfishers, and African fish eagles, make it a prime destination for ornithologists.',
        image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1200&h=800&fit=crop',
        imageAlt: 'Bird watching in Queen Elizabeth',
      },
      {
        title: 'Cultural & Community Visits',
        description: 'Engage with local communities, experiencing traditional dances, crafts, and conservation initiatives.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&h=800&fit=crop',
        imageAlt: 'Cultural community visits',
      },
    ],
    whyBookWithUs: [
      'Expert local safari guides with decades of experience in Queen Elizabeth National Park',
      'Tailored luxury, budget, and private safari packages for all travelers',
      'Private and group tours ensuring safety, comfort, and eco-friendly operations',
      'Exclusive access to Kazinga Channel cruises, hot air balloon safaris, and game drives',
      'Comprehensive itineraries combining savanna safaris, boat cruises, and primate spotting',
      'Professional photography guidance for capturing Big Five and wildlife moments',
      'Cultural experiences visiting local communities and conservation projects',
      'Comfortable accommodations from luxury lodges to eco-friendly camps',
      'Complete logistics: park permits, transportation, expert guides',
      '24/7 support throughout your Queen Elizabeth safari adventure',
    ],
    faqs: [
      {
        question: 'What is Queen Elizabeth National Park famous for?',
        answer: 'It is renowned for Big Five safaris, Kazinga Channel boat cruises, hot air balloon safaris, crater lakes, primates, and abundant birdlife.',
      },
      {
        question: 'How can I go on a safari in Queen Elizabeth?',
        answer: 'Book with Dream Destination Tours and Travel. We provide custom 4x4 game drives, boat safaris, and guided nature tours.',
      },
      {
        question: 'When is the best time to visit Queen Elizabeth?',
        answer: 'The dry seasons (June–September and December–February) offer optimal game viewing, boat safaris, and photography opportunities.',
      },
      {
        question: 'What wildlife can I see in Queen Elizabeth?',
        answer: 'Visitors can spot lions, elephants, leopards, buffaloes, hippos, primates, antelopes, and over 600 bird species.',
      },
      {
        question: 'Can I experience a Kazinga Channel boat safari?',
        answer: 'Yes. Daily cruises offer hippos, crocodiles, elephants, and birdwatching opportunities, perfect for photography and wildlife observation.',
      },
      {
        question: 'Are hot air balloon safaris available?',
        answer: 'Yes! Float over the park for unforgettable aerial views of elephants, lions, and savanna landscapes, followed by a champagne breakfast in the bush.',
      },
      {
        question: 'Is Queen Elizabeth safe for tourists?',
        answer: 'Absolutely. All activities are guided by trained safari rangers, with strict safety measures and conservation rules.',
      },
      {
        question: 'Are there accommodations in the park?',
        answer: 'Yes. Options include luxury lodges, mid-range safari lodges, and eco-friendly camps, fully bookable through Dream Destination Tours and Travel.',
      },
      {
        question: 'How long is a typical game drive or boat safari?',
        answer: 'Game drives typically last 3–6 hours, while Kazinga Channel cruises last 2–3 hours, providing ample wildlife viewing opportunities.',
      },
      {
        question: 'Can I combine Queen Elizabeth with other Uganda tours?',
        answer: 'Yes! Combine with Bwindi gorilla trekking, Kibale chimpanzee tracking, or Lake Bunyonyi excursions for a complete Ugandan safari adventure.',
      },
    ],
    cta: {
      title: 'Book Your Queen Elizabeth Safari Today!',
      description: 'Embark on an unforgettable safari adventure with Dream Destination Tours and Travel. Explore Big Five game drives, Kazinga Channel boat cruises, primate spotting, and hot air balloon safaris, all guided by expert local rangers. Whether you prefer luxury lodges, eco-camps, or private group safaris, we offer custom packages designed for adventure, comfort, and wildlife immersion. Reserve your Queen Elizabeth National Park safari today – witness Africa’s most diverse wildlife landscapes with Dream Destination Tours!',
      backgroundImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop',
    },
  },
  {
    slug: 'masai-mara',
    name: 'Masai Mara National Reserve',
    country: 'Kenya',
    tagline: 'The Greatest Wildlife Spectacle on Earth',
    description: 'The Masai Mara is world-renowned for the Great Migration, where millions of wildebeest and zebras cross the Mara River. It offers exceptional Big Five sightings year-round.',
    highlights: ['Great Migration', 'Big Five', 'Hot Air Balloon Safaris', 'Maasai Culture'],
    wildlife: ['Lions', 'Elephants', 'Leopards', 'Cheetahs', 'Wildebeest', 'Hippos', 'Crocodiles'],
    activities: ['Game Drives', 'Hot Air Balloon Safaris', 'Walking Safaris', 'Cultural Village Visits', 'Bush Dining'],
  },
  {
    slug: 'serengeti',
    name: 'Serengeti National Park',
    country: 'Tanzania',
    tagline: 'Endless Plains',
    description: 'The Serengeti is one of the most celebrated wildlife sanctuaries in the world, hosting the largest terrestrial mammal migration and offering unparalleled safari experiences.',
    highlights: ['Great Migration', 'Big Five', 'Kopjes Rock Formations', 'Predator Sightings'],
    wildlife: ['Lions', 'Leopards', 'Elephants', 'Wildebeest', 'Zebras', 'Cheetahs', 'Wild Dogs'],
    activities: ['Game Drives', 'Hot Air Balloon Safaris', 'Walking Safaris', 'Photography Safaris', 'Cultural Visits'],
  },
  {
    slug: 'volcanoes-national-park',
    name: 'Volcanoes National Park',
    country: 'Rwanda',
    tagline: 'The Land of Gorillas',
    description: 'Volcanoes National Park is the Rwandan section of the Virunga Mountains and the premier destination for mountain gorilla trekking. It was where Dian Fossey conducted her groundbreaking gorilla research.',
    highlights: ['Gorilla Trekking', 'Golden Monkey Tracking', 'Volcano Hiking', 'Dian Fossey Tomb'],
    wildlife: ['Mountain Gorillas', 'Golden Monkeys', 'Forest Elephants', 'Buffaloes', 'Various Bird Species'],
    activities: ['Gorilla Trekking', 'Golden Monkey Tracking', 'Volcano Hikes', 'Dian Fossey Hike', 'Cultural Experiences'],
    // Extended rich content
    heroImage: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1920&h=1080&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
    ],
    overview: 'Discover Volcanoes National Park, Rwanda’s Virunga Mountains wildlife sanctuary and the world-renowned home of mountain gorillas. Nestled in the northwestern highlands of Rwanda, this park is a biodiversity hotspot with misty volcanoes, lush forests, and incredible wildlife.',
    history: 'Established in 1925 as Albert National Park, Volcanoes National Park is the oldest protected area in Africa. It became globally famous thanks to Dian Fossey, the legendary primatologist who dedicated her life to studying and conserving mountain gorillas. Her groundbreaking research not only saved gorillas from extinction but also made Rwanda a world-class gorilla trekking destination.',
    conservation: 'The park has been a center of gorilla conservation for decades and is now a UNESCO World Heritage Site that is home to approximately half of the world’s remaining mountain gorillas, with initiatives such as the Gorilla Guardians Village empowering local communities to actively protect gorilla families while educating visitors about community-led conservation, and the Dian Fossey Gorilla Fund’s Ellen DeGeneres Campus serving as a major research and educational hub that preserves Fossey’s legacy, documents the history of gorilla conservation, and showcases ongoing scientific studies in Volcanoes National Park.',
    attractions: [
      {
        title: 'Mountain Gorilla Trekking',
        description: 'Track gorilla families through the misty forest and spend an unforgettable hour observing these gentle giants.',
        image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1200&h=800&fit=crop',
        imageAlt: 'Mountain gorillas in their natural habitat at Volcanoes National Park',
      },
      {
        title: 'Golden Monkey Tracking',
        description: 'Explore the park\'s highland forests and encounter rare golden monkeys.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Golden monkeys in bamboo forest',
      },
      {
        title: 'Cultural Visits',
        description: 'Visit local communities, including Gorilla Guardians Village, to understand Rwandan traditions and conservation efforts.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&h=800&fit=crop',
        imageAlt: 'Cultural village visit',
      },
      {
        title: 'Baby Gorilla Naming Ceremony (Kwita Izina)',
        description: 'Participate in Rwanda\'s annual gorilla naming event, a world-famous celebration of conservation success.',
        image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&h=800&fit=crop',
        imageAlt: 'Gorilla naming ceremony celebration',
      },
      {
        title: 'Volcano Hiking & Nature Walks',
        description: 'Trek scenic trails in the Virunga volcanic landscape.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        imageAlt: 'Volcano hiking trails',
      },
      {
        title: 'Wildlife & Bird Watching',
        description: 'Capture stunning photographs of primates, exotic birds, and unique flora.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
        imageAlt: 'Wildlife and bird watching',
      },
      {
        title: 'Dian Fossey Museum / Ellen DeGeneres Campus',
        description: 'Explore the history of gorilla research, conservation milestones, and educational exhibits.',
        image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&h=800&fit=crop',
        imageAlt: 'Dian Fossey museum and research center',
      },
    ],
    whyBookWithUs: [
      'Expert local guides with deep knowledge of gorilla families and park ecology',
      'Guaranteed gorilla trekking permits secured in advance',
      'Small group sizes for personalized attention and better wildlife viewing',
      'Professional photography guidance to capture your once-in-a-lifetime moments',
      'Comfortable lodges and hotels ranging from luxury to budget options',
      'Complete logistics handled: permits, transportation, park fees, and guides',
      'Flexible itineraries that can combine multiple parks and activities',
      '24/7 support throughout your Rwanda adventure',
      'Sustainable tourism practices supporting local communities',
      'Expert advice on physical preparation, packing lists, and what to expect',
    ],
    faqs: [
      {
        question: 'What is Volcanoes National Park famous for?',
        answer: 'Volcanoes National Park is world-renowned for mountain gorilla trekking in the Virunga Mountains, endangered primate conservation, and being the home of Dian Fossey\'s research. It\'s also a top destination for eco-tourism, wildlife photography, and nature adventures in Rwanda.',
      },
      {
        question: 'How can I go gorilla trekking in Volcanoes National Park?',
        answer: 'You can go gorilla trekking with Dream Destination Tours and Travel by booking gorilla permits in advance. Treks are guided by certified local guides, allowing visitors to spend 1 hour observing mountain gorilla families in their natural habitat.',
      },
      {
        question: 'When is the best time to visit Volcanoes National Park?',
        answer: 'The best time is during the dry seasons (June–September and December–February) for easier trekking, wildlife viewing, and photography. Gorilla trekking is possible year-round, but these months offer optimal conditions.',
      },
      {
        question: 'What other activities are available in Volcanoes National Park?',
        answer: 'In addition to gorilla trekking, visitors can enjoy golden monkey tracking, volcano hiking, nature walks, bird watching, cultural visits, and photography tours. You can also attend the annual Kwita Izina baby gorilla naming ceremony.',
      },
      {
        question: 'What is Kwita Izina and how can tourists participate?',
        answer: 'Kwita Izina is Rwanda\'s annual mountain gorilla naming ceremony, celebrating gorilla conservation. Tourists can attend events, meet conservationists, and witness community celebrations, making it a unique cultural and wildlife experience.',
      },
      {
        question: 'Can I visit Gorilla Guardians Village?',
        answer: 'Yes! The Gorilla Guardians Village allows tourists to meet local conservationists, learn about community-led gorilla protection, and see how locals support mountain gorilla conservation efforts.',
      },
      {
        question: 'Is Volcanoes National Park safe for tourists?',
        answer: 'Absolutely. Trekking and other activities are guided by trained local rangers, and the park has strict conservation rules to ensure safety for both visitors and wildlife.',
      },
      {
        question: 'How long is a typical gorilla trekking tour?',
        answer: 'Gorilla trekking can take 2–6 hours, depending on the location of gorilla families. The maximum time spent with gorillas is 1 hour, providing a once-in-a-lifetime wildlife experience.',
      },
      {
        question: 'What is the best way to reach Volcanoes National Park?',
        answer: 'The best access route is via Kigali International Airport. From Kigali, the park is approximately 2–3 hours by road, and Dream Destination Tours and Travel offers private transfers and safari vehicle rentals for a smooth journey.',
      },
      {
        question: 'Are there accommodations near Volcanoes National Park?',
        answer: 'Yes. Options include luxury lodges, eco-camps, and budget-friendly accommodations near the park. Dream Destination Tours and Travel can arrange custom packages combining gorilla trekking, cultural visits, and overnight stays.',
      },
    ],
    cta: {
      title: 'Book Your Volcanoes National Park Gorilla Adventure Today!',
      description: 'Embark on a once-in-a-lifetime journey to Volcanoes National Park with Dream Destination Tours and Travel. Trek through the misty Virunga Mountains to encounter endangered mountain gorillas, explore golden monkey habitats, visit the Gorilla Guardians Village, and experience the legacy of Dian Fossey at the research center. Don’t miss the chance to attend the famous Kwita Izina baby gorilla naming ceremony or enjoy guided volcano hikes and nature walks. Whether you seek luxury lodges, eco-camps, or budget-friendly trekking, we offer custom gorilla safari packages tailored for you. Reserve your gorilla trekking permits and guided tours today – let our expert local guides ensure a safe, authentic, and unforgettable Volcanoes National Park adventure.',
      backgroundImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop',
    },
  },
  {
    slug: 'ngorongoro-crater',
    name: 'Ngorongoro Crater',
    country: 'Tanzania',
    tagline: 'The Eighth Wonder of the World',
    description: 'The Ngorongoro Crater is the world\'s largest intact volcanic caldera and hosts an incredible concentration of wildlife, including the Big Five. It\'s a UNESCO World Heritage Site.',
    highlights: ['Volcanic Caldera', 'Big Five', 'Black Rhinos', 'Flamingo-lined Lakes'],
    wildlife: ['Lions', 'Black Rhinos', 'Elephants', 'Flamingos', 'Hippos', 'Leopards', 'Buffaloes'],
    activities: ['Crater Floor Game Drives', 'Rim Walks', 'Maasai Village Visits', 'Bird Watching', 'Photography'],
  },
  {
    slug: 'murchison-falls',
    name: 'Murchison Falls National Park',
    country: 'Uganda',
    tagline: 'Where the Nile Roars',
    description: 'Murchison Falls is Uganda\'s largest national park, where the Nile River explodes through a narrow gorge creating the world\'s most powerful waterfall. It offers excellent game viewing.',
    highlights: ['Murchison Falls', 'Nile River', 'Big Four', 'Launch Cruise'],
    wildlife: ['Lions', 'Elephants', 'Giraffes', 'Leopards', 'Buffaloes', 'Hippos', 'Nile Crocodiles', 'Shoebill Storks', 'Over 450 Bird Species'],
    activities: ['Game Drives', 'Boat Cruises', 'Hiking to Falls Top', 'Sport Fishing', 'Bird Watching', 'Hot Air Balloon Safaris'],
    // Extended rich content
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop',
    ],
    overview: 'Discover Murchison Falls National Park, Uganda’s largest and most iconic national park, spanning 3,893 km² of savanna, woodland, and riverine landscapes. Known for the spectacular Nile River gorge, the park offers breathtaking scenery, abundant wildlife, and world-class safari adventures.',
    history: 'Established in 1952, Murchison Falls National Park was created to protect the area’s rich biodiversity, including elephants, lions, giraffes, hippos, crocodiles, and rare bird species. Its centerpiece, Murchison Falls, is where the mighty Nile forces its way through a narrow gorge, creating one of the world’s most powerful waterfalls. The park has since become a top destination for wildlife enthusiasts, photographers, and eco-tourists.',
    conservation: 'Murchison Falls National Park is a model of wildlife protection and sustainable tourism, home to the Big Five and other mega fauna such as elephants, lions, leopards, buffaloes, giraffes, and hippos, while also serving as a birdlife haven with over 450 species including shoebills, kingfishers, and fish eagles; the Nile River and its surrounding wetlands protect vital riverine and aquatic ecosystems that support hippos, crocodiles, and rich biodiversity, and through strong community and conservation programs, local communities actively engage in eco-tourism, wildlife monitoring, and anti-poaching initiatives to ensure sustainable tourism and long-term wildlife preservation.',
    attractions: [
      {
        title: 'Game Drives & Safari Tours',
        description: 'Explore the park\'s savannas and woodlands in custom 4x4 vehicles, spotting lions, elephants, leopards, giraffes, and buffaloes.',
        image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&h=800&fit=crop',
        imageAlt: 'Safari game drive spotting elephants and lions in Murchison Falls',
      },
      {
        title: 'Murchison Falls View & Photography',
        description: 'Witness the Nile crashing through the narrow gorge, a truly spectacular natural phenomenon.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        imageAlt: 'Murchison Falls with Nile River',
      },
      {
        title: 'Kazinga Channel-Style Boat Safari on the Nile',
        description: 'Cruise the Nile River at Murchison Falls, spotting hippos, crocodiles, elephants, and exotic birds, ideal for photography and nature enthusiasts.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        imageAlt: 'Nile boat safari with hippos and crocodiles',
      },
      {
        title: 'Hot Air Balloon Safari',
        description: 'Float over savanna plains, Nile wetlands, and wildlife herds at sunrise, followed by a champagne bush breakfast, offering breathtaking aerial views of Murchison Falls.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        imageAlt: 'Hot air balloon safari over Murchison Falls savanna',
      },
      {
        title: 'Chimpanzee & Primate Viewing',
        description: 'Encounter red-tailed monkeys, baboons, and vervet monkeys in forested areas.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Primate viewing in forested areas',
      },
      {
        title: 'Nature Walks & Birdwatching Tours',
        description: 'Discover rare and endemic bird species, unique flora, and scenic hiking trails along the Nile.',
        image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&h=800&fit=crop',
        imageAlt: 'Birdwatching and nature walks along the Nile',
      },
      {
        title: 'Fishing & Adventure Activities',
        description: 'Optional sport fishing on the Nile, guided hikes, and eco-adventure experiences.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
        imageAlt: 'Fishing and adventure activities on the Nile',
      },
    ],
    whyBookWithUs: [
      'Expert local guides with decades of Murchison Falls safari experience',
      'Tailored luxury, budget, and private safari packages for all travelers',
      'Private and group tours with eco-friendly operations and sustainability focus',
      'Exclusive access to game drives, Nile boat safaris, and hot air balloon experiences',
      'Comprehensive itineraries combining Murchison Falls viewing, wildlife safaris, and birdwatching',
      'Professional photography guidance for capturing the falls and wildlife',
      'Convenient access: 5-6 hours from Kampala or domestic flights to park airstrips',
      'Comfortable accommodations from luxury lodges to safari camps',
      'Complete logistics: park permits, transportation, expert guides',
      '24/7 support throughout your Murchison Falls adventure',
    ],
    faqs: [
      {
        question: 'What is Murchison Falls National Park famous for?',
        answer: 'It\'s known for the powerful Nile Falls, Big Five safaris, boat cruises, birdwatching, and breathtaking scenery.',
      },
      {
        question: 'How can I do a safari at Murchison Falls?',
        answer: 'Book with Dream Destination Tours and Travel for guided 4x4 game drives, Nile boat cruises, and hot air balloon safaris.',
      },
      {
        question: 'When is the best time to visit Murchison Falls?',
        answer: 'The dry seasons (June–September and December–February) are best for wildlife spotting, boat safaris, and photography.',
      },
      {
        question: 'What wildlife can I see in Murchison Falls?',
        answer: 'Visitors can see lions, elephants, leopards, buffaloes, giraffes, hippos, crocodiles, and over 450 bird species.',
      },
      {
        question: 'Can I experience a Nile boat safari?',
        answer: 'Yes. Cruises along the Nile provide up-close views of hippos, crocodiles, elephants, and abundant birdlife, perfect for nature photography.',
      },
      {
        question: 'Are hot air balloon safaris available?',
        answer: 'Yes! Float over the savanna plains and Nile wetlands, spotting wildlife from above, followed by a champagne bush breakfast.',
      },
      {
        question: 'Is Murchison Falls safe for tourists?',
        answer: 'Absolutely. All activities are guided by trained rangers, following strict safety and conservation protocols.',
      },
      {
        question: 'Are there accommodations in the park?',
        answer: 'Yes. Options include luxury lodges, safari camps, and eco-friendly accommodations, all bookable through Dream Destination Tours and Travel.',
      },
      {
        question: 'How long is a typical safari tour?',
        answer: 'Game drives last 3–6 hours, Nile boat cruises 2–3 hours, and hot air balloon safaris 1–2 hours, offering flexible itinerary options.',
      },
      {
        question: 'Can I combine Murchison Falls with other Uganda tours?',
        answer: 'Yes. Custom itineraries can include Queen Elizabeth National Park, Kibale Forest, Bwindi gorilla trekking, and Lake Albert excursions, creating a complete Ugandan safari adventure.',
      },
    ],
    cta: {
      title: 'Book Your Murchison Falls National Park Safari Today!',
      description: 'Embark on an unforgettable adventure with Dream Destination Tours and Travel. Witness the mighty Nile plunging through Murchison Falls, track Big Five game, explore the wetlands by boat, and experience the thrill of a hot air balloon safari. Whether you prefer luxury lodges, eco-camps, or private group tours, we offer custom Murchison Falls safari packages designed for wildlife encounters, photography, and adventure.',
      backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    },
  },
  {
    slug: 'akagera-national-park',
    name: 'Akagera National Park',
    country: 'Rwanda',
    tagline: 'Rwanda\'s Wildlife and Savannah Paradise',
    description: 'Akagera is Rwanda\'s only savanna park and the country\'s Big Five destination. After successful conservation efforts, lions and rhinos have been reintroduced, making it a complete safari experience.',
    highlights: ['Big Five', 'Lake Ihema', 'Savanna Landscapes', 'Bird Diversity'],
    wildlife: ['Lions', 'Elephants', 'Black Rhinos', 'Leopards', 'Buffaloes', 'Giraffes', 'Zebras', 'Hippos', 'Crocodiles', 'Over 550 Bird Species'],
    activities: ['Game Drives', 'Boat Safaris', 'Hot Air Balloon Safaris', 'Night Drives', 'Bird Watching', 'Behind the Scenes Tours'],
    // Extended rich content
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop',
    ],
    overview: 'Discover Akagera National Park, Rwanda’s premier savannah wildlife sanctuary, where vast plains, lakes, and rivers provide a home to elephants, lions, leopards, giraffes, buffaloes, hippos, and hundreds of bird species. Located in eastern Rwanda, Akagera combines classic African safari landscapes with Rwanda’s unique ecosystem, making it ideal for game drives, boat safaris, hot air balloon adventures, and eco-tourism.',
    history: 'Established in 1934, Akagera National Park is Rwanda’s largest protected area and a cornerstone of wildlife conservation. After facing challenges in the 1990s, including poaching, the park underwent major restoration and reintroduction programs, bringing back lions, rhinos, and elephants. Today, Akagera is a model for sustainable conservation and safari tourism in Rwanda.',
    conservation: 'Akagera National Park has been a leader in wildlife conservation for decades through the successful reintroduction of the Big Five species including lions, leopards, elephants, rhinos, and buffaloes, while strong community conservation programs empower local communities to protect wildlife and actively participate in eco-tourism initiatives, and continuous research and monitoring in collaboration with the Rwanda Development Board and conservation organizations help track wildlife populations and ensure long-term sustainability.',
    attractions: [
      {
        title: 'Game Drives',
        description: 'Morning, afternoon, or full-day drives in custom 4x4 safari vehicles, tracking Big Five, plains game, and rare predators.',
        image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&h=800&fit=crop',
        imageAlt: 'Safari game drive tracking lions in Akagera National Park',
      },
      {
        title: 'Boat Safaris',
        description: 'Cruise Lake Ihema to spot hippos, crocodiles, elephants, and over 550 bird species, including African fish eagles and pelicans.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop',
        imageAlt: 'Boat safari on Lake Ihema with hippos and birdlife',
      },
      {
        title: 'Hot Air Balloon Safaris',
        description: 'Witness stunning aerial views of the savannah, lakes, and wildlife, an unforgettable sunrise safari adventure.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        imageAlt: 'Hot air balloon safari over Akagera savannah at sunrise',
      },
      {
        title: 'Bird Watching & Wildlife Photography',
        description: 'Capture breathtaking images of elephants, giraffes, lions, and abundant birdlife.',
        image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&h=800&fit=crop',
        imageAlt: 'Wildlife photography opportunities in Akagera with diverse species',
      },
      {
        title: 'Cultural Experiences',
        description: 'Visit nearby communities to learn about local Rwandan culture and conservation efforts.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&h=800&fit=crop',
        imageAlt: 'Cultural experiences with local communities',
      },
      {
        title: 'Luxury & Eco-Lodge Stays',
        description: 'Overnight at park lodges, eco-camps, or luxury tented accommodations.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
        imageAlt: 'Luxury lodge accommodations in Akagera',
      },
    ],
    whyBookWithUs: [
      'Expert local guides with decades of experience in Akagera National Park',
      'Tailored luxury, budget, and private safari packages to suit every traveler',
      'Private or group tours with safe, eco-friendly operations',
      'Exclusive access to hot air balloon safaris, boat cruises, and game drives',
      'Comprehensive itineraries combining Big Five safaris, bird watching, and boat excursions',
      'Professional photography guidance to capture your safari memories',
      'Comfortable accommodations ranging from luxury lodges to eco-camps',
      'Complete logistics handled: park permits, transportation, and expert guides',
      'Cultural experiences visiting nearby communities and learning about conservation',
      '24/7 support throughout your Rwanda safari adventure',
    ],
    faqs: [
      {
        question: 'What is Akagera National Park famous for?',
        answer: 'Akagera is famous for Big Five safaris, boat safaris on Lake Ihema, birdwatching, and stunning savannah landscapes.',
      },
      {
        question: 'What wildlife can I see in Akagera?',
        answer: 'Visitors can see lions, elephants, leopards, buffaloes, rhinos, giraffes, zebras, hippos, crocodiles, and over 550 bird species.',
      },
      {
        question: 'When is the best time to visit Akagera?',
        answer: 'The dry season (June–September and December–February) is best for game drives, wildlife spotting, and photography. Boat safaris are also ideal in these months.',
      },
      {
        question: 'What activities are available in Akagera?',
        answer: 'Activities include safari game drives, boat safaris, hot air balloon rides, wildlife photography, bird watching, and cultural visits to nearby communities.',
      },
      {
        question: 'Can I do a boat safari in Akagera?',
        answer: 'Yes. Lake Ihema boat safaris allow tourists to spot hippos, crocodiles, elephants, and birdlife, guided by expert rangers.',
      },
      {
        question: 'Is Akagera National Park safe for tourists?',
        answer: 'Absolutely. All activities are guided by trained local rangers, and strict conservation and safety measures are in place.',
      },
      {
        question: 'How long are game drives in Akagera?',
        answer: 'Game drives can range from 2–6 hours, with morning, afternoon, or full-day safari options in 4x4 vehicles.',
      },
      {
        question: 'Can I experience a hot air balloon safari in Akagera?',
        answer: 'Yes! Hot air balloon safaris at sunrise provide a breathtaking aerial view of the savannah, lakes, and wildlife, making it one of the park\'s most memorable experiences.',
      },
      {
        question: 'What is the best way to reach Akagera National Park?',
        answer: 'The park is approximately 2–3 hours by road from Kigali International Airport, and Dream Destination Tours and Travel provides private transfers and safari vehicles.',
      },
      {
        question: 'Are there accommodations in Akagera National Park?',
        answer: 'Yes. Options include luxury lodges, eco-camps, and budget-friendly safari accommodations, all bookable through Dream Destination Tours and Travel.',
      },
    ],
    cta: {
      title: 'Book Your Akagera National Park Safari Today!',
      description: 'Embark on a classic Rwandan safari adventure with Dream Destination Tours and Travel. Track the Big Five, enjoy boat safaris on Lake Ihema, soar over the savannah in a hot air balloon, and capture unforgettable wildlife photographs. Whether you prefer luxury lodges, eco-camps, or budget-friendly safari packages, we provide custom itineraries with expert guides to ensure a safe, immersive, and unforgettable Akagera National Park experience. Reserve your game drives, boat safaris, and hot air balloon adventures today – explore Rwanda’s eastern savannah paradise with Dream Destination Tours!',
      backgroundImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=1080&fit=crop',
    },
  },
  {
    slug: 'amboseli',
    name: 'Amboseli National Park',
    country: 'Kenya',
    tagline: 'Land of Giants',
    description: 'Amboseli offers the most classic African imagery: large elephant herds against the backdrop of snow-capped Mount Kilimanjaro. It\'s famous for its large tusker elephants.',
    highlights: ['Mount Kilimanjaro Views', 'Large Elephant Herds', 'Observation Hill', 'Maasai Culture'],
    wildlife: ['Elephants', 'Lions', 'Cheetahs', 'Hippos', 'Buffaloes', 'Over 400 Bird Species'],
    activities: ['Game Drives', 'Photography', 'Maasai Village Visits', 'Bird Watching', 'Nature Walks'],
  },
  {
    slug: 'kibale-forest',
    name: 'Kibale Forest National Park',
    country: 'Uganda',
    tagline: 'The Primate Capital of Africa',
    description: 'Kibale Forest is home to the highest density of primates in Africa, including habituated chimpanzees. It\'s the premier destination for chimpanzee tracking in Uganda.',
    highlights: ['Chimpanzee Tracking', '13 Primate Species', 'Crater Lakes', 'Bigodi Wetland'],
    wildlife: ['Chimpanzees', 'Red-tailed Monkeys', 'Black-and-White Colobus', 'L\'Hoest\'s Monkeys', 'Olive Baboons', 'Grey-cheeked Mangabeys', 'Forest Elephants', 'Over 375 Bird Species'],
    activities: ['Chimpanzee Tracking', 'Habituation Experience', 'Nature Walks', 'Bigodi Swamp Walk', 'Bird Watching', 'Primate Tracking'],
    // Extended rich content
    heroImage: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1920&h=1080&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503844183307-d036fae26896?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    ],
    overview: 'Discover Kibale National Park, Uganda’s primate paradise and rainforest wonder, located in southwestern Uganda. Famous as the “Primate Capital of the World”, Kibale is home to over 13 primate species, including more than 1,500 chimpanzees, and is a top destination for wildlife enthusiasts, eco-tourists, and researchers.',
    history: 'Established in 1993, Kibale Forest is part of Uganda’s network of protected rainforest reserves. The park spans 795 km² of tropical rainforest, wetlands, and grasslands, providing critical habitat for endangered primates, elephants, and countless bird species. Over the decades, Kibale has become a world-renowned destination for chimpanzee trekking and biodiversity conservation, attracting scientists and tourists alike.',
    conservation: 'Kibale National Park is a model for primate conservation and eco-tourism, protecting habituated chimpanzee families that allow visitors to observe these highly social and intelligent primates in their natural habitat, while also serving as a biodiversity hotspot with over 60 mammal species such as red-tailed monkeys, baboons, and black-and-white colobus and more than 350 bird species; through extensive research and monitoring, scientists conduct long-term studies on chimpanzee behavior, social dynamics, and forest ecology that inform global conservation efforts, and strong community engagement ensures local communities benefit from eco-tourism programs, guided forest tours, and sustainable conservation initiatives so both people and wildlife can thrive.',
    attractions: [
      {
        title: 'Chimpanzee Trekking',
        description: 'Track habituated chimpanzee groups through lush rainforest trails, guided by certified local rangers, for a 4-hour immersive wildlife encounter.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Chimpanzees in Kibale Forest National Park',
      },
      {
        title: 'Primate & Monkey Tracking',
        description: 'Spot red-tailed monkeys, black-and-white colobus, olive baboons, and grey-cheeked mangabeys.',
        image: 'https://images.unsplash.com/photo-1503844183307-d036fae26896?w=1200&h=800&fit=crop',
        imageAlt: 'Diverse primate species in Kibale including monkeys and colobus',
      },
      {
        title: 'Bird Watching & Nature Walks',
        description: 'Explore 350+ bird species, giant trees, waterfalls, and rare flora ideal for nature photography and eco-tourism.',
        image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&h=800&fit=crop',
        imageAlt: 'Bird watching and nature walks in Kibale rainforest',
      },
      {
        title: 'Bigodi Wetland Sanctuary Tours',
        description: 'Walk boardwalks in this community-managed wetland, spotting primates, birds, and rare forest plants.',
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&h=800&fit=crop',
        imageAlt: 'Bigodi Wetland Sanctuary with diverse birdlife and primates',
      },
      {
        title: 'Cultural Experiences',
        description: 'Meet local communities to learn about traditional lifestyles, forest conservation, and cultural practices.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&h=800&fit=crop',
        imageAlt: 'Cultural experiences with local communities',
      },
    ],
    whyBookWithUs: [
      'Expert local guides with decades of experience in chimpanzee trekking and forest safaris',
      'Custom luxury, mid-range, and budget safari packages for all travelers',
      'Private and group tours with safety and eco-friendly operations',
      'Exclusive access to chimpanzee trekking permits secured well in advance',
      'Comprehensive itineraries combining chimpanzee trekking, primate tracking, and birdwatching',
      'Professional photography guidance for capturing primate encounters',
      'Bigodi wetland tours and community cultural experiences',
      'Convenient access: 5-6 hours from Kampala or flights to Fort Portal',
      'Comfortable accommodations from luxury lodges to eco-camps',
      '24/7 support throughout your Kibale rainforest adventure',
    ],
    faqs: [
      {
        question: 'What is Kibale National Park famous for?',
        answer: 'It is world-renowned for chimpanzee trekking, primate diversity, birdwatching, and tropical rainforest eco-tourism.',
      },
      {
        question: 'How can I trek chimpanzees in Kibale?',
        answer: 'Book trekking permits with Dream Destination Tours and Travel. Treks are guided by certified rangers, offering up-close encounters with habituated chimpanzee families.',
      },
      {
        question: 'When is the best time to visit Kibale?',
        answer: 'The dry seasons (June–September and December–February) are ideal for trekking, wildlife viewing, and photography.',
      },
      {
        question: 'What other primates can I see in Kibale?',
        answer: 'Visitors can see red-tailed monkeys, black-and-white colobus, olive baboons, and grey-cheeked mangabeys.',
      },
      {
        question: 'Can I do birdwatching in Kibale?',
        answer: 'Yes. Kibale hosts over 350 bird species, including shoebills, turacos, and hornbills, perfect for birding enthusiasts.',
      },
      {
        question: 'Is Kibale safe for tourists?',
        answer: 'Absolutely. All treks and forest activities are guided by trained local rangers, following strict safety and conservation protocols.',
      },
      {
        question: 'How long is a typical chimpanzee trekking tour?',
        answer: 'Trekking lasts 4–6 hours, depending on chimpanzee locations. Observation time with primates is carefully managed for safety and minimal disturbance.',
      },
      {
        question: 'Are there accommodations near Kibale?',
        answer: 'Yes. Options include luxury lodges, eco-camps, and budget-friendly lodges, all bookable through Dream Destination Tours and Travel.',
      },
      {
        question: 'How do I get to Kibale National Park?',
        answer: 'The most convenient routes are by road from Kampala (5–6 hours) or domestic flights to Fort Portal Airstrip, followed by short drives to lodges.',
      },
      {
        question: 'Can I combine Kibale with other Uganda tours?',
        answer: 'Yes. Kibale can be combined with Queen Elizabeth National Park, Bwindi gorilla trekking, Lake Bunyonyi, and Murchison Falls, creating a complete Ugandan safari adventure.',
      },
    ],
    cta: {
      title: 'Book Your Kibale National Park Chimpanzee Adventure Today!',
      description: 'Experience the primate-rich rainforest of Kibale National Park with Dream Destination Tours and Travel. Trek with chimpanzees, spot rare monkeys, enjoy birdwatching, and explore Bigodi Wetlands, all guided by expert local rangers. Whether you prefer luxury lodges, eco-camps, or budget trekking, we offer custom Kibale safari packages designed for a safe, immersive, and unforgettable wildlife adventure. Reserve your chimpanzee trekking permits and guided forest tours today – discover Uganda’s primate paradise with Dream Destination Tours!',
      backgroundImage: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1920&h=1080&fit=crop',
    },
  },
  {
    slug: 'mgahinga-gorilla-national-park',
    name: 'Mgahinga Gorilla National Park',
    country: 'Uganda',
    tagline: 'The Hidden Gem of the Virunga Mountains',
    description: 'Discover Mgahinga Gorilla National Park, Uganda\'s smallest but most enchanting national park, located in the southwestern Virunga Mountains, along the border with Rwanda and the Democratic Republic of Congo.',
    highlights: ['Mountain Gorilla Trekking', 'Golden Monkey Tracking', 'Volcano Hiking', 'Virunga Mountains'],
    wildlife: ['Mountain Gorillas', 'Golden Monkeys', 'Red-tailed Monkeys', 'Forest Elephants', 'Duikers', 'Over 180 Bird Species'],
    activities: ['Gorilla Trekking', 'Golden Monkey Tracking', 'Volcano Hiking', 'Cultural Visits', 'Bird Watching', 'Nature Walks'],
    // Extended rich content
    heroImage: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1920&h=1080&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503844183307-d036fae26896?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop',
    ],
    overview: 'Discover Mgahinga Gorilla National Park, Uganda’s smallest but most enchanting national park, located in the southwestern Virunga Mountains, along the border with Rwanda and the Democratic Republic of Congo. Known for its endangered mountain gorillas, golden monkeys, and stunning volcanic landscapes, Mgahinga offers intimate, once-in-a-lifetime wildlife encounters in a pristine setting.',
    history: 'Established in 1991, Mgahinga was created to protect the mountain gorillas and their critical forest habitats. Despite being Uganda’s smallest park, it is part of the larger Virunga Conservation Area, which spans three countries and plays a vital role in global gorilla conservation. Its volcanic peaks, including Mount Muhabura, Mount Gahinga, and Mount Sabyinyo, provide scenic trekking routes and rich biodiversity, making the park a hidden jewel for adventure travelers and conservation enthusiasts.',
    conservation: 'Mgahinga Gorilla National Park is at the forefront of gorilla and primate conservation, protecting a small but habituated population of mountain gorillas that allows close yet safe encounters with these endangered primates, while also playing a vital role in golden monkey conservation as one of the best places in Uganda to observe this rare species endemic to the Virunga forests; the park preserves pristine volcanic slopes, bamboo forests, and afro-montane vegetation that support diverse wildlife and birdlife, and through strong community and eco-tourism programs, local communities actively participate in gorilla guarding, conservation initiatives, and sustainable tourism to ensure mutual benefits for both people and wildlife.',
    attractions: [
      {
        title: 'Mountain Gorilla Trekking',
        description: 'Track habituated gorilla families through misty forests and volcanic slopes, spending an unforgettable hour observing these gentle giants.',
        image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&h=800&fit=crop',
        imageAlt: 'Mountain gorillas in Mgahinga Gorilla National Park',
      },
      {
        title: 'Golden Monkey Tracking',
        description: 'Hike bamboo and montane forests to encounter rare golden monkeys in their natural habitat.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Golden monkeys in bamboo forests of Mgahinga',
      },
      {
        title: 'Volcano Hiking',
        description: 'Climb Mount Muhabura, Mount Gahinga, and Mount Sabyinyo for stunning panoramic views of the Virunga Mountains.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop',
        imageAlt: 'Volcanic peaks of the Virunga Mountains in Mgahinga',
      },
      {
        title: 'Cultural Visits',
        description: 'Meet local communities and gorilla guardians to learn about conservation efforts, traditional customs, and sustainable tourism.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&h=800&fit=crop',
        imageAlt: 'Cultural experiences with local communities',
      },
      {
        title: 'Birdwatching & Nature Walks',
        description: 'Explore endemic bird species, butterflies, and unique flora, ideal for photography and eco-tourism experiences.',
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&h=800&fit=crop',
        imageAlt: 'Birdwatching and nature walks in Mgahinga',
      },
    ],
    whyBookWithUs: [
      'Expert local guides with in-depth knowledge of Mgahinga gorilla trekking and golden monkey tracking',
      'Tailored luxury, budget, and private trekking packages for gorillas and golden monkeys',
      'Safe, eco-friendly tours with certified Uganda Wildlife Authority ranger support',
      'Exclusive access to gorilla trekking permits, golden monkey tours, and volcanic hikes',
      'Comprehensive itineraries combining gorilla trekking, primate tracking, volcano hikes, birdwatching, and cultural visits',
      'Flexible booking options with customizable Uganda safari packages',
      'Professional photography guidance for capturing perfect wildlife moments',
      'Seamless logistics including permits, accommodations, transportation, and park fees',
      'Expert knowledge of best seasons, gorilla family behaviors, and trekking conditions',
      'Commitment to responsible tourism supporting gorilla conservation and local communities',
    ],
    faqs: [
      {
        question: 'What is Mgahinga Gorilla National Park famous for?',
        answer: 'It\'s famous for mountain gorilla trekking, golden monkey sightings, volcano hiking, and pristine Virunga landscapes.',
      },
      {
        question: 'How can I trek gorillas in Mgahinga?',
        answer: 'Book with Dream Destination Tours and Travel. Treks are guided by trained local rangers, offering close encounters with habituated gorilla families.',
      },
      {
        question: 'When is the best time to visit Mgahinga?',
        answer: 'The dry seasons (June–September and December–February) are ideal for gorilla trekking, golden monkey tracking, and hiking.',
      },
      {
        question: 'What other primates can I see?',
        answer: 'Visitors may see golden monkeys, red-tailed monkeys, and other rare primates in their natural forest habitats.',
      },
      {
        question: 'Can I hike the Virunga volcanoes?',
        answer: 'Yes. Mount Muhabura, Mount Gahinga, and Mount Sabyinyo offer challenging yet rewarding trekking experiences with panoramic views.',
      },
      {
        question: 'Are there accommodations near Mgahinga?',
        answer: 'Yes. Options include luxury lodges, eco-camps, and budget-friendly guesthouses, all arranged by Dream Destination Tours and Travel.',
      },
      {
        question: 'Is Mgahinga safe for tourists?',
        answer: 'Absolutely. All trekking and forest activities are guided by certified rangers, following strict safety and conservation protocols.',
      },
      {
        question: 'How long is a typical gorilla trekking tour?',
        answer: 'Treks last 2–5 hours, depending on gorilla locations, with 1 hour observation time allowed with gorillas.',
      },
      {
        question: 'How do I get to Mgahinga?',
        answer: 'Access is best via Kigali International Airport with road transfer, or domestic flights to Kisoro Airstrip, followed by short drives to the park.',
      },
      {
        question: 'Can I combine Mgahinga with other Uganda parks?',
        answer: 'Yes. Mgahinga can be combined with Bwindi Impenetrable Forest, Queen Elizabeth National Park, and Lake Bunyonyi, creating a complete southwestern Uganda gorilla safari.',
      },
    ],
    cta: {
      title: 'Book Your Mgahinga Gorilla National Park Safari Today!',
      description: 'Experience the hidden beauty of Mgahinga Gorilla National Park with Dream Destination Tours and Travel. Trek endangered mountain gorillas, track rare golden monkeys, and hike the Virunga volcanoes, guided by expert local rangers. Whether you seek luxury lodges, eco-camps, or budget trekking packages, we offer custom Mgahinga gorilla safari experiences designed for wildlife encounters, photography, and adventure. Reserve your gorilla trekking permits and guided tours today – explore Uganda’s Virunga jewel with Dream Destination Tours!',
      backgroundImage: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1920&h=1080&fit=crop',
    },
  },
  {
    slug: 'nyungwe-forest',
    name: 'Nyungwe Forest National Park',
    country: 'Rwanda',
    tagline: 'The Primate and Rainforest Paradise',
    description: 'Nyungwe is one of the oldest and most biodiverse rainforests in Africa. It\'s famous for chimpanzee trekking and the thrilling canopy walkway suspended high above the forest floor.',
    highlights: ['Canopy Walkway', 'Chimpanzee Trekking', 'Ancient Rainforest', '13 Primate Species'],
    wildlife: ['Chimpanzees', 'Angolan Colobus Monkeys', 'L\'Hoest\'s Monkeys', 'Grey-cheeked Mangabeys', 'Forest Duikers', 'Over 310 Bird Species'],
    activities: ['Chimpanzee Trekking', 'Canopy Walk', 'Colobus Tracking', 'Waterfall Hikes', 'Bird Watching', 'Forest Trails'],
    // Extended rich content
    heroImage: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1920&h=1080&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503844183307-d036fae26896?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    ],
    overview: 'Discover Nyungwe National Park, Rwanda’s ancient rainforest and biodiversity hotspot, home to over 13 species of primates, including chimpanzees, colobus monkeys, and grey-cheeked mangabeys. Nestled in the southwestern highlands of Rwanda, Nyungwe is a haven for eco-tourism, wildlife enthusiasts, birdwatchers, and adventure travelers, offering pristine rivers, waterfalls, and dense tropical forests.',
    history: 'Established in 2004, Nyungwe National Park protects over 1,000 km² of montane rainforest, one of the oldest forests in Africa. It is part of the Congo-Nile Divide and is globally recognized for primates, biodiversity, and endemic species. Historically, the park has been a crucial site for scientific research, particularly on chimpanzees and forest ecology, helping Rwanda become a world-class destination for primate tourism.',
    conservation: 'Nyungwe National Park is a leader in forest and primate conservation, with ongoing chimpanzee tracking and protection programs that monitor over 1,500 chimpanzees and other primates to ensure population growth and safeguard them from poaching, while dedicated research centers and primate observation stations support global studies in biodiversity, ecology, and conservation science; through strong community conservation initiatives, local communities actively engage in forest protection, eco-tourism, and sustainable livelihood programs to ensure conservation benefits both wildlife and people.',
    attractions: [
      {
        title: 'Chimpanzee Trekking',
        description: 'Track our closest relatives through the ancient rainforest, observing their behavior and social interactions.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Chimpanzees in Nyungwe Forest rainforest habitat',
      },
      {
        title: 'Colobus Monkey Tracking',
        description: 'Spot rare and endangered Angolan colobus monkeys swinging through the treetops.',
        image: 'https://images.unsplash.com/photo-1503844183307-d036fae26896?w=1200&h=800&fit=crop',
        imageAlt: 'Angolan colobus monkeys in forest canopy',
      },
      {
        title: 'Canopy Walk & Forest Trails',
        description: 'Walk across the spectacular Nyungwe canopy walkway, enjoy scenic forest hikes, and explore waterfalls and viewpoints.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        imageAlt: 'Canopy walkway suspended high above Nyungwe rainforest',
      },
      {
        title: 'Bird Watching & Wildlife Photography',
        description: 'Over 300 bird species, including sunbirds, turacos, and forest raptors, provide exceptional wildlife photography opportunities.',
        image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&h=800&fit=crop',
        imageAlt: 'Bird watching and wildlife photography in Nyungwe',
      },
      {
        title: 'Cultural Experiences',
        description: 'Visit nearby communities to learn Rwandan forest culture, traditions, and conservation practices.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&h=800&fit=crop',
        imageAlt: 'Cultural experiences with local communities',
      },
      {
        title: 'Waterfalls & Scenic Hikes',
        description: 'Explore Isumo, Kamiranzovu, and other hidden waterfalls, trekking through lush montane forests.',
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&h=800&fit=crop',
        imageAlt: 'Waterfalls and scenic hikes in Nyungwe Forest',
      },
      {
        title: 'Luxury & Eco-Lodge Stays',
        description: 'Overnight options include eco-lodges, forest camps, and luxury accommodations inside or near the park.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
        imageAlt: 'Luxury eco-lodge accommodations in Nyungwe',
      },
    ],
    whyBookWithUs: [
      'Expert local guides experienced in Nyungwe rainforest and primate tracking',
      'Tailored luxury, budget, and private safari packages for all travelers',
      'Private or group tours with safe, eco-friendly operations',
      'Exclusive access to chimpanzee trekking permits and canopy walk experiences',
      'Comprehensive itineraries combining primate trekking, bird watching, and waterfall hikes',
      'Professional photography guidance to capture rainforest wildlife and landscapes',
      'Cultural encounters with local communities practicing sustainable forest conservation',
      'Comfortable accommodations from luxury eco-lodges to forest camps',
      'Complete logistics: permits, transportation, expert naturalist guides',
      '24/7 support throughout your Nyungwe rainforest adventure',
    ],
    faqs: [
      {
        question: 'What is Nyungwe National Park famous for?',
        answer: 'Nyungwe is renowned for chimpanzee trekking, colobus monkeys, canopy walks, waterfalls, birdwatching, and pristine montane rainforest.',
      },
      {
        question: 'How can I go chimpanzee trekking in Nyungwe?',
        answer: 'Book chimpanzee trekking permits through Dream Destination Tours and Travel. Treks are guided by trained local rangers, lasting 2–5 hours in the ancient rainforest.',
      },
      {
        question: 'When is the best time to visit Nyungwe?',
        answer: 'The dry seasons (June–September and December–February) are ideal for trekking, wildlife spotting, and photography. Rainy months can make trails slippery.',
      },
      {
        question: 'What activities are available in Nyungwe?',
        answer: 'Activities include chimpanzee and colobus tracking, canopy walks, forest hikes, waterfalls, birdwatching, wildlife photography, and cultural visits.',
      },
      {
        question: 'Can I experience the Nyungwe canopy walk?',
        answer: 'Yes! The canopy walk provides spectacular aerial views of the rainforest, primates, and waterfalls, perfect for adventure and photography.',
      },
      {
        question: 'Are chimpanzees safe to observe in Nyungwe?',
        answer: 'Yes. All encounters are closely monitored by rangers, with strict rules to protect both visitors and wildlife.',
      },
      {
        question: 'How long is a typical chimpanzee trekking tour?',
        answer: 'Treks last 2–5 hours, depending on the location of chimpanzee groups. Observation time is 1 hour at most, providing a safe and intimate wildlife experience.',
      },
      {
        question: 'What other wildlife can I see in Nyungwe?',
        answer: 'Visitors can spot colobus monkeys, forest duikers, birds, reptiles, and a variety of endemic plant species.',
      },
      {
        question: 'How do I get to Nyungwe National Park?',
        answer: 'The park is approximately 5–6 hours by road from Kigali International Airport, and Dream Destination Tours and Travel provides private transfers and safari vehicles.',
      },
      {
        question: 'Are there accommodations in Nyungwe National Park?',
        answer: 'Yes. Options include eco-lodges, forest camps, and luxury lodges, all bookable through Dream Destination Tours and Travel.',
      },
    ],
    cta: {
      title: 'Book Your Nyungwe National Park Adventure Today!',
      description: 'Embark on a primates and rainforest safari with Dream Destination Tours and Travel. Trek with chimpanzees, spot colobus monkeys, enjoy canopy walks, and explore hidden waterfalls. Whether you prefer luxury lodges, eco-camps, or budget trekking, we offer custom Nyungwe safari packages tailored for an unforgettable experience. Reserve your chimpanzee trekking permits, canopy walk experiences, and guided forest tours today – discover Rwanda’s ancient rainforest paradise with Dream Destination Tours!',
      backgroundImage: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1920&h=1080&fit=crop',
    },
  },
  {
    slug: 'tsavo',
    name: 'Tsavo National Park',
    country: 'Kenya',
    tagline: 'Land of the Red Elephants',
    description: 'Tsavo is one of the world\'s largest wildlife sanctuaries, divided into East and West sections. It\'s famous for its red elephants, which dust themselves with the area\'s distinctive red soil.',
    highlights: ['Red Elephants', 'Mzima Springs', 'Lava Flows', 'Vast Wilderness'],
    wildlife: ['Elephants', 'Lions', 'Leopards', 'Hippos', 'Crocodiles', 'Over 500 Bird Species'],
    activities: ['Game Drives', 'Mzima Springs Visit', 'Nature Walks', 'Bird Watching', 'Shetani Lava Flow'],
  },
  {
    slug: 'lake-nakuru',
    name: 'Lake Nakuru National Park',
    country: 'Kenya',
    tagline: 'Pink Lake of Flamingos',
    description: 'Lake Nakuru is a rhino sanctuary and was once famous for its massive flocks of flamingos. The park offers excellent Big Five viewing in a compact, beautiful setting.',
    highlights: ['Rhino Sanctuary', 'Flamingos', 'Baboon Cliff Views', 'Diverse Landscapes'],
    wildlife: ['Black Rhinos', 'White Rhinos', 'Lions', 'Leopards', 'Flamingos', 'Pelicans'],
    activities: ['Game Drives', 'Rhino Tracking', 'Bird Watching', 'Picnic Lunches', 'Photography'],
  },
  {
    slug: 'gishwati-mukura',
    name: 'Gishwati-Mukura National Park',
    country: 'Rwanda',
    tagline: 'Rwanda\'s Hidden Rainforest Treasure',
    description: 'Gishwati-Mukura is Rwanda\'s lesser-known but ecologically critical rainforest reserve, located in the western highlands. This biodiversity hotspot is home to endangered primates, rare bird species, and diverse flora.',
    highlights: ['Primate Tracking', 'Reforestation Success', 'Golden Monkeys', 'Bird Diversity'],
    wildlife: ['Angolan Colobus Monkeys', 'Golden Monkeys', 'Forest Duikers', 'Over 200 Bird Species', 'Endemic Flora'],
    activities: ['Primate Tracking', 'Bird Watching', 'Forest Hikes', 'Conservation Tours', 'Cultural Experiences'],
    // Extended rich content
    heroImage: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1920&h=1080&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503844183307-d036fae26896?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    ],
    overview: 'Discover Gishwati-Mukura National Park, Rwanda\'s lesser-known but ecologically critical rainforest reserve, located in the western highlands. This park is a biodiversity hotspot, home to endangered primates, rare bird species, and diverse flora, offering an authentic eco-tourism and wildlife experience. Its dense tropical forests, rolling hills, and scenic landscapes make it a unique destination for adventure travelers, conservation enthusiasts, and wildlife photographers. As Rwanda\'s newest national park, it represents a remarkable conservation success story, transforming degraded forest into thriving wildlife habitat through community-led restoration efforts.',
    history: 'Gishwati-Mukura National Park was established in 2015 by merging Gishwati Forest and Mukura Forest Reserves to protect endangered species and restore forest ecosystems. Once threatened by deforestation and human settlement, the park has undergone extensive reforestation, community conservation, and wildlife protection programs, making it a model for sustainable eco-tourism and forest rehabilitation in Rwanda. The transformation from fragmented forest patches to a protected national park demonstrates Rwanda\'s commitment to environmental restoration and biodiversity conservation. Today, it stands as a testament to what can be achieved when communities, government, and conservation organizations work together.',
    conservation: 'The park plays a vital role in protecting Rwanda\'s montane rainforests. Primate conservation programs protect endangered species such as the Angolan colobus monkeys, golden monkeys, and chimpanzees in nearby corridors. Bird conservation efforts safeguard over 200 bird species, including rare and endemic birds, making it a birdwatching haven. Extensive reforestation programs, conducted in collaboration with local communities, help restore degraded forest areas, ensuring long-term ecosystem sustainability. Research centers support ecological studies, forest monitoring, and community education programs, connecting tourists with conservation initiatives. The park\'s success in forest restoration and community engagement serves as a model for similar projects across Africa.',
    attractions: [
      {
        title: 'Primate Tracking Adventure',
        description: 'Embark on guided primate tracking expeditions to spot Angolan colobus monkeys, golden monkeys, and other forest primates in their natural habitat. The park\'s dense canopy and lush understory provide ideal conditions for primate observation. Expert guides lead small groups through the forest, sharing insights into primate behavior, ecology, and ongoing conservation efforts. The intimate forest setting offers authentic wildlife encounters away from crowded tourist areas, perfect for photographers and nature enthusiasts seeking unique primate experiences.',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=800&fit=crop',
        imageAlt: 'Golden monkeys and colobus monkeys in Gishwati-Mukura forest',
      },
      {
        title: 'Bird Watching & Wildlife Photography',
        description: 'Explore one of Rwanda\'s premier birdwatching destinations with over 200 bird species, including rare and endemic species found nowhere else. The park\'s varied habitats—from dense forest to forest edges and wetlands—attract diverse birdlife including turacos, sunbirds, weavers, and forest raptors. Professional guides help identify species and position you for optimal photography. The combination of forest primates, colorful birds, and pristine landscapes creates exceptional opportunities for wildlife photographers seeking unique African rainforest imagery.',
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&h=800&fit=crop',
        imageAlt: 'Colorful forest birds and wildlife in Gishwati-Mukura',
      },
      {
        title: 'Guided Forest Hikes & Nature Walks',
        description: 'Discover the park\'s natural beauty through guided forest hikes and nature walks exploring dense tropical forests, rolling hills, and scenic landscapes. Expert naturalist guides interpret the forest ecosystem, pointing out medicinal plants, endemic flora, animal tracks, and ecological relationships. Trails range from easy walks to more challenging treks, accommodating various fitness levels. The immersive forest experience connects visitors with Rwanda\'s biodiversity while supporting conservation through eco-tourism revenue.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        imageAlt: 'Forest hiking trails through Gishwati-Mukura rainforest',
      },
      {
        title: 'Conservation & Cultural Experiences',
        description: 'Engage with local communities to learn about forest traditions, traditional practices, and community-led conservation initiatives. Participate in hands-on conservation programs including tree planting, forest monitoring, and wildlife protection activities. Visit community cooperatives benefiting from eco-tourism, understanding how sustainable tourism creates economic incentives for conservation. These cultural and conservation tours provide deep insights into Rwanda\'s forest preservation efforts and the vital role communities play in protecting biodiversity for future generations.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop',
        imageAlt: 'Community conservation and cultural experiences in Gishwati-Mukura',
      },
    ],
    whyBookWithUs: [
      'Expert local guides with extensive experience in Gishwati-Mukura National Park',
      'Tailored luxury, budget, and private safari packages for all travelers',
      'Private or group tours with safe, eco-friendly operations',
      'Exclusive access to primate tracking, birdwatching, and conservation tours',
      'Comprehensive itineraries combining forest hikes, wildlife observation, and cultural experiences',
      'Professional photography guidance for capturing rainforest wildlife and landscapes',
      'Hands-on conservation experiences including reforestation programs',
      'Comfortable eco-lodge accommodations fully integrated into the forest environment',
      'Complete logistics: permits, transportation, expert naturalist guides',
      '24/7 support throughout your Gishwati-Mukura rainforest adventure',
    ],
    faqs: [
      {
        question: 'What is Gishwati-Mukura National Park famous for?',
        answer: 'The park is renowned for primate tracking (especially golden monkeys and Angolan colobus monkeys), forest birdwatching with over 200 species, successful reforestation programs, and pristine rainforest landscapes. It\'s also celebrated as a model for community-based conservation and forest rehabilitation in Rwanda.',
      },
      {
        question: 'What wildlife can I see in Gishwati-Mukura?',
        answer: 'Visitors can see Angolan colobus monkeys, golden monkeys, forest duikers, rare bird species including endemic Albertine Rift species, various small mammals, and diverse endemic plant species. The park\'s biodiversity is remarkable given its relatively small size, making it a concentrated wildlife experience.',
      },
      {
        question: 'When is the best time to visit Gishwati-Mukura?',
        answer: 'The dry seasons (June–September and December–February) are ideal for forest hikes, wildlife observation, and photography, as trails are more accessible and less muddy. However, the park can be visited year-round. The wet seasons offer lush vegetation, fewer tourists, and excellent birdwatching as many species are breeding.',
      },
      {
        question: 'What activities are available in Gishwati-Mukura?',
        answer: 'Activities include primate tracking for colobus and golden monkeys, birdwatching tours, guided forest hikes and nature walks, eco-tourism experiences, cultural visits to local communities, photography tours, and hands-on conservation programs including tree planting and forest monitoring. Multi-day packages can combine several activities.',
      },
      {
        question: 'Is Gishwati-Mukura safe for tourists?',
        answer: 'Yes. All activities are guided by trained local rangers with extensive knowledge of the forest and wildlife. Strict conservation rules and safety protocols ensure visitor protection and wildlife welfare. The park has excellent safety records, and community engagement ensures welcoming, secure tourism experiences.',
      },
      {
        question: 'Can I go primate tracking in Gishwati-Mukura?',
        answer: 'Yes! Guided primate tracking tours allow visitors to observe Angolan colobus monkeys, golden monkeys, and other forest primates in their natural habitats. These experiences are led by expert trackers who know primate movements and behaviors, maximizing encounter success while minimizing disturbance to wildlife.',
      },
      {
        question: 'How long is a typical forest trek?',
        answer: 'Forest treks usually last 2–5 hours depending on trail length, terrain, and wildlife spotting opportunities. Primate tracking times vary based on animal locations. The park offers various trail options accommodating different fitness levels, from easy nature walks to more challenging hikes through dense forest.',
      },
      {
        question: 'How do I get to Gishwati-Mukura National Park?',
        answer: 'The park is approximately 3–4 hours by road from Kigali International Airport via well-maintained highways through Rwanda\'s scenic countryside. The drive offers beautiful views of terraced hills, tea plantations, and rural villages. Dream Destination Tours and Travel provides comfortable private transfers in safari vehicles, making the journey pleasant and convenient.',
      },
      {
        question: 'Are there accommodations in Gishwati-Mukura?',
        answer: 'Yes. Accommodation options include eco-lodges, boutique forest camps, and luxury accommodations, all fully integrated into the rainforest environment with minimal environmental impact. Properties range from basic but comfortable forest camps to upscale eco-lodges offering modern amenities while maintaining authentic rainforest immersion. All options are bookable through Dream Destination Tours and Travel.',
      },
      {
        question: 'Can I learn about conservation and reforestation efforts?',
        answer: 'Absolutely. Tourists can participate in eco-tourism and conservation programs, learning about forest restoration, wildlife protection, and community-led initiatives. Hands-on experiences include tree planting, visiting reforestation sites, meeting with conservation teams, and understanding the scientific research conducted in the park. These programs provide meaningful connections to conservation while supporting ongoing restoration efforts.',
      },
    ],
    cta: {
      title: 'Book Your Gishwati-Mukura Adventure Today!',
      description: 'Explore Rwanda\'s hidden rainforest gem with Dream Destination Tours and Travel. Trek through pristine forests, track golden monkeys and colobus monkeys, enjoy birdwatching and photography, and immerse yourself in community-led conservation initiatives. We offer customized packages for a safe, authentic, and unforgettable rainforest adventure.',
      backgroundImage: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1920&h=1080&fit=crop',
    },
  },
  {
    slug: 'tarangire',
    name: 'Tarangire National Park',
    country: 'Tanzania',
    tagline: 'Land of Giants',
    description: 'Tarangire is famous for its large elephant herds, iconic baobab trees, and diverse wildlife. The Tarangire River is the lifeline that draws animals during the dry season.',
    highlights: ['Elephant Herds', 'Baobab Trees', 'Tarangire River', 'Tree-Climbing Pythons'],
    wildlife: ['Elephants', 'Lions', 'Leopards', 'Giraffes', 'Zebras', 'Over 550 Bird Species'],
    activities: ['Game Drives', 'Walking Safaris', 'Night Drives', 'Bird Watching', 'Cultural Tours'],
  },
  {
    slug: 'lake-manyara',
    name: 'Lake Manyara National Park',
    country: 'Tanzania',
    tagline: 'A Gem of the Rift Valley',
    description: 'Lake Manyara is a compact park famous for its tree-climbing lions, large baboon troops, and flamingo-lined shores. The lake itself covers much of the park.',
    highlights: ['Tree-Climbing Lions', 'Flamingos', 'Rift Valley Escarpment', 'Hot Springs'],
    wildlife: ['Lions', 'Elephants', 'Hippos', 'Flamingos', 'Baboons', 'Over 400 Bird Species'],
    activities: ['Game Drives', 'Canopy Walkway', 'Night Drives', 'Mountain Biking', 'Cultural Tours'],
  },
];

export const getParkBySlug = (slug: string): Park | undefined => {
  return parks.find((p) => p.slug === slug);
};
