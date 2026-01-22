export interface Tour {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  category: 'wildlife-safaris' | 'primate-tracking' | 'cultural-tours' | 'multi-day-tours';
  description: string;
  bannerImage: string;
  galleryImages: string[];
  highlights: string[];
  included: string[];
  excluded?: string[];
  customization?: string[];
  whySpecial?: string;
  itinerary: { day: number; title: string; description: string; image?: string }[];
}

export const tours: Tour[] = [
  {
    slug: 'lake-kivu-karongi-experience',
    title: '1 DAY LAKE KIVU – KARONGI EXPERIENCE',
    destination: 'Rwanda',
    duration: '1 Day',
    groupSize: '2-8 People',
    difficulty: 'Easy',
    category: 'cultural-tours',
    
    description: `Escape the city and immerse yourself in the tranquil beauty of Lake Kivu with this 1-day Karongi tour. Perfect for travelers looking for relaxation, scenic landscapes, and a touch of Rwanda's rich history, this trip combines picturesque lakeside views with cultural stories and natural wonders. Explore Rwanda's rolling hills, discover the famous Ndaba Rock & Waterfall, and hear the emotional story of the Nyange Students, a symbol of courage and unity during the 1994 genocide against the Tutsi. End your day soaking in the peaceful atmosphere along one of Africa's most scenic lakes.`,
    bannerImage: 'https://images.unsplash.com/photo-1706977570024-fefa419c48c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZSUyMGtpdnV8ZW58MHx8MHx8fDA%3D',
    galleryImages: [
      'https://images.unsplash.com/photo-1589715718565-223fdf9b7cd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMGtpdnV8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1514547085879-968fe519da2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1689081147062-bb6b73f2208a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww',
    ],
    highlights: [
      'Scenic drive through Rwanda\'s rolling hills',
      'Visit to Ndaba Rock & Waterfall',
      'Inspiring story of the Nyange Students',
      'Relaxation along Lake Kivu shores',
      'Lakeside lunch with stunning views',
      'Cultural insights into Rwanda\'s history'
    ],
    included: [
      'Professional driver-guide',
      'Comfortable 4x4 vehicle',
      'Stop at Ndaba Rock & waterfall',
      'Karongi (Lake Kivu) experience',
      'Lakeside lunch',
      'Drinking water & soft drinks',
      'Pick-up and drop-off from Kigali',
      'All applicable taxes'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Alcoholic drinks',
      'Tips',
      'Personal shopping'
    ],
    customization: [
      'Lake Kivu boat ride',
      'Coffee plantation tour',
      'Extra relaxation or sightseeing time'
    ],
    whySpecial: 'The 1 Day Lake Kivu – Karongi Experience is ideal for travelers seeking a peaceful escape that combines natural beauty with meaningful cultural stories. It offers breathtaking views of Lake Kivu, insight into Rwanda\'s history and resilience, and opportunities for relaxation, photography, and lakeside exploration.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali → Scenic Drive → Ndaba Rock → Lake Kivu → Return to Kigali', 
        description: 'Start your day with a comfortable pickup from Kigali and a scenic drive toward Karongi. Along the way, your guide shares fascinating insights into Rwanda\'s culture, people, and landscapes. Stop at Ndaba Rock, where a short walk leads to the waterfall and hear the inspiring story of the Nyange Students. Continue to Karongi for a lakeside lunch and time to unwind along the shores of Lake Kivu. After this rejuvenating experience, return to Kigali for drop-off.', 
        image: 'https://plus.unsplash.com/premium_photo-1700955139809-95060da0fcab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww' 
      }
    ],
  },

   {
    slug: '2-days-chimpanzee-trekking-nyungwe',
    title: '2 DAYS CHIMPANZEE TREKKING SAFARI',
    destination: 'Nyungwe National Park, Rwanda',
    duration: '2 Days / 1 Night',
    groupSize: '2-6 People',
    difficulty: 'Moderate',    category: 'primate-tracking',    description: 'This 2 Days Chimpanzee Trekking Safari introduces you to the heart of Nyungwe National Park, one of Africa\'s oldest surviving rainforests and Rwanda\'s top destination for primate encounters. Known for its thriving chimpanzee communities, lush green canopy, rare bird species, and refreshing highland climate.',
    bannerImage: 'https://plus.unsplash.com/premium_photo-1661844600175-f1a53a43594d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWVtcGFuemVlfGVufDB8fDB8fHww',
    galleryImages: [
      'https://images.unsplash.com/photo-1598621870917-d1b6a9d8db06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZW1wYW56ZWV8ZW58MHx8MHx8fDA%3D',
      'https://plus.unsplash.com/premium_photo-1664302967172-1458170b0c5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZW1wYW56ZWV8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1689842547765-aa416cc071a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWVtcGFuemVlfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&h=600&fit=crop',
    ],
    highlights: [
      'Chimpanzee trekking in ancient rainforest',
      'Guided forest exploration',
      'Scenic drive through tea plantations',
      'Optional Nyungwe Canopy Walk',
      'Panoramic viewpoints photography',
      'Immersion in Rwanda\'s highland climate'
    ],
    included: [
      'Professional safari & trekking guide',
      'Comfortable 4x4 safari vehicle',
      'Chimpanzee trekking permit',
      '1 night accommodation',
      'Meals: Day 1 (Lunch & Dinner), Day 2 (Breakfast & Lunch)',
      'Drinking water & soft drinks',
      'All park entrance fees',
      'Pick-up and drop-off in Kigali',
      'All government taxes'
    ],
    excluded: [
      'International flights',
      'Personal travel insurance',
      'Alcoholic beverages',
      'Optional Canopy Walk fee',
      'Tips for guide & lodge staff',
      'Personal expenses'
    ],
    customization: [
      'Add extra days',
      'Nyungwe Canopy Walk experience',
      'Tea plantation visits',
      'Additional forest hikes',
      'Customize according to travel schedule'
    ],
    whySpecial: 'Experience one of Africa\'s oldest rainforests with thriving chimpanzee communities. This short yet rewarding safari offers an unforgettable jungle experience with moments of pure nature immersion.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali Pickup → Scenic Drive → Nyungwe National Park', 
        description: 'Begin with pickup from your Kigali hotel. Enjoy a scenic drive through Rwanda\'s rolling hills, passing villages, cultural landmarks like the King\'s Palace Museum, and tea plantations. Arrive at Nyungwe National Park for lunch, then check into your lodge for a relaxing evening in the forest atmosphere.', 
        image: 'https://plus.unsplash.com/premium_photo-1661844600175-f1a53a43594d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWVtcGFuemVlfGVufDB8fDB8fHww' 
      },
      { 
        day: 2, 
        title: 'Chimpanzee Trekking → Forest Experience → Return to Kigali', 
        description: 'Wake early for chimpanzee trekking starting at 5:00 AM. After briefing by park rangers, trek through misty forest trails to locate chimpanzees. Spend an hour observing their natural behavior. Enjoy relaxation at scenic viewpoints or tea plantations. Optional Canopy Walk available. Return to Kigali with drop-off at hotel or airport.', 
        image: 'https://images.unsplash.com/photo-1637772833269-e196693f73a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZW1wYW56ZWV8ZW58MHx8MHx8fDA%3D' 
      }
    ],
  },

  // New: 2 DAYS AKAGERA BIG FIVE SAFARI
  {
    slug: '2-days-akagera-big-five-safari',
    title: '2 DAYS AKAGERA NATIONAL PARK BIG FIVE SAFARI',
    destination: 'Akagera National Park, Rwanda',
    duration: '2 Days / 1 Night',
    groupSize: '2-6 People',
    difficulty: 'Easy',    category: 'wildlife-safaris',    description: 'The 2 Days Akagera National Park Safari is one of Rwanda\'s most rewarding short wildlife adventures, ideal for travelers who want to experience the Big Five without long travel days. Akagera is Rwanda\'s only savannah reserve and a remarkable conservation success story.',
    bannerImage: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=1920&h=800&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1664793484534-497c51a08efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1667504248323-9e1f83d9af92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D',
,
    ],
    highlights: [
      'Big Five wildlife viewing',
      'Sunset boat safari on Lake Ihema',
      'Full-day game drive',
      'Kigali city orientation',
      'Conservation success story experience',
      'Picnic lunch in the park'
    ],
    included: [
      'Professional English-speaking safari guide',
      'Comfortable 4x4 safari vehicle',
      'Akagera National Park entrance fees',
      'Game drives on both days',
      'Sunset boat safari on Lake Ihema',
      '1 night mid-range accommodation',
      'Meals: Day 1 (Lunch & Dinner), Day 2 (Breakfast & Picnic Lunch)',
      'Soft drinks and bottled water',
      'Kigali hotel/airport pick-up & drop-off',
      'All government taxes'
    ],
    excluded: [
      'International flights',
      'Personal travel insurance',
      'Alcoholic beverages',
      'Tips and gratuities',
      'Personal expenses',
      'Optional activities not mentioned'
    ],
    customization: [
      'Customize according to travel dates',
      'Accommodation preferences',
      'Budget adjustments',
      'Special interests focus',
      'Add extra activities'
    ],
    whySpecial: 'Experience Rwanda\'s only savannah reserve and witness one of Africa\'s most remarkable conservation success stories. Once nearly depleted, Akagera now thrives with lions, elephants, rhinos, leopards, and buffaloes.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali City Tour → Drive to Akagera → Afternoon Game Viewing → Boat Safari', 
        description: 'Begin with hotel pickup in Kigali and a short city tour showcasing Rwanda\'s transformation. Drive to Akagera National Park, enjoying scenic countryside views. Enter the park for an afternoon game drive spotting giraffes, elephants, and buffaloes. Conclude with a peaceful sunset boat safari on Lake Ihema with hippos and crocodiles.', 
        image: 'https://images.unsplash.com/photo-1665070385454-5e0c4421a38c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D' 
      },
      { 
        day: 2, 
        title: 'Sunrise Safari → Full-Day Game Drive → Picnic Lunch → Return to Kigali', 
        description: 'After early breakfast, embark on a full-day game drive through Akagera\'s northern plains for optimal Big Five sightings. Morning hours offer predator viewing opportunities. Explore savannahs, lakes, and wooded areas with photography stops. Enjoy picnic lunch in the park before returning to Kigali for evening drop-off.', 
        image: 'https://images.unsplash.com/photo-1665070385510-2536c85280fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D' 
      }
    ],
  },

  // New: 3 DAYS GORILLA TREKKING SAFARI
  {
    slug: '3-days-gorilla-trekking-volcanoes',
    title: '3 DAYS GORILLA TREKKING SAFARI',
    destination: 'Volcanoes National Park, Rwanda',
    duration: '3 Days / 2 Nights',
    groupSize: '2-8 People',
    difficulty: 'Challenging',
    category: 'primate-tracking',
    description: 'Embark on a 3 Days Gorilla Trekking Safari exploring the legendary Virunga Mountains and Rwanda\'s renowned Volcanoes National Park. This safari combines wildlife, culture, history, and conservation into one immersive experience, featuring endangered mountain gorillas and Dian Fossey\'s conservation legacy.',
    bannerImage: 'https://plus.unsplash.com/premium_photo-1661847226434-d4d7585756f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
    galleryImages: [
      'https://images.unsplash.com/photo-1676102818778-7dedb5cdad46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYSUyMHRyZWtraW5nfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1762163118815-2238762d49d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvcmlsbGElMjB0cmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1667504319000-8133f9021cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29yaWxsYSUyMHRyZWtraW5nfGVufDB8fDB8fHww',
      
    ],
    highlights: [
      'Mountain gorilla trekking experience',
      'Visit Kigali Genocide Memorial',
      'Gorilla Guardian Village cultural experience',
      'Dian Fossey / Ellen DeGeneres Campus tour',
      'Local Rwandan cuisine tasting',
      'Handmade souvenir shopping'
    ],
    included: [
      'Professional knowledgeable safari guide',
      'Comfortable 4x4 safari vehicle with fuel',
      'Gorilla trekking permit',
      'Kigali City Tour',
      'Visit to Kigali Genocide Memorial',
      'Visit to Dian Fossey / Ellen DeGeneres Campus',
      'Gorilla Guardian Village experience',
      '2 nights mid-range accommodation',
      'Meals: Day 1 (Lunch & Dinner), Day 2 (Breakfast, Lunch & Dinner), Day 3 (Breakfast & Lunch)',
      'Drinking water & soft drinks in vehicle',
      'Park entrance fees',
      'Hotel pick-up & drop-off',
      'All government taxes'
    ],
    excluded: [
      'International flights',
      'Personal travel insurance',
      'Alcoholic beverages',
      'Tips for guides & lodge staff',
      'Personal expenses',
      'Optional activities not listed'
    ],
    customization: [
      'Tailor to your schedule',
      'Lodge preference customization',
      'Special interests focus',
      'Add extra activities',
      'Personalized experience'
    ],
    whySpecial: 'This three-day safari offers a rare chance to connect deeply with Rwanda\'s wildlife, conservation history, and culture. From walking the paths of Dian Fossey to witnessing mountain gorillas in their natural habitat, the tour combines emotional impact, adventure, and cultural insight.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali Highlights → Genocide Memorial → Transfer to Volcanoes National Park', 
        description: 'Begin with hotel pickup in Kigali for a city tour showcasing Rwanda\'s clean streets and modern architecture. Visit the Kigali Genocide Memorial for a reflective educational experience. After lunch, drive through scenic hills to the Virunga Mountains. Check into your lodge near Volcanoes National Park for dinner and overnight.', 
        image: 'https://media.istockphoto.com/id/1254047479/photo/modern-kigali.webp?a=1&b=1&s=612x612&w=0&k=20&c=bM9D7b_Xe7YLMy__eBXP627kk-fvtsuy5LlG87VmI3s=' 
      },
      { 
        day: 2, 
        title: 'Gorilla Trekking → Local Lunch → Gorilla Guardian Village', 
        description: 'Wake early for briefing at park headquarters before gorilla trekking. Trek through bamboo forests and mist-covered slopes to encounter a mountain gorilla family. Spend an unforgettable hour observing their behavior. Enjoy local Rwandan lunch, then visit Gorilla Guardian Village for cultural performances and community engagement. Return to lodge for overnight.', 
        image: 'https://plus.unsplash.com/premium_photo-1677380271505-2ea108c11d37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29yaWxsYSUyMHRyZWtraW5nfGVufDB8fDB8fHww' 
      },
      { 
        day: 3, 
        title: 'Dian Fossey Campus → Souvenir Shopping → Return to Kigali', 
        description: 'After breakfast, visit the Dian Fossey - Ellen DeGeneres Campus conservation center to learn about gorilla protection and research. Shop for handmade souvenirs and crafts in Musanze or Kigali, supporting local artisans. Drive back to Kigali for hotel or airport drop-off, concluding your memorable gorilla journey.', 
        image: 'https://images.unsplash.com/photo-1711982264516-1c07b59aa6df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29yaWxsYSUyMGNyYWZ0c3xlbnwwfHwwfHx8MA%3D%3D' 
      }
    ],
  },

  // New: 3 DAYS LAKE KIVU KARONGI TOUR
  {
    slug: '3-days-lake-kivu-karongi-tour',
    title: '3 DAYS LAKE KIVU KARONGI TOUR',
    destination: 'Lake Kivu, Rwanda',
    duration: '3 Days / 2 Nights',
    groupSize: '2-6 People',
    difficulty: 'Easy',    category: 'cultural-tours',    description: 'The 3 Days Lake Kivu - Karongi Tour is a peaceful escape designed for travelers who want to slow down and experience Rwanda\'s most scenic lakeside destination. This journey blends breathtaking landscapes, meaningful cultural history, and calming nature moments in Karongi (formerly Kibuye).',
    bannerImage: 'https://images.unsplash.com/photo-1514547085879-968fe519da2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww',
    galleryImages: [
      'https://images.unsplash.com/photo-1647849975193-bf78bd1cbf4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww',
      'https://media.istockphoto.com/id/919551038/photo/lake-kivu.webp?a=1&b=1&s=612x612&w=0&k=20&c=xqkyG1IgT5eQ_lVNOMIQJRiwa94lDVCpb242JT2GvYA=',
      'https://media.istockphoto.com/id/1777085470/photo/lake-kivu.webp?a=1&b=1&s=612x612&w=0&k=20&c=-i64i6xQ4DojbS5JYHGOp2lWcrzgXmUPwrY6beu4D0k=',
      
    ],
    highlights: [
      'Lake Kivu island boat safari',
      'Ndaba Rock & Waterfall visit',
      'Nyange Students story experience',
      'Stunning lakeside sunsets',
      'Leisure time for swimming/kayaking',
      'Local craft shopping'
    ],
    included: [
      'Professional English-speaking driver-guide',
      'Comfortable 4x4 safari vehicle',
      'Ndaba Rock & Waterfall visit',
      'Lake Kivu island boat ride',
      '2 nights mid-range accommodation',
      'Meals: Day 1 (Lunch & Dinner), Day 2 (Breakfast, Lunch & Dinner), Day 3 (Breakfast & Lunch)',
      'Drinking water and soft drinks',
      'Pick-up and drop-off in Kigali',
      'Government taxes'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Alcoholic beverages',
      'Tips and gratuities',
      'Optional activities',
      'Personal expenses'
    ],
    customization: [
      'Additional island visits',
      'Coffee experiences',
      'Cultural encounters',
      'Adventure activities',
      'Extra nights at Lake Kivu resorts'
    ],
    whySpecial: 'This journey offers more than just relaxation—it creates a meaningful connection to Rwanda\'s landscapes and stories. From the emotional Nyange narrative to the calm waters of Lake Kivu and unforgettable sunsets, this tour leaves travelers refreshed, inspired, and deeply connected to Rwanda\'s natural beauty.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali Pickup → Ndaba Rock & Waterfall → Scenic Drive to Karongi', 
        description: 'Morning pickup in Kigali with scenic drive through rolling hills and tea plantations. Stop at Ndaba Rock for guided walk to waterfall and hear the powerful story of Nyange Students. Continue to Karongi for lakeside relaxation and stunning Lake Kivu sunset. Dinner and overnight at lakeside lodge.', 
        image: 'https://images.unsplash.com/photo-1706977570024-fefa419c48c8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        day: 2, 
        title: 'Lake Kivu Boat Safari → Island Exploration → Leisure Time', 
        description: 'After breakfast, enjoy calm morning boat ride on Lake Kivu, exploring nearby islands and learning about local fishing life. Return to lodge for lunch. Afternoon at leisure with optional activities: swimming, kayaking, lakeside walks, or simply relaxing. Dinner and overnight in Karongi.', 
        image: 'https://images.unsplash.com/photo-1720798376172-315db0750330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8' 
      },
      { 
        day: 3, 
        title: 'Lakeside Morning → Scenic Viewpoints → Return to Kigali', 
        description: 'Wake to fresh lake air with leisurely breakfast and lake views. Visit scenic viewpoints for final photos and reflection. Shop at local craft shops for handmade souvenirs supporting local artisans. Begin relaxed drive back to Kigali, arriving afternoon to conclude your refreshing Lake Kivu experience.', 
        image: 'https://plus.unsplash.com/premium_photo-1720054284481-6bb20440708f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D' 
      }
    ],
  },

  {
    slug: 'rwanda-classic-adventure',
    title: '7 DAYS RWANDA CLASSIC ADVENTURE',
    destination: 'Rwanda',
    duration: '7 Days / 6 Nights',
    groupSize: '2-8 People',
    difficulty: 'Moderate',
    category: 'multi-day-tours',
    description: 'The 7 Days Rwanda Classic Adventure is Dream Destination Tours and Travel\'s top recommended safari, specially crafted for travelers eager to experience Rwanda\'s stunning landscapes, extraordinary wildlife, and rich cultural heritage. From the misty rainforests of Nyungwe National Park to the majestic Volcanoes National Park, and the serene shores of Lake Kivu to the vibrant streets of Kigali, this safari showcases Rwanda\'s diversity in one seamless journey. Trek chimpanzees, stroll along the famous Nyungwe Canopy Walk, enjoy lakeside tranquility, encounter mountain gorillas, meet playful golden monkeys, and explore the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund.',
    bannerImage: 'https://images.unsplash.com/photo-1651860282296-47055c68580e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cndhbmRhfGVufDB8fDB8fHww',
    galleryImages: [
      'https://images.unsplash.com/photo-1598605170898-853b9ae903fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cndhbmRhfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1651860282296-47055c68580e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cndhbmRhfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1631774991422-ccc98283d33f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cndhbmRhfGVufDB8fDB8fHww',
      
    ],
    highlights: [
      'Chimpanzee trekking in Nyungwe Forest',
      'Nyungwe Canopy Walk experience',
      'Relaxation at Lake Kivu',
      'Mountain gorilla trekking',
      'Golden monkey encounter',
      'Ellen DeGeneres Campus visit',
      'Kigali city tour'
    ],
    included: [
      'Expert Dream Destination Tours and Travel safari guide',
      'Comfortable 4x4 safari vehicle',
      'Chimpanzee trekking permit',
      'Gorilla trekking permit',
      'Golden monkey permit',
      'Nyungwe Canopy Walk',
      'One night at Lake Kivu',
      '6 nights accommodation',
      'All meals (Breakfast, Lunch & Dinner)',
      'Drinking water & soft drinks',
      'All park fees & taxes',
      'Airport pick-up & drop-off'
    ],
    excluded: [
      'International flights',
      'Personal travel insurance',
      'Alcoholic beverages',
      'Tips',
      'Optional activities',
      'Personal expenses'
    ],
    whySpecial: 'Experience Rwanda\'s most engaging blend of primates, volcanoes, lakes, rainforest, culture, and conservation. Each day offers a new highlight, from thrilling wildlife encounters to scenic landscapes, creating a truly unforgettable and emotional safari journey. This is Rwanda\'s #1 recommended adventure primate safari.',
    itinerary: [
      { 
        day: 1, 
        title: 'Arrival in Kigali → City Tour → Overnight', 
        description: 'Upon arrival, your Dream Destination Tours and Travel guide welcomes you at Kigali International Airport. Begin your journey with a Kigali City Tour, exploring Rwanda\'s clean streets, modern architecture, and cultural landmarks. Learn fascinating insights about Rwanda\'s transformation and local life.', 
        image: 'https://media.istockphoto.com/id/1148675617/photo/kigali-city-centre-skyline-and-surrounding-areas-lit-up-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=D2CrRjp8242XRTAOh92UuXFBQnUaH-qD9Hucjf9WXDY=' 
      },
      { 
        day: 2, 
        title: 'Kigali → Transfer to Nyungwe Forest', 
        description: 'Travel through rolling hills, lush tea plantations, and scenic countryside as you head to Nyungwe National Park, Africa\'s ancient rainforest gem. Your guide will share knowledge on Rwanda\'s biodiversity, conservation efforts, and local communities.', 
        image: 'https://images.unsplash.com/photo-1489640818597-89b1edc97db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cndhbmRhfGVufDB8fDB8fHww' 
      },
      { 
        day: 3, 
        title: 'Chimpanzee Trekking → Canopy Walk', 
        description: 'Early morning, trek into the dense Nyungwe Forest to encounter chimpanzees in their natural habitat. Later, enjoy the Nyungwe Canopy Walk for breathtaking panoramic views of the rainforest and distant hills. Capture stunning photos while learning about the forest\'s unique ecosystem.', 
        image: 'https://images.unsplash.com/photo-1558603200-ad1648109a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub3B5JTIwd2Fsa3xlbnwwfHwwfHx8MA%3D%3D' 
      },
      { 
        day: 4, 
        title: 'Nyungwe → Drive to Lake Kivu → Sunset Relaxation', 
        description: 'Leave the forest behind for a scenic drive to Lake Kivu, one of Rwanda\'s most serene lakes. Enjoy a relaxing afternoon by the water, perfect for photography, lakeside walks, and observing local fisherman villages. Take in stunning sunset views.', 
        image: 'https://media.istockphoto.com/id/1295606238/photo/sunset-in-the-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qofr6pdxZxXTfJKcGx7CM_DNjPYPqF_kWUWDhYu2C2M=' 
      },
      { 
        day: 5, 
        title: 'Lake Kivu → Transfer to Volcanoes National Park', 
        description: 'Start your day with peaceful lakeside moments and optional morning strolls. Then travel north to Volcanoes National Park, home of Rwanda\'s iconic mountain gorillas. Learn about the volcanic landscapes and rich biodiversity en route.', 
        image: 'https://media.istockphoto.com/id/465505270/photo/slamet-volcano-indonesia.webp?a=1&b=1&s=612x612&w=0&k=20&c=TuTTL5a2mQrdoAfvKSHMn62uzZ86E3WVKZUBvUZXSpE=' 
      },
      { 
        day: 6, 
        title: 'Gorilla Trekking → Ellen DeGeneres Campus Visit', 
        description: 'Embark on your Gorilla Trekking experience, venturing into the Virunga Mountains to spend a magical hour with a gorilla family. After the trek, visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund to discover her groundbreaking conservation work.', 
        image: 'https://images.unsplash.com/photo-1581281863883-2469417a1668?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D' 
      },
      { 
        day: 7, 
        title: 'Golden Monkey Trek → Return to Kigali → Departure', 
        description: 'Begin the day with an energetic Golden Monkey Trek in the bamboo forests. Afterward, drive back to Kigali for shopping at local markets for handmade crafts, Rwandan coffee, and souvenirs. Your safari concludes with airport drop-off or hotel transfer.', 
        image: 'https://images.unsplash.com/photo-1714289839546-2eca926a5b9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29sZGVuJTIwbW9ua2V5fGVufDB8fDB8fHww' 
      }
    ],
  },

  // 1 DAY AKAGERA NATIONAL PARK TOUR
{
  slug: '1-day-akagera-big-five-safari',
  title: '1 DAY AKAGERA NATIONAL PARK BIG FIVE SAFARI',
  destination: 'Akagera National Park, Rwanda',
  duration: '1 Day',
  groupSize: '2-6 People',
  difficulty: 'Easy',  
  category: 'wildlife-safaris',
  description: 'This 1 Day Akagera National Park Safari from Kigali is a perfect choice for travelers who want to experience Rwanda\'s Big Five in a single, carefully planned day. Akagera National Park is Rwanda\'s only savannah reserve, famous for its wide plains, lakes, rolling hills, and one of Africa\'s most successful wildlife restoration stories.',
  bannerImage: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=1920&h=800&fit=crop',
  galleryImages: [
    'https://plus.unsplash.com/premium_photo-1664304465748-3c02b0ca6fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlnJTIwZml2ZSUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1600337983409-b8efd8282945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpZyUyMGZpdmUlMjBhbmltYWxzfGVufDB8fDB8fHww',
    'https://media.istockphoto.com/id/2171706193/photo/close-up-of-female-leopard-sitting-in-tree.webp?a=1&b=1&s=612x612&w=0&k=20&c=FBAGA2F7aHPmMg_Y8Qd74dRQaO_3drM-MDZGPXlMNuA=',
    
  ],
  highlights: [
    'Big Five wildlife experience in one day',
    'Scenic drive through Rwanda\'s countryside',
    'Extensive game drive in diverse habitats',
    'Picnic lunch inside the national park',
    'Visit to Akagera\'s northern plains',
    'Learn about Rwanda\'s conservation success'
  ],
  included: [
    'Professional English-speaking safari guide',
    'Well-maintained 4x4 safari vehicle',
    'Akagera National Park entrance fees',
    'Full-day guided game drive',
    'Picnic lunch inside the park',
    'Bottled drinking water and soft drinks',
    'Hotel or airport pick-up and drop-off in Kigali',
    'All applicable government taxes'
  ],
  excluded: [
    'International and domestic flights',
    'Personal travel insurance',
    'Alcoholic beverages',
    'Tips and gratuities',
    'Optional activities not mentioned',
    'Personal expenses'
  ],
  customization: [
    'Early sunrise departure',
    'Boat safari on Lake Ihema',
    'Extended game viewing in northern sector',
    'Personalized itinerary adjustments'
  ],
  whySpecial: 'This day tour delivers a complete safari experience in just one day, combining wildlife sightings, breathtaking scenery, and meaningful storytelling. Guests leave with a deeper appreciation of Rwanda\'s conservation success, memorable encounters with wildlife, and a sense of calm from spending time in one of East Africa\'s most peaceful national parks.',
  itinerary: [
    { 
      day: 1, 
      title: 'Full Day Akagera National Park Safari', 
      description: 'Early morning pickup from Kigali hotel. Travel east through green hills and rural villages to Akagera National Park. Enjoy rewarding game drive through woodlands, savannah, wetlands, and lakeshores. Learn about animal behavior and conservation. Stop for picnic lunch at scenic location inside park. Continue to northern plains for extensive wildlife viewing and photography. Return to Kigali in late afternoon for hotel or airport drop-off.', 
      image: 'https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8emVicmFzfGVufDB8fDB8fHww' 
    }
  ],
},

