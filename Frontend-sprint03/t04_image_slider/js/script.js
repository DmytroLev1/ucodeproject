var slideIndex = 1;
autoSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  autoSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  autoSlides(slideIndex = n);
}

function autoSlides() {
  var j;
  var slidesAuto = document.getElementsByClassName("mySlides");
  for (j = 0; j < slidesAuto.length; j++) {
    slidesAuto[j].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slidesAuto.length) {slideIndex = 1}
  slidesAuto[slideIndex-1].style.display = "block";
  setTimeout(autoSlides, 5000); 
}

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }




