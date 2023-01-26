var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    436: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    844: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },
});

let bell = document.querySelector("#bell");
let notify = document.querySelector("#notify-item");

bell.addEventListener("click", () => {
  notify.classList.toggle("hidden");
});
