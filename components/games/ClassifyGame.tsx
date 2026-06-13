"use client";

import { useState } from "react";
import { useProgress } from "@/components/ProgressContext";

export type ClassifyOption = { value: string; label: string };
export type ClassifyItem = { prompt: string; answer: string; why: string };

// Jeu de classification générique : associer chaque énoncé à la bonne catégorie.
export default function ClassifyGame({
  badge,
  title,
  intro,
  options,
  items,
  xpPerCorrect = 4,
  goodAt,
}: {
  badge: string;
  title: string;
  intro: string;
  options: ClassifyOption[];
  items: ClassifyItem[];
  xpPerCorrect?: number;
  goodAt?: number; // seuil "bien"
}) {
  const { addXp } = useProgress();
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [awarded, setAwarded] = useState(false);

  const allAnswered = Object.keys(picks).length === items.length;
  const score = items.filter((it, i) => picks[i] === it.answer).length;
  const good = goodAt ?? Math.ceil(items.length * 0.8);

  function check() {
    setChecked(true);
    if (!awarded) {
      addXp(score * xpPerCorrect);
      setAwarded(true);
    }
  }
  function reset() {
    setPicks({});
    setChecked(false);
  }

  function labelOf(value: string) {
    return options.find((o) => o.value === value)?.label ?? value;
  }

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">{badge}</span>
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>

      <div className="classify-list">
        {items.map((it, i) => {
          const correct = checked && picks[i] === it.answer;
          const wrong = checked && picks[i] !== undefined && picks[i] !== it.answer;
          return (
            <div className={`classify-row ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`} key={i}>
              <span className="classify-biz">{it.prompt}</span>
              <select
                value={picks[i] ?? ""}
                onChange={(e) => setPicks({ ...picks, [i]: e.target.value })}
                disabled={checked}
              >
                <option value="" disabled>
                  Choisir…
                </option>
                {options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              {checked && (
                <span className="classify-why">
                  {correct ? "✓ " : `✗ Réponse : ${labelOf(it.answer)}. `}
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
            {allAnswered ? "Vérifier" : `${Object.keys(picks).length}/${items.length}`}
          </button>
        ) : (
          <>
            <div className={`verdict ${score >= good ? "ok" : score >= items.length / 2 ? "warn" : "danger"}`} style={{ flex: 1 }}>
              <strong>
                Score : {score} / {items.length}
              </strong>
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
