//aos 套件
AOS.init({
  duration: 1800,
  easing: 'ease',
});


// //header scroll
// const nav = document.querySelector('[data-header]');
// function scrollHandler() {
//   if( window.scrollY > 76 ) {
//     nav.classList.add('top')
//   } else {
//     nav.classList.remove('top')
//   }
// }

// window.addEventListener('scroll', scrollHandler)


//swiper setting
const swiperCourse = new Swiper('.swiper-course', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  slidesPerView: 1.4,
});

const swiperCommentSm = new Swiper('.swiper-comment', {
  // Optional parameters
  navigation: {
    nextEl: ".swiper-comment-next",
    prevEl: ".swiper-comment-prev",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  grid: {
    rows: 3,
    fill: 'row',
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
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
  slidesPerView: 1,
  spaceBetween: 24,
  grid: {
    rows: 3,
    fill: 'row',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
    992: {
      slidesPerView: 3,
    }
  }
});

const swiperTeachers = new Swiper('.swiper-teachers',{
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  grid: {
    rows: 4,
    fill: 'row',
  },
  breakpoints: {
    768: {
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

const swiperRecommend = new Swiper('.swiper-recommend',{
  slidesPerView: 1.25,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4.25,
    }
  }
})