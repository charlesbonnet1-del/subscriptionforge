"use client";

import { useMemo, useState } from "react";

const STAGES = [
  { key: "interet", label: "Découverte → Intérêt" },
  { key: "trial", label: "Intérêt → Trial/Free" },
  { key: "activation", label: "Trial → Activation (aha)" },
  { key: "conversion", label: "Activation → Conversion" },
  { key: "retention", label: "Rétention à 90 j" },
];

export default function FunnelCalculator() {
  const [visitors, setVisitors] = useState(10000);
  const [rates, setRates] = useState<Record<string, number>>({
    interet: 40,
    trial: 25,
    activation: 40,
    conversion: 50,
    retention: 80,
  });

  const r = useMemo(() => {
    let n = visitors;
    const steps = STAGES.map((s) => {
      n = n * (rates[s.key] / 100);
      return { ...s, count: Math.round(n), rate: rates[s.key] };
    });
    // Goulot = l'étape au taux le plus faible.
    const bottleneckStage = STAGES.reduce((min, s) => (rates[s.key] < rates[min.key] ? s : min), STAGES[0]);
    const bottleneck = { key: bottleneckStage.key, label: bottleneckStage.label, rate: rates[bottleneckStage.key] };
    return { steps, bottleneck };
  }, [visitors, rates]);

  const maxCount = visitors;

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Calculatrice · Funnel</span>
        <h3>Cartographiez votre funnel</h3>
        <p>Réglez chaque taux de passage et repérez le goulot d'étranglement — là où chaque point gagné rapporte le plus.</p>
      </div>

      <label className="slider" style={{ marginBottom: 18 }}>
        <span className="slider-label">Visiteurs / mois<strong>{visitors.toLocaleString("fr-FR")}</strong></span>
        <input type="range" min={1000} max={100000} step={1000} value={visitors} onChange={(e) => setVisitors(parseInt(e.target.value))} />
      </label>

      <div className="funnel-stages">
        {r.steps.map((s) => {
          const isBottleneck = s.key === r.bottleneck.key;
          return (
            <div className="funnel-stage" key={s.key}>
              <div className="funnel-row">
                <span className="funnel-label">{s.label}</span>
                <span className="funnel-rate">
                  <input type="range" min={2} max={95} value={s.rate} onChange={(e) => setRates({ ...rates, [s.key]: parseInt(e.target.value) })} />
                  <strong>{s.rate}%</strong>
                </span>
              </div>
              <div className="funnel-bar-track">
                <span className={`funnel-bar ${isBottleneck ? "bottleneck" : ""}`} style={{ width: `${(s.count / maxCount) * 100}%` }} />
                <span className="funnel-count">{s.count.toLocaleString("fr-FR")}{isBottleneck ? " ← goulot" : ""}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="callout" style={{ marginTop: 8 }}>
        <strong>Goulot principal : {r.bottleneck.label} ({r.bottleneck.rate}%).</strong> C'est là qu'un point de conversion gagné a le plus d'impact aval — avant de remplir le haut du funnel.
      </div>
    </div>
  );
}
