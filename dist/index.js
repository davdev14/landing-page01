var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menu-item");
var hamburger = document.querySelector(".hamburger");
var closeIcon = document.querySelector(".close-icon");
var menuIcon = document.querySelector(".menu-icon");
function toggleMenu() {
    if (menu && menu.classList.contains("translate-y-[-100%]")) {
        menu.classList.remove("translate-y-[-100%]");
        if (closeIcon)
            closeIcon.style.display = "block";
        if (menuIcon)
            menuIcon.style.display = "none";
    }
    else {
        menu && menu.classList.add("translate-y-[-100%]");
        if (closeIcon)
            closeIcon.style.display = "none";
        if (menuIcon)
            menuIcon.style.display = "block";
    }
}
if (hamburger) {
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener("click", toggleMenu);
}
if (closeIcon) {
    closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.addEventListener("click", toggleMenu);
}
