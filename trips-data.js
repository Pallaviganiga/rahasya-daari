/**
 * ==========================================================================
 * RAHASYA DAARI - EXPEDITIONS & TRIPS CONFIGURATION DATABASE
 * ==========================================================================
 * Easy configuration file to add, edit, or remove treks & sightseeing trips.
 * You can easily modify titles, prices, durations, itineraries, pickup points, and images!
 * ==========================================================================
 */

// 1. Default Bangalore Pickup Locations with Direct Google Maps Link
const DEFAULT_BANGALORE_PICKUPS = [
    {
        name: "Shantala Silk (Majestic)",
        mapUrl: "https://maps.google.com/?q=Shanthala+Silk+House+Majestic+Bengaluru"
    },
    {
        name: "Navarang (opposite to Sagar Hotel)",
        mapUrl: "https://maps.app.goo.gl/EGRNHLapWTUEH4758?g_st=ipc"
    },
    {
        name: "Yashwanthpur Govardhana Theater",
        mapUrl: "https://maps.app.goo.gl/fnEbFd51HQ2mvwJp8?g_st=ipc"
    },
    {
        name: "KLE Dental College Goraguntepalya",
        mapUrl: "https://maps.app.goo.gl/aNuSCTgJLTWLcTDJ6?g_st=ipc"
    }
];

const DEFAULT_PICKUP_SUMMARY = "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya";

// Universal Standard Inclusions across all Treks & Trips
const DEFAULT_INCLUSIONS = [
    "Stay (Tents/Rooms on sharing basis)",
    "2 Breakfast",
    "1 Lunch (packed)",
    "1 Dinner (Veg/non veg)",
    "Basic First-Aid Support",
    "Forest Permission",
    "Waterfall entry fee",
    "Guide charges",
    "Trek Charges",
    "Campfire",
    "Coffee/Tea",
    "Jeep ride charges",
    "Transportation",
    "Toll/Parking charges"
];

// Universal Standard Exclusions across all Treks & Trips
const DEFAULT_EXCLUSIONS = [
    "Anything that’s not mentioned under inclusions.",
    "Any kind of insurance – Medical, travel or accidental.",
    "Cost arising due to uncontrollable circumstances like bad weather, natural calamities, public protests etc.",
    "Meals outside stay."
];

// 2. Featured Signature Trails for Homepage Showcase (2 Treks & 2 Trips)
const FEATURED_TRAILS_LANDING = [
    {
        id: "bandaje-falls",
        title: "Bandaje Falls & Ballalarayana Durga",
        location: "Charmadi Ghats, Chikmagalur",
        difficulty: "Moderate",
        difficultyClass: "moderate",
        duration: "2 Days",
        distance: "14 km",
        altitude: "1,050 m",
        image: "images/Bandaje/bandaje-waterfall-view.jpeg",
        desc: "Hike past the historical Ballalarayana Durga fort ruins to the edge of the roaring 200-ft Bandaje falls plunging into deep mist."
    },
    {
        id: "netravathi",
        title: "Netravathi Trek & Sightseeing",
        location: "Kalasa, Chikmagalur, Karnataka",
        difficulty: "Moderate",
        difficultyClass: "moderate",
        duration: "2 Days",
        distance: "12 km",
        altitude: "1,520 m",
        image: "images/Netravathi/netravathi-cover.jpg",
        desc: "A breathtaking trail through Shola meadows, roaring streams, and 360° panoramic views from the windy crest of Netravathi peak."
    },
    {
        id: "chikmagalur",
        title: "Explore Chikmagalur Trip",
        location: "Chikmagalur, Karnataka",
        difficulty: "Easy",
        difficultyClass: "easy",
        duration: "2 Days",
        distance: "Tour / Sightseeing",
        altitude: "1,930 m",
        image: "images/Chikamangalore/chikamnglr1.jpg",
        desc: "Explore Mullayanagiri Peak, Baba Budangiri, majestic Hebbe Falls, and lush coffee plantations in the coffee land of Karnataka."
    },
    {
        id: "coorg-exploration",
        title: "Explore Coorg Trip",
        location: "Madikeri, Coorg, Karnataka",
        difficulty: "Easy",
        difficultyClass: "easy",
        duration: "2 Days",
        distance: "Tour / Sightseeing",
        altitude: "1,175 m",
        image: "images/Coorg/coorg-cover.jpg",
        desc: "Experience vast misty coffee estates, Abbey Falls, Raja's Seat, and an adventurous 4x4 Jeep safari to Mandalpatti Peak."
    }
];

