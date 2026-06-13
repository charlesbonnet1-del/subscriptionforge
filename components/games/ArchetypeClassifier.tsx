"use client";

import { useState } from "react";
import { ARCHETYPES } from "@/data/archetypes";
import { useProgress } from "@/components/ProgressContext";

type Item = { business: string; answer: number; why: string };

const ITEMS: Item[] = [
  { business: "Application de méditation (type Calm)", answer: 1, why: "On paie l'accès à un catalogue de séances qui se renouvelle." },
  { business: "API d'envoi de SMS (type Twilio)", answer: 6, why: "Facturation à la consommation, par message envoyé." },
  { business: "Logiciel de paie en ligne", answer: 2, why: "Outil professionnel récurrent, lock-in par les données et le workflow." },
  { business: "Box de café en grains mensuelle", answer: 4, why: "Réapprovisionnement physique avec coût variable par cycle." },
  { business: "Club d'investissement avec Discord privé", answer: 5, why: "On paie l'appartenance et l'accès aux pairs, pas un produit." },
  { business: "Newsletter financière payante d'un analyste", answer: 7, why: "Un individu monétise son audience par une production récurrente." },
  { business: "Plateforme de réservation pour coiffeurs", answer: 8, why: "Marketplace : on vend l'accès à la demande côté pro." },
  { business: "Service de pressing à domicile illimité", answer: 3, why: "On prépaie un avantage sur des transactions récurrentes." },
  { business: "Amazon Prime", answer: 3, why: "Avantage prépayé (livraison) qui aimante les transactions." },
  { business: "Figma (design collaboratif)", answer: 2, why: "SaaS : lock-in par la collaboration et les fichiers." },
  { business: "HelloFresh (kits repas)", answer: 4, why: "Curation + livraison physique, marge sous tension." },
  { business: "Patreon d'un illustrateur", answer: 7, why: "Creator economy : production récurrente d'un créateur (frontière avec la communauté)." },
];

export default function ArchetypeClassifier() {
  const { addXp } = useProgress();
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [awarded, setAwarded] = useState(false);

  const allAnswered = Object.keys(picks).length === ITEMS.length;
  const score = ITEMS.filter((it, i) => picks[i] === it.answer).length;

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
        <span className="badge badge-fire">Mini-jeu · Classification</span>
        <h3>Classez ces 12 business</h3>
        <p>Placez chacun dans son archétype dominant. Certains flirtent avec deux — visez le dominant.</p>
      </div>

      <div className="classify-list">
        {ITEMS.map((it, i) => {
          const correct = checked && picks[i] === it.answer;
          const wrong = checked && picks[i] !== undefined && picks[i] !== it.answer;
          return (
            <div className={`classify-row ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`} key={i}>
              <span className="classify-biz">{it.business}</span>
              <select
                value={picks[i] ?? ""}
                onChange={(e) => setPicks({ ...picks, [i]: Number(e.target.value) })}
                disabled={checked}
              >
                <option value="" disabled>
                  Choisir…
                </option>
                {ARCHETYPES.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.id}. {a.short}
                  </option>
                ))}
              </select>
              {checked && (
                <span className="classify-why">
                  {correct ? "✓ " : `✗ Réponse : ${it.answer}. ${ARCHETYPES[it.answer - 1].short}. `}
                  {it.why}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="diag-actions" style={{ marginTop: 20 }}>
        {!checked ? (
          <button className="cta-fire-button" onClick={check} disabled={!allAnswered}>
            {allAnswered ? "Vérifier" : `Répondez aux 12 (${Object.keys(picks).length}/12)`}
          </button>
        ) : (
          <>
            <div className={`verdict ${score >= 10 ? "ok" : score >= 7 ? "warn" : "danger"}`} style={{ flex: 1 }}>
              <strong>
                Score : {score} / {ITEMS.length}
              </strong>
              <p style={{ margin: "4px 0 0" }}>
                {score >= 10
                  ? "Excellent — vous distinguez les mécaniques de valeur."
                  : score >= 7
                  ? "Bien, mais quelques archétypes se confondent encore."
                  : "Relisez le cours 1.3 : la confusion d'archétype coûte cher."}
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
