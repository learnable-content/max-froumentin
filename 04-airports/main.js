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


const draw = (group, latScale, lonScale, colScale) =>
  data => 
    group
      .selectAll('circle')
      .data(data)
      .enter()
        .append('circle')
          .attr('cx', d => lon(parseFloat(d.longitude)))
          .attr('cy', d => lat(parseFloat(d.latitude)))
          .attr('fill', d => color(parseInt(d.altitude)))
          .attr('r', 2)
          .append('title')
          .text(d => `${d.name} (${d.iata_faa}), ${d.country}`);

d3.csv('airports.csv', draw(myGroup, lat, lon, color));
