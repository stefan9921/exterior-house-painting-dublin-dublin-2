import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, business } from "@/lib/business";
import { getAreaIntro } from "@/lib/areaContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  JsonLd,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/components/JsonLd";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  const url = `${business.siteUrl}/areas/${slug}/`;
  const title = `Painters ${area.name} | Exterior House Painting ${area.name}`;
  const description = `Local painters in ${area.name} delivering exterior, interior and full-house painting. Same insured Dublin crew, fixed-price quotes within 24 hours.`;
  return {
    title,
    description,
    alternates: { canonical: `/areas/${slug}/` },
    openGraph: { title, description, url, type: "article" },
  };
}

const projectImgs = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
];

export default async function AreaPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const others = areas.filter((a) => a.slug !== area.slug).slice(0, 6);
  const intro = getAreaIntro(slug);
  const pageUrl = `${business.siteUrl}/areas/${slug}/`;

  const trail = [
    { name: "Home", href: "/" },
    { name: "Areas", href: "/areas/" },
    { name: area.name, href: `/areas/${slug}/` },
  ];

  const faqs = [
    {
      q: `How much does it cost to paint a house in ${area.name}?`,
      a: `Pricing in ${area.name} depends on property size and surface condition. Most 3-bed semi exteriors fall €1,800–€2,500 including prep, primer and two coats of weather-shield masonry paint. Larger detached homes with scaffolding €2,600–€5,000. We provide a free written fixed-price quote within 24 hours of a site visit.`,
    },
    {
      q: `How long does an exterior painting project take in ${area.name}?`,
      a: "Most 3-bed semis take 3–5 working days, weather permitting. Larger detached homes 5–7 working days. Commercial properties are scheduled around your trading hours.",
    },
    {
      q: "Do you offer warranties on your workmanship?",
      a: "Yes — every exterior repaint comes with a 5-year workmanship warranty, on top of the paint manufacturer's product guarantee. Interior decorating is warranted for 2 years.",
    },
    {
      q: `Are you fully insured to work in ${area.name}?`,
      a: "Absolutely. We carry €10M public liability and full employer's liability cover, in force on every job we do across Dublin and the Greater Dublin region.",
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          trail.map((t) => ({
            name: t.name,
            url: `${business.siteUrl}${t.href}`,
          }))
        )}
      />
      <JsonLd
        data={serviceSchema({
          name: `Painters ${area.name}`,
          description: `Exterior, interior and full-house painting in ${area.name}, Greater Dublin region.`,
          url: pageUrl,
          areaServed: [area.name, "Dublin", "Greater Dublin"],
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />

      <Breadcrumbs trail={trail} />

      {/* LOCAL HERO */}
      <section className="bg-white py-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block font-label-sm">
              Painters in Dublin
            </span>
            <h1 className="font-display-xl text-4xl md:text-5xl lg:text-display-xl mb-6">
              Painters in {area.name}
            </h1>
            <p className="text-on-surface-variant font-body-lg mb-8 max-w-lg">
              {intro.intro} Free written quotes within 24 hours, fully insured,
              on-time delivery from Dublin&apos;s most trusted painting crew.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact/"
                className="bg-primary-container text-on-background px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all font-label-sm"
              >
                Get Free Quote in {area.name}
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="border-2 border-outline text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-container-low transition-all font-label-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined">call</span> {business.phoneDisplay}
              </a>
            </div>
            <div className="flex gap-4 flex-wrap">
              <span className="bg-surface-container-low px-4 py-1.5 rounded-full text-xs font-bold border border-outline-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">verified</span>{" "}
                Fully Insured
              </span>
              <span className="bg-surface-container-low px-4 py-1.5 rounded-full text-xs font-bold border border-outline-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">request_quote</span>{" "}
                Free Quote
              </span>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero-house.jpg"
              alt={`Painters serving ${area.name} — Exterior House Painting Dublin`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="soft-cream-bg py-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "24hr", l: "Response Time" },
              { v: "150+", l: "Homes Painted" },
              { v: "€10M", l: "Public Liability" },
              { v: "Free", l: "Site Consultation" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-secondary-container font-black text-headline-lg font-display-xl">
                  {s.v}
                </div>
                <div className="text-on-surface-variant font-bold font-label-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT / LANDMARKS */}
      <section className="bg-white py-xl">
        <div className="max-w-4xl mx-auto px-6 space-y-5 text-on-surface-variant font-body-lg">
          <h2 className="font-headline-lg text-2xl md:text-3xl mb-2 text-on-surface">
            Local painters covering {area.name}
          </h2>
          <p>
            Operating from Grand Canal Dock in Dublin 2, our crew runs to{" "}
            {area.name} throughout the week — usually past {intro.landmarks}. We
            keep response time tight: free site visits within 24 hours, written
            fixed-price quotes the same day, scheduled start within 2–3 weeks
            depending on weather and the current job book.
          </p>
          <p>
            Every job in {area.name} gets the same in-house painter team —
            never subcontracted, never swapped halfway through. We&apos;re
            insured to €10M, SafePass-trained, and we leave the site cleaner
            than we found it. References from recent {area.name} customers
            available on request.
          </p>
          <p>
            Painters {area.name} homeowners book for: full exterior repaints,
            render and masonry coatings, eaves, soffits and fascias, sash
            windows and front doors, full interior decorating, hall-stairs-and-
            landing refreshes, kitchen and bathroom paintwork, wallpapering,
            and project-managed contracts for landlords and property managers.
          </p>
        </div>
      </section>

      {/* SERVICES IN AREA */}
      <section className="bg-white py-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-center mb-16">
            Painting Services We Deliver in {area.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-gutter">
            {[
              {
                slug: "exterior-house-painting",
                icon: "home",
                title: "Exterior Painting",
                body: `Weather-resistant coatings specifically chosen for the Irish climate to protect your ${area.name} home.`,
              },
              {
                slug: "interior-painting",
                icon: "format_paint",
                title: "Interior Decorating",
                body: "Premium finishes and expert colour matching for every room in your house, from halls to bedrooms.",
              },
              {
                slug: "house-painting",
                icon: "apartment",
                title: "House Painting",
                body: "Full property refurbishment including masonry, woodwork and metal railings for a complete new look.",
              },
            ].map((s) => (
              <div
                key={s.slug}
                className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm hover:-translate-y-2 transition-transform"
              >
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <h3 className="font-headline-sm mb-4 font-bold">{s.title}</h3>
                <p className="text-on-surface-variant mb-6">{s.body}</p>
                <Link
                  href={`/services/${s.slug}/`}
                  className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Learn more <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOCALS CHOOSE US */}
      <section className="soft-cream-bg py-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg border-8 border-white">
            <Image
              src="/images/painter-craftsman.jpg"
              alt={`Professional painter at work in ${area.name}`}
              width={1200}
              height={838}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-8">
              Why {area.name} Homeowners Choose Us
            </h2>
            <div className="space-y-6">
              {[
                { i: "group", t: "Local Dublin Team", d: `We live and work in Dublin. Our reputation in ${area.name} is built on local word-of-mouth.` },
                { i: "schedule", t: "Punctual & Clean", d: "We arrive on time, every time. We leave your property spotless after every day's work." },
                { i: "payments", t: "Fixed-Price Quotes", d: "No hidden costs. The price we quote is the price you pay, guaranteed." },
                { i: "shield", t: "Fully Insured", d: "Complete peace of mind with full public and employer's liability insurance." },
              ].map((it) => (
                <div key={it.t} className="flex gap-4">
                  <div className="bg-primary-container w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">{it.i}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 font-headline-sm">{it.t}</h4>
                    <p className="text-on-surface-variant">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENT JOBS */}
      <section className="bg-white py-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-center mb-16">
            Recent Painting Jobs in {area.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectImgs.map((img, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden h-64 mb-4">
                  <Image
                    src={img}
                    alt={`Painted property in ${area.name}, painters ${area.name.toLowerCase()}`}
                    width={900}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
                    {area.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="soft-cream-bg py-xl">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">format_quote</span>
            </div>
          </div>
          <p className="text-2xl font-bold font-headline-sm italic mb-8 leading-relaxed">
            &quot;We were delighted with the work the team did on our home in {area.name}.
            They were incredibly professional, punctual, and the quality of the exterior
            painting is outstanding. Our neighbours have already asked for their number!&quot;
          </p>
          <div>
            <div className="font-bold text-lg font-headline-sm">Mary K.</div>
            <div className="text-primary font-bold text-sm font-label-sm">{area.name} Homeowner</div>
          </div>
        </div>
      </section>

      {/* AREA FAQ */}
      <section className="bg-white py-xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-center mb-12">
            Painting in {area.name} — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-outline-variant overflow-hidden group"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="w-full px-8 py-6 text-left flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-bold text-lg font-headline-sm m-0">{f.q}</h3>
                  <span className="material-symbols-outlined text-primary-container font-black group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="px-8 pb-6 text-on-surface-variant font-body-md">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="soft-cream-bg py-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h3 className="font-headline-sm text-2xl mb-8 font-bold">Nearby areas we cover</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {others.map((o, i) => (
              <span key={o.slug} className="flex items-center gap-4">
                <Link href={`/areas/${o.slug}/`} className="text-primary-container font-bold hover:underline">
                  {o.name}
                </Link>
                {i < others.length - 1 && <span className="text-slate-300">•</span>}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/areas/"
              className="inline-block border-2 border-on-surface px-6 py-3 rounded-lg font-bold hover:bg-on-surface hover:text-white transition-all"
            >
              See all areas
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sun-yellow-bg py-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display-xl text-3xl md:text-5xl text-on-background mb-8 font-extrabold">
            Free Painting Quote for Your {area.name} Home
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/contact/"
              className="bg-on-surface text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-black transition-all"
            >
              Get Your Free Quote
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="border-2 border-on-surface text-on-surface px-12 py-5 rounded-lg font-bold text-lg hover:bg-on-surface/5 transition-all"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
