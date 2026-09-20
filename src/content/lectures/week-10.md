---
title: Sustained coherence
description:
  Why keeping one visual language across linked pieces is harder than making
  any single piece look right, and what breaks first
week: 10
date: 2027-04-26
teachers:
  - idris-fenn
slides: /decks/week-10/
photo: ../../assets/images/weeks/week-10.jpg
photoAlt: An investigation board with photos, maps and string connecting them
related:
  - sessions/10-story-bible
  - week-11
---

## Case study: Nightshade & Nectar

Nightshade & Nectar, a supernatural-romance slop serial posted in
twice-weekly two-minute instalments, is a useful failure because it fails
slowly. Episode one establishes its lead — amber-lit, a locked reference
face, a recurring line of dialogue delivered in the same too-smooth cadence
every episode — and by episode nine the lead's face has drifted enough that
long-time viewers comment on it before the plot. Nobody changed the seed on
purpose; seed-locking degrades under small prompt edits, upstream model
updates, and the ordinary entropy of a pipeline run by different operators on
different days. Call this seed drift, and treat it as the sustained-coherence
version of the six-fingered hand: not a single bad frame, but a slow
divergence a single-clip critique would never catch, because a single-clip
critique only ever sees one clip.

## Where coherence actually lives

Coherence lives in the parts of a production that don't show up in any one
frame: a locked colour grade applied as a fixed post-process rather than
described fresh in every prompt, a reference-image set fed to every
generation rather than a text description re-interpreted each time, a story
bible that states the two or three rules everyone working on the piece has to
obey regardless of which tool or operator touches a given shot. Nightshade &
Nectar's actual visual-language document, as far as it's inferable from the
output, seems to be "amber, slow zoom, and the line 'I've been waiting'" —
three rules, thin enough that the ninth episode can drift a face and still
count as on-brand, because the bible never specified the face.

This is also where slop borrows most obviously from conventional serial
television, which solved the same problem with style guides, standing sets
and casting-continuity clauses decades before anyone automated it — the
difference is that a slop pipeline's failure mode is silent (the seed drifts
and nobody notices until a viewer says something) where a human production's
failure mode is loud (an actor is visibly unavailable, a set burns down).
Sustained coherence, in either case, is enforced by a document someone
actually checks against, not by everyone involved sharing good taste.

This week's set has you write that document for your own capstone, before
the shooting — such as it is — starts.
