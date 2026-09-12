export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px", maxWidth: 1200, margin: "0 auto" }}>
      <p style={{ opacity: 0.55, marginBottom: 12 }}>HORIZON WORKS</p>
      <h1 style={{ fontSize: 48, margin: 0 }}>Horizon AI</h1>
      <p style={{ maxWidth: 620, lineHeight: 1.7, opacity: 0.7 }}>
        Your AI operating layer. Tell Horizon anything, and it will understand,
        organize, remember, and eventually act on your work.
      </p>
      <section style={{ marginTop: 48, padding: 28, border: "1px solid #252830", borderRadius: 18, background: "#0e1015" }}>
        <p style={{ marginTop: 0, opacity: 0.55 }}>COMMAND CENTER</p>
        <h2 style={{ fontSize: 24 }}>Tell Horizon anything...</h2>
        <div style={{ marginTop: 20, minHeight: 100, border: "1px solid #292d36", borderRadius: 14, padding: 18, color: "#777d89" }}>
          Your natural-language workspace starts here.
        </div>
      </section>
    </main>
  );
}
