function smoothScroll(target, duration) {
   // 移動先のDOM取得
   let targetElm =  target === 'body' ? document.body : document.querySelector(target);
   // 移動先の位置
   let targetPosition = targetElm.getBoundingClientRect().top;
   // 今のスクロール値
   let startPosition = window.pageYOffset;
   var startTime = null;

   function animation(currentTime) {
      if(startTime === null) startTime = currentTime;
      // 経過時間？
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, targetPosition, duration);
      scroll(0, run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
   }

   function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
   };
   requestAnimationFrame(animation);
}