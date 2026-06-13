"use client";

import { useMemo, useState } from "react";

function nf(n: number) {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

// Modélise le J-curve d'une transition licence -> abonnement sur 36 mois.
export default function JCurveSimulator() {
  const [licence, setLicence] = useState(1000); // prix licence
  const [rebuyYears, setRebuy] = useState(3); // cycle de rachat (ans)
  const [monthly, setMonthly] = useState(30); // prix abonnement mensuel
  const [migMonths, setMig] = useState(18); // durée de migration

  const r = useMemo(() => {
    const base = 1000; // clients
    const licenceMonthly = licence / (rebuyYears * 12); // revenu licence amorti / client / mois
    const baseline = base * licenceMonthly; // revenu mensuel sans transition
    const series: number[] = [];
    let trough = Infinity, troughM = 0, crossM = -1;
    for (let t = 1; t <= 36; t++) {
      const migrated = Math.min(1, t / migMonths) * base;
      const rev = (base - migrated) * licenceMonthly + migrated * monthly;
      series.push(rev);
      if (rev < trough) { trough = rev; troughM = t; }
      if (crossM < 0 && rev >= baseline && t > 1) crossM = t;
    }
    const end = series[35];
    return { baseline, series, trough, troughM, crossM, end };
  }, [licence, rebuyYears, monthly, migMonths]);

  const max = Math.max(r.baseline, ...r.series) * 1.1;
  const W = 320, H = 110;
  const path = r.series.map((v, i) => `${i === 0 ? "M" : "L"}${(i / 35) * W},${H - (v / max) * H}`).join(" ");
  const baseY = H - (r.baseline / max) * H;

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Simulateur · J-curve</span>
        <h3>La courbe de la transition</h3>
        <p>Le revenu plonge avant de remonter plus haut que jamais. Le J-curve n'est pas un risque à éviter, c'est un coût à financer.</p>
      </div>

      <div className="widget-controls">
        <Slider label="Prix de la licence" v={licence} set={setLicence} min={200} max={3000} step={50} suffix="€" />
        <Slider label="Cycle de rachat" v={rebuyYears} set={setRebuy} min={1} max={6} suffix=" ans" />
        <Slider label="Prix abonnement / mois" v={monthly} set={setMonthly} min={10} max={120} suffix="€" />
        <Slider label="Durée de migration" v={migMonths} set={setMig} min={6} max={36} suffix=" mois" />
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="cohort-svg" role="img" aria-label="Courbe en J de la transition">
        <line x1="0" y1={baseY} x2={W} y2={baseY} stroke="rgba(0,0,0,0.25)" strokeDasharray="4 3" />
        <text x="2" y={baseY - 3} fontSize="7" fill="#666">revenu actuel</text>
        <path d={path} fill="none" stroke="var(--fire-spark)" strokeWidth="2" />
      </svg>

      <div className="widget-results" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 14 }}>
        <div className="result-cell danger"><span className="result-value">M{r.troughM}</span><span className="result-label">Point bas du creux</span></div>
        <div className="result-cell ok"><span className="result-value">{r.crossM > 0 ? `M${r.crossM}` : "> 36"}</span><span className="result-label">Croisement (retour au niveau)</span></div>
        <div className="result-cell"><span className="result-value">{nf(r.end)} €</span><span className="result-label">Revenu mensuel à 36 mois</span></div>
      </div>
      <p className="muted" style={{ fontSize: "0.8rem", marginTop: 8 }}>
        Revenu actuel : {nf(r.baseline)} €/mois. La variable la plus sensible est le ratio prix récurrent / prix licence — c'est lui qui creuse ou comble le J.
      </p>
    </div>
  );
}

function Slider({ label, v, set, min, max, step = 1, suffix }: { label: string; v: number; set: (n: number) => void; min: number; max: number; step?: number; suffix: string }) {
  return (
    <label className="slider">
      <span className="slider-label">{label}<strong>{v}{suffix}</strong></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(parseFloat(e.target.value))} />
    </label>
  );
}
