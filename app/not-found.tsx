import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-xl">
      <div className="max-w-2xl mx-auto px-8 text-center">
        <h1 className="font-display-xl text-5xl md:text-6xl mb-6 font-extrabold">404</h1>
        <p className="text-on-surface-variant text-xl mb-8">
          That page doesn&apos;t exist. It might have moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
