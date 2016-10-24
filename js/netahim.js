$(function(){
    $('.fadein img:gt(0)').hide(1000);
    setInterval(function(){
      $('.fadein :first-child').fadeOut(1000)
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      2500);


    $('#arrowLeft').click(function () {
        alert("moveLeft();")
    });

    $('#arrowRight').click(function () {

    });

});


$(document).ready(function() {
  $("#cf7_controls").on('click', 'span', function() {

  });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

		function init_map(){
			var myOptions = {zoom:15,center:new google.maps.LatLng(32.071399,34.786576),mapTypeId: google.maps.MapTypeId.ROADMAP};
			map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
			marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(32.071399,34.786576)});
			infowindow = new google.maps.InfoWindow({content:'<strong>נתחים</strong><br>אלוף קלמן מגן 3, תל אביב, ישראל<br>'});
			google.maps.event.addListener(marker, 'click', function(){
				infowindow.open(map,marker);});
			infowindow.open(map,marker);}
			google.maps.event.addDomListener(window, 'load', init_map);
