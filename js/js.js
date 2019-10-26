import {secteur1,secteur2,secteur3,secteur4,secteur5,secteur6,secteur7,secteur8,secteur9,secteur10,secteur11,secteur12,secteur13,secteur14,secteur15,secteur16,secteur17,secteur18,secteur19,secteur20,secteur21,secteur22,secteur23,secteur24,secteur25,secteur26,secteur27,secteur28,secteur29,secteur30,secteur31,secteur32} from "./secteurs.js"
import {ville} from "./ville.js"
import {campagne} from "./campagne.js"	
import {habitants1,habitants2,habitants3,habitants4,habitants5,habitants6,habitants7,habitants8,habitants9,habitants10,habitants11,habitants12,habitants13,habitants14,habitants15,habitants16,habitants17,habitants18,habitants19,habitants20,habitants21,habitants22,habitants23,habitants24,habitants25,habitants26,habitants27,habitants28,habitants29,habitants30,habitants31,habitants32,habitantsville,habitantscampagne,habitantstotal} from "./hbts.js";

// ----------------------------------------------------------------------------------	

if(query == "1"){var data = secteur1}
else if (query == "2"){var data = secteur2}
else if (query == "3"){var data = secteur3}
else if (query == "4"){var data = secteur4}
else if (query == "5"){var data = secteur5}
else if (query == "6"){var data = secteur6}
else if (query == "7"){var data = secteur7}
else if (query == "8"){var data = secteur8}
else if (query == "9"){var data = secteur9}
else if (query == "10"){var data = secteur10}
else if (query == "11"){var data = secteur11}
else if (query == "12"){var data = secteur12}
else if (query == "13"){var data = secteur13}
else if (query == "14"){var data = secteur14}
else if (query == "15"){var data = secteur15}
else if (query == "16"){var data = secteur16}
else if (query == "17"){var data = secteur17}
else if (query == "18"){var data = secteur18}
else if (query == "19"){var data = secteur19}
else if (query == "20"){var data = secteur20}
else if (query == "21"){var data = secteur21}
else if (query == "22"){var data = secteur22}
else if (query == "23"){var data = secteur23}
else if (query == "24"){var data = secteur24}
else if (query == "25"){var data = secteur25}
else if (query == "26"){var data = secteur26}
else if (query == "27"){var data = secteur27}
else if (query == "28"){var data = secteur28}
else if (query == "29"){var data = secteur29}
else if (query == "30"){var data = secteur30}
else if (query == "31"){var data = secteur31}
else if (query == "32"){var data = secteur32}
else if (query == "ville"){var data = ville}
else if (query == "campagne"){var data = campagne}
else if (query == "test"){var data = ville[0] + ville[1]}

// ----------------------------------------------------------------------------------

var mymap = L.map('mapid').setView([48.152, -1.77], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXF1YWJ4IiwiYSI6ImNqeWszMHQzeTA5aGwzaHBtaWR2bWZpd2oifQ.ik62iG1BWqL7xrdVJb2eBA', {
	minZoom: 13,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);

// ----------------------------------------------------------------------------------

var info = L.control();
	
var geojson;

// ----------------------------------------------------------------------------------

info.onAdd = function (mymap) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info.update = function (props) {
	this._div.innerHTML = (props ? '<b>Secteur ' + props.secteur + '</b><br />' + props.habitations: 'Cliquez sur un secteur');
};

info.addTo(mymap);

function zoomToFeature(e) {
	mymap.fitBounds(e.target.getBounds());
	var layer = e.target;
	info.update(layer.feature.properties);
}

function onEachFeature(feature, layer) {
	layer.on({
		click : zoomToFeature,
	});
}

// ----------------------------------------------------------------------------------
i=0

while (i < nb) {
geojson = L.geoJson(data, {
	onEachFeature: onEachFeature,
	style: function (feature) {
       return {color: 'red',
	fillOpacity: 0,
	opacity: 0.6,
	weight: 6,
}}}).addTo(mymap);
i+=1;
}

	
// ----------------------------------------------------------------------------------

mymap.on('click', 
	function(e){
	var coord = e.latlng.toString().split(',');
	var lat = coord[0].split('(');
	var lng = coord[1].split(')');
	console.log(lat[1] + "," + lng[0]);

});

L.control.browserPrint({
printModes: [
		L.control.browserPrint.mode.auto(),
	],

}).addTo(mymap)



