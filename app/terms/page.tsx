import type { Metadata } from "next";
import { business } from "@/lib/business";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Service terms covering quotes, deposits, scheduling, snags, and warranties for Dublin painting work.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  const trail = [
    { name: "Home", href: "/" },
    { name: "Terms of Service", href: "/terms/" },
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
      <Breadcrumbs trail={trail} />
    <section className="bg-white py-xl">
      <div className="max-w-3xl mx-auto px-8">
        <h1 className="font-display-xl text-4xl md:text-5xl mb-6">Terms of Service</h1>
        <p className="text-on-surface-variant mb-8">Last updated: 2025</p>

        <div className="prose max-w-none space-y-6 text-on-surface-variant font-body-lg">
          <p>
            These terms apply to painting and decorating services delivered by{" "}
            {business.name}. By accepting a written quote you agree to these terms.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            Quotes
          </h2>
          <p>
            All quotes are written, fixed-price and valid for 30 days. The quote covers
            the scope agreed at the site visit. Additional work outside scope will be
            quoted separately before proceeding.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            Deposits & payment
          </h2>
          <p>
            For jobs over €2,000 a 25% deposit is requested to secure the start date. The
            balance is due on completion and customer sign-off. Smaller jobs are payable in
            full on completion.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            Scheduling
          </h2>
          <p>
            We confirm a start date in writing once a deposit is received. Exterior work
            is weather-dependent — if the forecast prevents safe paint application we will
            reschedule the affected days at no extra cost.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            Snags & sign-off
          </h2>
          <p>
            On completion we walk the job with you and agree any snags. We come back to
            address agreed snags within 14 days. Final invoice is due once snags are
            cleared.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            Workmanship warranty
          </h2>
          <p>
            We warrant our workmanship for 2 years on interior work and 5 years on
            exterior masonry repaints, on top of the paint manufacturer&apos;s product
            guarantee. The warranty does not cover damage caused by structural movement,
            water ingress or third-party works.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            Insurance
          </h2>
          <p>
            We carry €10M public liability insurance and full employer&apos;s liability
            cover. Certificates available on request.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            Contact
          </h2>
          <p>
            {business.name}, {business.address}. Phone {business.phoneDisplay}. Email{" "}
            {business.email}.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
