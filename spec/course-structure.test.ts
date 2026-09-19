import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: {
    code: string;
    level: number;
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);
const weeksOf = (nodes: ApiNode[]) =>
  nodes.map((node) => node.meta?.week).sort((a, b) => Number(a) - Number(b));

describe("course structure", () => {
  it("runs sessions across exactly weeks 1 through 12, once each", () => {
    expect(weeksOf(byType("sessions"))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("runs lectures across exactly weeks 1 through 12, once each", () => {
    expect(weeksOf(byType("lectures"))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("weights its assessments to sum to exactly 100", () => {
    const total = byType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("resolves at least one lecture's slides to a real, built deck page", () => {
    const withSlides = byType("lectures").filter((node) => typeof node.meta?.slides === "string");
    expect(withSlides.length, "no lecture declares a slides field").toBeGreaterThan(0);

    for (const lecture of withSlides) {
      const slides = String(lecture.meta?.slides);
      const deckPage = resolve("dist", slides.replace(/^\//, ""), "index.html");
      expect(existsSync(deckPage), `${lecture.id} points at ${slides}, which was never built`).toBe(
        true,
      );
    }
  });

  it("keeps the locked course code SLOP2758, matching the course's level digit", () => {
    expect(api.course.code).toBe(`SLOP${api.course.level}758`);
  });
});
