import Link from "next/link";
import SampleForm from "@/components/SampleForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dried Hibiscus Flowers — Zingvera",
  description: "Export-grade dried hibiscus flowers (Hibiscus sabdariffa) sourced from Jigawa and Kano States, Nigeria. Premium calyces for herbal tea, food colour, and beverage manufacturers.",
};

const S = {
  label: { fontSize: 11, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#2D6A4F", display: "block", marginBottom: "1.25rem" },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 500, lineHeight: 1.15, color: "#111", marginBottom: "1rem" },
};

export default function HibiscusPage() {
  return (
    <>
      {/* HERO */}
     <section style={{ padding: "8rem clamp(1.5rem,5vw,4rem) clamp(4rem,8vw,6rem)", position: "relative", overflow: "hidden" }}>
  <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/hibiscus-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
  <div style={{ position: "absolute", inset: 0, background: "rgba(13,43,32,0.72)" }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>← Back to home</Link>
          <div style={{ display: "inline-block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", background: "rgba(255,255,255,0.1)", color: "#C8A882", padding: "5px 12px", borderRadius: 2, marginTop: "1.5rem", marginBottom: "1.25rem" }}>Hibiscus sabdariffa</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(42px,7vw,80px)", fontWeight: 500, lineHeight: 1.05, color: "#fff", maxWidth: 680, marginBottom: "1.5rem" }}>
            Dried Hibiscus<br /><em style={{ color: "#C8A882" }}>Flowers</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            Deep-red calyces from Jigawa and Kano States — sun-dried, graded, and export-certified. Supplying herbal tea producers, food colour manufacturers, and functional beverage brands across Europe and the Americas.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="#sample" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, background: "#C8A882", color: "#0D2B20", padding: "13px 28px", borderRadius: 4, textDecoration: "none" }}>Request a sample</Link>
            <Link href="#specs" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.25)", padding: "13px 28px", borderRadius: 4, textDecoration: "none" }}>View full specs</Link>
          </div>
        </div>
      </section>

      {/* QUICK SPECS BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #EDE8E1" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "2rem clamp(1.5rem,5vw,4rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: "1.5rem", textAlign: "center" }}>
          {[["Max 12%","Moisture content"],["Deep red","Colour grade"],["500 kg","Min. order"],["20 MT","Monthly capacity"],["10–14 days","Lead time"]].map(([n,d]) => (
            <div key={d}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, fontWeight: 500, color: "#1B4332", marginBottom: "0.2rem" }}>{n}</div>
              <div style={{ fontSize: 11, color: "#6B6B6B", letterSpacing: "0.3px" }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL SPECS */}
      <section id="specs" style={{ background: "#F7F3EE", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(3rem,6vw,5rem)" }}>
          <div>
            <span style={S.label}>Technical specifications</span>
            <h2 style={S.h2}>Product profile</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              {[
                ["Botanical name","Hibiscus sabdariffa"],
                ["Common names","Hibiscus, Roselle, Zobo, Jamaica, Bissap"],
                ["Part used","Dried calyces (sepals)"],
                ["Origin","Jigawa / Kano State, Nigeria"],
                ["Colour","Deep red to burgundy"],
                ["Moisture content","Max 12%"],
                ["Foreign matter","Max 2%"],
                ["Packaging","25 kg / 50 kg food-grade PP bags"],
                ["Minimum order","500 kg"],
                ["Sample available","From 50 kg (LCL)"],
                ["Monthly capacity","Up to 20 MT"],
                ["Lead time","10–14 days after PO"],
                ["Shelf life","18 months"],
                ["HS Code","0814.00 / 2106.90"],
              ].map(([k,v], i) => (
                <tr key={k} style={{ background: i%2===0 ? "#fff" : "transparent" }}>
                  <td style={{ padding: "10px 14px", fontSize: 13, color: "#6B6B6B", width: "42%" }}>{k}</td>
                  <td style={{ padding: "10px 14px", fontSize: 13, color: "#111", fontWeight: 500 }}>{v}</td>
                </tr>
              ))}
            </table>
          </div>
          <div>
            <span style={S.label}>Certifications & compliance</span>
            <h2 style={S.h2}>Ready for<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>EU entry.</em></h2>
            {[
              { title: "Phytosanitary certificate", body: "Issued by NAQS (National Agricultural Quarantine Service) for every shipment. Required for all plant-origin exports from Nigeria." },
              { title: "NEPC registration", body: "Zingvera is registered with the Nigeria Export Promotion Council. Registration number provided on all commercial documentation." },
              { title: "EU pesticide MRLs", body: "We align sourcing with EU Maximum Residue Level requirements. Testing documentation available on request for regulated markets." },
              { title: "HACCP-aligned processing", body: "Our Lagos facility follows HACCP principles for food safety. Full process documentation available for buyer audits." },
            ].map(c => (
              <div key={c.title} style={{ borderLeft: "3px solid #2D6A4F", paddingLeft: "1.25rem", marginBottom: "1.75rem" }}>
                <h4 style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: "0.35rem" }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, fontWeight: 300 }}>{c.body}</p>
              </div>
            ))}
            <Link href="/certifications" style={{ fontSize: 13, fontWeight: 500, color: "#1B4332", textDecoration: "none", borderBottom: "1px solid #2D6A4F", paddingBottom: 2 }}>Full certifications page →</Link>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section style={{ background: "#fff", borderTop: "1px solid #EDE8E1", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={S.label}>Applications</span>
          <h2 style={S.h2}>Where our hibiscus goes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2, background: "#EDE8E1", marginTop: "2.5rem" }}>
            {[
              { icon: "🫖", title: "Herbal teas & infusions", desc: "The dominant use case globally. Our hibiscus delivers deep colour, tart flavour, and high anthocyanin content — essential for premium tea blends." },
              { icon: "🎨", title: "Natural food colouring", desc: "Used by food manufacturers as a natural red-pink colourant in beverages, confectionery, dairy, and sauces — replacing synthetic dyes." },
              { icon: "🧴", title: "Cosmetics & skincare", desc: "Rich in antioxidants and AHAs. Used in anti-ageing serums, toners, and hair care products by natural cosmetic formulators." },
              { icon: "🥤", title: "Functional beverages", desc: "Growing use in wellness drinks, kombuchas, and hibiscus-based RTD beverages targeting health-conscious consumers in EU and US markets." },
              { icon: "💊", title: "Nutraceuticals", desc: "Clinical interest in hibiscus for blood pressure support has driven demand from supplement and nutraceutical manufacturers." },
              { icon: "🫙", title: "Food manufacturing", desc: "Used as a flavour ingredient in jams, syrups, vinegars, and culinary sauces. Popular in Mexico's jamaica agua fresca market." },
            ].map(a => (
              <div key={a.title} style={{ background: "#F7F3EE", padding: "1.75rem" }}>
                <div style={{ fontSize: 26, marginBottom: "0.75rem" }}>{a.icon}</div>
                <h4 style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: "0.5rem" }}>{a.title}</h4>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, fontWeight: 300 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCING STORY */}
      <section style={{ background: "#0D2B20", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(3rem,6vw,5rem)", alignItems: "center" }}>
          <div>
            <span style={{ ...S.label, color: "#C8A882" }}>From farm to shipment</span>
            <h2 style={{ ...S.h2, color: "#fff" }}>Sourced in the North,<br /><em style={{ color: "#C8A882", fontStyle: "italic" }}>shipped from Lagos.</em></h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
              Hibiscus sabdariffa is primarily grown in Jigawa and Kano States in northern Nigeria — a semi-arid zone with growing conditions that produce particularly deep-coloured calyces with high anthocyanin content.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
              Zingvera works directly with farming cooperatives in these states. Calyces are hand-picked at peak maturity, sun-dried locally, then transported to our Lagos facility for moisture testing, cleaning, grading, and packing before export.
            </p>
            <Link href="/farmers" style={{ fontSize: 13, fontWeight: 500, color: "#C8A882", textDecoration: "none", borderBottom: "1px solid #C8A882", paddingBottom: 2 }}>Our farmer partnership model →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { step: "01", title: "Cooperative harvest", desc: "Calyces hand-picked at peak maturity. Harvest season: November to April." },
              { step: "02", title: "Local sun-drying", desc: "Dried at origin to reduce moisture. Protects quality and reduces transport weight." },
              { step: "03", title: "Lagos processing", desc: "Moisture-tested (<12%), cleaned, sorted by colour grade, packed in food-grade bags." },
              { step: "04", title: "Documentation & shipment", desc: "Phytosanitary cert issued, NEPC paperwork completed, shipped FOB Lagos." },
            ].map(s => (
              <div key={s.step} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: "#C8A882", fontStyle: "italic", minWidth: 28, paddingTop: 2 }}>{s.step}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#fff", marginBottom: "0.25rem" }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE FORM */}
      <section id="sample" style={{ background: "#EAF2EB", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <span style={S.label}>Request a sample</span>
          <h2 style={S.h2}>Try our hibiscus<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>before you commit.</em></h2>
          <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            Sample orders from 50 kg shipped LCL. We include product spec sheet, moisture test result, and phytosanitary documentation with every sample.
          </p>
          <div style={{ background: "#fff", border: "1px solid #EDE8E1", borderRadius: 4, padding: "2rem" }}>
            <SampleForm defaultProduct="Dried hibiscus flowers" />
          </div>
        </div>
      </section>
    </>
  );
}
