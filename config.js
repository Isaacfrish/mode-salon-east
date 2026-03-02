/* ============================================================
   BUSINESS TEMPLATE CONFIG FILE
   ============================================================
   HOW TO REUSE THIS TEMPLATE FOR A NEW BUSINESS:
   1. Copy the entire "mode-salon-east" folder
   2. Rename the folder to the new business name
   3. Edit ONLY this file with the new business info
   4. Upload to GitHub and enable GitHub Pages
   5. Done! The whole site updates automatically.
   ============================================================ */

const BUSINESS = {

  /* ---- BASIC INFO ---- */
  name:         "Mode Salon East",
  shortName:    "Mode",           // Used in navbar logo
  highlightName:"Salon East",           // The part shown in accent color
  tagline:      "Where Beauty Flourishes",
  description:  "Gainesville's warm and welcoming salon experience since 2008. Expert stylists, competitive prices, and weekly specials.",
  aboutText:    "There are special places across the planet where beauty flourishes. You feel it and become part of it at Mode Salon East. We opened in March of 2008 staffed with friends and family. Our team can accommodate any price point and we always have weekly specials.",
  founded:      "2008",
  type:         "Hair Salon",           // e.g. "Hair Salon", "Restaurant", "Gym"

  /* ---- CONTACT ---- */
  phone:        "(352) 374-3883",
  phoneRaw:     "3523743883",           // Numbers only for tel: links
  email:        "info@modesaloneast.com", // Update with real email
  address: {
    street:     "603 E University Ave",
    city:       "Gainesville",
    state:      "FL",
    zip:        "32601",
    full:       "603 E University Ave, Gainesville, FL 32601",
    mapEmbed:   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.5!2d-82.3138!3d29.6499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a3b1e2a8e3f1%3A0x1234567890abcdef!2s603%20E%20University%20Ave%2C%20Gainesville%2C%20FL%2032601!5e0!3m2!1sen!2sus!4v1234567890"
  },

  /* ---- HOURS ---- */
  // Set to null if closed that day
  hours: {
    monday:     "10:00 AM – 6:00 PM",
    tuesday:    "10:00 AM – 6:00 PM",
    wednesday:  "10:00 AM – 6:00 PM",
    thursday:   "10:00 AM – 6:00 PM",
    friday:     "10:00 AM – 6:00 PM",
    saturday:   "10:00 AM – 4:00 PM",
    sunday:     null                    // null = Closed
  },
  hoursShort:   "Mon–Fri: 10AM–6PM | Sat: 10AM–4PM",

  /* ---- SOCIAL & REVIEW LINKS ---- */
  social: {
    yelp:       "https://www.yelp.com/biz/mode-salon-east-gainesville",
    google:     "",                     // Add Google Business link
    facebook:   "",                     // Add Facebook page link
    instagram:  "",                     // Add Instagram link
  },
  yelpReviewCount: "97",

  /* ---- THEME COLORS ---- */
  // Change these to match the new business brand
  colors: {
    cream:      "#fdf6f0",
    warmBrown:  "#c87941",
    darkBrown:  "#5c3d2e",
    lightTan:   "#f0e0d0",
  },

  /* ---- AMENITIES ---- */
  amenities: [
    "Walk-ins Welcome",
    "Accepts Credit Cards",
    "Accepts Apple Pay",
    "Good for Kids"
  ],

  /* ---- SERVICES ---- */
  // Add, remove or edit services here
  // Each category has a name, icon, and list of services
  services: [
    {
      category:   "Haircuts & Styling",
      icon:       "✂️",
      label:      "Hair Services",
      items: [
        { name: "Women's Haircut",          description: "Shampoo, cut & style included",        price: "From $45" },
        { name: "Men's Haircut",            description: "Cut & style",                           price: "From $30" },
        { name: "Children's Haircut",       description: "12 and under",                          price: "From $20" },
        { name: "Blow Dry & Style",         description: "Professional finish",                   price: "From $35" },
        { name: "Special Occasion Styling", description: "Updos, braids, events",                 price: "From $65" },
      ]
    },
    {
      category:   "Hair Color & Highlights",
      icon:       "🎨",
      label:      "Color Services",
      items: [
        { name: "Full Color",               description: "Single process, root to tip",           price: "From $75"  },
        { name: "Partial Highlights",       description: "Face-framing & top sections",           price: "From $85"  },
        { name: "Full Highlights",          description: "All-over highlight treatment",          price: "From $120" },
        { name: "Balayage",                 description: "Hand-painted natural gradient",         price: "From $150" },
        { name: "Toner / Gloss",            description: "Tone & shine treatment",                price: "From $40"  },
      ]
    },
    {
      category:   "Facials & Skin Treatments",
      icon:       "🌿",
      label:      "Skin Care",
      items: [
        { name: "Classic Facial",           description: "Cleanse, exfoliate, mask & moisturize", price: "From $65" },
        { name: "Deep Cleansing Facial",    description: "Targets congestion and pores",          price: "From $80" },
        { name: "Anti-Aging Facial",        description: "Firming & rejuvenating treatment",      price: "From $95" },
      ]
    },
    {
      category:   "Men's Grooming",
      icon:       "💈",
      label:      "Barber Services",
      items: [
        { name: "Men's Cut & Style",        description: "Classic or modern cuts by Brent",       price: "From $30" },
        { name: "Beard Trim & Shape",       description: "Precision beard grooming",              price: "From $20" },
        { name: "Cut + Beard Combo",        description: "Full grooming package",                 price: "From $45" },
      ]
    }
  ],

  /* ---- REVIEWS ---- */
  // Add real reviews here - paste from Yelp/Google
  reviews: [
    {
      text:       "This is the best salon I've ever been to, and Emily Claire is the best hair stylist I've ever been to!!!!!",
      author:     "Verified Yelp Review",
      stars:      5,
      source:     "Yelp"
    },
    {
      text:       "I usually get a beautiful facial from Jessica that includes so many extra touches.",
      author:     "Verified Yelp Review",
      stars:      5,
      source:     "Yelp"
    },
    {
      text:       "My barber was Brent and he was an absolute class act the entire time and extremely skilled at his craft!",
      author:     "Verified Yelp Review",
      stars:      5,
      source:     "Yelp"
    }
  ],

  /* ---- BOOKING FORM OPTIONS ---- */
  // Services shown in the booking dropdown
  bookingServices: [
    "Women's Haircut",
    "Men's Haircut",
    "Children's Haircut",
    "Blow Dry & Style",
    "Special Occasion Styling",
    "Full Color",
    "Partial Highlights",
    "Full Highlights",
    "Balayage",
    "Toner / Gloss",
    "Classic Facial",
    "Deep Cleansing Facial",
    "Anti-Aging Facial",
    "Men's Cut & Style",
    "Beard Trim & Shape",
    "Cut + Beard Combo",
    "Not Sure - Consultation"
  ],

  /* ---- STYLIST EMAILS ---- */
  // Email address for each stylist - used to notify them when booked
  stylists: {
    "Emily Claire": "isaacfrishberg@gmail.com",
    "Jessica":      "ifrishberg@ufl.edu",
    "Brent":        "ethan631@aol.com",
    "No Preference": "isaacfrishberg@gmail.com", // Owner gets it if no preference
  },

  /* ---- THIRD PARTY INTEGRATIONS ---- */
  // Fill these in during Phase 3, 4, 5 setup
  integrations: {
    formspreeId:       "",                      // From Formspree - added in Phase 3
    emailjsServiceId:  "service_2ja3dss",       // From EmailJS - added in Phase 4
    emailjsTemplateId: "template_agvds8i",      // From EmailJS - added in Phase 4
    emailjsPublicKey:  "ah2DZRBPhyLfaA_Wo",    // From EmailJS - added in Phase 4
    emailjsStylistTemplateId: "",               // Stylist notification template - Phase 4b
  },

  /* ---- SEO ---- */
  seoTitle:     "Mode Salon East | Hair Salon in Gainesville, FL",
  seoDesc:      "Mode Salon East - Gainesville's premier hair salon. Haircuts, color, facials and more at 603 E University Ave. Walk-ins welcome! Call (352) 374-3883.",

};

