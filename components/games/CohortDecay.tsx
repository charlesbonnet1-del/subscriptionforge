"use client";

import { useMemo, useState } from "react";

// Visualise « the power of 5 % » : la décroissance d'une cohorte selon le churn.
export default function CohortDecay() {
  const [churn, setChurn] = useState(7); // % mensuel
  const months = 24;
  const start = 1000;

  const r = useMemo(() => {
    const c = churn / 100;
    const pts: number[] = [];
    let n = start;
    for (let m = 0; m <= months; m++) {
      pts.push(n);
      n = n * (1 - c);
    }
    const lifetime = 1 / c;
    const after12 = Math.round(start * Math.pow(1 - c, 12));
    return { pts, lifetime, after12 };
  }, [churn]);

  // Construit le path SVG (viewBox 300x120).
  const W = 300, H = 120;
  const path = r.pts
    .map((v, i) => {
      const x = (i / months) * W;
      const y = H - (v / start) * H;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Démo · The power of 5 %</span>
        <h3>La décroissance d'une cohorte</h3>
        <p>Le churn est exponentiel et l'intuition le sous-estime. Bougez le curseur : 5 points changent tout.</p>
      </div>

      <label className="slider" style={{ marginBottom: 16 }}>
        <span className="slider-label">Churn mensuel<strong>{churn}%</strong></span>
        <input type="range" min={1} max={15} step={0.5} value={churn} onChange={(e) => setChurn(parseFloat(e.target.value))} />
      </label>

      <svg viewBox={`0 0 ${W} ${H}`} className="cohort-svg" role="img" aria-label="Courbe de survie de cohorte">
        <defs>
          <linearGradient id="cohortFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,69,0,0.18)" />
            <stop offset="100%" stopColor="rgba(255,69,0,0)" />
          </linearGradient>
        </defs>
        <line x1="0" y1={H} x2={W} y2={H} stroke="rgba(0,0,0,0.1)" />
        <path d={`${path} L${W},${H} L0,${H} Z`} fill="url(#cohortFill)" />
        <path d={path} fill="none" stroke="var(--fire-spark)" strokeWidth="2" />
      </svg>

      <div className="widget-results" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 16 }}>
        <div className="result-cell"><span className="result-value">{r.lifetime.toFixed(0)} mois</span><span className="result-label">Durée de vie moyenne</span></div>
        <div className="result-cell"><span className="result-value">{r.after12}</span><span className="result-label">Survivants à 12 mois (sur 1 000)</span></div>
        <div className="result-cell"><span className="result-value">{(r.lifetime / (1 / 0.07)).toFixed(1)}×</span><span className="result-label">LTV vs un churn de 7 %</span></div>
      </div>
      <p className="muted" style={{ fontSize: "0.8rem", marginTop: 8 }}>
        À 7 % : durée ≈ 14 mois, ~420 survivants. À 2 % : ≈ 50 mois, ~785 survivants — LTV ×3,5 au même budget d'acquisition.
      </p>
    </div>
  );
}
