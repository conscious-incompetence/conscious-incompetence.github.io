---
layout: post
author: "Ben Hardekopf"
title:  "Introduction to Logic"
date:   2015-06-22
categories: "logic"
---

{% include variables.md %}

* TOC
{:toc}

## What is Logic?

The word __logic__ comes from the Greek _logos_, which can be
translated as _reason_. Logic as a discipline is about studying the
fundamental principles of how to reason correctly, i.e., making valid
_arguments_ (in the sense of making a case for something, not an
acrimonious dispute). In other words, logic tells us, given certain
assumptions, what conclusions one can reasonably infer. Consider the
following example (adapted from The Simpsons):

> __Lisa:__ By your logic I could claim that this rock keeps tigers away.  
> __Homer:__ Oh, how does it work?  
> __Lisa:__ It doesn’t work...it’s just a stupid rock. But I don’t see any
> tigers around, do you?  
> __Homer:__ Lisa, I want to buy your rock.

{{ %aside }}
#### Historical sidenote

Logic has been studied since ancient times, with schools arising
thousands of years ago in Greece, India, and China. In Europe, logic
was strongly influenced by Aristotle all the way up through the 19th
century. Logic was part of the Trivium, and along with grammar and
rhetoric formed the foundations of a medieval liberal arts
education. Modern logic started taking shape in the mid 1800s due to
people like George Boole (boolean algebra), Gottlob Frege (predicate
logic), and many others.
{{ %endaside }}

Clearly (and unsurprisingly) Homer is not reasoning correctly. Logic
can tell us exactly why his reasoning is incorrect and thus why Lisa
is so exasperated with him.

An important principle of formal logic is __form over content__. That
is, the rules of logic are about the form that an argument takes, not
the contents of that argument. Consider the following two examples:

> __Premise:__ If one is a man then one is mortal  
> __Premise:__ Socrates is a man  
> __Conclusion:__ Socrates is mortal

> __Premise:__ If x > y then x+1 > y  
> __Premise:__ 1 > 0  
> __Conclusion:__ 2 > 0

One example is about the mortality of man, the other is about
math&mdash;they have completely different _content_, but the _form_ of
both arguments is the same:

> __Premise:__ If A then B  
> __Premise:__ A  
> __Conclusion:__ B

This particular form of argument is called _modus ponens_. In formal
logic we only study the forms of arguments and ignore content. This
makes formal logic seem like just a bunch of symbol pushing, devoid of
meaning&mdash;and that's exactly what it is! In fact, that's what
makes formal logic so powerful. We can study the correct forms of
argument without worrying about what those arguments are about, which
means that logic applies to _all_ kinds of arguments no matter what
their subject matter might be. We don't need separate logics for
studying, e.g., arguments about mortality versus arguments about math.

## Logical Systems

Logic is not one single thing; there are many different systems of
logic with different applications. These systems fall into different
categories such as __propositional logics__, __predicate logics__,
__modal logics__, etc. Examples of predicate logics include
_first-order logic_, _higher-order logic_, _many-sorted logic_, and
_infinitary logic_. Examples of modal logics include _temporal logic_
(logics of time), _alethic logic_ (logics of possibility and
necessity), _deontic logic_ (logics of obligation and permission), and
_doxastic logic_ (logics of belief). There are many other logical
systems that have been developed. For all logical systems there are
three desirable properties, though not all logical systems will have
all three:

- __Consistency__

  The system cannot be used to prove things that contradict each
  other, i.e., a consistent system cannot be used to prove for any
  proposition A that A is true _and_ that A is not true.
  
- __Soundness__

  If the system can be used to prove a proposition A, then A is
  true. In other words, only true things can be proven.
  
- __Completeness__

  If proposition A is true, then the system can be used to prove A. In
  other words, all true things can be proven.<br/><br/>

Consistency and soundness are generally taken as required in order to
have a sensible logical system; when a system cannot have all three it
is completeness that is dropped.

## Logical Interpretations

The study of logic is about form, not content. However, we do need
some way to connect the abstract logical sentences with meaningful
content, or logic would be completely disconnected from reality. This
connection is made via an _interpretation_. Consider the following
definitions:

