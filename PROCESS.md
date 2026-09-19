# Process overview

## What I built

`SLOP2758: AI Slop Cinematography` — a course that treats AI-generated video
as a genre with its own tells, economics and ethics, and assesses it the way
a production course should: one analysis piece, then two making pieces that
get progressively harder to sustain across a full runtime.

## How I got here

I locked the course design myself first — code, title, the one-idea premise,
and the three-assessment shape weighted toward making over analysing
([`f817016`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/f817016))
— then deliberately did not write the content myself. I planned the full
12-week topic arc and the invented case studies that would need to recur
across it, then dispatched five Sonnet subagents in parallel, each with a
self-contained brief: Studios+Lectures weeks 1–6, Studios+Lectures weeks
7–12, the three assessments plus policies, People plus the week-1 deck, and
the home page plus visual system. Splitting by deliverable rather than by
week meant the two content agents had to coordinate a running set of
invented specimens (Everline Gadget Reviews, Halcyon Devotional Renders,
Marlowe Vance) without seeing each other's output until I merged it.

Verifying that merge was the actual work. Rather than trust each agent's own
`pnpm check` report, I read every drafted file myself against the CLAUDE.md
voice guide, checking specifically for the two failure modes a coordinated
draft is prone to: naming drift (did week 2's new tells continue the week-1
deck's numbering, or restart it?) and dangling cross-links where one agent's
`related:` pointed at a slug another agent hadn't created yet. Both checked
out — week 2 picked up the deck's tell numbering at #6 rather than
restarting it, and the assessment↔session links for weeks 6/9/12 resolved
cleanly once the full set landed
([`98b6fab`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/98b6fab)).

I then wrote the mechanically-checkable half of the spec as tests rather
than judging it by eye — week coverage, assessment weight totals, and the
locked course code
([`d319cad`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/d319cad)).

The build tool has no image-generation access, so the slop aesthetic (a
six-fingered hand, chromatic-aberration ghosting, a two-ink risograph
palette) had to be depicted rather than generated: hand-authored SVG for the
hero and card art, kept as a live unrasterized SVG on the hero because
`OpenGraph.astro` forces a JPEG raster on the card regardless of source
([`0c77b05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/0c77b05)).
That commit also carries the one accessibility decision worth naming: the
morphing-gradient divider's hue-drift animation is gated behind
`prefers-reduced-motion`.

`pnpm check`'s axe pass and JSDOM build can't see real layout or motion, so
before committing I ran a headless-Chromium pass by hand at both marking
viewports (1920×1080 and 390×844) across seven representative pages,
asserting no horizontal overflow and screenshotting the hero, a deck slide,
and an assessment page to confirm the effects actually render rather than
just satisfying a schema. Only after that passed did I stage the verified
tree, split into commits ordered so each one keeps the course graph free of
dangling references — assessments landing before the sessions/lectures that
cite them, the superseded starter briefs deleted only once nothing pointed
at them any more
([`e9f9e9b...bf132f5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/compare/e9f9e9b...bf132f5)).

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
