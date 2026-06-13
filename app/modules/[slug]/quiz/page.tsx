import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule } from "@/data/modules";
import { getQuiz, QUIZZES } from "@/data/quizzes";
import Quiz from "@/components/Quiz";

export function generateStaticParams() {
  return Object.keys(QUIZZES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getModule(slug);
  return { title: m ? `Quiz — Module ${m.number}` : "Quiz" };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getModule(slug);
  const quiz = getQuiz(slug);
  if (!m || !quiz) notFound();

  return (
    <>
      <section className="page-intro">
        <div className="container container-reading">
          <Link href={`/modules/${slug}`} className="muted" style={{ fontSize: "0.85rem", textDecoration: "none" }}>
            ← Module {m.number} · {m.title}
          </Link>
          <p className="eyebrow" style={{ marginTop: 16 }}>
            Évaluation · {quiz.questions.length} questions · barre à {quiz.passMark}/20
          </p>
          <h1>{quiz.title}</h1>
          <p>
            Assez difficile pour que la note veuille dire quelque chose. Une seule
            bonne réponse par question. Bonne chance.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="container container-reading">
          <Quiz quiz={quiz} />
        </div>
      </section>
    </>
  );
}
