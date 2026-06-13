import type { Metadata } from "next";
import { MODULES } from "@/data/modules";
import { getCourse } from "@/data/courses";
import ProgressionDashboard, { type ModuleSummary } from "@/components/ProgressionDashboard";

export const metadata: Metadata = {
  title: "Ma progression",
  description: "Votre niveau, votre série, vos cours terminés et vos scores de quiz sur SubscriptionForge.",
};

export default function ProgressionPage() {
  // Résumé léger (pas le contenu) passé au tableau de bord client.
  const summary: ModuleSummary[] = MODULES.map((m) => {
    const course = getCourse(m.slug);
    return {
      slug: m.slug,
      number: m.number,
      title: m.title,
      available: Boolean(course),
      lessonSlugs: course?.lessons.map((l) => l.slug) ?? [],
      firstLessonSlug: course?.lessons[0]?.slug,
      hasQuiz: Boolean(course?.hasQuiz),
    };
  });

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Votre tableau de bord</p>
          <h1>Ma progression</h1>
          <p>
            Chaque cours terminé, chaque mini-jeu et chaque quiz vous rapporte de
            l'XP. Gardez votre série, montez de niveau, forgez votre expertise.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="container">
          <ProgressionDashboard modules={summary} />
        </div>
      </section>
    </>
  );
}
