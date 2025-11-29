// app/components/Breadcrumbs.jsx
import Link from 'next/link'

export default function Breadcrumbs({ items = [] }:any) {
  // helper to detect external URLs
  const isExternal = (href:any) => typeof href === 'string' && /^https?:\/\//i.test(href)

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/80">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>

        {items.map((it:any, idx:any) => {
          const isLast = idx === items.length - 1
          return (
            <li key={idx} className="flex items-center gap-2">
              <span aria-hidden>›</span>

              {isLast ? (
                // last item: plain text, mark as current
                <span aria-current="page" className="font-medium">{it.label}</span>
              ) : it.href ? (
                // intermediate item: link (external remains anchor)
                isExternal(it.href) ? (
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {it.label}
                  </a>
                ) : (
                  <Link href={it.href} className="hover:underline">
                    {it.label}
                  </Link>
                )
              ) : (
                <span>{it.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
