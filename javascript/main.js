// loading screen when content load
window.addEventListener("load", function () {
  let loader = document.querySelector(".screen-overlay");

  setTimeout(() => {
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", function () {
      document.body.removeChild("screen-overlay");
    });
  }, 1000); // add delay to load screen
});

// sound after click
document.addEventListener("click", function () {
  let audio = document.getElementById("myAudio");
  audio.play();
});
