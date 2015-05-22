---
layout: post
author: "Ben Hardekopf"
title:  "Lambda Calculus"
date:   2015-05-20 22:12:31
---

# Background on Computability

The history of computability stretches back a long ways, but we’ll start
here with German mathematician **David Hilbert** in the 1920s. Hilbert
proposed a grand challenge for mathematics called *Hilbert’s Program*
(program in the sense of agenda, not computer program—computer programs
didn’t exist yet). A large part of that challenge was to create an
algorithm that, given any mathematical theorem, could in finite time
determine whether that theorem is true or false. This is called the
*Entscheidungsproblem*, or “decision problem”. It was assumed at the
time that naturally such an algorithm existed, it was just a question of
finding it. However, this goal turned out to be provably impossible. The
three people most reponsible for killing this dream are **Kurt Gödel**
with his Incompleteness Theorems, **Alan Turing** with his Turing
Machines, and **Alonzo Church** with his $\lambda$-calculus. We’ll focus
here on Turing and Church.

## Alan Turing

Alan Turing was a fellow at King’s College when he became interested in
the decision problem. He realized that to formally address this
question, we needed a formal definition of what *algorithm* meant.
Heretofore people had a vague, informal notion that an algorithm was
just a series of mechanical steps, like a recipe—but this notion wasn’t
sufficient to address the decision problem. Turing invented what later
came to be known as *Turing Machines* (he didn’t call them that himself)
and defined an algorithm as anything that can be computed by a Turing
Machine. Note that there is no way to *prove* that algorithms and Turing
Machines coincide, he just made the assertion that they do. However, it
turns out to be a very robust definition that is generally accepted by
everyone today. Given this definition, he then proved that there exist
problems that cannot be solved by any Turing Machine, e.g., the famous
*Halting Problem*. By definition, then, there cannot exist any algorithm
to solve those problems; these problems are called *undecidable*. It
turns out that Hilbert’s decision problem belongs in this class, and
thus Hilbert’s Program was doomed. Turing published this result in 1936.

Historical sidenote: Turing was a prolific researcher and became
involved in a number of Computer Science-related problems. Many people
have heard of the *Turing Test* for Artifical Intelligence, which he
invented. Turing was also a significant contributor to the World War II
war effort in Bletchley Park, the nerve center of the Allies’ efforts to
break the German secret codes. He was also gay, and despite his many
contributions the British government’s intolerance of his lifestyle led
to his early and tragic death.

## Alonzo Church

Alonzo Church was a professor at Princeton around the same time that
Turing was a fellow at King’s College. He was not originally interested
in Hilbert’s decision problem; his goal was to redefine the very
foundations of mathematics. He wanted to replace *sets*, the fundamental
building blocks of all mathematics, with *functions* instead.
Unfortunately for him, his students later proved that his system was
inconsistent and thus useless. However, he salvaged part of his system
from the wreckage: the $\lambda$-calculus. Church then used the
$\lambda$-calculus to address Hilbert’s decision problem.

Church *also* gave a formal definition of “algorithm”, in terms of the
$\lambda$-calculus, and proved that there exist unsolvable problems and
hence Hilbert’s decision problem was impossible. He actually published
his results one month before Turing, but most people only remember
Turing’s paper (history is full of such injustices). Turing later became
Church’s graduate student at Princeton. Church and Turing together
proved that the $\lambda$-calculus and Turing Machines are, in fact,
computationally equivalent: anything that one can compute, so can the
other. Thus, whether we use Turing Machines or the $\lambda$-calculus is
entirely a matter of taste and convenience. In complexity theory we
usually use Turing Machines; in programming language theory we usually
use the $\lambda$-calculus. The $\lambda$-calculus is also at the heart
of all functional programming languages.

# Some Intuition for the $\lambda$-Calculus

The $\lambda$-calculus is all about functions. Consider the function
$f(x) = x^2 + 2x + 1$. To determine the value of $f(3)$, we *substitute*
the argument 3 for the variable $x$ in the body of the function, then
*reduce* until we reach the final answer:

$$\begin{aligned}
  f(3) &= 3^2 + 2 \cdot 3 + 1
  \\
  &= 9 + 2 \cdot 3 + 1
  \\
  &= 9 + 6 + 1
  \\
  &= 15 + 1
  \\
  &= 16\end{aligned}$$

