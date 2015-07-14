//Validations
function validate(){
  $('#mapform').validate({

      //Handler when submit form is valid
      submitHandler: function(form) {

      },

       //Displays errors when form is invalid
       invalidHandler: function(event, validator) {
         var errors = validator.numberOfInvalids();
         if( errors ) {
           var message = ( errors === 1 ) ? 'highlighted field'
                                          : errors + ' highlighted fields';
           $( '.submit-error' ).show().find( 'span' ).html( message );
         }
       },

    //Rules for the elements
    rules: {
      latitude: {
        required: true,
        max: 90,
        min: -90
      },
      longitude: {
        required: true,
        max: 180,
        min: -180
      }
    },
    //Error messages
    messages:{
      latitude: {
        required: "Latitude cannot be blank",
        max: "The max is 90",
        min: "The min is -90"
      },
      longitude: {
        required: "Longitude cannot be blank",
        max: "The max is 180",
        min: "The min is -180"
      }
    }
  });
};

//Loads validate function when page loads
$('document').ready(function(){
  validate();
});

//Initiailzes infowindow so it can be closed later
var infowindow = new google.maps.InfoWindow({
  content: ""
})

//Initializes variables
const vegas = new google.maps.LatLng(36.114647, -115.172813);
var mapProp = {
  center:vegas,
  zoom:10,
  mapTypeId:google.maps.MapTypeId.ROADMAP
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

//Initializes the google maps on id googleMap
function initialize() {
  
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

//Places a marker on that position on the map and pans to that as the center
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


//Takes user input and places a marker
var userInput = document.getElementById('submit')
userInput.addEventListener('click', function(){
  //Initialize the lat/long coords
  var latitude = document.getElementById('latitude').value;
  var longitude = document.getElementById('longitude').value;
  const latlng = new google.maps.LatLng(latitude, longitude);

  placeMarker(latlng, map);

  //Listener to pick up clicks on the map and placemarker on click
  google.maps.event.addListener(map, 'click', function(e){
    infowindow.close();
    placeMarker(e.latLng, map);
  });
});


//Initializes map on page load
google.maps.event.addDomListener(window, 'load', initialize);