
"use strict";

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Mobile navigation: close menu after clicking a link
const navigation = document.querySelector(".main-navigation");

if (navigation) {
  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
    });
  });
}

/* Make all website images clickable and enlarge them */
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  const lightbox = document.createElement("div");
  lightbox.id = "website-image-lightbox";
  lightbox.innerHTML = `
    <button type="button" aria-label="Close enlarged image">&times;</button>
    <img src="" alt="Enlarged website image">
  `;

  document.body.appendChild(lightbox);

  const enlargedImage = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector("button");

  images.forEach(function (img) {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", function () {
      enlargedImage.src = img.src;
      enlargedImage.alt = img.alt || "Enlarged website image";
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    enlargedImage.src = "";
  }

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
});
