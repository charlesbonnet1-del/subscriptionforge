import type { CourseContent, Lesson } from "@/lib/content-types";
import { moduleOne } from "./module-1";
import { moduleTwo } from "./module-2";
import { moduleThree } from "./module-3";
import { moduleFour } from "./module-4";
import { moduleFive } from "./module-5";
import { moduleSix } from "./module-6";
import { moduleSeven } from "./module-7";
import { moduleSevenBis } from "./module-7bis";
import { moduleEight } from "./module-8";
import { moduleNine } from "./module-9";
import { moduleTen } from "./module-10";
import { moduleEleven } from "./module-11";
import { moduleTwelve } from "./module-12";

// Registre des contenus de cours. Un module y figure dès que son contenu est forgé.
export const COURSES: Record<string, CourseContent> = {
  [moduleOne.moduleSlug]: moduleOne,
  [moduleTwo.moduleSlug]: moduleTwo,
  [moduleThree.moduleSlug]: moduleThree,
  [moduleFour.moduleSlug]: moduleFour,
  [moduleFive.moduleSlug]: moduleFive,
  [moduleSix.moduleSlug]: moduleSix,
  [moduleSeven.moduleSlug]: moduleSeven,
  [moduleSevenBis.moduleSlug]: moduleSevenBis,
  [moduleEight.moduleSlug]: moduleEight,
  [moduleNine.moduleSlug]: moduleNine,
  [moduleTen.moduleSlug]: moduleTen,
  [moduleEleven.moduleSlug]: moduleEleven,
  [moduleTwelve.moduleSlug]: moduleTwelve,
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
