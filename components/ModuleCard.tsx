"use client";

import Link from "next/link";
import type { ModuleMeta } from "@/data/modules";
import { useProgress } from "./ProgressContext";

export default function ModuleCard({
  module: m,
  available,
  lessonCount,
  firstLessonSlug,
}: {
  module: ModuleMeta;
  available: boolean;
  lessonCount: number;
  firstLessonSlug?: string;
}) {
  const { completedLessons, quizScores, ready } = useProgress();

  const done = ready ? completedLessons.filter((id) => id.startsWith(`${m.slug}:`)).length : 0;
  const pct = lessonCount > 0 ? Math.round((done / lessonCount) * 100) : 0;
  const note = ready ? quizScores[m.slug] : undefined;

  const href = available && firstLessonSlug ? `/modules/${m.slug}/${firstLessonSlug}` : `/modules/${m.slug}`;

  return (
    <Link href={href} className="module-card">
      <div className="module-meta">
        <span className="module-number">Module {m.number}</span>
        <span>
          {m.lessons} cours · {m.minutes} min
        </span>
      </div>
      <h3>{m.title}</h3>
      <p className="tagline">{m.tagline}</p>
      <p>{m.description}</p>

      {available && ready && done > 0 && (
        <div style={{ marginBottom: 16 }}>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="module-stat" style={{ marginTop: 6, display: "inline-block" }}>
            {done}/{lessonCount} cours{note !== undefined ? ` · quiz ${note}/20` : ""}
          </span>
        </div>
      )}

      <div className="module-foot">
        <span className="module-link">
          {available ? (done > 0 ? "Reprendre →" : "Commencer →") : "Aperçu →"}
        </span>
        <span className={`badge ${available ? "badge-fire" : "badge-soon"}`}>
          {available ? "Disponible" : "Bientôt"}
        </span>
      </div>
    </Link>
  );
}
