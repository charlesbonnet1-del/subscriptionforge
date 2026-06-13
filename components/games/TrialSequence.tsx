"use client";

import { useState } from "react";
import { useProgress } from "@/components/ProgressContext";

type Email = { id: string; when: string; title: string; role: string };

// Ordre correct de la séquence canonique de trial (Module 3.4).
const CORRECT: Email[] = [
  { id: "j0", when: "J+0", title: "Bienvenue + premier pas", role: "Un seul objectif : la première action vers l'aha moment." },
  { id: "j2", when: "J+2", title: "Le point d'activation", role: "« Avez-vous fait l'action clé ? » Rattrape les décrocheurs — l'email le plus rentable." },
  { id: "j5", when: "J+5", title: "Preuve sociale + cas d'usage", role: "Un client semblable, son résultat chiffré. La preuve sociale arrive ici, pas avant." },
  { id: "jm2", when: "J-2", title: "Rappel + valeur résumée", role: "Transparence (date, prix) + bilan du trial : on convertit sur la valeur démontrée." },
  { id: "jm1", when: "J-1", title: "Urgence + offre si nécessaire", role: "L'échéance est vraie. L'offre est optionnelle et à doser." },
  { id: "jp1", when: "J+1 post-exp.", title: "Le rattrapage", role: "Le trial expiré n'est pas clos : extension, retour, nurturing. Une part des conversions s'y joue." },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TrialSequence() {
  const { addXp } = useProgress();
  const [order, setOrder] = useState<Email[]>(() => shuffle(CORRECT));
  const [checked, setChecked] = useState(false);
  const [awarded, setAwarded] = useState(false);

  function move(i: number, dir: -1 | 1) {
    if (checked) return;
    const j = i + dir;
    if (j < 0 || j >= order.length) return;
    const next = [...order];
    [next[i], next[j]] = [next[j], next[i]];
    setOrder(next);
  }

  const score = order.filter((e, i) => e.id === CORRECT[i].id).length;

  function check() {
    setChecked(true);
    if (!awarded) {
      addXp(score * 4);
      setAwarded(true);
    }
  }
  function reset() {
    setOrder(shuffle(CORRECT));
    setChecked(false);
  }

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Mini-jeu · Séquence trial</span>
        <h3>Remettez la séquence dans l'ordre</h3>
        <p>Six emails de trial livrés en désordre. Reconstituez la mécanique de conversion (du haut vers le bas).</p>
      </div>

      <div className="order-list">
        {order.map((e, i) => {
          const correct = checked && e.id === CORRECT[i].id;
          const wrong = checked && e.id !== CORRECT[i].id;
          return (
            <div className={`order-row ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`} key={e.id}>
              <span className="order-pos">{i + 1}</span>
              <div className="order-body">
                <strong>{e.title}</strong>
                {checked && (
                  <span className="order-role">
                    {correct ? `✓ ${e.when} — ` : `✗ ici devrait être « ${CORRECT[i].title} » (${CORRECT[i].when}). `}
                    {correct ? e.role : ""}
                  </span>
                )}
              </div>
              {!checked && (
                <span className="order-controls">
                  <button onClick={() => move(i, -1)} disabled={i === 0} aria-label="Monter">▲</button>
                  <button onClick={() => move(i, 1)} disabled={i === order.length - 1} aria-label="Descendre">▼</button>
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="diag-actions" style={{ marginTop: 18 }}>
        {!checked ? (
          <button className="cta-fire-button" onClick={check}>
            Vérifier l'ordre
          </button>
        ) : (
          <>
            <div className={`verdict ${score === 6 ? "ok" : score >= 4 ? "warn" : "danger"}`} style={{ flex: 1 }}>
              <strong>{score} / 6 emails bien placés</strong>
            </div>
            <button className="btn-ghost" onClick={reset}>Rejouer</button>
          </>
        )}
      </div>
    </div>
  );
}
