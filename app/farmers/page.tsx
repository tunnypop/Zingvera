import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmer Partnership — Zingvera",
  description: "Zingvera works directly with farming cooperatives in northern Nigeria. Learn about our direct sourcing model, offtake agreements, and farmer support programme.",
};

const S = {
  label: { fontSize: 11, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#2D6A4F", display: "block", marginBottom: "1.25rem" },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 500, lineHeight: 1.15, color: "#111", marginBottom: "1rem" },
};

export default function FarmersPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#1B4332", padding: "8rem clamp(1.5rem,5vw,4rem) clamp(4rem,8vw,6rem)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 100% 60%, rgba(82,183,136,0.15) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>← Back to home</Link>
          <div style={{ display: "inline-block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", background: "rgba(255,255,255,0.1)", color: "#C8A882", padding: "5px 12px", borderRadius: 2, marginTop: "1.5rem", marginBottom: "1.25rem" }}>Direct sourcing</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(42px,7vw,80px)", fontWeight: 500, lineHeight: 1.05, color: "#fff", maxWidth: 720, marginBottom: "1.5rem" }}>
            We go to<br />the <em style={{ color: "#C8A882" }}>source.</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, lineHeight: 1.8, fontWeight: 300 }}>
            Zingvera works directly with farming cooperatives in Jigawa, Kano, and Kaduna States — bypassing commodity aggregators to secure better quality, full traceability, and fairer prices for the farmers who grow our products.
          </p>
        </div>
      </section>

      {/* WHY DIRECT */}
      <section style={{ background: "#F7F3EE", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(3rem,6vw,5rem)" }}>
          <div>
            <span style={S.label}>The problem with middlemen</span>
            <h2 style={S.h2}>Most Nigerian agro-exports<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>pass through too many hands.</em></h2>
            <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.25rem" }}>
              The typical hibiscus or ginger export supply chain in Nigeria passes through 3–4 intermediaries before it reaches the port: farmer → village collector → local aggregator → Lagos trader → exporter. Each layer takes margin, and each handoff introduces quality inconsistency.
            </p>
            <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300 }}>
              The result is that farmers earn a fraction of the FOB price, buyers receive inconsistent quality with limited traceability, and no one in the chain has a strong incentive to invest in better practices.
            </p>
          </div>
          <div>
            <span style={S.label}>The Zingvera model</span>
            <h2 style={S.h2}>Direct to cooperative.<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>Everyone wins.</em></h2>
            <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.25rem" }}>
              We work directly with cooperative societies registered under state agricultural development programmes. One relationship with a cooperative gives us access to 50–200 farming families simultaneously, with a single point of accountability for quality and volume.
            </p>
            <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300 }}>
              We pay a consistent offtake price agreed before harvest, pay within 7 days of delivery, and provide input support to cooperatives that commit to our grade standards. The result is better quality for our buyers and meaningfully better prices for farmers.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#fff", borderTop: "1px solid #EDE8E1", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={S.label}>How it works</span>
          <h2 style={S.h2}>Our cooperative<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>partnership model.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 2, background: "#EDE8E1", marginTop: "3rem" }}>
            {[
              { step: "01", title: "Offtake agreement", desc: "We sign a one-page offtake agreement with each cooperative before harvest, locking in volume, price, and quality specification. Farmers know what they'll earn before they plant." },
              { step: "02", title: "Grade specification", desc: "We provide cooperatives with a simple one-page grade guide — moisture targets, acceptable foreign matter, colour standard for hibiscus. No surprises at delivery." },
              { step: "03", title: "Prompt payment", desc: "Payment within 7 days of delivery to our Lagos facility, after moisture testing confirms grade compliance. No 30-day waits, no deductions without explanation." },
              { step: "04", title: "Input support", desc: "For cooperatives that consistently meet our grade spec, we provide subsidised inputs: moisture meters, food-grade packing bags, and access to mechanical drying where available." },
            ].map(s => (
              <div key={s.step} style={{ background: "#F7F3EE", padding: "2rem 1.75rem" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 500, color: "#2D6A4F", marginBottom: "0.75rem", lineHeight: 1 }}>{s.step}</div>
                <h4 style={{ fontSize: 15, fontWeight: 500, color: "#111", marginBottom: "0.6rem" }}>{s.title}</h4>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.75, fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCING MAP */}
      <section style={{ background: "#0D2B20", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={{ ...S.label, color: "#C8A882" }}>Sourcing regions</span>
          <h2 style={{ ...S.h2, color: "#fff" }}>Where our<br /><em style={{ color: "#C8A882", fontStyle: "italic" }}>farmers are.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 1, background: "rgba(255,255,255,0.08)", marginTop: "3rem" }}>
            {[
              { state: "Jigawa State", product: "Hibiscus (primary)", season: "Harvest: Nov – Apr", desc: "Primary hibiscus sourcing region. Semi-arid climate produces deep-red calyces with high anthocyanin content. We work with cooperatives in Dutse and Hadejia LGAs." },
              { state: "Kano State", product: "Hibiscus (secondary)", season: "Harvest: Nov – Apr", desc: "Secondary hibiscus source with strong established market linkages. Well-developed aggregation infrastructure that we plug into at cooperative level." },
              { state: "Kaduna State", product: "Ginger (primary)", season: "Primary harvest: Oct – Jan", desc: "Nigeria's foremost ginger-producing region. High-altitude Kagoro and Kaura areas produce the pungent, high-oil ginger we source. Year-round availability from staggered planting." },
            ].map(r => (
              <div key={r.state} style={{ background: "rgba(255,255,255,0.04)", padding: "2rem 1.75rem" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#C8A882", marginBottom: "0.5rem" }}>{r.product}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 500, color: "#fff", marginBottom: "0.3rem" }}>{r.state}</h3>
                <div style={{ fontSize: 12, color: "#52B788", marginBottom: "0.75rem" }}>{r.season}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontWeight: 300 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR FARMERS CTA */}
      <section style={{ background: "#EAF2EB", borderTop: "1px solid #EDE8E1", padding: "clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <span style={{ ...S.label, textAlign: "center", display: "block" }}>Are you a farmer or cooperative?</span>
          <h2 style={{ ...S.h2, textAlign: "center" }}>Join our<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>supply network.</em></h2>
          <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem", maxWidth: 560, margin: "0 auto 2.5rem" }}>
            If you grow hibiscus or ginger in Jigawa, Kano, or Kaduna States and can commit to consistent volume and basic grade standards, we want to hear from you. We offer guaranteed offtake, prompt payment, and input support for qualifying cooperatives.
          </p>
          <a href="mailto:victor@rivenson.com?subject=Farmer%20Partnership%20Inquiry" style={{
            fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
            background: "#1B4332", color: "#fff",
            padding: "14px 32px", borderRadius: 4, textDecoration: "none",
            display: "inline-block",
          }}>
            Get in touch →
          </a>
          <p style={{ fontSize: 12, color: "#6B6B6B", marginTop: "1rem" }}>Email victor@rivenson.com or reach out via zingvera.com</p>
        </div>
      </section>
    </>
  );
}
