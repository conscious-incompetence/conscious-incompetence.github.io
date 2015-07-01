---
layout: post
author: "Ben Hardekopf"
title:  "Linear Logic"
date:   2015-06-29
---

{% include macros.html %}
{% include variables.md %}

* TOC
{:toc}

## Linear Logic

We motivated the system of linear logic in the page on
[substructural logic](???). Now we will describe it in more
detail. The syntax of linear logic is given below:

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
  \alt A \otimes B \alt A \,\&\, B \alt A \oplus B \alt A \lolli B \alt !A
  \alt \forall x.A \alt \exists x.A
\end{align}
$$

The notation $\vec{t}$ represents a sequence of terms. The syntax is
very similar to first-order logic except that it uses different
logical connectives. We will informally describe the meaning of these
connectives and then give a formal description of them using inference
rules.

## Informal Meaning

Here we informally describe the meanings of the linear logic connectives.

- $A \lolli B$: __Linear implication.__ Pronounced "consuming $A$
  yields $B$" or "$A$ lollipop $B$".

  This is identical to the classical $\implies$ except that it uses
  linear assumptions; that is, inferring $B$ consumes $A$ and $A$
  cannot be used again later. Suppose $A$ stands for "I have 10
  dollars" and $B$ stands for "I have a pizza". Then $A \lolli B$
  states that I can spend 10 dollars for a pizza, but once I do so I
  won't have 10 dollars anymore.

- $A \oplus B$: __Disjunction.__ Pronounced "(at least one of) $A$ or
  $B$".

  This is identical to the classical $\lor$, we just use a different
  symbol to indicate that we're in the linear logic system. Suppose
  $C$ stands for "I toss a coin", $A$ stands for "I get heads", and
  $B$ stands for "I get tails". Then $C \lolli A \oplus B$. Note
  particularly that I don't get to choose _which_ of $A$ or $B$ I get,
  just that I'll have at least one of them.

- $A \otimes B$: __Multiplicative conjunction.__ Pronounced "both $A$
  and $B$" or "$A$ tensor $B$".

  This form of conjunction states that both $A$ and $B$ can be
  produced by some common set of resources. Suppose that $A$ stands
  for "I have a pizza" and $B$ stands for "I have a cake"; also $D$
  stands for "I have \$10". Then:

  $$
  \begin{align}
    D \lolli A, D \lolli B, D, D &\vdash A \otimes B & \text{This is valid.}
    \\
    D \lolli A, D \lolli B, D &\not\vdash A \otimes B & \text{This is not.}
  \end{align}
  $$

  The first formula is valid because it takes two $D$s to produce an
  $A$ and a $B$ and I have two $D$s in the assumptions. The second
  formula is invalid because I only have one $D$ in the assumptions,
  so I can produce either $A$ or $B$ but not both.

- $A \,\&\, B$: __Additive conjunction.__ Pronounced "choose from $A$
  and $B$" or "$A$ with $B$".

  This form of conjunction states that I can choose to produce either
  $A$ or $B$, but not both. Suppose that $A$ stands for "I have a
  pizza" and $B$ stands for "I have a cake"; also $D$ stands for "I
  have 10 dollars". Then $D \lolli A, D \lolli B, D \vdash A \,\&\,
  B$. Note particularly that I get to _choose_ which of $A$ or $B$ I
  wish to derive.

- $!A$: __Escape.__ Pronounced "of course $A$" or "bang $A$".

  This allows us to escape from linearity by indicating that we have
  an infinite supply of $A$. In other words, an escaped hypothesis
  acts like a regular first-order logic hypothesis. Suppose that $A$
  stands for "I have one dollar". Then $!A$ stands for "I have an
  infinite supply of dollars"; that is, whenever I need a dollar I can
  supply one. In particular, $!A \lolli B$ is exactly the same as $A
  \implies B$.

