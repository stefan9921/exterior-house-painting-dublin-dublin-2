import Link from "next/link";
import { business, services, areas } from "@/lib/business";

export default function Footer() {
  const popularServices = services.slice(0, 5);
  const popularAreas = areas.slice(0, 6);

  return (
    <footer className="bg-on-surface text-white pt-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <span className="font-headline-sm mb-6 block text-white text-lg font-bold">
            {business.name}
          </span>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Professional painting and decorating services serving Dublin 2 and
            Greater Dublin. Fully insured, reliable, and committed to high-end
            craftsmanship.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary-container">
              social_leaderboard
            </span>
            <span className="material-symbols-outlined text-primary-container">
              share
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Services</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            {popularServices.map((s) => (
              <li key={s.slug}>
                <Link
                  className="hover:text-primary-container transition-colors"
                  href={`/services/${s.slug}/`}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Popular Areas</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            {popularAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  className="hover:text-primary-container transition-colors"
                  href={`/areas/${a.slug}/`}
                >
                  Painters {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="contact">
          <h4 className="font-bold text-white mb-6">Get in Touch</h4>
          <address className="not-italic text-zinc-400 text-sm space-y-4">
            <p className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary-container text-[18px]">
                location_on
              </span>
              <span>
                {business.street},<br />
                {business.area}, {business.city},<br />
                {business.postcode}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-[18px]">
                call
              </span>
              <a className="hover:text-primary-container" href={`tel:${business.phone}`}>
                {business.phoneDisplay}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-[18px]">
                mail
              </span>
              <a className="hover:text-primary-container" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-[18px]">
                schedule
              </span>
              {business.hours}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-8 bg-black/50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} {business.name}. All rights reserved. Fully Insured &amp; Dublin Based.
          </div>
          <div className="flex gap-6">
            <Link className="hover:text-primary-container" href="/privacy-policy/">
              Privacy Policy
            </Link>
            <Link className="hover:text-primary-container" href="/terms/">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="h-2 bg-primary-container"></div>
    </footer>
  );
}
