
"use strict";

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
  const isOpen = navigation.classList.toggle("open");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu"
  );
});

// Close menu after clicking a navigation link
navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

// Automatically update the year
document.getElementById("year").textContent =
  new Date().getFullYear();

// WhatsApp contact
// Replace this sample number with the official NAPS number.
// Use 234 and omit the first zero in a Nigerian phone number.
const WHATSAPP_NUMBER = "2348012345678";

const whatsappLink = document.getElementById("whatsappLink");

whatsappLink.href = "https://wa.me/" + WHATSAPP_NUMBER;

whatsappLink.addEventListener("click", function (event) {
  if (WHATSAPP_NUMBER === "2348012345678") {
    event.preventDefault();
    alert("Please enter the official NAPS WhatsApp number in script.js.");
  }
});