The function has a name, $f$, but that name is actually superfluous; we
could have called it $g$, *bob*, or anything else we wanted to and it
would still be the same function. We can simplify the function
definition by not giving it a name at all: $x
\mapsto x^2 + 2x + 1$, i.e., the function with parameter $x$ that maps
to the function body $x^2 + 2x + 1$. This is called an *anonymous
function*, i.e., a function with no name. Of course, that raises the
question of how to call the function if it doesn’t have a name. The
syntax for calling anonymous functions is as follows:

$$\begin{aligned}
  (x \mapsto x^2 + 2x + 1)\; 3&= 3^2 + 2 \cdot 3 + 1
  \\
  &= 9 + 2 \cdot 3 + 1
  \\
  &= 9 + 6 + 1
  \\
  &= 15 + 1
  \\
  &= 16\end{aligned}$$

We simply juxtapose the function we’re calling with its argument. In the
previous examples the arguments were all numbers, but that doesn’t have
to be the case—arguments could also be other functions. Consider the
integral or differential functions in calculus: they each take a
function as an argument and return a new function as a result (the
integral or differential of the argument, respectively). Functions that
take other functions as arguments and/or return functions as results are
called *higher-order functions*.

## Environments

When evaluating a function, the act of substituting the argument for the
parameter in the body of the function (e.g., substituting 3 for $x$ in
the previous examples) can be very expensive. Evaluating a function can
involve multiple substitutions, and each one requires that the entire
function body be iterated over to replace variables with values. Thus,
using substitution makes function evaluation have $O(n^2)$ to $O(n^4)$
complexity (depending on evaluation order). We can use a simple trick to
make the complexity $O(n)$ instead, using something called an
environment. It turns out that substitution also requires some
complicated rules to deal with nested functions and that environments
handle nested functions naturally without any extra complexity, so they
also simplify evaluation in that way.

An *environment* is a map from variables to values. When we call a
function, rather than substituting the argument for the parameter inside
the function body, instead we add an entry into the environment mapping
the parameter to the argument. When evaluating the function body,
whenever we see a variable we look it up in the environment to get its
corresponding value. For example:

$$\begin{aligned}
  & \text{Function evaluation} & \text{Environment}
  \\
  (x \mapsto x^2 + 2x + 1)\; 3&= x^2 + 2x + 1 & [x \mapsto 3]
  \\
  &= 9 + 2x + 1 & [x \mapsto 3]
  \\
  &= 9 + 6 + 1 & [x \mapsto 3]
  \\
  &= 15 + 1 & [x \mapsto 3]
  \\
  &= 16 & [x \mapsto 3]\end{aligned}$$

# Syntax of $\lambda$-Calculus

The $\lambda$-calculus doesn’t actually contain numbers and arithmetic;
it only has functions, nothing else. The syntax of $\lambda$-calculus
expressions is:

$$\begin{aligned}
  e \in {\ensuremath{\mathit{Exp}}} &::= x & \text{variables}
  \\
  &{\ \ \ {\ \mid\ }}{\ensuremath{\lambda x \,.\, e}} & \text{function abstraction}
  \\
  &{\ \ \ {\ \mid\ }}e_1 \; e_2 & \text{function application}\end{aligned}$$

Note that we use ${\ensuremath{\lambda x \,.\, e}}$ to define functions
instead of $x
\mapsto e$; they mean the same thing. Why do we use $\lambda$? The
(possibly apocryphal) story goes that Church wanted to use the notation
$\hat{x} \,.\, e$ taken from Russell and Whitehead’s famous book
*Principia Mathematica*, but the typesetter couldn’t reproduce the
$\hat{\;}$ symbol and so used $\lambda$ instead.

## Example Expressions

-   <span>$\lambda f \,.\, {\ensuremath{\lambda x \,.\, x}}$</span>

-   <span>$\lambda f \,.\, {\ensuremath{\lambda x \,.\, f \; x}}$</span>

-   <span>$\lambda f \,.\, {\ensuremath{\lambda x \,.\, f \; (f \; x)}}$</span>

-   <span>$\lambda u \,.\, {\ensuremath{\lambda f \,.\, {\ensuremath{\lambda x \,.\, f \; ((u \; f) \; x)}}}}$</span>

Often we’ll use the shorthand notation <span>$\lambda xy \,.\, e$</span>
to stand for
<span>$\lambda x \,.\, {\ensuremath{\lambda y \,.\, e}}$</span>; using
that convention the expressions would look like this:

