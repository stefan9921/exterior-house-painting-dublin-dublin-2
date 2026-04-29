import type { Metadata } from "next";
import Link from "next/link";
import { business, areas } from "@/lib/business";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

const PAGE_URL = `${business.siteUrl}/areas/`;

export const metadata: Metadata = {
  title: "Painters Dublin | Areas We Cover Across Greater Dublin",
  description:
    "Painters serving every part of Dublin and Greater Dublin: Tallaght, Swords, Lucan, Blanchardstown, Malahide, Blackrock, Dundrum, Rathmines and more. Find your area.",
  alternates: { canonical: "/areas/" },
  openGraph: {
    title: "Painters Dublin | Areas We Cover Across Greater Dublin",
    description:
      "Painters serving every part of Dublin and Greater Dublin. Find your area and get a free quote.",
    url: PAGE_URL,
  },
};

export default function AreasHubPage() {
  const trail = [
    { name: "Home", href: business.siteUrl + "/" },
    { name: "Areas", href: PAGE_URL },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          trail.map((c) => ({ name: c.name, url: c.href }))
        )}
      />
      <Breadcrumbs trail={trail.map((t) => ({ name: t.name, href: t.href.replace(business.siteUrl, "") }))} />

      <section className="soft-cream-bg py-xl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block font-semibold">
            AREAS WE COVER
          </span>
          <h1 className="font-display-xl text-4xl md:text-5xl lg:text-display-xl mb-6 leading-tight">
            Painters Across Dublin and Greater Dublin
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Based in Grand Canal Dock, Dublin 2, our painting crew works across
            every part of the city and the wider Greater Dublin region. Pick
            your area below for local pricing, recent jobs, and a free quote.
          </p>
        </div>
      </section>

      <section className="bg-white py-xl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}/`}
                className="group bg-white border mist-grey-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-center justify-between"
              >
                <div>
                  <h2 className="font-headline-sm text-xl mb-1 font-bold">
                    Painters {a.name}
                  </h2>
                  <p className="text-on-surface-variant text-sm">
                    Local exterior &amp; interior painting in {a.name}
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary-container text-3xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-cream-bg py-xl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-6">
            Don&apos;t see your area?
          </h2>
          <p className="text-on-surface-variant font-body-lg mb-10">
            We cover every part of Dublin and the Greater Dublin region —
            including Wicklow, Meath, Kildare and Westmeath. Call and ask if
            yours isn&apos;t listed.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact/"
              className="bg-on-surface text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-black transition-all"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services/"
              className="border-2 border-on-surface text-on-surface px-10 py-5 rounded-xl font-bold text-lg hover:bg-on-surface hover:text-white transition-all"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
