import Link from "next/link";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  if (!trail.length) return null;
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-6 md:px-8 pt-6 text-sm text-on-surface-variant"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((c, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-semibold text-on-surface" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className="hover:text-tertiary hover:underline transition-colors"
                >
                  {c.name}
                </Link>
              )}
              {!isLast && <span className="text-outline-variant">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
