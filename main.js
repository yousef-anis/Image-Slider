const slides = document.querySelectorAll(".slider img");
const imgId = document.querySelector(".img-id");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const thumbnailsContainer = document.querySelector(".thumbnails-container");
thumbnailsContainer.style.gridTemplateColumns = `repeat(${slides.length} , 1fr)`;

let currentSlide = 0;

prevBtn.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

slides.forEach((slide, index) => {
  let thumbnail = slide.cloneNode();
  thumbnail.addEventListener("click", () => {
    goToSlide(index);
  });
  thumbnailsContainer.appendChild(thumbnail);
});

function goToSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
  updateSliderControls();
  updateActiveClassForThumbnails(currentSlide);
}

function updateSliderControls() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
  imgId.innerHTML = `Image ${currentSlide + 1} of ${slides.length}`;
}

function updateActiveClassForThumbnails(index) {
  thumbnailsContainer.querySelectorAll("img").forEach((thumbnail, i) => {
    thumbnail.classList.toggle("active", i === index);
  });
}
