class SoundKit {
  constructor() {
    this.playBtn = document.querySelector(".playButton");
    this.pads = document.querySelectorAll(".pad");
    this.step = 8;
  }
  repeat() {
    console.log(this.step);
  }
  // when this function is ran it will have an interval for how often the looping function should run
  play() {
    setInterval(this.repeat, 1000);
  }
}

const soundKit = new SoundKit();

soundKit.pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    pad.classList.toggle("active");
  });
});

soundKit.playBtn.addEventListener("click", soundKit.play);