// 1 DAY GORILLA TREKKING TOUR
{
  slug: '1-day-gorilla-trekking-from-kigali',
  title: '1 DAY GORILLA TREKKING TOUR FROM KIGALI',
  destination: 'Volcanoes National Park, Rwanda',
  duration: '1 Day',
  groupSize: '2-8 People',
  difficulty: 'Challenging',  category: 'primate-tracking',  description: 'The 1 Day Gorilla Trekking Tour from Kigali with Dream Destination Tours & Travel is designed for travelers who want Rwanda\'s most iconic wildlife experience in just a single day. Departing early from Kigali, this tour takes you to the legendary Virunga Mountains, home to endangered mountain gorillas, and introduces you to Rwanda\'s inspiring conservation story pioneered by Dr. Dian Fossey.',
  bannerImage: 'https://images.unsplash.com/photo-1669559512630-b17c3e8e22b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  galleryImages: [
    'https://images.unsplash.com/photo-1624975981958-9e5ea70cc8d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvcmlsbGF8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1661844659087-1386ef4482da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1557218825-334e575bcc38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D',
    
  ],
  highlights: [
    'Mountain gorilla trekking in one day',
    'Visit Volcanoes National Park',
    'Learn about Dr. Dian Fossey\'s conservation work',
    'Traditional Rwandan lunch',
    'Optional Ellen DeGeneres Campus visit',
    'Early morning scenic drive'
  ],
  included: [
    'Professional gorilla trekking guide and rangers',
    'Comfortable 4x4 safari vehicle',
    'Gorilla trekking permit',
    'Round-trip transport from Kigali',
    'Lunch at a local restaurant',
    'Drinking water & soft drinks',
    'Park entrance fees',
    'All government taxes'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Alcoholic beverages',
    'Tips for guides & lodge staff',
    'Personal expenses'
  ],
  customization: [
    'Flexible pick-up times',
    'Lunch preferences',
    'Optional cultural stops',
    'Additional village visits',
    'Ellen DeGeneres Campus visit'
  ],
  whySpecial: 'This short but impactful tour offers a rare opportunity to connect deeply with Rwanda\'s wildlife and conservation legacy. Meeting mountain gorillas in their natural home is a moving, inspirational experience that leaves a lasting impression of Rwanda\'s commitment to protecting its natural heritage.',
  itinerary: [
    { 
      day: 1, 
      title: 'Full Day Gorilla Trekking Adventure', 
      description: 'Early morning pickup at 4:30 AM from Kigali hotel. Comfortable drive through scenic countryside while guide shares conservation story of Dr. Dian Fossey. Arrive at Volcanoes National Park Headquarters for check-in and briefing. Hike through bamboo forests and misty slopes with park rangers to encounter mountain gorilla family. Spend magical hour observing gorillas in natural habitat. Enjoy traditional Rwandan lunch at local restaurant. Optional visit to Ellen DeGeneres Campus or Gorilla Guardian Cultural Village. Return to Kigali for afternoon or evening drop-off at hotel.', 
      image: 'https://plus.unsplash.com/premium_photo-1664302743515-b8543e31340b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' 
    }
  ],
},

