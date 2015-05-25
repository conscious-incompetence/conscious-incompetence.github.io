---
layout: post
author: "Ben Wiedermann"
title:  "Tree test"
date:   2015-05-20 22:12:31
---

<!-- Based on: https://leanpub.com/D3-Tips-and-Tricks/read -->
<style>

  .node square {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 3px;
  }

  .node text { 
    font: 14px sans-serif; 
    //font-weight: bold;
    fill: cornflowerblue;
  }

  .link {
    fill: none;
    stroke: peachpuff;
    stroke-width: 2px;
  }
  
</style>
 
<!-- load the d3.js library --> 
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="/js/lambda-parser.js"></script>
<script src="/js/lambda-trees.js"></script>


<script>
  drawLambdaExpression("(λx.(λf.(λq.(f 0) 2) λa.x) 1)");
</script>