The $\forall$ and $\exists$ connectives are the same as first-order
logic. Let's explore the difference between $\otimes$, &, and $\oplus$
a bit more, because they can be confusing. Let $A$ stand for "I have a
pizza", $B$ stand for "I have a cake", and $H$ stand for "I am
happy". Then:

$$
\begin{align}
  A \otimes B &\lolli H & \text{I will be happy given }\textit{both}\text{ a
  pizza }\textit{and}\text{ a cake.}
  \\
  A \,\&\, B &\lolli H & \text{I will be happy given }\textit{either}\text{ a
  pizza }\textit{or}\text{ a cake, as long as I get to choose which one.}
  \\
  A \oplus B &\lolli H & \text{I will be happy given }\textit{either}\text{ a
  pizza }\textit{or}\text{ a cake, and I don't care which one I get.}
\end{align}
$$

## Axioms

For pure linear logic, we modify the identify axiom as follows: $A
\vdash A$. Recall that for regular first-order logic we used
$\Gamma,A,\Delta \vdash A$. Our new version requires that $A$ is the
_only_ hypothesis; in other words, all other hypotheses must have been
consumed previously. This requirement is what enforces linearity,
i.e., that all resources must be used during a proof.

If we include an escape mechanism (i.e., the ! connective) in order to
embed regular first-order logic inside linear logic, then we instead
use the following identity axiom: $!\Gamma, A, !\Delta \vdash A$,
where $!\Gamma$ and $!\Delta$ indicate that all hypotheses in
$\Gamma$ and $\Delta$ are escaped (i.e., use !). This acknowledges the
fact that escaped hypotheses can't be removed because they are
inexhaustible.

## Inference Rules

### Linear Implication ($\lolli$)

- __Introduction Rule__ $$\lolli\!\!\text{I}$$

$$
\begin{gather}
\Gamma, A \vdash B
\\ \hline
\Gamma \vdash A \lolli B
\end{gather}
$$

- __Elimination Rule__ $$\lolli\!\!\text{E}$$

$$
\begin{gather}
\Gamma \vdash A \lolli B \qquad \Delta \vdash A
\\ \hline
\Gamma, \Delta \vdash B
\end{gather}
$$

Linear implication works the same as regular implication; the
inference rules taken as a whole will ensure that $A$ is used exactly
once in the proof of $B$. Notice in the elimination rule that we use
different sets of assumptions $\Gamma$ and $\Delta$ in the two
premises. This is necessary because $\Gamma$ will be completely
consumed in the proof of $A \lolli B$ and $\Delta$ will be completely
consumed in the proof of $A$.

### Disjunction ($\oplus$)

- __Introduction Rules__ $\oplus\text{I}_1$, $\oplus\text{I}_2$

$$
\begin{gather}
\Gamma \vdash A
\\ \hline
\Gamma \vdash A \oplus B
\end{gather}
$$

$$
\begin{gather}
\Gamma \vdash B
\\ \hline
\Gamma \vdash A \oplus B
\end{gather}
$$

- __Elimination Rule__ $\oplus\text{E}$

$$
\begin{gather}
\Gamma \vdash A \oplus B \qquad \Delta, A \vdash C \qquad \Delta, B
\vdash C
\\ \hline
\Gamma, \Delta \vdash C
\end{gather}
$$

Disjunction also works the same as in regular first-order logic,
though notice in the elimination rule that we use a different set of
assumptions in the first premise than in the second two premises. It
is correct to use $\Delta$ for both proofs of $C$ because each premise
is exploring an alternate world: one where we assume $A$ is true and
prove $C$, the other where we assume $B$ is true and prove
$C$. $\Delta$ is completely consumed in each world, but the two worlds
don't co-exist.

### Multiplicative Conjunction ($\otimes$)

- __Introduction Rule__ $\otimes\text{I}$

$$
\begin{gather}
\Gamma \vdash A \qquad \Delta \vdash B
\\ \hline
\Gamma, \Delta \vdash A \otimes B
\end{gather}
$$

- __Elimination Rule__ $\otimes\text{E}$

$$
\begin{gather}
\Gamma \vdash A \otimes B \qquad \Delta, A, B \vdash C
\\ \hline
\Gamma, \Delta \vdash C
\end{gather}
$$

These rules differ from the regular first-order logic conjunction
rules because instead of projecting out $A$ or $B$ from the
conjunction, we assume both $A$ and $B$ and use them to prove a third,
new proposition $C$. Notice again that we use different sets of
assumptions $\Gamma$ and $\Delta$ in the rules with multiple premises,
for the same reason as we discussed above; this will be true for most
of the linear inference rules (except the second two premises of the
disjunction elimination rule as discussed above and the premises of
the additive conjunction introduction rule as discussed below).

### Additive Conjunction (&)

- __Introduction Rule__ &$\text{I}$

$$
\begin{gather}
\Gamma \vdash A \qquad \Gamma \vdash B
\\ \hline
\Gamma \vdash A \,\&\, B
\end{gather}
$$

- __Elimination Rules__ &$\text{E}_1$, &$\text{E}_2$

$$
\begin{gather}
\Gamma \vdash A \,\&\, B
\\ \hline
\Gamma \vdash A
\end{gather}
$$

$$
\begin{gather}
\Gamma \vdash A \,\&\, B
\\ \hline
\Gamma \vdash B
\end{gather}
$$

These rules are just like the conjunction rule for regular first-order
logic. We need a separate multiplicative conjunction rule because the
proposition $A \,\&\, B$ is linear; thus when we use $A \,\&\, B$ to
project out $A$ (or $B$) we cannot use it again to project out $B$ (or
$A$). Thus using additive conjunction we can only get one of the two
conjuncts from the conjunction, not both. To get both we need a
multiplicative conjunction as described above.

Notice that unlike the multiplicative conjunction introduction rule,
the additive conjunction introduction rule uses the same set of
assumptions $\Gamma$ to prove both $A$ and $B$. This is correct
because we know that we'll only extract one of $A$ or $B$ from the
proposition $A \,\&\, B$ using the elimination rule; thus we only need
sufficient resources to prove one of them rather than both of them.

### Escape (!)

- __Introduction Rule__ !$\text{I}$

$$
\begin{gather}
\Gamma \vdash A \qquad !\Gamma
\\ \hline
\Gamma \vdash !A
\end{gather}
$$

- __Elimination Rule__ !$\text{E}$

$$
\begin{gather}
\Gamma \vdash !A \qquad \Gamma, \Delta, A \vdash B
\\ \hline
\Gamma, \Delta \vdash B
\end{gather}
$$

The introduction rule states that $!A$ is true, i.e., that $A$ is an
inexhaustable resource, if we can prove $A$ using $\Gamma$ _and_ all
of the assumptions contained in $\Gamma$ are themselves inexhaustable
(which is specified by the notation $!\Gamma$). The reasoning is that
if any assumptions in $\Gamma$ are linear (not escaped using !) then
we can only prove $A$ a finite number of times until the unescaped
assumptions are all used up&mdash;thus $A$ would not be inexhaustable.

The elimination rule essentially allows us to extract an assumption
$A$ from an escaped assumption $!A$. We can think of $!A$ as a factory
of $A$s that will produce an $A$ whenever we need it to do so.

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

These rules work the same as for regular first-order logic.

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
\Gamma \vdash \exists x . A \qquad \Delta, A[x \mapsto k] \vdash B \qquad k\text{ fresh}
\\ \hline
\Gamma, \Delta \vdash B
\end{gather}
$$

These rules work the same as for regular first-order logic, though
notice again that in the elimination rule we use different sets of
assumptions $\Gamma$ and $\Delta$ for the different premises.

## Derivation Trees

> __TBD__

## Exercises

> __TBD__
