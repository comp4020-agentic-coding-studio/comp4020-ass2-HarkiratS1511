# Assignment 2 harness

A course-site build for SlopU, not a single-page prototype: twelve dated
teaching weeks, assessments, at least one real deck, and a coherent curriculum
behind all of it. The deployed site is what gets marked, not this repo.

The
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or
build. `README.md` documents the fixed platform (content model, base path,
checks, generated API) --- don't restate platform mechanics here; record only
the rules this course's build has actually needed.

## How to work in here

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
- Run `pnpm check` before you push. Never commit a red state.
- Content collections have strict schemas: a bad frontmatter key or a dangling
  `related:` ref fails the whole build, not just the one page. Check
  immediately after adding or editing a content file, not after batching many.
- Open the page in a browser and look at it. The rendered page is the truth;
  your mental model of it isn't.
- When a check fails, read its output before you change anything.

## Course coherence is the actual brief

Twenty-odd pages that have to agree with each other is the hard part, not any
one page. An agent generates content-shaped chunks by default; making them
read as one course with one voice is your editorial job, every time content
lands:

- Read new content next to the pages around it, not in isolation. Does this
  week's content still sound like the same course as week 2's?
- Watch for "AI slop": generic phrasing, hedged claims, filler transitions.
  Reject it and ask for the specific, opinionated version.
- A page that could belong to any course (find-and-replace COMP4020) is a
  failure of this brief regardless of whether the build is green.

## Course design, locked

`AI Slop Cinematography` (`SLOP2758`). One idea: AI-generated video is a genre
with its own tells, economics and ethics, taught the way film school teaches
melodrama. Weekly "Studio" (hands-on production lab) plus "Lecture"
(theory/history/case-study) across 12 weeks. Three assessments, deliberately
weighted toward making over analysing:

- **Slop Teardown** (25%, wk 6) --- critical analysis of a real slop artefact.
  The one deliberate analysis piece, kept for contrast; don't dilute it into a
  making exercise.
- **Slop Pipeline** (25%, wk 9) --- diagram/build the automation logic
  (n8n-style workflow, prompt templates, a scheduling plan) that could pump out
  one slop archetype at scale, plus the economics case for running it.
- **Direct a Slop Feature** (50%, wk 12, capstone) --- a sustained 3--5 minute
  slop narrative (or a trailer plus linked promotional cuts) committed to one
  story, one visual language, one genre for its full runtime, plus a director's
  statement. The difficulty is sustained coherence across linked pieces, not
  runtime --- don't let this drift back into "make one clip."

### Voice

Deadpan academic seriousness applied to something absurd --- the *Calling
Bullshit* register, not marketing copy. Concretely:

- No "in today's digital landscape," no LinkedIn-core enthusiasm, no hedged
  filler transitions. Every page should sound like someone with an actual,
  arguable opinion about slop wrote it.
- Specific over generic: name real tells (six-fingered hands, morphing logos,
  the too-smooth AI voiceover cadence), not "various visual artifacts."
- Read new content next to the pages around it before accepting it. A page
  that could belong to any course (COMP4020 with slop swapped in) is a failure
  of the brief regardless of whether the build is green.

### Art direction: deliberate, not lazy

This environment has no image-generation tool, so the "AI-slop" visual look is
hand-authored SVG/CSS (displacement filters, chromatic aberration, morphing
gradients, deliberate "tells") rather than actual model output. This is a
curatorial choice --- slop-aesthetic-as-commentary, produced deliberately --- and
`PROCESS.md` must say so explicitly, or it reads as the "starter with nouns
swapped" failure mode the rubric warns about.

Real photography, sourced from Pexels/Unsplash only, sits *alongside* that
invented artefact work (specimens page, home page roadmap, week photos,
people portraits --- see `IMAGE_CREDITS.md`) --- never generated, never
standing in as evidence for something invented. This isn't a walk-back of the
no-generated-imagery stance: the real photo is always paired with, or
labelled next to, the invented thing it isn't, so the pairing demonstrates
the real-vs-fake argument instead of blurring it. Never source or generate an
image that could pass as one of the course's own invented artefacts.

## Orchestration workflow

Content and code for this build are drafted by dispatched subagents working
from this file's voice guide, never accepted on their own report:

- Course-wide coherence (the actual brief) is checked by reading all content
  together, by me, after subagents draft it --- not delegated, because voice
  drift across 12 weeks is exactly what a per-week subagent can't see.
- A subagent reporting "pnpm check green" is necessary, not sufficient (see
  Assignment 1 below) --- independent re-verification, including looking at
  real screenshots, happens before anything is committed.

## PROCESS.md carries 45% of the grade

Write it as you go, not as a wrap-up:

- Decide what a good course looks like early, then point at *where* that
  decision is enforced --- a `CLAUDE.md` rule here, or a check in `spec/` ---
  not just that you thought about it.
- Cite commits as you make them (`pnpm check:evidence` fails an uncited
  claim). Curate the prompt next to the citation when it clarifies a call.
- The retro (week 7) presents straight from this file --- there is no separate
  reflection for this assignment.

## Spec: checkable vs judged

Split the published spec lines before writing tests. Mechanically checkable
ones (course code keeps its three digits, assessment weights sum to 100%, at
least one lecture links a real deck, the site is live at its Pages URL) get a
test in `spec/`, asserting the contract, not the markup. Ones only a person can
judge (curriculum coherence, whether the voice is compelling) don't get a
test --- name them here so nothing is silently assumed to be "handled."

## What earlier builds taught the harness

Rules earned the hard way on past prototypes. Hold agents (and yourself) to
them.

### Assignment 1

- **The spec suite runs against static `dist/` HTML (JSDOM) --- it cannot see
  interaction, layout, or overflow.** A green `pnpm check` proved the hooks
  exist while the phone layout was still broken. Anything the visitor *sees at
  a viewport* must be verified by driving the built site in a real browser
  (headless Chromium against `pnpm preview`, served under the repo's real base
  path), not by the suite alone.
- **A subagent reporting "pnpm check green" is necessary, not sufficient.**
  Re-verify independently before committing: screenshot both marked viewports
  (390x844 and 1920x1080) and assert
  `document.documentElement.scrollWidth <= window.innerWidth` (no horizontal
  overflow). Trust the artefact you looked at, not the report.
- **The Astro base path bites only on the live URL.** Assets and internal links
  404 on `...github.io/<repo>/` if `base` is wrong while looking fine locally
  --- verify against `pnpm preview` (which serves under the base), not
  `pnpm dev` at root.
- **Commit one verified phase at a time.** Each phase committed only after its
  own verification passed, so the history is an honest, citable record of how
  the site came together.
