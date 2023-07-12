const menu: HTMLElement | null = document.querySelector(".menu");
const menuItems: NodeListOf<Element> = document.querySelectorAll(".menu-item");
const hamburger: HTMLElement | null = document.querySelector(".hamburger");
const closeIcon: HTMLElement | null = document.querySelector(".close-icon");
const menuIcon: HTMLElement | null = document.querySelector(".menu-icon");


function toggleMenu() {
  if ( menu && menu.classList.contains("translate-y-[-100%]")) {
    menu.classList.remove("translate-y-[-100%]");
    if (closeIcon) closeIcon.style.display = "block";
    if (menuIcon) menuIcon.style.display = "none";
  } else {
    menu && menu.classList.add("translate-y-[-100%]");
    if (closeIcon) closeIcon.style.display = "none";
    if(menuIcon) menuIcon.style.display = "block";
  }
}
if(hamburger){
  hamburger?.addEventListener("click", toggleMenu);
}
if(closeIcon){
  closeIcon?.addEventListener("click", toggleMenu);
}

export{}