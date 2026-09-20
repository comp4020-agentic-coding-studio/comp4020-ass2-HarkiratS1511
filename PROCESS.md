# Process

## The bet

`SLOP2758: AI Slop Cinematography` treats AI-generated video as a genre with
its own tells, economics and ethics, taught like film school teaches
melodrama — not twelve unrelated "look how weird this AI clip is" examples.
That's the decision everything else serves; the easier brief is generic
filler, which CLAUDE.md tells me to reject on sight. I invented three
specimens recurring under different lenses: a tell-inventory (week 2), a
direction-reading (week 3), an economics case (week 4), a genre reading
(week 5), synthesised in week 6's Slop Teardown. I checked the compounding
held rather than trusting it — week 2's tells continue week 1's own
numbering instead of restarting, and week 6's synthesis names exactly the
four skills built before it, in order ([`98b6fab`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/98b6fab)).

## Why 25/25/50, not thirds

The obvious move for a "cinematography" course is to weight production
highest and cut analysis to a token exercise. I kept Slop Teardown at a full
quarter because directing convincing slop without first building the
vocabulary to diagnose it just reproduces convention unreflectively. The
capstone gets half because sustained coherence — one story, one visual
language held for a full runtime — is the actual hard skill here; slop's
most reliable tell is a piece that can't sustain its own logic past one
clip. That shape is locked in `CLAUDE.md`, not just my head, so a later pass
can't quietly erode it ([`f817016`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/f817016)). Nothing enforced the three weights
summed to 100 across the course, only that one assessment's own criteria
did — a silent drift to 25/25/60 would have passed every check, so I closed
the gap with a test instead ([`d319cad`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/d319cad)).

## What I chose not to spend effort on

Course-graph coherence — does week 2 still sound like this course, not a
generic clone — is judged, not checked; I did that read myself after five
subagents drafted content in parallel, since voice drift is what a per-week
agent can't see from its own slice. I also didn't re-skin the shared theme:
the brief treats visual redesign as unweighted against curricular
coherence, so the only early visual work was hand-authored
hero/card SVG standing in for the genre's own tells, not generated imagery a
course arguing AI slop is dishonest shouldn't use on itself ([`0c77b05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/0c77b05)). I
re-verified independently before accepting it — real headless-Chromium
screenshots at both marking viewports, commits staged only once each phase
held ([`e9f9e9b`...`bf132f5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/compare/e9f9e9b...bf132f5)).

## The imagery reversal, and its later splits

A later request pushed for more images. I extended, not abandoned, the
no-generated-imagery stance: a reusable `SlopDivider`/`TellIcon` set and a
`/specimens/` page, still hand-authored SVG ([`658d21f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/658d21f), [`1ea2196`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/1ea2196)) — plus a
fact-check pass fixing an inverted academic-integrity clause ([`c8bfd82`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/c8bfd82)) and
recalibrating real-world claims against sources ([`ff18288`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ff18288), [`e19e549`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/e19e549)).

A second, more explicit request asked for real photography, not just SVG. I
reversed the stance: Pexels/Unsplash only, never generated, always paired
with or captioned next to the invented artefact it isn't — demonstrating the
real-vs-fake argument instead of blurring it. This covered specimens
([`d41fb13`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/d41fb13)), every lecture and session ([`ba1851d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ba1851d)), the home page roadmap
([`693d4b4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/693d4b4)), and staff portraits ([`ed53ee1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ed53ee1)). A follow-up split it further:
lectures and sessions had shared one photo per week, reading as duplicates,
so sessions got their own distinct directory ([`67f533e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/67f533e)).

## Orchestration hardening

I hardened the orchestration rule partway through the build: no
time-pressure shortcuts, every change through a dispatched subagent, never
written by me directly ([`0c0fb46`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/0c0fb46)). This doesn't retroactively apply to
earlier commits, which predate the rule and were written directly; named
here rather than retconned, since an honest process record is the point of
this file.
