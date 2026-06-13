import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule } from "@/data/modules";
import { getCourse, COURSES } from "@/data/courses";
import ModuleGames from "@/components/games/ModuleGames";

export function generateStaticParams() {
  return Object.keys(COURSES)
    .filter((slug) => COURSES[slug].hasGames)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getModule(slug);
  return { title: m ? `Mini-jeux — Module ${m.number}` : "Mini-jeux" };
}

export default async function GamesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getModule(slug);
  const course = getCourse(slug);
  if (!m || !course || !course.hasGames) notFound();

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <Link href={`/modules/${slug}`} className="muted" style={{ fontSize: "0.85rem", textDecoration: "none" }}>
            ← Module {m.number} · {m.title}
          </Link>
          <p className="eyebrow" style={{ marginTop: 16 }}>
            Passer du savoir à la compétence
          </p>
          <h1>Mini-jeux pédagogiques</h1>
          <p>
            Ils ne sont pas décoratifs : c'est en manipulant, en classant et en
            décidant qu'on ancre le réflexe. Chaque jeu rapporte de l'XP.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="container container-reading" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <ModuleGames slug={slug} />

          <div className="text-center" style={{ marginTop: 12 }}>
            <Link href={`/modules/${slug}/quiz`} className="cta-fire-button">
              Prêt ? Passer le quiz noté /20 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
