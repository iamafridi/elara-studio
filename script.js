const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  var elemContainer = document.querySelector("#elem-container");
  var fixedImage = document.querySelector("#fixed-image");
  elemContainer.addEventListener("mouseenter", function () {
    fixedImage.style.display = "block";
  });
  elemContainer.addEventListener("mouseleave", function () {
    fixedImage.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var Image = e.getAttribute("data-image");
      fixedImage.style.backgroundImage = `url(${Image})`;
    });
  });
}

// Swiper
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
   
  });
}

function menuAnimation() {

  var menu = document.querySelector("nav h3")
  var full = document.querySelector("#full-scr")
  var navimg = document.querySelector("nav h2")
  var flag = 0
  menu.addEventListener("click", function () {
      if (flag == 0) {
          full.style.top = 0
          navimg.style.opacity = 0
          flag = 1
      } else {
          full.style.top = "-100%"
          navimg.style.opacity = 1
          flag = 0
      }
  })
}

function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()