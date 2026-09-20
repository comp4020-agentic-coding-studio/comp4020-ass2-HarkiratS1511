---
title: Map the pipeline
description:
  Turning the single artefact you tore down in week 6 into a diagram of the
  system that could produce five hundred more like it
week: 7
date: 2027-04-05
teachers:
  - marisol-quaye
photo: ../../assets/images/sessions/week-07.jpg
photoAlt:
  A hand draws circled labels and connecting arrow lines with a marker on a
  glass whiteboard covered in diagram notes
spec:
  - a pipeline diagram names at least one input source, three generation
    steps and one rejection or review gate
  - the diagram is for the same artefact analysed in the Slop Teardown, not
    a new one
  - a short paragraph names one failure mode the rejection gate would let
    through
related:
  - lectures/week-07
  - 08-template-and-batch
  - assessments/slop-teardown
---

## Before the session

Bring the artefact you tore down for the Slop Teardown — the same clip, the
same channel, the same six-fingered hand or morphing logo you already have
opinions about. This week it stops being one video and becomes a symptom of a
system.

## In the session

Twenty minutes on why "an artefact" is the wrong unit of analysis: nobody who
ships forty devotional shorts a day is directing forty devotional shorts, they
are running a pipeline, and the pipeline is the thing worth understanding.
Then the exercise: given your one artefact, reverse-engineer the machine that
plausibly made it. Diagram it — boxes and arrows, on paper, in a whiteboard
tool, in Mermaid, whichever survives being photographed — with at minimum an
input source (a scraped verse, a trending sound, a Reddit thread), three
generation steps (script, voice, render, whatever your artefact implies), and
one place a human or a filter looks at the output before it ships. Work in
pairs; the person who didn't write the original teardown asks the annoying
"how would that actually run every day" questions.

Close with the failure-mode question: where does your rejection gate look, and
where does it not look? A moderator scanning for extra fingers will wave
through a hallucinated scripture citation every time, because nobody told them
to check for that.

## Afterwards

Keep the diagram. Week 8 turns one of its generation steps into an actual
reusable prompt template, and week 9's set is supervised time to build the
rest of it for the Slop Pipeline submission.
