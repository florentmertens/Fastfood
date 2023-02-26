/* Carousel */

var carousel = document.getElementById("carousel");
var carouselBtn = document.getElementsByClassName("carouselBtn");

var carouselImages = [
  "url(/images/meal/meal1.jpg)",
  "url(/images/meal/meal2.jpg)",
  "url(/images/meal/meal3.jpg)",
  "url(/images/meal/meal4.jpg)",
  "url(/images/meal/meal5.jpg)",
  "url(/images/meal/meal6.jpg)",
  "url(/images/meal/meal7.jpg)",
];
var currentCarouselImage = (carousel.style.backgroundImage = carouselImages[1]);

window.addEventListener("load", () => {
  carousel.style.backgroundImage = currentCarouselImage;
});

carouselBtn[0].addEventListener("click", () => {
  var indexCarouselImage = carouselImages.findIndex(
    (element) => element == currentCarouselImage
  );
  for (let index = 0; index <= carouselImages.length; index++) {
    if (indexCarouselImage == index) {
      if (indexCarouselImage <= 0) {
        console.log("retour a la fin");
        carousel.style.backgroundImage =
          carouselImages[carouselImages.length - 1];
        currentCarouselImage = carouselImages[carouselImages.length - 1];
        break;
      } else {
        console.log("image precedente");
        carousel.style.backgroundImage = carouselImages[indexCarouselImage - 1];
        currentCarouselImage = carouselImages[indexCarouselImage - 1];
        break;
      }
    }
  }
  console.log(currentCarouselImage);
});

carouselBtn[1].addEventListener("click", () => {
  var indexCarouselImage = carouselImages.findIndex(
    (element) => element == currentCarouselImage
  );
  for (let index = 0; index <= carouselImages.length; index++) {
    if (indexCarouselImage == index) {
      if (indexCarouselImage + 1 < carouselImages.length) {
        console.log("prochaine image");
        carousel.style.backgroundImage = carouselImages[indexCarouselImage + 1];
        currentCarouselImage = carouselImages[indexCarouselImage + 1];
        break;
      } else {
        console.log("retour a zero");
        carousel.style.backgroundImage = carouselImages[0];
        currentCarouselImage = carouselImages[0];
        break;
      }
    }
  }
});
