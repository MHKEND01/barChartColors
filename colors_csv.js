//var dataP = d3.json("colors.json");
var dataP = d3.csv("data.csv").then(function(data) {
  drawChart(data);
});

var drawChart = function(data)
{
  var width = 500;
  var height = 300;
  var barWidth = width/data.length;

  var graph_svg = d3.select(".graph")
              .attr("width", width)
              .attr("height",height);
  graph_svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function(d,i)
    {
      return i * barWidth;

    })
    .attr("y",function(d)
    {
    return height - d.num*10;
  }
  )
  .attr("width", barWidth)
  .attr("height", function(d){return d.num*10})
  .attr("fill",function(d){return d.color;})

  graph_svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function(d){return d.num})
      .attr("x", function(d,i)
    {
      return (i * barWidth) + (barWidth/2);

    })
    .attr("y",function(d)
    {

    return (height - d.num*10) +20;
  }
  )
  .attr("font-family", "sans-serif")
  .attr("font-size", "20px")
  .attr("fill", "white")

  //Legend settings
  var legend = d3.select(".legend")
    .attr("width", width/2)
    .attr("height", height)

  var legend = d3.select(".legend").append("g")
    .attr("x", 10)
    .attr("y", 10)
    .style("font-size","12px")

legend.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d,i)
  {
    return 5;

  })
  .attr("y",function(d,i)
  {

  return  20*i;
})
.attr("width", 20)
.attr("height", 10)
.attr("fill",function(d){return d.color;})

legend.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){return d.color})
    .attr("x", function(d,i)
  {
    return 40;

  })
  .attr("y",function(d,i)
  {

  return (20*i) +10;
}
)
.attr("font-family", "sans-serif")
.attr("font-size", "15px")
}