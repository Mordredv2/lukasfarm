const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const carouselImages = document.querySelectorAll(".carousel-image");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

let currentImage = 0;

function showImage(index) {
  carouselImages.forEach((image) => image.classList.remove("active"));
  carouselImages[index].classList.add("active");
}

if (carouselImages.length && prevButton && nextButton) {
    showImage(currentImage);
  prevButton.addEventListener("click", () => {
    currentImage = (currentImage - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImage);
  });

  nextButton.addEventListener("click", () => {
    currentImage = (currentImage + 1) % carouselImages.length;
    showImage(currentImage);
  });
}