/* ============================================================
   HELPER FUNCTIONS - Do not edit these
   ============================================================ */

// Render star ratings
function renderStars(count) {
  return "★".repeat(count) + "☆".repeat(5 - count);
}

// Format hours for display
function getHoursDisplay() {
  const days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
  const labels = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  return days.map((day, i) => ({
    label: labels[i],
    hours: BUSINESS.hours[day] || "Closed",
    closed: !BUSINESS.hours[day]
  }));
}

// Inject nav into page
function renderNav(activePage) {
  return `
  <div class="info-bar">
    <span>📍 ${BUSINESS.address.full}</span>
    <a href="tel:${BUSINESS.phoneRaw}">📞 ${BUSINESS.phone}</a>
    <span>⏰ ${BUSINESS.hoursShort}</span>
  </div>
  <nav>
    <div class="nav-logo"><img src="https://isaacfrish.github.io/mode-salon-east/logo.png" alt="${BUSINESS.name}" style="height:50px; width:auto; object-fit:contain; vertical-align:middle;"/></div>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
      <li><a href="services.html" ${activePage==='services'?'class="active"':''}>Services</a></li>
      <li><a href="reviews.html" ${activePage==='reviews'?'class="active"':''}>Reviews</a></li>
      <li><a href="gallery.html" ${activePage==='gallery'?'class="active"':''}>Gallery</a></li>
      <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
      <li><a href="booking.html" class="nav-cta">Book Now</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </div>
  </nav>`;
}

// Inject footer into page
function renderFooter() {
  return `
  <footer>
    <div style="max-width: 1100px; margin: 0 auto;">
      <div class="footer-grid">
        <div>
          <div class="footer-logo"><img src="https://isaacfrish.github.io/mode-salon-east/logo.png" alt="${BUSINESS.name}" style="height:45px; width:auto; object-fit:contain; filter:brightness(0) invert(1);"/></div>
          <p class="footer-desc">${BUSINESS.aboutText}</p>
        </div>
        <div>
          <div class="footer-heading">Navigate</div>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="reviews.html">Reviews</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Services</div>
          <ul class="footer-links">
            ${BUSINESS.services.slice(0,5).map(s => `<li><a href="services.html">${s.category}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="footer-heading">Contact</div>
          <ul class="footer-links">
            <li><a href="tel:${BUSINESS.phoneRaw}">${BUSINESS.phone}</a></li>
            <li><a href="contact.html">${BUSINESS.address.street}</a></li>
            <li><a href="contact.html">${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}</a></li>
            <li><a href="booking.html">Book Appointment</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} ${BUSINESS.name}. All rights reserved.</p>
        <p>${BUSINESS.amenities.join(' · ')}</p>
      </div>
    </div>
  </footer>`;
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}
