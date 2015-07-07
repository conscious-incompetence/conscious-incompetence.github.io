---
layout: post
author: "Ben Wiedermann"
title:  "Test rules"
date:   2015-06-27
categories: "logic"
---

<!--
    ISSUES:

    - put introduction and elimination rules into columns
    - provide names for inference rules in the proper place
    - figure out derivation trees
-->


{% include macros.html %}
{% include variables.md %}


### Conjunction ($\land$)

{{ %two_column }}

#### __Introduction Rule__ 

<div class="derivation" markdown="1">
  
</div>

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

## Heading

<div class="derivation">
  <div class="infrule">
  <div class="name">$\land\text{I}$</div>

    <ul class="premises">
      <li>$\Gamma \vdash A$</li>
      <li>$\Gamma \vdash B$</li>
    </ul>

    <ul class="conclusions">
      <li>$\Gamma \vdash A \land B$</li>
    </ul>

  </div>
</div>

With markdown

<div class="derivation" markdown="1">
   + 
      + $\sigma[x] \leftarrow 1$
      {: .premises}
   
      + $\sigma$
      {: conclusions}

   + 2
   {: .premises}

   + 3
   + 4
   {: .conclusions}
</div>

Trying another way

<div class="derivation" markdown="1">
   + $\Gamma \vdash A \lor B$
   + $\Gamma,A \vdash C$
   + $\Gamma,B \vdash C$
   {: .premises}

   + $\Gamma \vdash C$
   {: .conclusions}
</div>
