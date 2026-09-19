---
title: The shot list exercise
description:
  Third studio — translating a one-paragraph scene into a structured prompt
  sequence, then checking what the model actually did with your blocking
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
photo: ../../assets/images/weeks/week-03.jpg
photoAlt: A director reviewing footage on a monitor
spec:
  - you produce a shot list of at least three prompts covering a single scene,
    each specifying a distinct shot type or camera move
  - you identify at least one specific place where the generated output
    diverged from the blocking or continuity you directed
related:
  - lectures/week-03
  - 02-uncanny-tells
---

## Before the session

Bring a one-paragraph scene description — two people, one location, one small
action (a handoff, an argument, a decision). Write it like a scene, not a
prompt: what happens, in what order, who moves where.

## In the session

**Round one — break it into coverage (25 min).** A director doesn't hand a
crew one paragraph and hope; they break it into shots and specify how each
one is framed. Do the same to your scene as a numbered prompt list: a wide
establishing shot, at least one closer coverage shot on each character, and
one shot that carries the scene's turn (the handoff, the reaction). For each
prompt, name the shot type and camera move explicitly — "static wide,"
"slow dolly in," "handheld tracking behind" — the same vocabulary a shooting
script would use, because that's the vocabulary these models were trained
against captioned footage that used it too.

**Round two — generate and compare (25 min).** Run your prompts through
whatever generation tool the studio has access to this week. For each output,
check it against your blocking: did the character end up on the side of frame
you specified? Did the second shot's lighting and wardrobe match the first
one's, or did the model quietly restart the scene from a slightly different
prior? Log every divergence with a timestamp, the same way week 2's tell-logs
worked — "shot 3, 0:04, character's jacket changes colour from shot 1" is an
entry; "it doesn't really match" is not.

**Round three — diagnose the gap (10 min).** For your worst divergence,
decide whether it's a prompting failure (you didn't specify something the
model needed) or a continuity failure the medium can't currently fix
(no memory between separate generations of what a specific character or
object looked like a shot ago). Both are useful findings; only one of them a
better prompt can solve.

## Afterwards

Keep the shot list and the divergence log — week 7's pipeline-mapping
exercise asks you to reverse-engineer someone else's generation process, and
today is the version of that exercise where you already know the answer
because you wrote the prompts yourself.
