"use client";
import { useState } from "react";

export default function SampleForm({ defaultProduct }: { defaultProduct?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", company: "", email: "",
    product: defaultProduct || "", volume: "", message: "",
  });

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    if (!form.email || !form.product) {
      alert("Please fill in your email and product of interest.");
      return;
    }
    setSubmitted(true);
  };

  const inp: React.CSSProperties = {
    width: "100%", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 300,
    color: "#111", background: "#F7F3EE", border: "1px solid #EDE8E1",
    borderRadius: 4, padding: "10px 14px", outline: "none",
  };
  const lbl: React.CSSProperties = {
    display: "block", fontSize: 11, letterSpacing: "1.5px",
    textTransform: "uppercase", color: "#6B6B6B", marginBottom: 6, fontWeight: 500,
  };

  if (submitted) return (
    <div style={{ textAlign: "center", padding: "3rem 2rem" }}>
      <div style={{ fontSize: 40, marginBottom: "1rem" }}>✓</div>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, color: "#1B4332", marginBottom: "0.5rem" }}>Request received</h3>
      <p style={{ fontSize: 14, color: "#6B6B6B", fontWeight: 300 }}>We'll be in touch within 48 hours with product specifications and pricing.</p>
    </div>
  );

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
        <div><label style={lbl}>First name</label><input style={inp} value={form.firstName} onChange={e => update("firstName", e.target.value)} placeholder="Anna" /></div>
        <div><label style={lbl}>Last name</label><input style={inp} value={form.lastName} onChange={e => update("lastName", e.target.value)} placeholder="Müller" /></div>
      </div>
      <div style={{ marginBottom: "1.25rem" }}><label style={lbl}>Company</label><input style={inp} value={form.company} onChange={e => update("company", e.target.value)} placeholder="Herbal GmbH" /></div>
      <div style={{ marginBottom: "1.25rem" }}><label style={lbl}>Business email</label><input style={inp} type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="anna@herbalgmbh.de" /></div>
      <div style={{ marginBottom: "1.25rem" }}>
        <label style={lbl}>Product of interest</label>
        <select style={inp} value={form.product} onChange={e => update("product", e.target.value)}>
          <option value="">Select a product</option>
          <option>Dried hibiscus flowers</option>
          <option>Dry split ginger</option>
          <option>Both products</option>
        </select>
      </div>
      <div style={{ marginBottom: "1.25rem" }}>
        <label style={lbl}>Estimated monthly volume</label>
        <select style={inp} value={form.volume} onChange={e => update("volume", e.target.value)}>
          <option value="">Select volume</option>
          <option>Sample only (50–100 kg)</option>
          <option>500 kg – 2 MT</option>
          <option>2 MT – 10 MT</option>
          <option>10 MT+</option>
        </select>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={lbl}>Additional notes (optional)</label>
        <textarea style={{ ...inp, minHeight: 90, resize: "vertical" }} value={form.message} onChange={e => update("message", e.target.value)} placeholder="Certifications required, delivery port, timeline..." />
      </div>
      <button onClick={submit} style={{
        width: "100%", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
        background: "#1B4332", color: "#fff", border: "none", padding: 14,
        borderRadius: 4, cursor: "pointer",
      }}>
        Send request →
      </button>
      <p style={{ fontSize: 11, color: "#6B6B6B", textAlign: "center", marginTop: "0.75rem" }}>We respond within 48 hours. No spam, ever.</p>
    </div>
  );
}
