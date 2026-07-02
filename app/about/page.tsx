import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Zingvera",
  description: "Zingvera is a brand of Rivenson Capital, a Lagos-based investment and venture firm. We build and operate businesses across agriculture, technology, and trade.",
};

const S = {
  label: { fontSize: 11, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#2D6A4F", display: "block", marginBottom: "1.25rem" },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 500, lineHeight: 1.15, color: "#111", marginBottom: "1rem" },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0D2B20", padding: "8rem clamp(1.5rem,5vw,4rem) clamp(4rem,8vw,6rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <Link href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>← Back to home</Link>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(42px,7vw,80px)", fontWeight: 500, lineHeight: 1.05, color: "#fff", maxWidth: 680, marginBottom: "1.5rem", marginTop: "1.5rem" }}>
            Built in Lagos.<br /><em style={{ color: "#C8A882" }}>Selling to the world.</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.8, fontWeight: 300 }}>
            Zingvera is a premium agricultural export brand built to connect Nigeria's finest botanical producers with global manufacturers, ingredient buyers, and distributors.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ background: "#F7F3EE", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(3rem,6vw,5rem)" }}>
          <div>
            <span style={S.label}>Our mission</span>
            <h2 style={S.h2}>Nigeria produces<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>world-class botanicals.</em></h2>
            <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.25rem" }}>
              Nigeria is one of the world's largest producers of hibiscus and ginger — yet most of it leaves the country as a raw, undocumented commodity through informal channels, and the value created downstream accrues to processors and traders in Europe and Asia.
            </p>
            <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300 }}>
              Zingvera exists to change that. We are building a documented, traceable, brand-forward agro-export operation that captures more value in Nigeria — for our business, for the cooperatives we source from, and for the Nigerian agro-export sector as a whole.
            </p>
          </div>
          <div>
            <span style={S.label}>What we believe</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginTop: "0.25rem" }}>
              {[
                { title: "Quality is a choice, not a constraint", body: "Nigerian agro-exports have a reputation problem that comes from informal sourcing, not from the land. We prove the alternative." },
                { title: "Documentation is a moat", body: "Most Nigerian agro-exporters can't produce consistent paperwork. We make documentation a core competency from day one." },
                { title: "Direct sourcing is the only sustainable model", body: "Long-term quality and traceability require direct farmer relationships. We invest in those relationships instead of buying from whoever has stock." },
              ].map(b => (
                <div key={b.title} style={{ borderTop: "1px solid #EDE8E1", paddingTop: "1.75rem" }}>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 500, color: "#111", marginBottom: "0.4rem" }}>{b.title}</h4>
                  <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.75, fontWeight: 300 }}>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RIVENSON */}
      <section style={{ background: "#fff", borderTop: "1px solid #EDE8E1", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={S.label}>Parent company</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(3rem,6vw,5rem)", alignItems: "center" }}>
            <div>
              <h2 style={S.h2}>A brand of<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>Rivenson Capital.</em></h2>
              <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.25rem" }}>
                Zingvera is owned and operated by Rivenson Capital, a Lagos-based investment and venture-building firm. Rivenson operates across domain investing, early-stage venture building, Nigerian capital markets, and real estate — with Zingvera as its agricultural export vertical.
              </p>
              <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
                The Rivenson Capital structure means Zingvera benefits from an established legal entity, operational infrastructure, and business relationships built over years of operating in the Lagos market.
              </p>
              <a href="mailto:victor@rivenson.com" style={{ fontSize: 13, fontWeight: 500, color: "#1B4332", textDecoration: "none", borderBottom: "1px solid #2D6A4F", paddingBottom: 2 }}>Contact: victor@rivenson.com →</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#EDE8E1" }}>
              {[
                { label: "Entity", value: "Rivenson Capital" },
                { label: "Location", value: "Lagos, Nigeria" },
                { label: "Registry", value: "CAC Registered" },
                { label: "Export reg.", value: "NEPC Registered" },
              ].map(d => (
                <div key={d.label} style={{ background: "#F7F3EE", padding: "1.5rem" }}>
                  <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#6B6B6B", marginBottom: "0.4rem" }}>{d.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1B4332", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 500, color: "#fff", marginBottom: "1rem", lineHeight: 1.15 }}>
            Ready to source from <em style={{ color: "#C8A882", fontStyle: "italic" }}>Nigeria?</em>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            Get in touch to request a sample, discuss pricing, or ask about our certifications and compliance documentation.
          </p>
          <Link href="/#contact" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, background: "#C8A882", color: "#0D2B20", padding: "14px 32px", borderRadius: 4, textDecoration: "none", display: "inline-block" }}>
            Request a sample →
          </Link>
        </div>
      </section>
    </>
  );
}
