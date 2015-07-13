//Initializes the google maps on id googleMap
function initialize() {
  var vegas = new google.maps.LatLng(36.114647, -115.172813);
  var mapProp = {
    center:vegas,
    zoom:10,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker=new google.maps.Marker({
  	position: vegas,
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);