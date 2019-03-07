var dataP = d3.csv("data.csv");

var drawChart = function(data)
{
  var width = 400;
  var height = 200;
  var barWidth = width/data.length;

  var svg = d3.select("svg")
              .attr("width", width)
              .attr("height",height);
  svg.selectAll("rect")
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

  svg.selectAll("text")
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

  var legend = svg.append("g")
    .attr("class","legend")
    .attr("x", 10)
    .attr("y", 10)
    .style("font-size","12px")
    .attr("width", 50)
    .attr("height", 20)

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

  return  40*i;
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

  return (40*i) +10;
}
)
.attr("font-family", "sans-serif")
.attr("font-size", "15px")

}

dataP.then(function(data)
{
  drawChart(data);
console.log("data",data);
},
function(err)
{
console.log(err);

}
)
