const btnWa = document.getElementById("btn-wa");

window.addEventListener("scroll", function () {
    if (scrollY > 500) {
        btnWa.classList.remove("show");
    } else {
        btnWa.classList.add("show");
    }
});
