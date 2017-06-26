var myGroup = d3.select('#chart')
  .append('g')
  .attr('class', 'myGroup');

/*
myGroup
  .append('circle')
  .attr('cx', 200)
  .attr('cy', 250)
  .attr('r', 50)
  .on('click', function() {
    myGroup.select('rect').attr('fill', 'blue');
  });


myGroup
  .append('rect')
  .attr('x', 30)
  .attr('y', 40)
  .attr('width',200)
  .attr('height', 200);
*/

var scale = d3.scaleLinear()
  .domain([-100, 100])
  .range([0, 400]);

var axis = d3.axisBottom(scale)
  .ticks(10);

d3.select('#chart')
  .append('g')
    .attr('transform', 'translate(50,400)')
    .call(axis);


var scaleY = d3.scaleLinear()
  .domain([100, 0])
  .range([0, 300]);

var axisY = d3.axisLeft(scaleY)
  .ticks(10);

d3.select('#chart')
  .append('g')
    .attr('transform', 'translate(50, 100)')
    .call(axisY);

myGroup
  .append('rect')
    .attr('x', 50)
    .attr('y', 250)
    .attr('width',100)
    .attr('height',150);

myGroup
  .append('rect')
    .attr('x', 150)
    .attr('y', 200)
    .attr('width',100)
    .attr('height',200);