-   <span>$\lambda fx \,.\, x$</span>

-   <span>$\lambda fx \,.\, f \; x$</span>

-   <span>$\lambda fx \,.\, f \; (f \; x)$</span>

-   <span>$\lambda ufx \,.\, f \; ((u \; f) \; x)$</span>

## Abstract Syntax Tree (AST)

Expressions in the $\lambda$-calculus can get rather complex and
difficult to read. It is often beneficial to rewrite expressions into
the form of *abstract syntax trees*. These trees reveal the underlying
structure of the expressions and make them easier to read. Each subtree
of the AST stands for a subexpression of the entire expression; each
node is either a $\lambda$ (if the subexpression rooted at that node is
a function definition), an ’@’ (if the subexpression rooted at that node
is a function application; we use ’@’ because function application is
written using juxtaposition instead of using a special symbol), or a
variable (which will always be a leaf node). Here are some examples:

### AST for <span>$\lambda fx \,.\, f \; (f \; x)$</span>

]]]]

### AST for <span>$\lambda ufx \,.\, f \; ((u \; f) \; x)$</span>

] [x]]]]]]

# Semantics of $\lambda$-Calculus

The semantics tells us how to evaluate an expression to a value. For the
$\lambda$-calculus the only things we have are functions, so expressions
(which are made up of function definitions and function calls) will all
evaluate to functions as their final values. We evaluate a
$\lambda$-calculus expression exactly the way we did when we talked
about evaluating functions using environments. In fact,
$\lambda$-calculus expressions *are* mathematical functions, just using
different syntax. There is one thing that we need to be careful of,
though, that comes from the fact that we’re dealing with *higher-order*
functions using environments. The value of a function definition is not
just the function itself, but also the environment that existed when the
function was defined. These two things together, the function and its
environment, is called a *closure*. Consider the following expression:

$$\begin{gathered}
  ({\ensuremath{\lambda x \,.\, ({\ensuremath{\lambda f \,.\, ({\ensuremath{\lambda x \,.\, f \; 0}}) \; 2)}} \; {\ensuremath{\lambda a \,.\, x}})}} \; 1\end{gathered}$$

]] [2]]] [$\lambda a$ [$x$]] ] ] [1] ]

Each time we call a function (the ’@’ nodes in the AST) we push a new
mapping onto the environment: first $x \mapsto 1$, then $f \mapsto
{\ensuremath{\lambda a \,.\, x}}$, and finally $x \mapsto 2$. Now
consider what happens when we evaluate the function call $f \; 0$. We
know that $f$ is the function <span>$\lambda a \,.\, x$</span>, i.e.,
the function that returns the value of $x$ no matter what argument we
pass in. But what is the value of $x$? It should be 1, the value of $x$
when we defined the function <span>$\lambda a \,.\, x$</span>, but the
current environment when we evaluate the function call maps $x$ to 2
instead. The only way to remember what the value of $x$ was when we
defined the function is to save the environment along with the function,
i.e., a closure. Thus the environment should have $f \mapsto
({\ensuremath{\lambda a \,.\, x}}, [x \mapsto 1])$ instead of just
$f \mapsto
{\ensuremath{\lambda a \,.\, x}}$. Then when we evaluate the call
$f \; 0$, we look up $f$ in the environment to get the closure and
evaluate the closure’s function using the closure’s environment, *not*
the current environment.

# Encoding Higher-Level Abstractions

The $\lambda$-calculus is elegant in its simplicity, but it isn’t very
convenient for actual programming. We can get around this by showing how
to encode higher-level abstractions using the $\lambda$-calculus (e.g.,
numbers, arithmetic, etc) and then building them directly into the
language as a convenience. We’ll end up with the following extended
version of the $\lambda$-calculus:

$$\begin{gathered}
  x \in {\ensuremath{\mathit{Variable}}}
  \qquad
  n \in \mathbb{N}
  \qquad
  b \in {\ensuremath{\mathit{Bool}}}\end{gathered}$$

