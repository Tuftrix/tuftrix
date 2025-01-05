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

function showSection(id) {
  const sections = ["quote-page", "home-page", "terms-page"];
  sections.forEach((section) => {
    document.getElementById(section).style.display = section === id ? "block" : "none";
  });
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function showQuote() {
  showSection("quote-page");
  document.title = "Get a Quote";
}

function showHome() {
  showSection("home-page");
  document.title = "Tuftrix Home";
}

function showTerms() {
  showSection("terms-page");
  document.title = "Terms and Conditions";
}
