var slideIndex = 1;
$('document').ready(function () {

  showSlide(slideIndex)

  var intervalID = window.setInterval(autoSlide, 4000);
});

function nextSlide(n) { showSlide(slideIndex += n); }

function currentSlide(n) { showSlide(slideIndex = n); }

function showSlide(n) {
  var i;
  var slides = $(".slide img");
  var dots = $(".slide_indicator span")
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    $(slides[i]).css("display", "none")
  }
  for (i = 0; i < dots.length; i++) {
    $(dots[i]).attr("class", "")
  }
  $(slides[slideIndex - 1]).css("display", "block")
  $(dots[slideIndex - 1]).attr("class", "dot_active")
}

function autoSlide() {
  nextSlide(1)
}
