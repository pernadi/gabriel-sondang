const targetDate = new Date("April 11, 2026 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerText =
    Math.floor((distance / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").innerText =
    Math.floor((distance / (1000 * 60)) % 60);

  document.getElementById("seconds").innerText =
    Math.floor((distance / 1000) % 60);

}, 1000);


//Change background image for hero section
// Daftar gambar background
const backgrounds = [
  'assets/wedding/wedding_17.jpg',
  'assets/wedding/wedding_18.jpg',
  'assets/wedding/wedding_19.jpg',
];

let current = 0;

const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');

let activeLayer = bg1;
let nextLayer = bg2;

function changeBackground() {
  nextLayer.style.backgroundImage = `url('${backgrounds[current]}')`;

  nextLayer.classList.add('active');
  activeLayer.classList.remove('active');

  // swap layer
  [activeLayer, nextLayer] = [nextLayer, activeLayer];

  current = (current + 1) % backgrounds.length;
}

// initial
changeBackground();

// interval
setInterval(changeBackground, 5000);

//animation fade
const elements = document.querySelectorAll('.fade');
const scrollContainer = document.querySelector('.phone-screen');

function showOnScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('active');
    }
  });
}

scrollContainer.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);