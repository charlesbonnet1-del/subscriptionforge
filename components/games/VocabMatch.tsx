"use client";

import { useMemo, useState } from "react";
import { useProgress } from "@/components/ProgressContext";

type Pair = { term: string; def: string };

const PAIRS: Pair[] = [
  { term: "MRR", def: "Somme des revenus d'abonnement normalisés au mois." },
  { term: "ARR", def: "MRR × 12 ; la convention B2B et investisseurs." },
  { term: "NRR", def: "Ce que devient le revenu d'une cohorte un an après, expansion comprise." },
  { term: "Churn involontaire", def: "Départ par échec de paiement, sans décision de l'abonné." },
  { term: "ARPPU", def: "Revenu moyen par utilisateur payant uniquement." },
  { term: "Logo churn", def: "Le churn compté en clients (vs en euros)." },
  { term: "Payback period", def: "Temps nécessaire pour rembourser le CAC." },
  { term: "Contraction", def: "MRR perdu par les clients qui restent (downgrades)." },
  { term: "Expansion MRR", def: "Revenu additionnel des clients existants (upgrades, sièges)." },
  { term: "Cohorte", def: "Groupe d'abonnés arrivés la même période, suivi dans le temps." },
  { term: "DAU/MAU", def: "Ratio actifs quotidiens / mensuels ; proxy d'engagement." },
  { term: "LTV", def: "Revenu total d'un abonné sur sa durée de vie (ARPU ÷ churn)." },
  { term: "CAC", def: "Coût complet d'acquisition d'un client payant, salaires inclus." },
  { term: "Reactivation", def: "Revenu des abonnés revenus (win-back, fins de pause)." },
  { term: "Forever transaction", def: "Moment où l'abonné cesse d'évaluer et se met à appartenir." },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function VocabMatch() {
  const { addXp } = useProgress();
  const defs = useMemo(() => shuffle(PAIRS), []);
  const terms = useMemo(() => shuffle(PAIRS.map((p) => p.term)), []);
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [awarded, setAwarded] = useState(false);

  const allAnswered = Object.keys(picks).length === defs.length;
  const score = defs.filter((d, i) => picks[i] === d.term).length;

  function check() {
    setChecked(true);
    if (!awarded) {
      addXp(score * 2);
      setAwarded(true);
    }
  }
  function reset() {
    setPicks({});
    setChecked(false);
  }

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Mini-jeu · Vocabulaire</span>
        <h3>Appariez 15 définitions</h3>
        <p>Verrouillez le vocabulaire avant le Module 2. Associez chaque définition à son terme.</p>
      </div>

      <div className="vocab-list">
        {defs.map((d, i) => {
          const correct = checked && picks[i] === d.term;
          const wrong = checked && picks[i] !== undefined && picks[i] !== d.term;
          return (
            <div className={`vocab-row ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`} key={i}>
              <span className="vocab-def">{d.def}</span>
              <select
                value={picks[i] ?? ""}
                onChange={(e) => setPicks({ ...picks, [i]: e.target.value })}
                disabled={checked}
              >
                <option value="" disabled>
                  Terme…
                </option>
                {terms.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {wrong && <span className="vocab-answer">→ {d.term}</span>}
            </div>
          );
        })}
      </div>

      <div className="diag-actions" style={{ marginTop: 18 }}>
        {!checked ? (
          <button className="cta-fire-button" onClick={check} disabled={!allAnswered}>
            {allAnswered ? "Vérifier" : `${Object.keys(picks).length}/15`}
          </button>
        ) : (
          <>
            <div className={`verdict ${score >= 13 ? "ok" : score >= 9 ? "warn" : "danger"}`} style={{ flex: 1 }}>
              <strong>
                {score} / 15
              </strong>
              <p style={{ margin: "4px 0 0" }}>
                {score >= 13 ? "Vocabulaire verrouillé." : "Repassez par le glossaire et rejouez."}
              </p>
            </div>
            <button className="btn-ghost" onClick={reset}>
              Rejouer
            </button>
          </>
        )}
      </div>
    </div>
  );
}
