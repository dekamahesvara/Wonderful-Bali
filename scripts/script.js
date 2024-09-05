const menuIcon = document.querySelector(".icon");
const navbarList = document.querySelector(".navbar-list");
const home = document.querySelector(".home");


menuIcon.addEventListener("click", () => {
 navbarList.classList.toggle("hidden");
 home.classList.toggle("hidden");
});