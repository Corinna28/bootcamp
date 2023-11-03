// Mon code JS
let maintitle = document.querySelector("h1")
let btnActive = document.querySelector(".btnEnabled");
let btnDesactive = document.querySelector(".btnDisabled");

// Fonction de l'Overlay
function setOverlay(){
    let overlayOn = document.createElement("div");
    maintitle.after(overlayOn)
    overlayOn.innerHTML ="<p> TEST </p>"
    overlayOn.style.backgroundColor=" rgba(0, 0, 0, 0.616)";
    overlayOn.style.position="fixed";
    overlayOn.style.top="0";
    overlayOn.style.bottom="0";
    overlayOn.style.left="0",
    overlayOn.style.right="0";
    overlayOn.style.color="white";
    overlayOn.style.textAlign="center";
    overlayOn.style.justifyContent="center";
    overlayOn.style.alignContent="center";
    btnDesactive.style.display="flex";
    btnDesactive.style.position="fixed";
    return ;
}

function removeOverlay(){
    document.querySelector("div").remove();

}

// Ajouter le bouton qui désactive l'overlay

btnDesactive.addEventListener("click", function(){
    removeOverlay();
    btnDesactive.style.display="none";
});

// Bouton qui active ce fameux Overlay
btnActive.addEventListener("click", function(){
    setOverlay();
});
