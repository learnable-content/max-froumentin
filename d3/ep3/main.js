var myGroup = d3.select('#chart')
  .append('g')
  .attr('class', 'myGroup');


function draw(data) {

  // Data join definition
  var myJoin = myGroup
    .selectAll('rect')
    .data(data);

  // Enter section
  // describing how new data is drawn
  myJoin
    .enter()
    .append('rect')
      .attr('x', (d,i) => 50+50*i)
      .attr('y', (d,i) => 400-5*d)
      .attr('width', 50)
      .attr('height', d => 5*d);

  // Update section
  // describing how existing data changes
  myJoin
    .attr('fill', 'green');

  // Exit section
  // describing how removed data is drawn
  myJoin
    .exit()
    .transition().attr('width', '0')
    .remove();
}


// Visualise a data array
draw([23, 1, 49, 3, 39, 23, 55, 3, 55, 28, 17, 3]);

// Visualise an updated data array (some data removed)
draw([23, 1, 49, 3, 39, 23]);
