//Initiailzes infowindow so it can be closed later
var infowindow = new google.maps.InfoWindow({
	content: ""
})

//Initializes the google maps on id googleMap
function initialize() {
  const vegas = new google.maps.LatLng(36.114647, -115.172813);
  var mapProp = {
    center:vegas,
    zoom:10,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
  //Setups up preliminary marker
  var marker=new google.maps.Marker({
  	position: vegas,
  	draggable:true,
  	title:"Las Vegas"
  });
  marker.setMap(map);
  
  //Setups first infowindow
  var content = "Welcome to Las Vegas!"
  infowindow.setContent(content);
  infowindow.open(map,marker);

  //Listener to pick up clicks on the map and placemarker on click
  google.maps.event.addListener(map, 'click', function(e){
  	infowindow.close();
  	placeMarker(e.latLng, map);
  });
}

//Places a marker on that position on the map and pans o that as the center
function placeMarker(position, map){
	var marker= new google.maps.Marker({
		position: position,
		map: map
	});
	map.panTo(position);

	//Updates the infowindow
	var content = "Latitude: " + position.lat()+
  		'<br>Longitude: ' + position.lng(); 
  	infowindow.setContent(content);
  	infowindow.open(map,marker);
}

//Initializes map on page load
google.maps.event.addDomListener(window, 'load', initialize);