// 1 DAY NYUNGWE NATIONAL PARK TOUR
{
  slug: '1-day-nyungwe-national-park-tour',
  title: '1 DAY NYUNGWE NATIONAL PARK TOUR EXPERIENCE',
  destination: 'Nyungwe National Park, Rwanda',
  duration: '1 Day',
  groupSize: '2-6 People',
  difficulty: 'Moderate',  category: 'cultural-tours',  description: 'The 1 Day Nyungwe National Park Tour with Dream Destination Tours & Travel is a perfect blend of culture, nature, and adventure, designed for travelers who want to experience Rwanda\'s highlights in a single rewarding day. Ideal as a Kigali day trip, this journey takes you through Rwanda\'s southern landscapes to the iconic Nyanza King\'s Palace Museum and deep into Nyungwe National Park, one of Africa\'s oldest and most biologically rich rainforests.',
  bannerImage: 'https://plus.unsplash.com/premium_photo-1663950774999-8da6f0553d8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D',
  galleryImages: [
    'https://images.unsplash.com/photo-1531204709756-1c7a41bf8936?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8emlwbGluZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://media.istockphoto.com/id/1454083574/photo/mountain-belvedere.webp?a=1&b=1&s=612x612&w=0&k=20&c=vu5cWV4tIawB10OAVqXq_V_Re5YgmWPbxDOzFFZP_tM=',
    'https://images.unsplash.com/photo-1558603200-ad1648109a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub3B5JTIwd2Fsa3xlbnwwfHwwfHx8MA%3D%3D',
    
  ],
  highlights: [
    'Visit Nyanza King\'s Palace Museum',
    'Nyungwe Canopy Walk experience',
    'Nyungwe Zipline (longest in East Africa)',
    'Scenic drive through tea plantations',
    'Lunch at forest lodge',
    'Cultural and historical insights'
  ],
  included: [
    'Professional experienced tour guide',
    'Comfortable 4x4 safari vehicle with fuel',
    'Visit to Nyanza King\'s Palace Museum',
    'Nyungwe National Park entrance fees',
    'Lunch',
    'Drinking water and soft drinks',
    'Kigali hotel pick-up and drop-off',
    'All government taxes'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Optional canopy walk if added separately',
    'Alcoholic beverages',
    'Tips for guides and museum staff',
    'Personal expenses'
  ],
  customization: [
    'Tea plantation visits',
    'Extended cultural encounters',
    'Additional stops based on interests',
    'Schedule adjustments',
    'Customized itinerary'
  ],
  whySpecial: 'This day tour offers a rare opportunity to connect with Rwanda\'s royal history, ancient rainforest ecosystems, and adventure attractions in a single journey. It is ideal for travelers with limited time who still want meaningful experiences, stunning scenery, and deeper cultural understanding.',
  itinerary: [
    { 
      day: 1, 
      title: 'Full Day Nyungwe Cultural & Adventure Tour', 
      description: 'Early morning pickup from Kigali hotel. Scenic drive south through rolling hills and tea plantations. Stop at Nyanza King\'s Palace Museum to explore royal residence and learn about Rwanda\'s monarchy and traditional culture. Continue to Nyungwe National Park. Enjoy lunch at forest lodge surrounded by nature. Experience Nyungwe Canopy Walk - suspended bridge with panoramic forest views. Enjoy Nyungwe Zipline (2km across valleys and treetops). Begin return drive to Kigali, arriving in evening with lasting memories.', 
      image: 'https://images.unsplash.com/photo-1489640818597-89b1edc97db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnl1bmd3ZXxlbnwwfHwwfHx8MA%3D%3D' 
    }
  ],
},
 // 4 DAYS VOLCANOES NATIONAL PARK SAFARI
{
  slug: '4-days-volcanoes-gorillas-golden-monkeys-lake-kivu',
  title: '4 DAYS VOLCANOES NATIONAL PARK SAFARI',
  destination: 'Volcanoes National Park & Lake Kivu, Rwanda',
  duration: '4 Days / 3 Nights',
  groupSize: '2-8 People',
  difficulty: 'Challenging',
  category: 'multi-day-tours',
  description: 'This 4 Days Volcanoes National Park Safari is a carefully designed Rwanda experience that brings together three of the country\'s most celebrated highlights: mountain gorilla trekking, golden monkey tracking, and relaxation at the scenic shores of Lake Kivu. Journey through the iconic Virunga Mountains, encounter rare primates found nowhere else on Earth, and unwind beside one of Africa\'s most peaceful freshwater lakes.',
  bannerImage: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1920&h=800&fit=crop',
  galleryImages: [
    'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&h=600&fit=crop',
  ],
  highlights: [
    'Mountain gorilla trekking adventure',
    'Golden monkey tracking experience',
    'Lake Kivu lakeside relaxation',
    'Kigali city highlights tour',
    'Scenic drive through Virunga Mountains',
    'Optional Lake Kivu boat ride'
  ],
  included: [
    'Professional experienced safari guide',
    'Comfortable 4x4 safari vehicle',
    'Gorilla trekking permit',
    'Golden monkey trekking permit',
    'Kigali City Tour',
    '3 nights mid-range accommodation',
    'Meals: Day 1 (Dinner), Day 2 (Breakfast, Lunch & Dinner), Day 3 (Breakfast, Lunch & Dinner), Day 4 (Breakfast)',
    'Bottled drinking water and soft drinks in vehicle',
    'All park entrance fees',
    'Pick-up and drop-off services',
    'All government taxes'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Alcoholic beverages',
    'Optional Lake Kivu activities',
    'Tips for guide and hotel staff',
    'Personal expenses'
  ],
  customization: [
    'Preferred accommodation style',
    'Travel dates adjustments',
    'Additional activities',
    'Customized itinerary'
  ],
  whySpecial: 'This journey offers a rare combination of Rwanda\'s most iconic wildlife encounters and peaceful lakeside relaxation. From meeting mountain gorillas and golden monkeys in their natural habitat to unwinding along Lake Kivu\'s tranquil shores, this safari delivers rich experiences, emotional moments, and lifelong memories.',
  itinerary: [
    { 
      day: 1, 
      title: 'Kigali Arrival → City Highlights → Scenic Drive to Volcanoes National Park', 
      description: 'Begin with pickup in Kigali for a relaxed city tour showcasing Rwanda\'s clean capital. Visit panoramic viewpoints and cultural sites. Drive north through rolling hills to Volcanoes National Park. Check into your lodge, enjoy dinner, and prepare for upcoming primate adventures.', 
      image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=600&h=400&fit=crop' 
    },
    { 
      day: 2, 
      title: 'Mountain Gorilla Trekking Adventure → Lodge Relaxation', 
      description: 'After early breakfast, transfer to park headquarters for gorilla trekking briefing. Trek through bamboo forests and volcanic slopes with expert trackers to find a habituated mountain gorilla family. Spend an emotional hour observing their behavior. Enjoy local lunch, then relax at your lodge with peaceful surroundings.', 
      image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop' 
    },
    { 
      day: 3, 
      title: 'Golden Monkey Trekking → Transfer to Lake Kivu', 
      description: 'Start with golden monkey trekking - watch these colorful, energetic primates leap through forest zones. After trekking, depart Volcanoes National Park and drive west to Lake Kivu. Enjoy dramatic landscapes, coffee plantations, and rural communities. Arrive for lakeside relaxation and stunning sunset views.', 
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop' 
    },
    { 
      day: 4, 
      title: 'Lake Kivu Leisure → Optional Boat Ride → Return to Kigali', 
      description: 'Wake to calm lake views for a peaceful morning. Optional activities: relax at hotel, swim, or take boat ride to explore islands and fishing villages. Begin scenic drive back to Kigali with stops as needed. Drop-off at hotel or Kigali International Airport.', 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop' 
    }
  ],
},

