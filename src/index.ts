console.log("Hello World!");

import "../src/index.scss"

import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

// init Swiper:
const s1 = new Swiper('.s1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
      delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const s2 = new Swiper('.s2', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar2',
      draggable: true,
      hide:false,
    },
    slidesPerView: 3,
    spaceBetween: 8,
});

const s3 = new Swiper('.s3', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.news-pagination',
    clickable:true,
    dynamicBullets: true,
    dynamicMainBullets:3,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbars',
    draggable: true,
    hide:false,
  },
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

function stickyMenu(el: Element) {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 0) {
      if (el.className.indexOf('scroll') < 0) {
        el.classList.add("scroll")
      }
    } else {
      el.className = el.className.replace('scroll', '');
    }
  }
  window.addEventListener("scroll", function() {
    stickyMenu(document.getElementById("header"))
  });