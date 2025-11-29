"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {
  services?: Array<{ title: string; slug: string }>
}

export default function Header({ services = [] }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/associates", label: "Associates" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement | null>(null)
  const closeTimer = useRef<number | null>(null)

  // close dropdown on outside pointerdown (more reliable) with a small guard
  useEffect(() => {
    const onDoc = (e: PointerEvent) => {
      if (!servicesRef.current) return
      // if inside the services container, don't close
      if (servicesRef.current.contains(e.target as Node)) return
      // use a tiny delay to avoid races with link clicks
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
      // schedule close shortly
      closeTimer.current = window.setTimeout(() => setServicesOpen(false), 50)
    }
    document.addEventListener('pointerdown', onDoc)
    return () => {
      document.removeEventListener('pointerdown', onDoc)
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    }
  }, [])

  // mobile services toggle
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Visible large PA logo block (responsive). If you later replace with an image, adjust classes accordingly. */}
          {/* Replace the placeholder with the actual logo image. Use object-contain so the PNG scales nicely. */}
          <img
            src="/images/prim_audit_logo_transparent.png"
            alt="Prime Audit Solutions logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />

          <div>
            <div className="text-lg font-semibold text-primary-dark">Prime Audit Solutions LLC</div>
            <div className="text-xs text-muted">Accounting • Auditing • Bookkeeping • Software</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => {
            // render Services specially with a dropdown
            if (item.href === '/services') {
              const isActive = pathname?.startsWith('/services')
              return (
                <div key="services" className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setServicesOpen(s => !s)}
                    onKeyDown={(e) => { if (e.key === 'Escape') setServicesOpen(false) }}
                    className={`px-2 py-1 rounded ${isActive ? 'text-primary1 font-semibold' : 'text-text hover:text-primary1'} transition-colors`}
                    aria-expanded={servicesOpen}
                  >
                    Services
                  </button>

                  {servicesOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white shadow-md rounded border z-50">
                      {services.length === 0 ? (
                        <div className="p-3 text-sm text-muted">No services</div>
                      ) : (
                        services.map((s: any) => (
                          <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setServicesOpen(false)} className="block px-4 py-2 hover:bg-gray-50 text-sm text-text">{s.title}</Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )
            }

            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 py-1 rounded ${
                  isActive
                    ? "text-primary1 font-semibold"
                    : "text-text hover:text-primary1"
                } transition-colors`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border text-muted"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {open && (
            <div className="absolute right-4 mt-2 w-64 bg-white shadow-lg rounded p-2">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));

                // For mobile, expand Services to show links
                if (item.href === '/services') {
                  return (
                    <div key="mobile-services" className="mb-1">
                          <button onClick={() => setMobileServicesOpen(s => !s)} className="w-full text-left px-4 py-2 text-text font-medium flex justify-between items-center">
                            <span>Services</span>
                            <span className="ml-2">{mobileServicesOpen ? '−' : '+'}</span>
                          </button>
                          {mobileServicesOpen && (
                            <div className="pl-4">
                              {services.length === 0 ? (
                                <div className="px-4 py-2 text-sm text-muted">No services</div>
                              ) : (
                                services.map((s: any) => (
                                  <button key={s.slug} onClick={() => { setOpen(false); setMobileServicesOpen(false); router.push(`/services/${s.slug}`) }} className="block w-full text-left px-4 py-2 text-sm text-primary-dark hover:bg-gray-50">{s.title}</button>
                                ))
                              )}
                            </div>
                          )}
                        </div>
                  )
                }

                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      setOpen(false);
                      router.push(item.href);
                    }}
                    className={`block w-full text-left px-4 py-2 ${
                      isActive
                        ? "text-primary1 font-semibold"
                        : "text-text hover:text-primary1"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
