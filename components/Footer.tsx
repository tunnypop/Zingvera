import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0D2B20", padding: "3rem clamp(1.5rem,5vw,4rem)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2.5rem",
          marginBottom: "2.5rem",
        }}>
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
              Zingvera
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontWeight: 300 }}>
              Premium botanicals sourced directly from West Africa's finest growing regions.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C8A882", marginBottom: "1rem" }}>Products</div>
            {[{ href: "/hibiscus", label: "Dried Hibiscus Flowers" }, { href: "/ginger", label: "Dry Split Ginger" }].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "0.6rem" }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C8A882", marginBottom: "1rem" }}>Company</div>
            {[
              { href: "/farmers", label: "Farmer Partnership" },
              { href: "/certifications", label: "Certifications" },
              { href: "/about", label: "About Us" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "0.6rem" }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C8A882", marginBottom: "1rem" }}>Contact</div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, fontWeight: 300 }}>
              victor@rivenson.com<br />
              Lagos, Nigeria<br />
              zingvera.com
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} Zingvera. A brand of Rivenson Capital, Lagos Nigeria.</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>NEPC Registered Exporter</p>
        </div>
      </div>
    </footer>
  );
}
