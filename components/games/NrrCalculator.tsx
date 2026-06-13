"use client";

import { useMemo, useState } from "react";

function euros(n: number) {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

// Calcule NRR et GRR à partir du MRR movement d'une cohorte.
export default function NrrCalculator() {
  const [start, setStart] = useState(100000);
  const [expansion, setExpansion] = useState(22000);
  const [contraction, setContraction] = useState(6000);
  const [churn, setChurn] = useState(8000);

  const r = useMemo(() => {
    const nrr = ((start + expansion - contraction - churn) / start) * 100;
    const grr = ((start - contraction - churn) / start) * 100;
    // Projection de la base à +12 mois à NRR constant.
    const proj = start * Math.pow(nrr / 100, 1);
    const doubleYears = nrr > 100 ? Math.log(2) / Math.log(nrr / 100) : Infinity;
    return { nrr, grr, proj, doubleYears };
  }, [start, expansion, contraction, churn]);

  const state =
    r.nrr >= 120 ? { label: "Profil d'élite", tone: "ok" } :
    r.nrr >= 110 ? { label: "Très bon", tone: "ok" } :
    r.nrr >= 100 ? { label: "Sain — croissance endogène", tone: "ok" } :
    r.nrr >= 90 ? { label: "Fragile", tone: "warn" } :
    { label: "Problème structurel (tapis roulant)", tone: "danger" };

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Calculatrice · NRR</span>
        <h3>Net Revenue Retention</h3>
        <p>Que devient, un an plus tard, le revenu des clients que j'avais déjà ? Aucun nouveau client dans le calcul.</p>
      </div>

      <div className="widget-controls">
        <Slider label="MRR de départ" suffix="€" min={10000} max={500000} step={5000} value={start} onChange={setStart} />
        <Slider label="Expansion (upgrades, sièges)" suffix="€" min={0} max={150000} step={1000} value={expansion} onChange={setExpansion} />
        <Slider label="Contraction (downgrades)" suffix="€" min={0} max={80000} step={1000} value={contraction} onChange={setContraction} />
        <Slider label="Churn (départs)" suffix="€" min={0} max={80000} step={1000} value={churn} onChange={setChurn} />
      </div>

      <div className="fiche-formula" style={{ margin: "8px 0 16px" }}>
        <code>NRR = (départ + expansion − contraction − churn) ÷ départ × 100</code>
      </div>

      <div className="widget-results" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div className={`result-cell ${state.tone}`}>
          <span className="result-value">{r.nrr.toFixed(0)} %</span>
          <span className="result-label">NRR</span>
        </div>
        <div className="result-cell">
          <span className="result-value">{r.grr.toFixed(0)} %</span>
          <span className="result-label">GRR (sans expansion)</span>
        </div>
        <div className="result-cell">
          <span className="result-value">{Number.isFinite(r.doubleYears) ? `${r.doubleYears.toFixed(1)} ans` : "—"}</span>
          <span className="result-label">Pour doubler (sans acquisition)</span>
        </div>
      </div>

      <div className={`verdict ${state.tone}`} style={{ marginTop: 14 }}>
        <strong>{state.label}.</strong>{" "}
        {r.nrr >= 100
          ? `La base passe de ${euros(start)} € à ${euros(r.proj)} € en 12 mois sans acquérir personne.`
          : `Il faut acquérir ${euros(start - r.proj)} € de revenu par an juste pour faire du surplace.`}
      </div>
    </div>
  );
}

function Slider({ label, suffix, min, max, step = 1, value, onChange }: { label: string; suffix: string; min: number; max: number; step?: number; value: number; onChange: (n: number) => void; }) {
  return (
    <label className="slider">
      <span className="slider-label">{label}<strong>{value.toLocaleString("fr-FR")}{suffix}</strong></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseInt(e.target.value))} />
    </label>
  );
}
