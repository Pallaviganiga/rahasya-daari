/**
 * Rahasya Daari - Centralized Image Constants Configuration
 * =========================================================
 * Use this file to easily manage and change images across the entire website.
 * Whenever you add or change a photo, simply update the path here!
 */

const IMAGES = {
    // -------------------------------------------------------------
    // 1. BRANDING & ICONS
    // -------------------------------------------------------------
    branding: {
        logoPng: "images/Branding/logo.png",
        logoWebp: "images/Branding/logo.png",
        watermark: "images/Branding/watermark.webp"
    },

    // -------------------------------------------------------------
    // 2. FALLBACK IMAGES (Used if any image fails to load)
    // -------------------------------------------------------------
    fallback: {
        cardDefault: "images/Hero/hero-bg-landscape.jpg",
        modalDefault: "images/Hero/hero-bg-landscape.jpg"
    },

    // -------------------------------------------------------------
    // 3. HOMEPAGE HERO BACKGROUND SLIDESHOW (16:9 Landscape)
    // -------------------------------------------------------------
    heroSlides: [
        "images/Netravathi/netravathi-panorama-hd.jpg",
        "images/Netravathi/netravathi-cover.jpg",
        "images/Hampi/hampi1.jpeg",
        "images/Belthanagdi/belthanagdi1.jpg",
        "images/Chikamangalore/chikamnglr1.jpg",
        "images/Chikamangalore/chikamnglr2.jpg",
        "images/Kodachadri/kodachadri-cover.jpg",
        "images/Etthina Bhuja/ethina2-landscape.jpg",
        "images/Bandaje/bandaje-valley-trek.jpeg",
        "images/Dudhsagar Falls & Dandeli/dandeli-rafting-rapids.jpeg"
    ],

    // -------------------------------------------------------------
    // 3b. SUBPAGE HERO BACKGROUND SLIDESHOW (Explore, Tours, About Us, etc.)
    // -------------------------------------------------------------
    subpageHeroSlides: [
        "images/Branding/hero2.jpeg",
        "images/Branding/hero1.jpeg",
        "images/Branding/hero3.jpeg",
        "images/Branding/hero4.jpeg",
        "images/Branding/home5.jpeg"
    ],

    // -------------------------------------------------------------
    // 4. TREKS (Weekend & Weekday Treks)
    // -------------------------------------------------------------
    treks: {
        "bandaje-falls": {
            cover: "images/Bandaje/bandaje-waterfall-view.jpeg",
            slides: [
                "images/Bandaje/bandaje-cliff-edge.png",
                "images/Bandaje/bandaje-waterfall-view.jpeg",
                "images/Bandaje/bandaje.png",
                "images/Bandaje/bandaje1.png",
                "images/Bandaje/bandaje-valley-trek.jpeg"
            ]
        },
        "netravathi": {
            cover: "images/Netravathi/netravathi-cover.jpg",
            slides: [
                "images/Netravathi/netravathi-cover.jpg",
                "images/Netravathi/netravathi-peak-view.jpeg",
                "images/Netravathi/netravathi-ridge-1.jpg",
                "images/Netravathi/netravathi-trail-green.jpg",
                "images/Netravathi/netravathi-panorama-hd.jpg",
                "images/Netravathi/netravathi-clouds-peak.jpg",
                "images/Netravathi/netravathi-mist-meadows.jpg",
                "images/Netravathi/netravathi-lush-hills.jpg",
                "images/Netravathi/netravathi-valley-shola.jpeg",
                "images/Netravathi/netravathi-mountain-range.jpg",
                "images/Netravathi/netravathi-green-slope.jpeg",
                "images/Netravathi/netravathi-forest-edge.jpeg",
                "images/Netravathi/netravathi-trek-badge.jpeg",
                "images/Netravathi/netravathi-grassland-path.jpeg"
            ]
        },
        "kudremukh": {
            cover: "images/Kudremukha/kudremukha-cover.jpg",
            slides: [
                "images/Kudremukha/kudremukha-cover.jpg",
                "images/Kudremukha/kudremukha-grasslands-1.jpeg",
                "images/Kudremukha/kudremukha-valley.jpeg",
                "images/Kudremukha/kudremukh1-onti-mara.jpeg",
                "images/Kudremukha/kudremukh1-flora.jpeg"
            ]
        },
        "etthina-bhuja": {
            cover: "images/Etthina Bhuja/ethina1-landscape.jpg",
            slides: [
                "images/Etthina Bhuja/ethina1-landscape.jpg",
                "images/Etthina Bhuja/ethina2-landscape.jpg"
            ]
        },
        "kurinjal": {
            cover: "images/Kurinjal/kuri4.jpeg",
            slides: [
                "images/Kurinjal/kuri4.jpeg",
                "images/Kurinjal/kuri2.jpeg",
                "images/Kurinjal/kuri1.jpeg",
                "images/Kurinjal/kuri3.jpeg"
            ]
        },
        "gangadikallu": {
            cover: "images/Kudremukha/kudremukha-cover.jpg",
            slides: [
                "images/Kudremukha/kudremukha-cover.jpg",
                "images/Kudremukha/kudremukha-rolling-hills.jpeg",
                "images/Kudremukha/kudremukha-valley.jpeg"
            ]
        },
        "kodachadri": {
            cover: "images/Kodachadri/kodachadri-cover.jpg",
            slides: [
                "images/Kodachadri/kodachadri-cover.jpg",
                "images/Kodachadri/kodachadri-sunset-ridge.jpg",
                "images/Kodachadri/kodachadri-jeep-trail.jpg"
            ]
        },
        "tadiandamol": {
            cover: "images/Coorg/coorg-estate-hills.jpeg",
            slides: [
                "images/Coorg/coorg-estate-hills.jpeg"
            ]
        },
        "dudhsagar": {
            cover: "images/Dudhsagar Falls & Dandeli/dudhsagar-falls-view.png",
            slides: [
                "images/Dudhsagar Falls & Dandeli/dudhsagar-falls-view.png",
                "images/Dudhsagar Falls & Dandeli/dudhsagar-waterfall.png",
                "images/Dudhsagar Falls & Dandeli/dandeli-white-water.jpeg",
                "images/Dudhsagar Falls & Dandeli/dandeli-rafting-rapids.jpeg"
            ]
        },
        "narasimha-parvatha": {
            cover: "images/Netravathi/netravathi-cover.jpg",
            slides: [
                "images/Netravathi/netravathi-cover.jpg",
                "images/Netravathi/netravathi-clouds-peak.jpg",
                "images/Netravathi/netravathi-mist-meadows.jpg"
            ]
        }
    },

    // -------------------------------------------------------------
    // 5. SIGHTSEEING & ADVENTURE TOURS
    // -------------------------------------------------------------
    trips: {
        "chikmagalur": {
            cover: "images/Chikamangalore/chikamnglr1.jpg",
            slides: [
                "images/Chikamangalore/chikamnglr1.jpg",
                "images/Chikamangalore/chikamnglr2.jpg"
            ]
        },
        "belthangadi-trip": {
            cover: "images/Belthanagdi/belthanagdi1.jpg",
            slides: [
                "images/Belthanagdi/belthanagdi1.jpg",
                "images/Belthanagdi/belthanagdi4.jpg",
                "images/Belthanagdi/belthangadi2.jpg",
                "images/Belthanagdi/belthangadi3.jpg",
                "images/Belthanagdi/belthangadi5.PNG",
                "images/Belthanagdi/belthangadi6.jpg"
            ]
        },
        "mangalore-trip": {
            cover: "images/Coastal/coastal-beach-cliff.png",
            slides: [
                "images/Coastal/coastal-beach-cliff.png",
                "images/Coastal/udupi14.jpg",
                "images/Coastal/udupi3.jpg",
                "images/Coastal/udupi4.jpg",
                "images/Coastal/udupi5.jpg"
            ]
        },
        "coorg-exploration": {
            cover: "images/Coorg/coorg-estate-hills.jpeg",
            slides: [
                "images/Coorg/coorg-estate-hills.jpeg"
            ]
        },
        "wayanad-adventure": {
            cover: "images/Wayanad/wayanadu2.jpeg",
            slides: [
                "images/Wayanad/wayanad-tea-estate.jpg",
                "images/Wayanad/wayanad-chembra-peak.jpg",
                "images/Wayanad/wayanad-misty-hills.jpg",
                "images/Wayanad/wayanadu1.jpeg",
                "images/Wayanad/wayanadu2.jpeg",
                "images/Wayanad/wayanadu4.jpeg",
                "images/Wayanad/wayanadu6.jpeg",
                "images/Wayanad/wayandu3.jpeg"
            ]
        },
        "ooty-trip": {
            cover: "images/Ooty/ooty-hills-vista.jpg",
            slides: [
                "images/Ooty/ooty-hills-vista.jpg",
                "images/Ooty/ooty1.jpg",
                "images/Ooty/ooty2.jpg",
                "images/Ooty/ooty3.jpg",
                "images/Ooty/ooty5.jpg"
            ]
        },
        "ooty-sightseeing": {
            cover: "images/Ooty/ooty-hills-vista.jpg",
            slides: [
                "images/Ooty/ooty-hills-vista.jpg",
                "images/Ooty/ooty1.jpg",
                "images/Ooty/ooty2.jpg",
                "images/Ooty/ooty3.jpg",
                "images/Ooty/ooty5.jpg"
            ]
        },
        "kodaikanal-trip": {
            cover: "images/Kodaikanal/kodaikanal-cover.jpg",
            slides: [
                "images/Kodaikanal/kodaikanal-cover.jpg",
                "images/Kodaikanal/kodakainal1.jpeg",
                "images/Kodaikanal/kodakainal2.jpeg",
                "images/Kodaikanal/kodakianal3.jpeg"
            ]
        },
        "kodaikanal-escape": {
            cover: "images/Kodaikanal/kodaikanal-cover.jpg",
            slides: [
                "images/Kodaikanal/kodaikanal-cover.jpg",
                "images/Kodaikanal/kodakainal1.jpeg",
                "images/Kodaikanal/kodakainal2.jpeg",
                "images/Kodaikanal/kodakianal3.jpeg"
            ]
        },
        "munnar-trip": {
            cover: "images/Netravathi/netravathi-grassland-path.jpeg",
            slides: [
                "images/Netravathi/netravathi-grassland-path.jpeg",
                "images/Hero/hero-bg-landscape.jpg"
            ]
        },
        "hampi-explore": {
            cover: "images/Hampi/hampi1.jpeg",
            slides: [
                "images/Hampi/hampi1.jpeg",
                "images/Hampi/hampi2.jpeg",
                "images/Hampi/hampi3.jpg",
                "images/Hampi/hampi4.jpg"
            ]
        },
        "gokarna": {
            cover: "images/Gokarana/gokarana3.jpg",
            slides: [
                "images/Gokarana/gokarana3.jpg",
                "images/Gokarana/gokarana1.jpg",
                "images/Gokarana/gokarana4.jpg",
                "images/Gokarana/gokarana14.jpg",
                "images/Gokarana/gokarana15.jpg",
                "images/Gokarana/gokarana24.jpeg"
            ]
        }
    }
};

// Expose globally
if (typeof window !== "undefined") {
    window.IMAGES = IMAGES;
}