// 5 DAYS BEST OF RWANDA SAFARI
{
  slug: '5-days-best-of-rwanda-safari',
  title: '5 DAYS BEST OF RWANDA SAFARI',
  destination: 'Akagera & Volcanoes National Parks, Rwanda',
  duration: '5 Days / 4 Nights',
  groupSize: '2-8 People',
  difficulty: 'Moderate',
  category: 'multi-day-tours',
  description: 'The 5 Days Best of Rwanda Safari with Dream Destination Tours & Travel is the ultimate introduction to Rwanda, offering a curated loop through the country\'s top highlights. Witness the Big Five in Akagera National Park, trek with endangered mountain gorillas in Volcanoes National Park, and explore Kigali\'s rich culture and history.',
  bannerImage: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=1920&h=800&fit=crop',
  galleryImages: [
    'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=800&h=600&fit=crop',
  ],
  highlights: [
    'Big Five wildlife in Akagera',
    'Mountain gorilla trekking',
    'Sunset boat safari on Lake Ihema',
    'Iby\'iwacu Cultural Village visit',
    'Kigali city tour with Genocide Memorial',
    'Picnic lunch in Akagera National Park'
  ],
  included: [
    'Professional safari guide and driver',
    'Comfortable 4x4 safari vehicle with fuel',
    'Gorilla trekking permit',
    'Akagera park fees & boat safari',
    'Iby\'iwacu cultural village visit',
    '4 nights mid-range accommodation',
    'Meals as listed in itinerary',
    'Picnic lunch on Day 2',
    'Drinking water & soft drinks in vehicle',
    'Kigali pick-up & drop-off',
    'All government taxes'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Alcoholic drinks',
    'Tips for guides & lodge staff',
    'Optional activities not listed',
    'Personal expenses'
  ],
  customization: [
    'Lodge upgrades',
    'Extended stops at Twin Lakes or Nyungwe',
    'Pace of travel adjustments',
    'Additional activities'
  ],
  whySpecial: 'This 5-day loop leaves travelers with vivid memories: tranquil boat rides, open savannah game drives, emotional gorilla encounters, and cultural insights into Rwanda\'s heritage and conservation. Compact yet deeply rewarding, it is the perfect introduction to Rwanda for first-time visitors.',
  itinerary: [
    { 
      day: 1, 
      title: 'Arrival → Transfer to Akagera → Sunset Boat Safari', 
      description: 'Upon arrival at Kigali International Airport or hotel, begin scenic drive east to Akagera National Park. Enjoy rolling hills and local insights. Embark on serene sunset boat safari on Lake Ihema, spotting hippos, crocodiles, and water birds. Overnight at lodge in/near the park.', 
      image: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=600&h=400&fit=crop' 
    },
    { 
      day: 2, 
      title: 'Full Day Game Drive → Picnic Lunch → Return to Kigali', 
      description: 'Begin early with full-day game drive across Akagera\'s savannahs and wetlands. Spot zebras, elephants, buffalo, giraffes, with chances for Big Five sightings. Enjoy picnic lunch within the park. Return to Kigali in evening for overnight at your hotel.', 
      image: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=600&h=400&fit=crop' 
    },
    { 
      day: 3, 
      title: 'Kigali → Transfer to Volcanoes NP → Iby\'iwacu Cultural Visit', 
      description: 'After breakfast, travel north to Volcanoes National Park. Enjoy stunning Virunga landscapes. Visit Iby\'iwacu Cultural Village for traditional performances, local crafts, and cultural storytelling showcasing Rwanda\'s heritage. Dinner and overnight at lodge near Volcanoes.', 
      image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop' 
    },
    { 
      day: 4, 
      title: 'Gorilla Trekking → Local Lunch → Lodge Relaxation', 
      description: 'Wake early for briefing at park headquarters before gorilla trek. Walk through bamboo forests and misty slopes to encounter mountain gorilla family up close. Learn about their behavior and conservation. Enjoy local lunch and unwind at lodge with panoramic mountain views.', 
      image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop' 
    },
    { 
      day: 5, 
      title: 'Return to Kigali → Kigali City Tour → Shopping & Departure', 
      description: 'Drive back to Kigali with scenic stops. Explore city with guided tour including Genocide Memorial, viewpoints, and craft markets. Learn about Rwanda\'s history and resilience. Finish with souvenir shopping before final drop-off at hotel or airport.', 
      image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=600&h=400&fit=crop' 
    }
  ],
},

