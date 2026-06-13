"use client";

import { useMemo, useState } from "react";

function euros(n: number) {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

// Compare l'impact LTV/trésorerie d'une base 100 % mensuelle, 100 % annuelle, mix 70/30.
export default function MonthlyVsAnnual() {
  const [arpu, setArpu] = useState(20);
  const [churn, setChurn] = useState(5); // % mensuel pour le mensuel

  const r = useMemo(() => {
    const cM = churn / 100;
    // L'annuel divise le churn par ~3 (hypothèse médiane du livre : /2 à /4).
    const cA = cM / 3;
    const ltvM = arpu / cM;
    const ltvA = arpu / cA;
    const ltvMix = 0.7 * ltvM + 0.3 * ltvA;

    // Revenu cumulé à 36 mois pour 100 nouveaux abonnés/mois.
    function cumul(c: number) {
      let active = 0;
      let total = 0;
      for (let m = 0; m < 36; m++) {
        active = active * (1 - c) + 100;
        total += active * arpu;
      }
      return total;
    }
    const cumM = cumul(cM);
    const cumA = cumul(cA);
    return { ltvM, ltvA, ltvMix, cumM, cumA, cumMix: 0.7 * cumM + 0.3 * cumA, cA: cA * 100 };
  }, [arpu, churn]);

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Calculatrice · Périodicité</span>
        <h3>Mensuel vs annuel</h3>
        <p>La périodicité est une décision de LTV, pas de facturation. L'annuel divise le churn par ~2 à 4.</p>
      </div>

      <div className="widget-controls">
        <Slider label="ARPU mensuel" suffix="€" min={5} max={200} value={arpu} onChange={setArpu} />
        <Slider label="Churn mensuel (offre mensuelle)" suffix="%" min={1} max={20} step={0.5} value={churn} onChange={setChurn} />
      </div>

      <div className="compare" style={{ marginTop: 8 }}>
        <div className="compare-pane">
          <h4>100 % Mensuel</h4>
          <ul>
            <li>Churn annualisé élevé — LTV courte</li>
            <li>LTV : <strong>{euros(r.ltvM)} €</strong></li>
            <li>Revenu cumulé 36 mois : <strong>{euros(r.cumM)} €</strong></li>
          </ul>
        </div>
        <div className="compare-pane fire">
          <h4>100 % Annuel</h4>
          <ul>
            <li>Churn ramené à ~{r.cA.toFixed(1)} %/mois — cash encaissé d'avance</li>
            <li>LTV : <strong>{euros(r.ltvA)} €</strong></li>
            <li>Revenu cumulé 36 mois : <strong>{euros(r.cumA)} €</strong></li>
          </ul>
        </div>
      </div>

      <div className="callout" style={{ marginTop: 16 }}>
        <strong>Mix réaliste 70/30 :</strong> LTV ≈ {euros(r.ltvMix)} € · revenu cumulé ≈ {euros(r.cumMix)} €.
        La migration mensuel → annuel (remise 15-20 %, framing « 2 mois offerts ») est l'une des campagnes au meilleur ROI du métier.
      </div>
    </div>
  );
}

function Slider({
  label, suffix, min, max, step = 1, value, onChange,
}: {
  label: string; suffix: string; min: number; max: number; step?: number; value: number; onChange: (n: number) => void;
}) {
  return (
    <label className="slider">
      <span className="slider-label">
        {label}
        <strong>{value}{suffix}</strong>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseFloat(e.target.value))} />
    </label>
  );
}
