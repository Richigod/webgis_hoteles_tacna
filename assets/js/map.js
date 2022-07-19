var map = L.map('map', {
center: [-18.014233, -70.251659],
zoom: 18,
minZoom: 10,
maxZoom: 20,
maxBounds: [[-18.3563,-71.178], [-16.7696,-69.4157]]
});
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);


var Departamento= L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:departamentos_tacna",//gisweb:hoteles
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
Departamento.addTo(map);


var Provincias = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:provincias_tacna",//gisweb:hoteles
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
Provincias.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:distritos_tacna",//gisweb:distritos
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
distritos.addTo(map);


var centros = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:hoteles_tacna",//gisweb:hoteles
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
centros.addTo(map);

var baseMaps = {
"OSM": basemapOSM
};
var overlayMaps = {
"Hoteles tacna": centros,
"Distritos de Tacna": distritos,
"Provincias de Tacna": Provincias,
"Departamento": Departamento
};
L.control.layers(baseMaps, overlayMaps,{
position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
collapsed: false // true
}).addTo(map);

L.control.scale({
imperial: false
}).addTo(map);