document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});

let currentImageIndex = 0;
const images = [
  'assets/image/gambar1.jpg',
  'assets/image/gambar10.jpg',
  'assets/image/gambar11.jpg',
  'assets/image/gambar12.jpg',
  'assets/image/gambar13.JPG',
  'assets/image/gambar15.jpg',
  'assets/image/gambar16.jpg',
  'assets/image/gambar18.jpg',
  'assets/image/gambar19.jpg',
  'assets/image/gambar20.jpg',
  'assets/image/gambar17.jpg',
  'assets/image/gambar2.jpg',
  'assets/image/gambar3.jpg',
  'assets/image/gambar4.jpg',
  'assets/image/gambar5.jpg',
  'assets/image/gambar6.jpg',
  'assets/image/gambar7.jpg',
  'assets/image/gambar8.jpg',
  'assets/image/gambar9.jpg',
  'assets/image/gambar21.jpg',
  'assets/image/gambar22.jpg',
  'assets/image/gambar22.jpg',
  'assets/image/gambar22.jpg',
  'assets/image/gambar22.jpg'
];

function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = images[index];
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateLightboxImage();
}

function updateLightboxImage() {
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.style.opacity = 0;
  setTimeout(() => {
    lightboxImg.src = images[currentImageIndex];
    lightboxImg.style.opacity = 1;
  }, 150);
}

// 👇 Swipe Detection
let startX = 0;
let endX = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

lightbox.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 50; // minimal swipe distance
  if (startX - endX > threshold) {
    changeImage(1); // swipe left
  } else if (endX - startX > threshold) {
    changeImage(-1); // swipe right
  }
}

// Untuk desktop: swipe dengan mouse
let isDragging = false;
let mouseStartX = 0;
let mouseEndX = 0;

lightbox.addEventListener("mousedown", (e) => {
  isDragging = true;
  mouseStartX = e.clientX;
});

lightbox.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  mouseEndX = e.clientX;
  isDragging = false;
  handleMouseSwipe();
});

function handleMouseSwipe() {
  const threshold = 50; // px minimal
  if (mouseStartX - mouseEndX > threshold) {
    changeImage(1); // drag kiri
  } else if (mouseEndX - mouseStartX > threshold) {
    changeImage(-1); // drag kanan
  }
}

//Animasi teks class kotak-teks
const teks = "maafff yaaaa nanaaa, kalauu fotoo-fotoonya dii akuuu ndaaa banyakkk dann cumaa seadanyaa ajaa. tapiii setiapp momenn bersamamuu selaluu tersimpann di dalamm hatii akuu, ahayyy. bersamamu adalahh kenangann yangg palinggg indahhh.";
const container = document.querySelector(".kotak-teks");
let i = 0;

function typeText() {
    if (i < teks.length) {
        container.innerHTML += teks.charAt(i);
        i++;
        setTimeout(typeText, 80);
        //kecepatan mengetik (100ms per karakter)
    }
}
typeText();
