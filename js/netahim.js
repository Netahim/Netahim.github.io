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