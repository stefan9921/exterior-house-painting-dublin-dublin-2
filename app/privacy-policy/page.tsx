import type { Metadata } from "next";
import { business } from "@/lib/business";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Exterior House Painting Dublin handles personal data submitted via quotes, calls, and emails.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPage() {
  const trail = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy/" },
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
        <h1 className="font-display-xl text-4xl md:text-5xl mb-6">Privacy Policy</h1>
        <p className="text-on-surface-variant mb-8">Last updated: 2025</p>

        <div className="prose max-w-none space-y-6 text-on-surface-variant font-body-lg">
          <p>
            {business.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy
            and is committed to protecting any personal data you share with us.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            What we collect
          </h2>
          <p>
            We collect the information you provide when you request a quote, call us or
            email us — typically your name, phone number, email address, property address
            and the details of the painting work you need.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            How we use it
          </h2>
          <p>
            We use this information solely to respond to your enquiry, provide a quote and
            (if you proceed) deliver the painting work. We do not sell your data to third
            parties.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            How long we keep it
          </h2>
          <p>
            Quote enquiries that don&apos;t lead to a job are retained for 12 months and
            then deleted. Customer records are retained for 7 years for accounting and
            warranty purposes.
          </p>

          <h2 className="font-headline-md text-2xl text-on-surface mt-10 mb-3 font-bold">
            Your rights
          </h2>
          <p>
            Under GDPR you can request access to, correction of, or deletion of your data
            at any time. Email {business.email}.
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
