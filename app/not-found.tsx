import type { Metadata } from "next";
import Link from "next/link";
import { services, areas } from "@/lib/business";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Sorry — that page does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const popularServices = services.slice(0, 4);
  const popularAreas = areas.slice(0, 6);

  return (
    <section className="bg-white py-xl">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <p className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm mb-4">
          Error 404
        </p>
        <h1 className="font-display-xl text-5xl md:text-6xl mb-6 font-extrabold">
          That page has moved on
        </h1>
        <p className="text-on-surface-variant text-xl mb-10 max-w-xl mx-auto">
          The page you were looking for can&apos;t be found. It may have been
          renamed, or the link might be slightly off. Try one of the popular
          pages below, or head back to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-block bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            Back to homepage
          </Link>
          <Link
            href="/contact/"
            className="inline-block border-2 border-on-surface text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-on-surface hover:text-white transition-all"
          >
            Get a free quote
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left mt-16">
          <div>
            <h2 className="font-headline-sm text-xl mb-4 font-bold">
              Popular services
            </h2>
            <ul className="space-y-2">
              {popularServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-tertiary font-semibold hover:underline"
                  >
                    {s.title} in Dublin
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/"
                  className="text-tertiary font-semibold hover:underline"
                >
                  See all services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-headline-sm text-xl mb-4 font-bold">
              Areas we cover
            </h2>
            <ul className="space-y-2">
              {popularAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}/`}
                    className="text-tertiary font-semibold hover:underline"
                  >
                    Painters {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas/"
                  className="text-tertiary font-semibold hover:underline"
                >
                  See all areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
