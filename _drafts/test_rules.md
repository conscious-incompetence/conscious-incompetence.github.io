---
layout: post
author: "Ben Wiedermann"
title:  "Test rules"
date:   2015-06-27
categories: "logic"
---

{% include macros.html %}
{% include variables.md %}

## Conjunction ($\land$)

{{ %two_column }}

#### __Introduction Rule__

<div class="derivation">
  
  <div class="infrule">
    <div class="name">$\land\text{I}$</div>

    <div class="logic">
      <ul class="premise">
        <li>$\Gamma \vdash A$</li>
        <li>$\Gamma \vdash B$</li>
      </ul>

      <ul class="conclusion">
        <li>$\Gamma \vdash A \land B$</li>
      </ul>
    </div>

  </div>

</div>

{{ %column_break }}

#### __Elimination Rules__

<div class="derivation">
  
  <div class="infrule">
    <div class="name">$\land\text{E}_1$</div>

    <div class="logic">
      <ul class="premise">
        <li>$\Gamma \vdash A \land B$</li>
      </ul>

      <ul class="conclusion">
        <li>$\Gamma \vdash A$</li>
      </ul>
    </div>

  </div>

</div>

<div class="derivation">
  
  <div class="infrule">
    <div class="name">$\land\text{E}_2$</div>

    <div class="logic">
      <ul class="premise">
        <li>$\Gamma \vdash A \land B$</li>
      </ul>

      <ul class="conclusion">
        <li>$\Gamma \vdash B$</li>
      </ul>
    </div>

  </div>

</div>

{{ %end_two_column }}

## Derivation trees

<div class="derivation">
  
  <div class="infrule">
    <div class="name">$\land\text{E}_2$</div>

    <div class="logic">
      <ul class="premise">
        <li><div class="infrule">
          <div class="name">$\land\text{I}$</div>

          <div class="logic">
            <ul class="premise">
              <li>$\Gamma \vdash A$</li>
              <li>$\Gamma \vdash B$</li>
            </ul>

            <ul class="conclusion">
              <li>$\Gamma \vdash A \land B$</li>
            </ul>
          </div>

        </div></li>
      </ul>

      <ul class="conclusion">
        <li>$\Gamma \vdash B$</li>
      </ul>
    </div>

  </div>

</div>
