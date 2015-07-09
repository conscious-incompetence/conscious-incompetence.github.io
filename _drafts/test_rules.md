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

{% include derivation.html data=site.data.natural_deduction.I %}

{{ %column_break }}

#### __Elimination Rules__

{% include derivation.html data=site.data.natural_deduction.E1 %}
{% include derivation.html data=site.data.natural_deduction.E2 %}

{{ %end_two_column }}

## Derivation trees

{% include derivation.html data=site.data.natural_deduction.proof1 %}
