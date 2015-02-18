var maxIndex = 46;
var maxNormalized = 34.4595960766;

var map = L.map('map').setView([37.8612545, -122.2671221], 14);

L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    opacity: 0.5,
    detectRetina: true,
    minZoom: 12,
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> | Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
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

var Toggle = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'toggle');
        container.innerHTML = '<div class="btn-group" role="group"><button id="btn1" class="btn btn-sm btn-default active" onclick="changeDisplay(0)"><b>Absolute</b></button> <button id="btn2" class="btn btn-sm btn-default" onclick="changeDisplay(1)"><b>Rate</b></button></div>';
        return container;
    }
});

var toggle = new Toggle();
toggle.addTo(map);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (options) {
    this._div.innerHTML = (options ?
         '<b>' + options.streets + '</b> <br /> <b>' + options.index + '</b> absolute exposure index <br /><b>' + options.normalized + '</b> exposure rate index <br /><b>' + options.bikes + '</b> bike accidents <br /><b>' + options.total + '</b> total accidents'
        : '<b>Hover over an intersection</b>');
};

info.addTo(map);

var circle = new Array();

for(var i = 0; i < incidents.length; i++) {
    bikes = incidents[i].bikes;
    total = incidents[i].total;
    index = incidents[i].index;

    quotient = (index/maxIndex * 100).toFixed(1);
    normalized = ((incidents[i].normalized/maxNormalized) * 100).toFixed(1)
    
    coordinates = incidents[i].coordinates;
    
    var color = colorScale(quotient);
    var streets = incidents[i].streets;
    
    circle[i] = new customCircle([coordinates[0], coordinates[1]], radius(quotient), {
        stroke: false,
        fillColor: color,
        fillOpacity: 0.8,
         
        index: quotient,
        normalized: normalized,
        bikes: bikes,
        total: total,
        streets: streets,
    })
    .on('mouseover', function(e) {
        info.update(e.target.options);})
    .on('click', function(e) {
        info.update(e.target.options);})
    .addTo(map)
};

function changeDisplay(type) {
    for(var i = 0; i < circle.length; i++) {

        if (type == 0) {
            $('#btn1').addClass('active');
            $('#btn2').removeClass('active');
            index = circle[i].options.index;
            rad = radius(index)
            color = colorScale(index)
        }

        else {
            $('#btn2').addClass('active');
            $('#btn1').removeClass('active');
            normalized = circle[i].options.normalized;
            rad = radius(normalized)
            color = colorScale(normalized)
        }


        circle[i].setRadius(rad);
        circle[i].setStyle({fillColor: color});
    }
}

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 20, 40, 60, 80, 100],
        labels = [];
    
    div.innerHTML = "<b>Index scale</b><br />";

    for (var i = 0; i < 5; i++) {
        div.innerHTML +=
            '<i style="background:' + colorScale(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);