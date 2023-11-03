function setOverlay() {
  let body = document.querySelector("body");
  let overlay1 = document.createElement("div");
  overlay1.classList.add("overlay");
  overlay1.style.backgroundColor = "rgba(0, 0, 0, 0.831)";
  overlay1.style.position = "fixed";
  overlay1.style.top = "0";
  overlay1.style.bottom = "0";
  overlay1.style.left = "0";
  overlay1.style.right = "0";
  body.prepend(overlay1);
}

setOverlay();

function removeOverlay(){
    document.querySelector('.overlay').remove();
}

removeOverlay();