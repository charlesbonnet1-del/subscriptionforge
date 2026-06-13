"use client";

import { useMemo, useState } from "react";

// Facteur viral k = invitations émises × taux de conversion par invitation.
export default function ViralKCalculator() {
  const [share, setShare] = useState(15); // % d'abonnés qui parrainent
  const [invites, setInvites] = useState(3); // invitations par parrain
  const [conv, setConv] = useState(20); // % de conversion par invitation

  const r = useMemo(() => {
    const k = (share / 100) * invites * (conv / 100);
    // Multiplicateur d'une cohorte via la série géométrique (si k < 1).
    const amplification = k < 1 ? 1 / (1 - k) : Infinity;
    return { k, amplification };
  }, [share, invites, conv]);

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Calculatrice · Referral</span>
        <h3>Le facteur viral k</h3>
        <p>Pas besoin du mythique k &gt; 1 : à k = 0,3, chaque cohorte en amène 30 % de plus, gratuitement.</p>
      </div>

      <div className="widget-controls">
        <Slider label="Abonnés qui parrainent" suffix="%" min={1} max={60} value={share} onChange={setShare} />
        <Slider label="Invitations par parrain" suffix="" min={1} max={10} value={invites} onChange={setInvites} />
        <Slider label="Conversion par invitation" suffix="%" min={2} max={60} value={conv} onChange={setConv} />
      </div>

      <div className="widget-results" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className={`result-cell ${r.k >= 0.2 ? "ok" : "warn"}`}>
          <span className="result-value">{r.k.toFixed(2)}</span>
          <span className="result-label">Facteur viral k</span>
        </div>
        <div className="result-cell">
          <span className="result-value">{Number.isFinite(r.amplification) ? `×${r.amplification.toFixed(2)}` : "∞"}</span>
          <span className="result-label">Amplification de chaque cohorte</span>
        </div>
      </div>

      <div className={`verdict ${r.k >= 0.3 ? "ok" : r.k >= 0.15 ? "warn" : "danger"}`} style={{ marginTop: 14 }}>
        <strong>
          {r.k >= 1
            ? "Croissance virale auto-entretenue (k ≥ 1) — rarissime et explosif."
            : r.k >= 0.3
            ? "Excellent : le referral transforme l'économie d'acquisition et fait baisser le CAC mixte."
            : r.k >= 0.15
            ? "Correct : un socle de referral utile, à optimiser (trigger, incentive double, friction)."
            : "Faible : revoir le trigger (après l'aha moment) et l'incentive (double, en nature)."}
        </strong>
      </div>
    </div>
  );
}

function Slider({ label, suffix, min, max, step = 1, value, onChange }: { label: string; suffix: string; min: number; max: number; step?: number; value: number; onChange: (n: number) => void; }) {
  return (
    <label className="slider">
      <span className="slider-label">{label}<strong>{value}{suffix}</strong></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseInt(e.target.value))} />
    </label>
  );
}
