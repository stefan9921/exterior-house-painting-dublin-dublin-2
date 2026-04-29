import type { Metadata } from "next";
import Link from "next/link";
import { business, services } from "@/lib/business";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

const PAGE_URL = `${business.siteUrl}/services/`;

export const metadata: Metadata = {
  title: "Painting Services Dublin | Full Service List",
  description:
    "Every painting service we offer in Dublin: exterior, interior, commercial, masonry, wallpapering and more. Browse the full list and pick the right service for your project.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Painting Services Dublin | Full Service List",
    description:
      "Every painting service we offer in Dublin: exterior, interior, commercial, masonry, wallpapering and more.",
    url: PAGE_URL,
  },
};

export default function ServicesHubPage() {
  const trail = [
    { name: "Home", href: business.siteUrl + "/" },
    { name: "Services", href: PAGE_URL },
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
            ALL SERVICES
          </span>
          <h1 className="font-display-xl text-4xl md:text-5xl lg:text-display-xl mb-6 leading-tight">
            Dublin Painting Services
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            From full exterior repaints to single-room interiors, masonry work
            to wallpaper hanging, here is every service our Dublin painting
            crew delivers. Click any card to see scope, pricing and FAQs.
          </p>
        </div>
      </section>

      <section className="bg-white py-xl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="bg-white border mist-grey-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-14 h-14 bg-primary-container rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl">
                    {s.icon}
                  </span>
                </div>
                <h2 className="font-headline-sm text-xl mb-3 font-bold">
                  {s.title} Dublin
                </h2>
                <p className="text-on-surface-variant flex-grow mb-6">
                  {s.short}
                </p>
                <span className="text-tertiary font-bold flex items-center gap-1">
                  Read more <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-cream-bg py-xl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-on-surface-variant font-body-lg mb-10">
            Tell us about the property and we&apos;ll recommend the right scope.
            Free written quotes within 24 hours, 7 days a week, across Dublin 2
            and the Greater Dublin region.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact/"
              className="bg-on-surface text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-black transition-all"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/areas/"
              className="border-2 border-on-surface text-on-surface px-10 py-5 rounded-xl font-bold text-lg hover:bg-on-surface hover:text-white transition-all"
            >
              See Areas Covered
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
