
// Images
const imageArray = [
  {
    name: "Charizard",
    mainImg: "/images/custom-rug-Charizard-1.webp",
    sideImg1: "/images/custom-rug-Charizard-2.webp",
    sideImg2: "/images/custom-rug-Charizard-3.webp"
  },
  {
    name: "Our Branding",
    mainImg: "/images/tuftrix-branding-1.webp",
    sideImg1: "/images/tuftrix-branding-2.webp",
    sideImg2: "/images/tuftrix-branding-3.webp"
  },
  {
    name: "L&G",
    mainImg: "/images/custom-rug-LandG-1.webp",
    sideImg1: "/images/custom-rug-LandG-2.webp",
    sideImg2: "/images/custom-rug-LandG-3.webp"
  },
  {
    name: "BreakTheART",
    mainImg: "/images/custom-rug-Break-the-art-1.webp",
    sideImg1: "/images/custom-rug-Break-the-art-2.webp",
    sideImg2: "/images/custom-rug-Break-the-art-3.webp"
  },
  {
    name: "LFC",
    mainImg: "/images/custom-rug-LFC-1.webp",
    sideImg1: "/images/custom-rug-LFC-2.webp",
    sideImg2: "/images/custom-rug-LFC-3.webp"
  },
  {
    name: "Love",
    mainImg: "/images/custom-rug-Love-1.webp",
    sideImg1: "/images/custom-rug-Love-2.webp",
    sideImg2: "/images/custom-rug-Love-3.webp"
  },
  {
    name: "Beroe",
    mainImg: "/images/custom-rug-Beroe-1.webp",
    sideImg1: "/images/custom-rug-Beroe-2.webp",
    sideImg2: "/images/custom-rug-Beroe-3.webp"
  },
  {
    name: "ARK",
    mainImg: "/images/custom-rug-ARK-1.webp",
    sideImg1: "/images/custom-rug-ARK-2.webp",
    sideImg2: "/images/custom-rug-ARK-3.webp"
  },
  {
    name: "Go",
    mainImg: "/images/custom-rug-Golang-1.webp",
    sideImg1: "/images/custom-rug-Golang-2.webp",
    sideImg2: "/images/custom-rug-Golang-3.webp"
  },
  {
    name: "Gaara",
    mainImg: "/images/custom-rug-Gaara-1.webp",
    sideImg1: "/images/custom-rug-Gaara-2.webp",
    sideImg2: "/images/custom-rug-Gaara-3.webp"
  },
  {
    name: "Sharingan",
    mainImg: "/images/custom-rug-Sharingan-1.webp",
    sideImg1: "/images/custom-rug-Sharingan-2.webp",
    sideImg2: "/images/custom-rug-Sharingan-3.webp"
  }
];


var d = document;
var w = "https://tally.so/widgets/embed.js";

var v = function () {
  if (typeof Tally !== "undefined") {
    Tally.loadEmbeds();
  } else {
    d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function (e) {
      e.src = e.dataset.tallySrc;
    });
  }
};

if (typeof Tally !== "undefined") {
  v();
} else if (d.querySelector('script[src="' + w + '"]') === null) {
  var s = d.createElement("script");
  s.src = w;
  s.onload = v;
  s.onerror = v;
  d.body.appendChild(s);
}

function showSection(id) {
  const sections = ["quote-page", "home-page", "terms-page"];
  sections.forEach((section) => {
    document.getElementById(section).style.display = section === id ? "block" : "none";
  });
}

function showQuote() {
  showSection("quote-page");
}

function showHome() {
  showSection("home-page");
}

function showTerms() {
  showSection("terms-page");
}

function openFullscreen(img) {
  const modal = document.getElementById("fullscreen-modal");
  const fullscreenImg = document.getElementById("fullscreen-img");
  fullscreenImg.src = img.src;
  modal.style.display = "flex";
  document.body.classList.add("menu-active");
}

function closeFullscreen() {
  const modal = document.getElementById("fullscreen-modal");
  modal.style.display = "none";
  document.body.classList.remove("menu-active");
}



