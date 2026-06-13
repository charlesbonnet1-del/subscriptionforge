"use client";

import { useMemo, useState } from "react";

function euros(n: number) {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

// L'économie d'une box : marge contributive par cycle et point mort logistique.
export default function BoxEconomics() {
  const [price, setPrice] = useState(35);
  const [cogs, setCogs] = useState(18); // produit + packaging + transport
  const [cac, setCac] = useState(25);
  const [churn, setChurn] = useState(10); // % mensuel
  const [skip, setSkip] = useState(15); // % de cycles skippés

  const r = useMemo(() => {
    const margin = price - cogs; // marge contributive par cycle livré
    const marginPct = price > 0 ? (margin / price) * 100 : 0;
    const breakEvenCycles = margin > 0 ? cac / margin : Infinity;
    // Cycles moyens livrés sur la durée de vie (en tenant compte du skip).
    const lifetimeCycles = (1 / (churn / 100)) * (1 - skip / 100);
    const ltv = lifetimeCycles * margin - cac;
    const survivesM3 = lifetimeCycles >= breakEvenCycles;
    return { margin, marginPct, breakEvenCycles, lifetimeCycles, ltv, survivesM3 };
  }, [price, cogs, cac, churn, skip]);

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Calculatrice · Box physique</span>
        <h3>Le point mort logistique</h3>
        <p>Chaque cycle a un coût variable réel. Un abonné qui churne avant le point mort est une perte sèche.</p>
      </div>

      <div className="widget-controls">
        <Slider label="Prix / cycle" v={price} set={setPrice} min={10} max={100} suffix="€" />
        <Slider label="COGS / cycle (produit+log.)" v={cogs} set={setCogs} min={3} max={80} suffix="€" />
        <Slider label="CAC" v={cac} set={setCac} min={5} max={120} suffix="€" />
        <Slider label="Churn mensuel" v={churn} set={setChurn} min={2} max={20} step={0.5} suffix="%" />
        <Slider label="Taux de skip" v={skip} set={setSkip} min={0} max={40} suffix="%" />
      </div>

      <div className="widget-results" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div className="result-cell"><span className="result-value">{euros(r.margin)} € <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>({r.marginPct.toFixed(0)}%)</span></span><span className="result-label">Marge / cycle</span></div>
        <div className="result-cell warn"><span className="result-value">{Number.isFinite(r.breakEvenCycles) ? r.breakEvenCycles.toFixed(1) : "∞"}</span><span className="result-label">Cycles au point mort</span></div>
        <div className={`result-cell ${r.ltv >= 0 ? "ok" : "danger"}`}><span className="result-value">{euros(r.ltv)} €</span><span className="result-label">LTV nette / abonné</span></div>
      </div>

      <div className={`verdict ${r.survivesM3 && r.ltv >= 0 ? "ok" : "danger"}`} style={{ marginTop: 14 }}>
        <strong>
          {r.survivesM3 && r.ltv >= 0
            ? `Modèle viable : la durée de vie (~${r.lifetimeCycles.toFixed(1)} cycles livrés) dépasse le point mort de ${r.breakEvenCycles.toFixed(1)} cycles.`
            : `Modèle fragile : la cohorte meurt avant d'avoir remboursé le CAC + les premières box. La rétention à M3 est la métrique du métier.`}
        </strong>
      </div>
      <p className="muted" style={{ fontSize: "0.8rem", marginTop: 8 }}>
        Marge brute typique d'une box : 40-60 % (vs 80-90 % en SaaS). La promo d'appel agressive recrute des cohortes mortes à M2 — le poison classique.
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
