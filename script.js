/**
 * ==========================================================================
 * RAHASYA DAARI - MAIN INTERACTIVE CONTROLLER
 * ==========================================================================
 * Trips and Featured Trails are loaded modularly from trips-data.js.
 * ==========================================================================
 */

// App State
let currentBookingStep = 1;
let selectedTrekId = '';
let selectedStateFilter = '';
let selectedPopularFilter = false;

// Curated Gallery Data for the Landing Page Visual Showcase
const GALLERY_DATA = [
    {
        id: "g1",
        src: "images/Bandaje/bandaje-cliff-edge.png",
        title: "Edge of the 200-ft Cascade",
        location: "Bandaje Falls, Charmadi Ghats",
        category: "waterfalls",
        tag: "Waterfall",
        tall: true
    },
    {
        id: "g2",
        src: "images/Netravathi/netravathi-cover.jpg",
        title: "The Green Spine Ridge",
        location: "Netravathi Peak, Kalasa",
        category: "peaks",
        tag: "Summit Ridge",
        tall: false
    },
    {
        id: "g3",
        src: "images/Kudremukha/kudremukha-cover.jpg",
        title: "Horse-Faced Mountain Wonder",
        location: "Kudremukha National Park",
        category: "peaks",
        tag: "1,894m Peak",
        tall: false
    },
    {
        id: "g4",
        src: "images/Dudhsagar Falls & Dandeli/dudhsagar-falls-view.png",
        title: "Sea of Milk Railway Cascade",
        location: "Dudhsagar, Goa-Karnataka Border",
        category: "waterfalls",
        tag: "Iconic Falls",
        tall: true
    },
    {
        id: "g5",
        src: "images/Kodachadri/kodachadri-sunset-ridge.jpg",
        title: "Golden Hour on Western Ridge",
        location: "Kodachadri Peak, Shimoga",
        category: "peaks",
        tag: "Sunset Vista",
        tall: false
    },
    {
        id: "g6",
        src: "images/Kurinjal/kuri2.jpeg",
        title: "Windy Shola Summit",
        location: "Kurinjal Peak, Kudremukh",
        category: "peaks",
        tag: "Offbeat Trail",
        tall: false
    },
    {
        id: "g7",
        src: "images/Netravathi/netravathi-clouds-peak.jpg",
        title: "Ocean of Monsoon Clouds",
        location: "Netravathi Valley",
        category: "ghats",
        tag: "Cloud Bed",
        tall: false
    },
    {
        id: "g8",
        src: "images/Bandaje/bandaje-waterfall-view.jpeg",
        title: "Hidden Jungle Droplet",
        location: "Charmadi Rainforest",
        category: "waterfalls",
        tag: "Secret Falls",
        tall: false
    },
    {
        id: "g9",
        src: "images/Ooty/ooty-hills-vista.jpg",
        title: "Rolling Nilgiri Tea Horizons",
        location: "Ooty Highlands, Tamil Nadu",
        category: "valleys",
        tag: "Tea Slopes",
        tall: false
    },
    {
        id: "g10",
        src: "images/Wayanad/wayanad-tea-estate.jpg",
        title: "Mist Floating Over Tea Trails",
        location: "Chembra Foothills, Wayanad",
        category: "valleys",
        tag: "Plantation Walk",
        tall: false
    },
    {
        id: "g11",
        src: "images/Dudhsagar Falls & Dandeli/dandeli-rafting-rapids.jpeg",
        title: "Whitewater Rapids Adventure",
        location: "Kali River, Dandeli",
        category: "community",
        tag: "Rafting",
        tall: false
    },
    {
        id: "g12",
        src: "images/Netravathi/netravathi-trek-badge.jpeg",
        title: "Summit Glory & Tribe Badge",
        location: "Rahasya Daari Community",
        category: "community",
        tag: "Trail Moments",
        tall: false
    },
    {
        id: "g13",
        src: "images/Coastal/coastal-beach-cliff.png",
        title: "Golden Shoreline & Cliff Walk",
        location: "Gokarna & Mangalore Coast",
        category: "coastal",
        tag: "Coastal Escape",
        tall: false
    },
    {
        id: "g14",
        src: "images/Coorg/coorg-estate-hills.jpeg",
        title: "Misty Coffee Hills Horizon",
        location: "Tadiandamol & Coorg",
        category: "valleys",
        tag: "Highlands",
        tall: false
    },
    {
        id: "g15",
        src: "images/Netravathi/netravathi-panorama-hd.jpg",
        title: "Endless Shola Grassland Panorama",
        location: "Kalasa Range, Western Ghats",
        category: "ghats",
        tag: "Landscape",
        tall: false
    }
];

let currentLightboxIndex = 0;
let currentFilteredGallery = GALLERY_DATA;

