const scrollArrow = document.getElementById("scrollArrow");
window.addEventListener("scroll", () => {
  if (window.scrollY > 220) {
    scrollArrow.classList.add("show");
  } else {
    scrollArrow.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeEls = document.querySelectorAll(".fade-in-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.15 }
  );
  fadeEls.forEach((el) => observer.observe(el));
});

const roles = [
  "Frontend Developer",
  "Programming Teacher",
  "Backend Developer",
  "Fullstack Developer",
];
let i = 0,
  j = 0,
  current = "",
  isDeleting = false;
const typed = document.getElementById("typed-role");
function type() {
  if (!typed) return;
  current = roles[i].substring(0, j);
  typed.textContent = current;
  if (!isDeleting && j < roles[i].length) {
    j++;
    setTimeout(type, 90);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else if (!isDeleting) {
    isDeleting = true;
    setTimeout(type, 900);
  } else {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 600);
  }
}
type();

window.addEventListener("scroll", function () {
  const scrollProgress = document.getElementById("scroll-progress");
  const scrollTotal =
    document.documentElement.scrollHeight - window.innerHeight;
  const scroll = (window.scrollY / scrollTotal) * 100;
  scrollProgress.style.width = scroll + "%";
});

document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.16 }
  );
  reveals.forEach((el) => observer.observe(el));
});
const flyGif = document.getElementById("fly-gif");

let targetX = window.innerWidth / 2,
  targetY = window.innerHeight / 2;
let currentX = targetX,
  currentY = targetY;

const offsetX = 40;
const offsetY = -30;

document.addEventListener("mousemove", (e) => {
  flyGif.style.display = "block";
  targetX = e.clientX + offsetX;
  targetY = e.clientY + offsetY;
});

document.addEventListener("mouseleave", () => {
  flyGif.style.display = "none";
});

function animateGif() {
  // Interpolacja - "doganianie" kursora
  currentX += (targetX - currentX) * 0.15; // im bliżej 1, tym szybciej, im bliżej 0 - tym bardziej leniwie
  currentY += (targetY - currentY) * 0.15;
  flyGif.style.left = currentX + "px";
  flyGif.style.top = currentY + "px";
  requestAnimationFrame(animateGif);
}

animateGif();

//NAV
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
