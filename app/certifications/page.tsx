import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications & Compliance — Zingvera",
  description: "Zingvera's certifications and compliance documentation for EU, US, and global export markets. NEPC registration, phytosanitary certificates, and EU MRL compliance.",
};

const S = {
  label: { fontSize: 11, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#2D6A4F", display: "block", marginBottom: "1.25rem" },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 500, lineHeight: 1.15, color: "#111", marginBottom: "1rem" },
};

export default function CertificationsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#1B4332", padding: "8rem clamp(1.5rem,5vw,4rem) clamp(4rem,8vw,6rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <Link href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>← Back to home</Link>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(42px,7vw,80px)", fontWeight: 500, lineHeight: 1.05, color: "#fff", maxWidth: 720, marginBottom: "1.5rem", marginTop: "1.5rem" }}>
            Documented.<br /><em style={{ color: "#C8A882" }}>Certified. Ready.</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.8, fontWeight: 300 }}>
            Compliance documentation is one of the biggest barriers to sourcing from African suppliers. We treat it as a core competency — not an afterthought.
          </p>
        </div>
      </section>

      {/* CORE CERTS */}
      <section style={{ background: "#F7F3EE", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={S.label}>Core certifications</span>
          <h2 style={S.h2}>What comes with<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>every shipment.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 2, background: "#EDE8E1", marginTop: "3rem" }}>
            {[
              { icon: "🌿", cert: "Phytosanitary Certificate", issuer: "NAQS — National Agricultural Quarantine Service", desc: "Mandatory for all plant-origin exports from Nigeria. Confirms the product has been inspected and is free from regulated pests and diseases. Required by virtually all importing countries.", availability: "Every shipment" },
              { icon: "📋", cert: "NEPC Export Registration", issuer: "Nigeria Export Promotion Council", desc: "Zingvera is registered with NEPC. Our registration number appears on all commercial documentation. NEPC registration is required for formal Nigerian agro-exports.", availability: "On all documents" },
              { icon: "📄", cert: "Certificate of Origin", issuer: "Nigerian Association of Chambers of Commerce (NACCIMA)", desc: "Confirms the product's country of origin as Nigeria. Required for customs clearance in most markets and for qualifying under preferential trade agreements.", availability: "Every shipment" },
              { icon: "📦", cert: "Commercial Invoice & Packing List", issuer: "Zingvera / Rivenson Capital", desc: "Full commercial documentation including product description, HS code, quantity, gross/net weight, packaging details, FOB value, and buyer/seller details.", availability: "Every shipment" },
            ].map(c => (
              <div key={c.cert} style={{ background: "#fff", padding: "2rem 1.75rem" }}>
                <div style={{ fontSize: 28, marginBottom: "1rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 500, color: "#111", marginBottom: "0.3rem" }}>{c.cert}</h3>
                <div style={{ fontSize: 11, color: "#2D6A4F", letterSpacing: "0.5px", marginBottom: "0.75rem" }}>{c.issuer}</div>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.75, fontWeight: 300, marginBottom: "1rem" }}>{c.desc}</p>
                <div style={{ fontSize: 11, background: "#EAF2EB", color: "#1B4332", padding: "4px 10px", borderRadius: 2, display: "inline-block", fontWeight: 500 }}>{c.availability}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU COMPLIANCE */}
      <section style={{ background: "#fff", borderTop: "1px solid #EDE8E1", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(3rem,6vw,5rem)" }}>
          <div>
            <span style={S.label}>EU market compliance</span>
            <h2 style={S.h2}>Meeting EU<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>entry requirements.</em></h2>
            <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
              The EU is our primary target export market. Entry requires compliance with the EU General Food Law, pesticide Maximum Residue Levels (MRLs), and food safety documentation standards under the EU Food Hygiene Regulations.
            </p>
            <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300 }}>
              We align our sourcing and processing practices with these requirements from the outset — because building compliance in retrospectively is far harder than building it in from the start.
            </p>
          </div>
          <div>
            {[
              { title: "Pesticide MRL compliance", status: "Active", body: "We source from cooperatives that use approved inputs. EU MRL testing documentation available on request through accredited Nigerian laboratories." },
              { title: "HACCP-aligned processing", status: "Active", body: "Our Lagos facility follows HACCP (Hazard Analysis Critical Control Points) principles. Full process documentation available for buyer quality audits." },
              { title: "Aflatoxin testing", status: "On request", body: "Aflatoxin testing for ginger and hibiscus available on request from accredited labs. Required by some EU buyers, especially in food manufacturing." },
              { title: "EU Organic certification", status: "In progress", body: "We are working toward EU organic certification for our cooperative sourcing base. This will enable entry into the premium organic ingredient market segment." },
            ].map(c => (
              <div key={c.title} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid #EDE8E1" }}>
                <div style={{ minWidth: 8, height: 8, background: c.status === "Active" ? "#2D6A4F" : c.status === "In progress" ? "#C8A882" : "#6B6B6B", borderRadius: "50%", marginTop: 7 }} />
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                    <h4 style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{c.title}</h4>
                    <span style={{ fontSize: 10, background: c.status === "Active" ? "#EAF2EB" : c.status === "In progress" ? "#FEF6EC" : "#F3F4F6", color: c.status === "Active" ? "#1B4332" : c.status === "In progress" ? "#8C5A00" : "#6B6B6B", padding: "2px 8px", borderRadius: 2, fontWeight: 500, letterSpacing: "0.5px" }}>{c.status}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, fontWeight: 300 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT & TRADE TERMS */}
      <section style={{ background: "#EAF2EB", borderTop: "1px solid #EDE8E1", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={S.label}>Trade terms</span>
          <h2 style={S.h2}>How we work<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>with buyers.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2, background: "#EDE8E1", marginTop: "3rem" }}>
            {[
              { label: "Incoterm", value: "FOB Lagos", detail: "Port Apapa or Tin Can Island. CIF available for established buyers." },
              { label: "Payment", value: "30/70 split", detail: "30% advance on PO, 70% against bill of lading copy. LC available." },
              { label: "Currencies", value: "EUR · GBP · USD", detail: "Invoicing in buyer's preferred major currency." },
              { label: "Minimum sample", value: "50–100 kg", detail: "Hibiscus from 50 kg, ginger from 100 kg, shipped LCL." },
              { label: "Lead time", value: "10–21 days", detail: "10–14 days hibiscus, 10–21 days ginger after PO confirmation." },
              { label: "Response time", value: "48 hours", detail: "All sample and quote requests responded to within 48 hours." },
            ].map(t => (
              <div key={t.label} style={{ background: "#fff", padding: "1.5rem" }}>
                <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#6B6B6B", marginBottom: "0.4rem" }}>{t.label}</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500, color: "#1B4332", marginBottom: "0.4rem" }}>{t.value}</div>
                <div style={{ fontSize: 12, color: "#6B6B6B", lineHeight: 1.6, fontWeight: 300 }}>{t.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0D2B20", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 500, color: "#fff", marginBottom: "1rem", lineHeight: 1.15 }}>
            Have specific <em style={{ color: "#C8A882", fontStyle: "italic" }}>compliance requirements?</em>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            We're happy to discuss specific certification or testing requirements. Get in touch and we'll confirm what we can provide.
          </p>
          <Link href="/#contact" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, background: "#C8A882", color: "#0D2B20", padding: "14px 32px", borderRadius: 4, textDecoration: "none", display: "inline-block" }}>
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