// Render Landing Page Featured Trails (NO PRICE TAGS, CLEAN & STREAMLINED)
function renderLandingFeaturedTrails() {
    const grid = document.getElementById("landingTrailsGrid");
    if (!grid) return;

    grid.innerHTML = "";
    FEATURED_TRAILS_LANDING.forEach(trail => {
        const card = document.createElement("div");
        card.className = "landing-trail-card";
        card.innerHTML = `
            <div class="landing-card-media skeleton">
                <img src="${trail.image}" alt="${trail.title}" onload="this.parentElement.classList.remove('skeleton');" onerror="this.src='images/Hero/hero-bg-landscape.jpg'; this.parentElement.classList.remove('skeleton');">
            </div>
            <div class="landing-card-body">
                <h3 class="landing-card-title">${trail.title}</h3>
                <p class="landing-card-location"><i class="fa-solid fa-location-dot"></i> ${trail.location}</p>
                <div class="landing-card-stats">
                    <span class="stat-pill"><i class="fa-regular fa-clock"></i> ${trail.duration}</span>
                    <span class="stat-pill"><i class="fa-solid fa-mountain"></i> ${trail.altitude}</span>
                </div>
                <p class="landing-card-desc">${trail.desc}</p>
                <button class="btn-explore-trail" onclick="navigateToTrek('${trail.id}')">
                    View Trail Details <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render Interactive Photo Gallery
function renderPhotoGallery(category = 'all') {
    const grid = document.getElementById("photoGalleryGrid");
    if (!grid) return;

    if (category === 'all') {
        currentFilteredGallery = GALLERY_DATA;
    } else {
        currentFilteredGallery = GALLERY_DATA.filter(item => item.category === category);
    }

    grid.innerHTML = "";
    currentFilteredGallery.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = `gallery-card ${item.tall ? 'featured-tall' : ''}`;
        card.setAttribute("onclick", `openLightboxByIndex(${index})`);
        card.innerHTML = `
            <img src="${item.src}" alt="${item.title}" class="gallery-card-img" loading="lazy" onerror="this.src='images/Hero/hero-bg-landscape.jpg';">
            <div class="gallery-card-overlay">
                <span class="gallery-tag"><i class="fa-solid fa-camera"></i> ${item.tag}</span>
                <h4 class="gallery-card-title">${item.title}</h4>
                <span class="gallery-card-location"><i class="fa-solid fa-location-dot"></i> ${item.location}</span>
            </div>
            <div class="gallery-card-view-btn"><i class="fa-solid fa-expand"></i></div>
        `;
        grid.appendChild(card);
    });
}

// Filter Gallery by Category
function filterGallery(category, btnElement) {
    const buttons = document.querySelectorAll(".gallery-filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    if (btnElement) {
        btnElement.classList.add("active");
    }
    renderPhotoGallery(category);
}

// Lightbox Handlers
function openLightboxByIndex(index) {
    if (index < 0 || index >= currentFilteredGallery.length) return;
    currentLightboxIndex = index;
    const item = currentFilteredGallery[index];
    
    const modal = document.getElementById("lightboxModal");
    const img = document.getElementById("lightboxImg");
    const title = document.getElementById("lightboxTitle");
    const place = document.getElementById("lightboxPlace");

    if (modal && img && title && place) {
        img.src = item.src;
        title.innerText = item.title;
        place.innerText = item.location;
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeLightbox() {
    const modal = document.getElementById("lightboxModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

function nextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredGallery.length;
    openLightboxByIndex(currentLightboxIndex);
}

function prevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredGallery.length) % currentFilteredGallery.length;
    openLightboxByIndex(currentLightboxIndex);
}

// FAQ Accordion Toggle
function toggleFaq(el) {
    const item = el.closest(".faq-item");
    if (!item) return;
    const isActive = item.classList.contains("active");
    
    // Close other FAQs
    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
    
    if (!isActive) {
        item.classList.add("active");
    }
}

// DOM Elements Initialization
document.addEventListener("DOMContentLoaded", () => {
    // 1. Landing Page components (if present)
    if (document.getElementById("landingTrailsGrid")) {
        renderLandingFeaturedTrails();
    }
    if (document.getElementById("photoGalleryGrid")) {
        renderPhotoGallery('all');
    }

    // 2. Trips Catalog components (if present)
    if (document.getElementById("weekendGrid")) {
        renderWeekdayTrips();
        renderWeekendTreks();
        renderSightseeingTrips();
        renderPopularTreks();

        setupCarouselControls("weekdayGrid", "weekdayPrevBtn", "weekdayNextBtn");
        setupCarouselControls("weekendGrid", "weekendPrevBtn", "weekendNextBtn");
        setupCarouselControls("sightseeingGrid", "sightseeingPrevBtn", "sightseeingNextBtn");
        setupCarouselControls("popularGrid", "popularPrevBtn", "popularNextBtn");
    }

    // 3. Mobile Navigation Drawer Toggle
    const mobileNavToggle = document.getElementById("mobileNavToggle");
    const navMenu = document.getElementById("navMenu");

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const isOpened = navMenu.classList.contains("active");
            mobileNavToggle.innerHTML = isOpened ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });
    }

    // Close menu when clicking nav links on mobile
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        if (link.id === "dropdownToggleBtn") return;
        link.addEventListener("click", () => {
            if (navMenu && mobileNavToggle) {
                navMenu.classList.remove("active");
                mobileNavToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    });

    // Dropdown toggle click event
    const dropdownToggleBtn = document.getElementById("dropdownToggleBtn");
    const tripsDropdown = document.getElementById("tripsDropdown");
    const dropdownMenu = tripsDropdown ? tripsDropdown.querySelector(".dropdown-menu") : null;

    if (dropdownToggleBtn && dropdownMenu) {
        dropdownToggleBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const isShow = dropdownMenu.classList.contains("show");
            tripsDropdown.classList.toggle("active", !isShow);
            dropdownMenu.classList.toggle("show", !isShow);
            e.stopPropagation();
        });
    }

    // Close dropdown and mobile drawer when clicking a dropdown item
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            if (navMenu && mobileNavToggle) {
                navMenu.classList.remove("active");
                mobileNavToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
            if (tripsDropdown && dropdownMenu) {
                tripsDropdown.classList.remove("active");
                dropdownMenu.classList.remove("show");
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
        if (tripsDropdown && dropdownMenu) {
            tripsDropdown.classList.remove("active");
            dropdownMenu.classList.remove("show");
        }
    });

    // Populate Booking Wizard dropdown
    populateTrekDropdown();

    // Setup Batch Dates selector minimum (tomorrow onwards)
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    document.getElementById("wizardDate").min = `${yyyy}-${mm}-${dd}`;


    // Start Hero background slideshow
    startHeroSlideshow();

    // Setup Horizontal Slider Controls for all sections
    setupCarouselControls("weekendGrid", "weekendPrevBtn", "weekendNextBtn");
    setupCarouselControls("sightseeingGrid", "sightseeingPrevBtn", "sightseeingNextBtn");
    setupCarouselControls("popularGrid", "popularPrevBtn", "popularNextBtn");

    // Setup routing handler
    window.addEventListener("hashchange", handleRouting);
    handleRouting();

    // Show/Hide Floating Inquiry Button based on scroll depth (visible after scrolling 300px, hidden at Contact section)
    window.addEventListener("scroll", () => {
        const floatBtn = document.getElementById("floatingInquiryBtn");
        const contactSection = document.getElementById("contact");
        
        // Hide button if the user has already contacted us
        if (sessionStorage.getItem("hasContactedUs") === "true") {
            if (floatBtn) floatBtn.classList.remove("show");
            return;
        }

        if (floatBtn) {
            let showBtn = false;

            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                showBtn = true;
            }

            // Hide button if the Contact section is visible in the viewport
            if (contactSection) {
                const contactRect = contactSection.getBoundingClientRect();
                if (contactRect.top < window.innerHeight) {
                    showBtn = false;
                }
            }

            if (showBtn) {
                floatBtn.classList.add("show");
            } else {
                floatBtn.classList.remove("show");
            }
        }
    });
});

// Setup Carousel Scroll functionality with auto-scroll and manual controls
function setupCarouselControls(trackId, prevBtnId, nextBtnId) {
    const track = document.getElementById(trackId);
    const nextBtn = document.getElementById(nextBtnId);
    const prevBtn = document.getElementById(prevBtnId);

    if (!track || !nextBtn || !prevBtn) return;

    let autoScrollInterval = null;
    let interactionTimeout = null;

    function startAutoScroll() {
        if (autoScrollInterval) return;
        autoScrollInterval = setInterval(() => {
            const card = track.querySelector(".trek-card");
            if (card) {
                const cardWidth = card.offsetWidth + 32; // card width + grid gap
                const container = track.parentElement;
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                
                // If we've reached the end (with 15px buffer for subpixel layout), scroll back to start
                if (container.scrollLeft >= maxScrollLeft - 15) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }
        }, 3500); // Scroll every 3.5 seconds
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    function handleInteraction() {
        stopAutoScroll();
        if (interactionTimeout) {
            clearTimeout(interactionTimeout);
        }
        // Resume auto-scroll after 5 seconds of no manual clicks
        interactionTimeout = setTimeout(() => {
            startAutoScroll();
        }, 5000);
    }

    nextBtn.addEventListener("click", () => {
        const card = track.querySelector(".trek-card");
        if (card) {
            const cardWidth = card.offsetWidth + 32;
            track.parentElement.scrollBy({ left: cardWidth, behavior: 'smooth' });
            handleInteraction();
        }
    });

    prevBtn.addEventListener("click", () => {
        const card = track.querySelector(".trek-card");
        if (card) {
            const cardWidth = card.offsetWidth + 32;
            track.parentElement.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            handleInteraction();
        }
    });

    // Pause auto-scroll on hover, resume on leave
    track.parentElement.addEventListener("mouseenter", stopAutoScroll);
    track.parentElement.addEventListener("mouseleave", () => {
        // Only resume if we are not in the middle of a manual interaction timeout
        if (!interactionTimeout) {
            startAutoScroll();
        }
    });

    // Pause auto-scroll on mobile touch interaction
    track.parentElement.addEventListener("touchstart", handleInteraction, { passive: true });

    // Start auto-scroll initially
    startAutoScroll();
}

// Render Weekday Trips
function renderWeekdayTrips() {
    const grid = document.getElementById("weekdayGrid");
    if (!grid) return;
    grid.innerHTML = "";

    // Show the exact same trek packages as Weekend Trips
    let treks = TREKS_DATA.filter(item => item.category === "trek");

    // Apply state filter if set
    if (selectedStateFilter) {
        treks = treks.filter(trek => trek.location.toLowerCase().includes(selectedStateFilter.toLowerCase()));
    }

    if (treks.length === 0) {
        grid.innerHTML = `
            <div class="no-trips-message">
                <i class="fa-solid fa-mountain-sun"></i>
                <p>No weekdays trips available in <strong>${selectedStateFilter}</strong> currently. We are exploring new trails!</p>
            </div>
        `;
        return;
    }

    treks.forEach(trek => {
        const card = document.createElement("div");
        card.className = "trek-card";
        card.setAttribute("onclick", `navigateToTrek('${trek.id}')`);
        card.innerHTML = `
            <div class="trek-card-img-wrapper skeleton">
                <img src="${trek.image}" alt="${trek.title}" class="trek-card-img" onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton');" onerror="this.src=(window.IMAGES?.fallback?.cardDefault || 'images/Hero/hero-bg-landscape.jpg'); this.classList.add('loaded'); this.parentElement.classList.remove('skeleton');">
            </div>
            <div class="trek-card-content">
                <h3 class="trek-card-title">${trek.title}</h3>
                <p class="trek-card-pickup">
                    <strong>PICKUP LOCATION</strong>
                    ${trek.pickup || 'Majestic, Bangalore'}
                </p>
                <hr class="card-divider">
                <div class="trek-card-footer">
                    <span class="trek-card-duration">
                        <i class="fa-regular fa-clock"></i> ${trek.duration}
                    </span>
                    <span class="trek-card-price">₹${trek.price.toLocaleString('en-IN')}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render Weekend Trips (Treks category)
function renderWeekendTreks() {
    const grid = document.getElementById("weekendGrid");
    if (!grid) return;
    grid.innerHTML = "";

    let treks = TREKS_DATA.filter(item => item.category === "trek");

    // Apply state filter if set
    if (selectedStateFilter) {
        treks = treks.filter(trek => trek.location.toLowerCase().includes(selectedStateFilter.toLowerCase()));
    }

    if (treks.length === 0) {
        grid.innerHTML = `
            <div class="no-trips-message">
                <i class="fa-solid fa-mountain-sun"></i>
                <p>No treks available in <strong>${selectedStateFilter}</strong> currently. We are exploring new trails!</p>
            </div>
        `;
        return;
    }

    treks.forEach(trek => {
        const card = document.createElement("div");
        card.className = "trek-card";
        card.setAttribute("onclick", `navigateToTrek('${trek.id}')`);
        card.innerHTML = `
            <div class="trek-card-img-wrapper skeleton">
                <img src="${trek.image}" alt="${trek.title}" class="trek-card-img" onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton');" onerror="this.src=(window.IMAGES?.fallback?.cardDefault || 'images/Hero/hero-bg-landscape.jpg'); this.classList.add('loaded'); this.parentElement.classList.remove('skeleton');">
            </div>
            <div class="trek-card-content">
                <h3 class="trek-card-title">${trek.title}</h3>
                <p class="trek-card-pickup">
                    <strong>PICKUP LOCATION</strong>
                    ${trek.pickup || 'Majestic, Bangalore'}
                </p>
                <hr class="card-divider">
                <div class="trek-card-footer">
                    <span class="trek-card-duration">
                        <i class="fa-regular fa-clock"></i> ${trek.duration}
                    </span>
                    <span class="trek-card-price">₹${trek.price.toLocaleString('en-IN')}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render Sightseeing Trips (Trip category)
function renderSightseeingTrips() {
    const grid = document.getElementById("sightseeingGrid");
    if (!grid) return;
    grid.innerHTML = "";

    let trips = TREKS_DATA.filter(item => item.category === "trip");

    // Apply state filter if set
    if (selectedStateFilter) {
        trips = trips.filter(trip => trip.location.toLowerCase().includes(selectedStateFilter.toLowerCase()));
    }

    if (trips.length === 0) {
        grid.innerHTML = `
            <div class="no-trips-message">
                <i class="fa-solid fa-mountain-sun"></i>
                <p>No sightseeing trips available in <strong>${selectedStateFilter}</strong> currently. We are exploring new locations!</p>
            </div>
        `;
        return;
    }

    trips.forEach(trip => {
        const card = document.createElement("div");
        card.className = "trek-card";
        card.setAttribute("onclick", `navigateToTrek('${trip.id}')`);
        card.innerHTML = `
            <div class="trek-card-img-wrapper skeleton">
                <img src="${trip.image}" alt="${trip.title}" class="trek-card-img" onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton');" onerror="this.src=(window.IMAGES?.fallback?.cardDefault || 'images/Hero/hero-bg-landscape.jpg'); this.classList.add('loaded'); this.parentElement.classList.remove('skeleton');">
            </div>
            <div class="trek-card-content">
                <h3 class="trek-card-title">${trip.title}</h3>
                <p class="trek-card-pickup">
                    <strong>PICKUP LOCATION</strong>
                    ${trip.pickup || 'Majestic, Bangalore'}
                </p>
                <hr class="card-divider">
                <div class="trek-card-footer">
                    <span class="trek-card-duration">
                        <i class="fa-regular fa-clock"></i> ${trip.duration}
                    </span>
                    <span class="trek-card-price">₹${trip.price.toLocaleString('en-IN')}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render Popular Treks (popular flag set to true)
function renderPopularTreks() {
    const grid = document.getElementById("popularGrid");
    if (!grid) return;
    grid.innerHTML = "";

    let popularTreks = TREKS_DATA.filter(item => item.popular === true);

    if (popularTreks.length === 0) {
        grid.innerHTML = `
            <div class="no-trips-message">
                <i class="fa-solid fa-mountain-sun"></i>
                <p>No popular treks currently listed. Check back soon!</p>
            </div>
        `;
        return;
    }

    popularTreks.forEach(trek => {
        const card = document.createElement("div");
        card.className = "trek-card";
        card.setAttribute("onclick", `navigateToTrek('${trek.id}')`);
        card.innerHTML = `
            <div class="trek-card-img-wrapper skeleton">
                <img src="${trek.image}" alt="${trek.title}" class="trek-card-img" onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton');" onerror="this.src=(window.IMAGES?.fallback?.cardDefault || 'images/Hero/hero-bg-landscape.jpg'); this.classList.add('loaded'); this.parentElement.classList.remove('skeleton');">
            </div>
            <div class="trek-card-content">
                <h3 class="trek-card-title">${trek.title}</h3>
                <p class="trek-card-pickup">
                    <strong>PICKUP LOCATION</strong>
                    ${trek.pickup || 'Majestic, Bangalore'}
                </p>
                <hr class="card-divider">
                <div class="trek-card-footer">
                    <span class="trek-card-duration">
                        <i class="fa-regular fa-clock"></i> ${trek.duration}
                    </span>
                    <span class="trek-card-price">₹${trek.price.toLocaleString('en-IN')}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Modal open/close controls
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent body scroll
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("active");
        const activeModals = document.querySelectorAll(".modal.active");
        if (activeModals.length === 0) {
            document.body.style.overflow = "";
        }
    }
}

// Close modals on Escape key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const activeModals = document.querySelectorAll(".modal.active");
        activeModals.forEach(modal => closeModal(modal.id));
    }
});

// Router navigation helpers
function navigateToTrek(trekId) {
    if (document.getElementById("detailsPage")) {
        const homePage = document.getElementById("homePage");
        if (homePage && homePage.style.display !== "none") {
            window.lastScrollY = window.scrollY;
        }
        location.hash = 'trek-' + trekId;
        handleRouting();
    } else {
        window.location.href = `trips.html#trek-${trekId}`;
    }
}

function goHome() {
    if (document.getElementById("detailsPage")) {
        clearStateFilter();
        location.hash = '';
        handleRouting();
    } else {
        window.location.href = "trips.html";
    }
}

// Filter trips/treks by selected state
function filterByState(state) {
    selectedStateFilter = state;

    // Show filter banner
    const banner = document.getElementById("filterBanner");
    const nameEl = document.getElementById("filterStateName");
    if (banner && nameEl) {
        nameEl.innerText = state;
        banner.style.display = "flex";
    }

    // Close details page if open, go home
    if (window.location.hash.startsWith("#trek-")) {
        // Go home without resetting filter
        location.hash = '';
    } else {
        // Just re-render categories to reflect filter
        renderWeekdayTrips();
        renderWeekendTreks();
        renderSightseeingTrips();
    }

    // Close mobile nav menu
    const navMenu = document.getElementById("navMenu");
    const mobileNavToggle = document.getElementById("mobileNavToggle");
    if (navMenu && mobileNavToggle) {
        navMenu.classList.remove("active");
        mobileNavToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    // Scroll to #weekday section
    setTimeout(() => {
        const tripsSec = document.getElementById("weekday") || document.getElementById("trips");
        if (tripsSec) {
            tripsSec.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// Clear the active state filter
function clearStateFilter() {
    selectedStateFilter = "";

    // Hide filter banner
    const banner = document.getElementById("filterBanner");
    if (banner) {
        banner.style.display = "none";
    }

    // Re-render categories to show all
    renderWeekdayTrips();
    renderWeekendTreks();
    renderSightseeingTrips();
    renderPopularTreks();
}
// Router handler to toggle pages client-side
function handleRouting() {
    const hash = window.location.hash;
    const homePage = document.getElementById("homePage");
    const detailsPage = document.getElementById("detailsPage");
    const header = document.querySelector(".header");

    if (hash.startsWith("#trek-")) {
        const trekId = hash.replace("#trek-", "");
        const trek = TREKS_DATA.find(t => t.id === trekId);

        if (trek) {
            selectedTrekId = trekId;

            // Hide homepage, show details
            homePage.style.display = "none";
            detailsPage.style.display = "block";



            // Hide "BOOK TOUR" button in header when on details page
            const bookTopBtn = document.querySelector(".btn-book-top");
            if (bookTopBtn) {
                bookTopBtn.style.display = "none";
            }

            // Highlight Trips link in navigation
            const navLinks = document.querySelectorAll(".nav-link");
            navLinks.forEach(link => {
                if (link.getAttribute("href") === "#trips") {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });

            // Populate details fields
            document.getElementById("detailsTitle").innerText = trek.title;
            document.getElementById("detailsSubtitle").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${trek.location}`;
            document.getElementById("detailsDescription").innerText = trek.description;
            document.getElementById("detailsDuration").innerText = trek.duration;
            document.getElementById("detailsAltitude").innerText = trek.altitude;
            document.getElementById("detailsDistance").innerText = trek.distance;
            document.getElementById("detailsPrice").innerText = `₹${trek.price.toLocaleString('en-IN')} /person`;

            // Load Highlights
            const highlightsContainer = document.getElementById("detailsHighlightsContainer");
            const highlightsGrid = document.getElementById("detailsHighlights");
            if (highlightsContainer && highlightsGrid) {
                if (trek.highlights && trek.highlights.length > 0) {
                    highlightsGrid.innerHTML = "";
                    trek.highlights.forEach(hl => {
                        const item = document.createElement("div");
                        item.className = "highlight-item";
                        item.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${hl}</span>`;
                        highlightsGrid.appendChild(item);
                    });
                    highlightsContainer.style.display = "block";
                } else {
                    highlightsContainer.style.display = "none";
                }
            }

            // Pricing elements
            const rowOwnTransport = document.getElementById("rowOwnTransport");
            const detailsOwnTransport = document.getElementById("detailsOwnTransport");
            const rowAdvance = document.getElementById("rowAdvance");
            const detailsAdvance = document.getElementById("detailsAdvance");

            if (rowOwnTransport && detailsOwnTransport) {
                if (trek.ownTransportPrice) {
                    detailsOwnTransport.innerText = `₹${trek.ownTransportPrice.toLocaleString('en-IN')} /person`;
                    rowOwnTransport.style.display = "flex";
                } else {
                    rowOwnTransport.style.display = "none";
                }
            }

            if (rowAdvance && detailsAdvance) {
                if (trek.advanceAmount) {
                    detailsAdvance.innerText = `₹${trek.advanceAmount.toLocaleString('en-IN')} /person`;
                    rowAdvance.style.display = "flex";
                } else {
                    rowAdvance.style.display = "none";
                }
            }

            // Pickup Locations
            const pickupCard = document.getElementById("detailsPickupCard");
            const pickupList = document.getElementById("detailsPickupLocations");
            if (pickupCard && pickupList) {
                if (trek.pickupLocationList && trek.pickupLocationList.length > 0) {
                    pickupList.innerHTML = "";
                    trek.pickupLocationList.forEach(loc => {
                        const li = document.createElement("li");
                        if (typeof loc === "object" && loc.name) {
                            const mapUrl = loc.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(loc.name + " Bangalore")}`;
                            li.innerHTML = `
                                <div class="pickup-loc-left">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>${loc.name}</span>
                                </div>
                                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="pickup-map-link" title="Open ${loc.name} in Google Maps">
                                    <i class="fa-solid fa-map-location-dot"></i> Maps
                                </a>
                            `;
                        } else {
                            const locName = String(loc);
                            const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(locName + " Bangalore")}`;
                            li.innerHTML = `
                                <div class="pickup-loc-left">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>${locName}</span>
                                </div>
                                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="pickup-map-link" title="Open in Google Maps">
                                    <i class="fa-solid fa-map-location-dot"></i> Maps
                                </a>
                            `;
                        }
                        pickupList.appendChild(li);
                    });
                    pickupCard.style.display = "block";
                } else {
                    pickupCard.style.display = "none";
                }
            }

            // Cancellation Policy
            const cancellationCard = document.getElementById("detailsCancellationCard");
            const cancellationText = document.getElementById("detailsCancellationPolicy");
            if (cancellationCard && cancellationText) {
                if (trek.cancellationPolicy) {
                    cancellationText.innerText = trek.cancellationPolicy;
                    cancellationCard.style.display = "block";
                } else {
                    cancellationCard.style.display = "none";
                }
            }

            // Set category badge text
            const badge = document.getElementById("detailsCategoryBadge");
            if (badge) {
                badge.innerText = trek.category === "trek" ? "Trek" : "Trip";
            }

            // Set details hero background slideshow
            const heroBg = document.getElementById("detailsHeroBg");
            if (heroBg) {
                // Clear any existing interval first
                if (window.detailsSlideshowInterval) {
                    clearInterval(window.detailsSlideshowInterval);
                    window.detailsSlideshowInterval = null;
                }

                // Determine slides to display
                const defaultFallbackSlides = window.IMAGES ? [
                    window.IMAGES.fallback.modalDefault,
                    window.IMAGES.treks["netravathi"]?.cover,
                    window.IMAGES.treks["kudremukh"]?.cover,
                    window.IMAGES.trips["ooty-sightseeing"]?.cover
                ].filter(Boolean) : ["images/Hero/hero-bg-landscape.jpg"];

                const slides = (trek.slides && trek.slides.length > 0) ? trek.slides : [trek.image, ...defaultFallbackSlides].filter(Boolean);

                // Populate slides dynamically inside heroBg
                heroBg.innerHTML = "";
                heroBg.classList.add("skeleton");
                
                const firstImg = new Image();
                firstImg.src = slides[0];
                firstImg.onload = () => {
                    heroBg.classList.remove("skeleton");
                };
                firstImg.onerror = () => {
                    heroBg.classList.remove("skeleton");
                };

                slides.forEach((imgSrc, idx) => {
                    const slideDiv = document.createElement("div");
                    slideDiv.className = `details-hero-bg-slide ${idx === 0 ? 'active' : ''}`;
                    slideDiv.style.backgroundImage = `url('${imgSrc}')`;
                    heroBg.appendChild(slideDiv);
                });

                // Start slideshow if there is more than 1 slide
                if (slides.length > 1) {
                    let detailsCurrentIndex = 0;
                    const detailsSlides = heroBg.querySelectorAll(".details-hero-bg-slide");

                    window.detailsSlideshowInterval = setInterval(() => {
                        detailsSlides.forEach(slide => slide.classList.remove("previous"));

                        const currentSlide = detailsSlides[detailsCurrentIndex];
                        if (currentSlide) {
                            currentSlide.classList.remove("active");
                            currentSlide.classList.add("previous");
                        }

                        detailsCurrentIndex = (detailsCurrentIndex + 1) % detailsSlides.length;

                        const nextSlide = detailsSlides[detailsCurrentIndex];
                        if (nextSlide) {
                            nextSlide.classList.remove("previous");
                            nextSlide.classList.add("active");
                        }
                    }, 2000); // 2 seconds interval
                }
            }

            // Load Inclusions list
            const inclusionsList = document.getElementById("detailsInclusions");
            if (inclusionsList) {
                inclusionsList.innerHTML = "";
                const inclusions = trek.inclusions || ["Guided Tour & Sightseeing", "Cozy Accommodations", "Meals", "Transport"];
                inclusions.forEach(inc => {
                    const li = document.createElement("li");
                    li.innerText = inc;
                    inclusionsList.appendChild(li);
                });
            }

            // Load Itinerary Timeline
            const itineraryContainer = document.getElementById("detailsItinerary");
            if (itineraryContainer) {
                itineraryContainer.innerHTML = "";
                trek.itinerary.forEach(step => {
                    const stepDiv = document.createElement("div");
                    stepDiv.className = "itinerary-step";
                    stepDiv.innerHTML = `
                        <h4 class="itinerary-step-title">${step.day}: ${step.title}</h4>
                        <p class="itinerary-step-desc">${step.desc}</p>
                    `;
                    itineraryContainer.appendChild(stepDiv);
                });
            }

            // Connect Book Buttons inside details page (left main card & right sidebar)
            const bookButtons = document.querySelectorAll("#detailsBookBtn, #detailsBookBtnMain, .details-body-section .btn-book-now");
            bookButtons.forEach(btn => {
                btn.onclick = (e) => {
                    e.stopPropagation();
                    openBookingWizard(trek.id);
                };
            });

            // Scroll to top of details page
            window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
            // Fallback to home if trek not found
            goHome();
        }
    } else {
        // Clear details slideshow if running
        if (window.detailsSlideshowInterval) {
            clearInterval(window.detailsSlideshowInterval);
            window.detailsSlideshowInterval = null;
        }
        // Clear filter if they navigated back to home via Logo or Home click
        if (!hash || hash === "#") {
            clearStateFilter();
        }
        // Show homepage, hide details page
        if (detailsPage.style.display !== "none") {
            detailsPage.style.display = "none";
            homePage.style.display = "block";



            // Show "BOOK TOUR" button in header on home page
            const bookTopBtn = document.querySelector(".btn-book-top");
            if (bookTopBtn) {
                bookTopBtn.style.display = "";
            }

            // Restore scroll position
            if (window.lastScrollY !== undefined) {
                window.scrollTo({ top: window.lastScrollY, behavior: 'instant' });
                window.lastScrollY = undefined;
            } else {
                // If direct link back, check if hash contains section id and scroll there
                if (hash && hash !== "#") {
                    const targetEl = document.querySelector(hash);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        }
    }
}

// Booking Wizard State Management
function populateTrekDropdown() {
    const select = document.getElementById("wizardTrekSelect");
    if (!select) return;
    select.innerHTML = "";
    TREKS_DATA.forEach(trek => {
        const option = document.createElement("option");
        option.value = trek.id;
        option.innerText = `${trek.title} (₹${trek.price.toLocaleString('en-IN')})`;
        select.appendChild(option);
    });
}

function openBookingWizard(trekId = '') {
    currentBookingStep = 1;
    goToStep(1);

    // Setup preselected trek if provided
    const select = document.getElementById("wizardTrekSelect");
    if (select && trekId) {
        select.value = trekId;
    }

    // Clear inputs
    document.getElementById("wizardDate").value = "";
    document.getElementById("wizardTrekkersCount").value = 1;
    document.getElementById("wizardName").value = "";
    document.getElementById("wizardEmail").value = "";
    document.getElementById("wizardPhone").value = "";

    const noRadio = document.querySelector('input[name="wizardTransport"][value="no"]');
    if (noRadio) {
        noRadio.checked = true;
    }

    updateBookingSummary();
    openModal("bookingWizardModal");
}

function goToStep(stepNum) {
    // Validate fields before proceeding to next steps
    if (stepNum === 2 && currentBookingStep === 1) {
        const dateVal = document.getElementById("wizardDate").value;
        if (!dateVal) {
            alert("Please choose a batch start date.");
            return;
        }
    }

    if (stepNum === 3 && currentBookingStep === 2) {
        const nameVal = document.getElementById("wizardName").value.trim();
        const emailVal = document.getElementById("wizardEmail").value.trim();
        const phoneVal = document.getElementById("wizardPhone").value.trim();
        const trekkersCount = parseInt(document.getElementById("wizardTrekkersCount").value) || 1;

        if (!nameVal || !emailVal || !phoneVal) {
            alert("Please complete name, email, and WhatsApp number fields.");
            return;
        }

        if (trekkersCount < 1) {
            alert("Number of trekkers must be at least 1.");
            return;
        }
    }

    currentBookingStep = stepNum;

    // Hide all steps, show current
    const steps = document.querySelectorAll(".wizard-step");
    steps.forEach(step => step.classList.remove("active"));

    const currentStepDiv = document.getElementById(`wizardStep${stepNum}`);
    if (currentStepDiv) {
        currentStepDiv.classList.add("active");
    }

    // Update step header indicators
    const indicators = document.querySelectorAll(".progress-step");
    indicators.forEach((ind, index) => {
        if (index + 1 <= stepNum) {
            ind.classList.add("active");
        } else {
            ind.classList.remove("active");
        }
    });

    updateBookingSummary();
}

// Support search selection directly from popular links
function selectTrekSearch(name) {
    const trek = TREKS_DATA.find(t => t.title.toLowerCase().includes(name.toLowerCase()));
    if (trek) {
        navigateToTrek(trek.id);
    }
}

function updateBookingSummary() {
    const select = document.getElementById("wizardTrekSelect");
    if (!select) return;
    const selectedId = select.value;
    const trek = TREKS_DATA.find(t => t.id === selectedId);
    if (!trek) return;

    const date = document.getElementById("wizardDate").value || "Not selected";
    const trekkers = parseInt(document.getElementById("wizardTrekkersCount").value) || 1;

    // Handle Transport Group Visibility
    const transportGroup = document.getElementById("wizardTransportGroup");
    const transportRadio = document.querySelector('input[name="wizardTransport"]:checked');
    let hasOwnTransport = trek.ownTransportPrice !== undefined;

    if (transportGroup) {
        if (hasOwnTransport) {
            transportGroup.style.display = "block";
        } else {
            transportGroup.style.display = "none";
            const noRadio = document.querySelector('input[name="wizardTransport"][value="no"]');
            if (noRadio) noRadio.checked = true; // Default back to No
        }
    }

    // Calculate Cost based on Transport Choice
    let perHeadPrice = trek.price;
    let transportText = "Includes Transportation";
    if (hasOwnTransport && transportRadio && transportRadio.value === "yes") {
        perHeadPrice = trek.ownTransportPrice;
        transportText = "Own Transportation";
    }

    const totalCost = perHeadPrice * trekkers;

    // Formatted date helper
    let formattedDate = date;
    if (date !== "Not selected") {
        const d = new Date(date);
        formattedDate = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    document.getElementById("summaryTrekName").innerText = trek.title;
    document.getElementById("summaryDate").innerText = formattedDate;
    document.getElementById("summaryTrekkers").innerText = `${trekkers} Trekker(s)`;
    document.getElementById("summaryTotal").innerText = `₹${totalCost.toLocaleString('en-IN')}`;

    // Update summary rows for transport and advance payments
    const rowSummaryTransport = document.getElementById("rowSummaryTransport");
    const summaryTransport = document.getElementById("summaryTransport");
    const rowSummaryAdvance = document.getElementById("rowSummaryAdvance");
    const summaryAdvance = document.getElementById("summaryAdvance");

    if (rowSummaryTransport && summaryTransport) {
        if (hasOwnTransport) {
            summaryTransport.innerText = transportText;
            rowSummaryTransport.style.display = "flex";
        } else {
            rowSummaryTransport.style.display = "none";
        }
    }

    if (rowSummaryAdvance && summaryAdvance) {
        if (trek.advanceAmount) {
            const totalAdvance = trek.advanceAmount * trekkers;
            summaryAdvance.innerText = `₹${totalAdvance.toLocaleString('en-IN')} (₹${trek.advanceAmount.toLocaleString('en-IN')} x ${trekkers})`;
            rowSummaryAdvance.style.display = "flex";
        } else {
            rowSummaryAdvance.style.display = "none";
        }
    }
}

function submitBookingInquiry() {
    // Collect inquiry details
    const select = document.getElementById("wizardTrekSelect");
    const selectedId = select ? select.value : "";
    const trek = TREKS_DATA.find(t => t.id === selectedId);

    const trekTitle = select ? select.options[select.selectedIndex].text : "";
    const dateVal = document.getElementById("wizardDate").value;
    const trekkersVal = document.getElementById("wizardTrekkersCount").value || 1;
    const nameVal = document.getElementById("wizardName").value;
    const emailVal = document.getElementById("wizardEmail").value;
    const phoneVal = document.getElementById("wizardPhone").value;
    const totalCostText = document.getElementById("summaryTotal").innerText;

    // Format date nicely
    let formattedDate = dateVal;
    if (dateVal) {
        const d = new Date(dateVal);
        formattedDate = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    const transportRadio = document.querySelector('input[name="wizardTransport"]:checked');
    const rowSummaryTransport = document.getElementById("rowSummaryTransport");
    const summaryAdvanceText = document.getElementById("summaryAdvance") ? document.getElementById("summaryAdvance").innerText : "";
    const rowSummaryAdvance = document.getElementById("rowSummaryAdvance");

    let transportInfo = "";
    if (rowSummaryTransport && rowSummaryTransport.style.display !== "none" && transportRadio) {
        const selectedTransport = transportRadio.value === "yes" ? "Own Transportation" : "Includes Transportation";
        transportInfo = `*Transport:* ${selectedTransport}\n`;
    }

    let advanceInfo = "";
    if (rowSummaryAdvance && rowSummaryAdvance.style.display !== "none" && summaryAdvanceText) {
        advanceInfo = `*Booking Advance:* ${summaryAdvanceText}\n`;
    }

    // Construct the WhatsApp message text
    const message = `*New Booking Inquiry - Rahasya Daari*\n` +
        `------------------------------------\n` +
        `*Trek/Tour:* ${trekTitle}\n` +
        `*Date:* ${formattedDate}\n` +
        `*Trekkers:* ${trekkersVal}\n` +
        transportInfo +
        advanceInfo +
        `*Estimated Total:* ${totalCostText}\n\n` +
        `*Primary Contact Details:*\n` +
        `- Name: ${nameVal}\n` +
        `- Email: ${emailVal}\n` +
        `- WhatsApp Number: ${phoneVal}`;

    // Construct WhatsApp Click-to-Chat URL
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/919632961606?text=${encodedMessage}`;

    // Try to open it in a new window/tab automatically
    window.open(waUrl, '_blank');

    // Attach click handler to the success button for manual resending
    const waBtn = document.getElementById("wizardSuccessWhatsAppBtn");
    if (waBtn) {
        waBtn.onclick = () => {
            window.open(waUrl, '_blank');
        };
    }

    // Success State Transition
    const steps = document.querySelectorAll(".wizard-step");
    steps.forEach(step => step.classList.remove("active"));

    // Hide progress bar header in success state
    document.getElementById("wizardSuccess").classList.add("active");

    // Reset/Hide step indicators
    const indicators = document.querySelectorAll(".progress-step");
    indicators.forEach(ind => ind.classList.add("active"));
}

// Contact form submit logic
function handleContactSubmit(event) {
    event.preventDefault();

    // Retrieve input values
    const nameVal = document.getElementById("contactName").value;
    const emailVal = document.getElementById("contactEmail").value;
    const messageVal = document.getElementById("contactMessage").value;

    // Construct the WhatsApp message text
    const message = `*New Contact Inquiry - Rahasya Daari*\n` +
        `------------------------------------\n` +
        `*Name:* ${nameVal}\n` +
        `*Email:* ${emailVal}\n\n` +
        `*Message:*\n${messageVal}`;

    // Construct WhatsApp Click-to-Chat URL
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/919632961606?text=${encodedMessage}`;

    // Open in a new window/tab automatically
    window.open(waUrl, '_blank');

    // Hide form inputs and show success message
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("contactSuccess");

    if (form && successMsg) {
        form.style.opacity = "0.2";
        form.style.pointerEvents = "none";
        successMsg.classList.add("active");
    }

    // Set flag and hide the floating button permanently
    sessionStorage.setItem("hasContactedUs", "true");
    const floatBtn = document.getElementById("floatingInquiryBtn");
    if (floatBtn) {
        floatBtn.classList.remove("show");
    }
}

// Hero background slideshow animator
function startHeroSlideshow() {
    if (window.heroSlideshowStarted) return;
    window.heroSlideshowStarted = true;

    const sliderContainer = document.querySelector(".hero-bg-slider");
    if (sliderContainer && window.IMAGES && Array.isArray(window.IMAGES.heroSlides) && window.IMAGES.heroSlides.length > 0) {
        sliderContainer.innerHTML = "";
        window.IMAGES.heroSlides.forEach((imgUrl, idx) => {
            const slide = document.createElement("div");
            slide.className = `hero-bg-slide ${idx === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url('${imgUrl}')`;
            sliderContainer.appendChild(slide);
        });
    }

    const slides = document.querySelectorAll(".hero-bg-slide");
    if (slides.length <= 1) return;

    let currentIndex = 0;

    setInterval(() => {
        // Clear 'previous' class from all slides to keep DOM clean
        slides.forEach(slide => slide.classList.remove("previous"));

        const currentSlide = slides[currentIndex];
        if (currentSlide) {
            currentSlide.classList.remove("active");
            currentSlide.classList.add("previous");
        }

        currentIndex = (currentIndex + 1) % slides.length;

        const nextSlide = slides[currentIndex];
        if (nextSlide) {
            nextSlide.classList.remove("previous");
            nextSlide.classList.add("active");
        }
    }, 4000); // Transitions background slide every 4 seconds
}

// Custom handler for Instagram to force native app deep linking on mobile devices
function openInstagram(event) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        event.preventDefault();

        // Try opening directly in Instagram native app
        window.location.href = "instagram://user?username=rahasya_daari";

        // Fallback to web link in a new tab if app is not opening after 1.2 seconds
        setTimeout(() => {
            window.open("https://www.instagram.com/rahasya_daari/", "_blank");
        }, 1200);
    }
    // On desktop / non-mobile devices, the default link runs normally (target="_blank")
}

// Dynamic Information Modal loader for Safety and Terms in the footer
function openInfoModal(type) {
    const titleEl = document.getElementById("infoModalTitle");
    const bodyEl = document.getElementById("infoModalBody");

    if (!titleEl || !bodyEl) return;

    let title = "";
    let content = "";

    switch (type) {
        case "safety":
            title = '<i class="fa-solid fa-shield-heart"></i> Safety Guidelines';
            content = `
                <p style="margin-bottom: 16px;">Trekking and adventure trips in the wilderness involve natural risks. We prioritize your safety above all else. Please read and adhere to our safety rules:</p>
                <ul style="padding-left: 20px; margin-bottom: 16px;">
                    <li style="margin-bottom: 8px;"><strong>Trek Discipline:</strong> Follow the trek leader's or pathfinder's instructions at all times. Do not stray away from the trail or group.</li>
                    <li style="margin-bottom: 8px;"><strong>Zero Tolerance Policy:</strong> Consumption of alcohol, smoking, or any form of narcotics during the trek is strictly prohibited. Violations will result in immediate termination from the trip.</li>
                    <li style="margin-bottom: 8px;"><strong>Health & Medical:</strong> Inform our team or your guide of any pre-existing health conditions or allergies before the trek starts. Carry your personal life-saving medicines.</li>
                    <li style="margin-bottom: 8px;"><strong>Weather Rules:</strong> In case of sudden forest closures, route blocks, or heavy downpours, the trek leader holds the right to alter the route or cancel the activity for safety reasons.</li>
                    <li style="margin-bottom: 8px;"><strong>Environmental Ethics:</strong> We support eco-friendly tourism. Do not throw plastic or litter. Carry all your trash back to the city.</li>
                </ul>
            `;
            break;
        case "gear":
            title = '<i class="fa-solid fa-person-hiking"></i> Gear Checklist';
            content = `
                <p style="margin-bottom: 16px;">Being well-prepared is key to a comfortable trek. Here is our recommended checklist for your backpack:</p>
                <ul style="padding-left: 20px; margin-bottom: 16px;">
                    <li style="margin-bottom: 8px;"><strong>Footwear:</strong> High-grip trekking shoes with deep treads. Avoid smooth running shoes, sandals, or flats. Carry extra pairs of socks.</li>
                    <li style="margin-bottom: 8px;"><strong>Clothing:</strong> Lightweight, quick-dry trekking wear. Carry at least one set of warm clothing (for cold/misty nights) and rain protection (raincoat/poncho).</li>
                    <li style="margin-bottom: 8px;"><strong>Luggage:</strong> A comfortable backpack (30L to 45L) with a waterproof cover. Avoid trolley bags or heavy suitcases.</li>
                    <li style="margin-bottom: 8px;"><strong>Hydration & Food:</strong> A reusable water bottle (minimum 2 liters capacity) and some energy bars or dry fruits.</li>
                    <li style="margin-bottom: 8px;"><strong>Personal Hygiene:</strong> Hand sanitizer, wet wipes, toiletries, sunscreen, lip balm, and insect repellent.</li>
                    <li style="margin-bottom: 8px;"><strong>Electronics:</strong> Power bank (no charging points at camp/base camps) and a headlamp or pocket torch.</li>
                </ul>
            `;
            break;
        case "refund":
            title = '<i class="fa-solid fa-wallet"></i> Refund Policy';
            content = `
                <p style="margin-bottom: 16px;">We understand plans change. Our refund and cancellation terms are outlined below:</p>
                <h4 style="margin-top: 16px; margin-bottom: 8px; color: var(--primary-green);">Cancellation by Participant:</h4>
                <ul style="padding-left: 20px; margin-bottom: 16px;">
                    <li style="margin-bottom: 8px;"><strong>Confirmation Advance:</strong> The booking confirmation advance amount is non-refundable, as it is utilized immediately for booking homestays, transport blockings, and forest entry permits.</li>
                    <li style="margin-bottom: 8px;"><strong>7 Days or More:</strong> 50% of the remaining booking cost is refundable.</li>
                    <li style="margin-bottom: 8px;"><strong>Less than 3 Days:</strong> No refund or transfers will be provided for cancellations made less than 72 hours before the pickup date.</li>
                </ul>
                <h4 style="margin-top: 16px; margin-bottom: 8px; color: var(--primary-green);">Cancellation by Rahasya Daari:</h4>
                <ul style="padding-left: 20px;">
                    <li style="margin-bottom: 8px;">If we cancel a trek due to natural disasters, unexpected permit closures, or severe weather issues, a <strong>100% refund</strong> of the booking advance/total amount will be issued to you.</li>
                </ul>
            `;
            break;
        case "terms":
            title = '<i class="fa-solid fa-file-contract"></i> Terms & Conditions';
            content = `
                <p style="margin-bottom: 16px;">By booking a trip with Rahasya Daari, you agree to the following terms and rules:</p>
                <ul style="padding-left: 20px; margin-bottom: 16px;">
                    <li style="margin-bottom: 8px;"><strong>Booking Status:</strong> All bookings are provisional and confirmed only upon receiving the advance booking amount.</li>
                    <li style="margin-bottom: 8px;"><strong>Age & Fitness:</strong> The participant must be minimum 12 years of age and in sound physical and mental condition suited for high-altitude treks.</li>
                    <li style="margin-bottom: 8px;"><strong>Exclusions:</strong> We are not responsible for any personal expenditures, custom medical expenses, or luggage transport outside of the defined itinerary inclusions.</li>
                    <li style="margin-bottom: 8px;"><strong>Behavior:</strong> Any misconduct, misbehavior with local guides, host staff, or fellow travelers will result in immediate termination of the trip without refund.</li>
                    <li style="margin-bottom: 8px;"><strong>Liability Waiver:</strong> Trekking involves traversing rugged, wilderness zones. Rahasya Daari and its coordinators are not liable for any accidents, physical injuries, illnesses, or loss of personal gear.</li>
                </ul>
            `;
            break;
        default:
            title = "Information";
            content = "<p>No information available.</p>";
    }

    titleEl.innerHTML = title;
    bodyEl.innerHTML = content;
    openModal("infoModal");
}

// Quick Inquiry submit logic via WhatsApp
function handleQuickInquirySubmit(event) {
    event.preventDefault();

    const nameVal = document.getElementById("inquiryName").value;
    const emailVal = document.getElementById("inquiryEmail").value;
    const messageVal = document.getElementById("inquiryMessage").value;

    const message = `*Quick Inquiry - Rahasya Daari*\n` +
        `------------------------------------\n` +
        `*Name:* ${nameVal}\n` +
        `*Email:* ${emailVal}\n\n` +
        `*Message:*\n${messageVal}`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/919632961606?text=${encodedMessage}`;

    window.open(waUrl, '_blank');

    closeModal("quickInquiryModal");
    
    // Clear the form fields
    document.getElementById("quickInquiryForm").reset();

    // Set flag and hide the floating button permanently
    sessionStorage.setItem("hasContactedUs", "true");
    const floatBtn = document.getElementById("floatingInquiryBtn");
    if (floatBtn) {
        floatBtn.classList.remove("show");
    }
}

// ==========================================================================
// Scroll Progress & Hardware-Accelerated Reveal Engine (Design Skills)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Progress Bar Tracker
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress-bar";
    document.body.appendChild(progressBar);

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;

        // Dynamic header background on scroll
        if (header) {
            if (scrollTop > 40) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        }
    }, { passive: true });

    // 2. IntersectionObserver for Reveal Animations
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -40px 0px"
        });

        document.querySelectorAll(".reveal-fade-up, .reveal-fade-in, .landing-trail-card, .video-short-card, .google-review-card-clean, .insta-reel-card, .gear-card, .feature-box").forEach(el => {
            if (!el.classList.contains("reveal-fade-up") && !el.classList.contains("reveal-fade-in")) {
                el.classList.add("reveal-fade-up");
            }
            revealObserver.observe(el);
        });
    }
});

// ==========================================================================
// Interactive Video Player Modal (Plays YouTube Shorts & Reels Inside Site)
// ==========================================================================
function playVideoModal(videoId) {
    let modal = document.getElementById("videoPlayerModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "videoPlayerModal";
        modal.className = "video-player-modal";
        modal.innerHTML = `
            <div class="video-modal-backdrop" onclick="closeVideoModal()"></div>
            <div class="video-modal-container">
                <button class="video-modal-close" onclick="closeVideoModal()" aria-label="Close video"><i class="fa-solid fa-xmark"></i></button>
                <div class="video-iframe-wrapper">
                    <iframe id="videoModalIframe" title="YouTube video player" src="about:blank" style="border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    const iframe = document.getElementById("videoModalIframe");
    if (iframe) {
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeVideoModal() {
    const modal = document.getElementById("videoPlayerModal");
    if (modal) {
        modal.classList.remove("active");
        const iframe = document.getElementById("videoModalIframe");
        if (iframe) {
            iframe.src = "";
        }
        document.body.style.overflow = "";
    }
}

// ==========================================================================
// YouTube Shorts & Video Cinema Integration (Config-Driven & Modal Player)
// ==========================================================================
function extractYouTubeVideoId(item) {
    if (!item) return "";
    const raw = typeof item === "string" ? item : (item.id || item.url || "");
    const shortsMatch = raw.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
    if (shortsMatch && shortsMatch[1]) return shortsMatch[1];
    const watchMatch = raw.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch && watchMatch[1]) return watchMatch[1];
    const shareMatch = raw.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (shareMatch && shareMatch[1]) return shareMatch[1];
    return raw.replace(/[^a-zA-Z0-9_-]/g, "");
}

function renderDynamicYouTubeVideos() {
    const grid = document.querySelector(".video-shorts-grid");
    if (!grid) return;

    if (typeof RAHASYA_YOUTUBE_VIDEOS !== "undefined" && Array.isArray(RAHASYA_YOUTUBE_VIDEOS) && RAHASYA_YOUTUBE_VIDEOS.length > 0) {
        grid.innerHTML = "";
        RAHASYA_YOUTUBE_VIDEOS.forEach((vidObj) => {
            const vidId = extractYouTubeVideoId(vidObj);
            if (!vidId) return;
            const title = (typeof vidObj === "object" && vidObj.title) ? vidObj.title : "Expedition Video";
            const author = (typeof vidObj === "object" && vidObj.author) ? vidObj.author : "Rahasya Daari";
            const thumb = (typeof vidObj === "object" && vidObj.thumbnail) ? vidObj.thumbnail : `https://img.youtube.com/vi/${vidId}/hqdefault.jpg`;

            const card = document.createElement("div");
            card.className = "video-short-card";
            card.title = "Play Expedition Video";
            card.onclick = function() { playVideoModal(vidId); };
            card.innerHTML = `
                <img src="${thumb}" alt="${title}" class="video-short-thumb" loading="lazy">
                <div class="video-short-overlay">
                    <div class="video-play-btn"><i class="fa-solid fa-play"></i></div>
                    <div class="video-short-bottom">
                        <h3 class="video-short-title">${title}</h3>
                        <div class="video-short-author"><i class="fa-brands fa-youtube" style="color: #FF0000;"></i> ${author} • Click to Play <i class="fa-solid fa-circle-play" style="font-size: 0.75rem; margin-left: 4px;"></i></div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// ==========================================================================
// Google Live Reviews & Infinite Marquee Loop Renderer
// ==========================================================================
function renderDynamicGoogleReviews() {
    const track = document.getElementById("googleReviewsTrack");
    if (!track) return;

    if (typeof RAHASYA_GOOGLE_REVIEWS_CONFIG !== "undefined" && RAHASYA_GOOGLE_REVIEWS_CONFIG.reviews) {
        const conf = RAHASYA_GOOGLE_REVIEWS_CONFIG;
        
        // Update summary metrics if elements exist
        const scoreDigit = document.querySelector(".google-score-digit");
        if (scoreDigit && conf.summary && conf.summary.score) {
            scoreDigit.textContent = conf.summary.score.toFixed(1);
        }
        const trustSubtext = document.querySelector(".google-trust-subtext");
        if (trustSubtext && conf.summary) {
            trustSubtext.innerHTML = `
                <span class="trust-badge-pill"><i class="fa-solid fa-circle-check"></i> ${conf.summary.ratingWord || "EXCELLENT"}</span>
                <span>Based on <strong>${conf.summary.totalReviews || "650+"} verified ratings</strong> on Google Maps</span>
            `;
        }

        const buildCardHtml = (r) => `
            <div class="google-review-card-clean">
                <div>
                    <div class="google-review-user-row">
                        <div class="reviewer-identity">
                            <div class="reviewer-avatar" style="background: ${r.avatarBg || '#183e20'};">${r.avatarLetter || r.name.charAt(0)}</div>
                            <div class="reviewer-details">
                                <h4>${r.name}</h4>
                                <p><span class="guide-tag"><svg viewBox="0 0 24 24" width="12" height="12"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"/></svg> ${r.badge || "Verified Trekker"}</span></p>
                            </div>
                        </div>
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"/>
                        </svg>
                    </div>
                    <div class="google-stars-row" style="font-size: 0.9rem; margin: 10px 0 12px;">
                        ${Array(r.stars || 5).fill('<i class="fa-solid fa-star"></i>').join('')}
                    </div>
                    <p class="google-review-text">"${r.text}"</p>
                </div>
                <div class="review-card-footer">
                    <span class="review-trail-pill"><i class="fa-solid fa-location-dot"></i> ${r.trek || "Western Ghats"}</span>
                    <span class="review-verified-text"><i class="fa-solid fa-shield-check"></i> ${r.timeAgo || "Verified Trekker"}</span>
                </div>
            </div>
        `;

        // Render double sets to enable seamless infinite marquee looping
        const cardsHtml = conf.reviews.map(buildCardHtml).join('');
        track.innerHTML = cardsHtml + cardsHtml;
    }
}

// ==========================================================================
// Interactive Stage Showcase for Phone Mockups (Desktop Hover & Scroll Stage)
// ==========================================================================
function extractInstagramReelId(item) {
    if (!item) return "";
    const raw = typeof item === "string" ? item : (item.id || item.url || "");
    const match = raw.match(/\/(?:reel|p|tv)\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) return match[1];
    return raw.replace(/[^a-zA-Z0-9_-]/g, "");
}

function initPhoneMockupStage() {
    const grid = document.querySelector(".insta-reels-grid");
    if (!grid) return;

    // If RAHASYA_INSTAGRAM_REELS array is defined in reels-data.js, render automatically
    if (typeof RAHASYA_INSTAGRAM_REELS !== "undefined" && Array.isArray(RAHASYA_INSTAGRAM_REELS) && RAHASYA_INSTAGRAM_REELS.length > 0) {
        grid.innerHTML = "";
        RAHASYA_INSTAGRAM_REELS.forEach((reelObj) => {
            const reelId = extractInstagramReelId(reelObj);
            if (!reelId) return;
            const title = (typeof reelObj === "object" && reelObj.title) ? reelObj.title : "Instagram Reel";

            const phoneMockup = document.createElement("div");
            phoneMockup.className = "phone-reel-mockup";
            phoneMockup.innerHTML = `
                <div class="phone-screen">
                    <div class="reel-skeleton-loader">
                        <div class="skeleton-header">
                            <div class="skeleton-avatar skeleton-shimmer"></div>
                            <div class="skeleton-user-meta">
                                <div class="skeleton-line skeleton-line-title skeleton-shimmer"></div>
                                <div class="skeleton-line skeleton-line-sub skeleton-shimmer"></div>
                            </div>
                        </div>
                        <div class="skeleton-video-body skeleton-shimmer">
                            <div class="skeleton-play-icon"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <div class="skeleton-footer">
                            <div class="skeleton-line skeleton-line-desc skeleton-shimmer"></div>
                            <div class="skeleton-line skeleton-line-sub skeleton-shimmer"></div>
                        </div>
                    </div>
                    <iframe src="https://www.instagram.com/reel/${reelId}/embed/" loading="lazy" title="${title}" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen style="border:0;" onload="if(this.previousElementSibling) this.previousElementSibling.classList.add('fade-out');"></iframe>
                </div>
            `;
            grid.appendChild(phoneMockup);
        });
    }

    const phones = grid.querySelectorAll(".phone-reel-mockup");
    if (!phones.length) return;

    const dotsContainer = document.getElementById("stageDots");

    function setActivePhone(index) {
        if (index < 0 || index >= phones.length) return;
        phones.forEach((p, i) => {
            const isTarget = i === index;
            p.classList.toggle("is-active", isTarget);
            if (dotsContainer && dotsContainer.children[i]) {
                dotsContainer.children[i].classList.toggle("active", isTarget);
            }
        });
    }

    // Build interactive dots
    if (dotsContainer) {
        dotsContainer.innerHTML = "";
        phones.forEach((_, idx) => {
            const dot = document.createElement("div");
            dot.className = `stage-dot ${idx === 1 ? "active" : ""}`;
            dot.addEventListener("click", () => {
                setActivePhone(idx);
                phones[idx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            });
            dotsContainer.appendChild(dot);
        });
    }

    // Set center phone (index 1) as default active
    const defaultIdx = phones.length > 2 ? 1 : 0;
    setActivePhone(defaultIdx);

    let isThrottled = false;
    function updateActivePhoneOnScroll() {
        if (isThrottled) return;
        isThrottled = true;
        requestAnimationFrame(() => {
            const gridRect = grid.getBoundingClientRect();
            const gridCenter = gridRect.left + gridRect.width / 2;

            let closestIdx = 0;
            let minDistance = Infinity;

            phones.forEach((phone, idx) => {
                const phoneRect = phone.getBoundingClientRect();
                const phoneCenter = phoneRect.left + phoneRect.width / 2;
                const distance = Math.abs(gridCenter - phoneCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIdx = idx;
                }
            });

            setActivePhone(closestIdx);
            isThrottled = false;
        });
    }

    grid.addEventListener("scroll", updateActivePhoneOnScroll, { passive: true });

    phones.forEach((phone, idx) => {
        // Desktop hover: immediately highlight hovered phone including the last one
        phone.addEventListener("mouseenter", () => {
            setActivePhone(idx);
        });

        // Click to focus and center
        phone.addEventListener("click", () => {
            setActivePhone(idx);
            phone.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        });
    });
}

function slideReelStage(direction) {
    const grid = document.querySelector(".insta-reels-grid");
    if (!grid) return;
    const phones = grid.querySelectorAll(".phone-reel-mockup");
    if (!phones.length) return;

    let activeIdx = Array.from(phones).findIndex(p => p.classList.contains("is-active"));
    if (activeIdx === -1) activeIdx = 0;

    // Smooth continuous loop
    let targetIdx = (activeIdx + direction + phones.length) % phones.length;

    phones.forEach((p, i) => {
        const isTarget = i === targetIdx;
        p.classList.toggle("is-active", isTarget);
        const dotsContainer = document.getElementById("stageDots");
        if (dotsContainer && dotsContainer.children[i]) {
            dotsContainer.children[i].classList.toggle("active", isTarget);
        }
    });

    phones[targetIdx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

// Ensure Reviews, YouTube, Instagram Embeds, Phone Mockup, and Hero Slideshow initialize on DOM load
document.addEventListener("DOMContentLoaded", function() {
    startHeroSlideshow();
    renderDynamicGoogleReviews();
    renderDynamicYouTubeVideos();
    initPhoneMockupStage();
    if (typeof fetchLiveGoogleRatings === "function") {
        fetchLiveGoogleRatings().then(() => renderDynamicGoogleReviews());
    }
});
window.addEventListener("load", function() {
    startHeroSlideshow();
    renderDynamicGoogleReviews();
    renderDynamicYouTubeVideos();
    initPhoneMockupStage();
    if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
    }
});

// Smooth Scroll to Category Section from Quick Navigation & Sync State
function scrollToTripSection(sectionId) {
    if (!sectionId) return;
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    const headerOffset = 90;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    // Update active pill state
    document.querySelectorAll('.trip-radio-pill').forEach(pill => {
        if (pill.getAttribute('data-target') === sectionId) {
            pill.classList.add('active');
            const radio = pill.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        } else {
            pill.classList.remove('active');
        }
    });

    // Sync dropdown value
    const select = document.getElementById('tripCategorySelect');
    if (select && select.value !== sectionId) {
        select.value = sectionId;
    }
}
window.scrollToTripSection = scrollToTripSection;
