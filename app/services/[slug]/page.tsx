import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business, services } from "@/lib/business";
import { allServiceSlugs, getServiceContent } from "@/lib/serviceContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  JsonLd,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/components/JsonLd";

export function generateStaticParams() {
  return allServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const content = getServiceContent(slug);
  if (!content) return {};
  const url = `${business.siteUrl}/services/${slug}/`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/services/${slug}/` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      type: "article",
    },
  };
}

const projectImgs = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
];

export default async function ServicePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const content = getServiceContent(slug);
  if (!content) notFound();
  const related = content.related
    .map((s) => services.find((sv) => sv.slug === s))
    .filter(Boolean) as typeof services;

  const pageUrl = `${business.siteUrl}/services/${slug}/`;
  const trail = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services/" },
    { name: content.title, href: `/services/${slug}/` },
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
          name: content.title,
          description: content.metaDescription,
          url: pageUrl,
        })}
      />
      <JsonLd data={faqPageSchema(content.faqs.slice(0, 5))} />

      <Breadcrumbs trail={trail} />

      {/* HERO */}
      <section className="soft-cream-bg py-xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block font-semibold">
              {content.eyebrow}
            </span>
            <h1 className="font-display-xl text-4xl md:text-5xl lg:text-display-xl text-on-surface mb-6 leading-tight">
              {content.h1}
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-8 max-w-lg">{content.intro}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact/"
                className="sun-yellow-bg ink-black-text px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Get a Quote
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="border-2 border-on-surface ink-black-text px-8 py-3 rounded-lg font-bold hover:bg-on-surface hover:text-white transition-all"
              >
                Call Now
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">verified_user</span>
                <span className="font-label-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">workspace_premium</span>
                <span className="font-label-sm">Workmanship Guarantee</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative h-[400px]">
            <Image
              src="/images/hero-house.jpg"
              alt={`${content.title} in Dublin — Exterior House Painting Dublin`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE PAINT */}
      <section className="py-xl max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-4">
            What We Cover
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Expert care for every aspect of your Dublin property.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {content.whatWePaint.map((c) => (
            <div
              key={c.title}
              className="bg-white p-8 rounded-xl border mist-grey-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="sun-yellow-bg w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined ink-black-text text-3xl">{c.icon}</span>
              </div>
              <h3 className="font-headline-sm mb-3 font-bold">{c.title}</h3>
              <p className="text-on-surface-variant">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LONG-FORM CONTENT */}
      <section className="bg-white py-xl">
        <div className="max-w-4xl mx-auto px-6 space-y-5 text-on-surface-variant font-body-lg">
          <h2 className="font-headline-lg text-2xl md:text-3xl mb-2 text-on-surface">
            About our {content.title.toLowerCase()} service in Dublin
          </h2>
          <p>
            {content.intro} Whether you&apos;re in central Dublin 2, the
            coastal villages of Howth and Malahide, or the commuter towns of
            Naas, Maynooth and Drogheda, the same insured in-house crew turns
            up to deliver consistent quality across every project.
          </p>
          <p>
            Every {content.title.toLowerCase()} job starts with a free site
            visit and a fixed-price written quote within 24 hours. We assess
            substrate condition, identify prep work, recommend the right paint
            system for the Irish climate, and give you a clear timeline. No
            ladder-and-promise estimates — actual numbers, in writing.
          </p>
          <p>
            Our painters work to a documented prep standard: power-wash where
            needed, scrape failing paint, fill hairline cracks, stabilise
            chalking surfaces with primer, mask thoroughly, and apply two
            coats of premium paint. For exterior work in Dublin we lean on
            Sandtex Ultra Smooth, Sandtex X-treme and Dulux Weathershield —
            systems with a proven track record on Irish render and masonry.
          </p>
          <p>
            We are fully insured (€10M public liability and full
            employer&apos;s liability), SafePass-trained, and every job is
            backed by a written workmanship warranty on top of the paint
            manufacturer&apos;s product guarantee. Every painter on the team
            is in-house — no subcontractors swapping in halfway through the
            job.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-container-low py-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-center mb-20">
            Our Professional Process
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between gap-12">
            <div className="absolute top-12 left-0 w-full h-0.5 bg-outline-variant hidden md:block"></div>
            {[
              { n: "01", t: "Quote", d: "Free on-site assessment and detailed written quotation." },
              { n: "02", t: "Prep", d: "Power washing, scraping, and filling all surface cracks." },
              { n: "03", t: "Prime", d: "Application of stabilising primers to ensure paint adhesion." },
              { n: "04", t: "Paint", d: "Two coats of premium weather-shield masonry paint." },
              { n: "05", t: "Clean", d: "Complete site tidy-up and final walkthrough inspection." },
            ].map((s) => (
              <div key={s.n} className="relative z-10 flex-1">
                <div className="text-6xl font-black text-secondary-container mb-4 opacity-50">
                  {s.n}
                </div>
                <h4 className="font-headline-sm mb-2 font-bold">{s.t}</h4>
                <p className="text-on-surface-variant">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-xl max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/painter-craftsman.jpg"
              alt={`A Dublin painter at work on a ${content.title.toLowerCase()} job`}
              width={1200}
              height={838}
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-8">
              Why Dublin Homeowners Choose Us
            </h2>
            <ul className="space-y-6">
              {[
                { i: "verified", t: "Punctual & Professional", d: "We arrive on time, every time, and respect your property during the entire project." },
                { i: "brush", t: "Premium Materials", d: "We only use top-tier paints like Dulux Weathershield, Sandtex and Farrow & Ball." },
                { i: "payments", t: "No Hidden Costs", d: "Our quotes are fixed. The price we say is the price you pay, guaranteed." },
              ].map((it) => (
                <li key={it.t} className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container text-3xl">
                    {it.i}
                  </span>
                  <div>
                    <h4 className="font-headline-sm text-lg mb-1 font-bold">{it.t}</h4>
                    <p className="text-on-surface-variant">{it.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-surface-container py-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-4">Transparent Pricing</h2>
            <p className="text-on-surface-variant">
              Estimated starting prices. Every job is quoted on site for accuracy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border mist-grey-border flex flex-col items-center text-center">
              <h4 className="font-headline-sm mb-2 font-bold">Terraced House</h4>
              <p className="text-on-surface-variant mb-6 text-sm">Front and Back</p>
              <div className="text-4xl font-black text-secondary mb-8">
                €1,250<span className="text-sm font-normal text-on-surface-variant">+</span>
              </div>
              <ul className="text-sm text-on-surface-variant space-y-3 mb-8 w-full">
                <li>Includes window sills</li>
                <li>Standard preparation</li>
                <li>2-day duration</li>
              </ul>
              <Link
                href="/contact/"
                className="w-full py-3 rounded-lg border-2 border-outline font-bold hover:bg-on-surface hover:text-white transition-all text-center"
              >
                Get Detailed Quote
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl border-4 border-primary-container shadow-xl transform md:scale-105 z-10 flex flex-col items-center text-center relative">
              <div className="absolute -top-4 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              <h4 className="font-headline-sm mb-2 font-bold">Semi-Detached</h4>
              <p className="text-on-surface-variant mb-6 text-sm">Front, Back &amp; Side</p>
              <div className="text-4xl font-black text-secondary mb-8">
                €1,850<span className="text-sm font-normal text-on-surface-variant">+</span>
              </div>
              <ul className="text-sm text-on-surface-variant space-y-3 mb-8 w-full">
                <li>Includes soffits/fascias</li>
                <li>Advanced preparation</li>
                <li>3-4 day duration</li>
              </ul>
              <Link
                href="/contact/"
                className="sun-yellow-bg w-full py-3 rounded-lg font-bold hover:opacity-90 transition-all text-center"
              >
                Get Detailed Quote
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl border mist-grey-border flex flex-col items-center text-center">
              <h4 className="font-headline-sm mb-2 font-bold">Detached House</h4>
              <p className="text-on-surface-variant mb-6 text-sm">All Four Elevations</p>
              <div className="text-4xl font-black text-secondary mb-8">
                €2,600<span className="text-sm font-normal text-on-surface-variant">+</span>
              </div>
              <ul className="text-sm text-on-surface-variant space-y-3 mb-8 w-full">
                <li>Full property protection</li>
                <li>Scaffolding included</li>
                <li>5-7 day duration</li>
              </ul>
              <Link
                href="/contact/"
                className="w-full py-3 rounded-lg border-2 border-outline font-bold hover:bg-on-surface hover:text-white transition-all text-center"
              >
                Get Detailed Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="py-xl max-w-7xl mx-auto px-6">
        <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-12">Our Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { area: "Rathmines, Dublin 6", desc: "Full Exterior Restoration", img: projectImgs[0] },
            { area: "Clontarf, Dublin 3", desc: "Masonry & Door Refurbishment", img: projectImgs[1] },
            { area: "Stillorgan, Dublin 18", desc: "Weather-shield Coating", img: projectImgs[2] },
          ].map((p) => (
            <div key={p.area} className="group relative rounded-xl overflow-hidden aspect-square">
              <Image
                src={p.img}
                alt={`Recent ${content.title.toLowerCase()} project in ${p.area}`}
                width={900}
                height={900}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <p className="text-white font-bold">{p.area}</p>
                <p className="text-primary-container text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="soft-cream-bg py-xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            className="material-symbols-outlined text-6xl text-primary-container mb-8"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            format_quote
          </span>
          <p className="font-headline-md text-2xl md:text-3xl italic mb-8 leading-relaxed">
            &quot;The team transformed our exterior. They were incredibly tidy, kept us
            informed about the weather delays, and the finish is absolutely flawless. Our
            house looks brand new again!&quot;
          </p>
          <div>
            <p className="font-bold text-xl ink-black-text">Sarah O&apos;Connor</p>
            <p className="text-on-surface-variant">Dundrum, Dublin</p>
          </div>
        </div>
      </section>

      {/* INLINE FAQ */}
      <section className="py-xl max-w-4xl mx-auto px-6">
        <h2 className="font-headline-lg text-3xl md:text-headline-lg text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {content.faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border mist-grey-border overflow-hidden"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <h3 className="font-headline-sm text-lg font-bold m-0">{f.q}</h3>
                <span className="material-symbols-outlined text-primary-container group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}
      {related.length > 0 && (
        <section className="border-y border-outline-variant py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4">
            <span className="font-label-sm font-semibold mr-4">Related Services:</span>
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}/`}
                className="bg-surface-container-high px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-container transition-colors"
              >
                {r.title}
              </Link>
            ))}
            <Link
              href="/services/"
              className="bg-surface-container-high px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-container transition-colors"
            >
              All services
            </Link>
            <Link
              href="/areas/"
              className="bg-surface-container-high px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-container transition-colors"
            >
              Areas covered
            </Link>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="sun-yellow-bg py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display-xl text-3xl md:text-5xl ink-black-text mb-6 font-extrabold">
            Ready to refresh your home&apos;s exterior?
          </h2>
          <p className="font-body-lg ink-black-text opacity-80 mb-10">
            Get a free, no-obligation quote today and join hundreds of satisfied Dublin homeowners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="bg-white ink-black-text px-10 py-4 rounded-lg font-bold text-lg hover:bg-on-surface hover:text-white transition-all shadow-lg"
            >
              Get Your Quote Now
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="signal-red-bg text-white px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
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