$$\begin{aligned}
  e \in {\ensuremath{\mathit{Exp}}} &::= n {\ \mid\ }b {\ \mid\ }x {\ \mid\ }{\ensuremath{\lambda x \,.\, e}} {\ \mid\ }e_1\; e_2 
  \\
  &{\ \ \ {\ \mid\ }}(e_1, e_2) {\ \mid\ }{{{\ensuremath{\mbox{\sffamily{\bfseries\small {fst}}}}}}}(e) {\ \mid\ }{{{\ensuremath{\mbox{\sffamily{\bfseries\small {snd}}}}}}}(e)
  \\
  &{\ \ \ {\ \mid\ }}{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inl}}}}}}}(e) {\ \mid\ }{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inr}}}}}}}(e) {\ \mid\ }{{{\ensuremath{\mbox{\sffamily{\bfseries\small {case }}}}}}e_1{{\ensuremath{\mbox{\sffamily{\bfseries\small { of }}}}}}{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inl}}}}}}}\, x {\ensuremath{\Rightarrow}}e_2 {\ \mid\ }{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inr}}}}}}}\, x {\ensuremath{\Rightarrow}}e_3}\end{aligned}$$

Where $(e_1, e_2)$ builds a pair of values;
${{{\ensuremath{\mbox{\sffamily{\bfseries\small {fst}}}}}}}(e)$ takes a
pair and extracts the first value;
${{{\ensuremath{\mbox{\sffamily{\bfseries\small {snd}}}}}}}(e)$ takes a
pair and extracts the second value;
${{{\ensuremath{\mbox{\sffamily{\bfseries\small {inl}}}}}}}(e)$ injects
a value into the left side of a union;
${{{\ensuremath{\mbox{\sffamily{\bfseries\small {inr}}}}}}}(e)$ injects
a value into the right side of a union; and
${{{\ensuremath{\mbox{\sffamily{\bfseries\small {case }}}}}}e_1{{\ensuremath{\mbox{\sffamily{\bfseries\small { of }}}}}}{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inl}}}}}}}\, x {\ensuremath{\Rightarrow}}e_2 {\ \mid\ }{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inr}}}}}}}\, x {\ensuremath{\Rightarrow}}e_3}$
pattern-matches on $e_1$ (which should be a union), evaluating $e_2$ if
the union is on the left side and $e_3$ if it’s on the right side. We’ll
also assume that the language has builtin functions on numbers and
booleans $+, -, \times,
\div, =, <, \land, \lor, \neg$.

## Arithmetic

We can encode the natural numbers using $\lambda$-calculus in a number
of ways, but here is a very simple way that lends itself to defining
arithmetic:

$$\begin{aligned}
  0 \in \mathbb{N} &\equiv {\ensuremath{\lambda sz \,.\, z}}
  \\
  n \in \mathbb{N} &\equiv {\ensuremath{\lambda sz \,.\, s^n\;z}}\end{aligned}$$

Where $s^n \; z$ means to apply function $s$ to $z$ a total of $n$
times, e.g., $s^3 \; z = s \; (s \; (s \; z))$. In this encoding, 0 is a
function that takes two arguments and returns the second one, and any
natural number $n$ is the function that takes two arguments and applies
the first one to the second one $n$ times. We can then define arithmetic
on natural numbers as follows:

$$\begin{aligned}
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {succ}}}}}} &\equiv {\ensuremath{\lambda nsz \,.\, s \; (n \; s \; z)}}
  \\
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {add}}}}}} &\equiv {\ensuremath{\lambda mn \,.\, m \; {{\ensuremath{\mbox{\sffamily{\bfseries\small {succ}}}}}} \; n}}
  \\
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {mul}}}}}} &\equiv {\ensuremath{\lambda mn \,.\, m \; ({{\ensuremath{\mbox{\sffamily{\bfseries\small {add}}}}}} \; n) \; 0}}\end{aligned}$$

The successor function
<span><span>$\mbox{\sffamily{\bfseries\small {succ}}}$</span></span>
takes a number and adds 1 to it. The addition function
<span><span>$\mbox{\sffamily{\bfseries\small {add}}}$</span></span>
takes two numbers and returns the sum. The multiplication function
<span><span>$\mbox{\sffamily{\bfseries\small {mul}}}$</span></span>
takes two numbers and returns the product. These definitions work as we
would expect arithmetic to work because of the way that we have encoded
numbers as functions. We could encode subtraction, division, integers,
and more in a similar way.

Historical sidenote: The successor, addition, and multiplication
functions were simple to encode, but not all encodings are as obvious.
Church and his students spent a long time trying to figure out how to
encode the predecessor function (the function that substracts 1 from a
number), which is needed to define subtraction and division. Finally,
Church’s student Kleene went to the dentist for an operation, and as he
was being anesthetized with laughing gas he had a flash of inspiration
and figured out the solution.

