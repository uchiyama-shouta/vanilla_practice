const fadeOption = {
  fill: "forwards",
  easing: "ease",
}

let open = false;

export function fadeOut(elm, duration) {
  elm.animate(
    {
      opacity: [1.0, 0.0],
    },
    {
      duration,
      ...fadeOption
    }
  );

  setTimeout(() => {
    elm.style.display = "none";
  }, duration);
}

export function fadeIn(elm,duration) {
    elm.style.display = "block";
    elm.animate(
      {
        opacity: [0.0, 1.0],
      },
      {
        duration,
        ...fadeOption
      }
    );
}

export function myFadeToggle(elm, duration) {
  console.log(open);
  if (open === false) {
    elm.classList.remove("js-none");
    elm.classList.add("js-block");
    elm.animate(
      {
        opacity: [0.0, 1.0],
      },
      {
        duration,
        ...fadeOption
      },
    );
    open = true;
  } else {
    elm.animate(
      {
        opacity: [1.0, 0.0],
      },
      {
        duration,
        ...fadeOption
      }
    );

    setTimeout(() => {
      elm.classList.remove("js-block");
      elm.classList.add("js-none");
      open = false
    }, duration);
  }
}
