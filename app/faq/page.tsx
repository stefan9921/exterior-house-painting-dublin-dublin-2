import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Painting FAQs Dublin",
  description:
    "Answers to common Dublin painting questions: cost per room, full-house pricing, best time of year, paint over old paint, October weather, painter day rates.",
};

const faqs = [
  { q: "Is October too late to paint outside?", a: "Early October is usually fine; late October is risky in Dublin. We need three consecutive dry days and surface temperatures consistently above 8°C for masonry paint to cure properly." },
  { q: "How much does it cost to paint the outside of a house in Ireland?", a: "Most Dublin 3-bed semi exteriors fall €1,800–€2,500 (prep, primer and two coats of weather-shield masonry paint). Larger detached homes with scaffolding £2,600–€5,000." },
  { q: "How much does it cost to have your outside house painted?", a: "Most Dublin homes are €1,800–€3,500 for a full exterior. Detached homes needing scaffolding £2,600–€5,000. We provide a fixed written quote within 24 hours of a free site visit." },
  { q: "Can I just paint over old exterior paint?", a: "If the old coating is sound and clean, yes — after pressure-wash, scrape, fill and a stabilising primer. Failing or chalky paint must be removed first to guarantee adhesion of the new coats." },
  { q: "How much do painters charge in Dublin?", a: "Day rate for a two-painter crew in Dublin is €350–€500/day depending on access and finish. Most projects are quoted as fixed-price after a free site visit so you don't pay by the day." },
  { q: "How much does it cost to paint a 3 bedroom house in Ireland?", a: "Interior-only typically €2,200–€3,200; full interior + exterior €4,500–€6,500. Always quoted on site for accuracy." },
  { q: "How much will a painter charge to paint a room?", a: "Standard bedroom €280–€420 for two-coat walls and ceiling. Larger rooms or hall/stairs/landing combinations are priced higher." },
  { q: "What time of year is best to paint a house?", a: "April–September is ideal in Ireland — drier weather and consistent temperatures above 10°C allow paint to cure properly. We can paint year-round given a few dry days in a row." },
  { q: "How much does it cost to paint a house in Dublin?", a: "Interior-only 3-bed semis €2,200–€3,200; full interior + exterior €4,500–€6,500. Larger detached homes with scaffolding can reach £8,500." },
  { q: "How much do painters charge to paint a full house?", a: "Full house (interior + exterior) typically €4,500–€8,500 in Dublin. Bigger detached homes can be more — every job is quoted on site for accuracy." },
  { q: "How much do painters charge per day in Ireland?", a: "Day rates for a two-painter team in Dublin commonly fall €350–€500/day depending on access and height. Most jobs are quoted fixed-price by the project, not by the day." },
  { q: "How much does it cost to paint a 4 bedroom house?", a: "Interior-only €2,800–€4,200; full interior + exterior commonly €5,800–€8,500. Always quoted on site for accuracy." },
];

export default function FAQPage() {
  return (
    <>
      <section className="soft-cream-bg py-xl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block font-semibold">
            FAQ
          </span>
          <h1 className="font-display-xl text-4xl md:text-5xl lg:text-display-xl mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-body-lg text-on-surface-variant">
            Honest answers to the questions Dublin homeowners ask most often about
            interior and exterior painting projects.
          </p>
        </div>
      </section>

      <section className="bg-white py-xl">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border mist-grey-border overflow-hidden"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-headline-sm text-lg font-bold pr-4">{f.q}</span>
                  <span className="material-symbols-outlined text-primary-container group-open:rotate-180 transition-transform flex-shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-container py-xl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-primary-fixed mb-6 font-bold">
            Still have questions?
          </h2>
          <p className="text-on-primary-fixed-variant font-body-lg mb-10">
            Call us — we&apos;re happy to give honest advice over the phone, even if you&apos;re
            still deciding.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact/"
              className="bg-on-primary-fixed text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="border-2 border-on-primary-fixed text-on-primary-fixed px-10 py-5 rounded-xl font-bold text-lg hover:bg-on-primary-fixed hover:text-white transition-all flex items-center gap-2"
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
