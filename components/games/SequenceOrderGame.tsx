"use client";

import { useState } from "react";
import { useProgress } from "@/components/ProgressContext";

export type SeqItem = { id: string; when: string; title: string; role: string };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Jeu générique de remise en ordre d'une séquence (emails, étapes…).
export default function SequenceOrderGame({
  badge,
  title,
  intro,
  correct,
  xpPerCorrect = 4,
}: {
  badge: string;
  title: string;
  intro: string;
  correct: SeqItem[];
  xpPerCorrect?: number;
}) {
  const { addXp } = useProgress();
  const [order, setOrder] = useState<SeqItem[]>(() => shuffle(correct));
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

  const score = order.filter((e, i) => e.id === correct[i].id).length;

  function check() {
    setChecked(true);
    if (!awarded) {
      addXp(score * xpPerCorrect);
      setAwarded(true);
    }
  }
  function reset() {
    setOrder(shuffle(correct));
    setChecked(false);
  }

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">{badge}</span>
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>

      <div className="order-list">
        {order.map((e, i) => {
          const ok = checked && e.id === correct[i].id;
          const bad = checked && e.id !== correct[i].id;
          return (
            <div className={`order-row ${ok ? "correct" : ""} ${bad ? "wrong" : ""}`} key={e.id}>
              <span className="order-pos">{i + 1}</span>
              <div className="order-body">
                <strong>{e.title}</strong>
                {checked && (
                  <span className="order-role">
                    {ok ? `✓ ${e.when} — ` : `✗ ici : « ${correct[i].title} » (${correct[i].when}). `}
                    {ok ? e.role : ""}
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
          <button className="cta-fire-button" onClick={check}>Vérifier l'ordre</button>
        ) : (
          <>
            <div className={`verdict ${score === correct.length ? "ok" : score >= correct.length - 1 ? "warn" : "danger"}`} style={{ flex: 1 }}>
              <strong>{score} / {correct.length} bien placés</strong>
            </div>
            <button className="btn-ghost" onClick={reset}>Rejouer</button>
          </>
        )}
      </div>
    </div>
  );
}
