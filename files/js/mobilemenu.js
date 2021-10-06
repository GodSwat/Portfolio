const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".navlist");
const listLink = document.querySelectorAll(".listlink");

hamburger.addEventListener("click", mobileMenu);
listLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    list.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    list.classList.remove("active");
}