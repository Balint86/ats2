import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string; // last item can omit href
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((c, i) => {
        const isLast = i === items.length - 1;

        return (
          <span key={`${c.label}-${i}`} style={{ display: "inline-flex", alignItems: "center" }}>
            {c.href && !isLast ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span className="breadcrumbCurrent">{c.label}</span>
            )}

            {!isLast && <span className="breadcrumbSep">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
