$(document).ready(function(){
  $(".dropdown-button").dropdown();
  $('.parallax').parallax();
  $('select').material_select(); 
  $(".button-collapse").sideNav({
  	edge: 'right'
  });  
}) 

// CAROUSEL
$(document).ready(function(){
  $('.carousel').carousel(
  {
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 100,
  }
  );
});

autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}