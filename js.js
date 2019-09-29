import {habitants1,habitants2,habitants3,habitants4,habitants5,habitants6,habitants7,habitants8,habitants9,habitants10,habitants11,habitants12,habitants13,habitants14,habitants15,habitants16,habitants17,habitants18,habitants19,habitants20,habitants21,habitants22,habitants23,habitants24,habitants25,habitants26,habitants27,habitants28,habitants29,habitants30,habitants31,habitants32,habitantsville,habitantscampagne} from "./js/hbts.js";

		var mymap = L.map('mapid').setView([48.152, -1.77], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXF1YWJ4IiwiYSI6ImNqeWszMHQzeTA5aGwzaHBtaWR2bWZpd2oifQ.ik62iG1BWqL7xrdVJb2eBA', {
		minZoom: 13,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap); 

	var info = L.control();
	info.onAdd = function (mymap) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = (props ? '<b>Secteur ' + props.secteur + '</b><br />' + props.habitations: 'Cliquez sur un secteur');
	};

	info.addTo(mymap);

	
	L.Control.Watermark = L.Control.extend({
    onAdd: function(mymap) {
        var img = L.DomUtil.create('img');
		img.onclick = function(){printPage();return false;};
        img.src = 'print.png';
        img.style = 'width: 23px;height: 23px;padding:3.5px;border: 2px solid rgba(0,0,0,0.2);background-clip: padding-box;border-radius: 4px;background-color:#fff;float:bottom;position:absolute;';
        return img;
    },
    onRemove: function(mymap) {
        // Nothing to do here
    }
});


L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'topleft' }).addTo(mymap);
	
	var geojson;

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
	
	import {secteur1} from "./js/1.js"
	import {secteur2} from "./js/2.js"
	import {secteur3} from "./js/3.js"
	import {secteur4} from "./js/4.js"
	import {secteur6} from "./js/6.js"
	import {secteur7} from "./js/7.js"
	import {secteur8} from "./js/8.js"
	import {secteur9} from "./js/9.js"
	import {secteur10} from "./js/10.js"
	import {secteur11} from "./js/11.js"
	import {secteur12} from "./js/12.js"
	import {secteur13} from "./js/13.js"
	import {secteur14} from "./js/14.js"
	import {secteur15} from "./js/15.js"
	import {secteur16} from "./js/16.js"
	import {secteur17} from "./js/17.js"
	import {secteur18} from "./js/18.js"
	import {secteur19} from "./js/19.js"
	import {secteur20} from "./js/20.js"
	import {secteur21} from "./js/21.js"
	import {secteur22} from "./js/22.js"
	import {secteur23} from "./js/23.js"
	import {secteur24} from "./js/24.js"
	import {secteur25} from "./js/25.js"
	import {secteur26} from "./js/26.js"
	import {secteur27} from "./js/27.js"
	import {secteur28} from "./js/28.js"
	import {secteur29} from "./js/29.js"
	import {secteur30} from "./js/30.js"
	import {secteur31} from "./js/31.js"
	import {secteur32} from "./js/32.js"
	import {ville} from "./js/ville.js"
	import {campagne} from "./js/campagne.js"	
	
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
	
	geojson = L.geoJson(data, {
		onEachFeature: onEachFeature,
		style: function (feature) {
        return {color: 'red',
		fillOpacity: 0,
		opacity: 0.6,
		weight: 6,
	}}}).addTo(mymap);
	
	
mymap.on('click', 
	function(e){
	var coord = e.latlng.toString().split(',');
	var lat = coord[0].split('(');
	var lng = coord[1].split(')');
	console.log(lat[1] + "," + lng[0]);
});