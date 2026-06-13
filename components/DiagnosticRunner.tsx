"use client";

import { useState } from "react";
import Link from "next/link";
import { DIAGNOSTIC, diagnosticVerdict } from "@/data/diagnostic";
import { MODULES } from "@/data/modules";
import { useProgress } from "./ProgressContext";

type Answer = "oui" | "non";

function moduleSlugByCode(code: string): string | undefined {
  // "M7-bis" -> "7-bis", "M1" -> "1"
  const num = code.replace(/^M/, "");
  return MODULES.find((m) => m.number === num)?.slug;
}

function moduleTitle(code: string): string {
  const num = code.replace(/^M/, "");
  return MODULES.find((m) => m.number === num)?.title ?? code;
}

export default function DiagnosticRunner() {
  const { markDiagnosticDone } = useProgress();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [done, setDone] = useState(false);

  const total = DIAGNOSTIC.length;

  function answer(a: Answer) {
    const next = [...answers, a];
    setAnswers(next);
    if (next.length === total) {
      setDone(true);
      markDiagnosticDone();
    } else {
      setIndex((i) => i + 1);
    }
  }

  function restart() {
    setIndex(0);
    setAnswers([]);
    setDone(false);
  }

  if (done) {
    const negatives = answers.filter((a) => a === "non").length;
    const verdict = diagnosticVerdict(negatives);

    // Modules à prioriser = ceux pointés par les réponses négatives.
    const flaggedCodes = new Map<string, number>();
    DIAGNOSTIC.forEach((q, i) => {
      if (answers[i] === "non") {
        q.modules.forEach((c) => flaggedCodes.set(c, (flaggedCodes.get(c) ?? 0) + 1));
      }
    });
    const ranked = [...flaggedCodes.entries()].sort((a, b) => b[1] - a[1]);

    return (
      <div>
        <div className={`verdict ${verdict.tone}`}>
          <p className="eyebrow" style={{ margin: 0 }}>
            {negatives} faille{negatives > 1 ? "s" : ""} sur {total}
          </p>
          <h3>{verdict.level}</h3>
          <p>{verdict.message}</p>
        </div>

        {ranked.length > 0 ? (
          <>
            <p className="eyebrow">Vos modules prioritaires</p>
            <div className="lesson-list">
              {ranked.map(([code, count]) => {
                const slug = moduleSlugByCode(code);
                return (
                  <div className="lesson-row" key={code}>
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span className="badge badge-fire">{code}</span>
                      <span>{moduleTitle(code)}</span>
                    </span>
                    {slug ? (
                      <Link href={`/modules/${slug}`} className="module-link">
                        Ouvrir →
                      </Link>
                    ) : (
                      <span className="muted">{count} signal{count > 1 ? "s" : ""}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p className="muted">
            Aucune faille détectée — impressionnant. Explorez les modules pour
            affiner.
          </p>
        )}

        <div className="diag-actions" style={{ marginTop: 28 }}>
          <button className="btn-ghost" onClick={restart}>
            Refaire le diagnostic
          </button>
          <Link href="/modules" className="cta-fire-button">
            Voir tous les modules
          </Link>
        </div>
      </div>
    );
  }

  const q = DIAGNOSTIC[index];
  const pct = Math.round((index / total) * 100);

  return (
    <div className="diag-card">
      <div className="diag-bar">
        <span style={{ width: `${pct}%` }} />
      </div>
      <p className="eyebrow" style={{ margin: 0 }}>
        Question {index + 1} / {total}
      </p>
      <p className="diag-q">{q.question}</p>
      <div className="diag-actions">
        <button className="cta-fire-button" onClick={() => answer("oui")}>
          Oui
        </button>
        <button className="btn-ghost" onClick={() => answer("non")}>
          Non / incertain
        </button>
      </div>
    </div>
  );
}
