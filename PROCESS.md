# Process

## The bet

`SLOP2758: AI Slop Cinematography` treats AI-generated video as a genre with
its own tells, economics and ethics, taught like film school teaches
melodrama, not twelve unrelated "look how weird this AI clip is" examples.
That's the decision everything else serves; the easier brief is generic
filler, which CLAUDE.md says to reject. I invented three specimens
recurring under different lenses: a tell-inventory (week 2), a
direction-reading (week 3), an economics case (week 4), a genre reading
(week 5), synthesised in week 6's Slop Teardown. I checked the compounding
held — week 2's tells continue week 1's numbering, not restarting,
and week 6's synthesis names the four skills built before it ([`98b6fab`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/98b6fab)).

## Why 25/25/50, not thirds

The obvious move for a "cinematography" course weights production highest,
cutting analysis to a token exercise. I kept Slop Teardown at a full
quarter because directing slop without building the vocabulary to diagnose
it reproduces convention unreflectively. The capstone gets
half because sustained coherence — one story, one visual language held for
a full runtime — is the hard skill; slop's reliable tell is a
piece that can't sustain its own logic past one clip. That shape is locked
in `CLAUDE.md`, not just my head, so a later pass can't erode it
([`f817016`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/f817016)). Nothing enforced the weights summing to 100 beyond one
assessment's criteria — a silent drift to 25/25/60 would have
passed every check, so I closed the gap with a test ([`d319cad`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/d319cad)).

## What I chose not to spend effort on

Course-graph coherence — does week 2 sound like this course, not a
generic clone — is judged, not checked; I read it myself after five
subagents drafted content, since voice drift is invisible to a per-week
agent. I didn't re-skin the shared theme, since the brief
weighs visual redesign below curricular coherence: the only early visual
work was hand-authored hero/card SVG for the genre's tells, not
generated imagery a course arguing slop is dishonest shouldn't use on itself
([`0c77b05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/0c77b05)). I
re-verified independently — headless-Chromium
screenshots at both marking viewports, commits staged once each phase
held ([`e9f9e9b`...`bf132f5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/compare/e9f9e9b...bf132f5)).

## The imagery reversal, and its later splits

A later request asked for more images. I extended the no-generated-imagery
stance rather than abandoning it: a `SlopDivider`/`TellIcon` set and a
`/specimens/` page, still hand-authored SVG ([`658d21f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/658d21f), [`1ea2196`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/1ea2196)) — plus a
fact-check fixing an inverted academic-integrity clause ([`c8bfd82`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/c8bfd82)) and
recalibrating claims against sources ([`ff18288`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ff18288), [`e19e549`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/e19e549)).

A second request asked for real photography, not SVG. I reversed the
stance: Pexels/Unsplash only, never generated, paired with the invented
artefact it isn't — demonstrating the real-vs-fake argument, not
blurring it. This covered specimens ([`d41fb13`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/d41fb13)), every lecture
and session ([`ba1851d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ba1851d)), the home page roadmap ([`693d4b4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/693d4b4)), and staff
portraits ([`ed53ee1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/ed53ee1)). A follow-up gave lectures and sessions separate photo
directories, since sharing one per week read as duplicates ([`67f533e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/67f533e)).

## Set and Screening, not Studio and Lecture

"Studio" read as generic filler for a filmmaking course. I renamed the
weekly types to "Set" (production) and "Screening" (theory/case-study) —
production-and-exhibition terms fitting the film-school framing.
Config and nav changed first, adding a `lectureLabels` object mirroring
`sessionLabels` ([`71a8f32`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/71a8f32)); then a prose pass over every
lecture, session, bio and specimens page, leaving generic uses
of "studio"/"lecture" alone where swapping would change meaning
([`5dd777a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/5dd777a)).

## Orchestration hardening

I hardened the orchestration rule partway through the build: no
time-pressure shortcuts, every change through a dispatched subagent, never
written by me directly ([`0c0fb46`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-HarkiratS1511/commit/0c0fb46)). This doesn't apply to earlier
commits, which predate the rule; named here, not retconned, since an
honest process record is this file's point.
