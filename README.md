# 🏪 Business Website Template
## Built with Claude Code | Reusable for Any Business

---

## 📁 File Structure
```
mode-salon-east/
├── config.js        ← ⭐ EDIT THIS for a new business (all info lives here)
├── style.css        ← Design & colors (change colors in config.js)
├── index.html       ← Homepage
├── services.html    ← Services & Pricing
├── booking.html     ← Appointment Booking Form
├── reviews.html     ← Client Reviews
├── gallery.html     ← Photo Gallery
├── contact.html     ← Contact & Hours
└── images/
    └── gallery/     ← Add real photos here
```

---

## 🔁 HOW TO REUSE FOR A NEW CLIENT

### Step 1 - Copy the folder
Copy the entire `mode-salon-east` folder and rename it to the new business name.

### Step 2 - Edit config.js ONLY
Open `config.js` and update these sections:
- `name`, `tagline`, `description`, `aboutText`
- `phone`, `email`, `address`
- `hours`
- `social` links (Yelp, Google, Facebook, Instagram)
- `colors` (to match brand)
- `services` (add/remove/edit all services)
- `reviews` (paste real reviews)
- `bookingServices` (dropdown options for booking form)

### Step 3 - Add photos
Drop real photos into `images/gallery/` and update filenames in `gallery.html`

### Step 4 - Upload to GitHub
Follow Phase 2 steps below.

That's it! The entire site updates from config.js alone.

---

## 🚀 DEPLOYMENT PHASES

### ✅ Phase 1 - Website Built (DONE)
All 6 pages built and working.

---

### 📋 Phase 2 - GitHub Setup
1. Go to github.com and create a free account
2. Click "New Repository"
3. Name it: `business-name-website` (e.g. `mode-salon-east`)
4. Set to Public
5. Click "Create Repository"
6. Upload all files (drag & drop in browser or use Git commands below)
7. Go to Settings → Pages → Source: main branch → Save
8. Your site will be live at: `yourusername.github.io/repo-name`

**Git commands (if using terminal):**
```bash
git init
git add .
git commit -m "Initial website build"
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

---

### 📋 Phase 3 - Formspree (Booking & Contact Forms)
**Purpose:** You receive an email every time someone fills out a form.

1. Go to formspree.io → Sign up free
2. Click "New Form" → Name it "Booking Form"
3. Copy your Form ID (looks like: `xpzgkwrj`)
4. Open `booking.html` and replace `YOUR_FORM_ID` with your real ID:
   ```html
   action="https://formspree.io/f/xpzgkwrj"
   ```
5. Repeat for `contact.html` with a second form called "Contact Form"
6. Test by submitting the form — you'll get an email!

---

### 📋 Phase 4 - EmailJS (Client Confirmation Emails)
**Purpose:** Client automatically gets a confirmation email after booking.

1. Go to emailjs.com → Sign up free
2. Add Email Service → Connect your Gmail or email provider
3. Create Email Template → Use this template:
   ```
   Subject: Appointment Confirmed - {{business_name}}

   Hi {{to_name}},

   Your appointment has been requested!

   Service: {{service}}
   Date: {{date}}
   Time: {{time}}

   Location: {{business_name}}
   Address: [Your Address]
   Phone: {{business_phone}}

   We look forward to seeing you!
   ```
4. Copy your: Service ID, Template ID, Public Key
5. Open `config.js` and fill in the `integrations` section:
   ```javascript
   integrations: {
     emailjsServiceId:  "service_xxxxxxx",
     emailjsTemplateId: "template_xxxxxxx",
     emailjsPublicKey:  "xxxxxxxxxxxx",
   }
   ```
6. Open `booking.html` and uncomment the EmailJS code block (remove the `//` comments)

---

### 📋 Phase 5 - Zapier (Reminder Emails)
**Purpose:** Automatically send reminder emails 24 hours before appointment.

1. Go to zapier.com → Sign up free
2. Create a new Zap:
   - **Trigger:** Formspree → New Submission
   - **Delay:** 1 day (or set to appointment time - 24 hours)
   - **Action:** Gmail/Email → Send Email
3. Map the fields:
   - To: client email from form
   - Subject: "Reminder: Your appointment tomorrow at [Business Name]"
   - Body: Include service, date, time, address
4. Turn Zap on → Done!

---

### 📋 Phase 6 - Custom Domain (Optional)
**Purpose:** Use `modesaloneast.com` instead of `yourusername.github.io/...`

1. Buy domain from Namecheap, GoDaddy, or Google Domains (~$12/year)
2. In GitHub Pages settings → Add custom domain
3. Update DNS settings with your domain registrar
4. Done! Takes 24-48 hours to go live.

---

## 🎨 COLOR CUSTOMIZATION
Change these in `config.js` under `colors`:
```javascript
colors: {
  cream:      "#fdf6f0",   // Page background
  warmBrown:  "#c87941",   // Accent / buttons
  darkBrown:  "#5c3d2e",   // Headers / footer
  lightTan:   "#f0e0d0",   // Cards / borders
}
```
Then update the same values at the top of `style.css` under `:root {}`.

---

## 📞 SUPPORT
Built with Claude Code. To make changes, just describe what you want in plain English!
