"use client";

import { useState } from "react";
import Link from "next/link";
import type { Quiz as QuizType } from "@/data/quizzes";
import { useProgress } from "@/components/ProgressContext";

export default function Quiz({ quiz }: { quiz: QuizType }) {
  const { addXp, setQuizScore } = useProgress();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [awarded, setAwarded] = useState(false);

  const n = quiz.questions.length;
  const answeredCount = Object.keys(answers).length;
  const rawCorrect = quiz.questions.filter((q) => answers[q.id] === q.correct).length;
  const note = Math.round((rawCorrect / n) * 20 * 10) / 10;
  const passed = note >= quiz.passMark;

  function submit() {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setQuizScore(quiz.moduleSlug, note);
    if (!awarded) {
      addXp(rawCorrect * 5 + (passed ? 30 : 0));
      setAwarded(true);
    }
  }

  function retry() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div>
      {submitted && (
        <div className={`verdict ${passed ? "ok" : "danger"}`} style={{ marginBottom: 28 }}>
          <p className="eyebrow" style={{ margin: 0 }}>
            {passed ? "Module validé" : "Pas encore"}
          </p>
          <h3 style={{ fontSize: "2rem", margin: "4px 0" }}>{note} / 20</h3>
          <p style={{ margin: 0 }}>
            {passed
              ? `Bravo — vous dépassez la barre de ${quiz.passMark}/20. Vous pensez désormais en opérateur.`
              : `La barre est à ${quiz.passMark}/20. Relisez les explications ci-dessous, puis retentez.`}
          </p>
          <div className="diag-actions" style={{ marginTop: 16 }}>
            <button className="btn-ghost" onClick={retry}>
              Refaire le quiz
            </button>
            <Link href="/modules" className="cta-fire-button">
              Module suivant →
            </Link>
          </div>
        </div>
      )}

      <div className="quiz-list">
        {quiz.questions.map((q, qi) => (
          <div className="quiz-q" key={q.id}>
            <p className="quiz-prompt">
              <span className="quiz-idx">{qi + 1}.</span> {q.prompt}
            </p>
            <div className="quiz-options">
              {q.options.map((opt, oi) => {
                const picked = answers[q.id] === oi;
                const isCorrect = submitted && oi === q.correct;
                const isWrongPick = submitted && picked && oi !== q.correct;
                return (
                  <button
                    key={oi}
                    className={`quiz-option ${picked ? "picked" : ""} ${isCorrect ? "correct" : ""} ${
                      isWrongPick ? "wrong" : ""
                    }`}
                    onClick={() => !submitted && setAnswers({ ...answers, [q.id]: oi })}
                    disabled={submitted}
                  >
                    <span className="quiz-bullet">{String.fromCharCode(65 + oi)}</span>
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="quiz-explain">
                <strong>{answers[q.id] === q.correct ? "✓ Correct. " : "✗ "}</strong>
                {q.explain}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <div className="diag-actions" style={{ marginTop: 24 }}>
          <button className="cta-fire-button" onClick={submit} disabled={answeredCount < n}>
            {answeredCount < n ? `Répondez à tout (${answeredCount}/${n})` : "Valider mes réponses"}
          </button>
        </div>
      )}
    </div>
  );
}
