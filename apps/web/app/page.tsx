"use client";

import { useState } from "react";

const nav = ["Command Center", "Projects", "Tasks", "Clients", "Memory", "Knowledge", "Activity"];

export default function Home() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submit() {
    if (!message.trim()) return;
    setSent(true);
    setMessage("");
  }

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">H</span><div><strong>Horizon</strong><small>AI OS</small></div></div>
        <nav>{nav.map((item, i) => <button className={i === 0 ? "active" : ""} key={item}>{item}</button>)}</nav>
        <div className="sidebar-bottom"><button>Automations</button><button>Settings</button><div className="profile"><span>AR</span><div><strong>Aditya</strong><small>Horizon Works</small></div></div></div>
      </aside>

      <section className="content">
        <header className="topbar"><div><span className="status-dot" /> Horizon is ready</div><div className="top-actions"><button>⌘ K</button><button className="avatar">AR</button></div></header>

        <div className="hero">
          <div className="eyebrow">COMMAND CENTER</div>
          <h1>Good afternoon, Aditya.</h1>
          <p>Tell Horizon anything. It will understand your work and organize it for you.</p>
          <div className="command-box">
            <textarea value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); } }} placeholder="Tell Horizon what happened, what you need, or what you're thinking..." />
            <div className="command-footer"><span>Horizon will organize this automatically</span><button onClick={submit}>Send <span>↗</span></button></div>
          </div>
          {sent && <div className="notice">Message captured. AI processing will connect it to your workspace.</div>}
        </div>

        <section className="grid">
          <div className="card priorities"><div className="card-head"><div><span className="label">TODAY</span><h2>Priority work</h2></div><span className="count">4</span></div>{["Finish Prachar bulk messaging", "Review client proposal", "Follow up with Rahul", "Plan tomorrow's priorities"].map((x,i) => <div className="task" key={x}><span className={i < 2 ? "check done" : "check"}>{i < 2 ? "✓" : ""}</span><span>{x}</span><small>{i === 0 ? "High" : i === 1 ? "Today" : "Tomorrow"}</small></div>)}</div>
          <div className="card projects"><div className="card-head"><div><span className="label">WORKSPACE</span><h2>Active projects</h2></div><button className="link">View all →</button></div>{[["Prachar Studios","74%","WhatsApp automation"],["Horizon AI","38%","AI operating layer"],["Client projects","91%","2 active engagements"]].map(([name,pct,desc]) => <div className="project" key={name}><div className="project-top"><strong>{name}</strong><span>{pct}</span></div><div className="bar"><i style={{width:pct}} /></div><small>{desc}</small></div>)}</div>
        </section>

        <section className="insight"><div className="spark">✦</div><div><span className="label">HORIZON NOTICED</span><h3>You have 3 unresolved client follow-ups.</h3><p>Horizon can keep these connected to the relevant clients and projects.</p></div><button>Review →</button></section>
      </section>
    </main>
  );
}
