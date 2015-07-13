//Initializes the google maps on id googleMap
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(36.114647,-115.172813),
    zoom:10,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);