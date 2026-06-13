"use client";

import { useMemo, useState } from "react";

function euros(n: number) {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

// Chiffrer le churn acceptable AVANT d'annoncer une hausse.
export default function RepricingSimulator() {
  const [base, setBase] = useState(1000); // abonnés
  const [arpu, setArpu] = useState(20); // €/mois
  const [hike, setHike] = useState(20); // % de hausse
  const [extraChurn, setExtraChurn] = useState(5); // % de churn additionnel dû à la hausse

  const r = useMemo(() => {
    const mrrBefore = base * arpu;
    const newArpu = arpu * (1 + hike / 100);
    const retained = base * (1 - extraChurn / 100);
    const mrrAfter = retained * newArpu;
    const deltaMonthly = mrrAfter - mrrBefore;
    const delta12 = deltaMonthly * 12;
    // Seuil de churn au-delà duquel la hausse détruit de la valeur :
    // (1 - x) * (1 + hike) = 1  =>  x = hike / (1 + hike)
    const breakEvenChurn = (hike / (100 + hike)) * 100;
    return { mrrBefore, mrrAfter, deltaMonthly, delta12, breakEvenChurn };
  }, [base, arpu, hike, extraChurn]);

  const winning = r.deltaMonthly >= 0;

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Simulateur · Repricing</span>
        <h3>Impact d'une hausse de prix</h3>
        <p>Posez l'arithmétique avant d'annoncer : un +20 % qui provoque 5 % de churn reste largement gagnant.</p>
      </div>

      <div className="widget-controls">
        <Slider label="Taille de la base" suffix=" ab." min={100} max={20000} step={100} value={base} onChange={setBase} />
        <Slider label="ARPU mensuel" suffix="€" min={5} max={200} value={arpu} onChange={setArpu} />
        <Slider label="Hausse de prix" suffix="%" min={5} max={60} value={hike} onChange={setHike} />
        <Slider label="Churn additionnel anticipé" suffix="%" min={0} max={40} step={0.5} value={extraChurn} onChange={setExtraChurn} />
      </div>

      <div className="widget-results">
        <Cell value={`${euros(r.mrrBefore)} €`} label="MRR avant" />
        <Cell value={`${euros(r.mrrAfter)} €`} label="MRR après" tone={winning ? "ok" : "danger"} />
        <Cell value={`${r.deltaMonthly >= 0 ? "+" : ""}${euros(r.deltaMonthly)} €`} label="Δ MRR / mois" tone={winning ? "ok" : "danger"} />
        <Cell value={`${r.delta12 >= 0 ? "+" : ""}${euros(r.delta12)} €`} label="Δ revenu 12 mois" tone={winning ? "ok" : "danger"} />
        <Cell value={`${r.breakEvenChurn.toFixed(1)} %`} label="Churn au point d'équilibre" tone="warn" />
      </div>

      <div className={`verdict ${winning ? "ok" : "danger"}`} style={{ marginTop: 16 }}>
        <strong>
          {winning
            ? `Gagnant : tant que le churn additionnel reste sous ${r.breakEvenChurn.toFixed(1)} %, la hausse crée de la valeur.`
            : `Perdant : à ${extraChurn} % de churn, la hausse détruit de la valeur (seuil : ${r.breakEvenChurn.toFixed(1)} %).`}
        </strong>
      </div>
    </div>
  );
}

function Slider({ label, suffix, min, max, step = 1, value, onChange }: { label: string; suffix: string; min: number; max: number; step?: number; value: number; onChange: (n: number) => void; }) {
  return (
    <label className="slider">
      <span className="slider-label">{label}<strong>{value}{suffix}</strong></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseFloat(e.target.value))} />
    </label>
  );
}
function Cell({ value, label, tone }: { value: string; label: string; tone?: string }) {
  return (
    <div className={`result-cell ${tone ?? ""}`}>
      <span className="result-value">{value}</span>
      <span className="result-label">{label}</span>
    </div>
  );
}
