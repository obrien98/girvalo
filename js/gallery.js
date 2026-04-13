const triggers = document.querySelectorAll(".lightbox-trigger");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

triggers.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const src = link.getAttribute("href");
    lightboxImg.src = src;

    lightbox.classList.add("active");
  });
});

// Close with X
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Close by clicking background
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});