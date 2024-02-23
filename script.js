const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

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
