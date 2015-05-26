Write a lambda expression in the text box below to see its AST. The lambda
expression needs to have the following syntax:

  + **variable**: Variables can be one or more characters 
  (e.g., `x` or `myValue`).
  + **function abstraction**: For lambda, use `\` or `λ`. A function can have
  only one variable. If you'd like more than one variable, you can declare
  multiple functions (e.g., `\x . \y . x`).
  + **function application** Surround function applications with parentheses,
  like so: `\f.\x.(f x)`.

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