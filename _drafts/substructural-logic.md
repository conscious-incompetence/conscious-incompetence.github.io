---
layout: post
author: "Ben Hardekopf"
title:  "Substructural Logic"
date:   2015-06-28
---

{% include macros.html %}
{% include variables.md %}

* TOC
{:toc}

## Substructural Logic

When discussing first-order logic, we implicitly made use of the
following _structural rules_, without mentioning them directly:

- __Exchange__

  $$
  \begin{gather}
  \Gamma, \Delta \vdash A
  \\ \hline
  \Delta, \Gamma \vdash A
  \end{gather}
  $$

  Recall that a judgement's assumptions are a sequence of
  propositions. This rule allows us to arbitrarily re-order the
  assumptions. In other words, the order of assumptions does not
  matter.<br/><br/>

- __Weakening__

  $$
  \begin{gather}
  \Gamma \vdash B
  \\ \hline
  \Gamma, A \vdash B
  \end{gather}
  $$

  This rule states that we are allowed to have unnecessary
  assumptions. If we can prove a judgement without an assumption A,
  adding A to the sequence of assumptions will not change the truth of
  the judgement.<br/><br/>

- __Contraction__

  $$
  \begin{gather}
  \Gamma, A, A \vdash B
  \\ \hline
  \Gamma, A \vdash B
  \end{gather}
  $$

  This rule states that redundant assumptions are not necessary. If we
  can prove a judgement using two copies of assumption A, then we can
  also prove the judgement using only one copy of A.<br/><br/>

These rules allow us to treat a judgement's assumptions as an
unordered set rather than a strict sequence. Removing different
subsets of these structural rules result in various _substructural
logics_. These logics behave differently depending on which structural
rules we remove. Here are some examples:

- __Affine logic__

  Remove the _contraction_ rule. Recall that when we construct a
  derivation tree we are reading the inference rules bottom-up: first
  conclusion, then premises. From that perspective, the contraction
  rule allows us to arbitrarily duplicate assumptions. If we remove
  that rule we get affine logic, which only allows us to use any given
  assumption at most once.

- __Relevance logic__

  Remove the _weakening_ rule. Again reading the rule bottom-up, the
  weakening rule allows us to arbitrarily discard assumptions. If we
  remove that rule we get relevance logic, which forces us to use each
  assumption at least once.

- __Linear logic__

  Remove both the _contraction_ and _weakening_ rules. This
  combination of affine and relevance logic is called linear logic; it
  enforces that every assumption must be used _exactly_ once.

- __Ordered logic__

  Remove all three rules. The difference from linear logic is that we
  are no longer allowed to arbitrarily re-order assumptions; this is
  the main characteristic of ordered logic. Thus, we can only use
  assumptions based on the order that they were added (e.g., to
  simulate stack-like behavior).

Other substructural logics are possible, but the ones listed above
have been found to be the most useful and/or interesting. Let's focus
on a particular substructural logic and dig down a bit deeper to
understand why substructural logic is worth investigating.

## Example: Linear Logic

Linear logic is first-order logic with the contraction and weakening
structural rules removed. Therefore, it is _weaker_ than first-order
logic&mdash;that is, we can prove fewer things with linear logic than
we can with first-order logic. Why, then, is linear logic interesting
and useful? As it turns out, linear logic is interesting and useful
precisely _because_ it is weaker than first-order logic.

If first-order logic is reasoning about _truth_, then linear logic is
reasoning about _resources_. Truth is eternal, but resources are
finite and consumable. Once we use a resource, we can't ever use it
again. In linear logic, assumptions correspond to consumable
resources. They cannot be arbitrarily duplicated, nor can they be
discarded without being used.

> __Example 1.__ Suppose that we want to reason about how we spend our
> money. If we assume that we have 10 dollars, then we can't arbitrary
> duplicate those dollars and say that we have 20 dollars. Nor would
> we want to suddenly forget about some of our money and all of a
> sudden only have \$5.

> __Example 2.__ Let $A$ be the proposition "I have a piece of cake"
> and $B$ be the proposition "I am full". In regular first-order
> logic, we can make the judgement $A, A \implies B \vdash A \land
> B$...that is, I can have my cake and eat it too. In linear logic
> this is not possible, which is exactly what we want.

Of course, we often want to reason about truth _and_
resources. Fortunately, we can embed regular first-order logic inside
linear logic and the result is more expressive than either alone. We
will go into more details about that on the page dedicated to
[linear logic](???)

### Some Uses For Linear Logic

Linear logic has been used in a variety of contexts. Here is a short
listing of a few of them:

- Resource management for programming languages (e.g., automatic
  memory management without garbage collectors&mdash;see, e.g.,
  Mozilla's Rust language).

- Enforcing correct use of protocols (e.g., network communication
  handshake protocols&mdash;see, e.g., session types).

- Linguistics.

- Automatic narrative generation.

- Procedural level generation for games.

## Exercises

> __TBD__
