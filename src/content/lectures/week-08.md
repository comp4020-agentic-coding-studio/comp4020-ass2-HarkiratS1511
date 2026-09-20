---
title: Scheduling and scale
description:
  What changes about prompts, review and distribution once you're producing
  fifty of something a week instead of one
week: 8
date: 2027-04-12
teachers:
  - idris-fenn
photo: ../../assets/images/weeks/week-08.jpg
photoAlt: Shelving units in a warehouse
related:
  - sessions/08-template-and-batch
  - week-09
---

A prompt written once, by hand, for one video is a script. A prompt written
to be filled in by a scheduler, over and over, is a template, and the
distinction is the entire economic argument this course keeps circling.
Halcyon's four-stage pipeline (week 7) runs on eleven templates, not eleven
thousand hand-written prompts — one per mood tag, each with three slots
(verse, tone-word, b-roll descriptor) filled by whatever the scraper found
that hour.

## Batching changes what "review" means

At one video, review means watching it. At two hundred videos generated
overnight on a rented GPU block, review means setting a threshold and
trusting it: a similarity score against a reference frame, a runtime check, a
profanity filter on the generated script. Halcyon keeps roughly one render in
twelve — not because eleven fail obviously, but because the threshold is
tuned to the cost of a false positive (an ad the client would reject) against
the cost of a false negative (wasted render minutes on GPU time already
paid for). Nobody watches the eleven that get discarded; the threshold is the
only judgement that touches them.

## Platforms impose their own scheduling logic on top of the batch

Creator folklore holds that TikTok's recommender rewards near-daily
consistency from an account more than it rewards any single video's quality —
neither platform publishes the weighting, and independent analyses mostly
find quality and watch-time swamping raw posting frequency, but the belief is
widespread enough to shape real behaviour: devotional-slop accounts post on a
fixed clock rather than "when something good is ready," and the schedule ends
up upstream of the content, not downstream of it. The same folklore holds
that YouTube Shorts tolerates burstier patterns; a paid Discord server for a
niche slop serial wants irregular drops timed to a server event, because that
audience is buying anticipation, not volume.

:::info[When a pipeline forgets which platform it's on]
A pipeline built for one platform's cadence and pointed at another without
adjustment is why you sometimes see the same Halcyon renders reposted to
YouTube a week late, captioned in a font that doesn't match the platform's
safe-area guide — the caption burn-in was templated for a 9:16 frame with
TikTok's UI overlay in mind, and nobody re-templated it for Shorts.
:::

Template, plus batching, plus a schedule is a production system with its own
cost structure, and cost structure is an economics argument, not a
filmmaking one. That's the case week 9 makes explicitly, using the numbers
this week's set generates.
