class Drumkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".playBtn");
    this.index = 0;
  }
  activePad() {
    this.classList.add("active");
  }
  repeat() {
    let step = this.index % 8;
    const currentPad = document.querySelectorAll(`.b${step}`);
    currentPad.forEach((pad) => {
      pad.style.animation = `pulse 0.5s alternate ease-in-out 2`;
    });
    console.log(step);
    this.index++;
  }
  start() {
    setInterval(() => {
      this.repeat();
    }, 1000);
  }
}

const drumKit = new Drumkit();

drumKit.playBtn.addEventListener("click", () => {
  drumKit.start();
});
