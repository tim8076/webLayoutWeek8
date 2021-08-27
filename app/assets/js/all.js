
const swiperCourse = new Swiper('.swiper-course', {
  // Optional parameters
  loop: true,
  autoplay: true,
  spaceBetween: 30
});

const swiperCommentSm = new Swiper('.swiper-comment', {
  // Optional parameters
  loop: false,
  autoplay: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  grid: {
    rows: 3,
    fill: 'row',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row'
      },
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

const swiperTeachers = new Swiper('.swiper-teachers',{
  slidesPerView: 1,
  spaceBetween: 30,
  grid: {
    rows: 4,
    fill: 'row',
  },
  breakpoints: {
    768: {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: 'row',
      }
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: 'row',
      }
    }
  }
})