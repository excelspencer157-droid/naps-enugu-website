
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

/* =====================================
   NAPS ENTRANCE AND SCROLL ANIMATIONS
===================================== */

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(
    "section h2, .event-description, .event-photo, #news .card, .card"
  );

  items.forEach(function (item, index) {
    item.classList.add("naps-entrance");

    item.style.setProperty(
      "--naps-delay",
      (index % 6) * 100 + "ms"
    );
  });

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("naps-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  items.forEach(function (item) {
    observer.observe(item);
  });
});
/* NAPS Continuous Homepage Typing Effects */
document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll("#home .typing-line");

  if (!lines.length) return;

  lines.forEach(function (line, position) {
    const text = line.dataset.text;
    let index = 0;
    let deleting = false;

    line.textContent = "";
    line.style.borderRight = "3px solid #efc45b";
    line.style.display = "table";
    line.style.maxWidth = "100%";

    function typeLoop() {
      if (!deleting) {
        index++;
        line.textContent = text.slice(0, index);

        if (index >= text.length) {
          deleting = true;
          setTimeout(typeLoop, 1800);
          return;
        }

        setTimeout(typeLoop, 65);
      } else {
        index--;
        line.textContent = text.slice(0, index);

        if (index <= 0) {
          deleting = false;
          setTimeout(typeLoop, 400);
          return;
        }

        setTimeout(typeLoop, 30);
      }
    }

    setTimeout(typeLoop, position * 700);
  });
});

  typeNextLetter();
});
