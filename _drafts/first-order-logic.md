---
layout: post
author: "Ben Hardekopf"
title:  "First-Order Predicate Logic"
date:   2015-06-25
categories: "logic"
---

{% include macros.html %}
{% include variables.md %}

* TOC
{:toc}

## First-Order Logic

One of the most commonly-used systems of logic is __first-order
predicate logic__. The syntax of first-order logic formulae is given
below:

$$
\begin{gather}
  x \in \mathit{Variable}
  \qquad
  f \in \mathit{Function}
  \qquad
  p \in \mathit{Predicate}
\end{gather}
$$

$$
\begin{align}
  t \in \mathit{Term} &::= x \alt f(\vec{t})
  \\
  A, B \in \mathit{Proposition} &::= p(\vec{t}) \alt \top \alt \bot
  \alt A \land B \alt A \lor B \alt A \implies B \alt \forall
  x.A \alt \exists x.A
\end{align}
$$

In this notation, $\vec{t}\,$ is a sequence of terms of length equal
to the arity of the given function or predicate symbol. When we need
multiple variables we'll use letters $u, v, w, x, y, z$. When we need
multiple function symbols we'll use $f, g, h, i, j, k$. When we need
multiple predicate symbols we'll use $m, n, o, p, q, r, s$. When we
need multiple propositions we'll use $A, B, C, D, E$. As a last resort
we'll use subscripts to distinguish names, so that, for example, $x_1$
and $x_2$ indicate different variables.

### Arity

Every function and predicate symbol has an _arity_, which is simply
the number of arguments that it accepts. For example, a function $f(u,
v)$ has arity 2 and a function $g(u, v, w)$ has arity 3. We'll
sometimes indicate the arity using notation such as $f/2$ (for
function symbol $f$ with arity 2) and $g/3$ (for function symbol $g$
with arity 3). Functions and predicates can have arity 0, in which
case we write them without parentheses. For example, if we have a
predicate symbol $p/0$ we'll write $p$ instead of $p()$. Function
symbols with 0 arity are called _constants_ and predicate symbols with
0 arity are called _propositional variables_.

### Function Symbols

Function symbols $f$, $g$, etc. stand for functions that map objects
to other objects. Of course, without an interpretation we don't know
what those functions and objects are&mdash;an interpretation will
include a specific domain of objects and map each function symbol to a
function over that domain. For example, one interpretation might
specify that the objects are people, and connect the function symbol
_fatherOf_/1 with the function that takes a person and returns that
person's father, e.g., _fatherOf_(`Mary`) = `John`. Terms, which as
indicated above are made up of variables and functions over terms, are
just names for objects in some unknown domain. They don't have any
inherent meaning until we give them an interpretation, which will
provide a specific domain of objects. Different interpretations may
give them different meanings.

### Predicate Symbols

Predicate symbols $p$, $q$, etc. stand for relations between
objects. Recall that a relation is a set of tuples. For example, we
might define the relation _{ (grass, green), (sky, blue), (apple, red)
}_. Again, without an interpretation we don't know what the relations
or objects are; an interpretation will map each predicate symbol to a
specific relation over the domain of objects for that
interpretation. For example, one interpretation might map the
predicate symbol _color_/2 to the relation defined above.

### Example Terms and Propositions

- __Terms__ (specifying some object in the domain)

  $x$
  
  $f(h, g(i, j))$
  
  $f(g(h(x, y), i, j(x, z)), h(y, z))$

- __Propositions__ (statements with a truth value)

  $\forall x.(q(x) \lor p(x))$
  
  $\exists x. q(x, f(x), g) \land s(x) \implies \forall x.r(h, x)$
  
  $\forall x \exists y. (r(x, y) \implies r(y, x))$

## Informal Meaning

{{ %aside }}
#### What Does _First-Order_ Mean?

The term _first-order_ in "first-order logic" refers to the fact that
we are restricted to quantifying over the objects in a domain of
discourse. That is, a variable _x_ in a proposition will always refer
to some object. In higher-order logics we are also allowed to quantify
over predicates and functions, which means that a variable _x_ may
refer to some relation or function over objects in the domain, not
just objects themselves. Here is a small example:

> $\forall x \,.\, x(\texttt{foo}) \implies x(\texttt{bar})$

