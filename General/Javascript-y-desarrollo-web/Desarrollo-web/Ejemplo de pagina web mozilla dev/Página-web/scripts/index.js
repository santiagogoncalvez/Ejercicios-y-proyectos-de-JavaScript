let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/mozillafirefox.svg") {
    miImage.setAttribute("src", "images/img2.png");
  } else {
    miImage.setAttribute("src", "images/mozillafirefox.svg");
  }
};


