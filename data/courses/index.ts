import type { CourseContent, Lesson } from "@/lib/content-types";
import { moduleOne } from "./module-1";

// Registre des contenus de cours. Un module y figure dès que son contenu est forgé.
export const COURSES: Record<string, CourseContent> = {
  [moduleOne.moduleSlug]: moduleOne,
};

export function getCourse(slug: string): CourseContent | undefined {
  return COURSES[slug];
}

export function getLesson(slug: string, lessonSlug: string): Lesson | undefined {
  return getCourse(slug)?.lessons.find((l) => l.slug === lessonSlug);
}

export function hasCourse(slug: string): boolean {
  return Boolean(COURSES[slug]);
}
