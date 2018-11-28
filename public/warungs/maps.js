
var mymap = L.map('mapid').setView([-0.0610732,109.3422024], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZnhsaWsiLCJhIjoiY2puZW84cDBiMDYwczN3bmJidjlxMG5zOCJ9.eEANJC0bcmeiWOgaItZHaw'
}).addTo(mymap);

function findLocation(x,y){
	for(var i=0; i < places.length; i++) {
		if	(places[i].lokasi[0]==x && places[i].lokasi[1]==y){
			return i;
		}
	}
	return -1;
}

function showLocation(e){
	let ix = findLocation(e.latlng.lat,e.latlng.lng);
	if(ix>=0){
		img.src= places[ix].gambar;
		par.textContent=places[ix].review;
	}
}

(async () => {
	const URL = "peta.json";
	try {
		let resp = await(fetch(URL));
		let resp2 = await resp.json();
		localStorage.setItem('places', JSON.stringify(resp2.places));
	}
	catch(err){
		console.log(err);
	}
})( );

let gmb= document.getElementById("gambar");
let rev= document.getElementById("review");
let img= document.createElement('img');
img.classList.add("dalamanGambar");
let par= document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);


// using fetch
// fetch(URL)
// 	.then(function(response){
// 		if(response.status !== 200){
// 			console.log('Ada masalah. Status code:' + response.status);
// 			throw response.statusText;
// 		}
// 		return response.json()
// 	})
// 	.then(resp => {
// 		let places = resp.places;
// 		localStorage.setItem('places', JSON.stringify(resp.places));
// 	})
// 	.catch(function(err){
// 		console.log(err);
// 	});


let places= JSON.parse(localStorage.getItem('places'));

for (var t of places) {
	var marker = L.marker(t.lokasi).addTo(mymap).bindPopup(t.detail);
	marker.on('click', showLocation);
}