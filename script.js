
// Images
const imageArray = [
  {
    name: "Charizard",
    mainImg: "https://i.postimg.cc/P5kktS6C/Photo-24-09-2024-22-12-13.jpg",
    sideImg1: "https://i.postimg.cc/SxXVv4L8/IMG-2605.avif", 
    sideImg2: "https://i.postimg.cc/bwHfd1M3/Photo-24-09-2024-22-12-39.jpg"
  },
  {
    name: "Our Branding",
    mainImg: "https://i.postimg.cc/25hGCxKS/IMG-1145.avif",
    sideImg1: "https://i.postimg.cc/7YKQRXFv/IMG-1146.avif",
    sideImg2: "https://i.postimg.cc/3rzcdgh4/IMG-1142.avif"
  },
  {
    name: "L&G",
    mainImg: "https://i.postimg.cc/RZqbxKmW/IMG-1242.avif",
    sideImg1: "https://i.postimg.cc/52GK4y9n/IMG-1244.avif",
    sideImg2: "https://i.postimg.cc/KzFXWB9s/IMG-1243.avif"
  },
  {
    name: "BreakTheART",
    mainImg: "https://i.postimg.cc/zvR9NhKw/Photo-14-11-2024-15-07-23.jpg",
    sideImg1: "https://i.postimg.cc/FRXPS6LS/IMG-3706.avif",
    sideImg2: "https://i.postimg.cc/ydPqCxt6/IMG-3708.avif"
  },
  {
    name: "LFC",
    mainImg: "https://i.postimg.cc/RFYj2d6V/Photo-14-11-2024-18-08-54.jpg",
    sideImg1: "https://i.postimg.cc/J4r2KSdc/IMG-0871.avif",
    sideImg2: "https://i.postimg.cc/CxBVnFBJ/IMG-0872.avif"
  },
  {
    name: "Love",
    mainImg: "https://i.postimg.cc/7ZpXvRXR/IMG-4238.avif",
    sideImg1: "https://i.postimg.cc/hhWNtG1k/Photo-12-12-2024-21-05-24.jpg",
    sideImg2: "https://i.postimg.cc/x1wVKWLQ/IMG-4239.avif"
  },
  {
    name: "Beroe",
    mainImg: "https://i.postimg.cc/NG9MFPxD/Photo-12-12-2024-20-57-06.jpg",
    sideImg1: "https://i.postimg.cc/BvKYX3Xs/IMG-4233.avif",
    sideImg2: "https://i.postimg.cc/JhjVKPQk/IMG-4234.avif"
  },
  {
    name: "ARK",
    mainImg: "https://i.postimg.cc/g0zFhnbd/Photo-19-10-2024-16-14-55.jpg",
    sideImg1: "https://i.postimg.cc/sxy0kLfz/Full-Size-Render.avif",
    sideImg2: "https://i.postimg.cc/nV2x6SfK/IMG-0681.avif"
  },
  {
    name: "Go",
    mainImg: "https://i.postimg.cc/RVbB03FN/IMG-0671.avif",
    sideImg1: "https://i.postimg.cc/d3BSw9Dy/IMG-0673.avif",
    sideImg2: "https://i.postimg.cc/xd6r3n9m/Photo-19-10-2024-16-08-49.jpg"
  },
  {
    name: "Gaara",
    mainImg: "https://i.postimg.cc/85c2y9C0/Photo-19-10-2024-16-07-58.jpg",
    sideImg1: "https://i.postimg.cc/CMH2GwJx/IMG-0667.avif",
    sideImg2: "https://i.postimg.cc/xTdQYG9w/IMG-0664.avif"
  },
  {
    name: "Sharingan",
    mainImg: "https://i.postimg.cc/cHdR0G3F/IMG-3354.jpg",
    sideImg1: "https://i.postimg.cc/JnKbhYcM/IMG-1454.avif",
    sideImg2: "https://i.postimg.cc/HxRB8CqD/IMG-1455.avif"
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
          onkeypress="if(event.key === 'Enter') openFullscreen(this)" />
      </div>
      <div class="small-img-container">
        <img src="${sideImg1}" 
          class="small-img home-img" 
          alt="${name} Side Image 1" 
          role="button" 
          tabindex="0"
          aria-label="View ${name} Side Image 1 in fullscreen" 
          onclick="openFullscreen(this)" 
          onkeypress="if(event.key === 'Enter') openFullscreen(this)" />
        <img src="${sideImg2}" 
          class="small-img home-img" 
          alt="${name} Side Image 2" 
          role="button" 
          tabindex="0"
          aria-label="View ${name} Side Image 2 in fullscreen" 
          onclick="openFullscreen(this)" 
          onkeypress="if(event.key === 'Enter') openFullscreen(this)" />
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