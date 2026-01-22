// Country-specific data for destination pages

export interface CountryItinerary {
  id: string;
  title: string;
  days: number;
  description: string;
  image: string;
  highlights: string[];
}

export interface CountryActivity {
  id: string;
  title: string;
  description: string;
  image: string;
  howOffered: string;
}

export interface CountryPark {
  id: string;
  name: string;
  slug: string;
  description: string;
  images: string[];
}

export interface CarRental {
  id: string;
  name: string;
  image: string;
  description: string;
  capacity: string;
}

export interface CountryData {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  overview: {
    title: string;
    description: string;
    experience: string;
    images: string[];
  };
  itineraries: CountryItinerary[];
  activities: CountryActivity[];
  parks: CountryPark[];
  cars: CarRental[];
  bestTime: string;
  currency: string;
  language: string;
}

export const countryData: Record<string, CountryData> = {
  
  rwanda: {
    slug: 'rwanda',
    name: 'Rwanda',
    tagline: 'Discover Rwanda Tours with Dream Destination Tours and Travel – Expert Guides & Best Value Safaris.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1661955494685-3e49300391a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cndhbmRhJTIwaGlsbHN8ZW58MHx8MHx8fDA%3D',
    overview: {
      title: 'Discover Rwanda Tours with Dream Destination Tours and Travel – Expert Guides & Best Value Safaris.',
      description: 'Discover Rwanda with Dream Destination Tours and Travel, the Land of a Thousand Hills. Rwanda offers breathtaking landscapes, mountain gorillas, rich wildlife, and a safe, welcoming environment for travelers. We provide expertly guided tours in Rwanda, including gorilla trekking, wildlife safaris, cultural experiences, and city tours, all designed to give excellent value for money. Travel with experienced local guides and enjoy unforgettable journeys tailored to your budget and interests.',
      experience: 'Our team has been operating in Rwanda since the country\'s tourism renaissance, with deep roots in local communities and strong partnerships with conservation programs. Dream Destination Tours and Travel delivers authentic, responsible, and meaningful travel experiences that support wildlife protection and community development across Rwanda.',
      images: [
        'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop',
      ],
    },
    itineraries: [
      {
        id: 'rw-1',
        title: '5 Days Rwanda Gorilla Safari',
        days: 5,
        description: 'Trek through the Virunga volcanoes to meet Rwanda\'s famous mountain gorillas.',
        image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
        highlights: ['Gorilla Trekking', 'Volcanoes NP', 'Kigali City Tour'],
      },
      {
        id: 'rw-2',
        title: '7 Days Rwanda Complete Safari',
        days: 7,
        description: 'Experience gorillas, chimps, and Big Five game drives in one incredible trip.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        highlights: ['Gorillas', 'Chimpanzees', 'Akagera Safari'],
      },
      {
        id: 'rw-3',
        title: '3 Days Akagera Safari',
        days: 3,
        description: 'Discover Rwanda\'s only Big Five park with diverse savanna landscapes.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        highlights: ['Big Five', 'Boat Safari', 'Bird Watching'],
      },
      {
        id: 'rw-4',
        title: '4 Days Nyungwe Forest Experience',
        days: 4,
        description: 'Trek for chimpanzees and walk the famous canopy walkway.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        highlights: ['Chimp Trekking', 'Canopy Walk', 'Tea Plantations'],
      },
      {
        id: 'rw-5',
        title: '6 Days Golden Monkey & Gorilla Trek',
        days: 6,
        description: 'Double primate adventure with golden monkeys and mountain gorillas.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        highlights: ['Gorilla Trek', 'Golden Monkeys', 'Volcano Hike'],
      },
      {
        id: 'rw-6',
        title: '10 Days Rwanda Explorer',
        days: 10,
        description: 'The ultimate Rwanda journey from Kigali to Lake Kivu and beyond.',
        image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
        highlights: ['All Parks', 'Lake Kivu', 'Cultural Immersion'],
      },
    ],
    activities: [
      {
        id: 'rw-act-1',
        title: 'Gorilla Trekking',
        description: 'Rwanda Gorilla Trekking in Volcanoes National Park offers one of the world\'s most exclusive and accessible mountain gorilla experiences. Dream Destination Tours and Travel specializes in professionally guided gorilla trekking tours in Rwanda, taking you deep into Volcanoes National Park to visit well-habituated gorilla families in their natural habitat. Led by expert local guides, our gorilla safaris combine conservation, safety, and unforgettable encounters, making Rwanda one of the top destinations in Africa for luxury and value-for-money gorilla trekking experiences.',
        image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
        howOffered: 'Gorilla trekking in Rwanda is offered in Volcanoes National Park and can be done in one day from Kigali, with a 2.5-hour drive each way. Trekking starts early in the morning, with hikes lasting 3 to 5 hours depending on gorilla movement. The gorilla permit costs USD 1,500 per person and includes park access, expert ranger guides, and conservation support. There is a 98% chance of seeing mountain gorillas, making this one of Africa\'s most guaranteed wildlife experiences. Dream Destination Tours and Travel accommodates all guests and provides professionally guided, value-for-money gorilla trekking tours in Rwanda.',
      },
      {
        id: 'rw-act-2',
        title: 'Chimpanzee Trekking',
        description: 'Chimpanzee trekking in Nyungwe National Park is one of Rwanda\'s most exciting rainforest experiences. Nyungwe is home to large, well-habituated chimpanzee communities, offering high chances of close encounters in a pristine tropical forest. Treks start early in the morning with experienced guides and usually last 2 to 4 hours. Located in southwest Rwanda, Nyungwe is accessible by road from Kigali and is ideal for nature lovers, primate enthusiasts, and adventure travelers. Dream Destination Tours and Travel offers professionally guided chimpanzee trekking tours in Nyungwe National Park, combining expert guidance, safety, and excellent value for money.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        howOffered: 'Chimpanzee trekking in Nyungwe National Park is offered at USD 250 per person, including park entry fees and professional guiding. The trek starts early at around 5:00 am and requires a minimum of two days due to distance and forest activities, making it ideal for an overnight safari. Trekking lasts 3 to 5 hours, with one full hour spent observing chimpanzees at close range. The experience is available for budget, mid-range, and luxury travelers. Dream Destination Tours and Travel provides well-organized, expert-guided chimpanzee trekking tours in Nyungwe National Park with great value for money.',
      },
      {
        id: 'rw-act-3',
        title: 'Game Drive & Boat Safari In Akagera National Park',
        description: 'Experience Rwanda\'s Big Five and diverse wildlife on expertly guided game drives and unique boat safaris in Akagera National Park, the only savannah park in Africa with stunning lakes and rivers. Just 2–3 hours from Kigali, our tours can be done in one day or as multi-day safaris. See lions, elephants, rhinos, giraffes, zebras, hippos, and rich birdlife while enjoying scenic boat rides on Lake Ihema. Dream Destination Tours and Travel offers safe, value-for-money safari tours, combining wildlife photography, expert local guides, and unforgettable African safari experiences. Perfect for budget, mid-range, and luxury travelers, Akagera game drives and boat safaris are among Rwanda\'s top wildlife adventures.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        howOffered: 'Akagera Game Drive & Boat Safari is offered as a 4–7 hour tour from Kigali, available in one day. Dream Destination Tours and Travel organizes everything with expert local guides, including wildlife spotting, boat rides on Lake Ihema, park entry, and safe, value-for-money safari experiences. Perfect for budget, mid-range, and luxury travelers seeking Rwanda\'s Big Five and unique savannah adventures.',
      },
      {
        id: 'rw-act-4',
        title: 'Cultural Tours & Community Experiences in Rwanda',
        description: 'Discover Rwanda\'s vibrant culture and heritage with Dream Destination Tours and Travel. Explore traditional villages, witness captivating Rwandan dance and music, and learn inspiring stories of reconciliation and resilience. Our cultural tours provide authentic experiences that connect travelers with local communities and Rwanda\'s history.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        howOffered: 'We organize fully guided cultural tours including visits to Iby\'Iwacu Cultural Village, Kigali Genocide Memorial, and other community tourism projects. Tours are tailored for all travelers—budget, mid-range, or luxury—offering immersive, safe, and value-for-money experiences in Rwanda.',
      },
      {
        id: 'rw-act-5',
        title: 'Golden Monkey Tracking in Volcanoes National Park – Rwanda',
        description: 'Experience the rare and playful golden monkeys in Volcanoes National Park with Dream Destination Tours and Travel. This guided trek takes you through lush bamboo forests, lasting 2–4 hours, with expert local guides ensuring safe and unforgettable wildlife encounters. Perfect for nature lovers and wildlife photographers, our golden monkey tours in Rwanda combine eco-tourism, conservation support, and value-for-money safari experiences, making it a must-do activity on your Volcanoes National Park adventure.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        howOffered: 'just a short drive from Kigali. Treks start early and last up to 4 hours, giving you the best chance to see these rare primates in their natural bamboo forest habitat. Fully organized by our expert guides, the tour is safe, affordable, and designed for unforgettable wildlife experiences, combining Rwanda eco-tourism, conservation support, and great value for money.',
      },
    ],
    parks: [
      {
        id: 'rw-park-1',
        name: 'Volcanoes National Park',
        slug: 'volcanoes-national-park',
        description: 'Volcanoes National Park, home to endangered mountain gorillas and playful golden monkeys, is one of Rwanda\'s top safari destinations. Trek through lush forests on gorilla trekking or golden monkey tracking adventures, hike the majestic Virunga volcanoes, and explore cultural sites like the Dian Fossey Gorilla Museum. Dream Destination Tours and Travel offers fully guided, safe, and value-for-money tours, making Volcanoes National Park a must-visit for wildlife lovers, adventure travelers, and nature enthusiasts in Rwanda.',
        images: [
          'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'rw-park-2',
        name: 'Akagera National Park',
        slug: 'akagera-national-park',
        description: 'Akagera National Park, Rwanda\'s only Big Five safari destination, features stunning landscapes from papyrus swamps to rolling savannah hills. See lions, elephants, rhinos, giraffes, zebras, and diverse birdlife on guided game drives and boat safaris. Reintroduced wildlife highlights Rwanda\'s remarkable conservation success. Tours can be done in one day from Kigali, fully organized by Dream Destination Tours and Travel for safe, value-for-money Rwanda safari experiences.',
        images: [
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'rw-park-3',
        name: 'Nyungwe Forest National Park',
        slug: 'nyungwe-forest',
        description: 'Nyungwe Forest National Park, one of Africa\'s oldest rainforests, is home to 13 primate species including chimpanzees and colobus monkeys. Enjoy chimpanzee trekking, scenic hiking trails, and the famous canopy walkway 50 meters above the forest floor. Dream Destination Tours and Travel offers fully guided, safe, and value-for-money Rwanda wildlife and rainforest tours, perfect for nature lovers and adventure travelers.',
        images: [
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'rw-park-4',
        name: 'Gishwati-Mukura National Park',
        slug: 'gishwati-mukura',
        description: 'Gishwati-Mukura National Park, Rwanda\'s newest national park, protects lush forest fragments home to chimpanzees and rare golden monkeys. Explore guided wildlife trekking, scenic forest hikes, and immersive eco-tourism experiences. Dream Destination Tours and Travel offers fully organized, safe, and value-for-money tours, perfect for nature lovers and adventure travelers in Rwanda.',
        images: [
          'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        ],
      },
    ],
    cars: [
      {
        id: 'car-1',
        name: 'Toyota Land Cruiser',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
        description: 'Dream Destination Tours and Travel offers reliable and affordable car rental services in Rwanda, perfect for tourists, business travelers, and adventure seekers. Choose from a wide range of vehicles, including 4x4s, for self-drive adventures or chauffeur-driven tours. Explore Rwanda\'s top destinations Kigali City, Volcanoes National Park, Akagera National Park, Nyungwe Forest, and Lake Kivu—with comfort, safety, and flexibility. Our car rental services are fully insured, professionally maintained, and include competitive rates, making it easy to plan your Rwanda safari, city tour, or multi-day trip. Whether you want budget, mid-range, or luxury rental options, we ensure a seamless travel experience, giving you freedom to explore Rwanda at your own pace.',
        capacity: '6-7 passengers',
      },
      {
        id: 'car-2',
        name: 'Toyota Safari Van',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
        description: 'Comfortable van ideal for road transfers and city tours.',
        capacity: '7-8 passengers',
      },
      {
        id: 'car-3',
        name: 'Land Rover Defender',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
        description: 'Classic safari vehicle perfect for rough terrain adventures.',
        capacity: '4-5 passengers',
      },
      {
        id: 'car-4',
        name: 'Toyota RAV4',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
        description: 'Compact SUV great for self-drive adventures.',
        capacity: '4 passengers',
      },
      {
        id: 'car-5',
        name: 'Toyota Coaster Bus',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        description: 'Ideal for larger groups and extended tours.',
        capacity: '25 passengers',
      },
    ],
    bestTime: 'June to September, December to February',
    currency: 'Rwandan Franc (RWF)',
    language: 'Kinyarwanda, English, French',
  },

  uganda: {
    slug: 'uganda',
    name: 'Uganda',
    tagline: 'The Pearl of Africa',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',
    overview: {
      title: 'Discover Uganda - The Pearl of Africa',
      description: 'Uganda is a land of extraordinary natural beauty, from the misty mountains home to endangered mountain gorillas to the vast savannas teeming with wildlife. Experience the source of the Nile, pristine lakes, and some of the most diverse ecosystems on the planet.',
      experience: 'With over 15 years of operating in Uganda, our expert local guides know every hidden gem and secret trail. We offer authentic, immersive experiences that connect you with Uganda\'s wildlife, culture, and stunning landscapes.',
      images: [
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      ],
    },
    itineraries: [
      {
        id: 'ug-1',
        title: '5 Days Uganda Gorilla Safari',
        days: 5,
        description: 'Trek through Bwindi Impenetrable Forest to encounter mountain gorillas in their natural habitat.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        highlights: ['Gorilla Trekking', 'Bwindi Forest', 'Lake Bunyonyi'],
      },
      {
        id: 'ug-2',
        title: '7 Days Uganda Wildlife Adventure',
        days: 7,
        description: 'Experience the best of Uganda\'s wildlife from Queen Elizabeth to Murchison Falls.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        highlights: ['Big Five Safari', 'Boat Cruises', 'Tree-climbing Lions'],
      },
      {
        id: 'ug-3',
        title: '3 Days Murchison Falls Safari',
        days: 3,
        description: 'Witness the world\'s most powerful waterfall and spot diverse wildlife.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        highlights: ['Murchison Falls', 'Game Drives', 'Nile Boat Safari'],
      },
      {
        id: 'ug-4',
        title: '4 Days Chimpanzee Trekking',
        days: 4,
        description: 'Track chimpanzees in Kibale Forest, the primate capital of the world.',
        image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
        highlights: ['Chimp Trekking', 'Kibale Forest', 'Bigodi Wetland'],
      },
      {
        id: 'ug-5',
        title: '10 Days Complete Uganda Safari',
        days: 10,
        description: 'The ultimate Uganda experience covering gorillas, chimps, and savanna wildlife.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        highlights: ['Gorillas', 'Chimpanzees', 'Big Five', 'Cultural Tours'],
      },
      {
        id: 'ug-6',
        title: '6 Days Queen Elizabeth Safari',
        days: 6,
        description: 'Explore one of Africa\'s most diverse parks with tree-climbing lions and hippos.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        highlights: ['Kazinga Channel', 'Ishasha Lions', 'Crater Lakes'],
      },
    ],
    activities: [
      {
        id: 'ug-act-1',
        title: 'Gorilla Trekking',
        description: 'An intimate encounter with mountain gorillas in their misty forest home. Uganda is home to half the world\'s remaining mountain gorillas.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        howOffered: 'Daily treks with certified guides. Permits must be booked 3-6 months in advance. Maximum 1 hour with gorilla family.',
      },
      {
        id: 'ug-act-2',
        title: 'Chimpanzee Tracking',
        description: 'Track our closest relatives through the ancient rainforests of Kibale, home to over 1,500 chimpanzees.',
        image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
        howOffered: 'Morning and afternoon sessions available. Habituation experiences offer extended 4-hour encounters.',
      },
      {
        id: 'ug-act-3',
        title: 'Game Drives',
        description: 'Explore vast savannas in search of lions, elephants, buffaloes, leopards, and hundreds of bird species.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        howOffered: 'Morning and evening drives in custom 4x4 safari vehicles with pop-up roofs for optimal viewing.',
      },
      {
        id: 'ug-act-4',
        title: 'Cultural Visits',
        description: 'Connect with local communities, visit traditional villages, and learn about Uganda\'s rich cultural heritage.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        howOffered: 'Half-day and full-day cultural immersion experiences with local guides and community members.',
      },
      {
        id: 'ug-act-5',
        title: 'Boat Safaris',
        description: 'Cruise the Nile, Kazinga Channel, and Lake Victoria for incredible wildlife viewing from the water.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        howOffered: 'Scheduled cruises daily. Private charter boats available for exclusive experiences.',
      },
    ],
    parks: [
      {
        id: 'ug-park-1',
        name: 'Bwindi Impenetrable Forest',
        slug: 'bwindi-impenetrable-forest',
        description: 'A UNESCO World Heritage Site and home to approximately half of the world\'s endangered mountain gorillas. This ancient forest is one of the most biologically diverse areas on Earth.',
        images: [
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'ug-park-2',
        name: 'Queen Elizabeth National Park',
        slug: 'queen-elizabeth',
        description: 'Uganda\'s most visited park, famous for tree-climbing lions, diverse ecosystems, and the wildlife-rich Kazinga Channel connecting two great lakes.',
        images: [
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'ug-park-3',
        name: 'Murchison Falls National Park',
        slug: 'murchison-falls',
        description: 'Uganda\'s largest national park, where the mighty Nile explodes through a narrow gorge to create the world\'s most powerful waterfall.',
        images: [
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'ug-park-4',
        name: 'Kibale Forest National Park',
        slug: 'kibale-forest',
        description: 'Known as the "Primate Capital of the World," Kibale is home to 13 primate species including over 1,500 chimpanzees.',
        images: [
          'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        ],
      },
    ],
    cars: [
      {
        id: 'car-1',
        name: 'Toyota Land Cruiser',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
        description: 'Premium 4x4 safari vehicle with pop-up roof for game viewing.',
        capacity: '6-7 passengers',
      },
      {
        id: 'car-2',
        name: 'Toyota Safari Van',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
        description: 'Comfortable van ideal for road transfers and city tours.',
        capacity: '7-8 passengers',
      },
      {
        id: 'car-3',
        name: 'Land Rover Defender',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
        description: 'Classic safari vehicle perfect for rough terrain adventures.',
        capacity: '4-5 passengers',
      },
      {
        id: 'car-4',
        name: 'Toyota RAV4',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
        description: 'Compact SUV great for self-drive adventures.',
        capacity: '4 passengers',
      },
      {
        id: 'car-5',
        name: 'Toyota Coaster Bus',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        description: 'Ideal for larger groups and extended tours.',
        capacity: '25 passengers',
      },
    ],
    bestTime: 'June to September, December to February',
    currency: 'Ugandan Shilling (UGX)',
    language: 'English, Swahili',
  },
  
  kenya: {
    slug: 'kenya',
    name: 'Kenya',
    tagline: 'Magical Kenya',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop',
    overview: {
      title: 'Discover Kenya - Magical Kenya',
      description: 'Kenya is where the African safari was born. From the iconic Masai Mara to the snow-capped peaks of Mount Kenya, this is a land of extraordinary contrasts. Witness the Great Migration, meet the Maasai people, and relax on pristine beaches.',
      experience: 'Our experienced team has been guiding travelers through Kenya for over a decade. We offer exclusive access to private conservancies, expert Maasai guides, and authentic cultural experiences.',
      images: [
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
      ],
    },
    itineraries: [
      {
        id: 'ke-1',
        title: '5 Days Masai Mara Safari',
        days: 5,
        description: 'Experience the world-famous Masai Mara and witness incredible wildlife.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        highlights: ['Big Five', 'Great Migration', 'Maasai Culture'],
      },
      {
        id: 'ke-2',
        title: '7 Days Kenya Wildlife Circuit',
        days: 7,
        description: 'From Amboseli to Masai Mara - Kenya\'s best parks in one journey.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        highlights: ['Amboseli', 'Lake Nakuru', 'Masai Mara'],
      },
      {
        id: 'ke-3',
        title: '3 Days Amboseli Safari',
        days: 3,
        description: 'See elephants against the backdrop of Mount Kilimanjaro.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        highlights: ['Elephant Herds', 'Kilimanjaro Views', 'Bird Watching'],
      },
      {
        id: 'ke-4',
        title: '10 Days Kenya & Tanzania Combined',
        days: 10,
        description: 'The ultimate East African safari combining two iconic destinations.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        highlights: ['Serengeti', 'Masai Mara', 'Ngorongoro'],
      },
      {
        id: 'ke-5',
        title: '8 Days Safari & Beach',
        days: 8,
        description: 'Combine bush adventures with relaxation on Kenya\'s beautiful coast.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        highlights: ['Masai Mara', 'Diani Beach', 'Mombasa'],
      },
      {
        id: 'ke-6',
        title: '4 Days Lake Nakuru & Hell\'s Gate',
        days: 4,
        description: 'Flamingos, rhinos, and dramatic volcanic landscapes.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        highlights: ['Flamingos', 'Rhinos', 'Cycling Safari'],
      },
    ],
    activities: [
      {
        id: 'ke-act-1',
        title: 'Big Five Safari',
        description: 'Track lions, elephants, buffaloes, leopards, and rhinos across Kenya\'s legendary parks.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        howOffered: 'Game drives in custom safari vehicles. Morning, afternoon, and full-day options available.',
      },
      {
        id: 'ke-act-2',
        title: 'Great Migration',
        description: 'Witness millions of wildebeest and zebras crossing the Mara River in one of nature\'s greatest spectacles.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        howOffered: 'July to October in Masai Mara. Strategic positioning for river crossing viewing.',
      },
      {
        id: 'ke-act-3',
        title: 'Hot Air Balloon Safari',
        description: 'Float over the Masai Mara at dawn for breathtaking aerial views of wildlife and landscapes.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        howOffered: 'Early morning flights followed by champagne bush breakfast. Booking essential.',
      },
      {
        id: 'ke-act-4',
        title: 'Maasai Cultural Experience',
        description: 'Visit traditional Maasai villages, learn about their way of life, and participate in cultural activities.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        howOffered: 'Authentic village visits with local guides. Traditional dance, craft making, and storytelling.',
      },
      {
        id: 'ke-act-5',
        title: 'Beach Holidays',
        description: 'Relax on pristine white sand beaches along Kenya\'s Indian Ocean coastline.',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
        howOffered: 'Beach resorts in Diani, Watamu, and Lamu. Water sports, snorkeling, and dhow cruises.',
      },
    ],
    parks: [
      {
        id: 'ke-park-1',
        name: 'Masai Mara National Reserve',
        slug: 'masai-mara',
        description: 'Kenya\'s most famous reserve and part of the greater Serengeti ecosystem. World-renowned for the Great Migration and exceptional big cat sightings.',
        images: [
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'ke-park-2',
        name: 'Amboseli National Park',
        slug: 'amboseli',
        description: 'Famous for its large elephant herds and stunning views of Mount Kilimanjaro. One of Kenya\'s most visited parks.',
        images: [
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'ke-park-3',
        name: 'Tsavo National Park',
        slug: 'tsavo',
        description: 'One of the world\'s largest wildlife sanctuaries, split into East and West. Home to the famous red elephants.',
        images: [
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'ke-park-4',
        name: 'Lake Nakuru National Park',
        slug: 'lake-nakuru',
        description: 'A rhino sanctuary famous for flamingos and diverse birdlife. One of Kenya\'s most scenic parks.',
        images: [
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        ],
      },
    ],
    cars: [
      {
        id: 'car-1',
        name: 'Toyota Land Cruiser',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
        description: 'Premium 4x4 safari vehicle with pop-up roof for game viewing.',
        capacity: '6-7 passengers',
      },
      {
        id: 'car-2',
        name: 'Toyota Safari Van',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
        description: 'Comfortable van ideal for road transfers and city tours.',
        capacity: '7-8 passengers',
      },
      {
        id: 'car-3',
        name: 'Land Rover Defender',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
        description: 'Classic safari vehicle perfect for rough terrain adventures.',
        capacity: '4-5 passengers',
      },
      {
        id: 'car-4',
        name: 'Toyota RAV4',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
        description: 'Compact SUV great for self-drive adventures.',
        capacity: '4 passengers',
      },
      {
        id: 'car-5',
        name: 'Toyota Coaster Bus',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        description: 'Ideal for larger groups and extended tours.',
        capacity: '25 passengers',
      },
    ],
    bestTime: 'July to October, January to February',
    currency: 'Kenyan Shilling (KES)',
    language: 'English, Swahili',
  },
  tanzania: {
    slug: 'tanzania',
    name: 'Tanzania',
    tagline: 'The Soul of Africa',
    heroImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=1080&fit=crop',
    overview: {
      title: 'Discover Tanzania - The Soul of Africa',
      description: 'Tanzania is home to Africa\'s most iconic landscapes: the endless Serengeti plains, the Ngorongoro Crater, Africa\'s highest peak Mount Kilimanjaro, and the spice island of Zanzibar. This is where safari dreams come true.',
      experience: 'Our expert team has deep roots in Tanzania, with guides who have spent decades exploring these legendary lands. We offer exclusive experiences in private camps and remote areas few visitors ever see.',
      images: [
        'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      ],
    },
    itineraries: [
      {
        id: 'tz-1',
        title: '5 Days Serengeti Safari',
        days: 5,
        description: 'Experience the legendary Serengeti and its incredible wildlife.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        highlights: ['Great Migration', 'Big Five', 'Ngorongoro Crater'],
      },
      {
        id: 'tz-2',
        title: '7 Days Northern Circuit Safari',
        days: 7,
        description: 'Tanzania\'s classic northern circuit covering all major parks.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        highlights: ['Serengeti', 'Ngorongoro', 'Tarangire', 'Lake Manyara'],
      },
      {
        id: 'tz-3',
        title: '3 Days Ngorongoro Crater',
        days: 3,
        description: 'Explore the world\'s largest intact volcanic caldera.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        highlights: ['Crater Safari', 'Big Five', 'Maasai Village'],
      },
      {
        id: 'tz-4',
        title: '8 Days Safari & Zanzibar',
        days: 8,
        description: 'Combine bush safari with tropical island paradise.',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
        highlights: ['Serengeti', 'Zanzibar Beaches', 'Stone Town'],
      },
      {
        id: 'tz-5',
        title: '6 Days Kilimanjaro Trek',
        days: 6,
        description: 'Climb Africa\'s highest peak via the Marangu route.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        highlights: ['Summit Attempt', 'Marangu Route', 'Glaciers'],
      },
      {
        id: 'tz-6',
        title: '4 Days Tarangire & Lake Manyara',
        days: 4,
        description: 'Giant elephant herds and tree-climbing lions.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        highlights: ['Elephant Herds', 'Baobab Trees', 'Flamingos'],
      },
    ],
    activities: [
      {
        id: 'tz-act-1',
        title: 'Serengeti Safari',
        description: 'Explore the endless plains of the Serengeti, home to the greatest concentration of large mammals on Earth.',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
        howOffered: 'Multi-day safaris with luxury tented camps. Mobile camps follow the migration.',
      },
      {
        id: 'tz-act-2',
        title: 'Ngorongoro Crater',
        description: 'Descend into the world\'s largest intact volcanic caldera, a UNESCO World Heritage Site.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        howOffered: 'Full-day crater tours. Early morning entry for best wildlife viewing.',
      },
      {
        id: 'tz-act-3',
        title: 'Kilimanjaro Climbing',
        description: 'Summit Africa\'s highest peak at 5,895 meters. Multiple routes for different experience levels.',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        howOffered: '5-9 day treks with experienced mountain guides. All equipment provided.',
      },
      {
        id: 'tz-act-4',
        title: 'Zanzibar Beach Holiday',
        description: 'Relax on pristine beaches, explore Stone Town, and experience spice plantations.',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
        howOffered: 'Luxury beach resorts, dhow cruises, snorkeling, and cultural tours.',
      },
      {
        id: 'tz-act-5',
        title: 'Chimpanzee Trekking',
        description: 'Track chimpanzees in Mahale Mountains or Gombe Stream National Parks.',
        image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
        howOffered: 'Remote fly-in safaris to exclusive chimp habitats on Lake Tanganyika.',
      },
    ],
    parks: [
      {
        id: 'tz-park-1',
        name: 'Serengeti National Park',
        slug: 'serengeti',
        description: 'The most famous safari destination on Earth. The endless plains host the annual Great Migration of over 2 million wildebeest and zebras.',
        images: [
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'tz-park-2',
        name: 'Ngorongoro Conservation Area',
        slug: 'ngorongoro-crater',
        description: 'The world\'s largest intact volcanic caldera, home to the densest concentration of wildlife in Africa. A UNESCO World Heritage Site.',
        images: [
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'tz-park-3',
        name: 'Tarangire National Park',
        slug: 'tarangire',
        description: 'Famous for its massive elephant herds and iconic baobab trees. The Tarangire River draws wildlife from across the region during dry season.',
        images: [
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
        ],
      },
      {
        id: 'tz-park-4',
        name: 'Lake Manyara National Park',
        slug: 'lake-manyara',
        description: 'A compact but diverse park famous for tree-climbing lions and vast flocks of flamingos. The alkaline lake forms a stunning backdrop.',
        images: [
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
        ],
      },
    ],
    cars: [
      {
        id: 'car-1',
        name: 'Toyota Land Cruiser',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
        description: 'Premium 4x4 safari vehicle with pop-up roof for game viewing.',
        capacity: '6-7 passengers',
      },
      {
        id: 'car-2',
        name: 'Toyota Safari Van',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
        description: 'Comfortable van ideal for road transfers and city tours.',
        capacity: '7-8 passengers',
      },
      {
        id: 'car-3',
        name: 'Land Rover Defender',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
        description: 'Classic safari vehicle perfect for rough terrain adventures.',
        capacity: '4-5 passengers',
      },
      {
        id: 'car-4',
        name: 'Toyota RAV4',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
        description: 'Compact SUV great for self-drive adventures.',
        capacity: '4 passengers',
      },
      {
        id: 'car-5',
        name: 'Toyota Coaster Bus',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        description: 'Ideal for larger groups and extended tours.',
        capacity: '25 passengers',
      },
    ],
    bestTime: 'June to October, December to March',
    currency: 'Tanzanian Shilling (TZS)',
    language: 'Swahili, English',
  },
};

export const getCountryData = (slug: string): CountryData | undefined => {
  return countryData[slug];
};
