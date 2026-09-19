---
title: Template and batch
description:
  Building one reusable prompt template with real slots, then running it as
  a batch instead of a one-off
week: 8
date: 2027-04-12
teachers:
  - idris-fenn
photo: ../../assets/images/sessions/week-08.jpg
photoAlt:
  A person viewed from behind, working at dual monitors showing a code
  editor with a file tree and source code open
spec:
  - a single prompt template exists with at least three named slots
  - the same template is instantiated into five distinct filled prompts
  - a written scheduling plan states a cadence and at least two target
    platforms
related:
  - lectures/week-08
  - 07-map-the-pipeline
  - 09-pipeline-work-session
---

## Before the session

Bring the pipeline diagram from week 7 and pick one generation step from it —
the script step, the render step, whichever one repeats the most.

## In the session

The move this week is from prompt to template. A one-off prompt describes a
video; a template describes a family of them, with slots a scheduler fills in
without a human rewriting the prose each time. Take your chosen generation
step and write it as a template with at least three named slots — think
`{saint}`, `{weather}`, `{hymn_fragment}` rather than a paragraph you'd retype
by hand — then fill the slots five different ways and produce (or, if compute
is the bottleneck, describe in enough detail that a marker can see the
variation) five distinct outputs from the one template.

Then the batching-and-culling half: if you ran this template two hundred
times overnight, you would not review two hundred outputs by hand. Decide
what an automatic cull looks like — a similarity threshold against a
reference frame, a duration check, a keyword filter on the generated script —
and state, in one paragraph, what percentage of a batch you'd expect to
survive it, and why that number isn't 100%.

Finish with the scheduling plan: name your target platforms (TikTok's queue
is widely believed among creators to reward near-daily posting; YouTube
Shorts is thought to tolerate burstier upload patterns; a Discord server
wants irregular drops timed to events) and state a
cadence — posts per day, per platform — that a template-and-batch system like
yours could actually sustain without a human touching every post.

## Afterwards

Template, cull threshold and scheduling plan are the three pieces the Slop
Pipeline submission asks for in miniature. Week 9's studio is supervised time
to assemble all three into the full pipeline.
