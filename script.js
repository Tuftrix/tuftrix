
// Images
const imageArray = [
  {
    name: "Charizard",
    img1: "https://i.postimg.cc/bwHfd1M3/Photo-24-09-2024-22-12-39.jpg",
    img2: "https://i.postimg.cc/P5kktS6C/Photo-24-09-2024-22-12-13.jpg"
  },
  {
    name: "Tuftrix",
    img1: "https://i.postimg.cc/7YKQRXFv/IMG-1146.avif",
    img2: "https://i.postimg.cc/25hGCxKS/IMG-1145.avif"
  },
  {
    name: "L&G",
    img1: "https://i.postimg.cc/52GK4y9n/IMG-1244.avif",
    img2: "https://i.postimg.cc/RZqbxKmW/IMG-1242.avif"
  },
  {
    name: "BreakTheART",
    img1: "https://i.postimg.cc/FRXPS6LS/IMG-3706.avif",
    img2: "https://i.postimg.cc/zvR9NhKw/Photo-14-11-2024-15-07-23.jpg"
  },
  {
    name: "LFC",
    img1: "https://i.postimg.cc/J4r2KSdc/IMG-0871.avif",
    img2: "https://i.postimg.cc/RFYj2d6V/Photo-14-11-2024-18-08-54.jpg"
  },
  {
    name: "Doctor",
    img1: "https://i.postimg.cc/hhWNtG1k/Photo-12-12-2024-21-05-24.jpg",
    img2: "https://i.postimg.cc/7ZpXvRXR/IMG-4238.avif"
  },
  {
    name: "Beroe",
    img1: "https://i.postimg.cc/BvKYX3Xs/IMG-4233.avif",
    img2: "https://i.postimg.cc/NG9MFPxD/Photo-12-12-2024-20-57-06.jpg"
  },
  {
    name: "ARK",
    img1: "https://i.postimg.cc/sxy0kLfz/Full-Size-Render.avif",
    img2: "https://i.postimg.cc/g0zFhnbd/Photo-19-10-2024-16-14-55.jpg"
  },
  {
    name: "Go",
    img1: "https://i.postimg.cc/xd6r3n9m/Photo-19-10-2024-16-08-49.jpg",
    img2: "https://i.postimg.cc/d3BSw9Dy/IMG-0673.avif"
  },
  {
    name: "Gaara",
    img1: "https://i.postimg.cc/CMH2GwJx/IMG-0667.avif",
    img2: "https://i.postimg.cc/85c2y9C0/Photo-19-10-2024-16-07-58.jpg"
  },
  {
    name: "Sharingan",
    img1: "https://i.postimg.cc/cHdR0G3F/IMG-3354.jpg",
    img2: "https://i.postimg.cc/JnKbhYcM/IMG-1454.avif"
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
  const sections = ["quote-page", "gallery-page", "about-page"];
  sections.forEach((section) => {
    document.getElementById(section).style.display = section === id ? "flex" : "none";
  });
}

function showQuote() {
  showSection("quote-page");
}

function showGallery() {
  showSection("gallery-page");
}

function showAbout() {
  showSection("about-page");
}


function openFullscreen(img) {
  const modal = document.getElementById("fullscreen-modal");
  const fullscreenImg = document.getElementById("fullscreen-img");
  fullscreenImg.src = img.src;
  modal.style.display = "flex";
}

function closeFullscreen() {
  const modal = document.getElementById("fullscreen-modal");
  modal.style.display = "none";
}



function escapeHTML(str) {
  return str.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function generateGallery(imageArray) {
  const galleryContainer = document.querySelector(".row.image-links");

  galleryContainer.innerHTML = "";

  imageArray.forEach((item) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-lg-4 col-md-6 mb-4";

    const name = escapeHTML(item.name);
    const img1 = escapeHTML(item.img1);
    const img2 = escapeHTML(item.img2);

    colDiv.innerHTML = `
      <!-- ${name} -->
      <div>
        <img src="${img1}" 
          class="gallery-img w-100 shadow-1-strong rounded" 
          alt="${name} Image 1" 
          onclick="openFullscreen(this)" />
      </div>
      <div>
        <img src="${img2}" 
          class="gallery-img w-100 shadow-1-strong rounded" 
          alt="${name} Image 2" 
          onclick="openFullscreen(this)" />
      </div>
    `;

    galleryContainer.appendChild(colDiv);
  });
}

generateGallery(imageArray);




///////////////////////////////////


// Sticky Header Script
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

 // Toggle Burger Menu
 const burgerMenu = document.getElementById("burger-menu");
 const closeMenu = document.getElementById("close-menu");
 const menuContent = document.getElementById("burger-menu-content");

 burgerMenu.addEventListener("click", () => {
     menuContent.classList.add("active");
     burgerMenu.style.display = "none";
 });

 closeMenu.addEventListener("click", () => {
     menuContent.classList.remove("active");
     burgerMenu.style.display = "block";
 });