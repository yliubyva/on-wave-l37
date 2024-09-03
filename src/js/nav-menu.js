"use strict";

function initNavMenu() {
  const navIcon = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");

  navIcon.addEventListener("click", function () {
    this.classList.toggle("open");
    navMenu.classList.toggle("show");
  });
}

export { initNavMenu };