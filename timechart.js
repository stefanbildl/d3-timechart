/*import {scaleTime, scaleLinear} from 'd3-scale';
import {axisBottom, axisLeft} from 'd3-axis';
import {select} from 'd3-selection';
import {extent} from 'd3-array';
*/

var data =
[
  {
    "start": Date.parse("2018-01-11 01:00"),
    "end": Date.parse("2018-01-11 03:00"),
    "color": "blue",
    "description": "The first"
  },
  {
    "start": Date.parse("2018-01-11 08:00"),
    "end": Date.parse("2018-01-11 14:00"),
    "color": "red",
    "description": "The second"
  },
];



var svg = d3.select("body")
    .append("svg")
    .attr("width", 900)
    .attr("height", 400);

var scale = d3.scaleTime()
  .domain([Date.parse("2018-01-11 00:00"), Date.parse("2018-01-11 23:59")])
  .range([100, 800]);

var axis = d3.axisBottom(scale)


svg.
  selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) {return scale(d.start);})
    .attr("y", 50)
    .attr("width", function(d) {return scale(d.end) - scale(d.start);})
    .attr("height", 40)
    .style("fill", function(d) {return d.color;})
    .on("mouseover", function(d, i) {
      svg
        .append("text")
        .attr("id", "text" + i)
        .attr("x",  scale(d.start + (d.end - d.start)/2))
        .attr("y", 90)
        .style("text-anchor", "middle")
        .style("font-family", "\"Times New Roman\", Times, serif")
        .text(function() {return d.description;})
    })
    .on("mouseout", function(d, i) {
      d3.select("#text"+i)
        .remove();
    });

svg.append("g")
    .attr("transform", "translate(0, 100)")
    .call(axis);
