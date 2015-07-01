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

## Heading

<div class="derivation">
  <div class="infrule" name="Modus Ponens">

    <ul class="premises">
      <li>
        <div class="infrule">
          <ul class="premises">
            <li>sub 1</li>
          </ul>
          <ul class="conclusions">
            <li>Premise 1</li>
          </ul>
        </div>
      </li>
      <li>Premise 2</li>
    </ul>

    <ul class="conclusions">
      <li>Conclusion</li>
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
