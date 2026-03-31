const navEntries = performance.getEntriesByType("navigation");
  if (navEntries.length > 0 && navEntries[0].type === "reload") {
    window.location.replace("index.html");
  }

  // Cegah user kembali ke halaman ini
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.location.replace("index.html");
  };

const boxes = document.querySelectorAll('.hero-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 }); // threshold 0.2 = 20% elemen terlihat

  boxes.forEach(box => observer.observe(box));


    // Ambil query parameter dari URL
    const params = new URLSearchParams(window.location.search);
    const nama = params.get("kepada") || "Tamu Undangan";

    // Tampilkan di elemen HTML
    document.getElementById("guestName").textContent = nama;


    //load screen
    window.addEventListener('load', function() {
      const loadingScreen = document.getElementById('loading-screen');
      
      // Fade out loading screen
      loadingScreen.style.opacity = '0';
      
      // Hapus dari DOM setelah transisi selesai
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 600);
    });



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



//animation fade
const elements = document.querySelectorAll('.fade');
const scrollContainer = document.querySelector('.phone-screen');

function showOnScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const containerHeight = scrollContainer.clientHeight;

    if (rect.top < containerHeight - 50 && rect.bottom > 0) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

scrollContainer.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
window.addEventListener('click', showOnScroll)

//load screen
window.addEventListener('load', function() {
      const loadingScreen = document.getElementById('loading-screen');
      
      // Fade out loading screen
      loadingScreen.style.opacity = '0';
      
      // Hapus dari DOM setelah transisi selesai
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 600);
    });

function copyNumber1() {
      const number = document.getElementById("account-number-bank1").innerText;
      navigator.clipboard.writeText(number)
        .then(() => {
          alert("Nomor berhasil disalin: " + number);
        })
        .catch(err => {
          console.error("Gagal menyalin: ", err);
        });
    }

function copyNumber2() {
      const number = document.getElementById("account-number-bank2").innerText;
      navigator.clipboard.writeText(number)
        .then(() => {
          alert("Nomor berhasil disalin: " + number);
        })
        .catch(err => {
          console.error("Gagal menyalin: ", err);
        });
    }

function openMaps() {
  const lat = 2.115354;
  const lng = 99.545097;

  window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
}