## Booleans

Booleans are simple to encode:

$$\begin{aligned}
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {true}}}}}} &\equiv {\ensuremath{\lambda tf \,.\, t}}
  \\
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {false}}}}}} &\equiv {\ensuremath{\lambda tf \,.\, f}}\end{aligned}$$

The value
<span><span>$\mbox{\sffamily{\bfseries\small {true}}}$</span></span> is
a function that takes two arguments and returns the first one; the value
<span><span>$\mbox{\sffamily{\bfseries\small {false}}}$</span></span> is
a function that takes two arguments and returns the second one. We can
use these encodings to define the standard boolean operators:

$$\begin{aligned}
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {and}}}}}} &\equiv {\ensuremath{\lambda ab \,.\, a \; b \; {{\ensuremath{\mbox{\sffamily{\bfseries\small {false}}}}}}}}
  \\
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {or}}}}}} &\equiv {\ensuremath{\lambda ab \,.\, a \; {{\ensuremath{\mbox{\sffamily{\bfseries\small {true}}}}}} \; b}}
  \\
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {not}}}}}} &\equiv {\ensuremath{\lambda a \,.\, a \; {{\ensuremath{\mbox{\sffamily{\bfseries\small {false}}}}}} \; {{\ensuremath{\mbox{\sffamily{\bfseries\small {true}}}}}}}}\end{aligned}$$

## Pairs

So far we’ve encoded primitive values (numbers and booleans) and
operations on those primitive values. Now we’ll show how to encode data
structures, specifically pairs of values:

$$\begin{aligned}
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {pair}}}}}} &\equiv {\ensuremath{\lambda xyb \,.\, b \; x \; y}}
  \\
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {fst}}}}}} &\equiv {\ensuremath{\lambda p \,.\, p \; {{\ensuremath{\mbox{\sffamily{\bfseries\small {true}}}}}}}}
  \\
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {snd}}}}}} &\equiv {\ensuremath{\lambda p \,.\, p \; {{\ensuremath{\mbox{\sffamily{\bfseries\small {false}}}}}}}}\end{aligned}$$

The pair constructor is a nested function definition that takes three
arguments. Giving it two arguments (the values to store in the pair)
results in a function that takes a single argument and applies it to the
original two arguments (i.e., $x$ and $y$). The
<span><span>$\mbox{\sffamily{\bfseries\small {fst}}}$</span></span>
function takes a pair as an argument and applies it to the function
<span><span>$\mbox{\sffamily{\bfseries\small {true}}}$</span></span>,
while the
<span><span>$\mbox{\sffamily{\bfseries\small {snd}}}$</span></span>
function does the same except applies it to
<span><span>$\mbox{\sffamily{\bfseries\small {false}}}$</span></span>.
Recall that
<span><span>$\mbox{\sffamily{\bfseries\small {true}}}$</span></span> is
a function that takes two arguments and returns the first one, while
<span><span>$\mbox{\sffamily{\bfseries\small {false}}}$</span></span> is
a function that takes two arguments and returns the second. Thus,
<span><span>$\mbox{\sffamily{\bfseries\small {fst}}}$</span></span> will
return the first value given to
<span><span>$\mbox{\sffamily{\bfseries\small {pair}}}$</span></span>
while
<span><span>$\mbox{\sffamily{\bfseries\small {snd}}}$</span></span> will
return the second value given to
<span><span>$\mbox{\sffamily{\bfseries\small {pair}}}$</span></span>.

## Unions

The second data structure we’ll encode is unions of two values. A union
is a value that is tagged as being either a *left* value or a *right*
value; what “left” and “right” mean is up to how the programmer
interprets them. For example, we could return a union value as the
result of a function where a “left” value means the function had an
error and the value is an error message, while a “right” value means the
function operated correctly and the value is the function’s result. We
create a “left” value using the
<span><span>$\mbox{\sffamily{\bfseries\small {inl}}}$</span></span>
(inject left) function, and a “right” value using the
<span><span>$\mbox{\sffamily{\bfseries\small {inr}}}$</span></span>
(inject right) function. Think of
<span><span>$\mbox{\sffamily{\bfseries\small {inl}}}$</span></span> and
<span><span>$\mbox{\sffamily{\bfseries\small {inr}}}$</span></span> as
creating a pair where the first element is
<span><span>$\mbox{\sffamily{\bfseries\small {true}}}$</span></span> or
<span><span>$\mbox{\sffamily{\bfseries\small {false}}}$</span></span>
(meaning left or right) and the second element is the actual value:

