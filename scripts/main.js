"use strict";

const root = document.querySelector(":root");

window.addEventListener("scroll", () => {
  root.style.setProperty("--offset-top", `${this.scrollY}px`);
});
