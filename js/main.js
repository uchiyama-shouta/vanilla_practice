import { fadeIn, fadeOut, myFadeToggle } from "./fade.js"

/* =================== */
/*        wipein       */
/* =================== */

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".wipe").forEach(elm => {
    elm.classList.add("in");
  });
})

/* =================== */
/*     back-to-top     */
/* =================== */

const backToTop = document.getElementById("back-to-top");
const header = document.querySelector("header");

const ioTop = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    header.classList.remove("fix");
    backToTop.classList.remove("in");
  } else {
    header.classList.add("fix");
    backToTop.classList.add("in");
  }
});

ioTop.observe(document.getElementById("top"))

/* =================== */
/*   	  hamburger      */
/* =================== */
const headerNav = document.querySelector(".header-nav");

const hamburger = document.getElementById("hamburger");
let open = false;

hamburger.addEventListener("click", (e) => {
  if(open === false) {
    fadeIn(headerNav, 500)
    open = true;
    e.target.classList.add("active");
    document.body.classList.add("hidden");
  } else {
    if(window.innerWidth <= 900) {
      fadeOut(headerNav, 500)
    }
    open = false;
    e.target.classList.remove("active");
    document.body.classList.remove("hidden");
  }
});

document.querySelectorAll(".top a").forEach((a) => {
  // 押した後のエフェクト
  a.addEventListener("click", () => {
    hamburger.classList.remove("active");
    if(window.innerWidth <= 900) {
      fadeOut(headerNav, 500)
    }
    document.body.classList.remove("hidden");
  });
});

/* =================== */
/*   	  slideshow      */
/* =================== */

let nowPage = 0; // 現在の画像
let nextPage = 1; // 次の画像
const slides = document.querySelectorAll("#slideshow img");
const slideLength = slides.length; // 4
const showTime = 3500; // 3s

const slideShow = () => {
  nextPage = (nowPage + 1) % slideLength;
  fadeOut(slides[nowPage], 2000);
  fadeIn(slides[nextPage], 2000);
  nowPage = nextPage;
};

setInterval(slideShow, showTime);

/* =================== */
/*   	   slidein       */
/* =================== */

const triggers = document.querySelectorAll(".slide-trigger");
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll(".slide").forEach((target) => {
        target.classList.add("in");
      });
      observer.unobserve(entry.target);
    }
  });
};
const option = {
  rootMargin: "0px 0px -300px 0px",
};
const ioSlide = new IntersectionObserver(callback, option);
triggers.forEach((elm) => {
  // 監視対象として登録
  ioSlide.observe(elm);
});

/* =================== */
/*    carousel panel   */
/* =================== */

const carouselWidth = document.querySelector("#carousel li").clientWidth;
const length = document.querySelectorAll(".carousel-item").length;
const innerWidth = carouselWidth * length;

const carouselinner = document.getElementById("carousel"); // ul
// prevのDOM取得
const prev = document.getElementById("prev");
// nextのDOM取得
const next = document.getElementById("next");

let c = 1;

const options = {
  duration: 400,
  fill: 'forwards',
  easing: 'ease'
}

const slide = {
  firstPosition: '0px, 0px, 0px',
  lastPosition : `${-innerWidth + carouselWidth}px, 0px, 0px`,
  toFirst: () => {
    carouselinner.animate({
      transform: [
        `translate3d(${slide.lastPosition})`,
        `translate3d(${slide.firstPosition})`,
      ]
    },options)
    c = 1;
  },
  toLast: () => {
    carouselinner.animate({
      transform: [
        `translate3d(${slide.firstPosition})`,
        `translate3d(${slide.lastPosition})`,
      ]
    },options)
    c = length;
  },
  toPrev: () => {
    carouselinner.animate({
      transform: [
        // 相対位置ではなく、絶対位置に移動する。
        `translate3d(${-(c-1) * carouselWidth}px, 0px, 0px)`,
        `translate3d(${-(c-2) * carouselWidth}px, 0px, 0px)`
      ]
    },options)
    c--;
  },
  toNext: () => {
    carouselinner.animate({
      transform: [
        // 相対位置ではなく、絶対位置に移動する。
        // carouselWidth = 370
        // innerWidth = carouselWidth * length;
        `translate3d(${-(c-1) * carouselWidth}px, 0px, 0px)`,
        `translate3d(${-c * carouselWidth}px, 0px, 0px)`
      ]
    },options)
    c++
  }
}

prev.addEventListener("click", () => {
  if (c === 1) {
    slide.toLast()
  } else {
    slide.toPrev()
  }
});

next.addEventListener("click", () => {
  if (c === length) {
    slide.toFirst()
  } else {
    slide.toNext()
  }
});

/* =================== */
/*       parallax      */
/* =================== */

const parallaxes = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
  let scrollValue = -window.scrollY / 50;

  parallaxes.forEach(elm => {
    elm.style.transform = `translateY(${scrollValue}%)`;
  })
})
