import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

const PAGE_URL = `${business.siteUrl}/about/`;

export const metadata: Metadata = {
  title: "About Us | Exterior House Painting Dublin",
  description:
    "Family-run Dublin painting company based in Grand Canal Dock. Insured, vetted, decade of finishes across Dublin 2 and Greater Dublin. Meet the team.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Us | Exterior House Painting Dublin",
    description:
      "Family-run Dublin painting company based in Grand Canal Dock. Decade of finishes across Dublin 2 and Greater Dublin.",
    url: PAGE_URL,
  },
};

export default function AboutPage() {
  const trail = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
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

      <section className="soft-cream-bg py-xl">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block font-semibold">
              ABOUT US
            </span>
            <h1 className="font-display-xl text-4xl md:text-5xl lg:text-display-xl mb-6 leading-tight">
              About {business.name}
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-6">
              We are a family-run Dublin painting company based at 77 Sir John
              Rogerson&apos;s Quay in Grand Canal Dock. A decade of finishes
              across Dublin 2 and the Greater Dublin region. Insured, vetted,
              and proud of every facade we paint.
            </p>
            <p className="font-body-lg text-on-surface-variant mb-8">
              Our crew handles everything from Georgian terraces in the city
              centre to suburban semis in Tallaght, Swords, Dundrum and
              beyond — interior, exterior, residential and commercial.
            </p>
            <Link
              href="/contact/"
              className="sun-yellow-bg ink-black-text px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity inline-block"
            >
              Get a Free Quote
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/painter-craftsman.jpg"
              alt="The Exterior House Painting Dublin team at work on a Dublin 2 exterior"
              width={1400}
              height={978}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-xl">
        <div className="max-w-4xl mx-auto px-8 space-y-5 text-on-surface-variant font-body-lg">
          <h2 className="font-headline-lg text-2xl md:text-3xl mb-2 text-on-surface">
            Our story
          </h2>
          <p>
            Exterior House Painting Dublin started a decade ago as a two-person
            crew working out of a van in Dublin 2. Word-of-mouth in Grand Canal
            Dock, Ranelagh and Rathmines built the business — exterior
            repaints, then full-house interiors, then commercial fit-outs and
            apartment-block contracts. Today the team handles dozens of
            properties a year, and most of our work still comes from referrals.
          </p>
          <p>
            We&apos;re registered painters and decorators, SafePass-trained,
            and carry €10M public liability cover plus full employer&apos;s
            liability insurance. Every painter on the crew is in-house — we
            don&apos;t subcontract. That&apos;s the only way to guarantee the
            quality is consistent, job after job.
          </p>
          <h2 className="font-headline-lg text-2xl md:text-3xl mb-2 text-on-surface">
            Our values
          </h2>
          <p>
            <strong>Show up on time.</strong> If we say we&apos;ll be on site
            at 8AM Monday, we are. <strong>Quote what we charge.</strong> Our
            written quotes are fixed-price — no surprise extras at the end of
            the job. <strong>Leave it cleaner than we found it.</strong> Drop
            sheets, masking, dust-extracted sanding, and a daily clean-down.{" "}
            <strong>Stand behind the work.</strong> A 5-year workmanship
            warranty on exterior masonry repaints, on top of the paint
            manufacturer&apos;s product guarantee.
          </p>
        </div>
      </section>

      <section className="bg-white py-xl">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-center mb-16">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "verified", t: "Insured & Vetted", d: "€10M public liability and employer's liability cover, every job, no exceptions." },
              { icon: "schedule", t: "On Time, Every Time", d: "We start when we say we will and we finish to schedule. Your time matters." },
              { icon: "thumb_up", t: "Local Reputation", d: "Most of our work comes from word-of-mouth across Dublin. Quality is our marketing." },
            ].map((f) => (
              <div key={f.t} className="text-center">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl">
                    {f.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-xl mb-3 font-bold">{f.t}</h3>
                <p className="text-on-surface-variant">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-container py-xl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-primary-fixed mb-6 font-bold">
            Talk to a Dublin Painter Today
          </h2>
          <p className="text-on-primary-fixed-variant font-body-lg mb-10">
            Free written quotes within 24 hours. No deposit required to book a survey.
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
