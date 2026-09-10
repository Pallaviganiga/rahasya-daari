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
        image: "images/Chikmagalur/chikmagalur-cover.jpg",
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
        popular: true,
        title: "Bandaje Falls 1-Day Trek",
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
        popular: true,
        title: "Netravathi 1-Day Trek",
        location: "Kalasa, Chikmagalur, Karnataka",
        difficulty: "moderate",
        difficultyLabel: "Easy to Moderate",
        duration: "1 Day",
        distance: "12 km (6+6 km)",
        altitude: "1,520 m",
        price: 2699,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Netravathi/netravathi-cover.jpg",
        slides: [
            "images/Netravathi/netravathi-cover.jpg",
            "images/Netravathi/netravathi-peak-view.jpeg",
            "images/Netravathi/netravathi-clouds-valley.jpeg",
            "images/Netravathi/netravathi-shola-ridge.jpeg",
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
        popular: true,
        title: "Kudremukha 1-Day Trek",
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
        title: "Etthina Bhuja 1-Day Trek",
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
        title: "Kurinjal 1-Day Trek",
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
        title: "Kodachadri 1-Day Trek",
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
            "Bandaje Falls Trek (6-7 km one way)",
            "Ballalarayana Durga Fort Ruins",
            "Rani Jhari Viewpoint",
            "Kodige Falls / Soormane Falls",
            "Kelaguru Tea Estate Walk",
            "Belur Hoysala UNESCO World Heritage Temple",
            "Shola Grasslands & Western Ghats Vistas"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~250 km) towards the Charmadi Ghats / Chikmagalur region." },
            { day: "Day 01", title: "Bandaje Falls Trek, Ballalarayana Durga Fort & Rani Jhari", desc: "<ul><li>Arrive at the homestay and freshen up after your journey.</li><li>Enjoy a hearty local breakfast.</li><li>Jeep ride to trail base and begin the 6-7 km trek through Shola grasslands and dense forest.</li><li>Reach Ballalarayana Durga Fort ruins overlooking the rolling Western Ghats.</li><li>Climb down to the edge of Bandaje Falls where water drops 200 feet into the valley.</li><li>Trek back down and visit nearby Rani Jhari Viewpoint for sweeping valley views.</li><li>Return to homestay, evening tea, campfire, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Kodige Waterfalls, Tea Estate & Belur UNESCO Temple", desc: "<ul><li>Wake up, freshen up, and enjoy breakfast.</li><li>Check out from the homestay.</li><li>Off-road jeep ride to explore the serene Kodige Waterfall.</li><li>Visit Kelaguru Tea Estate to walk through tea gardens and learn about tea culture.</li><li>En route to Bangalore, visit the magnificent UNESCO World Heritage Belur Hoysala Temple.</li><li>Self-sponsored lunch en route.</li><li>Begin return journey to Bangalore, arriving by ~10:00 PM.</li></ul>" }
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
        price: 4200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Netravathi/netravathi-cover.jpg",
        slides: [
            "images/Netravathi/netravathi-cover.jpg",
            "images/Netravathi/netravathi-peak-view.jpeg",
            "images/Netravathi/netravathi-clouds-valley.jpeg",
            "images/Netravathi/netravathi-shola-ridge.jpeg",
            "images/Netravathi/netravathi-lush-hills.jpg",
            "images/Netravathi/netravathi-mist-meadows.jpg",
            "images/Netravathi/netravathi-mountain-range.jpg",
            "images/Netravathi/netravathi-panorama-hd.jpg"
        ],
        description: "The Netravathi Trek, located near Kalasa in the Chikmagalur district of Karnataka, is approximately 300 km from Bangalore. The trek is renowned for its picturesque landscapes, dense forests, and the Netravathi River, which originates in the Western Ghats. The trail offers a moderately challenging hike, taking around 6 to 8 hours to complete, depending on the pace and route. The trek is a great blend of adventure, natural beauty, and the chance to experience the rich flora and fauna of the Western Ghats.",
        highlights: [
            "Netravathi Peak Trek (6+6 km)",
            "Kodige Falls / Soormane Falls",
            "Historic Kalaseshwara Temple",
            "Lush Samse Tea Estate Walk",
            "Belur Hoysala UNESCO World Heritage Temple",
            "Netravathi River Origin & Shola Meadows",
            "Scenic Off-road Jeep Ride"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~300 km) to Kalasa, Chikmagalur in the Western Ghats." },
            { day: "Day 01", title: "Netravathi Peak Trek (6+6 km) & Soormane Waterfalls", desc: "<ul><li>Arrive at the homestay in Samse/Kalasa, freshen up, and enjoy breakfast.</li><li>Off-road jeep ride to the base of Netravathi Peak trail.</li><li>Begin the 6+6 km trek (approx 6-8 hours) through Shola forests, streams, and rolling grasslands.</li><li>Reach the Netravathi Peak summit for 360° views of Western Ghats.</li><li>Descend back to base and visit the refreshing Soormane Waterfall.</li><li>Return to homestay, evening tea/coffee, campfire, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Kalaseshwara Temple, Samse Tea Estate & Belur UNESCO Temple", desc: "<ul><li>Wake up early, freshen up, and enjoy breakfast.</li><li>Check out from the homestay.</li><li>Pay respects at the ancient Kalaseshwara Temple in Kalasa.</li><li>Take a pleasant walk through the lush Samse Tea Estate gardens.</li><li>En route to Bangalore, visit the magnificent UNESCO World Heritage Belur Hoysala Temple.</li><li>Self-sponsored lunch en route.</li><li>Begin return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
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
            "Kudremukha Peak Trek (9+9 km)",
            "Vast Shola Grasslands & Valleys",
            "Kodige Falls / Soormane Falls",
            "Lush Samse Tea Estate Walk",
            "Belur Hoysala UNESCO World Heritage Temple",
            "Horse-Faced Ridge Summit (1,894 m)",
            "Off-road 4x4 Jeep Ride & Kudremukh National Park"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 3200,
        advanceAmount: 1600,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~300 km) to Kalasa / Samse village in Chikmagalur." },
            { day: "Day 01", title: "Kudremukha Peak Trek (9+9 km) & Mullodi / Soormane Waterfall", desc: "<ul><li>Arrive at the cozy homestay in Samse/Kalasa, freshen up, and enjoy a local breakfast.</li><li>Hop into a rugged 4x4 Jeep for a scenic ride to the Mullodi trek base.</li><li>Begin the 9+9 km trek (approx 6-8 hours) through Kudremukh National Park, lush Shola forests, and streams.</li><li>Reach Onti Mara and ascend to the horse-faced Kudremukha Peak (1,894 m).</li><li>Soak in 360-degree views of the Western Ghats and enjoy packed lunch.</li><li>Descend back to Mullodi base and visit Mullodi / Soormane Waterfall.</li><li>Return to homestay, evening tea/coffee, campfire, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Samse Tea Estate & Belur UNESCO World Heritage Temple", desc: "<ul><li>Wake up, freshen up, and relish a wholesome breakfast.</li><li>Check out from the homestay.</li><li>Take a peaceful stroll through the picturesque Samse Tea Estate gardens.</li><li>En route to Bangalore, visit the magnificent UNESCO World Heritage Site — Belur Hoysala Temple.</li><li>Self-sponsored lunch en route.</li><li>Begin return journey back to Bangalore, reaching by ~10:00 PM.</li></ul>" }
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
            "Kodige Falls / Soormane Falls",
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
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore." },
            { day: "Day 01", title: "Into the Heart of the Western Ghats", desc: "<ul><li>Arrive at the cozy homestay nestled in the serene village of Samse. Freshen up and enjoy breakfast.</li><li>Drive through Kudremukha National Park to the trek base.</li><li>Begin your 7 km trek to Kurinjal Peak, winding through lush green forests and vibrant flora.</li><li>Arrive at Kurinjal Peak for panoramic views of rolling hills and deep valleys.</li><li>Enjoy packed lunch amidst nature and descend back to base.</li><li>Return to homestay, evening tea/coffee, campfire, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Tea Trails, Waterfalls & Heritage Wonders", desc: "<ul><li>Rise early, freshen up, and enjoy breakfast.</li><li>Check out from the homestay and stroll through Samse tea estate.</li><li>Visit beautiful Kodige Falls and relax by the water.</li><li>Proceed to the historical town of Belur to explore the UNESCO World Heritage Hoysala Temple.</li><li>Return journey to Bangalore, reaching by ~10:00 PM.</li></ul>" }
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
        price: 3800,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Chikmagalur/chikmagalur-cover.jpg",
        slides: [
            "images/Chikmagalur/chikmagalur-cover.jpg",
            "images/Chikmagalur/mullayanagiri-peak-vista.jpg",
            "images/Chikmagalur/hebbe-falls-cascade.jpeg",
            "images/Chikmagalur/chikmagalur-tea-plantation.jpeg"
        ],
        description: "Chikmagalur, located about 250 km northwest of Bangalore in Karnataka, is a serene hill station known for its lush coffee plantations, scenic landscapes, and pleasant climate. Nestled in the Western Ghats, it offers attractions like Mullayanagiri (the highest peak in Karnataka), Baba Budangiri, and Hebbe Falls.",
        highlights: [
            "Mullayyanagiri Peak (Highest peak of Karnataka)",
            "Hebbe Falls & Hebbe Falls Jeep Ride",
            "Z Point Trek & Kemmannugundi",
            "Dattha Peeta / Baba Budan Giri",
            "Jhari Falls & Kallatthigiri Falls",
            "Deviramma Betta & Manikyadhara",
            "Belur Hoysala UNESCO World Heritage Site",
            "Lush Coffee Plantation Walk"
        ],
        pickupLocationList: DEFAULT_BANGALORE_PICKUPS,
        ownTransportPrice: 2800,
        advanceAmount: 1500,
        cancellationPolicy: "Advance amount is non refundable, if trip gets cancelled from our side then complete amount will be refunded.",
        itinerary: [
            { day: "Day 00", title: "Overnight Journey", desc: "Overnight journey from Bangalore (~250 km) towards the lush hills of Chikmagalur." },
            { day: "Day 01", title: "Mullayanagiri, Baba Budangiri & Waterfalls", desc: "<ul><li>Arrive at homestay/hotel, freshen up, and enjoy breakfast.</li><li>Visit Mullayyanagiri Peak for panoramic valley views.</li><li>Proceed to Dattha Peeta / Baba Budan Giri and Manikyadhara Falls.</li><li>Explore Jhari Falls and stroll through serene coffee estates.</li><li>Campfire, music, dinner, and overnight stay.</li></ul>" },
            { day: "Day 02", title: "Kemmannugundi, Hebbe Falls & Belur Heritage", desc: "<ul><li>Wake up early, breakfast, and check out.</li><li>Go on the scenic Z Point Trek at Kemmannugundi.</li><li>4x4 Jeep ride to Hebbe Falls & visit Kallatthigiri Falls.</li><li>Visit Belur Hoysala UNESCO Temple and return to Bangalore (~10:00 PM).</li></ul>" }
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
        price: 3900,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Belthangadi/belthangadi-cover.jpg",
        slides: [
            "images/Belthangadi/belthangadi-cover.jpg",
            "images/Belthangadi/didupe-falls-pool.jpeg",
            "images/Belthangadi/ermaayi-falls-tiered.jpeg"
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
        title: "Agumbe, Udupi & Coastal Trip",
        location: "Agumbe & Udupi, Karnataka",
        difficulty: "easy",
        difficultyLabel: "Easy / Sightseeing",
        duration: "2 Days",
        distance: "N/A",
        altitude: "825 m",
        price: 4200,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Agumbe & Udupi/agumbe-udupi-cover.jpg",
        slides: [
            "images/Agumbe & Udupi/agumbe-udupi-cover.jpg",
            "images/Agumbe & Udupi/malpe-beach-sunset.jpeg",
            "images/Agumbe & Udupi/kundadri-hilltop-jain-temple.jpeg"
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
        price: 3700,
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
        price: 3600,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Hampi/hampi-cover.jpg",
        slides: [
            "images/Hampi/hampi-cover.jpg",
            "images/Hampi/vittala-stone-chariot.jpeg",
            "images/Hampi/virupaksha-temple-gopuram.jpeg"
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
        price: 3499,
        pickup: "Shantala Silk (Majestic), Navarang (Opp. Sagar Hotel), Yashwanthpur Govardhana Theater, KLE Dental College Goraguntepalya",
        image: "images/Gokarna/gokarna-cover.jpg",
        slides: [
            "images/Gokarna/gokarna-cover.jpg",
            "images/Gokarna/om-beach-coastline.jpeg",
            "images/Gokarna/paradise-beach-camp.jpeg"
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
    }
];
