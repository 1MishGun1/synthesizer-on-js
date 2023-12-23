function handleKeyDown(event) {
  let keyElement = document.querySelector('[data-key="' + event.keyCode + '"]');
  if (keyElement) {
    playSound(keyElement.dataset.key);
  }
}

function playSound(keyCode) {
  let audio;

  if (keyCode === "65") {
    audio = new Audio("audio/do.mp3");
  } else if (keyCode === "83") {
    audio = new Audio("audio/re.mp3");
  } else if (keyCode === "68") {
    audio = new Audio("audio/mi.mp3");
  } else if (keyCode === "70") {
    audio = new Audio("audio/fa.mp3");
  } else if (keyCode === "71") {
    audio = new Audio("audio/sol.mp3");
  } else if (keyCode === "72") {
    audio = new Audio("audio/lja.mp3");
  } else if (keyCode === "74") {
    audio = new Audio("audio/si.mp3");
  }

  if (audio) {
    audio.play();
  }
}

function init() {
  let keys = document.querySelectorAll(".key");

  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function () {
      playSound(keys[i].dataset.key);
    });
  }
  document.addEventListener("keydown", handleKeyDown);
}

init();
