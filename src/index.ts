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

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});