$$\begin{aligned}
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {inl}}}}}}(e) &\equiv ({{\ensuremath{\mbox{\sffamily{\bfseries\small {true}}}}}}, e)
  \\
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {inr}}}}}}(e) &\equiv ({{\ensuremath{\mbox{\sffamily{\bfseries\small {false}}}}}}, e)\end{aligned}$$

We can pattern-match on unions to determine whether they are “left” or
“right” values based on how they are tagged; the
<span><span>$\mbox{\sffamily{\bfseries\small {case}}}$</span></span>
statement takes a union value and two cases: one is an expression to
evaluate if the union is a “left” value, the other is an expression to
evaluate if the union is a “right” value:

$$\begin{gathered}
  {{{\ensuremath{\mbox{\sffamily{\bfseries\small {case }}}}}}e_1{{\ensuremath{\mbox{\sffamily{\bfseries\small { of }}}}}}{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inl}}}}}}}\, x {\ensuremath{\Rightarrow}}e_2 {\ \mid\ }{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inr}}}}}}}\, x {\ensuremath{\Rightarrow}}e_3} \;\equiv\; {{\ensuremath{\mbox{\sffamily{\bfseries\small {fst}}}}}}(e_1) \; (({\ensuremath{\lambda x \,.\, e_2}}) \;
  {{\ensuremath{\mbox{\sffamily{\bfseries\small {snd}}}}}}(e)) \; (({\ensuremath{\lambda x \,.\, e_3}}) \; {{\ensuremath{\mbox{\sffamily{\bfseries\small {snd}}}}}}(e))\end{gathered}$$

${{\ensuremath{\mbox{\sffamily{\bfseries\small {fst}}}}}}(e_1)$ extracts
the first element of the union pair, which will be either
<span><span>$\mbox{\sffamily{\bfseries\small {true}}}$</span></span> or
<span><span>$\mbox{\sffamily{\bfseries\small {false}}}$</span></span>
(recall that they are functions that take two arguments and return
either the first or second one, respectively). The two arguments we pass
are the cases for left and right. The first one calls
<span>$\lambda x \,.\, e_2$</span> passing in the second element of the
pair (the actual value of the union), and the second one does the same
except it calls <span>$\lambda x \,.\, e_3$</span>. So if the union is a
“left” value then
<span><span>$\mbox{\sffamily{\bfseries\small {case}}}$</span></span>
will return the result of evaluating $e_2$ on the union’s value, and if
the union is a “right” value then
<span><span>$\mbox{\sffamily{\bfseries\small {case}}}$</span></span>
will return the result of evaluating $e_3$ on the union’s value

## Example Expressions

-   (<span>$\lambda x \,.\, x+x$</span>)
    ((<span>$\lambda y \,.\, y+1$</span>) 6)

-   ((<span>$\lambda fgx \,.\, g \; (f \; x)$</span>)
    (<span>$\lambda y \,.\, y+1$</span>)
    (<span>$\lambda z \,.\, z*z$</span>)) 2

-   <span><span>$\mbox{\sffamily{\bfseries\small {snd}}}$</span></span>((<span>$\lambda x \,.\, ({{\ensuremath{\mbox{\sffamily{\bfseries\small {snd}}}}}}(x), {{\ensuremath{\mbox{\sffamily{\bfseries\small {fst}}}}}}(x))$</span>)
    (1, 2))

-   (<span>$\lambda z \,.\, {{{\ensuremath{\mbox{\sffamily{\bfseries\small {case }}}}}}z{{\ensuremath{\mbox{\sffamily{\bfseries\small { of }}}}}}{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inl}}}}}}}\, x {\ensuremath{\Rightarrow}}x+1 {\ \mid\ }{{{\ensuremath{\mbox{\sffamily{\bfseries\small {inr}}}}}}}\, x {\ensuremath{\Rightarrow}}({{\ensuremath{\mbox{\sffamily{\bfseries\small {fst}}}}}}(x)+1, {{\ensuremath{\mbox{\sffamily{\bfseries\small {snd}}}}}}(x)+1)}$</span>)
    <span><span>$\mbox{\sffamily{\bfseries\small {inr}}}$</span></span>((<span>$\lambda w \,.\, (w, w)$</span>)
    1)