function escapeHTML(str) {
  return str.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let currentIndex = 0;
const itemsPerLoad = 3;

function generateHome(imageArray) {
  const homeContainer = document.querySelector(".row.image-links");

  // ARIA Live Region for loading updates
  const liveRegion = document.getElementById("aria-live-region");

  const imagesToShow = imageArray.slice(currentIndex, currentIndex + itemsPerLoad);
  imagesToShow.forEach((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("role", "region");
    galleryItem.setAttribute("aria-label", `${item.name} Gallery Item`);

    const name = escapeHTML(item.name);
    const mainImg = escapeHTML(item.mainImg);
    const sideImg1 = escapeHTML(item.sideImg1);
    const sideImg2 = escapeHTML(item.sideImg2);

    galleryItem.innerHTML = `
      <div class="big-img-container">
        <img src="${mainImg}" 
          class="big-img home-img" 
          alt="${name} Main Image" 
          role="button" 
          tabindex="0"
          aria-label="View ${name} Main Image in fullscreen" 
          onclick="openFullscreen(this)" 
          onkeypress="if(event.key === 'Enter') openFullscreen(this)" loading="lazy"/>
      </div>
      <div class="small-img-container">
        <img src="${sideImg1}" 
          class="small-img home-img" 
          alt="${name} Side Image 1" 
          role="button" 
          tabindex="0"
          aria-label="View ${name} Side Image 1 in fullscreen" 
          onclick="openFullscreen(this)" 
          onkeypress="if(event.key === 'Enter') openFullscreen(this)" loading="lazy"/>
        <img src="${sideImg2}" 
          class="small-img home-img" 
          alt="${name} Side Image 2" 
          role="button" 
          tabindex="0"
          aria-label="View ${name} Side Image 2 in fullscreen" 
          onclick="openFullscreen(this)" 
          onkeypress="if(event.key === 'Enter') openFullscreen(this)" loading="lazy"/>
      </div>
      <div class="image-caption">
        <p class="image-name">${name}</p>
        <hr class="horizontal-line" aria-hidden="true">
      </div>
    `;

    homeContainer.appendChild(galleryItem);
  });

  currentIndex += itemsPerLoad;

  const loadMoreButton = document.getElementById("load-more");
  if (currentIndex >= imageArray.length) {
    loadMoreButton.textContent = "More coming soon";
    loadMoreButton.disabled = true;
    loadMoreButton.setAttribute("aria-disabled", "true");
    loadMoreButton.style.cursor = "default";
    loadMoreButton.style.textDecoration = "none";
    loadMoreButton.style.color = "#aaa";
  }

  liveRegion.textContent = `${imagesToShow.length} new images loaded.`;
}

document.body.insertAdjacentHTML(
  "beforeend",
  '<div id="aria-live-region" aria-live="polite" class="visually-hidden"></div>'
);

document.getElementById("load-more").addEventListener("click", () => {
  generateHome(imageArray);
});

generateHome(imageArray);

function escapeHTML(str) {
  const div = document.createElement("div");
  div.innerText = str;
  return div.innerHTML;
}

function resetGallery() {
  currentIndex = 0;

  const homeContainer = document.querySelector(".row.image-links");
  homeContainer.innerHTML = "";

  const loadMoreButton = document.getElementById("load-more");
  loadMoreButton.textContent = "Load More";
  loadMoreButton.disabled = false;
  loadMoreButton.removeAttribute("aria-disabled");
  loadMoreButton.style.cursor = "pointer";
  loadMoreButton.style.textDecoration = "underline";
  loadMoreButton.style.color = "#790604";

  generateHome(imageArray);
}

document.querySelectorAll(".nav-button, .burger-menu-content a").forEach((element) => {
  element.addEventListener("click", resetGallery);
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  
  const width = window.innerWidth;
  const stickyOffset = width > 670 ? 225 : 50; 

  if (window.scrollY >= stickyOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

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