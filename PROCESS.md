# Process

## The bet

`SLOP2758: AI Slop Cinematography` treats AI-generated video as a genre
with its own tells, taught like film school teaches melodrama. The
easier brief is generic filler, which
CLAUDE.md rejects. Three specimens recur: a tell-inventory (week 2), a
direction-reading (week 3), an economics case (week 4), a genre reading
(week 5), synthesised in week 6's Slop Teardown. Week 2 continues week
1's numbering, and week 6 names the four skills built before it
([`98b6fab`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/98b6fab)).

## Why 25/25/50, not thirds

The obvious move for this course weights production highest, cutting
analysis to a token exercise. I kept Slop Teardown at a
full quarter: directing slop without the vocabulary to diagnose it
reproduces convention unreflectively. The capstone gets half because
sustained coherence across a full runtime is the hard skill; slop's tell
is losing that logic past one clip. That shape is locked in `CLAUDE.md`,
not just my head ([`f817016`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/f817016)). Nothing enforced the weights summing
to 100 — a drift to 25/25/60 would pass every check, so I added a test
([`d319cad`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/d319cad)).

## What I chose not to spend effort on

Course-graph coherence — whether week 2 sounds like this course — is
judged, not checked; I read it myself after five
subagents drafted content, since voice drift is invisible per week. I
didn't re-skin the shared theme: the only early visual work was
hand-authored hero/card SVG, not generated imagery a course arguing slop
is dishonest shouldn't use on itself ([`0c77b05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/0c77b05)). I re-verified
independently with headless-Chromium screenshots at both marking
viewports ([`e9f9e9b`...`bf132f5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/compare/e9f9e9b...bf132f5)).

## The imagery reversal, and its later splits

A later request asked for more images. I extended the no-generated-imagery
stance: a `SlopDivider`/`TellIcon` set and a `/specimens/` page ([`658d21f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/658d21f),
[`1ea2196`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/1ea2196)), plus a fact-check on an inverted integrity clause ([`c8bfd82`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/c8bfd82))
and recalibrated claims ([`ff18288`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ff18288), [`e19e549`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/e19e549)).

A second request asked for real photography. I reversed the stance:
Pexels/Unsplash only, paired with the invented artefact. This
covered specimens ([`d41fb13`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/d41fb13)), every lecture and session ([`ba1851d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ba1851d)), the home
roadmap ([`693d4b4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/693d4b4)), and staff portraits ([`ed53ee1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ed53ee1)); a follow-up split lecture and
session photos into separate directories ([`67f533e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/67f533e)).

## Set and Screening, not Studio and Lecture

"Studio" read as generic filler for a filmmaking course. I renamed the
weekly types to "Set" (production) and "Screening" (theory/case-study).
Config and nav changed first, adding a `lectureLabels` object mirroring
`sessionLabels` ([`71a8f32`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/71a8f32)); then a prose pass over every lecture, session,
bio and specimens page, leaving generic uses unchanged ([`5dd777a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/5dd777a)).

## A timetable, and a bug a real check caught

A later request asked for more visual appeal, a timetable planner,
buttons, better interaction. I added a `/schedule/` page: a full-semester
table joining Screenings, Sets and due dates by week, filtered with
CSS-only radio buttons, zero client-side `<script>`, plus
`.at-button`-styled CTA buttons on the home page, an unused theme class.
The filters reuse the four act names already in
`CourseRoadmap.astro` (Tells & taxonomy, Economics & genre, Systems &
production, Coherence & capstone), not a second taxonomy over the same
twelve weeks ([`e5f82e2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/e5f82e2)).

The same independent screenshot check caught a real bug: the table
overflowed at 390px, since it's a hand-authored `<table>`, not rendered
from Markdown, so it bypassed the theme's rehype plugin that auto-wraps
Markdown tables in a scroll container. Fixed by wrapping it in that same
`at-table-wrap` class, so it scrolls internally instead of blowing the
page out ([`09af735`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/09af735)).

## Orchestration hardening

I hardened the orchestration rule partway through the build: no
time-pressure shortcuts, every change dispatched through a subagent,
never written directly ([`0c0fb46`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/0c0fb46)). This doesn't apply to earlier
commits, predating the rule; named here, not retconned, since an honest
process record is this file's point.