// 10 DAYS PRIME RWANDA SAFARI
{
  slug: '10-days-prime-rwanda-safari',
  title: '10 DAYS PRIME RWANDA SAFARI',
  destination: 'Rwanda (Akagera, Nyungwe, Lake Kivu, Volcanoes)',
  duration: '10 Days / 9 Nights',
  groupSize: '2-8 People',
  difficulty: 'Moderate',
  category: 'multi-day-tours',
  description: 'The 10 Days Prime Rwanda Safari with Dream Destination Tours & Travel is the ultimate Rwanda experience, designed for travelers who want to explore the country\'s wildlife, primates, lakes, and culture in a seamless loop. From Kigali to Akagera, Nyungwe, Lake Kivu, and Volcanoes Mountains, this itinerary showcases Rwanda\'s most iconic destinations.',
  bannerImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&h=800&fit=crop',
  galleryImages: [
    'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  ],
  highlights: [
    'Big Five game drive in Akagera',
    'Chimpanzee trekking in Nyungwe',
    'Mountain gorilla trekking',
    'Golden monkey tracking',
    'Nyungwe Canopy Walk',
    'Lake Kivu boat experience',
    'Twin Lakes visit',
    'Kigali city tour',
    'Sunset boat safari on Lake Ihema'
  ],
  included: [
    'Expert friendly safari guide (full tour)',
    'Comfortable 4x4 safari vehicle with fuel',
    'Gorilla trekking permit',
    'Golden monkey trekking permit',
    'Chimpanzee trekking permit',
    'Kigali City Tour',
    'Nyungwe Canopy Walk',
    'Akagera safari & boat experience',
    'Lake Kivu boat experience',
    '9 nights mid-range accommodation',
    'Meals: Breakfast, Lunch & Dinner as per itinerary',
    'Drinking water & soft drinks',
    'All park fees & government taxes',
    'Airport pick-up & drop-off'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Alcoholic beverages',
    'Tips for guides & lodge staff',
    'Optional activities not listed',
    'Personal expenses'
  ],
  customization: [
    'Travel dates adjustments',
    'Preferred hotel upgrades',
    'Extra activities',
    'Extended stops',
    'Special interests focus'
  ],
  whySpecial: 'This is Rwanda\'s most comprehensive safari, offering wildlife, primates, lakes, culture, and landscapes in a seamless loop. Each day provides a new highlight, from Big Five sightings and chimpanzees to mountain gorillas and serene lakes. Travelers leave with a deep understanding of Rwanda\'s beauty, people, and conservation efforts.',
  itinerary: [
    { 
      day: 1, 
      title: 'Arrival → Kigali City Tour → Dinner & Overnight', 
      description: 'Upon arrival at Kigali International Airport, your guide welcomes you for a Kigali City Tour exploring clean streets, landmarks, viewpoints, and cultural highlights. After lunch, check into hotel for relaxing dinner. Perfect introduction to Rwanda\'s capital.', 
      image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=600&h=400&fit=crop' 
    },
    { 
      day: 2, 
      title: 'Kigali → Akagera NP → Short Game Drive → Sunset Boat Safari', 
      description: 'Travel east to Akagera National Park, Rwanda\'s only savannah reserve. Enjoy introductory game drive spotting wildlife with picnic lunch. Experience serene sunset boat cruise on Lake Ihema with hippos, birds, and picturesque landscapes. Overnight at lodge in/near park.', 
      image: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=600&h=400&fit=crop' 
    },
    { 
      day: 3, 
      title: 'Full-Day Big Five Game Drive → Return to Kigali', 
      description: 'Start early for full-day game drive in Akagera\'s northern plains. Guide highlights key wildlife, conservation efforts, and scenic viewpoints. Enjoy picnic lunch within park before returning to Kigali in evening for dinner and overnight.', 
      image: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=600&h=400&fit=crop' 
    },
    { 
      day: 4, 
      title: 'Kigali → Nyungwe National Park → Dinner & Overnight', 
      description: 'Drive southwest through rolling hills and tea plantations to Nyungwe National Park, known for rich biodiversity and ancient rainforest. Stop for lunch en route before arriving at lodge. Dinner and overnight among lush forest surroundings.', 
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&h=400&fit=crop' 
    },
    { 
      day: 5, 
      title: 'Chimpanzee Trekking → Canopy Walk → Overnight in Nyungwe', 
      description: 'After early briefing, embark on Chimpanzee Trekking through Nyungwe\'s misty rainforest. Observe intelligent primates in natural habitat. After lunch at lodge, walk Nyungwe Canopy Walk for panoramic views of forest canopy. Dinner and overnight at lodge.', 
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop' 
    },
    { 
      day: 6, 
      title: 'Nyungwe → Lake Kivu (Karongi) → Lakeside Relaxation', 
      description: 'Drive from rainforest to tranquil shores of Lake Kivu. Check into lakeside hotel and enjoy calm afternoon soaking in scenic views. Lunch at hotel or nearby restaurant. Spend evening relaxing by lake as sun sets. Dinner and overnight stay.', 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop' 
    },
    { 
      day: 7, 
      title: 'Lake Kivu Boat Experience → Transfer to Volcanoes NP', 
      description: 'Start morning with optional boat ride on Lake Kivu, exploring islands and fishing villages. Drive north to Volcanoes National Park, home to mountain gorillas. Check into lodge, enjoy lunch, and prepare for gorilla adventure. Dinner and overnight near Volcanoes.', 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop' 
    },
    { 
      day: 8, 
      title: 'Gorilla Trekking → Relaxation → Dinner & Overnight', 
      description: 'Begin with early gorilla trekking briefing before hiking through bamboo forests and volcano slopes. Spend magical hour with mountain gorilla family, witnessing behavior up close. Return to lodge for lunch and relaxation with stunning mountain scenery. Dinner and overnight.', 
      image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop' 
    },
    { 
      day: 9, 
      title: 'Golden Monkey Trekking → Twin Lakes Visit → Overnight', 
      description: 'Morning Golden Monkey Trekking - lively, playful primate encounter in Volcanoes NP. Later visit Twin Lakes Burera & Ruhondo for breathtaking views and photo opportunities. Immerse in local culture and landscapes before returning to lodge for dinner and overnight.', 
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop' 
    },
    { 
      day: 10, 
      title: 'Volcanoes NP → Kigali → Shopping for Local Gifts → Departure', 
      description: 'Drive back to Kigali with scenic stops. Visit local markets and craft shops for souvenirs, art, baskets, and coffee. End your Prime Rwanda Safari with hotel drop-off or airport transfer, leaving with lasting memories of Rwanda\'s wildlife, culture, and natural beauty.', 
      image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=600&h=400&fit=crop' 
    }
  ],
}]

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find((t) => t.slug === slug);
};