const triggers = document.querySelectorAll(".lightbox-trigger"); // [<a>, <a>, <a>, ...]
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;

// take all gallery links and turn them into array of image urls 
const images = Array.from(triggers).map(link => link.getAttribute("href"));

// open
triggers.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // overrride default browser behavior 
    currentIndex = index;
    showImage(); // set lightbox image source url
    lightbox.classList.add("active"); // make lighbox modal popup
  });
});

// show image
function showImage() {
  lightboxImg.src = images[currentIndex]; // just change source to whatever image is up
}

// next 
function nextImage() {
  // mod images.length takes us back to beginning if were at the end
  // ie if we have 5 images, indexes are 0-4, so if this hits 
  // index 5 -> 5%5 = 0 and now were back at the front
  currentIndex = (currentIndex + 1) % images.length; 
  showImage();
}

// back
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

// apply click to arrows 
rightArrow.addEventListener("click", nextImage);
leftArrow.addEventListener("click", prevImage);

// close when user presses 'x'
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// close when user clicks outside
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// use keyboard to go to next, preve or close lightbox
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") lightbox.classList.remove("active");
});