import { services } from "./business";

export type ServiceContent = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  whatWePaint: { icon: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

const baseFaqs = [
  {
    q: "Are you fully insured?",
    a: "Yes — we carry comprehensive public liability and employer's liability insurance for every job, residential or commercial.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Free, fixed-price written quotes within 24 hours of a site visit. Photos can be enough for a rough indication.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most 3–4 bed semis are completed inside 3–5 working days, weather permitting. Larger detached or commercial jobs are scheduled around your timeline.",
  },
];

export const serviceContent: Record<string, ServiceContent> = {
  "exterior-house-painting": {
    slug: "exterior-house-painting",
    title: "Exterior House Painting",
    h1: "Exterior House Painting Services in Dublin",
    metaTitle: "Exterior House Painting Services Dublin | Weatherproof Finishes",
    metaDescription:
      "Long-lasting exterior house painting in Dublin. Render coatings, masonry, eaves and trim, fully prepped and weatherproofed. Free site survey across Dublin 2 and Greater Dublin.",
    eyebrow: "EXTERIOR HOUSE PAINTING",
    intro:
      "Protect your investment with premium weather-resistant finishes tailored for the Irish climate. From Georgian terraces in Dublin 2 to suburban semis across Greater Dublin, we deliver durable exterior paintwork that lasts.",
    whatWePaint: [
      { icon: "format_paint", title: "Render", body: "Specialised breathable coatings for pebbledash and smooth render surfaces." },
      { icon: "grid_on", title: "Masonry", body: "Durable masonry paint that resists damp and moss growth common in Dublin." },
      { icon: "roofing", title: "Eaves", body: "Careful painting of fascia, soffits, and gutters for a complete protective seal." },
      { icon: "door_front", title: "Doors", body: "High-gloss or satin finishes for entrance doors that make a statement." },
    ],
    faqs: [
      { q: "How often should I repaint the exterior of my house?", a: "Most Dublin homes need a fresh exterior coat every 7–10 years. Coastal or weather-exposed properties are nearer the 5–7 year mark." },
      { q: "Can I just paint over old exterior paint?", a: "If the old coating is sound and clean, yes — after pressure-wash, scrape, fill and a stabilising primer. Failing or chalky paint must be removed first to guarantee adhesion." },
      { q: "Is October too late to paint outside in Ireland?", a: "Early October is often workable; late October is risky. We need three consecutive dry days and surface temperatures above 8°C for masonry paint to cure." },
      ...baseFaqs,
    ],
    related: ["repaint-exterior-house", "masonry-and-exterior-paint", "house-painting"],
  },
  "house-painting": {
    slug: "house-painting",
    title: "House Painting",
    h1: "House Painting Services in Dublin",
    metaTitle: "House Painting Dublin | House Painters Dublin 2",
    metaDescription:
      "Full-house painting Dublin: interior + exterior, terraces, semis, period homes. Tidy crews, dust-managed prep, fixed-price quotes. Call Exterior House Painting Dublin today.",
    eyebrow: "HOUSE PAINTING",
    intro:
      "Comprehensive house painting across Dublin — interior and exterior, prep through to finish. Tidy crews, dust-managed work, fixed-price written quotes.",
    whatWePaint: [
      { icon: "house", title: "Whole House", body: "Top-to-bottom interior and exterior repaints with one trusted crew." },
      { icon: "bed", title: "Bedrooms", body: "Two-coat low-odour finishes, careful masking, furniture protected." },
      { icon: "kitchen", title: "Kitchens & Halls", body: "Hard-wearing washable paints designed for high-traffic Dublin homes." },
      { icon: "format_paint", title: "Exteriors", body: "Render, masonry, eaves, trim and doors — weather-shielded for the Irish climate." },
    ],
    faqs: [
      { q: "How much does it cost to paint a 3 bedroom house in Ireland?", a: "Interior-only typically €2,200–€3,200; full interior + exterior €4,500–€6,500 depending on prep and finish level." },
      { q: "How much does it cost to paint a 4 bedroom house?", a: "Interior-only €2,800–€4,200; full interior + exterior commonly €5,800–€8,500. Always quoted on site for accuracy." },
      ...baseFaqs,
    ],
    related: ["exterior-house-painting", "interior-painting", "house-painting-prices"],
  },
  "commercial-painting": {
    slug: "commercial-painting",
    title: "Commercial Painting",
    h1: "Commercial Painting Services in Dublin",
    metaTitle: "Commercial Painters Dublin | Commercial Painting Contractors",
    metaDescription:
      "Commercial painting Dublin: offices, retail units, hotels, apartment blocks. Out-of-hours scheduling, low-VOC paints, SafePass-trained crews, fully insured.",
    eyebrow: "COMMERCIAL PAINTING",
    intro:
      "Commercial painting contractors for Dublin offices, retail units, hotels and apartment blocks. Out-of-hours scheduling, low-VOC paints, SafePass-trained crews.",
    whatWePaint: [
      { icon: "domain", title: "Offices", body: "Weekend and out-of-hours rollouts to keep your business running." },
      { icon: "store", title: "Retail Units", body: "Shopfronts and interiors painted around your trading hours." },
      { icon: "apartment", title: "Apartment Blocks", body: "Communal areas, balconies, render and rails refreshed for property managers." },
      { icon: "hotel", title: "Hotels", body: "Phased painting plans designed around guest occupancy and bookings." },
    ],
    faqs: [
      { q: "How much do painters charge per day in Ireland?", a: "Day rates for a two-painter team in Dublin commonly fall between €350–€500/day depending on access, height and finish. Most commercial work is quoted by the project." },
      ...baseFaqs,
    ],
    related: ["painting-contractors", "professional-painters", "painting-company"],
  },
  "interior-painting": {
    slug: "interior-painting",
    title: "Interior Painting",
    h1: "Interior Painting Services in Dublin",
    metaTitle: "Interior Painting Dublin | Interior Painters Dublin",
    metaDescription:
      "Interior painting in Dublin: living rooms, hallways, kitchens, bedrooms. Low-odour paints, careful masking, finished on schedule. Free quote in Dublin 2.",
    eyebrow: "INTERIOR PAINTING",
    intro:
      "Interior painting across Dublin — living rooms, hallways, kitchens, bedrooms. Low-odour paints, careful masking, finished on schedule.",
    whatWePaint: [
      { icon: "weekend", title: "Living Rooms", body: "Two-coat finishes with cut-in by hand and roller-rolled walls." },
      { icon: "stairs", title: "Halls & Stairs", body: "Hard-wearing washable paints for high-traffic family homes." },
      { icon: "bed", title: "Bedrooms", body: "Low-odour paints so rooms are usable the next day." },
      { icon: "kitchen", title: "Kitchens", body: "Moisture-resistant paint designed to handle steam and splashes." },
    ],
    faqs: baseFaqs,
    related: ["house-painting", "wallpapering", "painter-and-decorator"],
  },
  "painter-and-decorator": {
    slug: "painter-and-decorator",
    title: "Painter & Decorator",
    h1: "Painter and Decorator Services Dublin",
    metaTitle: "Painter and Decorator Dublin | Painters & Decorators Dublin",
    metaDescription:
      "Painter and decorator Dublin: skilled finishers for interior + exterior, wallpaper hanging, woodwork, ceilings. One Dublin team, end-to-end.",
    eyebrow: "PAINTER & DECORATOR",
    intro:
      "Skilled Dublin painters and decorators handling interior + exterior, wallpaper hanging, woodwork and ceilings. One trusted team, end-to-end.",
    whatWePaint: [
      { icon: "brush", title: "Walls & Ceilings", body: "Two-coat emulsion finishes, cut-in by hand to a sharp line." },
      { icon: "wallpaper", title: "Wallpaper", body: "Feature walls, full rooms, lining paper and murals expertly hung." },
      { icon: "format_paint", title: "Woodwork", body: "Skirting, architrave, doors and frames in satin or eggshell." },
      { icon: "window", title: "Windows & Doors", body: "Sash windows, internal and external doors prepped and finished properly." },
    ],
    faqs: baseFaqs,
    related: ["interior-painting", "wallpapering", "house-painting"],
  },
  "painting-contractors": {
    slug: "painting-contractors",
    title: "Painting Contractors",
    h1: "Painting Contractors in Dublin",
    metaTitle: "Painting Contractors Dublin | Trusted Painting Company",
    metaDescription:
      "Insured painting contractors serving Dublin businesses and homeowners. Tendered jobs, scheduled rollouts, trade-grade finishes, references on request.",
    eyebrow: "PAINTING CONTRACTORS",
    intro:
      "Insured painting contractors serving Dublin businesses and homeowners. Tendered jobs, scheduled rollouts, trade-grade finishes.",
    whatWePaint: [
      { icon: "engineering", title: "Tendered Jobs", body: "Fixed-price tenders with clear scope and timeline." },
      { icon: "schedule", title: "Scheduled Rollouts", body: "Phased delivery for multi-site or large single jobs." },
      { icon: "shield", title: "Fully Insured", body: "€10M public liability and employer's liability cover." },
      { icon: "checklist", title: "Snag-Listed", body: "Every job signed off line-by-line so you know exactly what was done." },
    ],
    faqs: baseFaqs,
    related: ["commercial-painting", "painting-company", "professional-painters"],
  },
  "professional-painters": {
    slug: "professional-painters",
    title: "Professional Painters",
    h1: "Professional Painters in Dublin",
    metaTitle: "Professional Painters Dublin | Painters Near Me Dublin",
    metaDescription:
      "Professional painters in Dublin trusted for clean, on-time delivery. Free quotes, fully insured, six-figure-job pedigree. Painters near you in Dublin 2.",
    eyebrow: "PROFESSIONAL PAINTERS",
    intro:
      "Professional Dublin painters trusted for clean, on-time delivery. Free quotes, fully insured, with a track record on six-figure jobs across the city.",
    whatWePaint: [
      { icon: "verified", title: "Vetted Crew", body: "Every painter in-house, vetted, and trained to a single quality standard." },
      { icon: "schedule", title: "On-Time", body: "Daily start times respected and end-of-day clean-up done before we leave." },
      { icon: "cleaning_services", title: "Tidy Working", body: "Drop sheets, masking, and dust-extracted sanding on every job." },
      { icon: "thumb_up", title: "Reviewed", body: "References available — we are happy to put you in touch with recent clients." },
    ],
    faqs: baseFaqs,
    related: ["painting-company", "house-painting", "painter-and-decorator"],
  },
  "painting-company": {
    slug: "painting-company",
    title: "Painting Company",
    h1: "Dublin's Trusted Painting Company",
    metaTitle: "Painting Company Dublin | Painting Services Dublin",
    metaDescription:
      "Painting company in Dublin offering full residential and commercial painting services. Quote, schedule, pay — one company, every project type.",
    eyebrow: "PAINTING COMPANY",
    intro:
      "A full-service Dublin painting company. Residential, commercial, interior and exterior — quote, schedule, finish under one roof.",
    whatWePaint: [
      { icon: "house", title: "Residential", body: "Houses, apartments, period homes — interior and exterior." },
      { icon: "domain", title: "Commercial", body: "Offices, retail units, hotels, and managed property portfolios." },
      { icon: "format_paint", title: "Specialist Finishes", body: "Sandtex, Dulux Weathershield, Farrow & Ball, Fleetwood and more." },
      { icon: "support_agent", title: "One Point of Contact", body: "One project manager from quote to final walk-through." },
    ],
    faqs: baseFaqs,
    related: ["professional-painters", "painting-contractors", "house-painting"],
  },
  "house-painting-prices": {
    slug: "house-painting-prices",
    title: "House Painting Prices",
    h1: "House Painting Prices in Dublin",
    metaTitle: "House Painting Prices Dublin | Painting Cost Calculator",
    metaDescription:
      "Transparent house painting prices in Dublin. See sample rates per room, exterior render, and full-house quotes. Free written estimate within 24 hours.",
    eyebrow: "HOUSE PAINTING PRICES",
    intro:
      "Transparent Dublin house painting prices. Sample rates for rooms, exteriors and full-house projects. Free written estimate within 24 hours.",
    whatWePaint: [
      { icon: "bed", title: "Single Room", body: "From €280 — two-coat walls and ceiling, sharp cut-in, low-odour paint." },
      { icon: "house", title: "3-Bed Interior", body: "From €2,200 — full interior including hall, stairs and landing." },
      { icon: "format_paint", title: "Semi Exterior", body: "From €1,850 — front, back and side, soffits and fascias included." },
      { icon: "apartment", title: "Detached Exterior", body: "From €2,600 — all four elevations, scaffolding included where required." },
    ],
    faqs: [
      { q: "How much do painters charge in Dublin?", a: "Day rate for a two-painter crew is €350–€500/day. Most projects are quoted as fixed-price after a free site visit." },
      { q: "How much does it cost to paint a house in Dublin?", a: "Interior-only 3-bed semis €2,200–€3,200; full interior + exterior €4,500–€6,500." },
      { q: "How much does it cost to paint the outside of a house in Ireland?", a: "Standard 3-bed semi exterior typically €1,800–€2,500 including prep, primer and two coats of weather-shield masonry paint." },
      { q: "How much does it cost to have your outside house painted?", a: "Most Dublin homes fall €1,800–€3,500 for the full exterior. Larger detached homes with scaffolding €2,600–€5,000." },
      { q: "How much will a painter charge to paint a room?", a: "Standard bedroom €280–€420. Larger rooms or hall/stairs/landing combinations are priced higher." },
      { q: "How much do painters charge to paint a full house?", a: "Full house (interior + exterior) typically €4,500–€8,500 in Dublin. We provide a fixed written quote after a free site visit." },
      ...baseFaqs,
    ],
    related: ["house-painting", "exterior-house-painting", "professional-painters"],
  },
  "masonry-and-exterior-paint": {
    slug: "masonry-and-exterior-paint",
    title: "Masonry & Exterior Paint",
    h1: "Masonry and Exterior Paint Specialists in Dublin",
    metaTitle: "Masonry Paint Dublin | Sandtex & Exterior Paint Specialists",
    metaDescription:
      "Masonry and Sandtex paint application across Dublin. Hairline-crack repair, primer, two coats — twenty-year-rated finishes. Colour consultation included.",
    eyebrow: "MASONRY & EXTERIOR PAINT",
    intro:
      "Sandtex and masonry paint specialists across Dublin. Hairline-crack repair, primer, two coats — twenty-year-rated finishes. Colour consultation included.",
    whatWePaint: [
      { icon: "grid_on", title: "Sandtex Masonry", body: "Sandtex Ultra Smooth and X-treme — proven on Irish weather." },
      { icon: "format_paint", title: "Pebbledash", body: "Breathable specialist coatings designed for textured render." },
      { icon: "construction", title: "Crack Repair", body: "Hairline cracks raked, filled and stabilised before paint goes on." },
      { icon: "palette", title: "Colour Consultation", body: "Sample boards on site so you see the finish in real Dublin light." },
    ],
    faqs: baseFaqs,
    related: ["exterior-house-painting", "repaint-exterior-house", "house-painting"],
  },
  "wallpapering": {
    slug: "wallpapering",
    title: "Wallpapering",
    h1: "Wallpapering Service in Dublin",
    metaTitle: "Wallpapering Dublin | Wallpaper Hanging Service",
    metaDescription:
      "Professional wallpaper hanging in Dublin: feature walls, full rooms, lining paper, mural installs. Bubble-free guarantee from Exterior House Painting Dublin's decorator team.",
    eyebrow: "WALLPAPERING",
    intro:
      "Professional wallpaper hanging in Dublin — feature walls, full rooms, lining paper, mural installs. Bubble-free guarantee.",
    whatWePaint: [
      { icon: "wallpaper", title: "Feature Walls", body: "Single-wall accents that lift any room without overwhelming it." },
      { icon: "view_module", title: "Full Rooms", body: "Pattern-matched, seam-flat hanging across entire rooms." },
      { icon: "layers", title: "Lining Paper", body: "Smooth lining for old or uneven walls before paint or paper." },
      { icon: "imagesmode", title: "Murals", body: "Large-format wall murals installed flush, panel by panel." },
    ],
    faqs: baseFaqs,
    related: ["painter-and-decorator", "interior-painting", "house-painting"],
  },
  "repaint-exterior-house": {
    slug: "repaint-exterior-house",
    title: "Repaint Exterior House",
    h1: "Repaint Your Exterior House in Dublin",
    metaTitle: "Repaint Exterior House Dublin | Exterior House Repaint",
    metaDescription:
      "Time to repaint? Exterior house repaint specialists in Dublin — power-wash, scrape, prime, two-coat masonry finish. Visible results in 3-5 days.",
    eyebrow: "REPAINT EXTERIOR HOUSE",
    intro:
      "Time to repaint the outside of the house? We power-wash, scrape, prime and apply two coats of weather-shield masonry paint. Visible results in 3–5 days.",
    whatWePaint: [
      { icon: "water_drop", title: "Power Wash", body: "Algae, dirt and chalking lifted off so primer can grip." },
      { icon: "construction", title: "Scrape & Fill", body: "Loose paint removed, hairline cracks filled and stabilised." },
      { icon: "format_paint", title: "Prime", body: "Stabilising primer applied to bond fresh paint to the masonry." },
      { icon: "brush", title: "Two Topcoats", body: "Sandtex or Dulux Weathershield, applied evenly for a 10-year finish." },
    ],
    faqs: baseFaqs,
    related: ["exterior-house-painting", "masonry-and-exterior-paint", "house-painting"],
  },
};

export function getServiceContent(slug: string): ServiceContent | null {
  return serviceContent[slug] ?? null;
}

export function allServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
