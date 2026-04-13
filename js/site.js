
const mappedImages = document.querySelectorAll("img[usemap]");

const resizeImageMap = (image) => {
  const mapName = image.getAttribute("usemap");
  if (!mapName) {
    return;
  }

  const map = document.querySelector(`map[name="${mapName.slice(1)}"]`);
  if (!map || !image.naturalWidth || !image.naturalHeight) {
    return;
  }

  const widthRatio = image.clientWidth / image.naturalWidth;
  const heightRatio = image.clientHeight / image.naturalHeight;

  map.querySelectorAll("area").forEach((area) => {
    if (!area.dataset.coords) {
      area.dataset.coords = area.coords;
    }

    const scaledCoords = area.dataset.coords
      .split(",")
      .map((value, index) => {
        const number = Number.parseFloat(value);
        return Math.round(number * (index % 2 === 0 ? widthRatio : heightRatio));
      });

    area.coords = scaledCoords.join(",");
  });
};

mappedImages.forEach((image) => {
  if (image.complete) {
    resizeImageMap(image);
  } else {
    image.addEventListener("load", () => resizeImageMap(image), { once: true });
  }
});

window.addEventListener("resize", () => {
  mappedImages.forEach((image) => resizeImageMap(image));
});
