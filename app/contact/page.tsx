import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call +353 1 230 8892, email info@exteriorhousepaintingdublin.ie or visit 77 Sir John Rogerson's Quay, Dublin 2. Free quotes, 7-day availability.",
};

export default function ContactPage() {
  return (
    <>
      <section className="soft-cream-bg py-xl">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block font-semibold">
            CONTACT US
          </span>
          <h1 className="font-display-xl text-4xl md:text-5xl lg:text-display-xl mb-6 leading-tight">
            Contact {business.name}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Call, email or pop in for a chat. Free written quotes within 24 hours, 7 days
            a week across Dublin 2 and the Greater Dublin region.
          </p>
        </div>
      </section>

      <section className="bg-white py-xl">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { icon: "call", title: "Phone", body: business.phoneDisplay, href: `tel:${business.phone}` },
            { icon: "mail", title: "Email", body: business.email, href: `mailto:${business.email}` },
            {
              icon: "location_on",
              title: "Address",
              body: `${business.street}, ${business.area}, ${business.city}, ${business.postcode}`,
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-white border mist-grey-border rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="material-symbols-outlined text-on-primary-container text-3xl">
                  {c.icon}
                </span>
              </div>
              <h3 className="font-headline-sm mb-4 font-bold text-xl">{c.title}</h3>
              {c.href ? (
                <a className="text-on-surface-variant hover:text-tertiary" href={c.href}>
                  {c.body}
                </a>
              ) : (
                <p className="text-on-surface-variant">{c.body}</p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-8 mt-16">
          <div className="bg-surface-container rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="font-headline-md text-2xl md:text-3xl mb-6 font-bold text-center">
              Request a Free Quote
            </h2>
            <form
              className="space-y-5"
              action={`mailto:${business.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your name"
                  required
                  className="w-full border-2 border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary-container bg-white"
                />
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone number"
                  required
                  className="w-full border-2 border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary-container bg-white"
                />
              </div>
              <input
                type="email"
                name="Email"
                placeholder="Email address"
                required
                className="w-full border-2 border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary-container bg-white"
              />
              <input
                type="text"
                name="Address"
                placeholder="Property address (Dublin area)"
                className="w-full border-2 border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary-container bg-white"
              />
              <textarea
                name="Details"
                placeholder="Tell us about the job (interior, exterior, size, timing)"
                rows={5}
                className="w-full border-2 border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary-container bg-white"
              />
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Send Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="soft-cream-bg py-lg">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-on-surface font-bold text-lg mb-2">Opening Hours</p>
          <p className="text-on-surface-variant">{business.hours}</p>
        </div>
      </section>
    </>
  );
}
