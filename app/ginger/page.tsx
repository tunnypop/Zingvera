import Link from "next/link";
import SampleForm from "@/components/SampleForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dry Split Ginger — Zingvera",
  description: "Export-grade dry split ginger (Zingiber officinale) sourced from Kaduna State, Nigeria. High volatile oil content for food, pharmaceutical, and beverage manufacturers.",
};

const S = {
  label: { fontSize: 11, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#8C5A00", display: "block", marginBottom: "1.25rem" },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 500, lineHeight: 1.15, color: "#111", marginBottom: "1rem" },
};

export default function GingerPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "8rem clamp(1.5rem,5vw,4rem) clamp(4rem,8vw,6rem)", position: "relative", overflow: "hidden" }}>
  <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/ginger-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
  <div style={{ position: "absolute", inset: 0, background: "rgba(44,26,14,0.70)" }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>← Back to home</Link>
          <div style={{ display: "inline-block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", background: "rgba(255,255,255,0.1)", color: "#E8A855", padding: "5px 12px", borderRadius: 2, marginTop: "1.5rem", marginBottom: "1.25rem" }}>Zingiber officinale</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(42px,7vw,80px)", fontWeight: 500, lineHeight: 1.05, color: "#fff", maxWidth: 680, marginBottom: "1.5rem" }}>
            Dry Split<br /><em style={{ color: "#E8A855" }}>Ginger</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            Nigerian ginger is internationally recognised for its exceptional pungency and high volatile oil content — qualities that command premium pricing in pharmaceutical, culinary, and beverage applications globally.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="#sample" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, background: "#E8A855", color: "#2C1A0E", padding: "13px 28px", borderRadius: 4, textDecoration: "none" }}>Request a sample</Link>
            <Link href="#specs" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.25)", padding: "13px 28px", borderRadius: 4, textDecoration: "none" }}>View full specs</Link>
          </div>
        </div>
      </section>

      {/* QUICK SPECS BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #EDE8E1" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "2rem clamp(1.5rem,5vw,4rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: "1.5rem", textAlign: "center" }}>
          {[["2–3%","Volatile oil (typical)"],["Max 10–12%","Moisture content"],["1,000 kg","Min. order"],["40 MT","Monthly capacity"],["10–21 days","Lead time"]].map(([n,d]) => (
            <div key={d}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, fontWeight: 500, color: "#8C5A00", marginBottom: "0.2rem" }}>{n}</div>
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
                ["Botanical name","Zingiber officinale"],
                ["Common names","Ginger, Dry Split Ginger, Nigerian Ginger"],
                ["Part used","Dried rhizomes (split/halved)"],
                ["Origin","Kaduna State, Nigeria"],
                ["Appearance","Light tan to pale brown, split"],
                ["Moisture content","Max 10–12%"],
                ["Volatile oil content","Min 1.5% (typically 2–3%)"],
                ["Foreign matter","Max 1%"],
                ["Packaging","50 kg jute or polypropylene bags"],
                ["Minimum order","1,000 kg"],
                ["Sample available","From 100 kg (LCL)"],
                ["Monthly capacity","Up to 40 MT"],
                ["Lead time","10–21 days after PO"],
                ["Shelf life","24 months"],
                ["HS Code","0910.11"],
              ].map(([k,v], i) => (
                <tr key={k} style={{ background: i%2===0 ? "#fff" : "transparent" }}>
                  <td style={{ padding: "10px 14px", fontSize: 13, color: "#6B6B6B", width: "42%" }}>{k}</td>
                  <td style={{ padding: "10px 14px", fontSize: 13, color: "#111", fontWeight: 500 }}>{v}</td>
                </tr>
              ))}
            </table>
          </div>
          <div>
            <span style={S.label}>Quality advantage</span>
            <h2 style={S.h2}>Why Nigerian ginger<br /><em style={{ fontStyle: "italic", color: "#8C5A00" }}>commands a premium.</em></h2>
            <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
              Nigeria produces some of the world's most pungent ginger — a product of the high-altitude plateau conditions in Kaduna State. The volatile oil content of 2–3% is significantly higher than many competing origins, making it particularly valued for oleoresin extraction, pharmaceutical applications, and premium spice blending.
            </p>
            {[
              { title: "High volatile oil content", body: "Typical volatile oil of 2–3% vs 1–1.5% from many competing origins. Critical for oleoresin and essential oil extraction applications." },
              { title: "Exceptional pungency", body: "High gingerol content produces the characteristic bite prized by spice manufacturers, pharmaceutical formulators, and premium food brands." },
              { title: "Year-round availability", body: "Kaduna ginger is harvestable across a longer season than many origins, enabling more consistent supply throughout the year." },
            ].map(c => (
              <div key={c.title} style={{ borderLeft: "3px solid #C8A882", paddingLeft: "1.25rem", marginBottom: "1.75rem" }}>
                <h4 style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: "0.35rem" }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, fontWeight: 300 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section style={{ background: "#fff", borderTop: "1px solid #EDE8E1", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={S.label}>Applications</span>
          <h2 style={S.h2}>Where our ginger goes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2, background: "#EDE8E1", marginTop: "2.5rem" }}>
            {[
              { icon: "🫙", title: "Spice grinding", desc: "Ground ginger powder for retail and food manufacturing. Nigerian ginger produces a particularly potent, aromatic powder." },
              { icon: "💊", title: "Pharmaceutical", desc: "Used in digestive health formulations, anti-nausea medications, and herbal medicine. High gingerol content is key." },
              { icon: "🧪", title: "Oleoresin extraction", desc: "High volatile oil content makes Nigerian split ginger ideal for industrial oleoresin and essential oil extraction." },
              { icon: "🫖", title: "Herbal teas", desc: "Ginger tea and ginger-based blends are a major use. Our dry split format is perfect for industrial tea production." },
              { icon: "🍺", title: "Brewing & beverages", desc: "Ginger beer, ginger ale, and craft brewing. The pungency delivers flavour at lower volumes, improving unit economics." },
              { icon: "🍫", title: "Confectionery & food", desc: "Used in ginger biscuits, marinades, sauces, and condiments. Consistent quality critical for food manufacturing applications." },
            ].map(a => (
              <div key={a.title} style={{ background: "#FEFAF5", padding: "1.75rem" }}>
                <div style={{ fontSize: 26, marginBottom: "0.75rem" }}>{a.icon}</div>
                <h4 style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: "0.5rem" }}>{a.title}</h4>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, fontWeight: 300 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCING STORY */}
      <section style={{ background: "#2C1A0E", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(3rem,6vw,5rem)", alignItems: "center" }}>
          <div>
            <span style={{ ...S.label, color: "#E8A855" }}>From farm to shipment</span>
            <h2 style={{ ...S.h2, color: "#fff" }}>Kaduna's plateau.<br /><em style={{ color: "#E8A855", fontStyle: "italic" }}>World-class ginger.</em></h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
              Kaduna State sits on a high-altitude plateau in central Nigeria — the country's foremost ginger-producing region. The combination of rich volcanic soil and altitude creates growing conditions that produce ginger with markedly higher pungency and oil content than lowland origins.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
              Zingvera sources directly from cooperative farmers in Kaduna. Fresh rhizomes are washed, split, and sun-dried at or near origin before transport to our Lagos facility for final processing and export documentation.
            </p>
            <Link href="/farmers" style={{ fontSize: 13, fontWeight: 500, color: "#E8A855", textDecoration: "none", borderBottom: "1px solid #E8A855", paddingBottom: 2 }}>Our farmer partnership model →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { step: "01", title: "Cooperative harvest", desc: "Rhizomes harvested at maturity. Primary season: October–January, with availability year-round." },
              { step: "02", title: "Washing & splitting", desc: "Fresh ginger is washed to remove soil, then manually split or halved for faster, more uniform drying." },
              { step: "03", title: "Sun-drying", desc: "Split ginger is dried to <10–12% moisture over 7–14 days depending on weather conditions." },
              { step: "04", title: "Lagos processing & shipment", desc: "Moisture-tested, graded, and packed in jute/PP bags. Phytosanitary cert issued, shipped FOB Lagos." },
            ].map(s => (
              <div key={s.step} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: "#E8A855", fontStyle: "italic", minWidth: 28, paddingTop: 2 }}>{s.step}</div>
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
      <section id="sample" style={{ background: "#FEF6EC", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <span style={S.label}>Request a sample</span>
          <h2 style={S.h2}>Try our ginger<br /><em style={{ fontStyle: "italic", color: "#8C5A00" }}>before you commit.</em></h2>
          <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            Sample orders from 100 kg shipped LCL. We include product spec sheet, moisture test result, volatile oil content report, and phytosanitary documentation with every sample.
          </p>
          <div style={{ background: "#fff", border: "1px solid #EDE8E1", borderRadius: 4, padding: "2rem" }}>
            <SampleForm defaultProduct="Dry split ginger" />
          </div>
        </div>
      </section>
    </>
  );
}
