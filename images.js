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
        logoWebp: "images/Branding/logo.webp",
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
        "images/Hero/hero-bg-landscape.jpg",
        "images/Kudremukha/kudremukha-cover.jpg",
        "images/Netravathi/netravathi-cover.jpg",
        "images/Bandaje/bandaje-cliff-edge.png",
        "images/Kodachadri/kodachadri-cover.jpg",
        "images/Ooty/ooty-hills-vista.jpg",
        "images/Wayanad/wayanad-tea-estate.jpg",
        "images/Kurinjal/kurinjal-peak-summit.jpeg"
    ],

    // -------------------------------------------------------------
    // 4. TREKS (Weekend & Weekday Treks)
    // -------------------------------------------------------------
    treks: {
        "bandaje-falls": {
            cover: "images/Bandaje/bandaje-waterfall-view.jpeg",
            slides: [
                "images/Bandaje/bandaje-waterfall-view.jpeg",
                "images/Bandaje/bandaje-cliff-edge.png",
                "images/Bandaje/bandaje-valley-trek.jpeg",
                "images/Bandaje/bandaje-stream-crossing.jpg",
                "images/Bandaje/bandaje-mist-summit.jpg",
                "images/Bandaje/bandaje-peak-vistas.jpg"
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
                "images/Kudremukha/kudremukha-peak.jpg",
                "images/Kudremukha/kudremukha-ridge.png",
                "images/Kudremukha/kudremukha-trail-1.jpg",
                "images/Kudremukha/kudremukha-grasslands-1.jpeg",
                "images/Kudremukha/kudremukha-valley.jpeg",
                "images/Kudremukha/kudremukha-rolling-hills.jpeg"
            ]
        },
        "etthina-bhuja": {
            cover: "images/Hero/hero-bg-landscape.jpg",
            slides: [
                "images/Hero/hero-bg-landscape.jpg",
                "images/Kudremukha/kudremukha-ridge.png"
            ]
        },
        "kurinjal": {
            cover: "images/Kurinjal/kurinjal-peak-summit.jpeg",
            slides: [
                "images/Kurinjal/kurinjal-peak-summit.jpeg",
                "images/Kurinjal/kurinjal-forest-trail.jpeg",
                "images/Kurinjal/kurinjal-rocky-ridge.jpeg",
                "images/Kurinjal/kurinjal-valley-view.jpeg"
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
                "images/Dudhsagar Falls & Dandeli/dandeli-rafting-rapids.jpeg",
                "images/Dudhsagar Falls & Dandeli/dandeli-white-water.jpeg"
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
            cover: "images/Bandaje/bandaje-peak-vistas.jpg",
            slides: [
                "images/Bandaje/bandaje-peak-vistas.jpg",
                "images/Bandaje/bandaje-waterfall-view.jpeg",
                "images/Bandaje/bandaje-valley-trek.jpeg"
            ]
        },
        "belthangadi-trip": {
            cover: "images/Bandaje/bandaje-waterfall-view.jpeg",
            slides: [
                "images/Bandaje/bandaje-waterfall-view.jpeg",
                "images/Bandaje/bandaje-stream-crossing.jpg",
                "images/Bandaje/bandaje-mist-summit.jpg"
            ]
        },
        "mangalore-trip": {
            cover: "images/Coastal/coastal-beach-cliff.png",
            slides: [
                "images/Coastal/coastal-beach-cliff.png"
            ]
        },
        "coorg-exploration": {
            cover: "images/Coorg/coorg-estate-hills.jpeg",
            slides: [
                "images/Coorg/coorg-estate-hills.jpeg"
            ]
        },
        "wayanad-adventure": {
            cover: "images/Wayanad/wayanad-tea-estate.jpg",
            slides: [
                "images/Wayanad/wayanad-tea-estate.jpg",
                "images/Wayanad/wayanad-chembra-peak.jpg",
                "images/Wayanad/wayanad-misty-hills.jpg"
            ]
        },
        "ooty-sightseeing": {
            cover: "images/Ooty/ooty-hills-vista.jpg",
            slides: [
                "images/Ooty/ooty-hills-vista.jpg",
                "images/Ooty/ooty-pine-forest.jpeg",
                "images/Ooty/ooty-tea-gardens.jpeg",
                "images/Ooty/ooty-viewpoint.jpeg"
            ]
        },
        "kodaikanal-escape": {
            cover: "images/Kodachadri/kodachadri-cover.jpg",
            slides: [
                "images/Kodachadri/kodachadri-cover.jpg",
                "images/Kodachadri/kodachadri-jeep-trail.jpg",
                "images/Kodachadri/kodachadri-sunset-ridge.jpg"
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
            cover: "images/Netravathi/netravathi-trek-badge.jpeg",
            slides: [
                "images/Netravathi/netravathi-trek-badge.jpeg",
                "images/Hero/hero-bg-landscape.jpg"
            ]
        },
        "gokarna": {
            cover: "images/Coastal/coastal-beach-cliff.png",
            slides: [
                "images/Coastal/coastal-beach-cliff.png"
            ]
        }
    }
};

// Expose globally
if (typeof window !== "undefined") {
    window.IMAGES = IMAGES;
}
