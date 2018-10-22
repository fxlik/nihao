
var mymap = L.map('mapid').setView([-0.0610732,109.3422024], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZnhsaWsiLCJhIjoiY2puZW84cDBiMDYwczN3bmJidjlxMG5zOCJ9.eEANJC0bcmeiWOgaItZHaw'
}).addTo(mymap);

// tambah marker
var fkip = L.marker([-0.0597398,109.3437038]).addTo(mymap);
fkip.bindPopup("<center><b>Universitas Tanjungpura</b><br>Fakultas Keguruan dan Ilmu Pendidikan (FKIP)</center>").openPopup();
var teknik = L.marker([-0.0558201,109.3470762]).addTo(mymap);
teknik.bindPopup("<center><b>Universitas Tanjungpura</b><br>Fakultas Teknik</center>").openPopup();

var amingPop = L.popup();
function onMapClick(e){
	amingPop
		.setLatLng(e.latlng)
		.setContent("Anda meng-<i>klik</i> " + e.latlng.toString())
		.openOn(mymap);
}
mymap.on('click', onMapClick);