const myGroup = d3.select('#chart')
  .append('g')
    .attr('class', 'myGroup');


const lon = d3.scaleLinear()
  .domain([-180, 180])
  .range([0, 800]);


const lat = d3.scaleLinear()
  .domain([90, -90])
  .range([0, 400]);


const color = d3.scaleLinear()
  .domain([0,10000])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);


/* === ZOOM ================================== */


const zoomed = (g) =>
  () => g.attr("transform", d3.event.transform);


d3.select('#chart')
  .call(d3.zoom()
    .scaleExtent([1, 20])
    .on("zoom", zoomed(myGroup)));


/* ==== ANIMATION ============================ */


const animate = group =>
  () => {
    var t = d3.transition()
      .duration(10000)
      .ease(d3.easeQuadIn);

    return group
      .selectAll('circle')
      .transition(t)
      .attr('cx', d=>Math.random()*800)
      .attr('cy', d=>Math.random()*500);
  };


/* ================================ */

const draw = (group, latScale, lonScale, colScale) =>
  data => {
    group
      .selectAll('circle')
      .data(data)
      .enter()
        .append('circle')
          .attr('cx', d => lon(d.longitude))
          .attr('cy', d => lat(d.latitude))
          .attr('fill', d => color(d.altitude))
          .attr('r', 1)
          .append('title')
            .text(d => `${d.name} (${d.iata_faa}), ${d.country}`);

    d3.select('#svg').on('click', animate(group));

};


d3.csv('airports.csv', draw(myGroup, lat, lon, color));
