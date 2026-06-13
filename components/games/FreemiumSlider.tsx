"use client";

import { useState } from "react";
import { useProgress } from "@/components/ProgressContext";

type Feature = { label: string; paid: boolean; why: string };

// Produit : un SaaS de prise de notes collaboratif (type Notion/Slack).
const FEATURES: Feature[] = [
  { label: "Pages et notes personnelles illimitées", paid: false, why: "Le free-produit doit démontrer la valeur centrale pour recruter (cf. Notion personnel)." },
  { label: "Recherche dans ses propres notes", paid: false, why: "Fonction de base : la garder libre rend le produit gratuit digne." },
  { label: "Collaboration et partage d'équipe", paid: true, why: "Le déclencheur de conversion le plus puissant : convertit quand le budget change de poche." },
  { label: "Historique des versions au-delà de 90 jours", paid: true, why: "Le maître-déclencheur (cf. Slack) : indolore au début, grandit avec la dépendance." },
  { label: "Administration et gestion des rôles", paid: true, why: "Valeur collective : se monétise au niveau de l'entreprise, pas de l'individu." },
  { label: "Export PDF de ses notes", paid: false, why: "Laisser sortir ses propres données : bloquer l'export crée de la frustration négative." },
  { label: "Intégrations avancées (API, automatisations)", paid: true, why: "Power-user / équipe : levier d'ARPU, pas cœur de la valeur gratuite." },
  { label: "Invités externes sur un document", paid: true, why: "Partage = collaboration : à réserver pour déclencher la conversion d'équipe." },
  { label: "Modèles et mise en forme de base", paid: false, why: "Confort d'entrée qui accroche : maintient le free attractif et viral." },
  { label: "Support prioritaire et SLA", paid: true, why: "Garantie de service : argument B2B classique du plan supérieur." },
];

export default function FreemiumSlider() {
  const { addXp } = useProgress();
  const [picks, setPicks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [awarded, setAwarded] = useState(false);

  const all = Object.keys(picks).length === FEATURES.length;
  const score = FEATURES.filter((f, i) => picks[i] === f.paid).length;

  function check() {
    setChecked(true);
    if (!awarded) {
      addXp(score * 3);
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
        <span className="badge badge-fire">Mini-jeu · Le curseur freemium</span>
        <h3>Gratuit ou payant ?</h3>
        <p>Dix fonctionnalités d'un outil de notes collaboratif. Placez chacune du bon côté du paywall.</p>
      </div>

      <div className="freemium-list">
        {FEATURES.map((f, i) => {
          const choice = picks[i];
          const correct = checked && choice === f.paid;
          const wrong = checked && choice !== undefined && choice !== f.paid;
          return (
            <div className={`freemium-row ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`} key={i}>
              <span className="freemium-label">{f.label}</span>
              <span className="freemium-toggle">
                <button
                  className={choice === false ? "active free" : ""}
                  onClick={() => !checked && setPicks({ ...picks, [i]: false })}
                  disabled={checked}
                >
                  Gratuit
                </button>
                <button
                  className={choice === true ? "active paid" : ""}
                  onClick={() => !checked && setPicks({ ...picks, [i]: true })}
                  disabled={checked}
                >
                  Payant
                </button>
              </span>
              {checked && (
                <span className="freemium-why">
                  {correct ? "✓ " : `✗ ${f.paid ? "Payant" : "Gratuit"}. `}
                  {f.why}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="diag-actions" style={{ marginTop: 18 }}>
        {!checked ? (
          <button className="cta-fire-button" onClick={check} disabled={!all}>
            {all ? "Vérifier" : `${Object.keys(picks).length}/10`}
          </button>
        ) : (
          <>
            <div className={`verdict ${score >= 9 ? "ok" : score >= 6 ? "warn" : "danger"}`} style={{ flex: 1 }}>
              <strong>{score} / 10</strong>
              <p style={{ margin: "4px 0 0" }}>
                Les trois qui changent tout : protéger le hook de rétention, réserver la collaboration, démontrer la valeur en free.
              </p>
            </div>
            <button className="btn-ghost" onClick={reset}>Rejouer</button>
          </>
        )}
      </div>
    </div>
  );
}
