"use client";

import Link from "next/link";
import { useProgress } from "@/components/ProgressContext";

export default function LessonActions({
  lessonId,
  nextHref,
  nextLabel,
}: {
  lessonId: string;
  nextHref: string;
  nextLabel: string;
}) {
  const { completeLesson, completedLessons, ready } = useProgress();
  const done = ready && completedLessons.includes(lessonId);

  return (
    <div className="lesson-actions">
      <button
        className={done ? "btn-ghost" : "cta-fire-button"}
        onClick={() => completeLesson(lessonId, 25)}
        disabled={done}
      >
        {done ? "✓ Cours terminé (+25 XP)" : "Marquer comme terminé"}
      </button>
      <Link href={nextHref} className={done ? "cta-fire-button" : "btn-ghost"}>
        {nextLabel} →
      </Link>
    </div>
  );
}
