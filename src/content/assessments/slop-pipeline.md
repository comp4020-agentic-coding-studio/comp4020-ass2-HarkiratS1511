---
title: Slop Pipeline
description:
  Design the automation that could produce one slop archetype at scale, and
  make the economic case for why anyone would bother running it
week: 9
due: 2027-04-19T12:00:00+10:00
weight: 25
marking:
  mode: weighted
  criteria:
    - name: Workflow logic
      weight: 30
    - name: Prompt template quality
      weight: 25
    - name: Scheduling plan
      weight: 15
    - name: Economics memo
      weight: 30
spec:
  - names one specific slop archetype and holds to it across every artefact
    the pipeline is designed to produce
  - the workflow diagram shows every node from trigger to published output,
    including the steps where a human would still have to intervene
  - the prompt template library contains templates specific enough that a
    stranger running them would get output recognisably in the target
    archetype, not generic video
  - the scheduling plan states a concrete cadence and volume (units per day
    or week), not "regularly" or "as needed"
  - the economics memo gives real or realistically estimated numbers — cost
    per unit, time per unit, and an assumption about revenue or engagement —
    and states the break-even case plainly
  - a reader who has not seen the brief can tell, from the diagram alone,
    where the pipeline would actually break
  - submitted by the deadline, in the format named below
related:
  - slop-teardown
  - direct-a-slop-feature
---

## The brief

> Design the machine that would make one slop archetype at scale, and argue
> for why it would be worth turning on.

The Slop Teardown asked you to explain why something exists. This one asks
you to build the thing that would make more of it, cheaper, without a director
in the loop for every unit. Pick one archetype — the AI history explainer with
the affectless narrator, the product demo nobody filmed, the ambient "cozy"
channel that never repeats a scene and never says anything — and design the
pipeline that would produce it on a schedule, not the one clip that proves you
can.

This is a making assessment, but the thing you are making is the logic, not a
finished video. Treat it like an actual production system: what triggers a
new unit, what generates the script or shot list, what generates the footage
or voice, what checks it before it ships, and where a human still has to look
at the output before it goes out. A pipeline with no human checkpoint at all
is either a lie about how these systems really run, or an admission that
nobody is watching quality — say which, if that is the position you are
taking.

The economics half is not decoration. A pipeline that costs more to run than
it earns in attention or ad revenue is a hobby, not the thing this assessment
is asking for. Make the case with numbers, even rough ones: cost per render,
renders per day, expected views or conversions per unit, and the point at
which the pipeline pays for itself. A confident number you can defend beats a
vague one you can't.

## What you submit

Three linked pieces, submitted together:

- a workflow diagram (n8n-style, or any notation that shows nodes and the
  edges between them) covering trigger through to published output
- a prompt template library: the actual reusable templates the pipeline would
  run, not a description of what a template might contain
- a short written economics memo (400–600 words) covering per-unit cost, the
  scheduling cadence, and the break-even argument

The `marking:` block above weights the workflow logic and the economics memo
most heavily — a good diagram with no financial case, or a financial case with
no working diagram, is half the assessment.
