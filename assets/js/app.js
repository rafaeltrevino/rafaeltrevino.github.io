$(document).ready(function() {

// Carousel
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 10000);
}
autoplay();

}); // End of document ready function