In this proposition, _x_ is ranging over unary predicates. The
proposition states that for any predicate _x_, if _x_ is true of
constant `foo` then it is also true of constant `bar`. We cannot make
this statement in first-order logic because we are not allowed to
quantify over predicates in this fashion. Higher-order logic is
strictly more powerful than first-order logic.
{{ %endaside }}

Here we informally describe the meaning of the logical connectives
being used in first-order logic formulae, i.e., $\land$, $\lor$,
$\implies$, $\forall$, and $\exists$. We will give a precise, formal
description of these connectives in the page about
[natural deduction](???); the intent now is simply to provide some
intuition. You may notice that we have not included a logical
connective that is often used in first-order logic: $\neg$, i.e.,
_negation_. Rather than defining negation directly, we will assume
that a negated proposition $\neg A$ is actually an abbreviation for
the formula $A \implies \bot$. This will work out to give exactly the
same semantics for negation that we would have defined directly, but
simplifies the description of the first-order logic system.

A _proposition_ is a logical statement with a truth value; that is,
the statement can be either _true_ or _false_. The statement "2+2 = 4"
is a proposition (as is the statement "2+2 = 5"). The expression
$\top$ (pronounced _top_ or _true_) is the proposition that is
trivially true; the expression $\bot$ (pronounced _bottom_ or _false_
or _absurd_) is the proposition that is trivially false. A predicate
$p(\vec{t})$ (e.g., the predicate _color(sky, purple)_) stands for
some relation over the domain of discourse. Without an interpretation
its truth value depends solely on what assumptions we might have
already made (this notion will be made more precise in the page on
natural deduction). The logical connectives, then, are ways to combine
propositions together into a new proposition.

- $A \land B$ (pronounced _A and B_)

  This form of proposition is called a _conjunction_; the propositions
  A and B are the _conjuncts_. The proposition $A \land B$ is true iff
  (if and only if) both proposition A is true and proposition B is
  true; otherwise it is false.

- $A \lor B$ (pronounced _A or B_)

  This form of proposition is called a _disjunction_; the propositions
  A and B are the _disjuncts_. The proposition $A \lor B$ is true iff
  at least one of proposition A and proposition B are true, i.e.,
  either A is true, B is true, or both are true. Otherwise it is
  false.

- $A \implies B$ (pronounced _A implies B_)

  This form of proposition is called an _implication_; the proposition
  A is called the _antecedent_ and the proposition B is called the
  _succedent_. The proposition $A \implies B$ is true iff whenever
  proposition A is true, proposition B is necessarily true as well. In
  other words, A cannot be true unless B is also true (though the
  reverse does not necessarily hold).

- $\forall x . A$ (pronounced _for all x, A_)

  This form of proposition is called _universal quantification_; the
  $\forall$ symabol is called the universal quantifier. Typically the
  proposition A will mention the variable _x_, otherwise there is no
  point in having the quantifier. The variable _x_ ranges over the
  entire (unspecified) domain of discourse, so, e.g., the proposition
  $\forall x . p(x)$ means that the predicate _p_ is true for all
  elements in the domain of discourse.

  Another way to think about the universal quantifier is in terms of
  conjunction. If we label the elements of the (unspecified) domain of
  discourse $d_1, d_2, \cdots, d_n$, then we can think of the
  proposition $\forall x . p(x)$ as the proposition $p(d_1) \land
  p(d_2) \land \cdots \land p(d_n)$.

- $\exists x . A$ (pronounced _there exists x such that A_).

  This form of proposition is called _existential quantification_; the
  $\exists$ symabol is called the existential quantifier. Typically
  the proposition A will mention the variable _x_, otherwise there is
  no point in having the quantifier. The variable _x_ represents some
  element of the (unspecified) domain of discourse, so, e.g., the
  proposition $\exists x . p(x)$ means that the predicate _p_ is true
  for at least one element in the domain of discourse.

  Another way to think about the existential quantifier is in terms of
  disjunction. If we label the elements of the (unspecified) domain of
  discourse $d_1, d_2, \cdots, d_n$, then we can think of the
  proposition $\exists x . p(x)$ as the proposition $p(d_1) \lor
  p(d_2) \lor \cdots \lor p(d_n)$.

## Exercises

> __TBD__
