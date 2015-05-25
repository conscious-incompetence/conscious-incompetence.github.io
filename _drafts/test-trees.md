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
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<script src="/js/lambda-editor.js"></script>
<script src="/js/lambda-parser.js"></script>
<script src="/js/lambda-trees.js"></script>

<div ng-app="lambdaTreesApp" ng-controller="VisController">
  <div id="text-entry">
          <input id="expression" 
                 type="text" 
                 ng-model="expression"
                 ng-change="displayExpression();">
            
          </input>
        </div>

  <div id="messages" role="alert" ng-show="errorMessage">
      [[{ errorMessage }]]
  </div>

  <div id="tree-vis">
    
  </div>
</div>

<div id="tree1">
<script>
  drawLambdaExpression('#tree1', "(λx.(λf.(λq.(f 0) 2) λa.x) 1)");
</script>
</div>
