"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/hibiscus", label: "Hibiscus" },
  { href: "/ginger", label: "Ginger" },
  { href: "/farmers", label: "Farmer Partnership" },
  { href: "/certifications", label: "Certifications" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = isHome && !scrolled;

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
        background: scrolled || !isHome ? "rgba(247,243,238,0.96)" : "transparent",
        backdropFilter: scrolled || !isHome ? "blur(8px)" : "none",
        borderBottom: scrolled || !isHome ? "1px solid #EDE8E1" : "1px solid transparent",
        transition: "background 0.35s, border-color 0.35s",
      }}
    >
      <Link href="/" style={{
        fontFamily: "var(--font-serif)",
        fontSize: 32, fontWeight: 600,
        color: dark ? "#fff" : "#0D2B20",
        textDecoration: "none",
        letterSpacing: "0.5px",
        transition: "color 0.35s",
      }}>
        Zingvera
      </Link>

      {/* Desktop links */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} className="hide-mobile">
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontSize: 13, fontWeight: 400,
            color: dark ? "rgba(255,255,255,0.75)" : pathname === l.href ? "#1B4332" : "#6B6B6B",
            textDecoration: "none",
            letterSpacing: "0.2px",
            transition: "color 0.2s",
            borderBottom: pathname === l.href ? "1px solid #2D6A4F" : "1px solid transparent",
            paddingBottom: 2,
          }}>
            {l.label}
          </Link>
        ))}
        <Link href="/#contact" style={{
          fontSize: 13, fontWeight: 500,
          background: "#C8A882",
          color: "#0D2B20",
          padding: "8px 18px",
          borderRadius: 4,
          textDecoration: "none",
          transition: "background 0.2s",
        }}>
          Request a sample
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="show-mobile"
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: dark ? "#fff" : "#111", fontSize: 22, padding: 4,
        }}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0,
          background: "#F7F3EE",
          borderBottom: "1px solid #EDE8E1",
          padding: "1.5rem clamp(1.5rem,5vw,4rem)",
          display: "flex", flexDirection: "column", gap: "1.25rem",
          zIndex: 99,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 16, color: "#1B4332", textDecoration: "none", fontWeight: 400,
              }}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} style={{
            fontSize: 14, fontWeight: 500, background: "#C8A882",
            color: "#0D2B20", padding: "10px 20px", borderRadius: 4,
            textDecoration: "none", textAlign: "center", marginTop: 4,
          }}>
            Request a sample
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hide-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </nav>
  );
}
