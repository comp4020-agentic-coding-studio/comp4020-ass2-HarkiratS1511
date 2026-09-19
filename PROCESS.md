# Process

## The bet the course makes

`SLOP2758: AI Slop Cinematography` treats AI-generated video as a genre with
its own tells, economics and ethics, taught the way film school teaches
melodrama — not as twelve unrelated "look how weird this AI clip is"
examples. That's the actual design decision everything else serves. The
obvious version of this brief is easier to draft and is exactly the
generic, content-shaped filler CLAUDE.md calls "AI slop" and tells me to
reject on sight: a new eye-catching example every week, no cumulative
vocabulary, a page that could belong to any course with the nouns swapped.
Committing to one throughline instead meant inventing three specimens that
had to recur under different lenses — a tell-inventory in week 2, a
direction-reading in week 3, an economics case in week 4, a genre reading in
week 5, all four run together against one artefact in week 6's Slop
Teardown. I checked this compounding held by hand rather than trusting it:
week 2's tells continue the week-1 deck's own numbering rather than
restarting it, and the four-lens synthesis in week 6's lecture names
exactly the four skills the weeks before it built, in order
([`98b6fab`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/98b6fab)).

## Why the assessments aren't even thirds

The three assessments are weighted 25/25/50, not 33/33/33, and keep one
assessment that is pure analysis rather than folding it into the making
work. The obvious move for a "cinematography" course is to weight
production highest and cut critical analysis to a token exercise; I kept
Slop Teardown as a full quarter of the grade because directing convincing
slop without first building the vocabulary to diagnose it just reproduces
convention unreflectively. The capstone gets half not because it runs
longest but because sustained coherence — one story, one visual language,
one genre held for a full runtime — is the actual hard skill in this genre:
slop's most reliable tell is a piece that can't sustain its own logic past
one clip, so that's the thing worth half the grade. That shape is locked in
`CLAUDE.md`, not just in my head, so a later pass at the assessments can't
quietly erode it
([`f817016`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/f817016)).

The schema enforces that one assessment's own marking criteria sum to 100,
but nothing enforced that the three assessment-level weights (25/25/50)
summed to 100 across the course — a silent drift to, say, 25/25/60 would
have passed every existing check. I closed that gap with a test rather than
trusting a one-time manual add-up
([`d319cad`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/d319cad)).

## Where I chose not to spend effort

The course-graph coherence work — does week 2 still sound like week 2 of
*this* course, not a generic COMP4020 clone — is judged, not checked; I did
that read myself after five parallel subagents drafted content, specifically
because voice drift across twelve weeks is what a per-week agent can't see
from inside its own slice. I also chose not to re-skin the shared theme: the
brief treats visual redesign as unweighted against curricular coherence, so
the only visual work was the hero/card art, and even that was a deliberate
call rather than a workaround — a course arguing AI slop is dishonest
shouldn't illustrate itself with generated imagery even where the tooling
allowed it, so the aesthetic is hand-authored SVG standing in for the genre's
own tells
([`0c77b05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/0c77b05)).

Before accepting any of it, I re-verified independently rather than trusting
a subagent's own "checks pass" report: real headless-Chromium screenshots at
both marking viewports, not just the JSDOM build, and commits staged only
once each verified phase held
([`e9f9e9b...bf132f5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/compare/e9f9e9b...bf132f5)).

## Refining content and visuals under direct request, without adding sourced or generated imagery

A later request asked for two things at once: fact-check and tighten the
writing, and make the site look less like a wall of text. The second push
toward "more images" made the earlier no-generated-imagery stance
([`0c77b05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/0c77b05))
worth re-litigating rather than just re-asserting — but the argument still
holds even under direct pressure to add more visuals: a course whose whole
thesis is that generated or scraped imagery is dishonest can't illustrate
itself with either without undercutting its own claim. So the visual work
stayed hand-authored SVG, extended rather than replaced: a reusable
`SlopDivider` and a small `TellIcon` set (six-fingered hand, morphing logo,
overcorrected smile, blink cadence) in the same displacement-filter register
as the existing home-page art, wired inline next to the exact prose that
already names each tell rather than standing in as independent content,
plus a new `/specimens/` page giving the recurring invented case studies
(Everline Gadget Reviews, Halcyon Devotional Renders, Nightshade & Nectar,
Radiant Smile Dental Co., Bright Aperture, Marlowe Vance) an illustrated
still each — no new facts, every sentence traces to a lecture already
written
([`658d21f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/658d21f),
[`1ea2196`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/1ea2196)).

The fact-check half surfaced a real bug, not just a wording problem: the
policies page's academic-integrity section had its logic inverted, describing
disclosed AI use as the violation rather than the concealment
([`c8bfd82`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/c8bfd82)).
The rest of the fact-check pass was about confidence calibration, not
invention: a handful of real-world-adjacent claims (the "slop" coinage
timeline, Demand Media's per-article rates, TikTok/YouTube algorithm
folklore, ad-rate figures) were stated with the same flat certainty as the
course's own deliberately-invented numbers, so I had subagents verify each
against real sources and either correct it or explicitly reframe it as
"widely believed" rather than fact — leaving the invented specimen numbers
alone, since those were never meant to read as verifiable in the first
place
([`ff18288`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ff18288),
[`e19e549`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/e19e549)).
