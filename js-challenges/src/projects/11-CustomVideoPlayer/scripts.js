// Get Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build Functions

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updatePlayBtn() {
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

// For reference: Special characters/symbols
// const symbol = String.fromCodePoint(0x25ba);
// console.log(symbol);

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function fill() {
  const fillPercent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = fillPercent + "%";
}

function changeSilder() {
  //   if (this.name === "volume") {
  //     video.volume = this.value;
  //   }
  //   if (this.name === "playbackRate") {
  //     video.playbackRate = this.value;
  //   }

  video[this.name] = this.value;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Hook Up Event Listeners

video.addEventListener("click", togglePlay); // play/pause when window is clicked
video.addEventListener("play", updatePlayBtn); // change from play to paused symbol vv
video.addEventListener("pause", updatePlayBtn);
video.addEventListener("timeupdate", fill);
// setInterval(fill, 50);

toggle.addEventListener("click", togglePlay); // play/pause when button is clicked
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", changeSilder));
ranges.forEach(range => range.addEventListener("mousemove", changeSilder));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", e => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

// const video = document.querySelector("fullscreen");
function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    /* IE/Edge */
    video.msRequestFullscreen();
  }
}
