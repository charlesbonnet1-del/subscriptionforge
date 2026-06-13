"use client";

import { useMemo, useState } from "react";

function euros(n: number) {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

// Waterfall MRR interactif : régler les cinq flux, lire un mois en une image.
export default function MrrWaterfall() {
  const [start, setStart] = useState(50000);
  const [neu, setNeu] = useState(9000);
  const [expansion, setExpansion] = useState(4000);
  const [reactivation, setReactivation] = useState(1500);
  const [contraction, setContraction] = useState(2500);
  const [churn, setChurn] = useState(6000);

  const r = useMemo(() => {
    const end = start + neu + expansion + reactivation - contraction - churn;
    const net = end - start;
    const grossNew = neu + expansion + reactivation;
    const lost = contraction + churn;
    // Diagnostic
    let diag: { tone: string; msg: string };
    if (net <= 0) diag = { tone: "danger", msg: "MRR en recul : les pertes dépassent les moteurs de croissance." };
    else if (churn > neu) diag = { tone: "danger", msg: "Croissance fragile : le churn dépasse le New — la cascade monte en brûlant du CAC pour compenser la fuite (seau percé)." };
    else if (contraction > expansion) diag = { tone: "warn", msg: "Attention à la contraction : elle dépasse l'expansion — le prédateur silencieux ronge le second moteur." };
    else diag = { tone: "ok", msg: "Croissance saine : New solide et Expansion qui grossit, churn contenu — la cascade monte par ses deux moteurs." };
    return { end, net, grossNew, lost, diag };
  }, [start, neu, expansion, reactivation, contraction, churn]);

  // Construction de la cascade (échelle relative au max).
  const max = Math.max(start, r.end) * 1.15;
  const bars = [
    { label: "Départ", value: start, type: "base", base: 0 },
    { label: "New", value: neu, type: "pos", base: start },
    { label: "Expansion", value: expansion, type: "pos", base: start + neu },
    { label: "Reactiv.", value: reactivation, type: "pos", base: start + neu + expansion },
    { label: "Contraction", value: -contraction, type: "neg", base: start + neu + expansion + reactivation - contraction },
    { label: "Churn", value: -churn, type: "neg", base: r.end },
    { label: "Final", value: r.end, type: "base", base: 0 },
  ];

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Visualisation · MRR Waterfall</span>
        <h3>Lire un mois en une image</h3>
        <p>Le MRR total est un solde — seul son mouvement dit la vérité. Réglez les cinq flux.</p>
      </div>

      <div className="widget-controls">
        <Slider label="MRR de départ" v={start} set={setStart} max={200000} step={1000} />
        <Slider label="New" v={neu} set={setNeu} max={40000} step={500} />
        <Slider label="Expansion" v={expansion} set={setExpansion} max={30000} step={500} />
        <Slider label="Reactivation" v={reactivation} set={setReactivation} max={15000} step={500} />
        <Slider label="Contraction" v={contraction} set={setContraction} max={30000} step={500} />
        <Slider label="Churn" v={churn} set={setChurn} max={40000} step={500} />
      </div>

      <div className="waterfall">
        {bars.map((b, i) => {
          const h = (Math.abs(b.value) / max) * 100;
          const bottom = (b.base / max) * 100;
          return (
            <div className="wf-col" key={i}>
              <div className="wf-track">
                <span
                  className={`wf-bar ${b.type}`}
                  style={{ height: `${h}%`, bottom: `${bottom}%` }}
                />
              </div>
              <span className="wf-label">{b.label}</span>
              <span className="wf-value">{b.value >= 0 ? "" : "−"}{euros(Math.abs(b.value))}</span>
            </div>
          );
        })}
      </div>

      <div className={`verdict ${r.diag.tone}`} style={{ marginTop: 16 }}>
        <strong>MRR final : {euros(r.end)} € ({r.net >= 0 ? "+" : ""}{euros(r.net)} €).</strong>
        <p style={{ margin: "4px 0 0" }}>{r.diag.msg}</p>
      </div>
    </div>
  );
}

function Slider({ label, v, set, max, step }: { label: string; v: number; set: (n: number) => void; max: number; step: number }) {
  return (
    <label className="slider">
      <span className="slider-label">{label}<strong>{v.toLocaleString("fr-FR")} €</strong></span>
      <input type="range" min={0} max={max} step={step} value={v} onChange={(e) => set(parseInt(e.target.value))} />
    </label>
  );
}
