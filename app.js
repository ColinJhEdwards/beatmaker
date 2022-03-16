class Drumkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".playBtn");
    this.index = 0;
  }
  repeat() {
    console.log("test");
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
