"use strict";

const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 10000;
// circle with 5 slices
// breathe in/out = 2 slices
// hold = 1 slice
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// console.log(breatheTime, holdTime);

function breathAnimation() {
  text.innerText = "Breathe in!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

breathAnimation();
setInterval(breathAnimation, totalTime);
