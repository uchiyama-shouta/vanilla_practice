"use strict";

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

window.addEventListener("scroll", function () {
  let scrollValue = window.pageYOffset;
  let windowHeight = window.innerHeight;

  if (scrollValue >= windowHeight) {
    backToTop.classList.add("in");
  } else {
    backToTop.classList.remove("in");
  }
});

backToTop.addEventListener('click', () => {
  smoothScroll('body', 700)
})

/* =================== */
/*   	  hamburger      */
/* =================== */
const headerNav = document.querySelector(".header-nav");

function widthCheck() {
  if (window.innerWidth < 900) {
    headerNav.style.display = "none";
  } else {
    headerNav.style.display = "block";
  }
}

widthCheck();
window.addEventListener("resize", () => {
  widthCheck();
});

const hamburger = document.getElementById("hamburger");
const fadeToggle = () => {
  if (window.innerWidth < 900) {
    myFadeToggle(headerNav, 500);
  }
};
hamburger.addEventListener("click", function () {
  fadeToggle();
  this.classList.toggle("active");
  document.body.classList.toggle("hidden");
});

document.querySelectorAll(".top a").forEach(function(a) {
  // 押した後のエフェクト
  a.addEventListener("click", function(e){
    e.preventDefault();
    hamburger.classList.remove("active");
    fadeToggle();
    document.body.classList.remove("hidden");
    // スクロール
    let id = e.target.getAttribute("href");
    smoothScroll(id, 700)
  });
});

/* =================== */
/*    	  header       */
/* =================== */
window.addEventListener("scroll", function () {
  let scrollValue = this.pageYOffset;
  let windowHeight = this.innerHeight;

  const header = document.querySelector("header");
  if (scrollValue >= windowHeight) {
    header.classList.add("fix");
  } else {
    header.classList.remove("fix");
  }
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
  myFadeOut(slides[nowPage], 2000);
  myFadeIn(slides[nextPage], 2000);
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
const io = new IntersectionObserver(callback, option);
triggers.forEach((elm) => {
  // 監視対象として登録
  io.observe(elm);
});

/* =================== */
/*    carousel panel   */
/* =================== */

const carouselWidth = document.querySelector("#carousel li").clientWidth;//
const length = document.querySelectorAll(".carousel-item").length;
const innerWidth = carouselWidth * length;//
// アニメーションの時間
const time = 400;
//ul
const carouselinner = document.getElementById("carousel");
// prevのDOM取得
const prev = document.getElementById("prev");
// nextのDOM取得
const next = document.getElementById("next");
// currentの頭文字
let c = 1;
prev.addEventListener("click", () => {
  const options = {
    duration: time,
    fill: 'forwards',
    easing: 'ease'
  }
  if (c === 1) {
    carouselinner.animate({
      transform: [
        'translate3d(0px, 0px, 0px)',
        `translate3d(${-innerWidth + carouselWidth}px, 0px, 0px)`
      ]
    },options)
    // 7
    c = length;
  } else {
    carouselinner.animate({
      transform: [
        // 相対位置ではなく、絶対位置に移動する。
        `translate3d(${-(c-1) * carouselWidth}px, 0px, 0px)`,
        `translate3d(${-(c-2) * carouselWidth}px, 0px, 0px)`
      ]
    },options)
    c--;
  }
});

next.addEventListener("click", () => {
  const options = {
    duration: time,
    fill: 'forwards',
    easing: 'ease'
  }
  if (c === length) {
    carouselinner.animate({
      transform: [
        `translate3d(${-innerWidth + carouselWidth}px, 0px, 0px)`,
        'translate3d(0px, 0px,0px)'
      ]
    },options)
    c = 1;
  } else {
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
});

/* =================== */
/*       parallax      */
/* =================== */

const parallaxs = document.querySelectorAll('.parallax');
window.addEventListener('scroll', function() {
  let scrollValue = -this.pageYOffset / 50;
  
  parallaxs.forEach(elm => {
    elm.style.transform = `translateY(${scrollValue}%)`;
  })
})

