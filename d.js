
		var mymap = L.map('mapid').setView([48.152, -1.77], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXF1YWJ4IiwiYSI6ImNqeWszMHQzeTA5aGwzaHBtaWR2bWZpd2oifQ.ik62iG1BWqL7xrdVJb2eBA', {
		minZoom: 15,
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