---
layout: post
author: "Ben Hardekopf"
title:  "Intuitionistic Logic"
date:   2015-06-29
categories: "logic"
---

{% include macros.html %}
{% include variables.md %}

* TOC
{:toc}

## Intuitionistic Logic

From one perspective, intuitionistic logic is a small change from
classical first-order logic. We simply remove the law of the excluded
middle ($\Gamma \vdash A \lor \neg A$) and the law of double negation
($\Gamma \vdash \neg \neg A \implies A$) as axioms. Everything else
remains exactly the same. However, there is a deep philosophical
choice being made when we do this.

Intuitionistic logic was developed by Heyting (1898&mdash;1980) in
order to formalize Brouwer's program of intuitionism. Brouwer
(1881&mdash;1966) believed that mathematics is completely a creation
of the human mind, rather than an external reality that we
explore. That is, math is invented, not discovered. Along with this
belief comes a new notion of what it means for a mathematical
statement to be _true_: to prove that a mathematical object exists,
one must provide a _constructive_ proof&mdash;that is, a method for
constructing said object. This is in contrast to classical
mathematics, which allows one to prove something exists by proving
that it can't _not_ exist. The constructive viewpoint is interesting
from a Computer Science perspective because a constructive proof is
akin to an _algorithm_.

If we think in terms of the traditional notions of _true_ and _false_,
intuitionistic logic doesn't seem to make sense. A proposition must be
either true or false; if it isn't true then it must be false, and
vice-versa. Similarly, if we know that it's false that a proposition
is false, then the proposition must be true. This reasoning seems like
common-sense, and are exactly what the law of the excluded middle and
the law of double negation are stating.

However, intuitionism forces us to think in terms of _provability_
rather than _truth_, or in other words, something is only true if it
is provable. Consider the famous statement from algorithmic complexity
theory $P = \mathit{NP}$. Clearly this statement is either true or
false. However, we do not have a _proof_ either way&mdash;we don't
know whether it is true or false. From an intuitionistic standpoint
the proposition $A \lor \neg A$ is saying that either we have a proof
of $A$ or we have a proof of $\neg A$; however we have just given an
example where this is not true (and there are many other examples of
statements such that we neither have a proof nor a refutation). Thus,
the law of the excluded middle does not universally hold from the
standpoint of intuitionistic logic.

Thinking in terms of provability also explains why the law of double
negation doesn't hold. The proposition $\neg\neg A$ states that we
have a proof that $\neg A$ does not hold. However, this fact does not
immediately give us a way to construct $A$, and therefore we don't
have a constructive proof that $A$ holds. Thus, there is no
intuitionistic law of double negation.

## Intuitionism and Computer Science

Intuitionism and the philosophy of constructive mathematics is not in
the mainstream of the modern mathematical community. However, as
hinted at earlier, intuitionism can have a strong impact on Computer
Science. For example, as we will see when we discuss
[type systems](???), type theory and intuitionistic logic are, in a
very real way, exactly the same thing. Whenever we write code in a
statically-typed language, we are actually proving a theorem in
intuitionistic logic, and when we compile that code the type checker
is verifying that our theorem is correct.

## Exercises

> __TBD__
