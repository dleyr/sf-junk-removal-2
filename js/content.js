/**
 * ============================================================
 *  S&F JUNK REMOVAL — SITE CONTENT
 * ============================================================
 * This is the ONLY file you should need to edit to update the
 * text, contact info, services, pricing, FAQs, and service
 * areas shown on the website. Nothing here is fabricated —
 * anything you haven't confirmed yet is left as a clearly
 * editable placeholder. Replace placeholders with real
 * information before launch. See README.md for a full guide.
 * ============================================================
 */

const CONTENT = {

  // ----------------------------------------------------------
  // BUSINESS BASICS
  // ----------------------------------------------------------
  business: {
    name: "S&F Junk Removal",
    shortName: "S&F",
    tagline: "Junk gone. Space back.",
    phone: "(555) 010-0100",          // TODO: replace with real number
    phoneHref: "+15550100100",         // TODO: digits-only version for tel: links
    email: "hello@sfjunkremoval.com",  // TODO: replace with real email
    hours: "Mon–Sat, 8:00 AM – 6:00 PM", // TODO: confirm real hours
    // Leave address blank until a real, publishable business address exists.
    address: "",
    social: {
      // Add links only when real accounts exist, e.g. "https://instagram.com/sfjunkremoval"
      facebook: "",
      instagram: "",
      google: ""
    }
  },

  // ----------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------
  hero: {
    eyebrow: "Local Junk Removal",
    headline: "Junk gone. Space back.",
    subhead:
      "S&F Junk Removal clears out the stuff you don't want, so you can use the space you do. Tell us what needs to go and we'll take care of the rest — loading, hauling, and responsible disposal.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Call Us"
  },

  // ----------------------------------------------------------
  // SERVICES
  // Add, remove, or edit entries freely — the grid updates
  // automatically. "icon" refers to a key in ICONS (js/icons.js).
  // ----------------------------------------------------------
  services: [
    {
      id: "general",
      icon: "boxes",
      title: "General Junk Removal",
      description:
        "Old furniture, electronics, clutter, and everyday junk you want out of the house — gone in one trip."
    },
    {
      id: "furniture",
      icon: "sofa",
      title: "Furniture Removal",
      description:
        "Couches, mattresses, dressers, tables — heavy or awkward pieces removed without you having to lift a finger."
    },
    {
      id: "appliance",
      icon: "appliance",
      title: "Appliance Removal",
      description:
        "Refrigerators, washers, dryers, and other bulky appliances hauled away and disposed of responsibly."
    },
    {
      id: "garage",
      icon: "garage",
      title: "Garage Cleanouts",
      description:
        "Reclaim your garage from years of accumulated boxes, tools, and things you forgot you had."
    },
    {
      id: "yard",
      icon: "yard",
      title: "Yard Waste Removal",
      description:
        "Branches, brush, old fencing, and general yard debris cleared so your outdoor space looks its best."
    },
    {
      id: "construction",
      icon: "construction",
      title: "Construction & Debris Removal",
      description:
        "Leftover materials and debris from renovation or small construction projects hauled off-site."
    }
  ],

  // ----------------------------------------------------------
  // HOW IT WORKS
  // ----------------------------------------------------------
  process: [
    {
      step: "01",
      title: "Request a Quote",
      description: "Tell us what needs to go, using the form or a quick call."
    },
    {
      step: "02",
      title: "Get Your Estimate",
      description: "Share a few details or photos and we'll get back to you with an estimate."
    },
    {
      step: "03",
      title: "We Handle the Removal",
      description: "Once approved, our team shows up and removes the items you've confirmed."
    },
    {
      step: "04",
      title: "Enjoy Your Space",
      description: "We haul it away and leave the area clean and clutter-free."
    }
  ],

  // ----------------------------------------------------------
  // WHY CHOOSE US
  // ----------------------------------------------------------
  whyChooseUs: [
    {
      title: "Straightforward Communication",
      description: "Clear quotes and honest answers — no runaround, no surprise fees sprung on you last minute."
    },
    {
      title: "Convenient Scheduling",
      description: "Request a quote online or by phone and find a pickup time that works for you."
    },
    {
      title: "Residential & Property Cleanouts",
      description: "From a single item to a full cleanout, we scale the job to what you actually need."
    },
    {
      title: "Responsible Disposal",
      description: "We aim to donate, recycle, or dispose of items responsibly wherever possible."
    }
  ],

  // ----------------------------------------------------------
  // PRICING
  // Fill in real numbers when available. Leaving a field blank
  // will cause the site to point visitors to "Get a Quote"
  // instead of showing a price.
  // ----------------------------------------------------------
  pricing: {
    intro:
      "Every job is different, so pricing depends on how much needs to go and what it takes to remove it. Request a free, no-obligation quote and we'll walk you through the cost before any work begins.",
    tiers: [
      {
        name: "Single Item",
        price: "", // e.g. "Starting at $89" — leave blank until confirmed
        description: "One piece of furniture, an appliance, or a similar single pickup.",
        features: ["Fast turnaround", "No minimum load", "Straightforward pricing"]
      },
      {
        name: "Partial Load",
        price: "",
        description: "A portion of a truck — a few rooms' worth of items or a small cleanout.",
        features: ["Flexible scheduling", "Great for decluttering", "Volume-based estimate"]
      },
      {
        name: "Full Load / Cleanout",
        price: "",
        description: "Garage, property, or estate cleanouts and larger volume jobs.",
        features: ["Full-service hauling", "Labor included", "Best value per item"]
      }
    ],
    disclaimer:
      "Prices shown, if any, are starting estimates only and can vary based on volume, access, and material type. Final pricing is confirmed before work begins."
  },

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------
  about: {
    heading: "About S&F Junk Removal",
    paragraphs: [
      "S&F Junk Removal is a local junk removal service focused on making it easy to clear out the things you no longer need — without the hassle of hauling, sorting, or disposing of them yourself.",
      "This section is a placeholder. Replace it with your own story: how S&F got started, what the name means, and what you want customers to know about working with your team."
    ]
  },

  // ----------------------------------------------------------
  // SERVICE AREAS
  // Add cities/neighborhoods/ZIPs as they're confirmed. Leave
  // the array empty to show a general "ask us" message instead.
  // ----------------------------------------------------------
  serviceAreas: {
    intro:
      "Service area details are being finalized. Contact us to confirm whether we currently serve your location.",
    areas: [
      // "Example City", "Another Neighborhood", "ZIP 00000"
    ]
  },

  // ----------------------------------------------------------
  // REVIEWS
  // Leave this array EMPTY until real reviews exist. The site
  // will automatically show a polished "reviews coming soon"
  // state instead of fake testimonials.
  //
  // When ready, add objects like:
  // {
  //   name: "Jordan P.",
  //   rating: 5,
  //   text: "Real review text goes here.",
  //   date: "2026-01-01",
  //   source: "Google",     // "Google", "Yelp", "Direct", etc.
  //   photo: ""             // optional path to a real photo
  // }
  // ----------------------------------------------------------
  reviews: [],

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faqs: [
    {
      question: "What items do you remove?",
      answer:
        "We remove most household and property junk, including furniture, appliances, general clutter, garage items, and yard debris. If you're not sure whether we can take something, ask us when you request a quote."
    },
    {
      question: "How does getting a quote work?",
      answer:
        "Fill out the quote form with a description of what needs to go (photos help), or give us a call. We'll follow up with an estimate before any work is scheduled."
    },
    {
      question: "Do I need to be home for the pickup?",
      answer:
        "In most cases someone should be available to confirm the items and access the pickup area. Let us know your situation when you book and we'll work out the details."
    },
    {
      question: "How is pricing determined?",
      answer:
        "Pricing depends on factors like volume, item type, and how accessible the items are. We'll confirm the price with you before starting any work — see the Pricing section for more detail."
    },
    {
      question: "Do you handle large or heavy items?",
      answer:
        "Yes — large furniture, appliances, and similarly heavy items are part of what we handle. Mention the size and weight when requesting your quote so we can plan accordingly."
    },
    {
      question: "What areas do you serve?",
      answer:
        "Our service area is listed above and is still being finalized. If you don't see your location, reach out and we'll let you know if we can help."
    },
    {
      question: "What happens to the items you remove?",
      answer:
        "Where possible, we aim to donate or recycle usable items and dispose of the rest responsibly. Specific disposal practices can be discussed when you book."
    },
    {
      question: "How do I schedule a pickup?",
      answer:
        "Submit the quote form on this site or call us directly. Once your estimate is approved, we'll find a pickup time that works for your schedule."
    }
  ],

  // ----------------------------------------------------------
  // FORM SUBMISSION
  // This site is wired for Netlify Forms by default — if you
  // deploy to Netlify, submissions work immediately with no
  // extra setup. If you're deploying elsewhere, see README.md
  // for how to point this at a different form backend
  // (e.g. Formspree) using formEndpoint below.
  // ----------------------------------------------------------
  form: {
    useNetlifyForms: true,
    formEndpoint: "" // e.g. "https://formspree.io/f/yourFormId" — only used if useNetlifyForms is false
  }
};
