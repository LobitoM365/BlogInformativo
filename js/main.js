let hamburguer = document.getElementById("hamburguer");
let navMobile = document.getElementById("navMobile");

hamburguer.addEventListener("click", function () {
    if (navMobile.classList.contains("nav-mobile-invisible")) {
        navMobile.classList.remove("nav-mobile-invisible")
    } else {
        navMobile.classList.add("nav-mobile-invisible")
    }
})