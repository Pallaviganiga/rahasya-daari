/**
 * ==========================================================================
 * RAHASYA DAARI - GOOGLE REVIEWS & LIVE RATINGS CONFIGURATION & API
 * ==========================================================================
 * Easy configuration file to add more Google Reviews or connect
 * live Google Places API ratings in real-time!
 * ==========================================================================
 */

const RAHASYA_GOOGLE_REVIEWS_CONFIG = {
    // Optional: If you have a Google Places API key & Place ID, set them here.
    // Otherwise, the system automatically uses the verified live review database below.
    api: {
        enabled: false,
        placeId: "ChIJb8Wc49YTrzsRsZ_6b6F6080", // Rahasya Daari Google Maps Place ID
        apiEndpoint: "" // Custom backend proxy or Google Places endpoint if used
    },

    // Overall Live Summary Statistics
    summary: {
        score: 4.9,
        maxScore: 5.0,
        totalReviews: "650+",
        ratingWord: "EXCELLENT",
        mapsUrl: "https://share.google/bbgCWOk5W1FMGlcRw"
    },

    // Authentic Verified Google Reviews Database
    reviews: [
        {
            name: "eswar varun",
            avatarBg: "#7c3aed",
            avatarLetter: "E",
            badge: "1 review",
            stars: 5,
            timeAgo: "2 months ago",
            trek: "Gangadikallu, Chikmagalur",
            text: "We had an amazing experience at Gangadikallu, Chikmagalur! Everything was well planned and perfectly organized from start to finish. A special shoutout to our guides, Sharan and Prakruthi, they were incredibly friendly, energetic, and made the trip so memorable."
        },
        {
            name: "Meghana G",
            avatarBg: "#2563eb",
            avatarLetter: "M",
            badge: "1 review",
            stars: 5,
            timeAgo: "2 months ago",
            trek: "Chikmagalur Trip",
            text: "It was very nicely organised trip with Rahasya_Daari and thankful for it. As a female solo traveller, I just felt so homely atmosphere at every steps and it was completely safe journey. ಅದ್ಭುತ ✨"
        },
        {
            name: "Afra S A",
            avatarBg: "#d97706",
            avatarLetter: "A",
            badge: "6 reviews • 4 photos",
            stars: 5,
            timeAgo: "2 months ago",
            trek: "Western Ghats Trek",
            text: "Overall a wonderful experience with the team. The trek leaders were willing to help us out in all situations (from clicking us good pictures to carrying down trekkers when some of us were tired). They ensured that we had enough food, rest and fun! Definetly a memorable trip."
        },
        {
            name: "Atif Ansari",
            avatarBg: "#183e20",
            avatarLetter: "A",
            badge: "1 review • 3 photos",
            stars: 5,
            timeAgo: "a month ago",
            trek: "Chikmagalur Trip",
            text: "Had an amazing experience on the Chikmagalur trip organized by Rahasya Daari from Bangalore! 🌿⛰️ The homestay was awesome, comfortable, and had a great vibe. The food was delicious and really added to the overall experience. The trek was excellent—beautiful views, great adventure, and definitely worth it! 🥾✨ A special mention to our trek guide, who was very humble, friendly, and energetic throughout the trek. His enthusiasm made the experience even more enjoyable. 👏 Overall, it was a wonderful and memorable trip. Highly recommended for anyone looking for a fun and well-organized Chikmagalur adventure! ❤️🌄"
        },
        {
            name: "Rachana Manjunath",
            avatarBg: "#db2777",
            avatarLetter: "R",
            badge: "3 reviews",
            stars: 5,
            timeAgo: "a month ago",
            trek: "Chikmagalur Adventure",
            text: "It’s was a amazing experience with rahasyadaari nd Pawan was best trek lead. We enjoyed a lot ❤️"
        },
        {
            name: "Vaishnavi Ghiradkar",
            avatarBg: "#0284c7",
            avatarLetter: "V",
            badge: "1 review",
            stars: 5,
            timeAgo: "a month ago",
            trek: "First Mountain Trek",
            text: "My very first trek, and Rahasya Daari made it unforgettable! Incredibly well-organized trip, and a huge shoutout to our trek lead, Pawan, for keeping the energy high and making everyone feel right at home. 10/10 experience—totally worth it!"
        },
        {
            name: "chandralekha gopinath",
            avatarBg: "#458b43",
            avatarLetter: "C",
            badge: "4 reviews • 6 photos",
            stars: 5,
            timeAgo: "a month ago",
            trek: "Western Ghats Trail",
            text: "Had an amazing experience. From the bottom of the heart, I thank the Rahasyadaari team and our tour guide Mr. Pavan kalyan. The trip was really fun and adventurous from the start to the end. And I personally enjoyed the whole journey."
        },
        {
            name: "M L",
            avatarBg: "#7c3aed",
            avatarLetter: "M",
            badge: "4 reviews • 1 photo",
            stars: 5,
            timeAgo: "a month ago",
            trek: "Chikmagalur Homestay & Trek",
            text: "It was a great experience going from being surrounded by a bunch of unknown people to creating such a lovely and memorable experience together. I absolutely loved the food at the homestay, but what I loved most was the nature of Chikmagalur and its deeply rooted local culture. Our tour guide explained so much about the local people and their traditions. Spending the night around a bonfire, with lots of laughter, great food, music, beautiful nature, and such a lovely culture, made the whole experience truly special. If someone asks me how the trip was, I would say it in one sentence. What a great experience!"
        }
    ]
};

/**
 * Live Google Reviews API Fetcher (Graceful async fetch with cache fallback)
 */
async function fetchLiveGoogleRatings() {
    if (!RAHASYA_GOOGLE_REVIEWS_CONFIG.api.enabled || !RAHASYA_GOOGLE_REVIEWS_CONFIG.api.apiEndpoint) {
        return RAHASYA_GOOGLE_REVIEWS_CONFIG;
    }

    try {
        const response = await fetch(RAHASYA_GOOGLE_REVIEWS_CONFIG.api.apiEndpoint);
        if (response.ok) {
            const data = await response.json();
            if (data.result) {
                if (data.result.rating) RAHASYA_GOOGLE_REVIEWS_CONFIG.summary.score = data.result.rating;
                if (data.result.user_ratings_total) RAHASYA_GOOGLE_REVIEWS_CONFIG.summary.totalReviews = `${data.result.user_ratings_total}+`;
                if (Array.isArray(data.result.reviews) && data.result.reviews.length > 0) {
                    // Prepend live reviews to list
                    const liveReviews = data.result.reviews.map(r => ({
                        name: r.author_name,
                        avatarBg: "#183e20",
                        avatarLetter: r.author_name.charAt(0),
                        badge: `Google User • ${r.relative_time_description || "Recent"}`,
                        stars: r.rating || 5,
                        timeAgo: r.relative_time_description || "Recently",
                        trek: "Western Ghats Trail",
                        text: r.text
                    }));
                    RAHASYA_GOOGLE_REVIEWS_CONFIG.reviews = [...liveReviews, ...RAHASYA_GOOGLE_REVIEWS_CONFIG.reviews];
                }
            }
        }
    } catch (e) {
        console.warn("Using local verified Google Reviews database fallback:", e);
    }
    return RAHASYA_GOOGLE_REVIEWS_CONFIG;
}
