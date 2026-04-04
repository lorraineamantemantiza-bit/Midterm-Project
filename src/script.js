const portfolioTabs = document.querySelectorAll(".portfolio-tab");
const portfolioContents = document.querySelectorAll(".portfolio-content");

portfolioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;

    portfolioTabs.forEach((btn) => btn.classList.remove("active-tab"));
    portfolioContents.forEach((content) => content.classList.remove("active-content"));

    tab.classList.add("active-tab");

    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active-content");
    }
  });
});


const movieTrack = document.getElementById("movieTrack");
const moviePrev = document.getElementById("moviePrev");
const movieNext = document.getElementById("movieNext");

if (movieTrack && moviePrev && movieNext) {
  const cards = movieTrack.querySelectorAll(".movie-card-netflix");
  let index = 0;

  const cardWidth = 180; // adjust if needed

  movieNext.addEventListener("click", () => {
    index++;
    movieTrack.style.transform = `translateX(-${index * cardWidth}px)`;
  });

  moviePrev.addEventListener("click", () => {
    if (index > 0) index--;
    movieTrack.style.transform = `translateX(-${index * cardWidth}px)`;
  });
}



/* ======================
   ACTIVE NAV LINK
====================== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

function updateActiveNav() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 120 && window.scrollY < sectionTop + sectionHeight - 120) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

/* ======================
   SCROLL REVEAL
====================== */
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

function revealOnScroll() {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ======================
   CURSOR GLOW
====================== */
const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});