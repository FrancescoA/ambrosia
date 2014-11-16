ambrosia.controller('HistoryCtrl', function($scope, userService, $window) {
	console.log("HistoryCtrl");

	$scope.history = userService.history;


	$scope.isAnalyze = false;


	var historySum = function(history) {
		var protein = {name: 'protein', value: 0};
		var carbs = {name: 'carbs', value: 0};
		var fat = {name: 'fat', value: 0};


		for(var i = 0 ; i < history.length; i++){
			var item = history[i];
			protein.value += item.nf_protein;
			carbs.value += item.nf_total_carbohydrate;
			fat.value += item.nf_total_fat;
		}
		return [protein,carbs,fat]
	}

	console.log(historySum(userService.history));


	var width = $window.innerWidth,
    height = 500,
    radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .domain(["protein", "carbs", "fat"])
    .range(["#98abc5", "#d0743c", "#ff8c00"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.value; });

var svg = d3.select("#chart").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var data_temp = historySum($scope.history);
console.log(data_temp);
//var data_temp = [{value: 100, name: "Protein"}, {value: 80, name: "Fat"}, {value: 60, name: "Cab"}];

d3.csv("", function(error, data) {
  data = data_temp;
  data_temp.forEach(function(d) {
    d.value = +d.value;
    console.log(d.value);
    console.log(color(d.name));
  });

  var g = svg.selectAll(".arc")
      .data(pie(data_temp))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.name); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .style("font-size", "250%")
      .text(function(d) { return d.data.name; });
});

})