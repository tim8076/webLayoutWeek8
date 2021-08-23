
const swiperCourse = new Swiper('.swiper-course', {
  // Optional parameters
  loop: true,
  autoplay: true,
  spaceBetween: 30
});

const swiperCommentSm = new Swiper('.swiper-comment-sm', {
  // Optional parameters
  loop: false,
  autoplay: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30
});

const swiperCommentMd = new Swiper('.swiper-comment-md', {
  // Optional parameters
  loop: true,
  autoplay: true,
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 3,
      autoplay: false,
    }
  }
});

const swiperCourseChoose = new Swiper('.courseChoose', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 24,
  direction: 'vertical',
  breakpoints: {
    768: {
      direction: 'horizontal',
      spaceBetween: 30,
      slidesPerView: 2,
    },
    992: {
      direction: 'horizontal',
      slidesPerView: 3,
    }
  }
});