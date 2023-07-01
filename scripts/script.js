"use strict";

window.addEventListener("click", function () {
  let aiAssistant = document.getElementById("ai-assistant");
  aiAssistant.style.backgroundColor = "#22bf99";
  aiAssistant.classList.add("jump");

  setTimeout(function () {
    aiAssistant.style.backgroundColor = "";
    aiAssistant.classList.remove("jump");
  }, 10000);
});

document.addEventListener("DOMContentLoaded", function () {
  const slabs = document.querySelectorAll(
    ".behind-slab, .center-slab, .front-slab"
  );

  slabs.forEach((slab) => {
    slab.style.display = "none";
  });
});

window.addEventListener("click", function () {
  const slabs = document.querySelectorAll(
    ".behind-slab, .center-slab, .front-slab"
  );

  slabs.forEach((slab) => {
    slab.classList.add("transition-effect");
    slab.style.display = "flex";
  });
});
