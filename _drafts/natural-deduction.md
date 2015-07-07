---
layout: post
author: "Ben Hardekopf"
title:  "Natural Deduction"
date:   2015-06-27
---

<!--
    ISSUES:

    - put introduction and elimination rules into columns
    - provide names for inference rules in the proper place
    - figure out derivation trees
-->

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


- $\Gamma,A,\Delta \vdash A$, i.e., the _identity axiom_. It is always
  true that if we assume $A$ is true, we can conclude that $A$ is
  true. The notation '$\Gamma,A,\Delta$' means that there may be other
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
true, _then_ the conclusion must also be true.

<!--%% not until we figure out how to do this
    Each inference rule will also have a name, given immediately to
    the right of the horizontal line.
-->

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
premise judgements). The rules below mention assumptions $\Gamma$, but
they don't specify or use the contents of $\Gamma$; it there only to
make clear that the rules are valid no matter what assumptions we are
making.

If you are having trouble understanding the rules, refer back to the
informal description of these operators in the page on
[first-order logic](???). Having a conceptual understanding of what
the connectives mean should help in understanding the formal
definitions below.

### Conjunction ($\land$)

{{ %two_column }}

#### __Introduction Rule__ $\land\text{I}$

$$
\begin{gather}
\Gamma \vdash A \qquad \Gamma \vdash B
\\ \hline
\Gamma \vdash A \land B
\end{gather}
$$

{{ %column_break }}

#### __Elimination Rules__ $\land\text{E}_1$, $\land\text{E}_2$

$$
\begin{gather}
\Gamma \vdash A \land B
\\ \hline
\Gamma \vdash A
\end{gather}
$$

$$
\begin{gather}
\Gamma \vdash A \land B
\\ \hline
\Gamma \vdash B
\end{gather}
$$

{{ %end_two_column }}

The introduction rule $\land\text{I}$ states that if we know $A$ is
true under some set of assumptions $\Gamma$ and we know $B$ is true
under the same set of assumptions $\Gamma$, then we can also conclude
$A \land B$ is true under that same set of assumptions. There are two
elimination rules; they state that if we know $A \land B$ is true
under some set of assumptions $\Gamma$ then we can conclude both that
$A$ is true (using the first rule $\land\text{E}_1$) and that $B$ is
true (using the second rule $\land\text{E}_2$) under the same set of
assumptions $\Gamma$. Constantly mentioning the assumptions $\Gamma$
is tedious, so we'll often ignore them in the explanations below, but
for all of the inference rules the assumptions used in the premises
and conclusions must match up for the rule to be used.

Notice how the introduction and elimination rules are duals of each
other. The introduction rule takes two pieces of information (the
truth of $A$ and $B$) and packages them up into a single piece of
information (the truth of $A \land B$). The elimination rules take a
single piece of information (the truth of $A \land B$) and extract
from it two pieces of information (the truth of $A$ and the truth of
$B$). There is a principle of _conservation of information_ here:
information is neither lost nor destroyed when using the introduction
and elimination rules. A similar observation will hold for all of the
other connectives.

### Disjunction ($\lor$)

- __Introduction Rules__ $\lor\text{I}_1$, $\lor\text{I}_2$

$$
\begin{gather}
\Gamma \vdash A
\\ \hline
\Gamma \vdash A \lor B
\end{gather}
$$

$$
\begin{gather}
\Gamma \vdash B
\\ \hline
\Gamma \vdash A \lor B
\end{gather}
$$

- __Elimination Rule__ $\lor\text{E}$

$$
\begin{gather}
\Gamma \vdash A \lor B \qquad \Gamma,A \vdash C \qquad \Gamma,B \vdash C
\\ \hline
\Gamma \vdash C
\end{gather}
$$

The introduction rules state that if we know $A$ is true then we can
conclude that $A \lor B$ is true (using the first rule
$$\lor\text{I}_1$$) and that if we know $B$ is true then we can also
conclude $A \lor B$ is true (using the second rule
$$\lor\text{I}_2$$). Notice that we conclude the same thing in either
case; thus simply knowing $A \lor B$ is true does not give us any
information about _which_ of $A$ or $B$ was true.

The elimination rule $\lor\text{E}$ shows how to use the fact $A \lor
B$ is true without knowing which one of $A$ or $B$ was actually
true. The first premise states that we know $A \lor B$. The second
premise states that if we _assume_ $A$ is true, we can infer some new
proposition $C$. The third premise states that if we _assume_ $B$ is
true, we can infer that same new proposition $C$. The elimination
rule, then, states that if we know $A \lor B$ is true, and we know
that if $A$ is true then $C$ is true and also that if $B$ is true then
$C$ is true, then we can safely conclude $C$ is true without knowing
_which_ of $A$ or $B$ was actually true.