- __Domain of discourse__ (a.k.a. _universe of discourse_)

  A domain of discourse is a set of objects that we are interested in
  making arguments about. This set can consist of anything we
  want&mdash;people, numbers, emotions, planets, nations, colors, etc.

- __Interpretation__

  An interpretation maps logical syntax (the symbols used to make
  logical formulae) to the domain of discourse. Take the modus ponens
  example above: from `If A then B` and `A` we can infer `B`.

  We can take the domain of discourse to be statements about people
  and states of being and the interpretation would map A to "Socrates
  is a man" and B to "Socrates is mortal".

  Alternatively, we can take the domain of discourse to be arithmetic
  expressions and the interpretation would map A to "1 > 0" and B to
  "2 > 0".

  Both of these interpretations provide different meanings to the
  same original logical formula.<br/><br/>

Based on these definitions, we can now characterize logical sentences
(or _formulae_) as one of the following:

- __Valid__

  A valid formula is guaranteed to be true no matter what
  interpretation we use. For example, the logical sentence "If A is
  true then A is true" is valid.

- __Satisfiable__

  A satisfiable formula has at least one interpretation that makes it
  true. For example, the logical sentence "A and B are both true" is
  satisfiable, but not valid. Under the interpretation A = "triangles
  have three sides" and B = "squares have four sides", the sentence is
  true. Under the interpretation A = "triangles have four sides" and B
  = "squares have three sides" the sentence is not true.

- __Unsatisfiable__

  An unsatisfiable formula has _no_ interpretations that make it
  true. For example, the sentence "A is true and A is not true" cannot
  be true in any interpretation.<br/><br/>

In Computer Science we are often more interested in satisfiability
than validity. In particular, we often would like to take a given
formula and ask "is this satisfiable?", and further "given a
particular domain of discourse, what specific interpretation satisfies
the formula?". Finding a satisfying interpretation for a formula is a
form of computation.

### More Interpretation Examples

The notions of "domain of discourse" and "interpretation" may be a
little difficult to comprehend. Here are some examples to illustrate
the concepts. Take the following sentence in first-order logic:

> $\forall x \,.\, p(x,\, f(x,\, g))$

Here _x_ is a variable, _p_ is a predicate, _f_ is a binary function
(i.e., a function taking two arguments), and _g_ is a nullary function
(i.e., a function taking no arguments, also called a _constant_). The
$\forall$ symbol is saying that the variable _x_ ranges over all
elements of the domain of discourse. If these concepts are not
familiar to you, take a look at the page on [first-order logic](???)
where they will be explained in more detail and then come back. An
interpretation will take all of the predicates and functions in a
formula and map them to relations and functions over the given domain
of discourse, as in the following examples:

> #### __Interpretation 1__
>
> We will set the domain of discourse to be people. We will map the
>predicate _p_ to the relation between people `descendant-of`, the
>function _f_ to the function on people `least-common-ancestor` (it
>returns the most closely related person who is an ancestor of both
>people given as arguments), and the constant _g_ to the person
>`mary`. Then in this interpretation, _x_ is ranging over the domain
>of people and the above formula is saying "for all people _x_, _x_ is
>a descendant of the least common ancestor of _x_ and `mary`".

> #### __Interpretation 2__
>
> We will set the domain of discourse to be integers. We will map the
> predicate _p_ to the relation between numbers < (less than), the
> function _f_ to the function on numbers + (addition), and the
> constant _g_ to the number 1. Then in this interpretation, _x_ is
> ranging over the domain of integers and the above formula is saying
> "for all numbers _x_, _x_ is less than _x_ + 1".

> #### __Interpretation 3__
>
> We can have multiple interpretations for the same domain. Again set
> the domain of discourse to be integers. We will map the predicate
> _p_ to the relation between numbers > (greater than), the function
> _f_ to the function on numbers − (subtraction), and the constant _g_
> to the number 1. Then in this interpretation, _x_ is ranging over
> the domain of integers and the above formula is saying "for all
> numbers _x_, _x_ is greater than _x_ − 1".

## Exercises

> __TBD__
