import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business, services, areas } from "@/lib/business";
import {
  JsonLd,
  breadcrumbSchema,
  faqPageSchema,
} from "@/components/JsonLd";

const PAGE_URL = business.siteUrl + "/";

export const metadata: Metadata = {
  title: "Exterior House Painting Dublin | Exterior Painters Dublin 2",
  description:
    "Exterior House Painting Dublin delivers durable, weather-ready exterior paintwork across Dublin 2 and Greater Dublin. Free quotes, 7-day availability, call +353 1 230 8892.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Exterior House Painting Dublin | Exterior Painters Dublin 2",
    description:
      "Durable, weather-ready exterior paintwork across Dublin 2 and Greater Dublin. Free quotes, 7-day availability.",
    url: PAGE_URL,
  },
};

const homepageFaqs = [
  {
    q: "How much does it cost to paint a house in Dublin?",
    a: "Pricing varies by property size and surface condition. A standard 3-bed semi exterior in Dublin typically falls between €1,800–€2,500. Interior-only 3-bed semis sit between €2,200–€3,200, while a full interior + exterior package is generally €4,500–€6,500. We provide a free written fixed-price quote within 24 hours of a site visit.",
  },
  {
    q: "What time of year is best to paint a house?",
    a: "April to September is ideal in Ireland — drier weather and consistent surface temperatures above 10°C let masonry paint cure properly. We can paint year-round given a stretch of three or more dry days; spring and early autumn are our busiest seasons in Dublin 2 and the Greater Dublin region.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. We offer 100% free, no-obligation quotes within 24 hours of site inspection. We can often provide a rough estimate from photos for smaller jobs.",
  },
  {
    q: "Are you fully insured?",
    a: "Absolutely. We carry €10M public liability and full employer's liability insurance for every Dublin painting job, residential or commercial.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", url: PAGE_URL }])}
      />
      <JsonLd data={faqPageSchema(homepageFaqs)} />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-house.jpg"
            alt="A grand Georgian terrace house in Dublin 2 with a freshly painted exterior facade by Exterior House Painting Dublin"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white">
          <div className="max-w-2xl">
            <h1 className="font-display-xl text-4xl md:text-5xl lg:text-display-xl mb-6 leading-tight">
              Professional Exterior House Painting in Dublin
            </h1>
            <p className="font-body-lg text-body-lg mb-8 opacity-90">
              Durable, weather-ready exterior paintwork across Dublin 2 and the
              Greater Dublin region. We protect your home with premium finishes
              designed for the Irish climate — from Georgian terraces in Grand
              Canal Dock to suburban semis from Tallaght to Howth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-headline-sm text-[18px] font-bold shadow-lg hover:brightness-110 transition-all"
                href="/contact/"
              >
                Get Free Quote
              </Link>
              <a
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-headline-sm text-[18px] font-bold hover:bg-white hover:text-on-surface transition-all"
                href={`tel:${business.phone}`}
              >
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-on-surface/80 backdrop-blur-sm py-4">
          <div className="max-w-7xl mx-auto px-8 flex justify-center md:justify-between items-center text-white/90 font-semibold tracking-wide text-sm gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">verified</span>
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">request_quote</span>
              Free Quotes
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">calendar_today</span>
              7 Days a Week
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">location_on</span>
              Dublin 2 Based
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Long-form copy */}
      <section className="bg-white py-xl">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-6 text-center">
            Dublin&apos;s Exterior House Painting Specialists
          </h2>
          <div className="space-y-5 text-on-surface-variant font-body-lg">
            <p>
              Exterior House Painting Dublin is a Dublin 2 painting and
              decorating company that delivers durable, weather-shielded
              exterior paintwork across the city and Greater Dublin. We are
              exterior painters Dublin homeowners turn to for masonry, render,
              eaves, soffits, fascias and door work — and we back every job
              with a written fixed-price quote, full insurance, and a
              workmanship warranty.
            </p>
            <p>
              Our crew operates seven days a week, 8AM to 8PM, from our base
              at 77 Sir John Rogerson&apos;s Quay in Grand Canal Dock. From
              there we serve every postcode in Dublin 2, plus the wider
              region: Tallaght, Swords, Lucan, Blanchardstown, Malahide,
              Blackrock, Dundrum, Clontarf, Ranelagh, Rathmines, Sandyford,
              Howth, Greystones, Bray, Naas, Maynooth, Celbridge, Drogheda,
              Navan and Mullingar. Wherever you are in Greater Dublin, the
              same insured, vetted in-house team turns up.
            </p>
            <p>
              Exterior house painting in Dublin demands more than a coat of
              paint. The Irish climate is hard on render — driving rain off
              the Irish Sea, salt air on the coast, freeze-thaw in winter,
              and chalking under summer UV. We prep, prime and apply the
              right system for the substrate: Sandtex Ultra Smooth and
              X-treme on smooth render, breathable specialist coatings on
              pebbledash, Dulux Weathershield on woodwork. The result is an
              exterior that holds its colour and sheds water for 7–10 years.
            </p>
            <p>
              We also handle interior painting, full-house repaints,
              commercial fit-outs, painter and decorator services,
              wallpapering, and project-managed contracts for property
              managers. Painters Dublin trusts under one roof — quote,
              schedule, finish, sign-off.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="soft-cream-bg py-xl">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "10+", label: "Years Experience" },
            { num: "500+", label: "Homes Painted" },
            { num: "Fully", label: "Insured & Certified" },
            { num: "24h", label: "Free Quotes" },
          ].map((s) => (
            <div key={s.label} className="text-center group">
              <div className="font-display-xl text-secondary text-headline-lg mb-2 font-extrabold">
                {s.num}
              </div>
              <p className="font-headline-sm text-[18px] text-on-surface-variant">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-xl" id="services">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-4">
              Painting Services Across Dublin
            </h2>
            <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="bg-white border mist-grey-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl">
                    {s.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-sm mb-4">{s.title}</h3>
                <p className="text-on-surface-variant mb-6 flex-grow">{s.short}</p>
                <span className="text-tertiary font-bold hover:underline flex items-center gap-1">
                  Learn more <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services/"
              className="inline-block border-2 border-on-surface px-8 py-3 rounded-lg font-bold hover:bg-on-surface hover:text-white transition-all"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="soft-cream-bg py-xl">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/painter-craftsman.jpg"
              alt="A professional Dublin painter applying weather-shield masonry paint to a window frame"
              width={1200}
              height={838}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-8">
              Why Dublin Homeowners Choose Us
            </h2>
            <div className="space-y-6">
              {[
                { icon: "verified_user", title: "Premium Grade Materials", body: "We only use top-tier paints like Dulux Weathershield and Sandtex to ensure long-lasting protection." },
                { icon: "schedule", title: "On-Time Completion", body: "We respect your schedule and provide clear timelines for every project we undertake." },
                { icon: "cleaning_services", title: "Clean Working Ethic", body: "Our crew maintains a tidy workspace and performs a full site clean-up daily." },
                { icon: "euro", title: "Transparent Pricing", body: "No hidden fees or unexpected costs. The price we quote is the price you pay." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[20px] mb-2 font-bold">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="bg-white py-xl" id="areas">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-4">
              Painters Serving All of Dublin
            </h2>
            <p className="text-on-surface-variant font-body-lg">
              Specialising in Dublin 2 and the Greater Dublin Region — from
              Grand Canal Dock to Howth, Bray to Maynooth, Drogheda to Navan.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}/`}
                className="px-6 py-2 rounded-full border mist-grey-border hover:bg-primary-container hover:text-on-primary-container transition-colors font-semibold"
              >
                {a.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/areas/"
              className="inline-block border-2 border-on-surface px-8 py-3 rounded-lg font-bold hover:bg-on-surface hover:text-white transition-all"
            >
              View all areas
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="soft-cream-bg py-xl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Absolutely fantastic job on our exterior masonry. The team was punctual, clean, and the Sandtex finish looks incredible. Highly recommend for any Dublin homeowner.", who: "Siobhan M. – Blackrock" },
              { quote: "Transformed our shop front in Malahide. Professional from start to finish and worked around our opening hours. Five-star service!", who: "James K. – Malahide" },
              { quote: "Best price we found for a full exterior house paint in Dundrum. The quote was accurate and the workmanship is top-tier. Very happy clients.", who: "Eoin & Linda – Dundrum" },
            ].map((t) => (
              <div key={t.who} className="bg-white p-8 rounded-xl shadow-sm relative border border-white">
                <span className="material-symbols-outlined text-primary-container text-5xl absolute -top-4 -left-2 opacity-30">
                  format_quote
                </span>
                <div className="flex text-secondary-container mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="text-on-surface mb-6 italic">&quot;{t.quote}&quot;</p>
                <h4 className="font-headline-sm text-[18px] font-bold">{t.who}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-xl" id="faq">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4">
            {homepageFaqs.map((f, i) => (
              <details key={i} className="group border mist-grey-border rounded-xl" {...(i === 0 ? { open: true } : {})}>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-headline-sm text-[18px] font-bold">
                  {f.q}
                  <span className="material-symbols-outlined text-primary-container transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">{f.a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/faq/"
              className="text-tertiary font-bold hover:underline"
            >
              See all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-container py-xl" id="quote">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-primary-fixed mb-6">
            Ready for a Fresh Exterior?
          </h2>
          <p className="text-on-primary-fixed-variant font-body-lg mb-10 max-w-2xl mx-auto">
            Contact Dublin&apos;s most reliable painting crew today for a durable,
            professional finish that lasts for years.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              className="bg-on-primary-fixed text-white px-10 py-5 rounded-xl font-headline-sm text-[20px] font-bold shadow-xl hover:scale-105 transition-all"
              href="/contact/"
            >
              Get Free Quote
            </Link>
            <a
              className="border-2 border-on-primary-fixed text-on-primary-fixed px-10 py-5 rounded-xl font-headline-sm text-[20px] font-bold hover:bg-on-primary-fixed hover:text-white transition-all flex items-center gap-2"
              href={`tel:${business.phone}`}
            >
              <span className="material-symbols-outlined">call</span>
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
