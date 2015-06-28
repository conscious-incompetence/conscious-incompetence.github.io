---
layout: post
author: "Ben Hardekopf"
title:  "Natural Deduction"
date:   2015-06-27
---

{% include macros.html %}
{% include variables.md %}

* TOC
{:toc}

## Natural Deduction

There are several ways to define logic systems. In Computer Science
most people are introduced to first-order logic via the Hilbert-style
axiomatic formulation; in philosophy most people learn it via the
Natural Deduction formulation. There are also other formulations
possible, such as the sequent calculus. These all define the same
thing, they just provide different perspectives and different ways of
getting to the same end. For reasons that will become clear when we
discuss type systems, we'll use the natural deduction style.

{{ %aside }}
#### Historical Sidenote

Natural deduction was invented by Gerhard Gentzen in the early
1900s. He wanted to develop a definition of logic that comes as close
as possible to the way that people actually _think_, hence the term
"natural". Gentzen made huge contributions to the study of logic; he
was also a Nazi and member of the SS. We will separate the man from
the logic and only look at the logic.
{{ %endaside }}

The fundamental notion of natural deduction is a __judgement__ on the
truth of a __proposition__ based on __evidence__. A _proposition_ is a
statement that can be either true or false, e.g., "it is raining". A
_judgement_ says whether a proposition is true based on some evidence
(e.g., observation, or a derivation from known facts). For example, we
could have the proposition "it is raining" and the judgement "the
proposition 'it is raining' is true", based on the evidence that I can
see it raining. 

## Making Judgements

Given a proposition, we want to be able to make a judgement about
it. There are a number of different kinds of judgements that we could
make, but we'll focus on one of the most important: _truth_.  We make
judgements based on evidence. Some evidence will be given to us as
facts (i.e., _axioms_) that we accept as true without question. Other
evidence will come from derivations based on _inference rules_. These
rules give us guidelines for how to make new judgements based on
existing judgements. Judgements will often make use of _hypotheses_,
i.e., propositions that we will temporarily assume are true while
trying to make the judgement. A hypothesis is just a sequence of
propositions; we will symbolize arbitrary sequences of hypotheses
using the Greek letters $\Gamma$ and $\Delta$.

A judgement will be of the form '$\Gamma \vdash A$'; this says that if
we assume the propositions contained in $\Gamma$ are true, then we are
justified in saying that proposition $A$ is true. For example, we can
make the judgement '$A,B \vdash A \land B$', i.e., "if we assume that
proposition $A$ is true and proposition $B$ is true, then we can say
that proposition $A \land B$ is true".

## Axioms

For classical first-order logic there are two axioms, i.e., judgements
that we accept as true without further evidence:


- $\Gamma,A,\Delta \vdash A$, i.e., we always know that under the
  assumption that $A$ is true, we can conclude that $A$ is true. The
  notation '$\Gamma,A,\Delta$' means that there may be other
  assumptions besides just $A$.

- $\Gamma \vdash A \lor \neg A$, i.e., the _law of the excluded
  middle_: it is always true, under any arbitrary assumptions
  (including none at all), that either $A$ is true or $\neg A$ is
  true.

Note that we could equivalently replace the law of the excluded middle
with the law of double negation: $\Gamma \vdash \neg\neg A \implies
A$. It turns out that given either axiom we can infer the other, so it
doesn't matter which one we take as fundamental. If we remove this
second axiom (in either form), then instead of _classical_ first-order
logic we have what is known as _intuitionistic_ first-order
logic. This is a deep philosophical choice with many implications,
which we will discuss in the page on [intuitionistic logic](???).

## Inference Rules

Inference rules are just a compact way of writing if..then
statements. They consist of a horizontal line with zero or more
judgements on top of the line, called _premises_, and exactly one
judgement on the bottom of the line, called the _conclusion_. An
inference rule is saying that _if_ all of the premises can be proven
true, _then_ the conclusion must also be true. Each inference rule
will also have a name, given immediately to the right of the
horizontal line.

For each logical connective $\land, \lor, \implies, \forall, \exists$
there are rules that tell us how we can use them to make
judgements. We don't include $\neg$ as a logical connective; we could,
but it's easier to just say that $\neg A$ is shorthand for writing $A
\implies \bot$. Each connective has an _introduction rule_ that shows
how we can judge that a proposition using that connective is true
(i.e., the connective is used in the conclusion judgement). Each
connective has an _elimination rule_ that shows how we can judge that
a proposition is true based on knowing some other proposition using
that connective is true (i.e., the connective is used in one of the
premise judgements). Note that the rules below usually don't specify
or use the contents of $\Gamma$ or $\Delta$; they are there only to
make clear that the rules are valid no matter what assumptions we
make, as long as the assumptions are consistent.

> __TBD__

## Derivation Trees

> __TBD__

## Exercises

> __TBD__
