const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

const navLinks = document.querySelectorAll(".site-nav a");


//close menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});


// close menu when clicking outside 
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});


// toggle menu on hamburger click 
toggle.addEventListener("click", () => {
const isOpen = nav.classList.toggle("open");
toggle.setAttribute("aria-expanded", String(isOpen)); // sets aria-expanded="true" or aria-expanded="false"
  });