// 3. Comprehensive Catalog of All Treks & Sightseeing Trips
const TREKS_DATA = [
    // ----------------- 1-DAY WEEKDAY PACKAGES -----------------
    {
        id: "bandaje-1day",
        category: "weekday-1day",
        title: "Bandaje Falls Trek",
        location: "Chikmagalur / Charmadi Ghats, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "1 Day",
        distance: "12-14 km",
        altitude: "1,050 m",
        price: 2699,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Bandaje/bandaje-waterfall-view.jpeg",
        slides: [
            "images/Bandaje/bandaje-cliff-edge.png",
            "images/Bandaje/bandaje-waterfall-view.jpeg",
            "images/Bandaje/bandaje.png",
            "images/Bandaje/bandaje1.png",
            "images/Bandaje/bandaje-valley-trek.jpeg"
        ],
        description: "Experience the majestic Bandaje Falls and Ballalarayana Durga fort ruins on a power-packed 1-Day weekday adventure from Bangalore. Escape the weekend rush, traverse the lush Shola grasslands of Charmadi Ghats, witness the roaring 200-ft waterfall plunge, and return refreshed the same night.",
        highlights: [
            "Bandaje Falls Trek (6-7 km one way)",
            "Ballalarayana Durga Fort Ruins",
            "Rani Jhari Viewpoint",
            "Shola Grasslands & Charmadi Ghats Vistas",
            "Certified Trek Leaders & First Aid",
            "Peaceful Midweek Trail Experience"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 1999,
        advanceAmount: 1000,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~10:30 PM pickup) towards Charmadi Ghats / Chikmagalur region." },
            { day: "Day 01", title: "Bandaje Falls Trek, Ballalarayana Durga & Return", desc: "<ul><li>Arrive early morning at the base freshen-up facility and freshen up.</li><li>Enjoy a hearty local breakfast.</li><li>Jeep ride to the trail base and begin the trek through Shola grasslands and dense forest.</li><li>Reach Ballalarayana Durga Fort ruins overlooking the rolling Western Ghats.</li><li>Climb to the edge of Bandaje Falls where water drops 200 feet into the valley.</li><li>Enjoy packed lunch amidst nature and soak in panoramic views.</li><li>Descend back to base and visit Rani Jhari Viewpoint for sweeping valley views.</li><li>Evening tea/coffee and snacks.</li><li>Begin return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "netravathi-1day",
        category: "weekday-1day",
        title: "Netravathi Peak Trek",
        location: "Kalasa, Chikmagalur, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Easy to Moderate",
        duration: "1 Day",
        distance: "12 km (6+6 km)",
        altitude: "1,520 m",
        price: 2699,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Netravathi/netravathi-panorama-hd.jpg",
        slides: [
            "images/Netravathi/netravathi-panorama-hd.jpg",
            "images/Netravathi/netravathi-cover.jpg",
            "images/Netravathi/netravathi-peak-view.jpeg",
            "images/Netravathi/netravathi-clouds-peak.jpg",
            "images/Netravathi/netravathi-mist-meadows.jpg"
        ],
        description: "Ascend to the breathtaking Netravathi Peak on a peaceful weekday hike. Walk across undulating emerald meadows, bubbling freshwater streams, and steep Shola ridges without the weekend crowd, returning back to Bangalore by Sunday night.",
        highlights: [
            "Netravathi Peak Trek (6+6 km)",
            "360° Western Ghats Panoramic Vistas",
            "Freshwater Mountain Streams & Meadows",
            "Soormane / Kodige Waterfalls visit",
            "Certified Trek Leaders & Support"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 1999,
        advanceAmount: 1000,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~10:30 PM pickup) to Kalasa, Chikmagalur." },
            { day: "Day 01", title: "Netravathi Peak Trek & Soormane Falls", desc: "<ul><li>Arrive at Samse/Kalasa early morning, freshen up, and enjoy breakfast.</li><li>Off-road jeep ride to the base of Netravathi Peak trail.</li><li>Begin the 6+6 km trek through Shola forests, streams, and rolling grasslands.</li><li>Reach Netravathi Peak summit for 360° views of Western Ghats and enjoy packed lunch.</li><li>Descend back to base and visit the refreshing Soormane Waterfall.</li><li>Evening tea/coffee and snacks.</li><li>Begin return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "kudremukh-1day",
        category: "weekday-1day",
        title: "Kudremukha Peak Trek",
        location: "Kalasa, Chikmagalur, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "1 Day",
        distance: "18 km (9+9 km)",
        altitude: "1,894 m",
        price: 2799,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Kudremukha/kudremukha-cover.jpg",
        slides: [
            "images/Kudremukha/kudremukha-cover.jpg",
            "images/Kudremukha/kudremukha-grasslands-1.jpeg",
            "images/Kudremukha/kudremukha-valley.jpeg",
            "images/Kudremukha/kudremukh1-onti-mara.jpeg"
        ],
        description: "Conquer Karnataka's 3rd highest peak at 1,894m in a streamlined 1-day weekday expedition. Traverse the pristine Kudremukh National Park, Onti Mara single tree ridge, and iconic horse-faced peak in total serenity.",
        highlights: [
            "Kudremukha Peak Summit (1,894 m)",
            "Kudremukh National Park Forest Trail",
            "Onti Mara Lonely Tree Point",
            "4x4 Off-Road Jeep Ride to Trailhead",
            "Mullodi Waterfall Visit",
            "Certified Guides & Trek Leaders"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 2099,
        advanceAmount: 1200,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~10:30 PM pickup) to Samse / Kalasa village." },
            { day: "Day 01", title: "Kudremukha Peak Climb & Mullodi Waterfalls", desc: "<ul><li>Arrive early morning in Samse/Kalasa, freshen up, and enjoy a local breakfast.</li><li>Hop into a rugged 4x4 Jeep for a scenic ride to the Mullodi trek base.</li><li>Begin the 9+9 km trek through Kudremukh National Park, lush Shola forests, and streams.</li><li>Reach Onti Mara and ascend to the horse-faced Kudremukha Peak (1,894 m).</li><li>Soak in 360-degree views of the Western Ghats and enjoy packed lunch.</li><li>Descend back to Mullodi base and visit Mullodi / Soormane Waterfall.</li><li>Evening tea/coffee and snacks.</li><li>Begin return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "etthina-bhuja-1day",
        category: "weekday-1day",
        title: "Etthina Bhuja Trek",
        location: "Mudigere, Chikmagalur, Karnataka",
        difficulty: "easy",
        difficultyLabel: "Easy",
        duration: "1 Day",
        distance: "8 km",
        altitude: "1,300 m",
        price: 2499,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Etthina Bhuja/ethina1-landscape.jpg",
        slides: [
            "images/Etthina Bhuja/ethina1-landscape.jpg",
            "images/Etthina Bhuja/ethina2-landscape.jpg"
        ],
        description: "A gentle yet rewarding weekday hike to the Ox-shoulder shaped peak of Etthina Bhuja in Mudigere. Enjoy sweeping views of Charmadi Ghats and misty Devaramane Hills before heading back home.",
        highlights: [
            "Etthina Bhuja Peak Trek (8 km)",
            "Nanya Bhairaveshwara Historic Temple",
            "Devaramane Hills & Viewpoint",
            "Hanbalu / Magajahalli Waterfalls",
            "Western Ghats Vistas & Coffee Aromas"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 1799,
        advanceAmount: 1000,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~10:30 PM pickup) towards Mudigere in the Western Ghats." },
            { day: "Day 01", title: "Etthina Bhuja Trek, Devaramane & Waterfalls", desc: "<ul><li>Arrive early morning in Mudigere, freshen up, and enjoy breakfast.</li><li>Head to Nanya Bhairaveshwara Temple base and begin the Etthina Bhuja Peak Trek (easy 8 km hike).</li><li>Reach the summit shaped like an Ox's shoulder and enjoy panoramic views of Charmadi Ghats.</li><li>Descend back and visit the serene Devaramane Hills & viewpoint for a relaxing nature walk.</li><li>Explore nearby Hanbalu / Magajahalli Falls amidst dense greenery.</li><li>Evening tea/coffee and snacks.</li><li>Begin return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "kurinjal-1day",
        category: "weekday-1day",
        title: "Kurinjal Peak Trek",
        location: "Kudremukh Range, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "1 Day",
        distance: "14 km (7+7 km)",
        altitude: "1,159 m",
        price: 2699,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Kurinjal/kuri4.jpeg",
        slides: [
            "images/Kurinjal/kuri4.jpeg",
            "images/Kurinjal/kuri2.jpeg",
            "images/Kurinjal/kuri1.jpeg",
            "images/Kurinjal/kuri3.jpeg"
        ],
        description: "An offbeat weekday trail taking you deep into the heart of the Shola woods. Spot rare flora, hike past ancient ruins of an old tower, and stand at the windy peak overlooking the vast Kudremukh forest region.",
        highlights: [
            "Kurinjal Peak Trek (7+7 km)",
            "Deep Shola Woods & Wildlife Sanctuary",
            "Kodige Falls / Soormane Falls",
            "Kudremukha National Park Views",
            "Certified Trek Leaders & Support"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 1999,
        advanceAmount: 1000,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~10:30 PM pickup) towards Samse / Kudremukh range." },
            { day: "Day 01", title: "Kurinjal Peak Trek & Kodige Falls", desc: "<ul><li>Arrive early morning in Samse, freshen up, and enjoy breakfast.</li><li>Drive through Kudremukha National Park to the trek base.</li><li>Begin your 7 km trek to Kurinjal Peak through lush green forests and vibrant flora.</li><li>Arrive at Kurinjal Peak for panoramic views of rolling hills and deep valleys.</li><li>Enjoy packed lunch amidst nature and descend back to base.</li><li>Visit beautiful Kodige Falls and relax by the water.</li><li>Evening tea/coffee and snacks.</li><li>Begin return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "kodachadri-1day",
        category: "weekday-1day",
        title: "Kodachadri Peak Trek",
        location: "Shimoga, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "1 Day",
        distance: "11-12 km",
        altitude: "1,343 m",
        price: 2799,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Kodachadri/kodachadri-cover.jpg",
        slides: [
            "images/Kodachadri/kodachadri-cover.jpg",
            "images/Kodachadri/kodachadri-hidlumane-falls.jpeg",
            "images/Kodachadri/kodachadri-peak-temple.jpeg",
            "images/Kodachadri/kodachadri-sunset-ridge.jpg"
        ],
        description: "Hike past the multi-tiered Hidlumane Waterfalls to the summit of Kodachadri and Sarvajna Peetha in the serene Mookambika Wildlife Sanctuary, followed by an exhilarating 4x4 Jeep descent.",
        highlights: [
            "Hidlumane Multi-Tiered Waterfalls",
            "Sarvajna Peetha Peak Summit (1,343 m)",
            "Mookambika Wildlife Sanctuary",
            "Off-Road 4x4 Jeep Descent Experience",
            "Certified Trek Leaders & Support"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 2099,
        advanceAmount: 1200,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~10:30 PM pickup) to the base of Kodachadri." },
            { day: "Day 01", title: "Hidlumane Falls, Kodachadri Peak & Jeep Ride", desc: "<ul><li>Arrive early morning, freshen up, and enjoy breakfast.</li><li>Begin trek through dense forests and streams in Mookambika Wildlife Sanctuary.</li><li>Climb past the multi-tiered Hidlumane Waterfalls.</li><li>Ascend through Shola grasslands to reach Sarvajna Peetha summit (1,343 m).</li><li>Enjoy packed lunch with panoramic views of the Western Ghats.</li><li>4x4 Jeep ride back down to base camp.</li><li>Evening tea/coffee and snacks.</li><li>Begin return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },

    // ----------------- 2-DAYS FULL TOURS & TREKS -----------------
    {
        id: "bandaje-falls",
        category: "trek",
        popular: true,
        title: "Bandaje Falls Trek & Sightseeing",
        location: "Chikmagalur / Charmadi Ghats, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "2 Days",
        distance: "12-14 km",
        altitude: "1,050 m",
        originalPrice: 4500,
        price: 4200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Bandaje/bandaje-waterfall-view.jpeg",
        slides: [
            "images/Bandaje/bandaje-cliff-edge.png",
            "images/Bandaje/bandaje-waterfall-view.jpeg",
            "images/Bandaje/bandaje.png",
            "images/Bandaje/bandaje1.png",
            "images/Bandaje/bandaje-valley-trek.jpeg"
        ],
        description: "The Bandaje Falls is located in the Chikmagalur district of Karnataka, about 250 km from Bangalore. This beautiful waterfall, situated in the Western Ghats, has a total height of around 200 feet (60 meters). The Bandaje Falls Trek is moderately challenging and takes about 4 to 6 hours to complete, depending on the pace and route. The trail winds through Shola grassland, forests and rolling hills, offering spectacular views of the lush landscape and a chance to experience the rich biodiversity of the region.",
        highlights: [
            "Trek 6+6 kms",
            "Bandaje waterfall",
            "Western ghat landscape",
            "Kodige waterfall",
            "Jeep ride",
            "Kelaguru tea estate",
            "Shola grassland",
            "Unesco heritage temple",
            "Trip guide"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight journey from Bangalore", desc: "Overnight journey from Bangalore" },
            { day: "Day 01", title: "Into the Heart of the Western Ghats", desc: "<ul><li>Arrive at the homestay and freshen up after your journey.</li><li>Enjoy a hearty breakfast to fuel up for the day ahead.</li><li>Pack your essentials and gear up for an adventurous day in the wild!</li><li>Hop into a jeep for a scenic ride to the base of the Bandaje Falls trail.</li><li>Begin your trek through the lush forest trail, immersing yourself in the serene surroundings.</li><li>Pause for a short break and a group photo as you emerge into the stunning Shola grasslands.</li><li>Continue your journey through the majestic Western Ghats—with panoramic views of the coastal plains unfolding on your right.</li><li>Arrive at the dramatic edge of Bandaje Falls, where the water plunges over 200 feet—a truly awe-inspiring sight.</li><li>Relax by the falls and enjoy a packed lunch amid nature's grandeur.</li><li>Trek back down to the base.</li><li>Visit the nearby Rani Jhari Viewpoint for one last sweeping view of the landscape.</li><li>Take the jeep back to the homestay and freshen up.</li><li>Sip on evening tea or coffee as the sun sets.</li><li>Wind down with a cozy campfire and music (If weather permits), followed by a delicious dinner and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Waterfalls, Heritage & Homeward Journey", desc: "<ul><li>Wake up to a refreshing morning in the hills.</li><li>Head out on a jeep ride to explore the hidden gem of Kodige Waterfalls.</li><li>Spend some quality time at the falls—soak in the serenity and snap a fun group photo!</li><li>Ride back to the homestay and freshen up.</li><li>Relish a wholesome breakfast.</li><li>Check out from the homestay.</li><li>Make a stop at the scenic Kelaguru Tea Estate—a perfect spot to learn about local tea culture and snap some Insta-worthy pictures.</li><li>Continue your journey toward Belur Town.</li><li>On route, stop for a self-sponsored lunch at a local eatery.</li><li>Visit the magnificent UNESCO World Heritage Site—the Hoysala Temple at Belur, known for its intricate carvings and historic charm.</li><li>Begin your return journey to Bangalore.</li><li>Arrive back in the city by 10:00 PM (subject to traffic conditions).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "netravathi",
        category: "trek",
        popular: true,
        title: "Netravathi Trek & Sightseeing",
        location: "Kalasa, Chikmagalur, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Easy to Moderate",
        duration: "2 Days",
        distance: "12 km (6+6 km)",
        altitude: "1,520 m",
        originalPrice: 4500,
        price: 4200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Netravathi/netravathi-panorama-hd.jpg",
        slides: [
            "images/Netravathi/netravathi-panorama-hd.jpg",
            "images/Netravathi/netravathi-cover.jpg",
            "images/Netravathi/netravathi-peak-view.jpeg",
            "images/Netravathi/netravathi-clouds-peak.jpg",
            "images/Netravathi/netravathi-lush-hills.jpg",
            "images/Netravathi/netravathi-mist-meadows.jpg",
            "images/Netravathi/netravathi-mountain-range.jpg"
        ],
        description: "The Netravathi Trek, located near Kalasa in the Chikmagalur district of Karnataka, is approximately 300 km from Bangalore. The trek is renowned for its picturesque landscapes, dense forests, and the Netravathi River, which originates in the Western Ghats. The trail offers a moderately challenging hike, taking around 6 to 8 hours to complete, depending on the pace and route. The trek is a great blend of adventure, natural beauty, and the chance to experience the rich flora and fauna of the Western Ghats.",
        highlights: [
            "Trek 6+6 kms",
            "Western ghat landscape",
            "Water streams",
            "Kodige falls",
            "Jeep ride",
            "Samse tea estate",
            "Shola grassland",
            "Unesco heritage temple",
            "Trip guide"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3000,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight journey from Bangalore.", desc: "Overnight journey from Bangalore." },
            { day: "Day 01", title: "Trek to the Tranquil Heights of Netravathi", desc: "<ul><li>Arrive at your charming homestay in the peaceful village of Samse, Kalasa.</li><li>Freshen up and enjoy a hearty local breakfast to kick-start your day.</li><li>Pack your essentials and gear up for an unforgettable adventure.</li><li>Set off on an exciting jeep ride through rugged terrain to the base of Netravathi Peak.</li><li>Begin your scenic trek, surrounded by lush forests, gentle streams, and cascading waterfalls.</li><li>Enjoy the trail's natural beauty, stopping to admire the sounds and sights of the wild.</li><li>Continue your ascent through the serene Western Ghats.</li><li>Reach the summit of Netravathi Peak—take in the breathtaking 360° views.</li><li>Capture the moment with a group photo at the top.</li><li>Enjoy your packed lunch amidst the clouds and greenery.</li><li>Unwind, breathe in the mountain air, and soak up the peaceful surroundings.</li><li>Begin your descent back to the base as the day cools.</li><li>Return to the homestay, freshen up, and relax.</li><li>Sip on a warm cup of tea or coffee while enjoying the evening breeze.</li><li>Gather around the campfire for fun, conversations, and music under the stars.</li><li>End the day with a delicious dinner and a restful overnight stay.</li></ul>" },
            { day: "Day 02", title: "Tea Trails, Waterfalls & Heritage Wonders", desc: "<ul><li>Rise early, freshen up, and enjoy a fulfilling breakfast.</li><li>Check out from the homestay and head out for more exploration.</li><li>Take a leisurely walk through the picturesque Samse tea estate.</li><li>Visit the beautiful Kodige Falls—feel the mist, enjoy the view and take a refreshing splash!</li><li>Spend some quiet time relaxing by the falls.</li><li>Enjoy a self-sponsored lunch on the way at a local spot.</li><li>Proceed to the historical town of Belur.</li><li>Explore the awe-inspiring UNESCO World Heritage Hoysala Temple, a masterpiece of ancient Indian architecture.</li><li>Begin the return journey to Bangalore, filled with stories and memories.</li><li>Reach Bangalore by approximately 9:30–10:00 PM (subject to traffic).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "kudremukh",
        category: "trek",
        popular: true,
        title: "Kudremukha Trek & Sightseeing",
        location: "Kalasa, Chikmagalur, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "2 Days",
        distance: "18 km (9+9 km)",
        altitude: "1,894 m",
        originalPrice: 4500,
        price: 4200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Kudremukha/kudremukha-cover.jpg",
        slides: [
            "images/Kudremukha/kudremukha-cover.jpg",
            "images/Kudremukha/kudremukha-grasslands-1.jpeg",
            "images/Kudremukha/kudremukha-valley.jpeg",
            "images/Kudremukha/kudremukh1-onti-mara.jpeg",
            "images/Kudremukha/kudremukh1-flora.jpeg"
        ],
        description: "The Kudremukh Trek is located in Kalasa, Chikmagalur district of Karnataka, about 300 km from Bangalore. Kudremukh, at an elevation of 1,894 meters (6,214 feet), is the 3rd highest peak in Karnataka, and the trek to its summit is both scenic and adventurous. The trail is moderately challenging, typically taking around 6 to 8 hours to complete. It winds through lush forests, rolling grasslands, and several streams, offering stunning panoramic views of the surrounding valleys and hills. The trek is situated within the Kudremukh National Park, home to a variety of wildlife, including tigers, leopards, and many species of birds.",
        highlights: [
            "Trek 9+9 kms",
            "Western ghat landscape",
            "Water streams",
            "Kodige falls",
            "Jeep ride",
            "Samse tea estate",
            "Shola grassland",
            "Unesco heritage temple",
            "Trip guide"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey from Bangalore.", desc: "Overnight Journey from Bangalore." },
            { day: "Day 01", title: "Into the Heart of Kudremukha", desc: "<ul><li>Arrive at your cozy homestay nestled in the serene Samse village, Kalasa.</li><li>Refresh yourself and enjoy a delicious local breakfast.</li><li>Gear up for the day's adventure—pack your essentials and get ready to explore!</li><li>Hop into a rugged jeep for a thrilling ride to the base of Kudremukha Peak.</li><li>Begin your scenic trek through lush greenery and misty trails.</li><li>Pause at Onti Mara for a short break and a fun group photo session.</li><li>Continue your journey through the wild beauty of the Western Ghats.</li><li>Reach the majestic Kudremukha Peak—soak in the panoramic views and cool mountain breeze.</li><li>Enjoy packed lunch surrounded by nature's splendor.</li><li>Start the descent back to the base.</li><li>Return to the homestay, unwind, and freshen up.</li><li>Sip on some hot tea or coffee as the evening sets in.</li><li>Gather around a cozy campfire for stories and laughter. (Subjected to weather conditions)</li><li>Relish a hearty dinner and rest well for the next day's adventure.</li></ul>" },
            { day: "Day 02", title: "Nature, Heritage & Homeward Bound", desc: "<ul><li>Wake up to a refreshing morning and get ready for the day.</li><li>Savor a wholesome breakfast before checking out from the homestay.</li><li>Take a peaceful stroll through the lush Samse tea estate.</li><li>Head to the enchanting Kodige Falls—dip your feet or enjoy a splash!</li><li>Spend some relaxed moments at the falls, surrounded by tranquil nature.</li><li>Grab a self-sponsored lunch en route at a local eatery of your choice.</li><li>Journey onward to the historic town of Belur.</li><li>Explore the architectural marvel of the UNESCO World Heritage Hoysala Temple—an artistic treasure of ancient India.</li><li>Begin your return trip to Bangalore, carrying memories of nature, adventure, and heritage.</li><li>Arrive in Bangalore by approximately 9:30–10:00 PM (depending on traffic conditions).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "etthina-bhuja",
        category: "trek",
        title: "Etthina Bhuja Trek & Sightseeing",
        location: "Mudigere, Chikmagalur, Karnataka",
        difficulty: "easy",
        difficultyLabel: "Easy",
        duration: "2 Days",
        distance: "8 km",
        altitude: "1,300 m",
        price: 3599,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Etthina Bhuja/ethina1-landscape.jpg",
        slides: [
            "images/Etthina Bhuja/ethina1-landscape.jpg",
            "images/Etthina Bhuja/ethina2-landscape.jpg"
        ],
        description: "Mudigere, located about 245 km from Bangalore in the Chikmagalur district of Karnataka, is a peaceful hill station surrounded by lush coffee plantations and the scenic beauty of the Western Ghats. Known for attractions like the Etthina Bhuja Trek, an easy hike that takes you to a peak offering panoramic views of the surrounding hills, and Devaramane Hills, known for its stunning beauty and quiet ambiance.",
        highlights: [
            "Etthina Bhuja Peak Trek",
            "Mullayyanagiri Peak (Highest peak of Karnataka)",
            "Devaramane Hills & Viewpoint",
            "Hanbalu / Magajahalli Waterfalls",
            "Belur Hoysala UNESCO World Heritage Temple",
            "Lush Coffee Plantation Walk",
            "Panoramic Western Ghats Vistas"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 2500,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~245 km) towards Mudigere in the Western Ghats." },
            { day: "Day 01", title: "Etthina Bhuja Trek, Devaramane & Waterfalls", desc: "<ul><li>Arrive at the homestay in Mudigere, freshen up, and enjoy breakfast.</li><li>Head to Nanya Bhairaveshwara Temple base and begin the Etthina Bhuja Peak Trek (easy 8 km hike).</li><li>Reach the summit shaped like an Ox's shoulder and enjoy panoramic views of Charmadi Ghats.</li><li>Descend back and visit the serene Devaramane Hills & viewpoint for a relaxing nature walk.</li><li>Explore nearby Hanbalu / Magajahalli Falls amidst dense greenery.</li><li>Evening coffee plantation walk, campfire, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Mullayanagiri Peak & Belur UNESCO Heritage", desc: "<ul><li>Wake up early and enjoy breakfast.</li><li>Check out from the homestay.</li><li>Visit Mullayyanagiri Peak - the highest peak of Karnataka for sweeping mountain views.</li><li>En route back to Bangalore, visit the magnificent UNESCO World Heritage Site — Belur Hoysala Temple.</li><li>Self-sponsored lunch en route.</li><li>Begin return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "kurinjal",
        category: "trek",
        title: "Kurinjal Trek",
        location: "Kudremukh Range, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "2 Days",
        distance: "14 km",
        altitude: "1,159 m",
        originalPrice: 4500,
        price: 4200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Kurinjal/kuri4.jpeg",
        slides: [
            "images/Kurinjal/kuri4.jpeg",
            "images/Kurinjal/kuri2.jpeg",
            "images/Kurinjal/kuri1.jpeg",
            "images/Kurinjal/kuri3.jpeg"
        ],
        description: "An offbeat trail that takes you deep into the heart of the shola woods. Spot unique flora, trek past ruins of an old tower, and stand at the windy peak overlooking Kudremukh forest region.",
        highlights: [
            "Trek 7+7 kms",
            "Western ghat landscape",
            "Kudremukha national park",
            "Kodige falls",
            "Jeep ride",
            "Samse tea estate",
            "Shola grassland",
            "Unesco heritage temple",
            "Trip guide"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight journey from Bangalore.", desc: "Overnight journey from Bangalore." },
            { day: "Day 01", title: "Into the Heart of the Western Ghats", desc: "<ul><li>Arrive at the cozy homestay nestled in the serene village of Samse. Take a moment to freshen up and soak in the peaceful surroundings.</li><li>Enjoy a hearty breakfast to fuel up for the day's adventure.</li><li>Pack your essentials, lace up your trekking shoes, and get ready to dive into nature!</li><li>Drive through the enchanting Kudremukha National Park, a journey surrounded by dense forests and scenic views, on your way to the trek base.</li><li>Begin your 7 km trek to Kurinjal Peak, winding through lush green forests, vibrant flora, and the sounds of chirping birds.</li><li>Pause at a scenic viewpoint to catch your breath, click some unforgettable group pictures, and take in the magic around you.</li><li>Continue your ascent through the beautiful trails as the peak draws closer with every step.</li><li>Arrive at the Kurinjal Peak, where panoramic views of rolling hills and deep valleys await—it's time to relax, unwind, and just be in the moment.</li><li>Enjoy your packed lunch amidst nature, a meal with a view like no other.</li><li>Begin your descent back to the base, carrying memories of a thrilling climb and breathtaking views.</li><li>Return to the homestay, where you can refresh and relax after an adventurous day.</li><li>Sip on some evening tea or coffee, share stories, and unwind by the campfire under a starlit sky. (Subjected to weather conditions)</li><li>End the day with a delicious dinner and a peaceful overnight stay.</li></ul>" },
            { day: "Day 02", title: "Tea Trails, Waterfalls & Heritage Wonders", desc: "<ul><li>Rise early, freshen up, and enjoy a fulfilling breakfast.</li><li>Check out from the homestay and head out for more exploration.</li><li>Take a leisurely walk through the picturesque Samse tea estate.</li><li>Visit the beautiful Kodige Falls—dip your feet or take a refreshing splash!</li><li>Spend some quiet time relaxing by the falls.</li><li>Enjoy a self-sponsored lunch on the way at a local spot.</li><li>Proceed to the historical town of Belur.</li><li>Explore the awe-inspiring UNESCO World Heritage Hoysala Temple, a masterpiece of ancient Indian architecture.</li><li>Begin the return journey to Bangalore, filled with stories and memories.</li><li>Reach Bangalore by approximately 9:30–10:00 PM (subject to traffic).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "gangadikallu",
        category: "trek",
        title: "Gangadikallu Trek",
        location: "Kudremukh Range, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "2 Days",
        distance: "10 km",
        altitude: "1,455 m",
        originalPrice: 4500,
        price: 4200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Gangadikallu/gangadikallu-cover.jpg",
        slides: [
            "images/Gangadikallu/gangadikallu-cover.jpg",
            "images/Gangadikallu/gangadikallu-meadows.jpeg",
            "images/Gangadikallu/gangadikallu-summit-view.jpeg"
        ],
        description: "Trek to the pristine peak of Gangadikallu, where misty winds blow across vast meadows. A lesser-known trail perfect for travelers searching for pure wilderness and solitude.",
        highlights: [
            "Gangadikallu Peak Trek",
            "Scenic forest trails",
            "Lakya Dam backwaters view",
            "Samse Tea Estate",
            "Kodige Falls / Soormane Falls",
            "Jeep ride experience",
            "Homestay stay",
            "Campfire",
            "Belur Hoysala Temple",
            "UNESCO Heritage Site"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Departure", desc: "Overnight journey from Bangalore to the beautiful Western Ghats." },
            { day: "Day 01", title: "Gangadikallu Trek Adventure", desc: "<ul><li>Reach the homestay at Samse, Kalasa, freshen up, and enjoy breakfast.</li><li>Travel to Gangamoola trek starting point.</li><li>Begin the Gangadikallu Trek (10 KM | 5 KM ascent + 5 KM descent).</li><li>Reach the majestic Gangadikallu Peak with views of Lakya Dam backwaters.</li><li>Enjoy packed lunch and descend back to base.</li><li>Evening tea/coffee, campfire, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Waterfalls & Heritage Trail", desc: "<ul><li>Wake up, have breakfast, and check out from homestay.</li><li>Visit picturesque Samse Tea Estate and Kodige Falls via jeep ride.</li><li>Visit the magnificent Belur Hoysala Temple (UNESCO World Heritage Site).</li><li>Begin return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "kodachadri",
        category: "trek",
        title: "Kodachadri Trek & Sightseeing",
        location: "Shimoga, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "2 Days",
        distance: "11-12 km",
        altitude: "1,343 m",
        originalPrice: 4500,
        price: 4200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Kodachadri/kodachadri-cover.jpg",
        slides: [
            "images/Kodachadri/kodachadri-cover.jpg",
            "images/Kodachadri/kodachadri-hidlumane-falls.jpeg",
            "images/Kodachadri/kodachadri-peak-temple.jpeg",
            "images/Kodachadri/kodachadri-sunset-ridge.jpg"
        ],
        description: "Kodachadri is a popular trekking destination located about 400 km from Bangalore in the Western Ghats of Karnataka, within the Mookambika Wildlife Sanctuary. The journey offers a scenic mix of dense forests, streams, and waterfalls like Hidlumane, and culminates at the Kodachadri peak.",
        highlights: [
            "Mookambika Wildlife Sanctuary",
            "Hidlumane Waterfalls Climb",
            "Sarvajna Peetha & Peak Summit",
            "Panoramic Arabian Sea Views",
            "Near Revered Mookambika Temple",
            "Off-road 4x4 Jeep Ride",
            "Dense Shola Forests & Streams",
            "Nagara Fort Historical Ruins"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~400 km) to the base of Kodachadri in Mookambika Wildlife Sanctuary." },
            { day: "Day 01", title: "Hidlumane Falls & Peak Climb", desc: "<ul><li>Arrive at homestay, freshen up, and enjoy breakfast.</li><li>Begin 11-12 km trek through dense forests and streams.</li><li>Climb past the multi-tiered Hidlumane Waterfalls.</li><li>Ascend through Shola grasslands to reach Sarvajna Peetha summit (1,343 m).</li><li>4x4 Jeep ride back down to base camp.</li><li>Evening tea, campfire, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Cultural Heritage & Return Journey", desc: "<ul><li>Wake up, breakfast, and check out.</li><li>Visit historical Nagara Fort ruins and Mookambika Temple surroundings.</li><li>Self-sponsored lunch en route and return journey to Bangalore (~10:00 PM).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "dudhsagar",
        category: "trek",
        popular: true,
        title: "Dudhsagar Falls & Dandeli Trip",
        location: "Goa-Karnataka Border & Dandeli",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "2 Days",
        distance: "22 km (11+11 km)",
        altitude: "310 m",
        price: 4400,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Dudhsagar Falls & Dandeli/dudhsagar-falls-view.png",
        slides: [
            "images/Dudhsagar Falls & Dandeli/dudhsagar-falls-view.png",
            "images/Dudhsagar Falls & Dandeli/dudhsagar-waterfall.png",
            "images/Dudhsagar Falls & Dandeli/dandeli-white-water.jpeg",
            "images/Dudhsagar Falls & Dandeli/dandeli-rafting-rapids.jpeg"
        ],
        description: "The Dudhsagar Falls, located on the Goa-Karnataka border, is one of India's tallest waterfalls, standing at 310 meters. The trek passes through dense forests, railway tracks, and picturesque landscapes with white-water rafting and water activities on the roaring Kali River in Dandeli.",
        highlights: [
            "Dudhsagar Waterfall Trek (11+11 km)",
            "Dandeli White-Water River Rafting",
            "Kali River Water Activities (Kayaking, Zorbing, Jacuzzi)",
            "Dandeli Wildlife Sanctuary Region",
            "Mighty 310-Meter Four-Tiered Dudhsagar Waterfall",
            "Scenic Railway Tracks & Dense Forest Canopy Trails"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~460 km) towards Kulem / Dandeli region." },
            { day: "Day 01", title: "Dudhsagar Waterfalls Trek (11+11 km)", desc: "<ul><li>Arrive at Kulem base, freshen up, and enjoy breakfast.</li><li>Begin the thrilling 11+11 km Dudhsagar trek along forest trails and railway tracks.</li><li>Reach the base of the mighty 310-meter Dudhsagar Falls.</li><li>Trek back to Kulem and transfer to Dandeli jungle stay.</li><li>Evening tea, campfire, dinner, and overnight stay in Dandeli.</li></ul>" },
            { day: "Day 02", title: "Dandeli River Rafting & Kali River Water Sports", desc: "<ul><li>Wake up early, freshen up, and enjoy breakfast.</li><li>Head to Kali River for White-Water River Rafting & water sports (Kayaking, Zorbing, Jacuzzi).</li><li>Self-sponsored lunch en route and return journey to Bangalore (~10:30 PM).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "chikmagalur",
        category: "trip",
        title: "Explore Chikmagalur Trip",
        location: "Chikkamagaluru, Karnataka",
        difficulty: "easy",
        difficultyLabel: "Easy / Sightseeing",
        duration: "2 Days",
        distance: "N/A",
        altitude: "1,930 m",
        originalPrice: 5400,
        price: 4900,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Chikamangalore/chikamnglr1.jpg",
        slides: [
            "images/Chikamangalore/chikamnglr1.jpg",
            "images/Chikamangalore/chikamnglr2.jpg"
        ],
        description: "Chikmagalur, located about 250 km northwest of Bangalore in Karnataka, is a serene hill station known for its lush coffee plantations, scenic landscapes, and pleasant climate. Nestled in the Western Ghats, it offers attractions like Mullayanagiri (the highest peak in Karnataka), Baba Budangiri, and Hebbe Falls.",
        highlights: [
            "Mullayyanagiri Peak",
            "Hebbe Falls",
            "Bababudan Giri / Datthapeeta",
            "Kemmannugundi",
            "Z Point Trek (2 km)",
            "Jeep Ride",
            "UNESCO Heritage Temple",
            "Trip Guide"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3900,
        advanceAmount: 2000,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 01", title: "PEAKS, FALLS & FOREST TRAILS", desc: "<ul><li>Begin the day with an early morning visit to Mullayyanagiri Peak—the highest peak in Karnataka.</li><li>Take in the breathtaking panoramic views from the top of Karnataka.</li><li>Head back and check in at your cozy homestay in Chikmagalur.</li><li>Freshen up and enjoy a wholesome breakfast to energize your day.</li><li>Pack your essentials and get ready for a full day of exploration.</li><li>Travel to the scenic Kemmannugundi Hills, surrounded by lush greenery.</li><li>Start the Z Point Trek (2 km), an easy and enjoyable trail ideal for beginners.</li><li>Reach Z Point and soak in the serene, misty views of the Kemmannugundi region.</li><li>Trek back and proceed to the Hebbe Falls jeep point.</li><li>Embark on a thrilling jeep ride through the Bhadra Tiger Reserve to reach the mesmerizing Hebbe Falls.</li><li>Walk for about 15 minutes through forest trails to reach the base of the falls.</li><li>Enjoy the spectacular sight of Hebbe Falls nestled deep within the reserve.</li><li>Capture group photos amid the beauty of nature.</li><li>Return by jeep to the base.</li><li>Relish a packed lunch surrounded by nature.</li><li>Begin your journey back to the homestay.</li><li>Arrive at the homestay, freshen up, and unwind.</li><li>Enjoy evening tea or coffee with the cool mountain breeze.</li><li>Gather around a campfire with music and good company.</li><li>End the day with a delicious dinner and a restful overnight stay.</li></ul>" },
            { day: "Day 02", title: "SPIRITUAL PEAKS & WATERFALL WONDERS", desc: "<ul><li>Wake up to a refreshing morning and get ready for the day.</li><li>Enjoy a hearty breakfast and check out from the homestay.</li><li>Travel to Jhari Falls.</li><li>Visit Jhari Falls by adventure jeep ride and spend sometime.</li><li>Return by jeep ride.</li><li>Head to Datta Peeta / Bababudangiri Hills, known for their spiritual and natural charm.</li><li>Visit the sacred cave temple at Bababudangiri.</li><li>Travel back to Chikmagalur town.</li><li>Stop for a self-sponsored lunch at a local eatery.</li><li>Continue to Belur, a town steeped in history and culture.</li><li>Explore the magnificent UNESCO World Heritage Hoysala Temple, an architectural gem.</li><li>Begin your return journey to Bangalore.</li><li>Arrive back in Bangalore around 9:30–10:00 PM (subject to traffic conditions).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "belthangadi-trip",
        category: "trip",
        popular: true,
        title: "Explore Belthangadi Trip",
        location: "Belthangadi, Dakshina Kannada, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Moderate",
        duration: "2 Days",
        distance: "10 km",
        altitude: "500 m",
        originalPrice: 4500,
        price: 4300,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Belthanagdi/belthanagdi1.jpg",
        slides: [
            "images/Belthanagdi/belthanagdi1.jpg",
            "images/Belthanagdi/belthanagdi4.jpg",
            "images/Belthanagdi/belthangadi2.jpg",
            "images/Belthanagdi/belthangadi3.jpg",
            "images/Belthanagdi/belthangadi5.PNG",
            "images/Belthanagdi/belthangadi6.jpg"
        ],
        description: "Belthangadi, located in the Dakshina Kannada district of Karnataka, is a picturesque town surrounded by dense forests, hills, and rivers. Home to beautiful waterfalls like Didupe Falls and Ermaayi Falls, and the famous Gadaikallu monolithic peak trek.",
        highlights: [
            "Didupe Falls / Kadamagundi Falls",
            "Ermaayi Waterfalls Visit",
            "Gadaikallu Monolithic Peak Trek",
            "Scenic Charmadi Ghat Drive",
            "Dense Western Ghats Rainforest Canopy",
            "Lesser-Known Hidden Cascades"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 2900,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~330 km | 6-7 hours) through Charmadi Ghat." },
            { day: "Day 01", title: "Gadaikallu Monolith Trek & Ermaayi Waterfalls", desc: "<ul><li>Check in at Belthangadi homestay, enjoy local breakfast.</li><li>Embark on Gadaikallu rock trek for sweeping views of Charmadi valley.</li><li>Visit multi-tiered Ermaayi Waterfalls.</li><li>Campfire, music, local Malnad/Tuluva dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Didupe / Kadamagundi Waterfalls & Charmadi Drive", desc: "<ul><li>Trek to stunning Didupe / Kadamagundi Falls and take a refreshing dip.</li><li>Drive through breathtaking Charmadi Ghat viewpoints.</li><li>Return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "mangalore-trip",
        category: "trip",
        popular: true,
        title: "Explore Agumbe & Udupi Trip",
        location: "Agumbe & Udupi, Karnataka",
        difficulty: "easy",
        difficultyLabel: "Easy / Sightseeing",
        duration: "2 Days",
        distance: "N/A",
        altitude: "825 m",
        originalPrice: 4500,
        price: 4300,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Coastal/coastal-beach-cliff.png",
        slides: [
            "images/Coastal/coastal-beach-cliff.png",
            "images/Coastal/udupi14.jpg",
            "images/Coastal/udupi3.jpg",
            "images/Coastal/udupi4.jpg",
            "images/Coastal/udupi5.jpg"
        ],
        description: "Agumbe and Udupi offer a blend of natural beauty, adventure, and cultural significance. Agumbe, the 'Cherrapunji of the South,' is famous for lush forests, stunning sunsets, and Kudlutheertha falls, while Udupi features temple culture and scenic Malpe beach kayaking.",
        highlights: [
            "Kudlutheertha Falls Trek",
            "Udupi & Shri Krishna Temple Visit",
            "Kundadri Hills Sunset Viewpoint",
            "Malpe Beach & Water Sports",
            "Sirimane Waterfalls",
            "Kayaking & Boating Experience",
            "Shringeri Temple",
            "Varanga Jain Temple (Lake Temple)"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~350 km | 7-8 hours) to Agumbe." },
            { day: "Day 01", title: "Agumbe Rainforest, Kudlutheertha & Kundadri Sunset", desc: "<ul><li>Visit Shringeri Temple and Sirimane Waterfalls.</li><li>Trek to pristine Kudlutheertha Waterfalls inside rainforest.</li><li>Sunset atop Kundadri Hills. Campfire, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Varanga Lake Temple, Udupi & Malpe Beach Kayaking", desc: "<ul><li>Visit 1,000-year-old Varanga Jain Lake Temple by boat.</li><li>Visit Udupi Shri Krishna Temple and head to Malpe Beach for Kayaking and water sports.</li><li>Return journey to Bangalore (~10:30 PM).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "coorg-exploration",
        category: "trip",
        title: "Explore Coorg Trip",
        location: "Madikeri, Coorg, Karnataka",
        difficulty: "easy",
        difficultyLabel: "Easy / Sightseeing",
        duration: "2 Days",
        distance: "N/A",
        altitude: "1,150 m",
        originalPrice: 4500,
        price: 4200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Coorg/coorg-cover.jpg",
        slides: [
            "images/Coorg/coorg-cover.jpg",
            "images/Coorg/mandalpatti-peak-ridge.jpeg",
            "images/Coorg/abbey-falls-view.jpeg"
        ],
        description: "Coorg, also known as Kodagu, is a scenic hill station in the Western Ghats of Karnataka. Famous for vast coffee plantations, pleasant climate, Abbey Falls, Raja's Seat, and the 4x4 Jeep ride to Mandalpatti Peak.",
        highlights: [
            "Mandalpatti Peak Summit & 4x4 Jeep Ride",
            "Tibetan Monastery / Golden Temple (Bylakuppe)",
            "Dubare Elephant Camp",
            "Scenic Abbey Falls",
            "Kaveri Nisargadhama Island",
            "Raja's Seat Sunset Viewpoint",
            "Historic Omkareshwara Temple",
            "Vast Coffee Plantations & Coorgi Culture"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 2700,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~250 km) to Coorg." },
            { day: "Day 01", title: "Golden Temple, Dubare & Mandalpatti Peak", desc: "<ul><li>Visit Tibetan Monastery Golden Temple in Bylakuppe.</li><li>Dubare Elephant Camp along Kaveri River.</li><li>4x4 Jeep ride to Mandalpatti Peak. Campfire, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Abbey Falls, Nisargadhama & Raja's Seat", desc: "<ul><li>Visit Abbey Falls and Kaveri Nisargadhama bamboo island.</li><li>Panoramic valley views at Raja's Seat. Return to Bangalore (~10:00 PM).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "hampi-explore",
        category: "trip",
        title: "Explore Hampi Trip",
        location: "Hampi, Karnataka",
        difficulty: "easy",
        difficultyLabel: "Easy / Heritage",
        duration: "2 Days",
        distance: "N/A",
        altitude: "340 m",
        originalPrice: 5000,
        price: 4500,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Hampi/hampi1.jpeg",
        slides: [
            "images/Hampi/hampi1.jpeg",
            "images/Hampi/hampi2.jpeg",
            "images/Hampi/hampi3.jpg",
            "images/Hampi/hampi4.jpg"
        ],
        description: "Hampi is a UNESCO World Heritage Site renowned for ancient temples, historical ruins, and boulder-strewn landscapes. Explore Virupaksha Temple, the Stone Chariot at Vittala Temple, cliff jumping at Sanapur Lake, and coracle rides.",
        highlights: [
            "Vijaya Vittala Temple & Stone Chariot",
            "Historic Virupaksha Temple",
            "Hemakuta Hill Temple Complex Sunset",
            "Lakshmi Narasimha Temple Monolith",
            "Queen's Bath & Royal Enclosure Palace",
            "Anjanadri Hills Trek",
            "Thrilling Cliff Jumping",
            "Traditional Coracle River Ride"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 2600,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~340 km) to Hampi." },
            { day: "Day 01", title: "Anjanadri Hills, Cliff Jumping & Coracle Ride", desc: "<ul><li>Cross Tungabhadra River on traditional round coracle boats.</li><li>Hike Anjanadri Hills for 360-degree views.</li><li>Cliff jumping at Sanapur Lake under guide supervision.</li><li>Sunset at Hemakuta Hill Temple Complex. Dinner and stay.</li></ul>" },
            { day: "Day 02", title: "Royal Enclosure, Vijaya Vittala & Virupaksha Temples", desc: "<ul><li>Explore historic Virupaksha Temple and Lakshmi Narasimha monolith.</li><li>Visit Royal Enclosure and Vijaya Vittala Stone Chariot.</li><li>Return journey to Bangalore (~10:30 PM).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "gokarna",
        category: "trip",
        popular: true,
        title: "Gokarna Beach Trek & Camping",
        location: "Gokarna, Karnataka",
        difficulty: "easy",
        difficultyLabel: "Easy",
        duration: "2 Days",
        distance: "10 km",
        altitude: "120 m",
        originalPrice: 5200,
        price: 4800,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Gokarana/gokarana3.jpg",
        slides: [
            "images/Gokarana/gokarana3.jpg",
            "images/Gokarana/gokarana1.jpg",
            "images/Gokarana/gokarana4.jpg",
            "images/Gokarana/gokarana14.jpg",
            "images/Gokarana/gokarana15.jpg",
            "images/Gokarana/gokarana24.jpeg"
        ],
        description: "Hike along the beach cliffs connecting Gokarna's five famous beaches: Kudle, Om, Half Moon, Paradise, and Belekan. Camp in oceanfront dome tents with a beach bonfire.",
        highlights: [
            "5-Beach Ocean Cliff Trek",
            "Beachfront Tent Camping",
            "Beach Bonfire & Stargazing",
            "Mirjan Fort Exploration",
            "Mahabaleshwar Temple Visit"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 2500,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~480 km) to Gokarna coast." },
            { day: "Day 01", title: "Ocean Cliff Hike to Paradise Beach", desc: "<ul><li>Cross rocky cliffs connecting Kudle, Om, Half Moon, and Paradise Beach.</li><li>Swim at Half Moon beach and setup camps at Paradise Beach.</li><li>Bonfire night by the ocean.</li></ul>" },
            { day: "Day 02", title: "Temple Visit & Mirjan Fort exploration", desc: "<ul><li>Visit Mahabaleshwar temple and explore Mirjan Fort stone walls.</li><li>Return journey to Bangalore (~10:30 PM).</li></ul>" }
        ],
        inclusions: DEFAULT_INCLUSIONS,
        exclusions: DEFAULT_EXCLUSIONS
    },
    {
        id: "kodaikanal-trip",
        category: "trip",
        popular: true,
        title: "Kodaikanal Weekend Trip",
        location: "Kodaikanal, Dindigul, Tamil Nadu",
        difficulty: "easy",
        difficultyLabel: "Easy / Sightseeing",
        duration: "2 Days / 1 Night",
        distance: "Tour / Sightseeing",
        altitude: "2,133 m",
        originalPrice: 5800,
        price: 5500,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Kodaikanal/kodaikanal-cover.jpg",
        slides: [
            "images/Kodaikanal/kodaikanal-cover.jpg",
            "images/Kodaikanal/kodakainal1.jpeg",
            "images/Kodaikanal/kodakainal2.jpeg",
            "images/Kodaikanal/kodakianal3.jpeg"
        ],
        description: "Escape to the 'Princess of Hill Stations' on an unforgettable 2D/1N weekend getaway from Bangalore. Nestled amidst rolling green hills, dense pine forests, and misty valleys of Tamil Nadu, Kodaikanal offers magnificent viewpoints like Dolphin's Nose and Coaker's Walk, cascading waterfalls, Guna Caves, serene Kodai Lake boating, and warm campfire evenings.",
        highlights: [
            "Pine Forest Walk",
            "Guna Caves (Devil's Kitchen)",
            "Silver Cascade & Vattakanal Waterfalls",
            "Kodaikanal Lake Boating & Leisure",
            "Dolphin’s Nose & Upper Lake Viewpoint",
            "Coaker’s Walk Valley Vistas",
            "Pillar Rocks Monoliths",
            "Campfire Stay & Chill Vibes"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Friday Night Departure from Bangalore", desc: "Departure from Bangalore (Overnight Journey) with pickup points across the city. Overnight travel to Kodaikanal." },
            { day: "Day 01", title: "Kodaikanal Sightseeing, Waterfalls & Campfire", desc: "<ul><li>Reach Kodaikanal in the morning, check in, freshen up, and enjoy a wholesome breakfast.</li><li>Visit the tumbling <strong>Silver Cascade Falls</strong>.</li><li>Explore the majestic <strong>Pillar Rocks</strong> monoliths and historic <strong>Guna Caves</strong>.</li><li>Stroll through the misty, serene <strong>Pine Forest</strong>.</li><li>Head to <strong>Kodaikanal Lake</strong> for optional boating & leisure time at the lake.</li><li>Return to stay for evening tea/snacks and a cozy <strong>campfire & chill vibes</strong>.</li><li>Relish a delicious dinner and restful overnight stay.</li></ul>" },
            { day: "Day 02", title: "Misty Viewpoints, Vattakanal & Return Journey", desc: "<ul><li>Early morning freshen up & enjoy breakfast.</li><li>Take a morning walk along <strong>Coaker’s Walk</strong> with panoramic valley views.</li><li>Visit lush <strong>Vattakanal Falls</strong>.</li><li>Trek/walk to the famous <strong>Dolphin’s Nose Viewpoint</strong> and <strong>Upper Lake View</strong> for sweeping views of misty hills.</li><li>Enjoy scenic valley views and stop for self-sponsored lunch.</li><li>Start return journey to Bangalore.</li><li>Reach Bangalore by late night / early morning with wonderful memories.</li></ul>" }
        ],
        inclusions: [
            "Stay / Accommodation in Kodaikanal",
            "Transportation from Bangalore and back (Non-AC Tempo Traveler / Bus)",
            "Sightseeing as per itinerary",
            "2 Breakfasts + 1 Dinner",
            "Campfire Stay & Evening Chill Vibes",
            "Certified Trip Lead & Coordinator Support",
            "Tolls, Parking & Driver Allowances"
        ],
        exclusions: [
            "Self-sponsored lunches",
            "Optional boating & personal entry ticket fees",
            "Anything not mentioned under inclusions"
        ]
    },
    {
        id: "ooty-trip",
        category: "trip",
        popular: true,
        title: "Ooty & Coonoor Getaway",
        location: "Ooty & Coonoor, Nilgiris, Tamil Nadu",
        difficulty: "easy",
        difficultyLabel: "Easy / Sightseeing",
        duration: "2 Days / 1 Night",
        distance: "Tour / Sightseeing",
        altitude: "2,240 m",
        originalPrice: 5500,
        price: 5200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Ooty/ooty-hills-vista.jpg",
        slides: [
            "images/Ooty/ooty-hills-vista.jpg",
            "images/Ooty/ooty1.jpg",
            "images/Ooty/ooty2.jpg",
            "images/Ooty/ooty3.jpg",
            "images/Ooty/ooty5.jpg"
        ],
        description: "Escape to the 'Queen of Hill Stations' on an enchanting 2D/1N weekend getaway from Bangalore. Experience sunrise at Kodanad Viewpoint, stroll through lush Coonoor tea estates, visit tea & homemade chocolate factories, admire views from Doddabetta Peak & Needle Rock, explore Pykara Lake & Pine Forest, and enjoy a scenic Bandipur forest drive with a chance of wildlife spotting.",
        highlights: [
            "Sunrise at Kodanaadu View Point",
            "Coonoor Tea Estate Walk",
            "Tea Factory Experience & Homemade Chocolate Factory Visit",
            "Doddabetta Peak & Ooty Town Market Visit",
            "Pine Forest & Shooting Point",
            "Pykara Lake",
            "Needle Rock View Point (subject to time)",
            "Scenic Drive through Bandipur Forest (Wildlife Spotting)",
            "Bonfire, Dinner & Stay"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 4199,
        advanceAmount: 2000,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Friday Night Departure from Bangalore", desc: "Departure from Bangalore (Night Journey) with pickup points across the city. Overnight travel towards Ooty & Nilgiris." },
            { day: "Day 01", title: "Sunrise, Coonoor Tea Estates, Factories & Doddabetta Peak", desc: "<ul><li>Witness a breathtaking <strong>Sunrise at Kodanaadu View Point</strong>.</li><li>Check-in to Stay, freshen up, and enjoy breakfast at the stay.</li><li>Stroll through serene <strong>Coonoor Tea Estates</strong>.</li><li>Self-sponsored lunch en route.</li><li>Guided <strong>Tea Factory Experience</strong> & <strong>Homemade Chocolate Factory Visit</strong>.</li><li>Explore <strong>Doddabetta Peak</strong> — the highest summit in the Nilgiri Mountains.</li><li>Explore <strong>Ooty Town & Local Market Visit</strong>.</li><li>Return to stay, enjoy evening Tea/Coffee.</li><li>Relax with a cozy <strong>Bonfire, Dinner & Overnight Stay</strong>.</li></ul>" },
            { day: "Day 02", title: "Pine Forest, Lakes, Bandipur Safari Drive & Return Journey", desc: "<ul><li>Wake up, freshen up, and enjoy breakfast at the stay.</li><li>Visit the iconic <strong>Pine Forest</strong> and famous <strong>Shooting Point</strong>.</li><li>Explore <strong>Pykara Lake</strong> & surrounding scenic beauty.</li><li>Visit <strong>Needle Rock View Point</strong> (if time permits).</li><li>Self-sponsored lunch en route.</li><li>Enjoy a scenic drive through <strong>Bandipur National Park Forest</strong> with a chance of wildlife spotting.</li><li>Begin return journey to Bangalore, reaching by late night with wonderful memories.</li></ul>" }
        ],
        inclusions: [
            "Transportation (Non-AC Tempo Traveler / Bus from Bangalore & back)",
            "Accommodation Stay (Sharing Basis)",
            "2 Breakfasts",
            "1 Dinner",
            "Tea / Coffee",
            "Bonfire Night (Subject to weather)",
            "Certified Trip Coordinator Support",
            "Tolls, Parking & Driver Allowances"
        ],
        exclusions: [
            "Lunch",
            "Personal Expenses",
            "Anything not mentioned above"
        ]
    },
    {
        id: "wayanad-adventure",
        category: "trip",
        popular: true,
        title: "Explore Wayanad Trip",
        location: "Wayanad, Kerala",
        difficulty: "easy",
        difficultyLabel: "Easy / Sightseeing",
        duration: "2 Days / 1 Night",
        distance: "Tour / Sightseeing",
        altitude: "700 m",
        originalPrice: 5200,
        price: 4900,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Wayanad/wayanadu2.jpeg",
        slides: [
            "images/Wayanad/wayanad-tea-estate.jpg",
            "images/Wayanad/wayanad-chembra-peak.jpg",
            "images/Wayanad/wayanad-misty-hills.jpg",
            "images/Wayanad/wayanadu1.jpeg",
            "images/Wayanad/wayanadu2.jpeg",
            "images/Wayanad/wayanadu4.jpeg",
            "images/Wayanad/wayanadu6.jpeg",
            "images/Wayanad/wayandu3.jpeg"
        ],
        description: "Experience the pristine beauty of Wayanad on an unforgettable weekend trip from Bangalore. Nestled amidst rolling tea plantations, misty hills, and lush green valleys of Kerala, Wayanad offers scenic vistas, waterfalls, lakes, and rich nature.",
        highlights: [
            "Lush Tea Estate Walk",
            "Chembra Peak Viewpoint",
            "Banasura Sagar Dam",
            "Soochipara Waterfalls",
            "Edakkal Caves Exploration",
            "Campfire, Dinner & Stay"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3900,
        advanceAmount: 2000,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Friday Night Departure from Bangalore", desc: "Overnight journey from Bangalore (~280 km) to Wayanad." },
            { day: "Day 01", title: "Wayanad Tea Estates, Waterfalls & Campfire", desc: "<ul><li>Arrive in Wayanad, check-in, freshen up, and enjoy breakfast at the stay.</li><li>Stroll through serene <strong>Wayanad Tea Estates</strong> & mist-covered hills.</li><li>Visit cascading <strong>Soochipara Waterfalls</strong> inside the lush forest.</li><li>Return to stay, enjoy evening Tea/Coffee.</li><li>Relax around a cozy <strong>Campfire, Dinner & Overnight Stay</strong>.</li></ul>" },
            { day: "Day 02", title: "Banasura Sagar Dam, Viewpoints & Return Journey", desc: "<ul><li>Wake up, freshen up, and enjoy breakfast.</li><li>Visit <strong>Banasura Sagar Dam</strong> — the largest earthen dam in India.</li><li>Explore <strong>Chembra Peak Viewpoint</strong> & surrounding valleys.</li><li>Self-sponsored lunch en route.</li><li>Begin return journey back to Bangalore, arriving by late night.</li></ul>" }
        ],
        inclusions: [
            "Transportation (Non-AC Tempo Traveler / Bus from Bangalore & back)",
            "Accommodation Stay (Sharing Basis)",
            "2 Breakfasts",
            "1 Dinner",
            "Tea / Coffee",
            "Bonfire Night (Subject to weather)",
            "Certified Trip Coordinator Support",
            "Tolls, Parking & Driver Allowances"
        ],
        exclusions: [
            "Lunch",
            "Personal Expenses",
            "Anything not mentioned above"
        ]
    }
];
