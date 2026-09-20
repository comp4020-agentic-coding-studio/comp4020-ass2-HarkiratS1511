---
title: The economics of volume
description:
  Why slop gets made — ad-tech incentives, content-farm economics, and the
  specific mechanism by which platforms reward volume over craft
week: 4
date: 2027-03-15
teachers:
  - idris-fenn
photo: ../../assets/images/weeks/week-04.jpg
photoAlt: An IT technician working among server racks in a data centre
related:
  - sessions/04-economics-of-volume
  - week-03
spec:
  - names a specific pre-AI precedent for volume-over-craft content economics
  - explains the specific mechanism by which a platform's ranking or ad
    system rewards volume, rather than restating "the algorithm favours
    engagement" without a mechanism
---

Nobody sets out to make a worse video. Slop is what a system produces when
the return on a video is measured in views-per-dollar-of-production-time
rather than in quality-per-video, and enough of the internet's attention is
sold by the thousand views that this measurement wins whenever it's
available. This screening is about the specific machinery that makes it
available, not a general complaint that "platforms reward engagement."

## The pre-AI precedent

Content farms are not a generative-AI invention. The mid-2000s to early-2010s
saw a whole industry — Demand Media and its imitators are the textbook
case — built on paying freelance writers roughly fifteen to thirty dollars
per few-hundred-word article, keyed to search-engine-optimised titles ("how
to remove a stripped screw"), at industrial scale, because a single
ad-supported pageview paid back that per-article cost many times over if
enough of them ranked. Nobody involved thought "how to remove a stripped
screw" was a piece of writing worth being proud of. The business case never
required it to be — it required only that it be cheap enough per unit and
good enough per unit to clear the search engine's bar, at a volume large
enough that the aggregate ad revenue dwarfed the aggregate cost.

:::tip[Same model, orders of magnitude cheaper]
Generative AI didn't invent this. It collapsed the per-unit cost from
fifteen to thirty dollars and twenty minutes of a freelancer's time to a
fraction of a cent and a few seconds of compute — a difference in degree so
large it reads as a difference in kind.
:::

## The mechanism, specifically

A platform's ranking system generally optimises for a proxy of engagement —
watch time, completion rate, shares — because that proxy correlates,
imperfectly but usefully to the platform, with ad inventory sold. It does not
know or care whether a video's provenance is a director's afternoon or a
render farm's idle GPU cycles. This is the mechanism, precisely: the ranking
system has no craft term in its objective function, only an attention term,
so any production method that produces more attention-worthy attempts per
dollar will out-compete a slower, more careful one at the margin, video by
video, without anyone at the platform making a decision that favours slop —
the favouring happens automatically, as a consequence of what's cheap enough
to attempt many times.

## Case study: Everline Gadget Reviews

A specimen-shelf regular: a channel posting AI-generated "unboxing" and
demo videos for gadgets that, as far as anyone has checked, were never
physically unboxed by anyone. Each video costs, by a rough specimen-shelf
estimate, somewhere under two dollars in generation compute and script-model
calls to produce a finished ninety-second video, against a typical
short-form ad rate that needs on the order of thirty to fifty thousand views
to recoup that cost before the channel operator has been paid anything at
all for their time. At the channel's reported posting rate — six videos a
day — that's a daily cost low enough that a single video clearing half a
million views once a month covers a month's output outright.

:::info[The actual economic engine]
The channel doesn't need every video to work. It needs the cost of a video
that doesn't work to be low enough that trying again costs nothing worth
stopping for — cheap failure, occasional expensive-feeling success, not any
specific gadget, script, or voice model.
:::

## What this explains about the genre

Slop's characteristic volume — the same channel posting dozens of
near-identical videos a day — isn't an aesthetic choice or a lack of
discipline.
It's the rational strategy once the cost of an attempt falls far enough
below the expected value of a hit, the same strategy a content farm ran on
freelance articles a decade earlier, at a cost structure that makes today's
version harder to out-compete with craft alone.
