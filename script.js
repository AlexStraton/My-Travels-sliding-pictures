"use strict";

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", () => {
    panels.forEach((image) => {
      image.classList.remove("active");
    });
    panel.classList.toggle("active");
  })
);
