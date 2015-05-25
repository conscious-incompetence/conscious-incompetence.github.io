 
<!-- Based on: https://leanpub.com/D3-Tips-and-Tricks/read -->

// ************** Generate the tree diagram  *****************

var depthSep = 50;  // the number of pixels between tree levels

/**
 * [height most number of nodes from root to a leaf, inclusive]
 */
function treeHeight(tree) {
  if (!tree) {
    return 0;
  } else if (!tree['children']) {
    return 1;
  } else {
    var childHeights = tree['children'].map(treeHeight);
    return 1 + Math.max.apply(Math, childHeights);
  }
}

var margin = {top: 20, right: 120, bottom: 20, left: 120};
  
var diagonal = d3.svg.diagonal()
  .projection(function(d) { return [d.x, d.y]; });

function drawTree(elem, root) {

  // compute sizes
  var svgWidth = parseInt(d3.select(elem).style('width'), 10);
  var svgHeight = treeHeight(root) * depthSep;

  // remove any previous tree visualization
  d3.select(elem).select('#tree-svg').remove();

  // don't display an empty tree
  if (root === null) {
    return;
  }

  // add a component for the tree
  var svg = d3.select(elem).append("svg")
    .attr("id", "tree-svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // compute the new tree layout
  var tree = d3.layout.tree()
    .size([svgHeight, svgWidth]);

  var nodes = tree.nodes(root).reverse();
  var links = tree.links(nodes);

  // compute depth of each node
  nodes.forEach(function(d) { d.y = d.depth * depthSep; });

  // declare the nodes
  var i = 0;
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // draw the nodes
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y + ")"; });

  nodeEnter.append("path")
    .style("fill", "white")
    .attr("d", d3.svg.symbol().size(400).type("square"));

  nodeEnter.append("text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function(d) { return d.name; })
    .style("fill-opacity", 1);

  // declare the links
  var link = svg.selectAll("path.link")
    .data(links, function(d) { return d.target.id; });

  // draw the links
  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("d", diagonal);

}

function drawLambdaExpression(elem, expr) {
  drawTree(elem, parse(expr));
}
