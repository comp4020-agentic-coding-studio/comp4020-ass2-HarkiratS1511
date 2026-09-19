---
title: Prompting as direction
description:
  Treating prompt-writing as a directing discipline — shot type, blocking and
  coverage as textual grammar, and where that grammar runs into the medium's
  actual limits
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
related:
  - sessions/03-prompting-as-direction
  - week-02
spec:
  - names at least two specific pieces of film-directing vocabulary (shot
    type, camera move, blocking, coverage) and explains what each one
    controls when written into a prompt
  - states one specific limit of prompting-as-direction that a human director
    does not face on set
---

Text-to-video generation systems increasingly document their own prompting
guidance in the vocabulary of cinematography, not of software: shot scale
(wide, medium, close-up), camera move (dolly, pan, tilt, tracking shot,
static), and framing (over-the-shoulder, low angle) are surfaced as
controllable parameters because the training footage was captioned by people
who already used that vocabulary to describe what a camera was doing. A
prompt that says "a woman walks into a kitchen" gives the model almost
nothing to work with. A prompt that says "medium wide, static camera, a woman
enters frame right and crosses to the counter" is doing what a shooting
script does: specifying not just what happens, but how it is seen happening.
That specification is directing, done in prose instead of on a set.

## What carries over from the set, and what doesn't

Three concepts do real work once you start writing prompts this way:

**Shot type and camera move** control scale and motion the way they always
have — a close-up reads as intimate or threatening regardless of who or what
generated it, because the grammar comes from a hundred years of cinema the
model was trained on captions of, not from anything specific to synthetic
video.

**Blocking** — where a body is in frame and how it moves through it — has to
be written explicitly, because the model has no set to physically place
someone on. "Enters from the left" is now a sentence doing the job a floor
mark used to do.

**Coverage** — shooting a scene from enough angles that an editor has
material to cut with — is the concept that breaks. A human crew shoots
coverage of *the same take*: the actor's jacket, the room's light, the prop
positions are physically continuous across the wide, the two-shot and the
close-up, because it's the same afternoon on the same set. A prompt sequence
generates each shot from a fresh prior with no memory of the others. You can
specify the jacket's colour in every single prompt and still get three
different jackets, because "coverage" in the traditional sense assumes a
continuity the medium doesn't structurally have yet.

## Case study: Bright Aperture's six-shot method

A small production outfit that appears, in one form or another, on a
specimen shelf most semesters: they generate every scene as exactly six
fixed prompts — establishing wide, two singles, two close-ups, one insert —
with every continuity detail (wardrobe, prop, lighting direction, time of
day) copy-pasted verbatim across all six rather than described once and
trusted to persist. Their footage still drifts — a ring appears on the wrong
hand in the insert shot in roughly one take in five, by their own account —
but far less than a crew that varies the wording shot to shot.

:::tip[Where the labour actually sits]
The method isn't a fix for the medium's lack of memory; it's a workaround
that trades prompt-writing effort for continuity, shot by repetitive shot —
not in performance or blocking, but in redundant, exact re-specification.
:::

## The actual claim

Prompting-as-direction is a real and useful frame, not a metaphor stretched
past its use — the vocabulary transfers, the judgment calls transfer, the
eye for composition transfers. What doesn't transfer is the assumption,
baked into a century of film-set practice, that continuity is free once
you've built the set and dressed the actor. In this medium, continuity is the
thing you pay for, in redundant words, every single shot.
