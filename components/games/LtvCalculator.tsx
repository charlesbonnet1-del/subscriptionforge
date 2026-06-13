"use client";

import { useMemo, useState } from "react";

type Preset = { label: string; arpu: number; churn: number; cac: number; margin: number };

const PRESETS: Preset[] = [
  { label: "B2C média", arpu: 10, churn: 5, cac: 25, margin: 80 },
  { label: "SaaS SMB", arpu: 40, churn: 3, cac: 300, margin: 85 },
  { label: "Box physique", arpu: 35, churn: 12, cac: 20, margin: 35 },
];

function euros(n: number) {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

export default function LtvCalculator() {
  const [arpu, setArpu] = useState(20);
  const [churn, setChurn] = useState(4); // % mensuel
  const [cac, setCac] = useState(120);
  const [margin, setMargin] = useState(100); // %

  function applyPreset(p: Preset) {
    setArpu(p.arpu);
    setChurn(p.churn);
    setCac(p.cac);
    setMargin(p.margin);
  }

  const r = useMemo(() => {
    const c = Math.max(churn, 0.1) / 100;
    const lifetimeMonths = 1 / c;
    const ltvSimple = arpu / c;
    const ltvMargin = (arpu * (margin / 100)) / c;
    const payback = arpu * (margin / 100) > 0 ? cac / (arpu * (margin / 100)) : Infinity;
    const ratio = cac > 0 ? ltvMargin / cac : Infinity;

    // Projection MRR à 36 mois pour 100 nouveaux abonnés/mois, sans expansion.
    let active = 0;
    const series: number[] = [];
    for (let m = 0; m < 36; m++) {
      active = active * (1 - c) + 100;
      series.push(active * arpu);
    }
    return { lifetimeMonths, ltvSimple, ltvMargin, payback, ratio, mrr36: series[35], series };
  }, [arpu, churn, cac, margin]);

  const ratioTone = r.ratio >= 3 ? "ok" : r.ratio >= 1 ? "warn" : "danger";
  const max = Math.max(...r.series);

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Calculatrice interactive</span>
        <h3>Calculatrice LTV</h3>
        <p>
          Sentez physiquement l'impact d'un point de churn. Ajustez vos chiffres
          — ou chargez un scénario type.
        </p>
      </div>

      <div className="chip-row" style={{ marginBottom: 20 }}>
        {PRESETS.map((p) => (
          <button key={p.label} className="chip" onClick={() => applyPreset(p)}>
            {p.label}
          </button>
        ))}
      </div>

      <div className="widget-controls">
        <Slider label="ARPU mensuel" suffix="€" min={1} max={300} value={arpu} onChange={setArpu} />
        <Slider label="Churn mensuel" suffix="%" min={0.5} max={20} step={0.5} value={churn} onChange={setChurn} />
        <Slider label="CAC" suffix="€" min={0} max={1000} step={5} value={cac} onChange={setCac} />
        <Slider label="Marge brute" suffix="%" min={10} max={100} step={5} value={margin} onChange={setMargin} />
      </div>

      <div className="widget-results">
        <Result value={`${euros(r.ltvSimple)} €`} label="LTV simple (ARPU ÷ churn)" />
        <Result value={`${euros(r.ltvMargin)} €`} label="LTV réelle (marge incluse)" />
        <Result value={`${r.lifetimeMonths.toFixed(0)} mois`} label="Durée de vie moyenne" />
        <Result
          value={Number.isFinite(r.payback) ? `${r.payback.toFixed(1)} mois` : "∞"}
          label="Payback du CAC"
        />
        <Result
          value={Number.isFinite(r.ratio) ? `${r.ratio.toFixed(1)}:1` : "∞"}
          label="Ratio LTV:CAC"
          tone={ratioTone}
        />
        <Result value={`${euros(r.mrr36)} €`} label="MRR à 36 mois (100 acq./mois)" />
      </div>

      <div className="spark" aria-hidden="true">
        {r.series.map((v, i) => (
          <span key={i} style={{ height: `${Math.max(2, (v / max) * 100)}%` }} />
        ))}
      </div>
      <p className="muted" style={{ fontSize: "0.8rem", marginTop: 8 }}>
        Projection du MRR sur 36 mois à 100 nouveaux abonnés/mois (sans expansion).
        La règle d'or : un ratio LTV:CAC ≥ 3:1 et un payback &lt; 12 mois (B2C 3-6).
      </p>
    </div>
  );
}

function Slider({
  label,
  suffix,
  min,
  max,
  step = 1,
  value,
  onChange,
}: {
  label: string;
  suffix: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="slider">
      <span className="slider-label">
        {label}
        <strong>
          {value}
          {suffix}
        </strong>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  );
}

function Result({ value, label, tone }: { value: string; label: string; tone?: string }) {
  return (
    <div className={`result-cell ${tone ?? ""}`}>
      <span className="result-value">{value}</span>
      <span className="result-label">{label}</span>
    </div>
  );
}
