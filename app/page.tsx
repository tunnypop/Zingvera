import Link from "next/link";
import SampleForm from "@/components/SampleForm";

const S = {
  label: { fontSize: 11, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#2D6A4F", display: "block", marginBottom: "1.25rem" },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,52px)", fontWeight: 500, lineHeight: 1.1, color: "#111", marginBottom: "1.25rem" },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: "100vh", background: "#0D2B20", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 clamp(1.5rem,5vw,4rem)", paddingTop: 0, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(45,106,79,0.35) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(200,168,130,0.12) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 1, paddingBottom: "clamp(4rem,8vw,7rem)" }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8A882", marginBottom: "1.5rem" }}>West Africa · Botanical exports</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(48px,8vw,96px)", fontWeight: 500, lineHeight: 1.0, color: "#fff", maxWidth: 780, marginBottom: "2rem", letterSpacing: "-0.5px" }}>
            The best hibiscus<br />and ginger grow<br /><em style={{ color: "#C8A882" }}>here.</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 480, lineHeight: 1.75, marginBottom: "2.5rem", fontWeight: 300 }}>
            Zingvera supplies export-grade dried hibiscus flowers and split ginger — sourced directly from Nigeria's northern cooperatives and delivered to manufacturers across Europe and the Americas.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/#contact" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, background: "#C8A882", color: "#0D2B20", padding: "13px 28px", borderRadius: 4, textDecoration: "none" }}>Request a sample</Link>
            <Link href="/hibiscus" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.25)", padding: "13px 28px", borderRadius: 4, textDecoration: "none" }}>View products</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: "#fff", borderBottom: "1px solid #EDE8E1" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "2.75rem clamp(1.5rem,5vw,4rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))", gap: "2rem", textAlign: "center" }}>
          {[["60 MT", "Monthly supply capacity"], ["2", "Premium commodities"], ["7", "Export markets"], ["48 hr", "Sample turnaround"]].map(([n, d]) => (
            <div key={n}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 42, fontWeight: 500, color: "#1B4332", lineHeight: 1, marginBottom: "0.25rem" }}>{n}</div>
              <div style={{ fontSize: 12, color: "#6B6B6B" }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section style={{ padding: "clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)", background: "#F7F3EE" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={S.label}>Our products</span>
          <h2 style={S.h2}>Two commodities.<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>Uncompromising quality.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 2, background: "#EDE8E1", marginTop: "3rem" }}>
            {[
              { href: "/hibiscus", tag: "Hibiscus sabdariffa", name: "Dried Hibiscus Flowers", accent: "#2D6A4F", tagBg: "#EAF2EB", tagColor: "#2D6A4F", desc: "Deep-red calyces from Jigawa and Kano States. Prized by herbal tea producers, food colour manufacturers, and functional beverage brands for rich anthocyanin content.", specs: [["Origin","Jigawa / Kano, NG"],["Moisture","Max 12%"],["Min. order","500 kg"],["Capacity","20 MT/mo"]] },
              { href: "/ginger", tag: "Zingiber officinale", name: "Dry Split Ginger", accent: "#C8A882", tagBg: "#FEF6EC", tagColor: "#8C5A00", desc: "Nigerian ginger is globally recognised for high volatile oil content (2–3%) and pronounced pungency, commanding premium pricing in pharmaceutical and culinary applications.", specs: [["Origin","Kaduna, NG"],["Moisture","Max 10–12%"],["Volatile oil","Min 1.5%"],["Capacity","40 MT/mo"]] },
            ].map(p => (
              <div key={p.href} style={{ background: "#fff", padding: "clamp(2rem,4vw,3rem)", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: 60, background: p.accent }} />
                <div style={{ display: "inline-block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: p.tagColor, background: p.tagBg, padding: "5px 12px", borderRadius: 2, marginBottom: "1.75rem" }}>{p.tag}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 500, color: "#111", marginBottom: "0.35rem", lineHeight: 1.15 }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: "#3A3A3A", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>{p.desc}</p>
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
                  {p.specs.map(([k, v]) => (
                    <tr key={k} style={{ borderTop: "1px solid #EDE8E1" }}>
                      <td style={{ padding: "9px 0", fontSize: 13, color: "#6B6B6B" }}>{k}</td>
                      <td style={{ padding: "9px 0", fontSize: 13, color: "#111", fontWeight: 500, textAlign: "right" }}>{v}</td>
                    </tr>
                  ))}
                </table>
                <Link href={p.href} style={{ fontSize: 13, fontWeight: 500, color: "#1B4332", textDecoration: "none", borderBottom: "1px solid #2D6A4F", paddingBottom: 2 }}>Full specifications →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCING STORY */}
      <section style={{ background: "#0D2B20", padding: "clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(3rem,6vw,6rem)", alignItems: "center" }}>
          <div>
            <span style={{ ...S.label, color: "#C8A882" }}>Direct sourcing</span>
            <h2 style={{ ...S.h2, color: "#fff" }}>We go to the <em style={{ color: "#C8A882", fontStyle: "italic" }}>source.</em></h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
              Zingvera works directly with farming cooperatives in Nigeria's northern states, bypassing commodity aggregators to deliver better quality, full traceability, and fair prices to farmers.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
              Every batch is moisture-tested, graded, and documented at our Lagos processing facility before shipment — giving buyers the consistency and paper trail EU compliance demands.
            </p>
            <Link href="/farmers" style={{ fontSize: 13, fontWeight: 500, color: "#C8A882", textDecoration: "none", borderBottom: "1px solid #C8A882", paddingBottom: 2 }}>Learn about our farmer programme →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              { tag: "Hibiscus", place: "Jigawa State", desc: "Primary hibiscus belt. Peak harvest Nov–Apr. Ideal semi-arid conditions." },
              { tag: "Hibiscus", place: "Kano State", desc: "High-volume aggregation. Strong market linkages with Lagos exporters." },
              { tag: "Ginger", place: "Kaduna State", desc: "Nigeria's foremost ginger region. High-altitude plateau growing conditions." },
              { tag: "Processing", place: "Lagos", desc: "All products tested, graded, and packed here before shipment." },
            ].map(c => (
              <div key={c.place} style={{ background: "rgba(255,255,255,0.04)", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#C8A882", marginBottom: "0.4rem" }}>{c.tag}</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 500, color: "#fff", marginBottom: "0.2rem" }}>{c.place}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: "#fff", borderTop: "1px solid #EDE8E1", padding: "clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={S.label}>Why Zingvera</span>
          <h2 style={S.h2}>What sets a serious<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>supplier apart.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "3rem", marginTop: "3.5rem" }}>
            {[
              { n: "01", title: "Documentation-ready", body: "Phytosanitary certificates, NEPC registration, and EU compliance documentation prepared for every shipment." },
              { n: "02", title: "Consistent grades", body: "Moisture-tested and visually graded at our Lagos facility. Same spec sheet, every order, no surprises on arrival." },
              { n: "03", title: "LCL samples first", body: "Qualification samples from 50 kg (hibiscus) and 100 kg (ginger). Full container orders follow only after buyer satisfaction." },
              { n: "04", title: "Direct farm traceability", body: "We can name the state, cooperative, and season for every batch — a provenance story EU buyers increasingly require." },
            ].map(w => (
              <div key={w.n}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: "#C8A882", fontStyle: "italic", marginBottom: "1rem" }}>{w.n} —</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500, color: "#111", marginBottom: "0.6rem", lineHeight: 1.2 }}>{w.title}</h3>
                <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.75, fontWeight: 300 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section style={{ background: "#EAF2EB", borderTop: "1px solid #EDE8E1", borderBottom: "1px solid #EDE8E1", padding: "clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <span style={S.label}>Export markets</span>
          <h2 style={S.h2}>Supplying buyers across<br /><em style={{ fontStyle: "italic", color: "#2D6A4F" }}>three continents.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: 1, background: "#EDE8E1", marginTop: "2.5rem" }}>
            {[["🇩🇪","Germany","Herbal teas · food"],["🇳🇱","Netherlands","Ingredients · import"],["🇬🇧","United Kingdom","Spice · health food"],["🇲🇽","Mexico","Jamaica tea · beverage"],["🇺🇸","United States","Natural food · wellness"],["🇯🇵","Japan","Spice · pharma"],["🇮🇳","India","Spice trade"]].map(([f,n,t]) => (
              <div key={n} style={{ background: "#fff", padding: "1.5rem 1.25rem", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: "0.5rem" }}>{f}</div>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#3A3A3A" }}>{n}</div>
                <div style={{ fontSize: 11, color: "#6B6B6B", fontWeight: 300, marginTop: 2 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#F7F3EE", padding: "clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(3rem,6vw,5rem)", alignItems: "start" }}>
          <div>
            <span style={S.label}>Get in touch</span>
            <h2 style={S.h2}>Request a sample<br />or <em style={{ fontStyle: "italic", color: "#2D6A4F" }}>pricing.</em></h2>
            <p style={{ fontSize: 15, color: "#3A3A3A", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
              We respond to all sample and quote requests within 48 hours. FOB Lagos pricing available in EUR, GBP, and USD.
            </p>
            {[["Email","victor@rivenson.com"],["Company","Rivenson Capital"],["Location","Lagos, Nigeria"],["Registry","NEPC Registered Exporter"]].map(([k,v]) => (
              <div key={k} style={{ marginBottom: "1.25rem" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6B6B6B", marginBottom: 3 }}>{k}</div>
                <div style={{ fontSize: 15 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", border: "1px solid #EDE8E1", borderRadius: 4, padding: "2rem" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500, marginBottom: "1.5rem", color: "#111" }}>Sample or quote request</h3>
            <SampleForm />
          </div>
        </div>
      </section>
    </>
  );
}
