export const business = {
  name: "Exterior House Painting Dublin",
  shortName: "Exterior House Painting Dublin",
  address: "77 Sir John Rogerson's Quay, Grand Canal Dock, Dublin 2, D02 VK60",
  street: "77 Sir John Rogerson's Quay",
  area: "Grand Canal Dock",
  city: "Dublin 2",
  postcode: "D02 VK60",
  country: "Ireland",
  phone: "+35312308892",
  phoneDisplay: "+353 1 230 8892",
  email: "info@exteriorhousepaintingdublin.ie",
  hours: "Mon-Sun 8AM-8PM",
  // SITE_URL is read from NEXT_PUBLIC_SITE_URL with a Vercel preview default.
  // Set NEXT_PUBLIC_SITE_URL=https://yourdomain.ie in production once a custom
  // domain is wired up. Trailing slash intentionally omitted.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.exteriorhousepaintingdublin.ie",
};

export const services = [
  { slug: "exterior-house-painting", title: "Exterior House Painting", short: "Full protective exterior painting including masonry, windows, and doors with weather-resistant finishes.", icon: "home_repair_service" },
  { slug: "house-painting", title: "House Painting", short: "Comprehensive residential painting solutions tailored to modernise and refresh your home's appearance.", icon: "house" },
  { slug: "commercial-painting", title: "Commercial Painting", short: "Large-scale painting for offices, storefronts, and commercial blocks with minimal business disruption.", icon: "domain" },
  { slug: "interior-painting", title: "Interior Painting", short: "Precision interior work including walls, ceilings, and detailed woodwork for a flawless living space.", icon: "imagesmode" },
  { slug: "painter-and-decorator", title: "Painter & Decorator", short: "Expert decorating services focusing on aesthetic harmony, wallpapering, and premium finishes.", icon: "brush" },
  { slug: "painting-contractors", title: "Painting Contractors", short: "Insured Dublin painting contractors for project-managed residential and commercial fit-outs.", icon: "engineering" },
  { slug: "professional-painters", title: "Professional Painters", short: "Trusted Dublin painters with a decade of clean, on-time delivery across Greater Dublin.", icon: "verified" },
  { slug: "painting-company", title: "Painting Company", short: "Full-service Dublin painting company — quote, schedule, and finish under one roof.", icon: "apartment" },
  { slug: "house-painting-prices", title: "House Painting Prices", short: "Transparent Dublin house painting pricing with sample rates per room and exterior packages.", icon: "euro" },
  { slug: "masonry-and-exterior-paint", title: "Masonry & Exterior Paint", short: "Specialised masonry painting using Sandtex for maximum durability against harsh Dublin weather.", icon: "layers" },
  { slug: "wallpapering", title: "Wallpapering", short: "Professional wallpaper hanging in Dublin: feature walls, full rooms, lining paper, mural installs.", icon: "wallpaper" },
  { slug: "repaint-exterior-house", title: "Repaint Exterior House", short: "Exterior house repaint specialists in Dublin — power-wash, scrape, prime, two-coat masonry finish.", icon: "format_paint" },
];

export const areas = [
  { slug: "navan", name: "Navan", keyword: "painters navan" },
  { slug: "drogheda", name: "Drogheda", keyword: "painters drogheda" },
  { slug: "mullingar", name: "Mullingar", keyword: "painters mullingar" },
  { slug: "tallaght", name: "Tallaght", keyword: "painters tallaght" },
  { slug: "swords", name: "Swords", keyword: "painters swords" },
  { slug: "bray", name: "Bray", keyword: "painters bray" },
  { slug: "naas", name: "Naas", keyword: "painters naas" },
  { slug: "celbridge", name: "Celbridge", keyword: "painters celbridge" },
  { slug: "lucan", name: "Lucan", keyword: "painters lucan" },
  { slug: "malahide", name: "Malahide", keyword: "house painters malahide" },
  { slug: "blanchardstown", name: "Blanchardstown", keyword: "house painters blanchardstown" },
  { slug: "ranelagh", name: "Ranelagh", keyword: "painters ranelagh" },
  { slug: "rathmines", name: "Rathmines", keyword: "painters rathmines" },
  { slug: "sandyford", name: "Sandyford", keyword: "painters sandyford" },
  { slug: "blackrock", name: "Blackrock", keyword: "painters blackrock" },
  { slug: "dundrum", name: "Dundrum", keyword: "painters dundrum" },
  { slug: "maynooth", name: "Maynooth", keyword: "painters maynooth" },
  { slug: "greystones", name: "Greystones", keyword: "painters greystones" },
  { slug: "clontarf", name: "Clontarf", keyword: "painters clontarf" },
  { slug: "howth", name: "Howth", keyword: "painters howth" },
];
