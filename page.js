const burgerMenu = document.getElementById("burger-menu");
const closeMenu = document.getElementById("close-menu");
const menuContent = document.getElementById("burger-menu-content");
const blurOverlay = document.getElementById("blur-overlay");
const menuLinks = menuContent.querySelectorAll(".burger-menu-link"); 

function closeMenuHandler() {
  menuContent.classList.remove("active");
  blurOverlay.classList.remove("active");
  document.body.classList.remove("menu-active"); 
}

burgerMenu.addEventListener("click", () => {
  menuContent.classList.add("active");
  blurOverlay.classList.add("active");
  document.body.classList.add("menu-active"); 
});

closeMenu.addEventListener("click", closeMenuHandler);

blurOverlay.addEventListener("click", closeMenuHandler);

 menuLinks.forEach(link => {
   link.addEventListener("click", closeMenuHandler);
 });

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});