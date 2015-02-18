var maxIndex = 46;
var maxNormalized = 34.4595960766;

var map = L.map('map').setView([37.864058, -122.267218], 14);

L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    opacity: 0.5,
    detectRetina: true,
    minZoom: 12,
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> | Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
})
.addTo(map);



var milvia = [[37.856425, -122.269043],[37.871748, -122.270741],[37.871968, -122.270602],[37.885340, -122.272265],[37.885704, -122.272887],[37.886127, -122.273144],[37.886364, -122.273187],[37.886618, -122.273756]]
var channing = [[37.868054, -122.249985],[37.862868, -122.290098],[37.861318, -122.297834]]
var russell = [[37.859034, -122.243957],[37.858492, -122.253162],[37.856146, -122.271305],[37.853598, -122.287135],[37.854378, -122.287386],[37.853929, -122.289682],[37.878292, -122.297508],[37.878064, -122.298613],[37.883159, -122.300261]]
var virginia = [[37.872103, -122.300213],[37.873458, -122.293540],[37.874862, -122.282540],[37.877025, -122.265642],[37.877423, -122.265556],[
37.877753, -122.264987],[37.877652, -122.264311],[37.877338, -122.264247],[37.878267, -122.257090]]
var king = [[37.855646, -122.274456],[37.852088, -122.274059],[37.848462, -122.273609],[37.846132, -122.273072]]
var california = [[37.855247, -122.277241],[37.856330, -122.277424],[37.858101, -122.277821],[37.862514, -122.278701],[37.863158, -122.279012],[37.872415, -122.279967],[37.872915, -122.280053],[37.878885, -122.280696],[37.879453, -122.280825],[37.879664, -122.280932],[37.879715, -122.280825],[37.879715, -122.280825],[37.881255, -122.281778],[37.881670, -122.281918]]
var hillegass = [[37.865363, -122.256502],[37.861651, -122.256162],[37.861659, -122.255980],[37.858177, -122.255658],[37.857914, -122.255765],[37.856728, -122.255497],[37.856423, -122.255400],[37.856152, -122.255143],[37.855821, -122.255036],[37.854136, -122.254875],[37.853661, -122.254767]]

var routes = [milvia,channing,russell,virginia,king,california,hillegass]

for(var i = 0; i < routes.length; i++) {
    L.polyline(routes[i], {
    color: 'blue',
    clickable: false,
    weight: 3,
    opacity: 0.4

}).addTo(map);
}

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

var blvd = L.control({position: 'bottomright'});

blvd.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info blvd')
    
    div.innerHTML = '<i style="background: blue"></i> Bicycle boulevard';

    return div
};

blvd.addTo(map);

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