var map = L.map('map').setView([37.8693776, -122.2680349], 15);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	opacity: 0.7,
    detectRetina: true,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
.addTo(map);

var radius = d3.scale.linear()
    .domain([10,43])
    .range([10,100]);

var colorScale = d3.scale.linear()
    .domain([10,26,43])
    .range(['#ffeda0', '#feb24c','#f03b20']);


for(var i = 0; i < incidents.length; i++) {
    total = incidents[i].count;
    index = incidents[i].danger;
    quotient = index/55 * 100;
    pct = quotient.toFixed(1);
    coordinates = incidents[i].coordinates;
    
    var color = colorScale(index);
    var streets = incidents[i].streets;
    
    L.circle([coordinates[0], coordinates[1]], radius(index), {
        color: color,
        fillColor: color,
        fillOpacity: 0.8
    })
    .bindPopup(streets + '</br> <strong>' + pct + '</strong> danger index'+ '</br> <strong>' + total + '</strong>' + ' collisions')
    .addTo(map)
}