### Implication ($\implies$)

- __Introduction Rule__ $$\implies\!\!\text{I}$$

$$
\begin{gather}
\Gamma,A \vdash B
\\ \hline
\Gamma \vdash A \implies B
\end{gather}
$$

- __Elimination Rule__ $$\implies\!\!\text{E}$$

$$
\begin{gather}
\Gamma \vdash A \implies B \qquad \Gamma \vdash A
\\ \hline
\Gamma \vdash B
\end{gather}
$$

The introduction rule states that if by assuming $A$ is true we can
infer $B$ is true, then we can conclude that $A \implies B$ is
true. The elimination rule states that if we know $A \implies B$ is
true and we can infer $A$ is true, then we can conclude that $B$ is
true.

### Universal Quantification ($\forall$)

- __Introduction Rule__ $\forall\text{I}$

$$
\begin{gather}
\Gamma \vdash A[x \mapsto k] \qquad k\text{ fresh}
\\ \hline
\Gamma \vdash \forall x . A
\end{gather}
$$

- __Elimination Rule__ $\forall\text{E}$

$$
\begin{gather}
\Gamma \vdash \forall x . A
\\ \hline
\Gamma \vdash A[x \mapsto t]
\end{gather}
$$

We assume that proposition $A$ mentions variable _x_, otherwise we can
trivially remove the quantification and leave $A$ by itself. The
notation '$A[x \mapsto k]$' means to return a new version of $A$ such
that all mentions of variable _x_ are replaced by $k$, e.g., $f(x)
\land g(x) [x \mapsto h]$ would result in $f(h) \land g(h)$. The term
_fresh_ means that the constant $k$ has never been used anywhere in
the current proof, so this is the first time in the current proof that
$k$ has been mentioned.

The introduction rule states that if we can infer $A[x \mapsto k]$ is
true for some fresh (i.e., never-seen-before) constant $k$, then we
can conclude that $\forall x . A$ is true. The reasoning behind this
rule is that if $k$ is a fresh constant that we've never seen before,
then we know nothing about it, which means that it could represent any
object in the domain of discourse. If we can prove that
$A[x \mapsto k]$ is true, and $k$ can represent any object in the
domain, then $A$ must be true no matter what domain object we
substitute for _x_. Therefore, $A$ must be true for _all_ objects in
the domain, which is represented as $\forall x. A$.

The elimination rule states that if $\forall x . A$ is true, then we
can conclude $A[x \mapsto t]$ is true for any arbitrary term
$t$. Recall that terms specify objects in the domain of discourse; if
$A$ is true for all objects, then it is true for any one object.

### Existential Quantification ($\exists$)

- __Introduction Rule__ $\exists\text{I}$

$$
\begin{gather}
\Gamma \vdash A[x \mapsto t]
\\ \hline
\Gamma \vdash \exists x . A
\end{gather}
$$

- __Elimination Rule__ $\exists\text{E}$

$$
\begin{gather}
\Gamma \vdash \exists x . A \qquad \Gamma,A[x \mapsto k] \vdash B \qquad k\text{ fresh}
\\ \hline
\Gamma \vdash B
\end{gather}
$$

Again we assume that $A$ mentions variable _x_. The introduction rule
states that if we know $A[x \mapsto t]$ is true for some term $t$,
then we can conclude that $\exists x . A$ is true. The reasoning is
that we have shown $t$ makes $A$ true, and thus we have demonstrated
that there is at least one object in the domain of discourse that
makes $A$ true.

The elimination rule states that if $\exists x . A$ is true and, by
assuming $A[x \mapsto k]$ for some fresh constant $k$ we can infer
that $B$ is true, then we can conclude that $B$ is true. The reasoning
is similar to that of the disjunction elimination rule&mdash;we know
that there is _some_ object that makes $A$ true, but we don't know
_which_ object. Therefore we select a fresh constant $k$ that can
represent _any_ object (as discussed in the introduction rule for
universal quantification $\forall\text{I}$), assume $A$ is true for
that object, and attempt to infer $B$. If we are successful, then we
know that it doesn't matter which object satisfies $A$, we can safely
conclude $B$.

## Derivation Trees

> __TBD__

## Exercises

> __TBD__
