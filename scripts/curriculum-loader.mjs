/**
 * Shared loader used by both the video pipeline and the site build.
 * Reads the three course files and flattens them into one topic list,
 * with each topic carrying a back-reference to its course and unit.
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const COURSE_FILES = ["pre-algebra.mjs", "algebra-1.mjs", "algebra-2.mjs"];

export async function loadCurriculum(root) {
  const courses = [];
  for (const file of COURSE_FILES) {
    const full = path.join(root, "data", file);
    if (!fs.existsSync(full)) continue;
    const mod = await import(pathToFileURL(full).href);
    if (mod.course) courses.push(mod.course);
  }

  const topics = [];
  const seen = new Set();
  for (const course of courses) {
    for (const unit of course.units) {
      unit.topics.forEach((topic, index) => {
        if (seen.has(topic.slug)) throw new Error(`Duplicate topic slug: ${topic.slug}`);
        seen.add(topic.slug);
        topics.push({
          ...topic,
          courseId: course.id,
          courseTitle: course.title,
          courseShort: course.short,
          unitId: unit.id,
          unitTitle: unit.title,
          indexInUnit: index,
        });
      });
    }
  }

  return { courses, topics };
}
