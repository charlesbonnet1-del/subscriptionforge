"use client";

import { useMemo, useState } from "react";

function nf(n: number) {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

// L'économie d'une newsletter : conversion × ARPU × rétention, vs publicitaire.
export default function NewsletterCalculator() {
  const [list, setList] = useState(20000);
  const [conv, setConv] = useState(5); // % gratuit -> payant
  const [arpu, setArpu] = useState(10); // €/mois
  const [rpm, setRpm] = useState(25); // € pour 1000 emails affichés (publicité)
  const [opens, setOpens] = useState(40); // % d'ouverture

  const r = useMemo(() => {
    const payants = list * (conv / 100);
    const mrr = payants * arpu;
    const arr = mrr * 12;
    // Revenu publicitaire mensuel : 4 envois/mois × (liste × open%) / 1000 × RPM.
    const adMonthly = 4 * ((list * (opens / 100)) / 1000) * rpm;
    // Audience nécessaire pour 1000 payants à cette conversion.
    const audienceFor1000 = conv > 0 ? Math.round(1000 / (conv / 100)) : Infinity;
    return { payants, mrr, arr, adMonthly, audienceFor1000 };
  }, [list, conv, arpu, rpm, opens]);

  const aboWins = r.mrr >= r.adMonthly;

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Calculatrice · Newsletter</span>
        <h3>Abonnement vs publicité</h3>
        <p>1 000 payants à 10 $ = 10 000 $ de MRR. L'audience gratuite est le vrai chantier ; la monétisation, sa récolte.</p>
      </div>

      <div className="widget-controls">
        <Slider label="Liste (abonnés gratuits)" v={list} set={setList} min={1000} max={200000} step={1000} suffix="" />
        <Slider label="Conversion gratuit → payant" v={conv} set={setConv} min={1} max={12} step={0.5} suffix="%" />
        <Slider label="ARPU mensuel" v={arpu} set={setArpu} min={3} max={50} step={1} suffix="€" />
        <Slider label="Taux d'ouverture" v={opens} set={setOpens} min={15} max={70} step={1} suffix="%" />
        <Slider label="RPM publicité (/1000 vues)" v={rpm} set={setRpm} min={5} max={80} step={1} suffix="€" />
      </div>

      <div className="widget-results" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div className="result-cell"><span className="result-value">{nf(r.payants)}</span><span className="result-label">Abonnés payants</span></div>
        <div className={`result-cell ${aboWins ? "ok" : ""}`}><span className="result-value">{nf(r.mrr)} €</span><span className="result-label">MRR abonnement</span></div>
        <div className={`result-cell ${!aboWins ? "ok" : ""}`}><span className="result-value">{nf(r.adMonthly)} €</span><span className="result-label">Revenu publicité / mois</span></div>
      </div>

      <div className="callout" style={{ marginTop: 14 }}>
        <strong>{aboWins ? "L'abonnement l'emporte ici." : "La publicité l'emporte ici."}</strong>{" "}
        Pour atteindre 1 000 payants à {conv}% de conversion, il faut une audience gratuite engagée de ~{nf(r.audienceFor1000)}.
        La spécificité fait tout : une verticale pointue convertit à 5-10 %, une généraliste à 1-2 %.
      </div>
    </div>
  );
}

function Slider({ label, v, set, min, max, step, suffix }: { label: string; v: number; set: (n: number) => void; min: number; max: number; step: number; suffix: string }) {
  return (
    <label className="slider">
      <span className="slider-label">{label}<strong>{v.toLocaleString("fr-FR")}{suffix}</strong></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(parseFloat(e.target.value))} />
    </label>
  );
}
