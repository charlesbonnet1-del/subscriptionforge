import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule } from "@/data/modules";
import { COURSES, getCourse, getLesson } from "@/data/courses";
import { Fiche } from "@/components/fiche/Fiche";
import LessonActions from "@/components/LessonActions";

export function generateStaticParams() {
  const params: { slug: string; lesson: string }[] = [];
  for (const slug of Object.keys(COURSES)) {
    for (const l of COURSES[slug].lessons) {
      params.push({ slug, lesson: l.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}): Promise<Metadata> {
  const { slug, lesson } = await params;
  const l = getLesson(slug, lesson);
  const m = getModule(slug);
  if (!l || !m) return { title: "Cours introuvable" };
  return { title: `${l.ref} ${l.title} — Module ${m.number}`, description: l.subtitle };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}) {
  const { slug, lesson } = await params;
  const m = getModule(slug);
  const course = getCourse(slug);
  const l = getLesson(slug, lesson);
  if (!m || !course || !l) notFound();

  const idx = course.lessons.findIndex((x) => x.slug === l.slug);
  const prev = idx > 0 ? course.lessons[idx - 1] : null;
  const next = idx < course.lessons.length - 1 ? course.lessons[idx + 1] : null;
  const lessonId = `${slug}:${l.slug}`;

  const nextHref = next
    ? `/modules/${slug}/${next.slug}`
    : course.hasGames
    ? `/modules/${slug}/jeux`
    : `/modules/${slug}/quiz`;
  const nextLabel = next ? `Cours suivant : ${next.title}` : course.hasGames ? "Mini-jeux" : "Quiz noté";

  return (
    <article>
      <section className="lesson-hero">
        <div className="container container-reading">
          <Link href={`/modules/${slug}`} className="muted" style={{ fontSize: "0.85rem", textDecoration: "none" }}>
            ← Module {m.number} · {m.title}
          </Link>
          <div className="lesson-progress-dots">
            {course.lessons.map((x, i) => (
              <span key={x.slug} className={`dot ${i === idx ? "active" : ""} ${i < idx ? "done" : ""}`} />
            ))}
          </div>
          <span className="num-badge">Cours {l.ref}</span>
          <h1 className="lesson-title">{l.title}</h1>
          <p className="lesson-subtitle">{l.subtitle}</p>
          <span className="badge">{l.minutes} min de lecture</span>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container container-reading">
          <Fiche blocks={l.blocks} />

          <div className="takeaways">
            <p className="eyebrow">À retenir</p>
            <ul>
              {l.takeaways.map((t, i) => (
                <li key={i}>
                  <span className="tick">✦</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <LessonActions lessonId={lessonId} nextHref={nextHref} nextLabel={nextLabel} />

          <div className="lesson-nav">
            {prev ? (
              <Link href={`/modules/${slug}/${prev.slug}`} className="lesson-nav-link">
                ← {prev.ref} {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/modules/${slug}/${next.slug}`} className="lesson-nav-link right">
                {next.ref} {next.title} →
              </Link>
            ) : (
              <Link href={`/modules/${slug}/${course.hasGames ? "jeux" : "quiz"}`} className="lesson-nav-link right">
                {course.hasGames ? "Mini-jeux" : "Quiz"} →
              </Link>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
