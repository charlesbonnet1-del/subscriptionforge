"use client";

import { useState } from "react";

const SCENARIOS = [
  {
    key: "A",
    label: "Business A",
    newMrr: 50,
    expansion: 5,
    reactivation: 2,
    contraction: -7,
    churn: -40,
    verdict: "Seau percé : +50 de new mais -40 de churn. La croissance masque une hémorragie.",
    tone: "danger",
  },
  {
    key: "B",
    label: "Business B",
    newMrr: 12,
    expansion: 6,
    reactivation: 2,
    contraction: -3,
    churn: -7,
    verdict: "Sain : moins de new, mais le churn est maîtrisé. Le revenu s'empile durablement.",
    tone: "ok",
  },
] as const;

export default function MrrMovement() {
  const [sel, setSel] = useState<"A" | "B">("A");
  const s = SCENARIOS.find((x) => x.key === sel)!;
  const net = s.newMrr + s.expansion + s.reactivation + s.contraction + s.churn;
  const flows = [
    { label: "New", v: s.newMrr },
    { label: "Expansion", v: s.expansion },
    { label: "Reactivation", v: s.reactivation },
    { label: "Contraction", v: s.contraction },
    { label: "Churn", v: s.churn },
  ];
  const max = Math.max(...flows.map((f) => Math.abs(f.v)));

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Démo interactive</span>
        <h3>Le MRR movement dit la vérité</h3>
        <p>
          Deux business affichent le <strong>même +{net} de MRR net</strong>. Lequel
          est en bonne santé ? Basculez pour voir.
        </p>
      </div>

      <div className="chip-row" style={{ marginBottom: 18 }}>
        {SCENARIOS.map((x) => (
          <button
            key={x.key}
            className={`chip ${sel === x.key ? "active" : ""}`}
            onClick={() => setSel(x.key)}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div className="mrr-bars">
        {flows.map((f) => (
          <div className="mrr-bar-row" key={f.label}>
            <span className="mrr-bar-label">{f.label}</span>
            <div className="mrr-bar-track">
              <span
                className={`mrr-bar-fill ${f.v < 0 ? "neg" : "pos"}`}
                style={{ width: `${(Math.abs(f.v) / max) * 100}%` }}
              />
            </div>
            <span className="mrr-bar-value">
              {f.v > 0 ? "+" : ""}
              {f.v}
            </span>
          </div>
        ))}
      </div>

      <div className={`verdict ${s.tone}`} style={{ marginTop: 18 }}>
        <strong>MRR net : +{net}</strong>
        <p style={{ margin: "6px 0 0" }}>{s.verdict}</p>
      </div>
    </div>
  );
}
