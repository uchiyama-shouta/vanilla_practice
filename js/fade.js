function myFadeOut(elm, duration) {
   // 単純に関数を実行した場合
   if (this === window) {
     elm.animate(
       {
         opacity: [1.0, 0.0],
       },
       {
         duration: duration,
         fill: "forwards",
         easing: "ease",
       }
     );
 
     setTimeout(() => {
       elm.style.display = "none";
     }, duration);
   } else {
     // イベントリスナー内で関数を実行した場合
     this.elm.animate(
       {
         opacity: [1.0, 0.0],
       },
       {
         duration: this.duration,
         fill: "forwards",
         easing: "ease",
       }
     );
 
     setTimeout(() => {
       this.elm.style.display = "none";
     }, this.duration);
   }
 }

 function myFadeIn(elm,duration) {
   if(this === window) {
     // 単純に関数を実行した場合
     elm.style.display = "block";
     elm.animate(
       {
         opacity: [0.0, 1.0],
       },
       {
         duration: duration,
         fill: "forwards",
         easing: "ease",
       }
     );
   } else {
     // イベントリスナー内で関数を実行した場合
     this.elm.style.display = "block";
     this.elm.animate(
       {
         opacity: [0.0, 1.0],
       },
       {
         duration: this.duration,
         fill: "forwards",
         easing: "ease",
       }
     );
   }
 }
 
 function myFadeToggle(elm, duration) {
   if(this === window) {
     // 単純に関数を実行した場合
     const options = {
       duration: duration,
       fill: "forwards",
       easing: "ease",
     };
     if (elm.style.display === "none") {
       elm.style.display = "block";
       elm.animate(
         {
           opacity: [0.0, 1.0],
         },
         options
       );
     } else {
       elm.animate(
         {
           opacity: [1.0, 0.0],
         },
         options
       );
   
       setTimeout(() => {
         elm.style.display = "none";
       }, duration);
     }
   } else {
     // イベントリスナー内で関数を実行した場合
     const options = {
       duration: this.duration,
       fill: "forwards",
       easing: "ease",
     };
     if (this.elm.style.display === "none") {
       this.elm.style.display = "block";
       this.elm.animate(
         {
           opacity: [0.0, 1.0],
         },
         options
       );
     } else {
       this.elm.animate(
         {
           opacity: [1.0, 0.0],
         },
         options
       );
   
       setTimeout(() => {
         this.elm.style.display = "none";
       }, this.duration);
     }
   }
 }