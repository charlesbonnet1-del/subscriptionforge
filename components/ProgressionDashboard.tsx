"use client";

import Link from "next/link";
import { useProgress, levelFromXp } from "./ProgressContext";

export type ModuleSummary = {
  slug: string;
  number: string;
  title: string;
  available: boolean;
  lessonSlugs: string[];
  firstLessonSlug?: string;
  hasQuiz: boolean;
};

export default function ProgressionDashboard({ modules }: { modules: ModuleSummary[] }) {
  const { xp, streak, completedLessons, quizScores, diagnosticDone, ready } = useProgress();

  if (!ready) {
    return <p className="muted">Chargement de votre progression…</p>;
  }

  const level = levelFromXp(xp);
  const xpForNext = 50 * Math.pow(level, 2);
  const xpForCur = 50 * Math.pow(level - 1, 2);
  const levelPct = Math.min(100, Math.round(((xp - xpForCur) / (xpForNext - xpForCur)) * 100));

  const availableModules = modules.filter((m) => m.available);
  const totalLessons = availableModules.reduce((n, m) => n + m.lessonSlugs.length, 0);
  const doneLessons = completedLessons.length;
  const quizzesPassed = Object.values(quizScores).filter((n) => n >= 14).length;

  return (
    <div>
      {/* Bandeau stats */}
      <div className="prog-hero">
        <div className="prog-stat-big">
          <span className="prog-level">Niveau {level}</span>
          <div className="prog-xpbar">
            <span style={{ width: `${levelPct}%` }} />
          </div>
          <span className="muted" style={{ fontSize: "0.82rem" }}>
            {xp} XP · {xpForNext - xp} XP avant le niveau {level + 1}
          </span>
        </div>
        <div className="prog-stats-row">
          <div className="prog-stat"><span className="num">🔥 {streak}</span><span className="label">Série (jours)</span></div>
          <div className="prog-stat"><span className="num">{doneLessons}<span className="muted" style={{ fontSize: "1rem" }}>/{totalLessons}</span></span><span className="label">Cours terminés</span></div>
          <div className="prog-stat"><span className="num">{quizzesPassed}</span><span className="label">Quiz validés</span></div>
          <div className="prog-stat"><span className="num">{diagnosticDone ? "✓" : "—"}</span><span className="label">Diagnostic</span></div>
        </div>
      </div>

      {/* Détail par module */}
      <h2 style={{ fontSize: "1.5rem", margin: "40px 0 18px" }}>Votre avancement</h2>
      <div className="prog-modules">
        {modules.map((m) => {
          const done = completedLessons.filter((id) => id.startsWith(`${m.slug}:`)).length;
          const total = m.lessonSlugs.length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          const note = quizScores[m.slug];
          const complete = m.available && done >= total && total > 0;
          return (
            <Link
              key={m.slug}
              href={m.available && m.firstLessonSlug ? `/modules/${m.slug}/${m.firstLessonSlug}` : `/modules/${m.slug}`}
              className={`prog-module ${!m.available ? "soon" : ""}`}
            >
              <div className="prog-module-top">
                <span className="prog-module-num">M{m.number}</span>
                <span className="prog-module-title">{m.title}</span>
                {complete && <span className="badge badge-fire">✓ Terminé</span>}
                {!m.available && <span className="badge badge-soon">Bientôt</span>}
              </div>
              {m.available && (
                <>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="prog-module-meta">
                    <span>{done}/{total} cours</span>
                    {note !== undefined ? (
                      <span className={note >= 14 ? "ok-text" : "muted"}>Quiz : {note}/20</span>
                    ) : (
                      m.hasQuiz && <span className="muted">Quiz non passé</span>
                    )}
                  </div>
                </>
              )}
            </Link>
          );
        })}
      </div>

      <p className="muted" style={{ fontSize: "0.82rem", marginTop: 28 }}>
        Votre progression est enregistrée localement sur cet appareil (sans inscription). Elle sera
        rattachée à votre compte lorsque les abonnements seront activés.
      </p>
    </div>
  );
}
