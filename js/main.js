let hamburguer = document.getElementById("hamburguer");
let navMobile = document.getElementById("navMobile");
/* let verMas = document.getElementById("verMas");
let verMenos = document.getElementById("verMenos");
let parrafo2Mobile = document.getElementById("parrafo2Mobile"); */

hamburguer.addEventListener("click", function () {
    if (navMobile.classList.contains("nav-mobile-invisible")) {
        navMobile.classList.remove("nav-mobile-invisible");
    } else {
        navMobile.classList.add("nav-mobile-invisible");
    }
});
/* verMas.addEventListener("click", function () {
    parrafo2Mobile.classList.remove("parrafo2-mobile")
    verMas.classList.add("ver-mas-invisible")
    verMenos.classList.add("ver-menos-visible")
})
verMenos.addEventListener("click", function () {
    parrafo2Mobile.classList.add("parrafo2-mobile")
    verMas.classList.remove("ver-mas-invisible")
    verMenos.classList.remove("ver-menos-visible")
}) */

var video = document.getElementById("myVideo");

video.addEventListener("ended", function() {
    video.currentTime = 0; // reinicia el video
    video.play(); // lo reproduce de nuevo
});
