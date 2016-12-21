var myData = [ 23, 1, 49, 3, 39, 23, 55, 3, 55, 28, 17, 3 ];
var myData2 = [ 23, 1, 49, 3, 39, 23, 55 ];


var myGroup = d3.select('#chart')
  .append('g')
    .attr('class', 'myGroup');


function draw(data) {

  var myJoin =
    myGroup
    .selectAll('rect')
    .data(data);

  myJoin
    .enter()
      .append('rect')
        .attr('x', (d, i) => 50+50*i)
        .attr('y', d => 400-5*d)
        .attr('width', 50)
        .attr('height', d => 5*d);

  myJoin
    .exit()
    .transition().attr('width', 0)
    .remove();

  myJoin
    .attr('fill', 'green');


}

draw(myData);
draw(myData2);
