var maxIndex = 55;

var map = L.map('map').setView([37.8612545, -122.2671221], 14);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	opacity: 0.5,
    detectRetina: true,
    minZoom: 12,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
.addTo(map);



var radius = d3.scale.linear()
    .domain([0,100])
    .range([10,80]);

var colorScale = d3.scale.quantize()
    .domain([0,100])
.range(['rgb(255,255,178)','rgb(254,204,92)','rgb(253,141,60)','rgb(240,59,32)','rgb(189,0,38)']);

customCircle = L.Circle.extend({
   options: { 
      total: 0,
      index: 0,
        streets: ''
   }
});

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (options) {
    this._div.innerHTML = (options ?
         '<b>' + options.streets + '</b> <br /> <b>' + options.index + '</b> danger index <br /><b>' + options.total + '</b> total accidents'
        : '<b>Hover over an intersection</b>');
};

info.addTo(map);

for(var i = 0; i < incidents.length; i++) {
    total = incidents[i].count;
    index = incidents[i].danger;
    quotient = (index/55 * 100).toFixed(1);
    
    coordinates = incidents[i].coordinates;
    
    var color = colorScale(quotient);
    var streets = incidents[i].streets;
    
     new customCircle([coordinates[0], coordinates[1]], radius(quotient), {
        stroke: false,
        fillColor: color,
        fillOpacity: 0.8,
         
        index: quotient,
        total: total,
        streets: streets
    })
    /*.bindPopup(streets + '</br> <strong>' + quotient + '</strong> danger index'+ '</br> <strong>' + total + '</strong>' + ' collisions')*/
    .on('mouseover', function(e) {
        info.update(e.target.options);})
    .on('click', function(e) {
        info.update(e.target.options);})
    .addTo(map)
};


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 20, 40, 60, 80, 100],
        labels = [];
    
    div.innerHTML = "<b>Danger index</b><br />";

    for (var i = 0; i < 5; i++) {
        div.innerHTML +=
            '<i style="background:' + colorScale(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);