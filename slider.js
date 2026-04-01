const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');

let slideIndex = 0;

function showSlide(index) { slidesContainer.style.transform = `translateX(-${index * 100}%)`; }

nextSlideBtn.addEventListener('click', () => { slideIndex = (slideIndex + 1) % slides.length; showSlide(slideIndex); });
prevSlideBtn.addEventListener('click', () => { slideIndex = (slideIndex - 1 + slides.length) % slides.length; showSlide(slideIndex); });

setInterval(() => { slideIndex = (slideIndex + 1) % slides.length; showSlide(slideIndex); }, 4000);

showSlide(slideIndex);
