const burger = document.querySelector(".header__toggle");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".header__m-menu");
const fadeElemt = document.querySelectorAll(".fade");

burger.addEventListener("click", function () {
  // Close Hamburger Menu
  if (header.classList.contains("open")) {
    body.classList.remove("lock-scroll");
    header.classList.remove("open");
    overlay.classList.remove("block");
    menu.classList.remove("block");
    fadeElemt.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } // Open Hamburger Menu
  else {
    body.classList.add("lock-scroll");
    header.classList.add("open");
    overlay.classList.add("block");
    menu.classList.add("block");
    fadeElemt.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
